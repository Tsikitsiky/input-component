import React from 'react';


function Input(props) {
    let classes= props.error ? `input ${props.error}` : 'input';
    if(props.helperText) {
        classes = `${classes} helper-text`;
        
    } 
    if(props.startIcon) {
        classes = `${classes} start-icon ${props.startIcon}`;
        console.log(classes)
    }
    if(props.endIcon) {
        classes = `${classes} end-icon ${props.endIcon}`;
        
    }

    if(props.size) {
        classes = `${classes} ${props.size}`;
        
    }
    return(
            <div className='fieldset'>
                {props.text}
                {props.type ?
                 <input 
                type={props.type} 
                className={classes} 
                disabled={props.disabled} 
                placeholder={props.placeholder} 
                //endicon={props.endIcon ? <Icon name={props.endIcon} align="right" /> : ''}
                value={props.value}
                 /> : 
                 <textarea 
                 row={props.row} 
                 className={classes}
                 placeholder={props.placeholder}
                 ></textarea>
                 }
                 {props.starticon && <span className={props.starticon}></span>}
                <label>{props.label}</label>
                {props.helperText && <p>{props.helperText}</p>}
            </div>
    )
}

export default Input