<?php
define('CLI_SCRIPT', true);
require('/var/www/html/config.php');
require_once($CFG->dirroot . '/course/lib.php');

$catFormaciones = $DB->get_record('course_categories', ['name' => 'Formaciones en Numerología Óntica']);
$catEspeciales = $DB->get_record('course_categories', ['name' => 'Especializaciones']);

$courses = [
    [
        'fullname' => 'Primer Nivel – Numerología de Base Óntica',
        'shortname' => 'NIVEL1',
        'category' => $catFormaciones ? $catFormaciones->id : 1,
        'summary' => '12 a 16 Clases: Estudio profundo del mapa numérico, mandatos del hogar y decodificación transpersonal.',
        'numsections' => 16
    ],
    [
        'fullname' => 'Segundo Nivel – Decodificación y Transmutación',
        'shortname' => 'NIVEL2',
        'category' => $catFormaciones ? $catFormaciones->id : 1,
        'summary' => '12 a 16 Clases: Técnicas avanzadas de integración de sombra y reprogramación óntica.',
        'numsections' => 16
    ],
    [
        'fullname' => 'Tercer Nivel – Maestría y Consultoría Transpersonal',
        'shortname' => 'NIVEL3',
        'category' => $catFormaciones ? $catFormaciones->id : 1,
        'summary' => '12 a 16 Clases: Acompañamiento profesional y herramientas clínicas.',
        'numsections' => 16
    ],
    [
        'fullname' => 'Cuarto Nivel – Integración de la Conciencia Óntica',
        'shortname' => 'NIVEL4',
        'category' => $catFormaciones ? $catFormaciones->id : 1,
        'summary' => '12 a 16 Clases: Síntesis arquetípica de maestría.',
        'numsections' => 16
    ],
    [
        'fullname' => 'Seminario Anual 2026: Frecuencias y Arquetipos',
        'shortname' => 'SEM2026',
        'category' => $catEspeciales ? $catEspeciales->id : 1,
        'summary' => 'Seminario Anual 2026.',
        'numsections' => 4
    ],
    [
        'fullname' => 'Seminario 2: Transmutación y Mandatos del Hogar',
        'shortname' => 'SEM2',
        'category' => $catEspeciales ? $catEspeciales->id : 1,
        'summary' => 'Seminario temático intensivo.',
        'numsections' => 4
    ],
    [
        'fullname' => 'Seminario 3: Sanación de Linaje y Arquetipos',
        'shortname' => 'SEM3',
        'category' => $catEspeciales ? $catEspeciales->id : 1,
        'summary' => 'Seminario temático intensivo.',
        'numsections' => 4
    ],
    [
        'fullname' => 'Seminario 4: Síntesis Óntica de la Conciencia',
        'shortname' => 'SEM4',
        'category' => $catEspeciales ? $catEspeciales->id : 1,
        'summary' => 'Seminario temático intensivo.',
        'numsections' => 4
    ],
];

foreach ($courses as $cData) {
    $existing = $DB->get_record('course', ['shortname' => $cData['shortname']]);
    if (!$existing) {
        $cData['format'] = 'topics';
        $cData['enablecompletion'] = 1;
        $course = create_course((object)$cData);
        echo "Curso creado: " . $course->fullname . PHP_EOL;
    } else {
        echo "Curso ya existente: " . $existing->fullname . PHP_EOL;
    }
}
