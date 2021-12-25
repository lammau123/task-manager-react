import Header from "./Header";
import Paginator from "./Paginator";
import Tasks from "./Tasks";
import TaskForm from "./TaskForm";
import { useState, useEffect } from "react";

const container = {
    boxSizing: 'content-box',
    minWidth: '430px',
    border: '1px solid',
    padding: '10px',
    boxShadow: '2px 2px #888888',
    borderRadius: '0.2cm'
};

function TaskManager(){
    const [tasks, setTasks] = useState([{id: 0, name: 'Test0', time: Date.now()}]);
    useEffect(() => {
        setTasks(prev => {
            return [
                ...prev, 
                {id: 1, name: 'Test1', time: Date.now()}, 
                {id: 2, name: 'Test2', time: Date.now()}];
        });
    }, []);

    const [isShowAddTask, setShowAddTask] = useState(false);

    const removeTasks = (id) => {
        setTasks(prev => {
            return prev.filter(task => task.id !== id);
        });
    }

    const addTask = (formData) => {
        setTasks(prev => {
            return [
                ...prev, 
                {...formData}
            ]});
    }

    const showAddTask = () => {
        setShowAddTask(!isShowAddTask);
    }

    return (
        <div style={container}>
            <Header func={showAddTask}></Header>
            <div>
                {isShowAddTask && <TaskForm func={addTask}></TaskForm>}
                <Tasks tasks={tasks} func={removeTasks}></Tasks>
                <Paginator></Paginator>
            </div>
        </div>
    );
}

export default TaskManager;