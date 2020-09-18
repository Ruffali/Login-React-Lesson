import React from 'react'
import './Button.scss';

export default function Button(prop) {
    return ( <button onClick={prop.logout} type="submit" className={prop.class} >{prop.children}</button>)
}
