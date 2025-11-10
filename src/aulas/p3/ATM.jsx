import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, deposit, withdraw, resetMessage } from "./AtmSlice";
import styles from "./Atm.module.css";

function ATM() {
  const { users, currentUser, message } = useSelector(state => state.atm);
  const dispatch = useDispatch();

  const [pin, setPin] = useState("");
  const [amount, setAmount] = useState(0);
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [stage, setStage] = useState("enterPin"); 

  useEffect(() => {
    console.log("🔑 Utilizadores disponíveis e PINs para teste:");
    users.forEach(u => console.log(`PIN: ${u.pin}, Saldo: ${u.balance}€`));
  }, [users]);

  const handleLogin = () => {
    const userExists = users.find(u => u.pin === pin);
    if (userExists) {
      dispatch(login(pin));
      setPin("");

      const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedCode(randomCode);
      console.log(`📱 Código de verificação para ${pin}: ${randomCode}`);

      setStage("verifyCode");
    } else {
      alert("PIN incorreto. Tente novamente.");
      setPin("");
    }
  };

  const handleCodeVerification = () => {
    if (code === generatedCode) {
      setStage("done");
      setCode("");
      setGeneratedCode("");
    } else {
      alert("❌ Código incorreto. Tente novamente.");
      setCode("");
    }
  };

  const handleDeposit = () => {
    if (amount > 0) {
      dispatch(deposit(amount));
      setAmount(0);
    }
  };

  const handleWithdraw = () => {
    if (amount > 0) {
      dispatch(withdraw(amount));
      setAmount(0);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setStage("enterPin");
  };

  const currentUserData = currentUser !== null ? users[currentUser] : null;

  return (
    <div className={styles.app}>
      <h1>ATM Simulator</h1>

      {stage === "enterPin" && (
        <div className={styles.pinSection}>
          <input
            type="password"
            placeholder="Insere o PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
        </div>
      )}

      {stage === "verifyCode" && (
        <div className={styles.pinSection}>
          <p>Um código foi enviado para o console. Verifica o console do navegador.</p>
          <input
            type="text"
            placeholder="Insere o código de verificação"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleCodeVerification}>Verificar Código</button>
        </div>
      )}

      {stage === "done" && currentUserData && (
        <div className={styles.transactionSection}>
          <p>Bem-vindo! Saldo atual: {currentUserData.balance} €</p>
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <div className={styles.buttons}>
            <button onClick={handleDeposit}>Depositar</button>
            <button onClick={handleWithdraw}>Levantar</button>
            <button onClick={handleLogout}>Sair</button>
          </div>
        </div>
      )}

      {message && (
        <div className={styles.message}>
          <span>{message}</span>
          <button onClick={() => dispatch(resetMessage())}>X</button>
        </div>
      )}
    </div>
  );
}

export default ATM;
