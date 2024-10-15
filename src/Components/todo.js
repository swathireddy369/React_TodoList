import { useState } from "react";
import "./CSS/style.css"
function Todo() {
    const [todoList, setTodoList] = useState(localStorage.getItem("todo") && Array.isArray( JSON.parse(localStorage.getItem("todo"))) &&   JSON.parse(localStorage.getItem("todo")).length !== 0 
                                        ? JSON.parse(localStorage.getItem("todo")):[] );
    let [newTodo, setTodo] = useState("");
    console.log("hiiiii",todoList);

    const addTask = (e) => {
        console.log("e", e.key, e.target.value);
    
        if (e.key === "Enter") {
          btnAdd();
        }
       
    };
    const btnAdd = () => {
        let updatedTodoList = [...todoList, newTodo];
      
        console.log("localStoage",localStorage.getItem("todo"));
        setStorage(JSON.stringify(updatedTodoList))
        setTodoList(updatedTodoList);
        setTodo("");
    }

    const deleteAll = () => {
        setTodoList([]);
        setStorage([])

    }
    const setStorage = (array)=>{
        localStorage.setItem("todo",array)
    }
    return <>
        <div className="main">
            <div className="todo_container">
                <h2 className="header">To Do List</h2>
                <div className="input_container">
                    <input placeholder="Add a Task Here" className="text_Input"   value={newTodo}
                                    onChange={(e) => setTodo(e.target.value)} onKeyUp={(e) => addTask(e)}></input>
                    <button className="add" onClick={(e) => btnAdd()}>ADD</button>
                </div>
                <ul className="scroll">
                    {todoList && Array.isArray(todoList) && todoList.length !== 0 && todoList.map((item, index) => {
                        return (
                            <div className="list-container" key={index}>
                                <input
                                    type="checkbox"
                                    name={item}
                                    // key={index}
                                  
                                    id={`todo__checkbox - ${index}`}
                                />
                                <li id={`todo_li - ${index}`} key={index}>
                                    {item}
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <hr className="counter"></hr>
                <div className="counter_container">
                    <p><span>{todoList.length}</span> item Total</p>
                    <button className="dlt_btn" onClick={() => deleteAll()}>Delete All</button></div>
            </div >
            <footer className="footer_text" ><span>©Made By: Swathi Amaravadi</span></footer>


        </div >
    </>;

}
export default Todo;