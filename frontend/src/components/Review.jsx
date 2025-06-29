import {
  Card,
  CardBody,
  Rating,
  Typography,
} from "@material-tailwind/react";

function CardReview({ title, name, feedback, date }) {
  return (
    <Card shadow={false}>
      <CardBody className="pt-0">
        <Rating value={4} className="text-amber-500" />
        <Typography
          variant="h6"
          color="blue-gray"
          className="font-bold mb-2 mt-1"
        >
          {title}
        </Typography>
        <Typography className="text-base font-normal !text-gray-500">
          {feedback}
        </Typography>
        <Typography
          variant="h6"
          color="blue-gray"
          className="font-medium mt-3"
        >
          {name}
        </Typography>
        <Typography
          variant="small"
          className="font-normal !text-gray-500"
        >
          {date}
        </Typography>
      </CardBody>
    </Card>
  );
}

const CONTENTS = [
  {
    title: "A peaceful corner of the internet",
    name: "Anaya Verma",
    feedback:
      "This blog brings me so much calm. Whether it's forest trails or sunrise photos, every post feels like a breath of fresh air.",
    date: "05 April 2024",
  },
  {
    title: "Exactly what I need to connect with nature",
    name: "Liam Thompson",
    feedback:
      "Your posts remind me to slow down and the appreciate the world around me. The writing and photography are truly inspiring.",
    date: "19 January 2024",
  },
  {
    title: "My daily escape into the wild",
    name: "Sofia Ramirez",
    feedback:
      "Every article makes me feel like I’m on a quiet walk through the woods. It’s my favorite place to unwind online.",
    date: "12 October 2023",
  },
];

export function Review() {
  return (
    <section className="py-20 px-8">
      <div className="mx-auto container">
        <div className="text-center">
          <Typography variant="h6" className="mb-3 uppercase">
            Reviews
          </Typography>
          <Typography variant="h3">Our Community&apos;s Experience</Typography>
          <Typography className="mt-3 text-center text-[18px] font-normal text-gray-500">
            From everyday explorers to mindful nature-lovers, hear how our platform enhances their journey.
          </Typography>
        </div>
        <div className="mt-32 grid lg:grid-cols-3 grid-cols-1 gap-y-6">
          {CONTENTS.map(({ name, feedback, title, date }, index) => (
            <CardReview
              key={index}
              title={title}
              name={name}
              feedback={feedback}
              date={date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

