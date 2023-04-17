import { useState } from "react";
import Posts from "./Posts";
import PostDetails from "../components/PostDetails";

export default function Dashboard(props) {
  const [postsState, setPosts] = useState([
    { id: 1, title: "MIU", author: "Zaman" },
    { id: 2, title: "Happiness", author: "Rafsan" },
    { id: 3, title: "Fullfilment", author: "Monir" },
  ]);

  const [selectedPost, setSelectedPostId] = useState({});

  const onPostSelected = (id) => {
    console.log("selected post id: ", id);
    setSelectedPostId({ ...postsState[id - 1] });
  };

  const onChangeName = (event) => {
    console.log("change name: ", event.target.value);
    const updatedPosts = [...postsState];
    updatedPosts[selectedPost.id - 1].title = event.target.value;
    setPosts(updatedPosts);
  };

  return (
    <div>
      <Posts posts={postsState} onSelect={onPostSelected} />
      <div>
        <input
          type="text"
          label={"title"}
          name={"title"}
          id={selectedPost.id}
          value={selectedPost.title}
        />
        <button onClick={onChangeName}>Change name</button>
      </div>
      <div>
        <h2>Post Details</h2>
        <PostDetails post={selectedPost} />
      </div>
    </div>
  );
}
