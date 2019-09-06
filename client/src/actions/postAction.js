import axios from "axios";

//Upload a post
export const uploadPost = (data) => {
    axios.post("/api/posts/upload")
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        });
};

//Get all posts
export const getAllPosts = () => {
    axios.get("/api/posts/uploads")
        .then(res => console.log(res))
        .catch(err => {
            console.log(err);
        })
};

//Get users posts
export const getUserPosts = (data) => {
    axios.post("/api/posts/uploads/" + data._id)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};
