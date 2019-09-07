import axios from "axios";
import { GET_ERRORS } from "./types";

//Upload a post
export const uploadPost = (data, history) => dispatch => {
    console.log(data);
    axios.post("/api/posts/upload", data)
        .then(res => {
            console.log(res)
            history.push("/profile");
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
            // console.log(err);
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
export const getUserPosts = (data) => dispatch => {
    axios.post("/api/posts/uploads/" + data._id, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};
