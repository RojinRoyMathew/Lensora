import { GiTreeGrowth, GiRiver, GiThreeLeaves } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import blog1 from "../image/image19.jpg"
import blog2 from "../image/image20.jpg"
import blog3 from "../image/image21.jpg"
import blog4 from "../image/image22.jpg"
export function Accordion  ()  {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-green-600">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
        <div className="w-6 lg:w-full aspect-square bg-green-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Lone Tree by the Lake at Sunrise",
    Icon: GiTreeGrowth ,
    imgSrc:blog1,
    description:
      "A solitary, twisted tree stands at the edge of a still lake, perfectly reflected in the calm water. Soft morning light and distant mountains create a dreamy backdrop. It's a peaceful moment of solitude and natural beauty.",
  },
  {
    id: 2,
    title: "Watrefalls and Emerald Lake",
    Icon: GiRiver ,
    imgSrc:blog2,
    description:
      "Cascading waterfalls flow into a brilliant turquoise lake, surrounded by lush green forests. The scene bursts with life and color under the daylight. It’s a pristine and invigorating view of untouched nature.",
  },
  {
    id: 4,
    title: "Stone Bridge Fall Landscape",
    Icon: WiSunrise,
    imgSrc:blog4,
    description:
      "An old stone bridge arches gracefully over a quiet stream amid golden fall trees. The path nearby invites peaceful walks under the canopy of leaves. The whole scene feels timeless and tranquil.",
  },
  {
    id: 3,
    title: "Wooden Bridge in Autumn Forest",
    Icon: GiThreeLeaves ,
    imgSrc:blog3,
    description:
      "A wooden bridge spans a peaceful river, surrounded by vibrant orange autumn leaves. The forest glows warmly under the soft sunlight filtering through the trees. It's a serene, storybook-like escape into nature.",
  },
];