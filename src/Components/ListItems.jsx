import React, {useContext} from 'react';
import {TodoContext} from '../TodoContext';


const ListItems = ()=>{

    const ctx = useContext(TodoContext);

    const { task } = ctx;

    return(
        <div>
            {
                task.map((elm)=>{
                    return(
                        <p key={Math.random()}>{elm}</p>
                    )
                })
            }

        </div>
    )

}

export default ListItems;