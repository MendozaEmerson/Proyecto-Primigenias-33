#!/bin/bash
set -e

echo "1. Deteniendo contenedores de Moodle..."
docker compose -f docker-compose.prod.yml stop crisol-moodle-app crisol-moodle-db || true
docker compose -f docker-compose.prod.yml rm -f crisol-moodle-app crisol-moodle-db || true

echo "2. Recreando volumenes limpios..."
docker volume rm primigenias33_moodle_app_data primigenias33_moodle_db_data primigenias33_moodledata_var || true
docker volume create primigenias33_moodle_app_data
docker volume create primigenias33_moodle_db_data
docker volume create primigenias33_moodledata_var

echo "3. Extrayendo codigo y datos..."
docker run --rm -v primigenias33_moodle_app_data:/volume -v $(pwd):/backup ubuntu tar xzf /backup/moodle_code_backup.tar.gz -C /volume
docker run --rm -v primigenias33_moodledata_var:/volume -v $(pwd):/backup ubuntu tar xzf /backup/moodledata_backup.tar.gz -C /volume

echo "4. Actualizando config.php con las credenciales del VPS..."
docker run --rm -v primigenias33_moodle_app_data:/volume ubuntu sed -i "s/crisol_moodle_pass_2026/CrisolMoodleDBPass2026!/g" /volume/config.php
docker run --rm -v primigenias33_moodle_app_data:/volume ubuntu sed -i "s/http:\/\/localhost:8085/http:\/\/194.163.144.149:8085/g" /volume/config.php

echo "5. Iniciando Base de Datos..."
docker compose -f docker-compose.prod.yml up -d crisol-moodle-db
echo "Esperando 15 segundos a que la base de datos inicie por completo..."
sleep 15

echo "6. Restaurando copia de la base de datos..."
docker cp moodle_db_backup.sql crisol-moodle-db:/tmp/moodle_db_backup.sql
docker exec crisol-moodle-db sh -c "mysql -u moodleuser -pCrisolMoodleDBPass2026! moodle < /tmp/moodle_db_backup.sql"

echo "7. Iniciando Moodle..."
docker compose -f docker-compose.prod.yml up -d crisol-moodle-app

echo "8. Reemplazando URLs absolutas en la base de datos..."
echo "Esperando 10 segundos a que Moodle inicie..."
sleep 10
docker exec crisol-moodle-app php admin/cli/replace.php --non-interactive --search=http://localhost:8085 --replace=http://194.163.144.149:8085

echo "========================================="
echo "Migracion completada exitosamente."
echo "Puedes acceder a http://194.163.144.149:8085"
echo "========================================="
