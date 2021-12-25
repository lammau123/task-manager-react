import { useState } from 'react';
import './TaskForm.css';

function TaskForm({func}){
    const [formData, setFormData] = useState({id: 0, name: "", time: ""});

    const handleSubmit = (event) => {
        func({...formData, id: Date.now()}); 
        resetForm();
        event.preventDefault();
    }

    const resetForm = () => {
        setFormData({id: 0, name: "", time: ""});
    }

    const handleNameChange = (event) => {
        setFormData(prev => {
           return {
                ...prev, 
                name: event.target.value
           };
        });
    }

    const handleTimeChange = (event) => {
        setFormData(prev => {
            return {
                ...prev,
                time: event.target.value,
            };
         });
    }

    return (
        <form onSubmit={handleSubmit}>    
            <div className="form-container">
                <div className="form-row">
                    <label className="form-label" htmlFor="scheduleName">Schedule</label>
                    <input type="text" 
                            id="scheduleName" 
                            name="scheduleName" 
                            placeholder="Schechule name"
                            required
                            value={formData.name}
                            onChange={handleNameChange}/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="time">Time</label>
                    <input type="date" 
                            id="time" 
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleTimeChange}/>
                </div>
                <div className="form-submit">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;