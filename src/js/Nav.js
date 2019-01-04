import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <Navbar color="light" light expand="md">
      <NavLink to="/">Home</NavLink>
      <NavbarToggler onClick={toggleIsOpen} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/about" onClick={toggleIsOpen}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/menu" onClick={toggleIsOpen}>
              Menu
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/promotions" onClick={toggleIsOpen}>
              Promotions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" onClick={toggleIsOpen}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <a
              href="https://www.facebook.com/Brothers-Pizza-2228025304137154/"
              target="_blank"
              onClick={toggleIsOpen}
            >
              Facebook
            </a>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
