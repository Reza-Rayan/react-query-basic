import TodoList from "./app/features/todos/TodoList";

const App = () => {
  return (
    <main className="flex flex-col gap-y-6">
      <div>
        <h1 className="text-3xl font-bold">Test API Getting</h1>
      </div>
      <div>
        <TodoList />
      </div>
    </main>
  );
};

export default App;
