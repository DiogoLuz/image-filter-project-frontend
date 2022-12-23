import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/LoginField.module.scss";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onValidSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    fetch("http://localhost:5001/users/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      .then((output) => {
        console.log(output);
      });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onValidSubmit)}>
      <input
        className={styles.textInput}
        type="text"
        placeholder="Email"
        {...register("email", { required: true })}
      />
      <input
        className={styles.textInput}
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
      />
      <input type="submit" value="Login" />

      <label className={styles.signUpLabel} htmlFor="signup">
        New user? Sign up here:{" "}
      </label>

      <Link href="/signup" passHref legacyBehavior>
        <input type="button" value="Sign Up" id="signup" />
      </Link>
    </form>
  );
}

export default Login;
