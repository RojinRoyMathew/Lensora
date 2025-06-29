import { Motion } from '../components/Motion'
import { Review } from '../components/Review'
import { Blog } from '../components/Blog'
import { Accordion } from '../components/Accordion'
import { Typography } from "@material-tailwind/react";
export function Home(){

    return(
        <>
        <header > 
        <Motion/>
        <Blog/>
        </header>
         <section className="border border-gray-300 rounded-none" >
            <div className=" container mx-auto text-center pt-10 ">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-4 !text-base lg:!text-2xl"
                >
                  Reflections of Solitude
                </Typography>
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="mb-4 !text-3xl lg:!text-5xl"
                >
                  The Serenity of Nature’s Hidden Corners
                </Typography>
                <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                  Nature offers moments of stillness, wonder, and balance—whether it’s a quiet bridge surrounded by fall colors,
                   a lone tree reflected in calm waters, or waterfalls feeding into emerald lakes. 
                </Typography>
              </div> 
        <Accordion/>
        <Review/>
        </section>
        </>
    )
}