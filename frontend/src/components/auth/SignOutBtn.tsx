import React from "react";
import { signOut } from "../../../lib/authClient";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ef4444; /* Tailwind red-500 */
  color: white;
  border-radius: 0.375rem; /* Tailwind rounded-md */
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #dc2626; /* Tailwind red-600 */
  }
`;

const SignOutButton: React.FC = () => {
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOutButton;
