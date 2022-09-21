import React from "react";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
// import { Route } from "react-router";
import { Route,Routes, } from "react-router-dom";
import CartDetail from "../pages/CartDetail";
import {ToastContainer} from "react-toastify"


// import { Routes } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"></ToastContainer>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList /> }  />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:name" element={<ProductDetail /> }  />
              <Route path="/cart" element={<CartDetail /> }  />
            </Routes>
            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
