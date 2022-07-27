import React from "react";
import { VscLinkExternal } from "react-icons/vsc";

export default function NavLink({ link, text }) {
  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer">
        {text} <VscLinkExternal />
      </a>
    </li>
  );
}
