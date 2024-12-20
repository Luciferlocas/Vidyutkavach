import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../../Context/Authentication/AuthContext";
import { Divider, Input, Button } from "@nextui-org/react";
import { EyeIcon } from "../../Assets/Icons/EyeIcon";
import { CutEyeIcon } from "../../Assets/Icons/CutEyeIcon";
import logo from "../../Assets/logo.svg";
import gif from "../../Assets/gif.gif";

const Login = () => {
  const { login, loading, res } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (res) navigate("/verify");
  }, [res]);

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
          <span className="text-[1.8rem] font-bold underline">Login</span>
          <div className="font-bold">
            <Input
              className="sm:min-w-96 min-w-60"
              type="text"
              id="username"
              name="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              isRequired
              placeholder="Enter your email"
              label="Email"
              labelPlacement="outside"
            />
            <br />
            <Input
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              isRequired
              placeholder="Enter password"
              label="Password"
              labelPlacement="outside"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? <CutEyeIcon /> : <EyeIcon />}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
          <Button
            isLoading={loading}
            variant="flat"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
