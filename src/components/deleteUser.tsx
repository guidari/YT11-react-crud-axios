import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export default function DeleteUser() {
  const deleteUser = async (e: any) => {
    e.preventDefault();

    try {
      await axios.delete(
        `http://localhost:8080/api/employees/${e.target.id.value}`
      );
      alert("Successfully deleted");
    } catch (err) {
      alert("Error! See the console for details");
      console.log("🚀 ~ file: addUser.tsx:16 ~ addUser ~ err", err);
    }
  };

  return (
    <Box>
      <h1>DeleteUser</h1>

      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        component="form"
        onSubmit={deleteUser}
      >
        <TextField id="id" label="Id" variant="outlined" />

        <Button type="submit" variant="contained">
          Delete
        </Button>
      </Box>
    </Box>
  );
}
