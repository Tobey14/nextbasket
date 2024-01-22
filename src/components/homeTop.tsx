import bg from "../../public/images/large/top-img.svg";
import bg2 from "../../public/images/large/top-img-2.svg";
import bg3 from "../../public/images/large/top-img-3.svg";
import bg4 from "../../public/images/large/top-img-4.svg";

export default function HomeTop() {
  return (
    <section className="flex flex-wrap w-[100%] items-center justify-between">
      <div className="w-full md:w-[39%] h-[300px] md:h-[500px] relative p-5" style={{ backgroundImage: `url(${bg.src})`, }}>
        <p className="text-[#2DC071] text-sm font-semibold">5 items</p>
        <p className="font-bold text-[40px] text-[#252B42]">FURNITURE</p>
        <p className="text-[#252B42] text-sm font-semibold">Read More</p>
      </div>

      <div className="w-full md:w-[59%] h-fit md:h-[500px] relative md:space-y-4">
        <div className="w-[100%] h-[300px] md:h-[48%] relative p-5 mt-2 md:mt-0" style={{ backgroundImage: `url(${bg2.src})`, }}>
          <p className="text-[#2DC071] text-sm font-semibold">5 items</p>
          <p className="font-bold text-[24px] text-[#252B42]">FURNITURE</p>
          <p className="text-[#252B42] text-sm font-semibold">Read More</p>
        </div>

        <div className="w-[100%] h-[250px] flex flex-wrap relative justify-between">
          <div className="w-full md:w-[48.5%] h-[300px] md:h-[97%] relative p-5 mt-2 md:mt-0" style={{ backgroundImage: `url(${bg3.src})`, }}>
            <p className="text-[#2DC071] text-sm font-semibold">5 items</p>
            <p className="font-bold text-[24px] text-[#252B42]">FURNITURE</p>
            <p className="text-[#252B42] text-sm font-semibold">Read More</p>
          </div>
          <div className="w-full md:w-[48.5%] h-[300px] md:h-[97%] relative p-5 mt-2 md:mt-0" style={{ backgroundImage: `url(${bg4.src})`, }}>
            <p className="text-[#2DC071] text-sm font-semibold">5 items</p>
            <p className="font-bold text-[24px] text-[#252B42]">FURNITURE</p>
            <p className="text-[#252B42] text-sm font-semibold">Read More</p>
          </div>
        </div>

      </div>

    </section>
  );
}
