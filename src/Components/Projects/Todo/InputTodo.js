// import React ,{useState}from "react";

// const InputTodo =() =>{

//     const [description , setDescription] = useState("");


//     const submitForm = async e =>{
//         e.preventDefault();
//         try{

//             const body = {description};
//             const respose = await fetch('http://localhost:3000/todos' , {
//                 method:"POST" , 
//                 headers:{"Content-Type":"application/json"},
//                 body : JSON.stringify(body)
//             });
//             window.location = '/'; //after we submit it refresh the window for the new element 
//         } catch(err){
//             console.error(err.message);
//         }
//     }


//     return (
//         <div className="text-center mt-5">
            
//             <h1>input</h1>
//             <form className="d-flex mt-5" onSubmit={submitForm}>
//                 <input type="text" className="form-control"
//                  value={description}
//                  onChange={event => setDescription(event.target.value)}/>
//                 <button className="btn btn-success">add</button>
//             </form>
            
//         </div>
//     )
// }

// export default InputTodo;


import React, { useState } from "react";

const InputTodo = ({ onAddTodo }) => {
  const [description, setDescription] = useState("");

  const submitForm = async (e) => {
    e.preventDefault(); // Prevent form default behavior (which reloads the page)
    try {
      const body = { description };
      const response = await fetch('http://localhost:3000/todos', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      
      const newTodo = await response.json(); // Get the newly created todo
      
      onAddTodo(newTodo); // Call the parent function to add the todo to the list

      setDescription(''); // Clear the input after submission
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="text-center mt-5">
      <h1>Input Todo</h1>
      <form className="d-flex mt-5" onSubmit={submitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
