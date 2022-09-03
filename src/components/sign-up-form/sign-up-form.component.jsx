import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../../routes/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        createAuthUserWithEmailAndPassword(email, password);
        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log("user creation encountered an error", error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
                <FormInput
                    type="email"
                    required
                    label="Email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                <FormInput
                    type="password"
                    required
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <FormInput
                    type="confirmPassword"
                    required
                    label="Confirm Password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button buttonType="default" type="submit">
                    Sign Up
                </Button>
                <button onClick={signInWithGoogle}>log in</button>
            </form>
        </div>
    );
};

export default SignUpForm;