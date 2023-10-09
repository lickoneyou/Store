import React, { useRef } from "react";
import styles from "./BuyPopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  showErrorToast,
  showSuccessPurchaseToast,
} from "../../Main/Goods/toast";

const BuyPopup = () => {
  const nameRef = useRef();
  const surNameRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const adressRef = useRef();
  const cardNumsRef = useRef();
  const cardValidRef = useRef();

  const total = useSelector((state) => state.cart.price);
  const popUp = useSelector((state) => state.popUp);
  const dispatch = useDispatch();

  window.addEventListener("click", function (event) {
    if (event.target.dataset.wrap == "wrapper") {
      dispatch({ type: "none" });
    }
  });

  const validateName = () => {
    if (nameRef.current.value.length < 3) {
      nameRef.current.style.borderColor = "red";
      return false;
    } else {
      nameRef.current.style.borderColor = "green";
      return true;
    }
  };

  const validateSurName = () => {
    if (surNameRef.current.value.length < 3) {
      surNameRef.current.style.borderColor = "red";
      return false;
    } else {
      surNameRef.current.style.borderColor = "green";
      return true;
    }
  };

  const validatePhoneNumber = () => {
    const RE = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g;
    if (RE.test(telRef.current.value) || telRef.current.value == 0) {
      telRef.current.style.borderColor = "red";
      return false;
    } else {
      telRef.current.style.borderColor = "green";
      return true;
    }
  };

  const validateEmail = () => {
    const RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (RE.test(emailRef.current.value)) {
      emailRef.current.style.borderColor = "green";
      return true;
    } else {
      emailRef.current.style.borderColor = "red";
      return false;
    }
  };

  const validateAdress = () => {
    if (adressRef.current.value.length < 10) {
      adressRef.current.style.borderColor = "red";
      return false;
    } else {
      adressRef.current.style.borderColor = "green";
      return true;
    }
  };

  const validateCardNums = () => {
    if (cardNumsRef.current.value.replace(/\s/gi, "").length !== 16) {
      cardNumsRef.current.style.borderColor = "red";
      return false;
    } else {
      cardNumsRef.current.style.borderColor = "green";
      return true;
    }
  };

  const validateCardValid = () => {
    if (cardValidRef.current.value.replace(/\s/gi, "").length !== 4) {
      cardValidRef.current.style.borderColor = "red";
      return false;
    } else {
      cardValidRef.current.style.borderColor = "green";
      return true;
    }
  };

  const buy = () => {
    if (
      validateName() &&
      validateSurName() &&
      validatePhoneNumber() &&
      validateEmail() &&
      validateAdress() &&
      validateCardNums() &&
      validateCardValid()
    ) {
      dispatch({ type: "REMOVE_ALL" });
      dispatch({ type: "none" });
      showSuccessPurchaseToast();
    } else {
      showErrorToast();
    }
  };

  return (
    <div
      className={styles.popupWrapper}
      style={{ display: popUp }}
      data-wrap="wrapper"
    >
      <div className={styles.popup}>
        <div className={styles.nameWrapper}>
          <input
            type="text"
            placeholder="Name"
            ref={nameRef}
            onChange={validateName}
          />
          <input
            type="text"
            placeholder="Surname"
            ref={surNameRef}
            onChange={validateSurName}
          />
        </div>
        <div className={styles.contactsWrapper}>
          <div className={styles.telEmailWrapper}>
            <input
              type="number"
              placeholder="Phone"
              ref={telRef}
              onChange={validatePhoneNumber}
            />
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              onChange={validateEmail}
            />
          </div>
          <input
            type="text"
            placeholder="Adress"
            ref={adressRef}
            onChange={validateAdress}
          />
        </div>
        <div className={styles.cardWrapper}>
          <input
            type="number"
            placeholder="Card"
            ref={cardNumsRef}
            onChange={validateCardNums}
          />
          <input
            type="number"
            placeholder="Valid"
            ref={cardValidRef}
            onChange={validateCardValid}
          />
        </div>
        <div className={styles.buyWrapper}>
          <p>Total: {total}$</p>
          <button onClick={buy}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default BuyPopup;
