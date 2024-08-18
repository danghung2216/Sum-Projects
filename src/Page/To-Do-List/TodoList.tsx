import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { Fragment, useState, KeyboardEvent, ChangeEvent } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../../App.css";
interface ITodoItem {
  title: string;
  description: string;
  completed: boolean;
}

const TodoList = () => {
  // const [title, setTitle] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  // const [description, setDescription] = useState([]);
  const [newDescription, setNewDescription] = useState("");
  const [allTodos, setAllTodos] = useState<ITodoItem[]>([]);

  const handleAddTodo = () => {
    let newTodoItem: ITodoItem = {
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    let uploadNewTodoItem = [...allTodos];
    uploadNewTodoItem.push(newTodoItem);
    setAllTodos(uploadNewTodoItem);
    setNewTitle("");
    setNewDescription("");
  };
  const enterDoAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const hanhdleDelete = (index: number) => {
    let deleteItemTodo = [...allTodos];
    deleteItemTodo.splice(index, 1);
    setAllTodos(deleteItemTodo);
  };
  const handleMarkCompleted = (index: number) => {
    let updatedTodos = [...allTodos];
    // updatedTodos[index].completed = !updatedTodos[index].completed;

    if ((updatedTodos[index].completed = !updatedTodos[index].completed)) {
      updatedTodos.unshift(allTodos[index]);
      updatedTodos.splice(index + 1, 1);
      setAllTodos(updatedTodos);
    }

    // setAllTodos(updatedTodos);
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="wrap w-2/3 justify-center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "md",
          }}
        >
          <Grid
            container
            maxWidth="md"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "5px",
            }}
            spacing={3}
          >
            <Typography variant="h2"> Todo App </Typography>
          </Grid>

          <Grid
            container
            maxWidth="md"
            className="todo-app"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // margin: "auto",
            }}
            spacing={3}
          >
            {/* Title and Decription */}

            <Grid item xs={4}>
              {/* <label htmlFor="title"> Title</label> */}
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                value={newTitle}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewTitle(e.target.value)
                }
                onKeyPress={enterDoAdd}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <label htmlFor="Descripton"> Title</label> */}
              <TextField
                id="Descripton"
                label="Descripton"
                variant="outlined"
                value={newDescription}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewDescription(e.target.value)
                }
                onKeyPress={enterDoAdd}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" onClick={handleAddTodo}>
                Add
              </Button>
            </Grid>
          </Grid>
          {/* Todolist */}
          <Grid
            container
            className="todolist"
            direction="column"
            maxWidth="md"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginTop: "10px",
              backgroundColor: "#FFD700",
            }}
            spacing={3}
          >
            {allTodos.map((item, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  container
                  spacing={2}
                  maxWidth="md"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    borderBottom: " 2px solid #CCC",
                  }}
                >
                  <Typography key={index}>
                    <h2
                      style={{
                        textAlign: "left",
                        margin: "1px",
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {index + 1} - {item.title}
                    </h2>
                    <p
                      style={{
                        textAlign: "left",
                        margin: "1px",
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {item.description}
                    </p>
                  </Typography>
                  <Typography>
                    <Button variant="text" onClick={() => hanhdleDelete(index)}>
                      {" "}
                      <DeleteIcon
                        fontSize="medium"
                        style={{ marginRight: "3px" }}
                      />
                    </Button>
                    <Button
                      variant="text"
                      onClick={() => handleMarkCompleted(index)}
                    >
                      <CheckCircleOutlineIcon
                        fontSize="medium"
                        style={{ color: "green" }}
                      />
                    </Button>
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default TodoList;
