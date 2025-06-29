
import { Card, CardBody, Typography } from "@material-tailwind/react";
import empowerimage from "../image/empower.jpg"
import discussionimage from "../image/discussion.jpg"
import worldimage from "../image/world.jpg"
import communityimage from "../image/community.jpg"
import hero from "../image/image18.jpg"
export function About() {

  return (
    <>
     <header>
       <div className="grid mt-16  lg:h-[35rem] md:h-[15rem] bg-bottom bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${hero})` }}>
          <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center bg-black/40">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
              style={{color:'white'}}>  
                <span className="text-brown-500">About Us{" "}</span>and the Wild We Call Home
                   
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
            We celebrate nature through stories and posts.
            </Typography>
          </div>
        </div>
      
    </header>
    <section className="border border-gray-300 rounded-none" >
      <div className="container mx-auto mb-10 text-center lg:mb-20 pt-10">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Features
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          A World of Ideas
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
         We&apos;re more than just a blog post we&apos;re a global space for ideas.
From stories and opinions to thoughts that matter, our platform lets anyone share their voice with the world.


        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3 ">
        <Card
          className="col-span-1 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Empower Expression
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Everyone has something valuable to share unique story, personal insight, or a creative spark&apos;s. 
              Our platform removes the barrier&apos;s to expression by providing a intuitive tools.
              
            </Typography>
            <img
              src={empowerimage}
              alt="empower"
              className="w-full max-h-48 object-cover object-center rounded-md pt-10"
            />
          </CardBody>
        </Card>
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Connect Diverse Perspectives
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              From everyday thoughts to bold ideas, users from around world post content that reflects who they are and what they are believe in its.
            </Typography>
            <img
              src={worldimage}
              alt="connect world"
              className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover object-center rounded-md pt-10"
            />
          </CardBody>
        </Card>
      </div>
      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Promote Open Conversation
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              We believed that conversation drives change.Our platform encourages the respectful dialogue and thoughtful engaged between readers and writers.
            </Typography>
            <img
              src={discussionimage}
              alt="promote conversatipn"
              className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover object-center rounded-md pt-10"
            />
          </CardBody>
        </Card>
        <Card className="col-span-1 bg-gray-100/50" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Join Our Community
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              Now is the time to share boldly, connect openly, and celebrate every unique voice. 
              and be as a part of something inspiring.
            </Typography>
           <img
              src={communityimage}
              alt="empower"
              className="w-full max-h-48 object-cover object-center rounded-md pt-10"
            />
          </CardBody>
        </Card>
      </div>
    </section>
    </>
  );
}
