import './Task.css';

function Task({task, func}){
    return (
        <div className="task">
            <div className="title">
                <h3> {task.name} </h3>
                <div id="close" onClick={() => func(task.id)}>&#10060;</div>
            </div> 
            <p className="appointment"> {new Date(task.time).toLocaleString()}</p>
        </div>
    );
}

export default Task;