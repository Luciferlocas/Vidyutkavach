import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/Authentication/AuthContext";
import { Divider, Input, Button } from "@nextui-org/react";
import { EyeIcon } from "../../Assets/Icons/EyeIcon";
import { CutEyeIcon } from "../../Assets/Icons/CutEyeIcon";
import toast from "react-hot-toast";
import logo from "../../Assets/logo.svg";
import gif from "../../Assets/gif.gif";

const Verify = () => {
  const { loading, verify } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const empID = e.target.username.value;
    const otp = e.target.otp.value;
    try {
      await verify(empID, otp);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen justify-center py-[2em] px-[2em] sm:px-0 flex flex-col gap-[3em]">
      <div className="flex flex-col place-items-center">
        <img src={logo} alt="logo" className="w-[28em]" />
        <span className="sm:text-[1.5em] text-[1em]">
          Secure Grids, Smarter Connections
        </span>
      </div>
      <div className="flex items-center">
        <img src={gif} alt="Power GIF" className="hidden lg:flex w-1/2" />
        <Divider orientation="vertical" className="h-[30em] hidden lg:flex" />
        <form
          className="sm:gap-[3em] flex flex-col gap-[4em] place-items-center lg:w-1/2 w-full"
          onSubmit={handleSubmit}
        >
          <span className="text-[1.8rem] font-bold underline">Verify</span>
          <div className="font-bold">
            <Input
              className="sm:min-w-96 min-w-60"
              type="text"
              id="username"
              name="username"
              isRequired
              placeholder="Enter your username"
              label="Username"
              labelPlacement="outside"
            />
            <br />
            <Input
              className="sm:min-w-96 min-w-60"
              type="text"
              id="otp"
              name="otp"
              isRequired
              placeholder="Enter the OTP"
              label="OTP"
              labelPlacement="outside"
            />
          </div>
          <Button
            isLoading={loading}
            variant="flat"
            color="primary"
            type="submit"
            onClick={verify}
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
