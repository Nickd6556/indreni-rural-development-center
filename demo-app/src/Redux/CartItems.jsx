import React from "react";
import { useSelector } from "react-redux";
import ChangeItems from "./ChangeItems";
import Student from "./Student";
import StudentForm from "./Reducers/StudentForm";

const CartItems = () => {
  const data = useSelector((store) => store.cart)
  return (
    <>
      <h2 className="text-center text-success">
        The Total number of items in a cart are {data.cartCount}
      </h2>
      <ChangeItems />
      <Student />
      <StudentForm/>
    </>
  );
};

export default CartItems
