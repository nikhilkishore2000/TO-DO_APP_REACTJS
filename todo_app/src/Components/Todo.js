import React, { useState } from "react";
import NavBar from "./NavBar";
import {
  Container,
  Box,
  TextField,
  Button,
  Stack,
  List,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearAllIcon from "@mui/icons-material/ClearAll";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const addTask = () => {
    setTodoList([...todoList, todoInput]);
    setTodoInput("");
  };
  const clearAll = () => {
    setTodoList([]);
  };
  return (
    <Box>
      <NavBar />
      <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Task"
            variant="outlined"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            sx={{ margin: 5 }}
          />
          <Button
            size="medium"
            variant="contained"
            endIcon={<AddIcon />}
            sx={{ width: "150px" }}
            onClick={addTask}
          >
            Add
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="error"
            endIcon={<ClearAllIcon />}
            sx={{ width: "300px" }}
            onClick={clearAll}
          >
            Clear All
          </Button>
        </Stack>
      </Container>
      <Container maxWidth="sm">
        {todoList.map((item) => {
          return (
            <List key={item}>
              <ListItem>{item}</ListItem>
            </List>
          );
        })}
      </Container>
    </Box>
  );
}
