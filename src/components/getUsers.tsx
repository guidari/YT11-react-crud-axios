import { Box, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../interface/IUser";

export default function GetUsers() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    findAll();
  }, []);

  const findAll = async () => {
    try {
      await axios
        .get("http://localhost:8080/api/employees")
        .then((res) => setUsers(res.data));
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Box>
      <h1>GetUsers</h1>

      <Box
        sx={{
          minHeight: 330,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {users.map((user: IUser) => {
          return (
            <Box key={user.id}>
              {user.id} | {user.firstName} | {user.lastName} | {user.email}
            </Box>
          );
        })}

        <Button variant="contained" onClick={findAll} sx={{ marginTop: 2 }}>
          GET
        </Button>
      </Box>
    </Box>
  );
}
