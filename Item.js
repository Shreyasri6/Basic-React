import React from 'react';

import classes from './Item.module.css'

const Item = (prop) => {
    return (
        <div className={classes.box}>
           <p >{prop.title}</p>
           <p >{prop.summary} </p>
           <p >{prop.author}</p>
        </div>
    )
}

export default Item;
