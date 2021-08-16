const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const app = express();
app.use(express.json());
const Post = require("./models/Post");
connectDB();


//addPost
app.post("/post/add", async (req, res) => {
    const { id,title,points, user, time,time_ago,comments_count,type,url,domain } = req.body;
    const newPost = new Post({ id,title,points, user, time,time_ago,comments_count,type,url,domain });
    try {
      let post = await newPost.save();
      res.send(post);
    } catch (error) {
     console.log(error);
    }
  });
//ReadPosts
app.get("/post/get", async (req, res) => {
  try {
    let Posts = await Post.find();
    res.send(Posts);
  } catch (error) {
    console.log(error);
  }
});
//delete
app.delete("/post/delete/:postID", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.postID);
    res.send("deleted");
  } catch (error) {
    console.log(error);
  }
});



const PORT = process.env.PORT || 8000;

app.listen(PORT, (error) =>
  error ? console.error(error) : console.log(`server is running en port ${PORT}`)
);