import React, { useState } from "react";
function Shop() {
  const [listCart, setListCart] = useState([]);
  const listItems = ["kliknij strzalkę obok","ball", "dart", "towel"];
  const handleChange = (event) => {
    setListCart(listCart.concat(event.target.value));
    console.log(listCart);
  };

  const listItemsOptions = listItems.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <form>
      <label>
        Wybierz towary:
        <select value="" onChange={handleChange}>
          {listItemsOptions}
        </select>
      </label>
    </form>
  );
}

export default Shop;
