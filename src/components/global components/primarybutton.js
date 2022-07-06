import React from 'react';
import './primarybutton.css'

export const  PrimaryButton =(props)=>{

    const style={

        fontSize: '1rem',
        padding: '.4rem 2rem',
        borderRadius:'4px',
        color: 'white',
        backgroundColor:'#EF5D25',
        width: '100%',
        outline:'none',


    }

    return (
        <button style={style} className="primarybutton">

        {props.children}
            
    </button>
    )
}
