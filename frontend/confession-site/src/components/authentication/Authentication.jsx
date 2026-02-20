import styles from './authen.module.css'
import React, { useState, useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import bgVideo from '../../assets/bgVdo.mp4'

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
    console.log("success")
    navigate("/");
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  return (
    <div className={styles.authWrapper}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <h1 className={styles.brandTitle}>Crimson Secrets</h1>
          <p className={styles.brandSubtitle}>
            Confess what the crimson moon has witnessed.
          </p>

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
              <input
                type="text"
                placeholder="Username"
                className={styles.inputField}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "Enter the Vault" : "Create Account"}
            </button>
          </form>

          <div className={styles.divider}>or continue with</div>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
            useOneTap
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
