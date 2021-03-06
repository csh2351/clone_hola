import React, {useState} from "react";

import styles from "./main.module.css";
import Navbar from "component/nav_bar/navbar";
import Banner from "component/banner/banner";
import LanguageBarList from "component/language_bar_list/languageBarList";
import Rating from "component/rating/rating";

import {AiFillFire} from "react-icons/ai";
import {FaCalendarCheck} from "react-icons/fa";

import ShowByDate from "../../component/show_studies/show_by_date/showByDate";
import ShowByViews from "../../component/show_studies/show_by_views/showByView";

const SHOW_BY_VIEWS = "-views";
const SHOW_BY_DATE = "-createdAt";
const ACTIVE = styles.active;
const INACTIVE = styles.inactive;

const Main = () => {
    const [category, setCategory] = useState(SHOW_BY_DATE);
    const [checked, setChecked] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        //테스트용 삭제 예정
        console.log("로그인 버튼이 정상적으로 클릭되었습니다.");
        setShow(true);
    };

    const toggleCategory = (toggleTo) => {
        if (category === toggleTo) return; // 바꾸려는 대상이 현재 상태와 같으면 return

        if (category === SHOW_BY_VIEWS) setCategory((state) => SHOW_BY_DATE);
        else setCategory((state) => SHOW_BY_VIEWS);
    };

    const handleSelect = (e) => {
        setChecked((checked) => !checked);
    };
    return (
        <>
            <Navbar
                setShow={setShow}
                handleShow={handleShow}
                handleClose={handleClose}
                show={show}
            />
            <Banner/>
            <div className={styles.languageBarWrapper}>
                <LanguageBarList/>
            </div>
            <div className={styles.appWrapper}>
                <div className={styles.app}>
                    <main className={styles.main}>
                        <div className={styles.categoryWrapper}>
                            <section className={styles.category}>
                                <div
                                    className={`${styles.category__item} ${
                                        category === SHOW_BY_DATE ? ACTIVE : INACTIVE
                                    }`}
                                    onClick={() => toggleCategory(SHOW_BY_DATE)}>
                                    <FaCalendarCheck/>
                                    <span className={styles.text}>최신</span>
                                </div>

                                <div
                                    className={`${styles.category__item} ${
                                        category === SHOW_BY_DATE ? INACTIVE : ACTIVE
                                    }`}
                                    onClick={() => toggleCategory(SHOW_BY_VIEWS)}
                                >
                                    <AiFillFire/>
                                    <span className={styles.text}>인기</span>
                                </div>
                            </section>
                            <div className={styles.selectWrapper} onClick={handleSelect}>
                                <input
                                    className={styles.selectboxInput}
                                    type="checkbox"
                                    name="languageSelect"
                                    value="마감 글 보기"
                                    checked={checked ? 'checked' : ''}
                                    readOnly
                                />
                                <label htmlFor="languageSelect">
                                    <span className={styles.selectTitle}>
                                        모집 중인 글만 보기
                                    </span>
                                </label>
                            </div>
                        </div>
                        {category === SHOW_BY_DATE ? (
                            <ShowByDate postStatus={checked ? "RECRUITING" : ""}/>
                        ) : (
                            <ShowByViews postStatus={checked ? "RECRUITING" : ""}/>
                        )}
                    </main>
                </div>
                <Rating/>
            </div>
        </>
    );
};

export default Main;
