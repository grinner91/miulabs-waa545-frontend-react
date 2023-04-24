import { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./Posts";
import PostDetails from "../components/PostDetails";
import NewPost from "../components/NewPost";
import APIs from "../configs/apis";
import { SelectedPostContext } from "../context/postContext";
import PageRoutes from "./PageRoutes";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  // const [postsState, setPosts] = useState([
  //   { id: 1, title: "MIU", author: "Zaman" },
  //   { id: 2, title: "Happiness", author: "Rafsan" },
  //   { id: 3, title: "Fullfilment", author: "Monir" },
  // ]);

  const [selectedPost, setSelectedPost] = useState({});
  const [selectedStudents, setSelectedStudents] = useState([]);
  //const [selectedStudents, setSelectedStudents] = useState([]);

  //const [reloadPosts, setReloadPosts] = useState(false);

  // useEffect(() => {
  //   fetchAllPosts();
  // }, []);

  // useEffect(() => {
  //   fetchAllPosts();
  // }, [reloadPosts]);

  // useEffect(() => {
  //   fetchPostDetails();
  // }, [selectedPost]);

  // const fetchAllPosts = () => {
  //   axios
  //     .get(APIs.postsUrl)
  //     .then((res) => {
  //       setPosts(res.data);
  //       console.log("fetech posts data: ", res.data);
  //     })
  //     .catch((err) => {
  //       console.log("fetech posts error: ", err);
  //     });
  // };

  // const onPostSelected = (id) => {
  //   //console.log("selected post id: ", id);
  //   const post = filterPostById(id);
  //   //console.log("filter selected post: ", post);
  //   //console.log(post);
  //   setSelectedPost(post);
  // };

  // const fetchPostDetails = () => {
  //   //console.log("fetchPostDetails selectedPost: ", selectedPost);
  //   if (!selectedPost.id) {
  //     return;
  //   }

  //   axios
  //     .get(APIs.postsUrl + "/" + selectedPost.id)
  //     .then((res) => {
  //       console.log("fetech fetchPostDetails data: ", res.data);
  //       //setSelectedPost({ ...res.data });
  //     })
  //     .catch((err) => {
  //       console.log("fetech fetchPostDetails error: ", err);
  //     });
  // };

  // const onDeletePostClick = (event) => {
  //   deletePostDetails();
  // };

  // const deletePostDetails = (event) => {
  //   //console.log("deletePostDetails");
  //   axios
  //     .delete(APIs.postsUrl + "/" + selectedPost.id)
  //     .then((res) => {
  //       console.log(" deletePostDetails data: ", res.data);
  //       setReloadPosts(!reloadPosts);
  //       setSelectedPost({});
  //     })
  //     .catch((err) => {
  //       console.log(" deletePostDetails error: ", err);
  //     });
  // };

  // const onAddPost = () => {
  //   console.log("Dashboard onAddPost");
  //   setReloadPosts(!reloadPosts);
  // };

  // function filterPostById(id) {
  //   return { ...postsState.filter((p) => "" + p.id === "" + id)[0] };
  // }

  return (
    <div className="">
      <header className="App-header">WAA545 React Labs </header>
      <SelectedPostContext.Provider value={{ selectedPost, setSelectedPost }}>
        {/* <Posts posts={postsState} onSelect={onPostSelected} />
        <div className="">
          <hr />
          <h2>Post Details</h2>
          <PostDetails onDeleteClick={onDeletePostClick} />
        </div>
        <div className="">
          <hr />
          <h2>Add Post</h2>
          <NewPost onAddPost={onAddPost} />
        </div> */}
        <div>
          <Link to="/"> Posts</Link>|
          <Link to="/post-details">Post Details</Link>
          <Link to="/new-post"> New Post</Link>
        </div>
        {/* <PageRoutes /> */}
      </SelectedPostContext.Provider>
    </div>
  );
}
