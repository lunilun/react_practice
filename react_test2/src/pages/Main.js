import React from 'react';
import '../style/main.scss'
import {
    NavLink
} from 'react-router-dom';

const Main = () => {
    const btnEnterEvent=(e) => {
        document.getElementById(e.target.id).classList.add("animate__animated", "animate__swing");
    };
    const btnLeaveEvent=(e) => {
        document.getElementById(e.target.id).classList.remove("animate__animated", "animate__swing");
    };

    return (
        <>
        <div className="main">
                <button id='kakao' className='sns' onMouseEnter={btnEnterEvent} onMouseLeave={btnLeaveEvent}>btn</button>
            <button id='git' className='sns' onMouseEnter={btnEnterEvent} onMouseLeave={btnLeaveEvent}>btn</button>
                
            <div className="cover">
                <div className="title"><span>Title</span></div>
                <div className="content">
                    <div className="tradiv"><NavLink className="nav" to="/tour">Tourism</NavLink></div>
                    <div className="festdiv"><NavLink className="nav" to="/festival">Festival</NavLink></div>
                    <div className="fooddiv"><NavLink className="nav" to="/food">Food</NavLink></div>
                </div>
            </div>
        </div>
        </>  
    );
};

export default Main;