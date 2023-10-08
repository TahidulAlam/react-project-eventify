/* eslint-disable no-unused-vars */
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import useAuth from "../../hooks/useAuth";

const SocialAuth = () => {
  const { signInWithGoogle } = useAuth();
  const handleSocialSignIn = (media) => {
    media()
      .then(() => {
        console.log("log in with goggle, successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  pt-4  gap-3">
        <button className="btn btn-outline hover:bg-blue-800 border-blue-800 text-blue-800 ">
          <AiFillGoogleCircle
            className="text-3xl"
            onClick={() => handleSocialSignIn(signInWithGoogle)}
          />
          Log in with Google
        </button>
        <button className="btn btn-outline hover:bg-blue-800  border-blue-800 text-blue-800">
          <BsFacebook className="text-3xl" />
          Log in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
