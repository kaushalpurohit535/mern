import  express  from "express";
import {PORT ,mongoURL}  from "./config.js";
import mongoose from "mongoose";

const app=express();

app.use(express.json());


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome');
})



// mongoose
// .connect(mongoURL)
// .then(()=>{
//     console.log('app is connected succesfully')
//     app.listen(PORT ,()=>{
//         console.log('app is listening to port :${PORT}');
//     })
// })
// .catch((error)=>{
//     console.log(error);
// });

let items=[
    {"id":1 ,"name":"kaushal"},
    {"id":2 ,"name":"ashwin"},
    {"id":3 ,"name":"vedant"}

]

app.get('/api/items',(req,res)=>{
    res.json({items});
})
app.post('/api/items',(req,res)=>{
    const newItem=req.body;
    console.log(newItem);
    items.push(newItem);
    res.json({items});

})

app.get('/api/items/:id',(req,res)=>{
  console.log(req.params.id) 
  res.json(items[req.params.id]);
})

app.listen(PORT,()=>{
    console.log(`server is runnimg ar http://localhost:${PORT}`);
});
