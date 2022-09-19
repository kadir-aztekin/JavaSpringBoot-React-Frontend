import React,{useState} from "react";
import {Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary"
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticaded] = useState(false)
  return (

    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary></CartSummary>
            {isAuthenticated? <SignedIn></SignedIn>: <SignedOut></SignedOut>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
