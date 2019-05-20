let cursos = [{
	id:1,
	nombre: 'Introduccion a la programacion',
	duracion: '3 semanas',
	valor: 25000
},{
	id:2,
	nombre: 'Algoritmos',
	duracion: '1 mes',
	valor: 20000
},{
	id:3,
	nombre: 'Principios de matematicas',
	duracion: '2 semanas',
	valor: 0
},{
	id:4,
	nombre: 'Programacion web',
	duracion: '6 meses',
	valor: 150000
}];

function imprimir(cursos){
	for (var i = 0; i < cursos.length; i++){
	(function(i){
		setTimeout(function(){	
		console.log('Id: '+ cursos[i].id);
		console.log('Nombre: ' + cursos[i].nombre);
		console.log('Duracion: ' + cursos[i].duracion);
		console.log('Valor: ' + cursos[i].valor + '\n');
	}, 2000*(i));
	})(i);
}	
}


module.exports = {
	cursos,
	imprimir
};

