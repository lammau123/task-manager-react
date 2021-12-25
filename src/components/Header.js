const header = {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 600,
    fontSize: '20px',
    alignItems: 'center'
};

const btn = {
    borderRadius: '0.3em',
    padding: '5px 10px',
    backgroundColor: 'green',
    width: '60px'
};

const heading = {
    marginBottom: '5px',
    marginTop: '0px'
};

function Header({func}){
    return (
        <div style={header}>
            <h1 style={heading}>Tasks Manager</h1>
            <button style={btn}>Import</button>
            <button style={btn} onClick={() => func()}>Add</button>
        </div>
    );
}

export default Header;