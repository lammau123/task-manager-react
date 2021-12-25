import { useState } from 'react';
import './Paginator.css';

function Paginator(){
    const [showPageList, setShowPageList] = useState(false);
    
    const setShowItem = () => {
        setShowPageList(!showPageList);
    }

    return (
        <div className="page-container">
            <div className="page-per-item" onClick={setShowItem}>
                <div className="page-item-label">Page Per Item:</div>
                <div className="page-item">
                    <div className="item-no">10</div>
                    <div><i className="drop-arrow down"></i></div>
                    <div className={showPageList ? "item-fadeIn items" : "item-fadeOut items"}>
                        <ul>
                            <li onClick={() => {}}>
                                10
                            </li>
                            <li onClick={() => {}}>
                                20
                            </li>
                            <li onClick={() => {}}>
                                30
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="current-page">Page 1 of 4</div>
            <div className="lt" onClick={() => {}}>
                <i className="arrow left"></i>
            </div>
            <div className="gt" onClick={() => {}}>
                <i className="arrow right"></i>
            </div>
        </div>

    );
}

export default Paginator;