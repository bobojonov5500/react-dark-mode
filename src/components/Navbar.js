import React from "react";
import { Container, LogoWrapper, Ul } from "./NavbarStyle";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <Container>
      <LogoWrapper>
        <NavLink
          style={{
            textDecoration: "none",
            color: location.pathname === "/home" ? "green" : "",
          }}
          to={"/home"}
        >
          logo web site
        </NavLink>
      </LogoWrapper>
      <Ul>
        <NavLink
          style={{
            textDecoration: "none",
            color: location.pathname === "/aboutus" ? "green" : "",
          }}
          to={"/aboutus"}
        >
          About us
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: location.pathname === "/contact" ? "green" : "",
          }}
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          to={"/nightmode"}
          style={{
            textDecoration: "none",
            color: location.pathname === "/nightmode" ? "green" : "",
          }}
        >
          Night Mode{" "}
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to={"/logout"}>
          Log Out{" "}
        </NavLink>
      </Ul>
    </Container>
  );
}

export default Navbar;
