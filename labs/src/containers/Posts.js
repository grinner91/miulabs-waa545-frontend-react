import { useContext, useEffect, useState } from "react";
import Post from "../components/Post";
import axios from "axios";
import APIs from "../configs/apis";
import { useNavigate, redirect } from "react-router";
import { SelectedPostContext } from "../context/postContext";

export default function Posts(props) {
  const [postsState, setPosts] = useState([
    { id: 1, title: "MIU", author: "Zaman" },
    { id: 2, title: "Happiness", author: "Rafsan" },
    { id: 3, title: "Fullfilment", author: "Monir" },
  ]);
  //const [studentDetail, setStudentDetail] = useState({});
  //const { selectedStudents, setSelectedStudents } = useContext(SelectedStudents);
  //const [selectedPost, setSelectedPost] = useState({ ...postsState[0] });
  const { selectedPost, setSelectedPost } = useContext(SelectedPostContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = () => {
    axios
      .get(APIs.postsUrl)
      .then((res) => {
        setPosts(res.data);
        console.log("fetech posts data: ", res.data);
      })
      .catch((err) => {
        console.log("fetech posts error: ", err);
      });
  };

  const onPostSelected = (id) => {
    console.log("selected post id: ", id);
    const post = filterPostById(id);
    console.log("filter selected post: ", post);
    //console.log(post);
    //setSelectedPost({});
    navigate("/post-details");
  };

  function filterPostById(id) {
    return { ...postsState.filter((p) => "" + p.id === "" + id)[0] };
  }

  //return <div>Posts</div>;

  //console.log(postsState);

  const list = postsState.map((p) => {
    //console.log(p);
    return (
      <Post
        key={p.id}
        id={p.id}
        title={p.title}
        author={p.author}
        onSelect={onPostSelected}
      />
    );
  });

  return list;
}
