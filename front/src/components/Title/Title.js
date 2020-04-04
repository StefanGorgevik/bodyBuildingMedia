import React from 'react'
import './Title.css'

function Title(props) {
    return (
        <div className="title-div">
            <h1 className="title-h1">{props.title}</h1>
        </div>
    )
}

export default Title
