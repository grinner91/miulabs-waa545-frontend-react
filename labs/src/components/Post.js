function Post(props) {
  return (
    <div
      className="content-detail"
      onClick={(event) => props.onSelect(props.id)}
    >
      <h1> {props.title}</h1>
      <div className="Field">Autor: {props.author}</div>
    </div>
  );
}

export default Post;
