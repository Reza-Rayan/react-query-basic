import { Todo } from "../../../@types/Todo";

const TodoItem = ({ id, title, completed }: Todo) => {
  return (
    <article style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input type="checkbox" checked={completed} id={id}  />
      <input type="checkbox" name="" id="" />
      <h3>{title}</h3>
    </article>
  );
};

export default TodoItem;
