const Blog = require('../models/blog');
const blog_index = (req,res) =>{
    Blog.find()
        .then((result)=>{
            res.render('blogs/index',{title:"Blogs",blogs:result});

        })
        .catch((err)=>{
            console.log(err);
        })
}

const blog_create_post = (req,res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(()=>{
            res.redirect('/home');
        })
        .catch((err)=>{
            console.log(err);
        })
}

const blog_delete = (req,res)=> {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect : '/blogs'})
        })
        .catch((err)=>{
            console.log(err);
        })     
}

const blog_deteil = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
        .then(result=>{
            res.render('blogs/detail',{blog: result ,title:"Detail"});
        })
}

module.exports = {
    blog_index,
    blog_create_post,
    blog_deteil,
    blog_delete
}