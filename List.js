import React from 'react';
import Item from './Item';

const List = (props) => {
    return (
        <div>
         {props.items.map((data)=>{
            return <Item
             key={data.id}
             title={data.title}
             summary={data.summary}
             author={data.author}
             />
         })} 
        </div>
    )
}

export default List;
