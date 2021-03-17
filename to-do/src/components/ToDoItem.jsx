import React, {useState} from "react";
import { Button, Input } from '@material-ui/core';

export default function ToDoItem({content, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false)
    const [newContent, setNewContent] = useState(content)
    if (isEditing) {
        return (<div>
            <Input type="text" value={newContent} onChange={(e) => setNewContent(() => e.target.value)}/>
            <Button color="primary" onClick={() => {
                onEdit(newContent);
                setIsEditing(() => false)
            }}>Ok
            </Button>
        </div>);
    } else {
        return <div>
            <span>{content}</span>
            <Button color="primary" onClick={() => setIsEditing(() => true)}>Edit</Button>
            <Button color="secondary" onClick={() => onDelete()}>Delete</Button>
        </div>
    }
}