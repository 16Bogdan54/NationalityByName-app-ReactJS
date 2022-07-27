import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Nationality from "../nationality/Nationality";
import "./nameForm.css";
import axios from "axios";

export default function NameForm() {
  const [name, setName] = useState("");
  const [probability, setProbability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.nationalize.io?name=${name}`)
      .then((res) => setProbability(res.data.country));
  };

  return (
    <Container
      sx={{
        height: "90vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <form className="form" onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "1rem",
          }}
        >
          <TextField
            id="demo-helper-text-misaligned"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            sx={{
              margin: "0.5rem 0rem",
            }}
          />

          {probability !== "" && <Nationality data={probability} />}
          <input className="submitButton" type="submit" placeholder="submit" />
        </Box>
      </form>
    </Container>
  );
}
