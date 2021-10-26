import React, { useState, useEffect } from "react";
import Navbar from "../src/component/Navbar";
import Category from "./component/Category";
import Products from "./component/Products";
import ProductData from "./component/ProductData";
import MainNav from "./component/MainNav";
import Footer from "./component/Footer";
import Offer from "./component/Offer";
import "./component/style.css";
import Informationproduct from "./component/Informationproduct";
import { Route, Switch } from "react-router-dom";
import Cart from "./component/Cart";
import Content from "./component/Content";
import Account from "./component/Account";
import Pagination from "./component/Pagination";
import Errorpage from "./component/Errorpage";
import ProductHome from "./component/ProductHome";
import { BrowserRouter as Router } from "react-router-dom";
import Logout from "./component/Logout";

const uniqueData = [
  ...new Set(
    ProductData.map((curVal) => {
      return curVal.category;
    })
  ),
  "All",
];

function App() {
  const [productData, setproductData] = useState(ProductData);
  const [unique, setUnique] = useState(uniqueData);

  const filterItems = (category) => {
    if (category === "All") {
      setproductData(ProductData);
      return;
    }

    const updateList = ProductData.filter((curEle) => {
      return curEle.category === category;
    });
    setproductData(updateList);
  };

  const getlocalstroage = () => {
    const list = localStorage.getItem("cartList");
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [addItem, setaddItem] = useState(getlocalstroage());

  const addData = (val) => {
    const filterItem = productData.filter((cur) => {
      return cur.id === val.id;
    });
    setaddItem([...addItem, ...filterItem]);
  };

  const remove = (index) => {
    const filterdata = addItem.filter((val, idx) => {
      return idx !== index;
    });
    setaddItem(filterdata);
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(addItem));
  }, [addItem]);

  return (
    <>
      <Router>
        <Navbar productData={productData} />

        <Switch>
          <Route exact path="/">
            <Content />
            <ProductHome productData={productData} />
            <Offer />
            <Category />
          </Route>

          <Route path="/product">
            <MainNav filterItems={filterItems} unique={unique} />
            <Products productData={productData} />
            <Pagination />
          </Route>

          <Route exact path="/information/:id">
            <Informationproduct addData={addData} productData={productData} />
          </Route>

          <Route exact path="/cart">
            <Cart addItem={addItem} remove={remove} />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route>
            <Errorpage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
