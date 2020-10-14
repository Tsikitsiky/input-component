import React from 'react';
import Icon from './icon'

function Input(props) {
    let classes= props.error ? `input ${props.error}` : 'input';
    if(props.helperText) {
        classes = `${classes} helper-text`;
    } 
    if(props.starticon) {
        classes = `${classes} start-icon ${starticon}`;
    }

    if(props.size) {
        classes = `${classes} ${props.size}`
    }
    return(
            <div className='fieldset'>
                {props.text}
                <input 
                type={props.type} 
                className={classes} 
                disabled={props.disabled} 
                placeholder={props.placeholder} 
                error={props.error}
                startIcon= {props.starticon}
                //endicon={props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
                value={props.value}
                size={props.size}
                row={props.row}
                 />
                 {props.starticon && <span className={props.starticon}></span>}
                <label>{props.label}</label>
                {props.helperText && <p>{props.helperText}</p>}
            </div>
    )
}

export default Input