const {Router}=require('express');
const router=Router();


router.get("/",(req,res)=>{  //se accede a travez de http://localhost:3000/
res.sendFile(path.join(__dirname+"/server.html"));   //responde con el archivo server.html
});

router.get("/peticion",(req,res)=>{  //para realizar una peticion/
res.json({ user: 'geek' });
});

module.exports=router;