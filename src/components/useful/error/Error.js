import React from 'react'
import './Error.scss';

function Error(props) {
    return (<span className="error">{props.children}</span>)
}

export default Error
