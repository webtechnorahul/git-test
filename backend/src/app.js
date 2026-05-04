import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/api/data',(req,res)=>{
    const data={
        message:'This is some data from the server',
        timestamp:new Date()
    };
    res.json(data);
});
app.get('/api/health',(req,res)=>{
    res.status(200).json({message:'Server is healthy'});
});

export default app;