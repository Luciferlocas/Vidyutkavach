import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/Authentication/AuthContext";
import { Divider, Input, Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import logo from "../../Assets/logo.svg";
import gif from "../../Assets/gif.gif";

const Verify = () => {
  const { loading, verify, token, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [otp, setOTP] = useState(["", "", "", "", ""]);
  const inref = useRef([]);

  useEffect(() => {
    if (!user) navigate("/");
  }, []);

  const handleInputChange = (i, e) => {
    const { value } = e.target;
    if (!isNaN(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[i] = value;
      setOTP(newOTP);
      if (i < 4 && value !== "") {
        inref.current[i + 1].focus();
      }
    }
  };
  const handleKeyDown = (i, event) => {
    const key = event.key.toLowerCase();
    if (key === "backspace") {
      const newOTP = [...otp];
      newOTP[i] = "";
      setOTP(newOTP);
      if (i > 0) inref.current[i - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await verify(parseInt(otp.join("")));
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
          <div class="flex flex-col gap-4">
            <label className="font-bold after:content-['*'] after:text-red-600 after:ml-1">
              Enter OTP
            </label>
            <div className="flex gap-4">
              {otp.map((value, i) => (
                <input
                  key={i}
                  ref={(e) => (inref.current[i] = e)}
                  className="w-[2.5em] aspect-square rounded-md bg-zinc-800 text-center hover:bg-zinc-700"
                  type="text"
                  inputMode="numeric"
                  maxLength="1"
                  value={value}
                  onChange={(e) => handleInputChange(i, e)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </div>
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
