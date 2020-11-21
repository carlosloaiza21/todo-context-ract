import React, {useContext, useState} from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {TodoContext} from '../TodoContext';

const SearchInput=(props)=>{

    const {label} = props;
    const contexto = useContext(TodoContext)
    const { setTask,task } = contexto;

    const [item, setItem]=useState('');

    const save=()=>{
        setTask([...task,item])
        setItem('')
    }
    
    const changeValue=(ev)=>{
        setItem(ev.target.value);
    }

    return(
        <TextField
            variant="outlined"
            onChange={changeValue}
            value={item}
            placeholder={label}
            InputProps={{
                endAdornment:(
                    <IconButton onClick={save}>
                        <AddCircleOutlineOutlinedIcon/>
                    </IconButton>
                )
            }}
        />
    );
}

export default SearchInput;