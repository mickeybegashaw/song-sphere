import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { useSession } from "../../../lib/authClient";
import SignOutButton from "../auth/SignOutBtn";

const HeaderContainer = styled.header<{
  isScrolled: boolean;
  isHomePage: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) => {
    if (!props.isHomePage) return "rgba(255, 255, 255, 0.95)";
    return props.isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent";
  }};
  backdrop-filter: ${(props) => {
    if (!props.isHomePage) return "blur(10px)";
    return props.isScrolled ? "blur(10px)" : "none";
  }};
  border-bottom: ${(props) => {
    if (!props.isHomePage) return "1px solid rgba(0, 0, 0, 0.1)";
    return props.isScrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none";
  }};
  box-shadow: ${(props) => {
    if (!props.isHomePage) return "0 4px 20px rgba(0, 0, 0, 0.1)";
    return props.isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none";
  }};
  z-index: 1000;
  padding: 0 2rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img<{ isScrolled: boolean; isHomePage: boolean }>`
  width: 110px;
  height: 110px;
  border-radius: 8px;
  transition: all 0.3s ease;
  filter: ${(props) => {
    if (!props.isHomePage) return "none";
    return props.isScrolled ? "none" : "brightness(0) invert(1)";
  }};

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const Nav = styled.nav<{
  isOpen: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${(props) => {
      if (!props.isHomePage) return "white";
      return props.isScrolled ? "white" : "rgba(255, 255, 255, 0.95)";
    }};
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)<{
  isActive: boolean;
  isScrolled: boolean;
  isHomePage: boolean;
}>`
  color: ${(props) => {
    if (!props.isHomePage) return props.isActive ? "#667eea" : "#333";
    return props.isScrolled
      ? props.isActive
        ? "#667eea"
        : "#333"
      : "#c6c5c5ff";
  }};
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${(props) => {
      if (!props.isHomePage) return "#667eea";
      return props.isScrolled ? "#667eea" : "#fff";
    }};
    background: ${(props) => {
      if (!props.isHomePage) return "rgba(102, 126, 234, 0.1)";
      return props.isScrolled
        ? "rgba(102, 126, 234, 0.1)"
        : "rgba(255, 255, 255, 0.2)";
    }};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    height: 2px;
    background: ${(props) => {
      if (!props.isHomePage) return "#667eea";
      return props.isScrolled ? "#667eea" : "white";
    }};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button<{
  isScrolled: boolean;
  isHomePage: boolean;
}>`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => {
    if (!props.isHomePage) return "#333";
    return props.isScrolled ? "#333" : "white";
  }};
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => {
      if (!props.isHomePage) return "rgba(0, 0, 0, 0.05)";
      return props.isScrolled
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(255, 255, 255, 0.2)";
    }};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const navItems = [
    { path: "/", label: "Home", icon: "" },
    { path: "/songs", label: "Songs", icon: "" },
    { path: "/statistics", label: "Statistics", icon: "" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    } else {
      setIsScrolled(true);
    }

    return () => {
      if (isHomePage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isHomePage]);

  return (
    <HeaderContainer isScrolled={isScrolled} isHomePage={isHomePage}>
      <HeaderContent>
        <LogoContainer to="/" onClick={() => setIsMenuOpen(false)}>
          <LogoImage
            src="/songsphere.png"
            alt="Song Sphere Logo"
            isScrolled={isScrolled}
            isHomePage={isHomePage}
          />
        </LogoContainer>

        <Nav
          isOpen={isMenuOpen}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              isScrolled={isScrolled}
              isHomePage={isHomePage}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
          {user && <SignOutButton />}
        </Nav>

        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          isScrolled={isScrolled}
          isHomePage={isHomePage}
        >
          {isMenuOpen ? "✕" : "☰"}
        </MobileMenuButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
