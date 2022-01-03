import React from "react";

const CancelButton = ({
    onPublish,
    onCancel,
    confirmMsg,
    positiveMsg,
    negativeMsg
}) => {
    return (
        <div className={styles.wrapper}>
        <div className={styles.text}>{confirmMsg}</div>
        <section className={styles.buttons}>
          <button onClick={onCancel} className={styles.cancelButton}>
            {negativeMsg}
          </button>
          <button onClick={onPublish} className={styles.registerButton}>
            {positiveMsg}
          </button>
        </section>
      </div>
    );
};

export default CancelButton;