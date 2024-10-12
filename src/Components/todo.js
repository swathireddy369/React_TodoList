import "./CSS/style.css"
function todo() {
    console.log("hiiiii");

    return <>
        <div className="main">
            <div className="todo_container">
                <h2 className="header">To Do List</h2>
                <div className="input_container">
                    <input placeholder="Add a Task Here" className="text_Input"></input>
                    <button className="add">ADD</button>
                </div>
                <ul className="scroll">
                    <li>task1</li>
                    <li>task2</li>
                    <li>task3</li>
                    <li>task4</li>
                    <li>task5</li>
                    <li>task6</li>
                    <li>task7</li>
                    <li>task1</li>
                    <li>task2</li>
                    <li>task3</li>
                    <li>task4</li>
                    <li>task5</li>
                    <li>task6</li>
                    <li>task7</li>
                </ul>
                <hr className="counter"></hr>
                <div className="counter_container">
                    <p><span>{1}</span>item Total</p>
                    <button className="dlt_btn">Delete All</button></div>
            </div>
            <footer className="footer_text" ><span>©Made By: Swathi Amaravadi</span></footer>


        </div>
    </>;

}
export default todo;