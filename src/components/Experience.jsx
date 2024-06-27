import skytech from "../assets/images/skytech.jpeg"
import waytoweb from "../assets/images/waytoweb.png"


const Data = [
  {
    id: 1,
    img: skytech,
    title: "Skytech",
    duration: "January'24 - Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe alias numquam esse deserunt quo quas dolor quos vero error?",
  },
  {
    id: 2,
    img: waytoweb,
    title: "Way to Web",
    duration: "November'23 - January'24",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe alias numquam esse deserunt quo quas dolor quos vero error?",
  },
];

export const Experience = () => {
  return (
    <div className="w-full py-20 rounded-3xl">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-10 border-zinc-500 font-['neue']">
        <h1 className="lg:px-[200px] text-6xl tracking-tight">Experience</h1>
      </div>
      <div className="timeline relative max-w-[1200px] my-[100px] mx-auto">
        {Data.map((v, i) => {
          return (
            <div
              className={`contain px-[50px] py-[10px] relative w-1/2 ${i % 2 === 0 ? "left-0" : "left-1/2"}`}
            >
              <img className={`absolute h-[55px] w-[55px] object-scale-down top-[32px] rounded-xl z-10 ${i % 2 === 0 ? "-right-[28px]" : "-left-[28px]"}`} src={v.img} alt="" />
              <div className="textBox bg-white relative px-[30px] py-[20px] rounded-xl text-lg">
                <h2>{v.title}</h2>
                <small>{v.duration}</small>
                <p>{v.description}</p>
                <span className={`${i%2 === 0 ? "leftArrow" : "rightArrow" }`}></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
