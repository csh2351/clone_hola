import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./commentItem.module.css";
import studyService from "service/study_service";
import { getFormatedToday } from "common/utils.js";
import CommentButtons from "../comment_buttons/commentButtons";

const CommentItem = React.memo(({ comment, setIsComplete, isComplete }) => {
  // const user = useSelector((state) => state.user);
  const user = {nickName: "test"}
  const [content, setContent] = useState(comment.content);
  const [preContent, setPreContent] = useState(comment.content);
  const [inputVisible, setInputVisible] = useState(false); // 댓글 입력 여부
  const defaultImage =
    "https://media.vlpt.us/images/seeh_h/profile/6b7bfde5-b67c-4665-a2e1-a308e8de2059/tt.PNG?w=120";
  const dispatch = useDispatch();

  // 댓글 수정 버튼 클릭
  const onModifyClick = () => {
    setInputVisible(true);
  };

  // 댓글 삭제 버튼 클릭
  const onDeleteClick = async () => {
    document.body.style.overflow = "auto";
    setInputVisible(false);
    await studyService.deleteComment({ id: comment._id });
    setIsComplete((isComplete) => !isComplete);
  };

  // 댓글 수정 완료 버튼 클릭
  const onModifyCompleteClick = async () => {
    const response = await studyService.modifyComment({
      id: comment._id,
      content,
    });
    if (response === 401) {
      // refresh token으로 access token 불러왔을때
      await studyService.modifyComment({ id: comment._id, content });
    }
    setInputVisible(false);
  };

  // 댓글 취소 버튼 클릭
  const onCancelClick = () => {
    setContent(preContent);
    setInputVisible(false);
  };

  return (
    <li className={styles.commentContainer}>
      <section className={styles.commentHeader}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.userImg}
            src={
              comment.author.image
                ? `${comment.author.image}`
                : defaultImage
            }
            alt="사용자 이미지"
          />

          <div className={styles.commentInfo}>
            <div className={styles.title}>
              <div className={styles.userNickname}>
                {comment.author.nickName}
              </div>
              <div className={styles.registeredDate}>
                {getFormatedToday(comment.createdAt)}
              </div>
            </div>
          </div>
        </div>
        {user.nickName === comment.author.nickName && (
          <CommentButtons
            onModifyClick={onModifyClick}
            onDeleteClick={onDeleteClick}
          ></CommentButtons>
        )}
      </section>

      <section className={styles.commentContent}>
        {inputVisible && (
          <>
            <div className={styles.commentInput}>
              <input
                type="text"
                name="contentInput"
                value={content}
                placeholder={comment.content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              <div className={styles.commentInputButton}>
                <button
                  onClick={onCancelClick}
                  className={styles.buttonCancel}
                  name="complete"
                >
                  취소
                </button>
                <button
                  onClick={onModifyCompleteClick}
                  className={styles.buttonComplete}
                  name="cancel"
                >
                  완료
                </button>
              </div>
            </div>
          </>
        )}
        {!inputVisible && <p className={styles.commentContent}>{content}</p>}
      </section>
    </li>
  );
});

export default CommentItem;
