/*carga el texto de las paginas*/

function CargarTexto (txt){ 
	switch (txt) {
		case 0:
			break;

		case 1:/*pag Index*/
			document.getElementById("parrafo1").innerHTML = "Me complace que visites mi página, en la cual muestro de manera general mis logros profesionales e información de mi perfil laboral, para que conozcas algunos aspectos sobre mí y puedas hacerte una idea de mis habilidades y conocimientos conocer el profesional que soy.<br><br><em> Atentamente:  <b>  John Bernal </b></em>";			
			break;

		case 2:/*pag Desarrollo*/			
			document.getElementById("tarj1").innerHTML ="- Centraliza información. <br>- Registro de personal. <br>- Registro de socios. <br>- Registra actividades y responsables. <br>- Seguimiento tiempos de vida. <br>- Control de cambios de estado. <br>- Generación de Reportes. <br>";	
			document.getElementById("tarj2").innerHTML ="- Centraliza información. <br>- Registro de empleados. <br>- Registro de clientes. <br>- Registro de materia prima. <br>- Registro de existencias. <br>- Control de estado de los productos. <br>- Calculo del costo final. <br> - Reporte de estadisticas";	
			document.getElementById("tarj3").innerHTML ="- Generación de archivos y directorios. <br>- Cargar información Externa. <br>- Procesos de validación automáticos. <br>- Mensajes emergentes informativos. <br>- Creación automática de consultas SQL. <br>- Conexión con Bases de Datos. <br>- Diseño de Formularios y ventanas. <br>";	
			document.getElementById("proy1").innerHTML ="Proyecto de Desarrollo SistemaCR: <br> <br> Es un sistema de control de información, con el cual se centraliza la información que se maneja dentro de la organización, para poder realizar consultas de manera eficiente y oportuna. <br> <br> Se pueden administrar los datos de los afiliados o incluir nuevos integrantes, esto se puede realizar desde un dispositivo conectado a internet y con las credenciales correctas. <br> <br> También administrar la información de empleados, lideres pertenecientes al sistema. Y se tiene un control de necesidades y actividades a desarrollar dentro de las labores diarias, con información detallada para coordinar adecuadamente la programación del personal y el registro del proceso llevado durante el desarrollo de estas. <br><br> Se puede generar un reporte de cualquier consulta solicitada en cuanto a actividades o necesidades. Además, para la inscripción de nuevos afiliados existe un formato el cual se puede imprimir como constancia de la afiliación, con la normatividad impresa al respaldo. Al llenar este formato los datos se almacenan en el sistema, evitando el uso de formularios impresos vacíos para la afiliación.  ";	
			document.getElementById("proy2").innerHTML ="Proyecto de Desarrollo SisCCFP: <br> <br> es un sistema diseñado para organizar de forma sistematizada procesos manuales, facilitando el ingreso, administración y uso de la información del negocio, de manera eficiente e integrando la información en un solo punto para controlar el flujo diario tanto de productos, materia prima y ventas, además de organizar la información de empleados, clientes y proveedores.";	
			document.getElementById("proy3").innerHTML ="Proyectos de Desarrollo Visual Basic para Aplicaciones: <br> <br> Diseñe formatos con los cuales se podía tener un control de forma visual de eventos como lo era la hora de transmisión de más de cien oficinas de recaudo bancario, y los horarios estipulados para el envió de información a clientes internos y externos.   Por medio de código se controlaban aspectos como incoherencias entre la información recibida y la almacenada en Base de datos. <br> <br> Para facilitar procesos diarios repetitivos, diseñe formularios con controles por medio de los cuales se podían generar archivos en rutas especificas locales o en un servidor con nombres genéricos y estandarizados por los clientes, evitando errores u omisiones al generarlos manualmente.<br> <br> Los formularios tienen ayuda visual para que cualquier usuario del archivo pueda realizar el proceso siguiendo los pasos registrados y recomendaciones automáticas. <br> <br> También al cargar información de archivos planos de intercambio externos como por ejemplo Asobancaria 98 o 2001 se valida su tamaño, número de líneas, columnas, valores, fechas y caracteres no compatibles. <br>  ";	

			break;

		case 3:/*pag Bases de Datos*/			
			document.getElementById("tarj1").innerHTML ="- Diseño relacional <br> - Tablas de Auditoria <br> - Campos de contraseña cifrados <br> - Disparadores para seguridad y autocompleado <br> - Procedimientos Almacenados para procesos repetitivos <br> - Eventos para Copias de respaldo automáticas";	
			document.getElementById("tarj2").innerHTML ="- Modelo relacional <br> - Procedimientos almacenados para automatizar tareas complejas <br> - Disparadores que realizan calculos y actualizaciónes internas <br> - Tablas de control y Auditoria <br> ";	
			document.getElementById("tarj3").innerHTML ="- Lenguaje manipulación de datos (DML)<br>- Lenguaje definición de datos (DDL)<br>- Disparadores.<br>- Procedimientos almacenados<br>- Funciones<br>- Jobs<br>- Backup<br>- Relaciones e Indices <br>- Control de Usuarios y esquemas";	
			document.getElementById("tarj4").innerHTML ="- Instalación de Motores. <br>- Configuración de los servicios. <br>- Servicio Microsoft SQL Server. <br>- Servicio MySQL. <br>- Servicio MariaDB. <br>- Servicio Oracle. <br>- Servicio SQLite. <br>";	
			document.getElementById("proy1").innerHTML =" Base de Datos SistemaCR: <br> <br> La base de datos tiene como objetivo centralizar la infomración de forma segura y eficiente. Usando procedimientos almacenados y funciones para facilitar procesos habituales, además por ser un sistema en línea esisten disparadores en las tablas principales, para almacenar información de acciones no autorizadas de un usuario dentro del sistema, y tener un respaldo de datos prioritarios modificados o eliminados.";	
			document.getElementById("proy2").innerHTML =" Base de Datos SisCCFP: <br> <br> es un sistema diseñado para organizar de forma sistematizada procesos manuales, facilitando el ingreso, administración y uso de la información del negocio, de manera eficiente e integrando la información en un solo punto para controlar el flujo diario tando de productos, materia prima y ventas, además de organizar la información de empleados, clientes y proveedores.";				
			break;

		case 4:/*pag Soporte*/			
			document.getElementById("tarj1").innerHTML ="- Soporte app WEB y de escritorio. <br>- Capacitación usuarios. <br>- Procesos y funciones en Bases de datos. <br>- Generación de Reportes. <br>- Generación archivos Planos iso 98 y 2001. <br>- Actualización código fuente.<br>";	
			document.getElementById("tarj2").innerHTML ="- Instalación de servicios. <br>- Configuración. <br>- Instalación de aplicaciones WEB. <br>- Internet Information Server. <br>- Apache (Xampp). <br>- Registro de Componentes. <br>";	
			document.getElementById("tarj3").innerHTML ="- Generación de Reportes. <br>- Creación de Formularios. <br>- Macros (Procesos automatizados). <br>- Uso de funciones y formulas avanzadas. <br>- Formatos Condicionales. <br>- Conexión con Bases de Datos. <br>- Intereacción con archivos externos. <br>";	
			document.getElementById("tarj4").innerHTML ="- Configuracion VPN. <br>- VPN Cisco. <br>- VPN Windows. <br>- Heramientas Soporte Remoto. <br>- Transferencia de archivos. <br>- Configuración PC's para acceso remoto. <br>";			
			document.getElementById("tarj5").innerHTML ="- Instalación Windows. <br>- Administración de Usuarios <br>- Instalación Aplicaciones. <br>- Backups del sistema. <br>- Mantenimiento Navegadores. <br>- Soporte Office o similares. <br>- Soporte Correo Electrónico. <br>";			
			document.getElementById("tarj6").innerHTML ="- Configuración Equipos. <br>- Configuración FTP. <br>- Administración Antivirus. <br>- Administración Firewall. <br>- Registro Librerías. <br>- Impresoras y carpetas compartidas. <br> - validación Conexiones Red e Internet <br>- Instalación periféricos. ";			
			break;

		case 5:/*Logros*/
			
			document.getElementById("parrafo0").innerHTML = "Graduado de Tecnólogo en Análisis y desarrollo de sistemas de información. completando el programa en el tiempo estipulado y con aprobación inmediata del proyecto final. ";						
			document.getElementById("parrafo1").innerHTML = "<br>Graduado de Técnico Profesional en Ingeniería de Sistemas, obteniendo un certificado de tercer puesto en concurso de programación.<br><br>";			
			document.getElementById("parrafo2").innerHTML = "obtuve un ascenso desde el área de procesamiento de información al área de tecnología. <br><br>";			
			document.getElementById("parrafo3").innerHTML = "La compañía integro el área de tecnología de dos de sus filiales, como pionero adquirí conocimientos en los procesos de ambas entidades para prestar un soporte integral al área.";			
			document.getElementById("parrafo4").innerHTML = "Diseñé Formatos de Estadísticas diarias con información de recaudo y pagos realizados en las entidades bancarias, los cuales fueron implementados como soportes obligatorios en la transmisión a los clientes Davivienda y Popular, y en el área de operaciones para facilitar la comparación de datos.";			
			document.getElementById("parrafo5").innerHTML = "Aumenté la velocidad de detección de inconsistencias en la información transmitida y facilite la consultas filtradas para diferentes áreas y propósitos.";			
			document.getElementById("parrafo6").innerHTML = "Diseñé sistema en VBA, de lista de Chequeo para ayuda en la Validación de información recibida y horarios de transmisión de más de cien oficinas bancarias al área de operaciones y tecnología. Con ayuda visual y escrita para cada procedimiento.";			
			document.getElementById("parrafo7").innerHTML = "Optimicé los tiempos de transmisión y mejore la calidad de la información enviada a los clientes. Además usuarios nuevos podían realizar los procesos siguiendo la guía interactiva incluida.";			
			document.getElementById("parrafo8").innerHTML = "Diseñé un formato físico para organizar la relación de Fotos tomadas a los predios en la actualización catastral, usando una foto guía que incluía un código para identificar cada paquete y ubicar fotos faltantes de manera rápida.";			
			document.getElementById("parrafo9").innerHTML = "Logré Disminuir el índice de error en aproximadamente 10% al momento de ingresar las fotos al sistema.";			
			document.getElementById("parrafo10").innerHTML = "Programé Macros en Office y Open Office, para mejorar el control de ingreso de personal a la oficina y para filtrar información de una consulta de Base de Datos generando varios documentos independientes por área.";			
			document.getElementById("parrafo11").innerHTML = "Reduciendo en al menos 40% el tiempo al realizar varios procesos diarios que anteriormente se realizaban de forma manual.";			
			document.getElementById("parrafo12").innerHTML = "Me desempeñé como Coordinador del área de Digitación en horario nocturno y obtuve un ascenso a Validador encargado de analizar información";			
			document.getElementById("parrafo13").innerHTML = "En el tiempo que me desempeñe como coordinador, El índice de recepción, digitación y validación de créditos procesados en el área, siempre estuvo sobre el 98%.";			
			break;

		case 7:/*pag Acerca de*/
			document.getElementById("parrafo1").innerHTML = "Soy Tecnólogo en análisis y desarrollo de sistemas de información, además Técnico en Ingeniería de Sistemas,  con conocimientos y experiencia en soporte de aplicaciones, bases de datos empresariales o comerciales y en desarrollo de aplicaciones, además conocimientos en mantenimiento, instalación y configuración de equipos de cómputo.<br><br>Experiencia en validación de código fuente de aplicaciones WEB y de escritorio, procedimientos en bases de datos y aplicaciones para detectar errores de ejecución y(o) en resultados. Solución de novedades en redes y habilidades en validación y generación de información y reportes. <br> <br> Empatía, eficiencia y buena comunicación con usuarios y clientes tanto internos como externos, disposición para trabajo en equipo, además de un amplio manejo del paquete de Office o similares, manejo avanzado de Visual Basic para Aplicaciones de Microsoft.";			
			break;

		default:
			alert("No se pudo cargar correctamente el texto relacionado a los párrafos en la página. \n existe un error en JavaScript del navegador")
			break;			
	}

anoActual();
}
	
//actualiza el año del pie de pagina	
function anoActual() {
	var fecha = new Date();
	var ano = fecha.getFullYear();
	if (ano > 2018){document.getElementById("year").innerHTML=ano;} //valida que no se cambie por una año menor a 2019
}