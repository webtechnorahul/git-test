import app from './src/app.js';

app.get('/api/user/:id',(req,res)=>{
    const userId=req.params.id;
    const user={
        id:userId,
        name:'User '+userId,
        email:'rahxerls.gmail.com'
    };
    res.json(user);
}); 

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})