import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

type AuthRouteProps = {
  children?: React.ReactNode;
};

function AuthRoute({ children }: AuthRouteProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    AuthCheck();
  }, [auth]);

  const AuthCheck = onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigateTo("/");
    }
  });

  if (loading) return <p>loading...</p>;

  return <div>{children}</div>;
}

export default AuthRoute;
