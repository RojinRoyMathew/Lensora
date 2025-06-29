import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { List } from "../components/List"
import heroimage from "../image/home.jpg"
import { Testimonials } from "../components/Testimonials"
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavItem({ children }) {
  return (
    <li>
      <Typography
        as="a"
        href="/#/login"
        variant="paragraph"
        color="blue-gray"
        className="text-blue-gray-700 flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Landing() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const navigate = useNavigate()
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpen(false);
    });
  }, []);

  return (
    <div className=" " 
    >
      <Navbar shadow={false} fullWidth className="border-0">
        <div className="container mx-auto flex items-center justify-between">
          <Typography color="blue-gray" className="text-4xl font-bold">
            Lensora
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>
            <PencilSquareIcon className="h-5 w-5" />
            Create Post
            </NavItem>
            <NavItem>
            <DocumentTextIcon className="h-5 w-5" />
            All Posts
            </NavItem>
            <NavItem>
            <InformationCircleIcon className="h-5 w-5" />
            About Us
            </NavItem>
            <NavItem>
            <PhoneIcon className="h-5 w-5" />
            Contact
            </NavItem>
          </ul>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="text" onClick={handleLogin}>Log in</Button>
            <Button color="gray" onClick={handleSignup}>Sign up</Button>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>
              <PencilSquareIcon className="h-5 w-5" />
              Create Post
              </NavItem>
              <NavItem>
              <DocumentTextIcon className="h-5 w-5" />
              All Posts
              </NavItem>
              <NavItem>
              <InformationCircleIcon className="h-5 w-5" />
              About Us
              </NavItem>
              <NavItem>
              <PhoneIcon className="h-5 w-5" />
              Contact
              </NavItem>
            </ul>
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Button variant="text" onClick={handleLogin}>Log in</Button>
              <Button color="gray" onClick={handleSignup}>Sign up</Button>
            </div>
          </div>
        </Collapse>
      </Navbar>

      <header className="">
        <div className="grid mt-16  lg:h-[35rem] md:h-[15rem] bg-top bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${heroimage})` }}>
          <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center bg-black/40">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
              style={{color:'white'}}>
              Explore the beauty of{" "}
              <span className="text-green-500 leading-snug">nature</span> through our{" "}
              <span className="leading-snug text-green-500">lens</span>
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
             This is your time — to be bold, to be brilliant, to be unapologetically you.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <Link
                to="/login"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                 Read Our Blog
                </Link>
                <Link
            to="/signup"
             className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-grey transition"
             >
              Get Started
              </Link>
              </div>
            </div>
          </div>
        </div>
         <List/>
      </header>
      <section>
       <Testimonials/>
      </section>
    </div>
  );
}


