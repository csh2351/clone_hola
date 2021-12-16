import React, { useEffect } from "react";
// import LoginModal from "component/modal/login_modal/loginModal";
// import Modal from "component/modal/modal_component/modal";
import styles from "./navbar.module.css";
import logo from "../../logo.svg"
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import LoginUser from "component/login_user/loginUser";
// import { setModalVisible } from "store/loginStep";
// import { clearUser, fetchUserByRefreshToken } from "store/user";
// import { toast } from "react-toastify";

/* 
To-do
*/
const Navbar = React.memo(() => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);
//   const history = useHistory();

//   const modalVisible = useSelector((state) => state.loginStep.modalVisible);
  const openModal = () => {
    document.body.style.overflow = "hidden";
    alert("로그인 창 구현 예정");
//     dispatch(setModalVisible(true));
  };
//   const closeModal = () => {
    // document.body.style.overflow = "auto";
//     dispatch(setModalVisible(false));
//   };
  const handleRegister = () => {
    alert("회원가입 창 구현 예정");
    // if (user.id === undefined) {
//       openModal();
//       return;
//     }
//     history.push("/register");
  };

//   useEffect(() => {
//     if (user.nickName) {
//       // page refresh후 갱신
//       dispatch(fetchUserByRefreshToken()).then((response) => {
//         // 유저 nickname 존재시 refresh token을 이용해서 유저정보 얻어옴
//         if (response.meta.requestStatus !== "fulfilled") {
//           history.push("/");
//           dispatch(clearUser()); // 유저 초기화
//           toast.error("로그인이 만료 되었어요!", {
//             position: "top-right",
//             autoClose: 3000,
//           });
//         }
//         //  console.log("fetchByuserRefreshToken response :", response);
//         // 실패했을때 에러처리 필요
//       });
//     }
//   }, [dispatch, history, user.nickName]);

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img
          className={styles.logo}
          src={logo}
          alt="logo"
        />
      </a>
      <div className={styles.loginElementWrapper}>
        <button className={styles.postRegister} onClick={handleRegister}>
          새 글 쓰기
        </button>
        {/* {!user.nickName ? ( */}
          <button className={styles.login} onClick={openModal}>
            로그인
          </button>
        {/* ) : ( */}
          {/* <LoginUser /> */}
        {/* )} */}
      </div>
      {/* <Modal visible={modalVisible} name="login" onClose={closeModal}>
        <LoginModal handleClose={closeModal} tabIndex={0}></LoginModal>
      </Modal> */}
    </nav>
  );
});

export default Navbar;