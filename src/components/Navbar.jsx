import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../assets/data/MenuData";
import { Button } from "./Button";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 1000;
  position: fixed;
  background: #000;
  width: 100%;
`;
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;
const MenuBars = styled.i``;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavButton = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Utsar-Living</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavButton>
        <Button to="/contact" primary={true}>
          Contact Us
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
