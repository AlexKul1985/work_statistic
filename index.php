<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');


      
$_POST = json_decode(file_get_contents('php://input'), true);

if($_POST['flag'] === 'get Chars'){
	
$data = [
'labels' => ['22.01.2018', '16.03.2018','03.04.2018','12.05.2018'],
 'datasets' => array(
 	[ 
 		'label' => 'Transiver/Resiver',
 		'backgroundColor' => 'rgba(255,30,45,0.8)',
 		'data' => [90, 100, 88,90]
 	],
 	[ 
 		'label' => 'Размах-4КВ',
 		'backgroundColor' => '#FFF81E',
 		'data' => [90, 60, 98,90]
 	]
 )
];

echo json_encode($data);
}
else if($_POST['flag'] === 'get Users'){
	$data = [
          '0' => [
            'action' => 'memory',
            'title' => 'Resiver 255',
            'items' => ['0' => 
              [ 'title' => 'List Item' ]
            ]
        ]
          ,
          '1' => [
            'action' => 'memory',
            'title' => 'Transiver 337',
            'items' => ['0' => 
              [ 'title' => 'List Item' ]
            ]
        ]
          ,
          '2' => [
            'action' => 'memory',
            'title' => 'Resiver 266',
            'items' => ['0' => 
              [ 'title' => 'Русский текст' ]
            ]
        ],
          '4' => [
            'action' => 'memory',
            'title' => 'Transiver 286',
            'items' => ['0' => 
              [ 'title' => 'List Item' ]
            ]
        ]
          ,
          '5' => [
            'action' => 'memory',
            'title' => 'Transiver 289',
            'items' => ['0' => 
              [ 'title' => 'List Item 111' ]
            ]
        ]
         
        ];
        echo json_encode($data);
}


?>