import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/App.module.css";

function ConfirmDialog({ visible, title, message, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogBox}>
        <h3>{title || "Confirmação"}</h3>
        <p>{message}</p>
        <div className={styles.dialogButtons}>
          <button onClick={onConfirm} className={styles.confirmBtn}>
            Confirmar
          </button>
          <button onClick={onCancel} className={styles.cancelBtn}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

ConfirmDialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmDialog;
