import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function AddUser() {
  const addUser = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/employees", {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
      });
      alert("Successfully added");
    } catch (err) {
      alert("Error! See the console for details");
      console.log("🚀 ~ file: addUser.tsx:16 ~ addUser ~ err", err);
    }
  };

  return (
    <Box>
      <h1>AddUser</h1>

      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={addUser}
      >
        <TextField id="firstName" label="First Name" variant="outlined" />
        <TextField id="lastName" label="Last Name" variant="outlined" />
        <TextField id="email" type="email" label="E-mail" variant="outlined" />

        <Button type="submit" variant="contained">
          POST
        </Button>
      </Box>
    </Box>
  );
}
