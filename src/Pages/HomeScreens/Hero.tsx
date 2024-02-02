import HeroCard1 from "../../Components/Props/HeroCard1";
import GlobalBtn from "../../Components/ReUsables/GlobalBtn";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-70px)] w-full ">
      <div className="h-[75%] w-full grid grid-cols-1 place-items-center bg-red-200 ">
        <div className="w-[85%] flex justify-center items-start flex-col ">
          <div className="w-[100%] md:w-[60%] text-[25px] mb-[20px] md:text-[32px] font-medium lg:text-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            quo excepturi consectetur id error, rerum hic, eius quisquam
            asperiores quod amet ratione sunt. Ratione placeat et quidem, eius
            ducimus assumenda?
          </div>
          <div className="flex items-center gap-5">
            <div>
              <GlobalBtn
                text="Explore Our Services →"
                className="text-[12px] md:text-[15px] py-4 px-7"
              />
            </div>
            <div>
              <GlobalBtn
                text="More About Us"
                className="text-[12px] md:text-[15px] py-4 px-7 bg-[#2a3942]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[15%] w-[100%] flex justify-center items-center ">
        <div className="w-[85%] flex justify-between">
          <div className="w-full md:w-[50%] flex items-center ">
            <div className="md:h-[100%] w-[20%] flex justify-center items-center ">
              <div className="py-3 px-4 bg-[rgb(1,124,78)] text-white rounded-full cursor-pointer hover:bg-green-500">
                Hi
              </div>
            </div>
            <div className="h-[100%] w-[80%] flex justify-center items-start flex-col ">
              <h3 className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                reiciendis itaque nostrum quam in odio eos excepturi fuga
                voluptates esse.
              </h3>
              <div className="text-[#2a3942] font-semibold ">
                Contact Us Now →
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <HeroCard1
              text="Lorem ipsum dolor sit amet"
              text2="Nisi
            reiciendis itaque nostrum quam in odio eos excepturi fuga
            voluptates esse."
              text3="Explore More"
            />
            <HeroCard1
              text="Lorem ipsum dolor sit amet"
              text2="Nisi
            reiciendis itaque nostrum quam in odio eos excepturi fuga
            voluptates esse."
              text3="Explore More"
              color="bg-[#2a3942]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
