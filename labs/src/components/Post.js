function Post(props) {
  //console.log("post: ", props);
  return (
    <div
      className="content-detail"
      onClick={(event) => props.onSelect(props.id)}
    >
      <h1> {props.title}</h1>
      <div>Autor: {props.author}</div>
    </div>
  );
}

export default Post;
