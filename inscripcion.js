const datos = {
	id: {
		demand: true,
		alias:'i'
	},
	nombreInteresado: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}
}



const argv = require('yargs')
			.command('inscribir','id, nombre y cedula son obligatorios', datos)
			.argv

const id =argv.id;
const nombre = argv.n;
const cedula = argv.c;

const {cursos,imprimir} = require('./cursos');
const fs = require('fs');


if(id == undefined){
	console.log('Lista de cursos disponibles \n');
	imprimir(cursos);
}else{
	let busqueda = cursos.find(function(cursoId){
	return cursoId.id == id})
	if(busqueda == undefined){
		console.log('El id ingresado no corresponde a uno de los cursos ofertados');
	}else{
	 	console.log('Id: '+ busqueda.id);
		console.log('Nombre: ' + busqueda.nombre);
		console.log('Duracion: ' + busqueda.duracion);
		console.log('Valor: ' + busqueda.valor);
		texto = 'Id: ' + busqueda.id + '\r\n' +
			'Nombre: ' + busqueda.nombre + '\r\n' + 
			'Duracion: ' + busqueda.duracion +'\r\n' +
			'Valor: ' + busqueda.valor + '\r\n'+
			'Nombre interesado: ' + nombre +'\r\n' +
			'Cedula: ' + cedula;
			fs.writeFile('inscripcion.txt',texto,(err)=>{
				if(err) throw(err);
				console.log('se ha creado el archivo')
		});

		}
	}



