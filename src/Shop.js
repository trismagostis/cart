import React, { useState } from "react";
import Cart from "./Cart";
function Shop() {
  const [listCart, setListCart] = useState(["kliknij aby usunac"]);
  const listItems = ["kliknij strzalkę obok", "ball", "dart", "towel"];
  const handleChange = (event) => {
    setListCart(listCart.concat(event.target.value));
  };
  // console.log(listCart);
  const removeElement = (indexToRemove) => {
    setListCart(listCart.filter((item, index) => index != indexToRemove));
  };
  const listItemsOptions = listItems.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <div id="forms">
      <form>
        <label>
          Wybierz towary:
          <select value="" onChange={handleChange}>
            {listItemsOptions}
          </select>
        </label>
      </form>
      <Cart listCart={listCart} catchRemoved={removeElement} />
    </div>
  );
}

export default Shop;
