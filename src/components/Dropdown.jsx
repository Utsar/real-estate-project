import styled from "styled-components";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { menuData } from "../assets/data/MenuData";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 1;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)``;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #000d1a;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Dropdown = () => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((items, index) => (
            <DropdownLink to={items.link} key={index}>
              {items.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <ButtonWrapper>
          <Button primary="true" round="true" to="/conctact">
            Contact Us
          </Button>
        </ButtonWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;