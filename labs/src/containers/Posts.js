import Post from "../components/Post";

export default function Posts(props) {
  //console.log(props.posts);
  const list = props.posts.map((p) => {
    //console.log(p);
    return (
      <Post
        key={p.id}
        id={p.id}
        title={p.title}
        author={p.author}
        onSelect={props.onSelect}
      />
    );
  });

  return list;
}
