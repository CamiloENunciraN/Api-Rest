
const express=require("express");//importa la libreria
const path=require("path");
const app=express();

//settings
app.set('PORT',process.env.PORT || 3000); //definir el puerto del servidor
app.set('json spaces',2);  //ayuda a visualizar mejor el json

//middleware
app.use(express.json());  //middleware para recibir archivos .json


//starting server
app.listen(app.get('PORT'),()=>{      //escucha las peticiones al servidor
console.log("Server Running on port",app.get('PORT')); ///imprime en consola el inicio del servidor
});

//routes
app.use(require('./routes/routes'));   //recibe las rutas desde el archivo routes