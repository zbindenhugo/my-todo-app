import { useState } from "react";
import ModalTodoEdit from "./ModalTodoEdit";

export default function CardTodo({todo}){

    return(
        <div className="p-10 bg-slate-50 drop-shadow-lg transition-all duration-150 hover:scale-110 border-t-4 rounded-md border-red-400 text-left" >
            <div>
                <div className="text-2xl mb-2">{todo.title}</div>
                <div className="italic text-sm">{todo.description}</div>
                <span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100">{todo.status}</span>
            </div>
        </div>

    )
}