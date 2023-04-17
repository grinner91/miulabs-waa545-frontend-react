export default function AddPost(props) {
  return (
    <div className="Content">
      <h1>Add a Post</h1>

      <label>Title</label>
      <input
        type="text"
        label={"title"}
        name={"title"}
        onChange={props.onChange}
        value={props.title}
      />

      <label>Author</label>
      <input
        type="text"
        label={"author"}
        name={"author"}
        onChange={props.onChange}
        value={props.author}
      />

      <button onClick={props.addButtonClicked}>Add Post </button>
    </div>
  );
}
