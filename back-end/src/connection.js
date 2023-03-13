const mysql = require('mysql');
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    passsword: '',
    database: 'fpelectoral',
    port: '3306'

});

connection.connect(function(error){
    if (error){
        throw error;

    }else{
    console.log('conexion correcta');

    }




}); 

/* const query = connection.query('INSERT INTO usuario(nombre,correo,telefono) VALUES(?,?,?)',['juan','juangarcia@gmail.com',809809809], function (error,result){
    if (error){
        throw error;

    }else{
        console.log(result);

    }
}
); */

if (connection.end) console.log('cerrado')
else{
    console.log('encendido')
}
module.exports = connection;