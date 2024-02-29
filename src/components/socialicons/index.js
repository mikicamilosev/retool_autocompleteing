import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTelegram,
  FaDiscord
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
        {socialprofils.discord && (
          <li>
            <a href={socialprofils.discord} >
              <FaDiscord />
            </a>
          </li>
        )}        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
