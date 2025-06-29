import React,{ useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse ,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

 
export function NavBar() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#/home" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#/createblog" className="flex items-center">
          Create Post
        </a>
      </Typography>
       <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#/postview" className="flex items-center">
          All Posts
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#/about" className="flex items-center">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("User");
    navigate("/");
  };
 
  return (
    <div className="-m-6 max-h-[1500px] w-[calc(100%+48px)] ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
      
            className="mr-4 cursor-pointer py-1.5 font-bold text-2xl"
          >
            Lensora
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
    <Link to="/profile">
    <Button
    variant="text"
    size="sm"
    className="hidden lg:inline-block">
        <span>Profile</span>
         </Button>
             </Link>
              <Button
                variant="gradient"
                size="sm"
                className="bg-gradient-to-r from-red-500 to-red-700 text-white hidden lg:inline-block"
                onClick={handleLogout}
              >
                <span>Sign Out</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse  open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
    <Link to="/profile" className="w-full">
   <Button fullWidth variant="text" size="sm">
    <span>Profile</span>
     </Button>
       </Link>
            <Button
  onClick={handleLogout}
  fullWidth
  size="sm"
  className="bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800"
>
  <span>Sign out</span>
</Button>

          </div>
        </Collapse >
      </Navbar>
    </div>
  );
}