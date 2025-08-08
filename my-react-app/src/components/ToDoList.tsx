import {useState} from "react";
import styles from '../assets/css/ToDoList.module.css'

function ToDoList() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input.trim()]);
            setInput("");
        }
    }

    const deleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className={styles.container}>
            <h2>To Do List</h2>
            <input
                type="text"
                value={input}
                placeholder="Enter a Task"
                onChange={(e) => setInput(e.target.value)}
                className={styles.taskInput}
            />
            <button onClick={addTask} className={styles.addButton}>Add Task</button>

            <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                    <li key={index} className={styles.taskItem}>
                        {task}
                        <button onClick={() => deleteTask(index)} className={styles.deleteButton}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;