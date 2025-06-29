import { ListIdTable } from '../components/ListIdTable'
import { useState, useEffect } from 'react'
import { getPosts } from "../api"
import * as jwt_decode from 'jwt-decode'
import hero from "../image/image29.jpg"
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function Profile() {

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
      async function loadUserData() {
        const token = sessionStorage.getItem("User")
        const decodedUser = jwt_decode.jwtDecode(token)
        const allPosts = await getPosts()
        const filteredPosts = allPosts.filter((post) => post.author == decodedUser._id)
        setPosts(filteredPosts)
        setUser(decodedUser)

    }
      loadUserData()
    }, [])
  
     // Format date: "19 Jun 2025"
  const formattedDate = user.joinDate
    ? new Date(user.joinDate).toDateString().slice(4) // e.g., "Jun 19 2025"
    : "";
 

  return (
    <>
    <header>
      <Card
        shadow={false}
        className="border border-gray-300 rounded-none"
      >
           <div className="grid mt-16  lg:h-[35rem] md:h-[15rem] bg-top bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${hero})` }}>
              <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center bg-black/40">
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                  style={{color:'white'}}> Where Every{" "}  
                    <span className="text-blue-300">Profile{" "}</span>Tells a Natural Story
                       
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
                >
                Discover the people behind the stories.
                </Typography>
              </div>
            </div>
           <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src={user.imageUrl} alt={user.name} variant="rounded" />
              <div>
                <Typography color="blue-gray" variant="h6">
                  {user.name}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {user.email}
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-medium" />
                Medium
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-600 mt-6"
          >
            {user.name} joined the blog community on {formattedDate}, and has been actively sharing insightful posts ever since. <br /> 
            It reflects his unique perspective and voice in the community.
          </Typography>
        </CardBody>  
          </Card>
        </header>
    <section id="Profile-header" className="border border-gray-300 rounded-none">
      <div className=" container mx-auto text-center pt-10 border border-gray-300 ">
       
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
          Voices of the Wild
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          The Minds of Nature
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Each post is a reflection of a unique journey.
          Discover their profiles and see how they bring the outdoors to life through words and images. 
        </Typography>
      </div>
     
     <ListIdTable/>
      
    </section>
      

  </>
  );
}

