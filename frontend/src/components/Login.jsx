import { verifyUser } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import heroimage from "../image/home.jpg"

import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";


export function Login() {

   const [user, setUser] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

   async function handleSubmit(e) {
    e.preventDefault()
    let response =  await verifyUser(user)
    if (response) {
        sessionStorage.setItem("User", response)
        console.log(`Bearer ${response}`)
        axios.defaults.headers.common["Authorization"] = `Bearer ${response}`
        navigate("/home")
    } else {
        alert("Login failed")
    }
   }
    return (
    <section className=" bg-top bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${heroimage})` }}>
      <div className="container mx-auto grid items-center justify-end">
        <Card
          shadow={false}
          className="md:px-24 md:py-14 py-8 border border-gray-300 rounded-none bg-white/95"
        >
          <CardHeader shadow={false} floated={false} className="bg-white/1 text-center">
            <Typography
              variant="h1"
              color="blue-gray" 
              className="mb-4 !text-3xl lg:text-4xl"
            >
              Log In to Your Account
            </Typography>
            <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
              Access your blog, share new posts, and connect with readers around the world.
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:mt-12"
            >
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Email
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required 
                  maxLength={40}
                  placeholder="name@mail.com"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Password
                  </Typography>
                </label>
                <Input
                  id="password"
                  color="gray"
                  size="lg"
                  type="password"
                  onChange={handleChange} 
                  name="password"
                  required
                  maxLength={20}
                  placeholder="Enter your password"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button type="submit" size="lg" color="gray" fullWidth>
                continue
              </Button>
             
              <Typography
                variant="small"
                className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
              >
                Upon signing in, you consent to abide by our{" "}
                <a href="#" className="text-gray-900">
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="#" className="text-gray-900">
                  Privacy Policy.
                </a>
              </Typography>
            </form>
          </CardBody>
          <div className="mt-6 flex flex-col items-center gap-2 text-center text-sm text-gray-700">
              <p>
           Don&apos;t have an account?{" "}
          <a href="/#/signup" className="text-blue-600 underline hover:text-blue-800">
          Click here to sign up
           </a>
            </p>
            <a href="/" className="text-blue-600 underline hover:text-blue-800 text-sm">
            Back to Main Page
            </a>
            </div>
        </Card>
      </div>
    </section>
  );
}
