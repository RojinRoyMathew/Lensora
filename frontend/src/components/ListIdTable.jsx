
import { BlogCard } from "./BlogCard"
import  {getPosts} from "../api"
import * as jwt_decode from 'jwt-decode'
import { useState,useEffect } from "react"
import {
  Card,
  Avatar,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";  
 
export function ListIdTable() {

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

  return (
    <section className="px-8 py-10">
          <Card shadow={false} className="">
            <CardHeader
              shadow={false}
              floated={false}
              className="flex overflow-visible gap-y-4 flex-wrap items-start justify-between rounded-none"
            >
              <div>
                <Typography color="blue-gray" variant="h1" className="!text-2xl mb-1">
                  Our Creators
                </Typography>
                <Typography color="blue-gray" className="!text-lg font-normal text-gray-600">
                  Individual journeys told through nature’s lens.
                </Typography>
              </div>
              <div className="flex shrink-0 gap-2">
                <Button size="sm" variant="outlined" className="border-gray-300">
                  Last 24h
                </Button>
                <Button size="sm" variant="outlined" className="border-gray-300">
                  Last week
                </Button>
                <Button size="sm" variant="outlined">
                  Last month
                </Button>
              </div>
            </CardHeader>
            <CardBody className="grid xl:grid-cols-3 grid-cols-1 gap-4 px-4">
              {posts.map((post) => <BlogCard post={post} />)}
            </CardBody>
          </Card>
        </section>
  );
}