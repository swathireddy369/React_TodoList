import { useEffect, useState } from "react";
import "./CSS/style.css";
function Todo() {
    const [todoList, setTodoList] = useState(localStorage.getItem("Todos") &&
        Array.isArray(JSON.parse(localStorage.getItem("Todos"))) && JSON.parse(localStorage.getItem("Todos")).length !== 0
        ? JSON.parse(localStorage.getItem("Todos")) :
        [
        ]);
    let [newTodo, setTodo] = useState("");
    let [editText, setEditText] = useState("")
    let [editIndex, setEditIndex] = useState(null)
    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todoList))
    }, [todoList])

    const addTask = (e) => {
        if (e.key === "Enter") {
            btnAdd();
        }

    };
    const btnAdd = () => {
        let updatedTodoList = [...todoList, { text: newTodo, completed: false }];
        setTodoList(updatedTodoList);
        setTodo("");
    }

    const deleteAll = () => {
        setTodoList([]);
    }
    const toggleChange = (index) => {
        let newList = [...todoList]
        newList[index]["completed"] = !newList[index]["completed"]
        setTodoList(newList)
    }

    const handleEditChange = (e) => {
        setEditText(e.target.value)
    }
    const handleKeyDownEdit = (e, index) => {
        if (e.key === "Enter") {
            let editableTodoList = [...todoList]
            todoList[index].text = editText
            setTodoList(editableTodoList)
            setEditIndex(null)

        }
    }
    const handleBlur = (e, index) => {
        let testList = [...todoList];
        testList[index] = {
            ...testList[index],
            text: editText
        };
        setTodoList(testList);
        setEditIndex(null)
    }


    return <>
        <div className="main">
            <div className="todo_container">
                <h2 className="header">To Do List</h2>
                <div className="input_container">
                    <input placeholder="Add a Task Here" className="text_Input" value={newTodo}
                        onChange={(e) => setTodo(e.target.value)} onKeyUp={(e) => addTask(e)}></input>
                    <button className="add" onClick={(e) => btnAdd()}>ADD</button>
                </div>
                <ul className="scroll">
                    {todoList && Array.isArray(todoList) && todoList.length !== 0 && todoList.map((item, index) => {
                        return (
                            <div className="list-container" key={index}>
                                <input
                                    type="checkbox"
                                    name={item.text}
                                    onChange={(e) => toggleChange(index)}
                                    checked={item.completed}
                                    id={`todo__checkbox - ${index}`}
                                />
                                {editIndex == index ?
                                    <input id={`todo_li - ${index}`}
                                        onChange={handleEditChange}
                                        onKeyDown={(e) => handleKeyDownEdit(e, index)}
                                        onBlur={() => handleBlur(index)}
                                        value={editText}
                                        key={index}
                                        className={item.completed ? "toggleClass" + " " + "editTodo" : "none"} /> :
                                    <li id={`todo_li - ${index}`}

                                        onClick={(e) => {
                                            e.preventDefault()
                                            setEditIndex(index)
                                            setEditText(todoList[index].text)
                                        }
                                        }
                                        key={index} className={item.completed ? "toggleClass" : "none"}>
                                        {item.text}
                                    </li>
                                }




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