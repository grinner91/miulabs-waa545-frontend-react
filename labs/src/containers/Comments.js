import { Comment } from "../components/Comment";
export const Comments = (props) => {
  //
  const list = props.comments.map((com) => {
    return <Comment key={com.id} comment={com} />;
  });

  return list;
};
