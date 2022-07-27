import React from "react";
import Container from "@mui/material/Container";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";
import NavLink from "../navLink/NavLink";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container
        className="container"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Logo />
        <Nav>
          <NavLink link="https://twitter.com/BohdanYunakoff" text="Twitter" />
          <NavLink link="https://github.com/16Bogdan54" text="Github" />
          <NavLink link="https://nationalize.io/" text="API" />
        </Nav>
      </Container>
    </nav>
  );
}
