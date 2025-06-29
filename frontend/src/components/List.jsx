import image4 from "../image/image4.jpg"
import image5 from "../image/image5.jpg"
import image6 from "../image/image6.jpg"
import {
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

function ProductListCard({ img, name, hash, description }) {
  return (
    <Card shadow={false} className="border border-gray-300">
      <CardBody className="pb-0">
        <img src={img} alt={name} className="min-w-[280px] w-full" />
        <div className="p-4 flex-grow">
      <Typography variant="h5" className="mb-2 font-semibold text-gray-800">
        {name}
      </Typography>
      <Typography className="text-sm text-gray-600">
        {description}
      </Typography>
      <Typography className="mt-2 text-sm text-blue-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {hash}
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
  );
}

const CONTENTS = [
  {
    img: image4,
    name: "Drift Into Tranquility",
    price: "$2,500",
    description: "Experience the serenity of golden sunsets and calm waters.",
    hash:"#sunset #peace #travel",
  },
  {
    img: image5,
    name: "Nature’s Mirror",
    price: "$2,300",
    description: "A breathtaking view where mountains and lakes become one.",
    hash:" #mountains #reflection #explore"
  },
  {
    img: image6,
    name: "Golden Trails",
    price: "$1,240",
    description: "Walk through a forest lit by autumn’s vibrant colors.",
    hash:"#autumn #forest #photography",
  },
];

export function List() {
  return (
    <section className="py-10 px-8">
      <div className="mx-auto text-center mb-16">
      <Typography className="font-medium text-lg">
       Curated Nature Stories
       </Typography>
       <Typography variant="h1" className="my-4 text-4xl">
       Discover What Inspires You
       </Typography>
       <Typography className="!font-normal text-gray-500 mx-auto max-w-2xl">
      Whether you're drawn to peaceful landscapes, seasonal adventures, or hidden natural gems — we help you find stories that speak to you.
      </Typography>
      </div>

      <div className="mx-auto container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
          {CONTENTS.map(({ img, name, hash,description }, index) => (
            <ProductListCard key={index} img={img} name={name} description={description} hash={hash}/>
          ))}
        </div>
      </div>
    </section>
  );
}

