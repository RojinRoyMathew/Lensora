import { createUser, uploadImage } from "../api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import heroimage from "../image/home.jpg"
import userimage from "../image/questionm2.jpg"
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function CreateUser() {
const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const navigate = useNavigate()

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

   async function handleSubmit(e) {
    e.preventDefault()
     let imageUrl = null;
    if (imageFile) {
      try {
        const result = await uploadImage(imageFile);
        imageUrl = result.imageUrl;
      } catch (err) {
        alert("Image upload failed");
        return;
      }
    }

    const userData = {
      ...user,
      imageUrl: imageUrl || null,
    };

    let response =  await createUser(userData)
    if (response.status !== 200){
        alert("user account could not be created:")
    }else{
        alert("user creation of account successfully")
        navigate("/login")
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
              Create Your Blogging Account
            </Typography>
            <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
              Join our global community and start sharing your thoughts with world in just a few click&apos;s
            </Typography>
          </CardHeader>
          <CardBody>
          {preview ? (
            <img
              src={preview}
              alt="Selected Image"
              className="w-[150px] mt-2 rounded-full mx-auto"
            />
          ) : (
            <img
              src={userimage} // <-- fallback or existing image
              alt="Default"
              className="w-[150px] mt-2 rounded-full mx-auto"
            />
          )}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:mt-12"
            >
              <div>
                <label htmlFor="name">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Name
                  </Typography>
                </label>
                <Input
                  id="name"
                  color="gray"
                  size="lg"
                  type="name"
                  onChange={handleChange} 
                  name="name" 
                  required 
                  maxLength={20}
                  placeholder="Enter your name"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
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
                  onChange={handleChange} 
                  name="email" 
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
                  onChange={handleChange} 
                  name="password" 
                  type="password" 
                  required 
                  maxLength={20}
                  placeholder="Create a strong password"
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <label htmlFor="image">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Upload a cover photo
                  </Typography>
                </label>
                <Input
                  id="image"
                  color="gray"
                  size="lg"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                  setImageFile(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                  placeholder="Upload Image"
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
              Already have an account?{" "}
     <a href="/#/login" className="text-blue-600 underline hover:text-blue-800">
      Click here to log in
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