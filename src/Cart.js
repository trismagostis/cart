import React from "react";
function Cart(props) {
  const listCartOptions = props.listCart.map((item, index) => {
    return <option key={index} value={index}>{item}</option>;
  });
//   console.log(listCartOptions);
  return (
    <form>
      <label>
        Wybrałeś towary:
        <select value="" onChange={(event)=>props.catchRemoved(event.target.value)}>{listCartOptions}</select>
      </label>
    </form>
  );
}

export default Cart;
