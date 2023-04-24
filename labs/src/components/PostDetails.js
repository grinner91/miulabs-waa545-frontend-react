import { useContext, useEffect, useState } from "react";
import { SelectedPostContext } from "../context/postContext";
import { Comments } from "../containers/Comments";
import axios from "axios";
import APIs from "../configs/apis";
import { useNavigate } from "react-router";

export default function PostDetails(props) {
  //
  const selectedPost = useContext(SelectedPostContext);
  //const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
  const navigate = useNavigate();

  //
  const [commentsState, setCommentsState] = useState([]);

  console.log("comments url: ", APIs.commentsByPostIdUrl(selectedPost.id));

  function fetchCommentsByPostId() {
    console.log("comments url: ", APIs.commentsByPostIdUrl(selectedPost.id));
    axios
      .get(APIs.commentsByPostIdUrl(selectedPost.id))
      .then((res) => {
        console.log("commnents: ", res.data);
        setCommentsState(res.data);
      })
      .catch((res) => {
        console.log("commnents errr: ", res);
      });
  }

  //fetchCommentsByPostId();

  useEffect(() => {
    fetchCommentsByPostId();
    console.log("PostDetails selected Post from useContext(): ", selectedPost);
    console.log("comments url: ", APIs.commentsByPostIdUrl(selectedPost.id));
  }, [selectedPost]);

  const onDeletePostClick = (event) => {
    deletePostDetails();
  };

  const deletePostDetails = (event) => {
    //console.log("deletePostDetails");
    axios
      .delete(APIs.postsUrl + "/" + selectedPost.id)
      .then((res) => {
        console.log(" deletePostDetails data: ", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(" deletePostDetails error: ", err);
      });
  };

  return (
    <div className="content-detail">
      <h1> {selectedPost.title}</h1>
      <div>{selectedPost.content}</div>
      <div className="Field">Autor: {selectedPost.author}</div>
      <div>
        <button onClick={onDeletePostClick}>delete</button>
      </div>
      <div className="content-detail">
        <h3>Comments</h3>
        <Comments comments={commentsState} />
      </div>
    </div>
  );
}
