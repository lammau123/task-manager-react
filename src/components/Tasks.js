import Task from './Task';
import './Tasks.css';

function Tasks({tasks, func}){
    return (
        <>
            <div>
                <div className="task-list-header"><h3>Schedule List</h3></div>
                <div className="task-list">
                    { tasks.map( task => {
                        return <Task key={task.id} task={task} func={func}></Task>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Tasks;