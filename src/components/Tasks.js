const taskListHeader = {
    border: '1px solid',
    backgroundColor: 'grey',
    paddingLeft: '5px'
}

function Tasks(){
    return (
        <>
            <div style={taskListHeader}><h3>Schedule List</h3></div>
            <div class="task-list">
                <div>Tasks</div>
                <div>Tasks</div>
                <div>Tasks</div>
                <div>Tasks</div>
                <div>Tasks</div>
            </div>
        </>
    );
}

export default Tasks;