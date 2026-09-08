<?php
define('CLI_SCRIPT', true);
require('/var/www/html/config.php');
require_once($CFG->dirroot . '/course/lib.php');

$categories = [
    ['name' => 'Formaciones en Numerología Óntica', 'description' => 'Cursos completos de Primer, Segundo y Tercer Nivel.'],
    ['name' => 'Especializaciones', 'description' => 'Talleres avanzados y especializaciones.'],
    ['name' => 'Clases Gratuitas & Comunidad', 'description' => 'Eventos públicos y jornadas abiertas.']
];

foreach ($categories as $cat) {
    $existing = $DB->get_record('course_categories', ['name' => $cat['name']]);
    if (!$existing) {
        $newcat = core_course_category::create([
            'name' => $cat['name'],
            'description' => $cat['description'],
            'parent' => 0
        ]);
        echo 'Categoría creada: ' . $newcat->name . PHP_EOL;
    }
}
