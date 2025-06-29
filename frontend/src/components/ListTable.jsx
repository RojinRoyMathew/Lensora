import { BlogCard } from "./BlogCard";
import { getPosts } from "../api";
import { useState, useEffect } from "react";
import image8 from "../image/image12.jpg";
import postimage from "../image/image13.jpg";
import {
  Card,
  Avatar,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function ListTable() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  useEffect(() => {
    async function loadAllPosts() {
      const data = await getPosts();
      data.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      setPosts(data);
    }
    loadAllPosts();
  }, []);

  // Pagination logic
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <>
      <header>
        <div
          className="grid mt-16 lg:h-[35rem] md:h-[15rem] bg-bottom bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image8})` }}
        >
          <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center bg-black/40">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
              style={{ color: "white" }}
            >Explore {" "}
              <span className="	text-lime-500">All Posts </span>  Inspired by Nature
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              Browse All Posts Rooted in Nature’s Calm.
            </Typography>
          </div>
        </div>
      </header>

      <section className="border border-gray-300 rounded-none">
         <div className="container mx-auto text-center pt-10">
  <Typography
    variant="h5"
    color="blue-gray"
    className="mb-4 !text-base lg:!text-2xl"
  >
    Nature Blog Collection
  </Typography>
  <Typography
    variant="h1"
    color="blue-gray"
    className="mb-4 !text-3xl lg:!text-5xl"
  >
    Every Nature Post Together
  </Typography>
  <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
    Explore every story, trail, and moment captured in nature. From mountain peaks to quiet rivers, discover blog posts that bring the outdoors to life — all in one place.
  </Typography>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
          {/* Left: Background Image */}
          <div
            className="bg-top bg-cover bg-no-repeat h-full w-full"
            style={{ backgroundImage: `url(${postimage})` }}
          />

          {/* Right: Heading Content */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-300 rounded-none">
            <Card shadow={false} className="">
              <CardHeader
                shadow={false}
                floated={false}
                className="flex overflow-visible gap-y-4 flex-wrap items-start justify-between rounded-none"
              >
                <div>
                  <Typography color="blue-gray" variant="h1" className="!text-2xl mb-1">
                    Nature's Creators
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="!text-lg font-normal text-gray-600"
                  >
                    Bringing landscapes to life, one post at a time.
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="grid grid-cols-1 gap-4 px-4">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </CardBody>

              <CardFooter>
              <div className="flex justify-center gap-2 py-4">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 text-sm rounded-md font-medium ${
                      currentPage === index + 1
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    } hover:bg-green-700 transition`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
