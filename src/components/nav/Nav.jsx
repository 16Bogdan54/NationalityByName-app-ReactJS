import React from "react";
import "./nav.css";

export default function Nav(props) {
  return <ul className="nav">{props.children}</ul>;
}
