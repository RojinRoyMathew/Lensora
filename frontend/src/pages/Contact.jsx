import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import image8 from "../image/image8.jpg"

export function Contact() {

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
                <span className="text-orange-400">Contact {" "}</span>Us to Explore More of Nature
                   
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
            Let nature guide your voice — calm, bold, and true.
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
          Customer Care
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Need Help We&apos;re Listening
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          At our core, customer satisfaction is everything. Whether you're curious about our services, need technical support,
           or have ideas on how we can improve — we're all ears.
        </Typography>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 mt-16 border border-gray-300">
  {/* Left: Background Image */}

<div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8727090099927!2d80.21324141482262!3d12.917684390889103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d4ebd5b2cf%3A0xd7dc36c6603c8e3f!2sChennai!5e0!3m2!1sen!2sin!4v1600257318899!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  {/* Right: Heading Content */}
  <div className="flex items-center justify-center p-8 bg-white border border-gray-300 rounded-none">
  <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
        
            <Typography
              variant="small"
              className="text-left !font-semibold !text-gray-600"
            >
              Select Options for Business Engagement
            </Typography>
            <div className="flex gap-4">
              <Button size="lg" variant="outlined" className="max-w-fit">
                General inquiry
              </Button>
              <Button size="lg" variant="outlined" className="max-w-fit">
                Product Support
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
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
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
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
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
  </div>
</div>
             

    </section>
    </>
  );
}