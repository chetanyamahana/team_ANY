import React, { useState, useEffect } from "react";
import styled from "styled-components";
import websitelogo from "../components/Authentication/images/bgsmall.png";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color:#0C1E44;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CompanyName = styled.h1`
  margin-left: 10px;
`;

const SignOutButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Header = ({ userName, onSignOut }) => {
  const [rotation, setRotation] = useState(0);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation + 360);
    }, 15000);

    return () => clearInterval(interval);
  }, [rotation]);

  return (
    <HeaderContainer>
      <LogoContainer>
        <img
          src={websitelogo}
          alt="Logo"
          className={`h-16 w-16 font-bold rounded-xl transform transition-transform duration-1000 rotate-${rotation}`}
        />{" "}
        <CompanyName className="font-montserrat text-2xl">
          MechConnect
        </CompanyName>
      </LogoContainer>
      <div>
        <span className="mr-4 rounded-xl py-1 px-1">{userName}</span>
        <SignOutButton className="rounded-xl py-1 px-1" onClick={logoutHandler}>
          Log Out
        </SignOutButton>
      </div>
    </HeaderContainer>
  );
};

export default Header;