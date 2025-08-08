import Counter from './components/Counter';
import ToDoList from "./components/ToDoList.tsx";
import {Login} from "./components/Login.tsx";
import {Register} from "./components/Register.tsx";

export function App() {
    return (
        <div style={{padding: '2rem', fontFamily: 'Arial'}}>
            <Counter/>
            <ToDoList/>
            <Login/>
            <Register/>
        </div>
    );
}