export default function PostDetails(props) {
  return (
    <div className="content-detail">
      <h1> {props.post.title}</h1>
      <div>{props.post.content}</div>
      <div className="Field">Autor: {props.post.author}</div>
      <div>
        <button onClick={props.onDeleteClick}>delete</button>
      </div>
    </div>
  );
}
