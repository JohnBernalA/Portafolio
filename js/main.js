function OcultarProyectos(){  //ocultar resumen abierto de los proyectos 
	for (var i = 1; i <= 3; i++) {		
		var divProyectos = document.getElementById('proyecto'+i);	
		if (divProyectos == null) {
		}else if (divProyectos.style.display !='none') { //omite si no hay más de dos proyectos
			divProyectos.style.display = 'none';	
		}	
	}	
}

function MostrarProyecto1 () { //Mostrar resumen Proyeto 1
	OcultarProyectos();
	var divProyecto1 = document.getElementById('proyecto1');
		/*console.log('proyecto1');*/
		divProyecto1.style.display = 'block';
}

function MostrarProyecto2 () { //Mostrar resumen Proyeto 2
	OcultarProyectos();
	var divProyecto2 = document.getElementById('proyecto2');
		divProyecto2.style.display = 'block';
}

function MostrarProyecto3 () { //Mostrar resumen Proyeto 3
	OcultarProyectos();
	var divProyecto3 = document.getElementById('proyecto3');
		divProyecto3.style.display = 'block';
}

