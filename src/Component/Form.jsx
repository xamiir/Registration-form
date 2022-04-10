//import React, { useReducer } from "react";
import { useState } from "react";
import "./form.css";
// const initEnterName = {
//   value: "",
//   isvalid: false,
// };
// const enterNameReducer = (state, action) => {
//   if (action.type === "NAMECHANGE") {
//     return { value: action.payload };
//   }
// };

const Form = () => {
  // const [enterName, enterNameDispatcher] = useReducer(
  //   enterNameReducer,
  //   initEnterName
  // );
  // const enterNameChangeHandler = (e) => {
  //   enterNameDispatcher({ type: "NAMECHANGE", payload: e.traged.value });
  // };

  const [fullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPssword, setConfirmPassword] = useState("");

  const changeFullName = (e) => {
    setFullName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const ChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const ChangeConfrmPasswodHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (fullName.trim().length == 0) {
      alert(" name is not valid");
    }
    if (Email.trim().length == 0) {
      return;
    }
    if (password.trim().length == 0) {
      alert("passwod is not valid ");
    }
    if (confirmPssword.trim().length == 0) {
      alert("confirmPassword is not valid");
    }
    if ((confirmPssword.trim().length == password.trim().length) == 0) {
      alert("confirmPassword not equal to password");
    }
    const data = {
      fullName,
      Email,
      password,
      confirmPssword,
    };
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-white -h-96 w-1/2  m-10 shadow-2xl   flext  ml-96 items-center rounded-md font-nunito  ">
      <form onSubmit={submitFormHandler}>
        <div className="font-bold items-center text-center text-2xl ">
          Regester/form
        </div>
        <div className="input_group ">
          <label htmlFor="age" className="label">
            EnterName:{""}
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={changeFullName}
            className="input_control"
            value={fullName}
          ></input>
        </div>
        <div className="input_group">
          <label htmlFor="Email" className="label">
            Email:
          </label>
          <input
            htmlFor="Email"
            type="Email"
            id="Email"
            name="Email"
            value={Email}
            onChange={changeEmail}
            className="input_control"
          ></input>
        </div>
        <div className="input_group">
          <label htmlFor="age" className="label">
            password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={ChangePasswordHandler}
            className="input_control"
          ></input>
        </div>
        <div className="input_group">
          <label htmlFor="age" className="label">
            confirmPssword:
          </label>
          <input
            type="password"
            id="confirmpasswod"
            name="confirmpasswod"
            value={confirmPssword}
            onChange={ChangeConfrmPasswodHandler}
            className="input_control"
          ></input>
        </div>
        <div className="pb-0 max-w-sm:w-10 m-7 px-5 py-7 ">
          <button className="  text-center bg-blue-300 rounded-md w-full py-2  text-xl font-semibold text-white mb-2 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
