import React from 'react'
import Digit from './Digit/Digit'


const CountDown = (props) => {

    return (
        <div className="d-flex my-4">
            <Digit color="paleGreen" value={ props.time.min}/>
            <Digit color="skyblue"  value={ props.time.sec}/>
            <Digit color="salmon"  value={ props.time.mili}/>
        </div>
    )
}

export default CountDown