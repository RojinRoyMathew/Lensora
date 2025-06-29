import { Typography } from "@material-tailwind/react";
import { getPost } from "../api"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
export function ReadBlog() {
   
    const [post, setPost] = useState({})
    let params = useParams()
    const navigate = useNavigate()
    let id = params.id
    useEffect(() => {
       async function loadPost() {
        let data = await getPost(id)
        setPost(data)
       }
       loadPost()
    }, [])
 // Format date: "19 Jun 2025"
  const formattedDate = post.dataCreated
    ? new Date(post.dataCreated).toDateString().slice(4) // e.g., "Jun 19 2025"
    : "";
  return (
    <section className="p-8">
      <div className="mx-auto max-w-screen-md">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-auto max-h-[510px] object-contain rounded-md"
        />
        <Typography
          variant="small"
          className="font-medium !text-blue-500"
        >
          #blog #post
        </Typography>
        <Typography
          variant="h2"
          color="blue-gray"
          className="my-4 font-black text-4xl !leading-snug"
        >
          {post.title}
        </Typography>

      <div className="mb-6 text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
    <span className="">By <span className="font-semibold text-gray-800">{post.authorname || 'Anonymous'}</span></span>
    <span>•</span>
    <span className="">{formattedDate}</span>
  </div>

  
  {post.description && (
    <Typography className="mb-4 text-base text-gray-600">
      {post.description}
    </Typography>
  )}
  
        <Typography className="font-normal !text-gray-500">
          {post.content}
        </Typography>  
      </div>
    </section>
  );
}
