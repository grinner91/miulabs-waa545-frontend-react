const APIs = {
  baseUrl: "http://localhost:8080",
  postsUrl: "http://localhost:8080/api/posts",
  commentsByPostIdUrl: (id) =>
    "http://localhost:8080/api/posts/" + id + "/comments",
  //http://localhost:8080/api/posts/1/comments
};

export default APIs;
