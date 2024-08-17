import { Todo } from "../../@types/Todo";
import { AxiosAgent } from "./AxiosAgent";


export const getTodos = async ()=>{
    const response = await AxiosAgent.get("/todos");
    return response.data;
}

export const addTodo = async (todo:Todo) => {
    return await AxiosAgent.post("/todos",todo)
}

export const updateTodo = async (todo:Todo) => {
    return await AxiosAgent.patch(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async (id) => {
    return await AxiosAgent.delete(`/todos/${id}`,id )
}


