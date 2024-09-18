import React , {useEffect , useState} from "react";
import { json } from "react-router-dom";
import EditTodo from "./EditTodo";

const ListTodo =() =>{
    const [ todo , setTodo ] = useState([]);

    const DeleteElement =async id =>{
        
        try{
            const DeleteEl = await fetch(`http://localhost:3000/todos/${id}` ,{
                method:"DELETE"
            });

            setTodo(todo.filter(todo=>todo.todo_id !== id));
        }catch(err){
            console.error(err.message);
        }
    }

    const getElements = async  ()=>{
        try{
            const res= await fetch("http://localhost:3000/todos" );
            const jsonData = await res.json();
            console.log(jsonData)

            setTodo(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }

    

    useEffect(()=>{
        getElements();
    },[]);

    


    return (
        <>
            <h1 className="mt-5 text-center">elements </h1>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th scope="col">description</th>
                        <th scope="col">edit</th>
                        <th scope="col">delete</th>
                        
                    </tr>

                </thead>
                <tbody>
                    {todo.map(td=>(
                        <tr className="text-center" key={td.todo_id}>
                            <td>{td.description}</td>
                            <td> <EditTodo todo={todo}/></td>
                            <td><button className="btn btn-danger" 
                            onClick={()=>DeleteElement(td.todo_id)}>
                                Delete
                                </button>
                                </td>
                        </tr>
                    ))}
                    
                    
                </tbody>
            </table>
        </>
    )
}

export default ListTodo;