import React from "react";
import { signOut } from "../../../lib/authClient";
import styled from "@emotion/styled";
import { CiLogout } from "react-icons/ci";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: black;
  border-radius: 0.375rem; 
  cursor: pointer;


`;

const SignOutButton: React.FC = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return <Button onClick={handleSignOut}> <CiLogout/> <span>Sign Out</span></Button>;
};

export default SignOutButton;
