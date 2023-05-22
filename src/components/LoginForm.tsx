import { FormEvent, useRef, useState } from "react";
import api from "../api/index.js";
import Credentials from "../interfaces/credentials.js";
import { AuthUser, setUser } from "../store/authSlice.ts";
import { useAppDispatch } from "../store/hooks.ts";

const LoginForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [register, setRegister] = useState(false);

  const fieldsetStyles = "flex justify-between w-[80%] m-auto";
  const inputStyles = "border-b-2 border-black outline-none focus:bg-slate-200";

  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent) => {
    if (usernameRef.current === null || passwordRef.current === null) return;
    event.preventDefault();
    const credentials: Credentials = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      register && api.user.registerUser(credentials);
      const response = await api.user.loginUser(credentials);
      console.log(response);
      const returnedUserObject: AuthUser = {
        username: response.user.username,
        _id: response.user._id,
        token: response.token,
      };
      dispatch(setUser(returnedUserObject));
    } catch (error: any) {
      window.alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <legend className="text-xl">{register ? "Register" : "Log In"}</legend>
      <fieldset className="flex gap-2">
        <label htmlFor="register">Register?</label>
        <input
          className="focus:outline-dotted"
          type="checkbox"
          name="register"
          id="register"
          value={register ? "checked" : "unchecked"}
          onChange={() => setRegister((prev) => !prev)}
        />
      </fieldset>
      <fieldset className={fieldsetStyles}>
        <label htmlFor="username">Username</label>
        <input
          className={inputStyles}
          type="text"
          name="username"
          id="username"
          ref={usernameRef}
          required
        />
      </fieldset>
      <fieldset className={fieldsetStyles}>
        <label htmlFor="password">password</label>
        <input
          className={inputStyles}
          type="text"
          name="password"
          id="password"   
          ref={passwordRef}
          required
        />
      </fieldset>
      <button
        className="border-2 border-black rounded p-2 bg-slate-200 mx-auto focus:outline-dotted outline-2"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
