import Header from "./Header";
import Tasks from "./Tasks";

const container = {
    boxSizing: 'content-box',
    minWidth: '430px',
    border: '1px solid',
    padding: '10px',
    boxShadow: '2px 2px #888888',
    borderRadius: '0.2cm'
};

function TaskManager(){
    return (
        <div style={container}>
            <Header></Header>
            <Tasks></Tasks>
        </div>
    );
}

export default TaskManager;