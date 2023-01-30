import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

import React, { useEffect } from "react";

let GOOGLE_AUTH_INSTANCE: any;
const CLIENT_ID: string =
  "950599255536-9l6d51r5pq4e8g9lb4ipu6e0i9np5buc.apps.googleusercontent.com";

const SCOPE: string = "https://www.googleapis.com/auth/calendar";

function Login() {
  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        clientId: CLIENT_ID,
        scope: SCOPE,
      });
    });
  }, []);

  const responseGoogle = (response: any) => {
    console.log(response);
    GOOGLE_AUTH_INSTANCE = response;
  };

  return (
    <div>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="SIGN-IN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
export { GOOGLE_AUTH_INSTANCE };
