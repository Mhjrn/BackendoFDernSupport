const express = require('express');
const cors = require('cors');
const prisma = require('./config/prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loadRoutes = require('./router/router');
const app = express();

app.use(cors());


app.use(
    express.json(),
    express.urlencoded({
        extended:true
    })

);

loadRoutes(app)


app.get('/', (req,res) =>{
    res.json({
        message:'welcome home',
    })
});


app.post('/register',async (req,res) =>{

});


app.get('/register', async(req, res) =>{
   
});

app.post('/login', async(req,res) =>{
  
})

app.post('/post',async(req, res) =>{
    try {
        const {title, content, published, author} = req.body;

        const savePost = await prisma.post.create({
            data:{
                title,
                content,
                published,
                author:{
                    connect:{
                        id:author,
                    }
                },
            },
        });

        return res.status(500).json({
            message:'post created successfully',
            data:savePost,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error creating post',
            error:error,
        });
    }
});


app.get('/post',async(req, res) =>{

    try {
        const post = await prisma.post.findMany();

        return res.status(200).json({
            message:'post fetched successfully',
            data:post,
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching post',
            error:error,
        })
    }
});

app.put('/post/:id',async(req, res) =>{
    try {

        const {id} = req.params;

        const {title,content, published,authorId} = req.body;

        const updatePost = await prisma.post.update({
            where:{
                id:parseInt(id),
            },
            data:{
                title,
                content,
                published,
                author:{
                    connect:{
                        id: parseInt(authorId),
                    }
                }
            }
        });

        return res.status(200).json({
            message:'post updated successfully',
            data:updatePost,
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error updating post',
            error:error,
        });
    }
});

app.put('/post/:id', async(req,res)=>{
    try {
        //param vaney ko link ma k pathayo cha tei ho
        const {id} = req.params;

        const {title,content, published,authorId} = req.body;
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error deleting post',
            error:error,
        });
    }
})


app.post('/repair', async(req, res) =>{

});

app.get('/repair',async(req, res) =>{
    try {
        const data = await prisma.repair.findMany();

        return res.status(200).json({
            message:'repair fetched successfully',
            data:data,
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'error fetching repair',
            error:error,
        });
    }
});



app.listen(5000, () =>{
    console.log('server is running on port 5000');
});