import { Box, Grid, Paper, styled } from "@mui/material";
import { useState } from "react";
import AddUser from "./components/addUser";
import DeleteUser from "./components/deleteUser";
import GetUsers from "./components/getUsers";
import UpdateUser from "./components/updateUser";
// import './App.css'

export default function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: 10,
    minHeight: 400,
  }));

  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>CRUD with axios</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          rowSpacing={5}
          columns={{ xs: 3, sm: 6, md: 12 }}
          sx={{ padding: 5 }}
        >
          <Grid xs={3}>
            <Item>
              <GetUsers />
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <AddUser />
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <UpdateUser />
            </Item>
          </Grid>

          <Grid xs={3}>
            <Item>
              <DeleteUser />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
