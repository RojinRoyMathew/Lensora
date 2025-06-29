import { useState } from "react"
import { createPost, uploadImage } from "../api"
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"
import blogimage from "../image/image30.jpg"
import image8 from "../image/image15.jpg"
import {
  Button, 
  Input,
  Textarea,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import {
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
export function CreateBlog() {
  
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [content, setContent] = useState("")
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [titlePreview, setTitlePreview] = useState(null);
    const navigate = useNavigate()


 async function handleSubmit(e) {
  e.preventDefault();

  try {
    let imageUrl = null;
    if (imageFile) {
      const imageData = await uploadImage(imageFile);
      imageUrl = imageData.imageUrl;
    }

   const token = sessionStorage.getItem("User");
   const decodedUser = jwtDecode(token); 

let submitObject = {
  title,
  description,
  content,
  author: decodedUser._id,
  authorname: decodedUser.name,
  dateCreated: new Date(),
  imageUrl,
};


    await createPost(submitObject);
    alert("Blog created successfully!");
    navigate("/home")
  } catch (err) {
    console.error("Blog creation failed:", err);
    alert("Failed to create blog post");
  }
}

  return (
    <>
    <header>
           <div className="grid mt-16  lg:h-[35rem] md:h-[15rem] bg-top bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${image8})` }}>
              <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center bg-black/40">
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                  style={{color:'white'}}> 
                    <span className="	text-yellow-600">Create Post{" "}</span>That Blooms Like Nature Itself
                       
                </Typography>
                <Typography
                  variant="lead"
                  className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
                >
                Create a post and let your voice echo through nature.
                </Typography>
              </div>
            </div>
          
        </header>
        <section className="border border-gray-300 rounded-none" >
        <div className=" container mx-auto text-center pt-10 ">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4 !text-base lg:!text-2xl"
        >
         Create with Confidence 
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Let the World Hear You
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
         "Every story deserves to be heard. Whether it’s a quiet reflection or a bold perspective, 
         your words can inspire, connect, and create change.
        </Typography>
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-16 border border-gray-300">
          {/* Left: Background */}

      <div className="flex items-center justify-center  ">
      <Card shadow={false} className="">
      <CardBody className="pb-0">
          {imagePreview ? (
  <img
    src={imagePreview}
    alt="Selected Image"
    className="min-w-[280px] w-full"
  />
) : (
  <img
    src={blogimage} // <-- fallback or existing image
    alt="Default"
    className="min-w-[280px] w-full"
  />
)}

       
        <div className="p-4 flex-grow">
 {titlePreview ? (
  <Typography variant="h5" className="mb-2 font-semibold text-gray-800">
    {titlePreview}
  </Typography>
) : (
  <Typography className="text-lg font-semibold text-blue-gray-600">
    {"Untitled Post"}
  </Typography>
)}
      <Typography className="mt-2 text-sm text-blue-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        #blog #post
        </Typography>

    </div>
      </CardBody>
      <CardFooter>
    <div className="border-t px-4 py-2 flex items-center justify-between text-gray-700">
      <div className="flex items-center gap-4">
        <HeartIcon className="h-5 w-5 hover:text-red-500 transition" />
        <ChatBubbleBottomCenterTextIcon className="h-5 w-5 hover:text-blue-500 transition" />
        <ShareIcon className="h-5 w-5 hover:text-green-500 transition" />
      </div>
    
    </div>
      </CardFooter>
    </Card>
        </div>
          {/* Right: Heading Content */}
          <div className="flex items-center justify-center  p-8 bg-white border border-gray-300 rounded-none">
         
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Write what's on your mind and let your voice be heard.
            </Typography>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Blog Post Title
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="Enter a catchy title for your blog post"
                type="text"
                name="title"
               onChange={(e) => {
                setTitle(e.target.value);
                setTitlePreview(e.target.value);
                           }}

                maxLength={200} 
                required 
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Blog Description
              </Typography>
              <Textarea
                rows={3}
                color="gray"
                type="textarea"
                name="description"
                onChange={(e) => setDescription(e.target.value)} 
                maxLength={200} 
                required 
                placeholder="Write a short summary or teaser for your post"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Blog Content
              </Typography>
              <Textarea
                rows={4}
                color="gray"
                type="textarea"
                name="content"
                onChange={(e) => setContent(e.target.value)}
                maxLength={5000} 
                required 
                placeholder="Start writing your blog content here..."
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Upload Image
              </Typography>
              <Input
                color="gray"
                size="lg"
                type="file"
                name="content"
                accept="image/*"
                onChange={(e) => {
                 setImageFile(e.target.files[0]);
                 setImagePreview(URL.createObjectURL(e.target.files[0]));
                  }}
                placeholder="Choose a cover image"
                required 
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button type="submit"  className="w-full" color="gray">
              Send message
            </Button>
          </form>
          </div>
        </div>
            </section>
    </>
  );
}