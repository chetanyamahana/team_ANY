import React, { useEffect } from "react";
import websitelogo from "./images/bg-new.png"
import { useState, useRef } from "react";
import { act } from "react-dom/test-utils";
import { TypeAnimation } from "react-type-animation";
import userEvent from "@testing-library/user-event";
import Lottie from 'lottie-react';
import './style.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CarAnimation from './assets/car-animation.json';
import {
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [show1, setShow1] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const toast1 = useToast();
  const navigate1 = useNavigate();

  const [credentials1, setCredentials1] = useState({
    name: "",
    email: "",
    password: "",
    pic: "",
  });

  const handleCredentials1 = (e) => {
    setCredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };

  const submitHandler1 = async () => {
    setLoading1(true);

    // If anything is missing
    if (
      !credentials1.name ||
      !credentials1.email ||
      !credentials1.password
    ) {
      setLoading1(false);
      return toast1({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
    }

    // If password and confirm password doesn't match
    if (false) {
      setLoading1(false);
      return toast1({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
    }

    // Now submit the data
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials1.name,
          email: credentials1.email,
          password: credentials1.password,
          pic: credentials1.pic,
        }),
      });
      const data1 = await response.json();

      toast({
        title: data1.message,
        status: !data1.success ? "error" : "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: !data1.success ? "left-accent" : "solid",
      });

      if (data1.success) {
        localStorage.setItem("userInfo", JSON.stringify(data1));
        setLoading1(false);
        navigate1("/home");
      } else {
        setLoading1(false);
      }
    } catch (error) {
      setLoading1(false);
      return toast1({
        title: "Internal server error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
    }
  };


  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler3 = async () => {
    setLoading(true);

    // If email or password is missing
    if (!credentials.email || !credentials.password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const data = await response.json();

      toast({
        title: data.message,
        status: !data.success ? "error" : "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: !data.success ? "left-accent" : "solid",
      });

      if (data.success) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/mechhome");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return toast({
        title: "Internal server error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
    }
  };

  const submitHandler = async () => {
    setLoading(true);

    // If email or password is missing
    if (!credentials.email || !credentials.password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "left-accent",
      });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const data = await response.json();

      toast({
        title: data.message,
        status: !data.success ? "error" : "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: !data.success ? "left-accent" : "solid",
      });

      if (data.success) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      return toast({
        title: "Internal server error",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
    }
  };

  const [activeForm, setActiveForm] = useState("lpage");
  const [activeBox, setActiveBox] = useState("choicebox");

  const [showPassword, setShowPassword] = useState(false);

  const handleloginButtonClick = (formId) => {
    // setTimeout(()=>{
    //     setActiveForm(formId);
    // },100)
    setActiveForm(formId);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fadeInRef = useRef(null);
  useEffect(() => {
    if (fadeInRef.current) {
      fadeInRef.current.classList.add("fade-in");
      setTimeout(() => {
        fadeInRef.current.classList.remove("fade-in");
      }, 500);
    }
  }, [activeForm]);
  let formcontent = null;
  let BoxContent = null;
  const handleBoxDisplay = (boxId) => {
    setActiveBox(boxId);
  }
  if (activeBox === "choicebox") {
    BoxContent = (
      <div
        ref={fadeInRef}
        id="choicebox"
        className="rightbox w-1/3  mt-12 bg-[#0C1E44] h-50 sm:h-60 md:h-70 lg:h-80  shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8"
      >
        <button
          onClick={() => {
            handleloginButtonClick("mechaniclogin");
            handleBoxDisplay("AnimationBox");
          }}

          className="loginmechanicbutton my-4 py-2 px-2 rounded-3xl text-1xl sm:text-1xl md:text-1xl lg:text-2xl hover:bg-white hover:text-[#0C1E44] hover:underline hover:cursor-pointer text- font-mono font-semibold text-white duration-500 hover:font-extrabold"
        >
          Login as Mechanic
        </button>
        <button
          onClick={() => {
            handleloginButtonClick("userlogin");
            handleBoxDisplay("AnimationBox");
          }}
          className="loginuserbutton my-4 py-2 px-2 rounded-3xl text-1xl sm:text-1xl md:text-1xl lg:text-2xl hover:bg-white hover:text-[#0C1E44] hover:underline hover:cursor-pointer font-mono font-semibold text-white duration-500 hover:font-extrabold"
        >
          Login as User
        </button>
        <button
          onClick={() => {
            handleloginButtonClick("usersignup");
            handleBoxDisplay("AnimationBox");
          }}
          className="signupuserbutton my-4 py-2 px-2 rounded-3xl text-1xl sm:text-1xl md:text-1xl lg:text-2xl hover:bg-white hover:text-[#0C1E44] hover:underline hover:cursor-pointer font-mono font-semibold text-white duration-500 hover:font-extrabold"
        >
          Signup as User
        </button>
      </div>

    );
  }
  else if (activeBox === "AnimationBox") {
    BoxContent = (
      <div
        ref={fadeInRef}
        id="AnimationBox"
        className="rightbox w-1/3  mt-12 bg-white h-80 bg-opacity-30 backdrop-blur-md shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8"
      >
        <Lottie className='w-96 h-50 sm:h-60 md:h-70 lg:h-80' animationData={CarAnimation}/>
      </div>
    );
  }
  if (activeForm === "lpage") {
    formcontent = (
      <div
        ref={fadeInRef}
        id="lpage"
        className="rightbox w-1/3  mt-12 bg-white h-80 bg-opacity-30 backdrop-blur-md shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8"
      >
        <img src={websitelogo} className="h-50 sm:h-60 md:h-70 lg:h-80 w-full object-cover object-center" alt="" />
      </div>
    );
  } else if (activeForm === "mechaniclogin") {
    formcontent = (
      <div
        ref={fadeInRef}
        id="mechaniclogin"
        className="rightbox w-1/3  mt-12 bg-[#0C1E44] h-50 sm:h-60 md:h-70 lg:h-80  shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8 relative"
      >
        <input type="email" placeholder="Email" name="email" id="" value={credentials.email} onChange={(e) => handleCredentials(e)} className="bg-white   text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl  placeholder-[#0C1E44] placeholder:font-semibold my-4 py-2 rounded-2xl px-4 mx-2 focus:border-4 focus:border-blue-500" />
        <div className="password-container relative">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" value={credentials.password} onChange={(e) => handleCredentials(e)} id="" className="bg-white   text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl  placeholder-[#0C1E44] placeholder:font-semibold my-4 py-2 rounded-2xl px-4 mx-2 focus:border-4 focus:border-blue-500" />
          <button onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-8 mr-6">
            {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
          </button>
        </div>
        <button onClick={submitHandler3} className="my-4  text-white text-1xl sm:text-1xl md:text-1xl lg:text-2xl font-semibold px-16 py-2 rounded-2xl hover:bg-white  hover:text-[#0C1E44] duration-100 ">Login</button>
        <button onClick={() => {
          handleloginButtonClick("lpage");
          handleBoxDisplay("choicebox");
        }} className="flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg> <span className="text-lg text-white mx-1 hover:underline">Go back</span>
        </button>

      </div>

    );
  } else if (activeForm === "userlogin") {
    formcontent = (
      <div
        ref={fadeInRef}
        id="userlogin"
        className="rightbox w-1/3  mt-12 bg-[#0C1E44] h-50 sm:h-60 md:h-70 lg:h-80  shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8 relative"
      >
        <input type="email" placeholder="Email ID" name="email" value={credentials.email} onChange={(e) => handleCredentials(e)} id="" className="bg-white   text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl  placeholder-[#0C1E44] placeholder:font-semibold my-4 py-2 rounded-2xl px-4 mx-2 focus:border-4 focus:border-blue-500" />
        <div className="password-container relative">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" value={credentials.password} onChange={(e) => handleCredentials(e)} id="" className="bg-white text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl placeholder-[#0C1E44] placeholder:font-semibold mt-4 mb-1 py-2 px-4 mx-2 rounded-2xl focus:border-4 focus:border-blue-500" />
          <button onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-8 mr-6">
            {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
          </button>
        </div>
        <button isLoading={loading} onClick={submitHandler} className="my-4  text-white text-1xl sm:text-1xl md:text-1xl lg:text-2xl font-semibold px-16 py-2 rounded-2xl hover:bg-white  hover:text-[#0C1E44] duration-100 ">Login</button>
        <button onClick={() => {
          handleloginButtonClick("lpage");
          handleBoxDisplay("choicebox");
        }} className="flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg> <span className="text-lg text-white mx-1 hover:underline">Go back</span>
        </button>

      </div>

    );
  } else if (activeForm === "usersignup") {
    formcontent = (
      <div
        ref={fadeInRef}
        id="usersignup"
        className="rightbox w-1/3  mt-8 bg-[#0C1E44] h-auto    shadow-xl ring-1 ring-gray-900/5 rounded-3xl  flex flex-col items-center justify-center py-8 relative"
      >
        <input type="text" value={credentials1.name} onChange={(e) => handleCredentials1(e)} placeholder="Name " name="name" id="" className="bg-white  text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl  placeholder-[#0C1E44] placeholder:font-semibold my-1 sm:my-2 md:my-3 lg:my-4 py-2 rounded-2xl px-4 mx-2  focus:border-4  focus:border-blue-500 " />
        <input type="email" placeholder="Email ID" name="email" value={credentials1.email} onChange={(e) => handleCredentials1(e)} id="" className="bg-white   text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl  placeholder-[#0C1E44] placeholder:font-semibold my-1 sm:my-2 md:my-3 lg:my-4 py-2 rounded-2xl px-4 mx-2  focus:border-4 focus:border-blue-500  " />
        <div className="password-container relative">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={credentials1.password} name="password" id="" onChange={(e) => handleCredentials1(e)} className="bg-white text-[#0C1E44] text-1xl sm:text-1xl md:text-1xl lg:text-2xl placeholder-[#0C1E44] placeholder:font-semibold mt-4 mb-1 py-2 px-4 mx-2 rounded-2xl focus:border-4 focus:border-blue-500" />
          <button onClick={togglePasswordVisibility} className="absolute right-0 top-0 mt-8 mr-6">
            {showPassword ? <FaEyeSlash size={24} /> : <FaEye size={24} />}
          </button>
        </div>
        <button onClick={() => submitHandler1()} isLoading1={loading1} className="my-4  text-white text-3xl font-semibold px-16 py-2 rounded-2xl hover:bg-white  hover:text-blue-800 duration-100 ">Signup</button>
        <button onClick={() => {
          handleloginButtonClick("lpage");
          handleBoxDisplay("choicebox");
        }} className="flex flex-row"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg> <span className="text-1xl sm:text-1xl md:text-1xl lg:text-2xl text-white mx-1 hover:underline">Go back</span>
        </button>

      </div>

    );
  }
  const [typingText, setTypingText] = useState(" ");
  const [typingDirection, setTypingDirection] = useState("forward");
  useEffect(() => {
    const orignalText = "Coonnect with ease, repair with confidence!";
    const typingInterval = 100;
    let typingIndex = 0;
    let intervalId;
    const typingAnimation = () => {
      if (typingDirection === "forward") {
        setTypingText((prevText) => prevText + orignalText[typingIndex]);
        typingIndex++;
        if (typingIndex === orignalText.length - 1) {
          setTypingDirection("backward");
        }
      } if (typingDirection === "backward") {
        setTypingText((prevText) => prevText.slice(0, -1));
        typingIndex--;
        if (typingIndex === 0) {
          setTypingDirection("forward");
        }
      }
    };
    intervalId = setInterval(typingAnimation, typingInterval);
    return () => clearInterval(intervalId);
  }, [typingDirection]);
  return (
    <div className="main-bg  h-screen bg-white relative flex flex-col">

<div className="header my w-full h-28 justify-center flex py-10 items-center text-slate-100 bg-[#0C1E44] font-monteserrat text-1xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl 2xl:text-3xl">
        <TypeAnimation
          sequence={[
            <>
              <span className="text-red-600">MechConnect - </span>
              <span className="text-slate-100">Connect with ease</span>
            </>,
            1000,
            "MechConnect - Repair with effort",
            1000,
            "MechConnect - Fix with precision",
            1000,
            "MechConnect - Service,expertise,trust",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block", }}
          repeat={Infinity}
        />
      </div>
      <div className="space-x-44 container mt-48 absolute flex mx-auto items-center justify-center mb-11">
        {BoxContent}
        {formcontent}
      </div>
      <footer class="bg-[#0C1E44] w-full absolute bottom-0 mt-9">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between sm:display:none">
          <span class="text-sm text-white sm:text-center dark:text-white ">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              MechConnect™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-s font-medium text-white dark:text-white sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;