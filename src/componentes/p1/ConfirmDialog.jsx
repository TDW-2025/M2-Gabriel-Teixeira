import "../../App.css";


function ConfirmDialog({ visible, title, message, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <h3>{title || "Confirmação"}</h3>
        <p>{message}</p>
        <div className="dialog-buttons">
          <button onClick={onConfirm} className="confirm-btn">
            Confirmar
          </button>
          <button onClick={onCancel} className="cancel-btn">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
