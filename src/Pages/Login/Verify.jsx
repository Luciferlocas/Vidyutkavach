import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/Authentication/AuthContext";
import { Divider, Input, Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import logo from "../../Assets/logo.svg";
import gif from "../../Assets/gif.gif";

const Verify = () => {
  const { loading, verify, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = e.target.otp.value;
    try {
      await verify(otp);
      if(token) navigate("/dashboard");
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
          >
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Verify;