import { useState } from "react";
import axios from "axios";
import APIs from "../configs/apis";

export default function NewPost(props) {
  /*
  
  {
    "title": "Post 1 ",
    "content": "This is 1 content",
    "author": "Monir Zaman ",
    "userId": 1
}
  */

  const [newPostData, setNewPostData] = useState({
    title: "Post 1 ",
    content: "This is 1 content",
    author: "Monir Zaman ",
    userId: 1,
  });

  const onChange = (event) => {
    console.log("change value: ", event.target.value);
    console.log("change name: ", event.target.name);
    let copyPost = { ...newPostData };
    copyPost[event.target.name] = event.target.value;
    setNewPostData(copyPost);
  };

  const onAddPost = () => {
    //save data
    saveNewPost();
  };

  const saveNewPost = () => {
    axios
      .post(APIs.postsUrl, newPostData)
      .then((res) => {
        console.log("saveNewPosts data: ", res.data);
        //reload data in dashboard
        props.onAddPost();
      })
      .catch((err) => {
        console.log("saveNewPost error: ", err);
      });
  };

  return (
    <div className="content-detail">
      <h1>Add a Post</h1>

      <div>
        <label>Title</label>
        <input
          type="text"
          label={"title"}
          name={"title"}
          onChange={onChange}
          value={newPostData.title}
        />
      </div>
      <div>
        <label>Content</label>
        <input
          type="text"
          label={"content"}
          name={"content"}
          onChange={onChange}
          value={newPostData.content}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          label={"author"}
          name={"author"}
          onChange={onChange}
          value={"Monir Zaman"}
        />
      </div>

      <button onClick={onAddPost}>Add Post </button>
    </div>
  );
}
