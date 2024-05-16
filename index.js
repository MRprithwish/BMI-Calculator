const server=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const app=server()
const pathfinder=path.join(__dirname,'client')
app.use(bodyparser.urlencoded({extended:true}))
app.get("/calculator",(req,res)=>{
    res.sendFile(`${pathfinder}/calculator.html`)

});
app.post("/calculator",(req,res)=>{
    const body=req.body;
    const weight=parseFloat(body.weight);
    const height=parseFloat(body.height);
    const result=weight/(height*height);
    res.send(`BMI OF USER IS:|${result}`)
});
app.listen(2000,()=>{
    console.log("Server is running")
})