import styles from './authen.module.css'
import React, { useState, useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")

  const { loginUser, googleAuth, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (isLogin) {
        await loginUser(email, password);
      }else{
        await registerUser(name, email, password)
      }

      navigate("/");
    }catch(error){
      console.log(error.message);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    await googleAuth(credentialResponse.credential);
    navigate("/");
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authContainer}>
        <div className={styles.brandSection}>
          <h1 className={styles.brandTitle}>Crimson Secrets</h1>
          <p className={styles.brandSubtitle}>
            Confess what the crimson moon has witnessed.
          </p>
        </div>

        <div className={styles.authCard}>
          <div className={styles.toggleSection}>
            <button
              className={isLogin ? styles.activeToggle : styles.toggleBtn}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? styles.activeToggle : styles.toggleBtn}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <form className={styles.authForm} onSubmit={handleSubmit}>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.inputField}
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
            )}

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                className={styles.inputField}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "Enter the Vault" : "Create Account"}
            </button>
          </form>

          <div className={styles.divider}>
            <span className={styles.dividerText}>or continue with</span>
          </div>

          <div className={styles.googleSection}>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
