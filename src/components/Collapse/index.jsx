import React, { useState } from 'react'
import "../../utils/style/collapse.css"
import arrowUp from '../../assets/arrowUp.png'
import arrowDown from '../../assets/arrowDown.png'


function Collapse({title, content}) {
    const [contentVisible, setContentVisible] = useState(false)

    const affContent = () => { 
        setContentVisible(!contentVisible) 
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseArrow = (contentVisible ? arrowUp : arrowDown)

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="arrowValue">
                    <img src={collapseArrow} alt=""/>
                </div>
            </div>
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse