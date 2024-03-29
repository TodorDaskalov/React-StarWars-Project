import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Path from "../appPaths"

import styles from "./LoginPage.module.css";

const LoginPage = () => {
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const isFormValid = () => {
        return (
            formData.username.trim() !== "" && formData.password.trim() !== ""
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            console.log("Form not valid. Fields cannot be empty.");
            return;
        }

        navigate(`${Path.TablePage}`)
        
    };

    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                </label>
                <button
                    type="submit"
                    className={isFormValid() ? "" : styles.buttonDisabled}
                    disabled={!isFormValid()}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
