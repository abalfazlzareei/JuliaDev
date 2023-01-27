import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { Typography } from "@mui/material";

//WE NEED TO USE SIGN IN WITH POPUP IF WE USE GOOGLE SIGN IN WITH A CHROME EXTENSION

type LoginPageProps = {};

const LoginPage: React.FunctionComponent<LoginPageProps> = () => {
  const navigateTo = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigateTo("/home");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <div className="flex space-x-2 justify-center">
      <button
        disabled={authing}
        type="button"
        onClick={signInWithGoogle}
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-20"
      >
        SIGN-IN WITH GOOGLE
      </button>
    </div>
  );
};

export default LoginPage;
