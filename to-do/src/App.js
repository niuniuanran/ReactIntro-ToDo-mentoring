import AddToDo from "./components/AddToDo";
import React, {useState} from "react";
import ToDoItem from "./components/ToDoItem";
import {Card, Typography} from "@material-ui/core"

export default function App() {
    const [toDos, setToDos] = useState([])
    return <div className="home">
        <Typography variant="h3">To do app</Typography>
        <AddToDo onAdd={(newToDo) => {
            setToDos(toDos => [...toDos, newToDo])
        }}/>
        <div>
            <ul>
                {toDos.map((content, index) =>
                    <ToDoItem key={index}
                              content={content}
                              onDelete={() => setToDos((toDos) =>
                                  toDos.filter((_, i) => i !== index)
                              )}
                              onEdit={(newContent) => setToDos((toDos) =>
                                  toDos.map((t, i) =>
                                      i === index
                                          ? newContent
                                          : t
                                  )
                              )}
                    />)}
            </ul>
        </div>
    </div>
}