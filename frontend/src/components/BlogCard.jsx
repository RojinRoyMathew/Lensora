
import { Link } from 'react-router-dom';
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  Card,
  Avatar,
  Button,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

export function BlogCard({post}) {

  
  // Format date: "19 Jun 2025"
  const formattedDate = post.dataCreated
    ? new Date(post.dataCreated).toDateString().slice(4) // e.g., "Jun 19 2025"
    : "";
  console.log(formattedDate)

  return (
     <Card className="border border-gray-300 overflow-hidden shadow-sm">
          <CardBody className="p-4">
            <Typography color="blue-gray" className="!text-base !font-semibold mb-1">
              {}
            </Typography>
            <div className="my-4 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar src={post.authorimage} alt={post.authorname} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {post.authorname}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-medium">
                    Creator
                  </Typography>
                </div>
              </div>
             <div className="flex items-center gap-1 text-sm text-gray-500">
             <FaRegCalendarAlt className="text-base" />
             <Typography className="font-medium text-sm">{formattedDate}</Typography>
             </div>

            </div>
            <div className="grid grid-cols-1 gap-2">
              
                <img
                  
                  src={post.imageUrl}
                  className="w-full h-60 object-cover rounded-xl"
                  alt={post.title}
                />
            
            </div>
          </CardBody>
          <CardFooter className="mt-auto pt-4 flex flex-col gap-2">
    <div className="flex items-center justify-between px-2">
    <div className="flex items-center gap-4 text-blue-gray-800">
      <HeartIcon className="h-5 w-5 hover:text-red-500 transition" />
      <ChatBubbleBottomCenterTextIcon className="h-5 w-5 hover:text-blue-500 transition" />
      <ShareIcon className="h-5 w-5 hover:text-green-500 transition" />
    </div>

    <Link
      to={`/readblog/${post._id}`}
      className="inline-block bg-blue-gray-900/10 text-blue-gray-900 font-medium py-1.5 px-3 rounded-md hover:scale-105 transition-transform duration-200"
    >
      Read More
    </Link>
  </div>

  <Typography color="blue-gray" className="font-medium px-2">
    {post.title}
  </Typography>
</CardFooter>

        </Card>
  );
}