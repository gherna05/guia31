var ejemplo1 = JSON.parse('{"fichero":{"ficha":{"@id":"1", "@fechaingreso":"1/11/2012", "nombre":"Antonio", "apellido":"Barbero", "direccion":"Calle de Los Andes, 45"}}}')
var ejemplo1JSON=JSON.stringify(ejemplo1);

var ejemplo2 = JSON.parse('{"pais": {"departamento": {"cabecera": "San Salvador","habitantes": "1,700,000","altura": "545 MSNM","_id": "1","_nombre": "San Salvador"},"_nombre": "El Salvador"}}')
var ejemplo2JSON = JSON.stringify(ejemplo2)

var ejercicio1a = JSON.parse('{"fichero": {"ficha": [{"nombre": "Antonio","apellido": "Barbero","direccion": "Calle de Los Andes, 45","_id": "1","_fechaingreso": "1/11/2012"},{"nombre": "Gabriela","apellido": "Hernandez","direccion": "Colonia San Francisco","email": "hl18006@ues.edu.sv", "telefono": "26234796", "url": "hl18006.ues.edu.sv", "celular": "76400897", "_id": "2","_fechaingreso": "19/01/2018"}]}}')
var ejercicio2aJSON = JSON.stringify(ejercicio1a)