import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";


function LogoutButton() {

  const userId = auth.currentUser?.uid;


  const signOutHandler = async () => {
    return await signOut(auth);

    // signOut(auth)
    //   .then(() => {
    //     console.log(`Signed out ${userId}`)
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div className="flex space-x-2 justify-center">
      <button
        type="button"
        onClick={signOutHandler}
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-20"
      >
        SIGN-OUT
      </button>
    </div>
  );
}

export default LogoutButton