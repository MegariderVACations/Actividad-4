const {app, BrowserWindow} = require ('electron');

const mysql = require('mysql2') 

function createWindow(){
    const ventana = new BrowserWindow({
        width: 1500,
        height: 900
    });
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)

/*const conexion = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'nuevaPass',
    database:'tareaunidad4'
})

conexion.query(
    'SELECT * FROM registros',
    function(err,result,fields){
        if(err){
            // error
            console.log(err)
        }
        console.log(result)
        console.log(fields)
})*/