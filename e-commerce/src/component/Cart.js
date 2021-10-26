import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductData from "./ProductData";

const Cart = ({ addItem, remove }) => {
  const [count, setcount] = useState(1);
  let totalPrice = 0;
  let totalItem = 0;

  const Incre = (idx) => {
    const updateIncre = addItem.findIndex((val) => {
      const { id } = val;
      return id === idx;
    });

    setcount((addItem[updateIncre].quantity += 1));
  };
  const Decre = (idx) => {
    const updateIncre = addItem.findIndex((val) => {
      const { id } = val;
      return id === idx;
    });

    setcount(
      addItem[updateIncre].quantity > 1
        ? (addItem[updateIncre].quantity -= 1)
        : 1
    );
  };

  const history = useHistory();
  const callProduct = async (req, res) => {
    try {
      const res = await fetch("/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (!res.status === 200) {
        throw new Error("user not found");
      }
    } catch (error) {
      alert("please login");
      history.push("/account");
    }
  };
  useEffect(() => {
    callProduct();
  }, []);

  return (
    <>
      {addItem.map((val, index) => {
        const { image, id, price, title, quantity } = val;
        totalPrice += price * quantity;
        totalItem += quantity;

        return (
          <>
            <div className="small-container cart-page" key={id}>
              <table>
                <tr>
                  <th>Product</th>
                  <th>Qantity</th>
                  <th>sub-total</th>
                </tr>
                <tr>
                  <td>
                    <div className="cart-info">
                      <img src={image} alt="" />
                      <div>
                        <p>{title}</p>
                        <small>{price}</small>
                        <br />
                        <button onClick={() => remove(index)}>Remove</button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="quantity">
                      <i class="fas fa-plus" onClick={() => Incre(id)}></i>
                      <div className="box">{quantity}</div>
                      <i class="fas fa-minus" onClick={() => Decre(id)}></i>
                    </div>
                  </td>
                  <td>{price * quantity}</td>
                </tr>
              </table>
            </div>
          </>
        );
      })}

      <div className="total-price">
        <table>
          <tr>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
          <tr>
            <td>{totalItem}</td>
            <td>{totalPrice}</td>
          </tr>
          <button className="btn buy-now">Buy now</button>
        </table>
      </div>
    </>
  );
};
export default Cart;
