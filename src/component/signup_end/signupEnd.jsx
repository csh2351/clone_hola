import React from "react";
import styles from "./signupEnd.module.css";

const SignupEnd = ({ handleClose }) => {
  return (
    <>
      <h1 className={styles.title}>
        축하드려요! 가입되었습니다.
        <br />
        Hola에서 당신의 꿈을 코딩하세요!
      </h1>
      <img
        className={styles.logo}
        src="/images/logo/hola_logo_y.png"
        alt="logo"
      />
      <button
        onClick={handleClose}
        className={styles.buttonClose}
        name="complete"
      >
        시작하기
      </button>
    </>
  );
};

export default SignupEnd;
