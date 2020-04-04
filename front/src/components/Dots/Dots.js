import React from 'react'
import './Dots.css'
// import Button from '../../Button/Button'

function DotsDiv(props) {
    var divs= [1, 2, 3]
    var dots = divs.map((div, i) => {
        return (
            <span onClick={() => props.nextClicked(i + 1)}
                key={ div+ i}
                className={props.count === i + 1 ? "dot active-dot" : "dot"}>{i + 1}</span>
        )
    })
    
    return (
        <div className="dots-div">
            {dots}
        </div>
    )
}
export default DotsDiv;