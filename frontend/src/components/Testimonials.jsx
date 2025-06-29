import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import ceoimage from "../image/ceo.png"
import user2image from "../image/user2.png"
import user3image from "../image/user3.png"
function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography color="blue-gray" className="lg:mb-20 mb-4 text-2xl font-bold">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography variant="paragraph" className="font-normal !text-gray-500">
            {clientInfo}
          </Typography>
        </div>
        <img src={img} className="max-w-[8rem]" alt={client} />
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "Every post feels like a breath of fresh air. I often read it before my morning walks—it sets the tone for the day.",
    client: "Eliza Hart",
    clientInfo: "Nature Writer @GreenTrail Journal",
    img: user2image,
  },
  {
    title:
      "Your blog rekindled my passion for weekend hiking. I’ve discovered more about the world around me than I ever expected.",
    client: "Daniel Shore",
    clientInfo: "Trail Guide @Everpine Adventures",
    img: user3image,
  },
];

export function Testimonials() {
  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography variant="h2" color="blue-gray" className="mb-4 !text-2xl lg:!text-4xl">
          The Heartfelt Words of Our Community
        </Typography>
        <Typography variant="lead" className="max-w-3xl !text-gray-500 mb-10 lg:mb-20">
          From peaceful reflections to outdoor inspiration, see how our blog has become part of their journey with nature.
        </Typography>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card shadow={false} className="mt-8 bg-gray-100/50 text-center rounded-2xl p-6">
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold"
            >
              &quot;I’ve started noticing small details in my garden and neighborhood thanks to your insights.
               It’s helped me slow down and reconnect.&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            <img
              src={ceoimage}
              className="max-w-[8rem] mx-auto grayscale"
              alt="@Leaf & Light"
            />
            <Typography variant="h6" color="blue-gray">
              Priya Malekar
            </Typography>
            <Typography variant="paragraph" className="font-normal !text-gray-500">
              Urban Ecologist @Leaf & Light
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

