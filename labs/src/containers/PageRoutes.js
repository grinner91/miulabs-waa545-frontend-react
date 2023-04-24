import { Routes, Route } from "react-router";
import Posts from "./Posts";
import PostDetails from "../components/PostDetails";
import NewPost from "../components/NewPost";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="/post-details" element={<PostDetails />} />
      <Route path="/new-post" element={<NewPost />} />
    </Routes>
  );
}
