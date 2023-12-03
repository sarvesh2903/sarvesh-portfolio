import React from "react";
import "./Header.scss";
import { LinkedinIcon } from "../../assets/icons/LinkedinIcon";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="header__sociallinks">
          <li>
            <LinkedinIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
        </ul>

        <ul className="header__navigation">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Education</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
