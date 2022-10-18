const {Router}=require('express');
const router=Router();




router.get("/peticion",(req,res)=>{  //para realizar una peticion    get/
res.json({ tipo: 'get' });

});


router.post("/peticion",(req,res)=>{  //para realizar una peticion    post/
//	const   {nombres de variables}=req.body;
res.json({ tipo: 'post' });    //retorna    un   archhhhihvo. json
});

router.delete("/:id",(req,res)=>{  //para realizar una peticion    delete/
console.log(req.params);			//ver el parametro de la url
res.status(200).send('eliminado');   //codigo 200 bien - codigo 500 error
});


module.exports=router;