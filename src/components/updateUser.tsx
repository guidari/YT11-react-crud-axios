import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function UpdateUser() {
  const updateUser = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8080/api/employees", {
        id: e.target.id.value,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
      });
      alert("Successfully updated");
    } catch (err) {
      alert("Error! See the console for details");
      console.log("🚀 ~ file: addUser.tsx:16 ~ addUser ~ err", err);
    }
  };

  return (
    <Box>
      <h1>UpdateUser</h1>

      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={updateUser}
      >
        <TextField id="id" label="Id" variant="outlined" />
        <TextField id="firstName" label="First Name" variant="outlined" />
        <TextField id="lastName" label="Last Name" variant="outlined" />
        <TextField id="email" type="email" label="E-mail" variant="outlined" />

        <Button type="submit" variant="contained">
          PUT
        </Button>
      </Box>
    </Box>
  );
}
