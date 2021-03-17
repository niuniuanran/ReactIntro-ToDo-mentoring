import React, {useState} from "react";
import { Button, Input } from '@material-ui/core';

export default function AddToDo({onAdd}) {
    const [newToDo, setNewToDo] = useState("");
    const handleChange = (content) => {
        setNewToDo(() => content)
    }
    const handleClickAdd = (e) => {
        e.preventDefault();
        if (newToDo.length < 1)
            return;
        onAdd(newToDo);
        setNewToDo(() => "")
    }

    return <form>
        <Input value={newToDo} onChange={(e) => handleChange(e.target.value)}/>
        <Button onClick={handleClickAdd} color="primary">
            Add
        </Button>
    </form>
}