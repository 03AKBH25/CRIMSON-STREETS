import styles from './authen.module.css'
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Token:", credentialResponse.credential);

    // 🔥 Send this token to your backend
    // fetch("/api/auth/google", { method: "POST", body: JSON.stringify({ token: credentialResponse.credential }) })
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const registerUser = () => {
    return(
        <div></div>
    )
  }

  return (
    <div className={styles.authWrapper}>

      <div className={styles.authContainer}>

        {/* Brand */}
        <div className={styles.brandSection}>
          <h1 className={styles.brandTitle}>Crimson Secrets</h1>
          <p className={styles.brandSubtitle}>
            Confess what the crimson moon has witnessed.
          </p>
        </div>

        {/* Auth Card */}
        <div className={styles.authCard}>

          {/* Toggle */}
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

          {/* Form */}
          <form className={styles.authForm}>
            {!isLogin && (
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  placeholder="Username"
                  className={styles.inputField}
                />
              </div>
            )}

            <div className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={styles.inputField}
              />
            </div>

            <div className={styles.inputGroup}>
              <input
                type="password"
                placeholder="Password"
                className={styles.inputField}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "Enter the Vault" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className={styles.divider}>
            <span className={styles.dividerText}>or continue with</span>
          </div>

          {/* Google OAuth */}
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
