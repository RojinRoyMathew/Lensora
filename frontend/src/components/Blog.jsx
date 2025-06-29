import { Typography, Card, CardBody } from "@material-tailwind/react";
import blog1 from "../image/image11.jpg"
import blog2 from "../image/image24.jpg"
import blog3 from "../image/image14.jpg"
function ContentCard({ img, title, desc }) {
  return (
    <Card
      className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
      color="transparent"
    >
      <img
        src={img}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />
      <CardBody className="relative flex flex-col items-center">
        <Typography variant="h4" color="white">
          {title}
        </Typography>
        
      </CardBody>
    </Card>
  );
}

const contents = [
  {
    img: blog1,
    title: "Majestic Mountain",
    desc: "The snow-capped peaks mirror perfectly in the crystal-clear alpine lake.This breathtaking view captures nature’s stillness and power in harmony.",
  },
  {
    img: blog2,
    title: "Tree of Life",
    desc: "A mighty tree stretches wide under a vibrant blue sky, surrounded by a sea of wildflowers.It stands as a symbol of strength, peace, and Earth’s quiet resilience.",
  },
  {
    img: blog3,
    title: "Wild Beauty",
    desc: "A lone elk stands peacefully beside a pristine mountain lake, framed by towering peaks.The untouched wilderness speaks of freedom, balance, and natural wonder.",
  },
];

export function Blog() {
  return (
    <section className="container mx-auto px-8 py-10 lg:py-28">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Embrace the Wild Beauty
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
       Wander through the wild, where time feels slower and the air feels lighter.
       Nature holds space for reflection, joy, and freedom.The natural world speak's in color's, silence's etc.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {contents.map(({ img, title, desc }) => (
          <ContentCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

