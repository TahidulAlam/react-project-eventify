/* eslint-disable no-unused-vars */
import { toast } from "react-hot-toast";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSocialSignIn = (media) => {
    media()
      .then(() => {
        toast.success("Sign In seccessfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => toast.error("invalid input"));
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  pt-4  gap-3">
        <button
          className="btn btn-outline hover:bg-blue-800 border-blue-800 text-blue-800 "
          onClick={() => handleSocialSignIn(signInWithGoogle)}
        >
          <AiFillGoogleCircle className="text-3xl" />
          Log in with Google
        </button>
        <button
          className="btn btn-outline hover:bg-blue-800  border-blue-800 text-blue-800"
          onClick={() => handleSocialSignIn(signInWithGithub)}
        >
          <BsGithub className="text-3xl" />
          Log in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
