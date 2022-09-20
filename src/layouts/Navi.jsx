import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary"
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticaded] = useState(true)
  function handleSignOut() {
    setIsAuthenticaded(false) 
    
  }

  function handleSignIn() {
    setIsAuthenticaded(true) 
  }
  return (

    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated? <SignedIn signdOut={handleSignOut}  bisey="1"/> : 
            <SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
