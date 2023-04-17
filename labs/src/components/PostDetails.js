export default function PostDetails(props) {
  return (
    <div className="content-detail">
      <h1> {props.post.title}</h1>
      <div>This is a content....</div>
      <div className="Field">Autor: {props.post.author}</div>
      <div>
        <button onClick={props.post.onEditClick}>edit</button>
        <button onClick={props.post.onDeleteClick}>delete</button>
      </div>
    </div>
  );
}
