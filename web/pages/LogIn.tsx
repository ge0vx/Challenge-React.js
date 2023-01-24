import React, { useContext, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import { LOG_IN_TITLE } from "../utils/contants";
import { StoreContext } from "../store/StoreContext";

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const { actions, state } = useContext(StoreContext);

  const [inputData, setInputData] = useState({
    user: "",
    password: "",
  });

  const submit = (e: any) => {
    e.preventDefault();
    actions.signIn({
      user: inputData.user,
      password: inputData.password,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <AccountCircle fontSize="large"></AccountCircle>
        <Typography component="h1" variant="h5">
          {LOG_IN_TITLE}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="user"
            label="User"
            name="user"
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const input = event.target.value.toString();
              setInputData({
                ...inputData,
                [event.target.name]: input,
              });
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const input = event.target.value.toString();
              setInputData({
                ...inputData,
                [event.target.name]: input,
              });
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => submit(e)}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
