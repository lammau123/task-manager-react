import { useState } from 'react';
import './Paginator.css';

function Paginator({currentPage, pageSize, totalItems, pageSelected}){
    const [showPageList, setShowPageList] = useState(false);
    const pagePerItem = currentPage*pageSize;
    const pages = Array.from({length: Math.ceil(totalItems/pageSize)}).map((_, index) => (index+1)*pageSize);
    const setShowItem = () => {
        setShowPageList(!showPageList);
    }

    return (
        <div className="page-container">
            <div className="page-per-item" onClick={setShowItem}>
                <div className="page-item-label">Page Per Item:</div>
                <div className="page-item">
                    <div className="item-no">{pagePerItem}</div>
                    <div><i className="drop-arrow down"></i></div>
                    <div className={showPageList ? "item-fadeIn items" : "item-fadeOut items"}>
                        <ul>
                            {pages.map((page, index) => <li key={index+1} onClick={() => pageSelected(index+1)}>{page}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="current-page">Page {currentPage} of {pages.length}</div>
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