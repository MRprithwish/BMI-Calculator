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
    const weight=body.weight;
    const height=body.height/100;
    const result=(weight/(height*height)).toFixed(2);
    res.send(`<html>
                <head>
                    <style>
                            body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                margin-top: 200px;
                                background-color: #f0f0f0;
                            }
                            .result {
                                font-size: 50px;
                                font-weight: bold;
                                color: black;
                            }
                            .footer {
                                text-align: center;
                                margin-top: 400px;
                                color: #666;
                            }
                            @media (max-width:570px) {
                            .footer{
                                text-align: center;
                                margin-top: 300px;
                                
                                }
                            }
                            @media (max-width:500px) {
                            .footer{
                                text-align: center;
                                margin-top: 300px;
                                
                                }
                            }
                    </style>
                </head>
                <body>
                    <div class="result">BMI OF USER IS: ${result}</div>
                    <p class="footer">abc123@health.com</p>
                </body>
            </html>`)
});
app.listen(2000,()=>{
    console.log("Server is running")
})