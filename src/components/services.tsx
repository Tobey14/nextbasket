
import Image from "../../node_modules/next/image";

export default function Services() {
  const services = [
    {
      title:"Easy Wins",
      desc:"Get your best looking smile now!",
      img:'easywins.svg',
    },
    {
      title:"Concrete",
      desc:"Defalcate is most focused in helping you discover your most beautiful smile",
      img:'concrete.svg',
    },
    {
      title:"Hack Growth",
      desc:"Overcame any hurdle or any other problem.",
      img:'growth.svg',
    }
  ]
  return (
    <section className="mt-0 py-[20px] w-full">
      <p className="text-center text-[#737373] text-md font-semibold">Featured Products</p>
      <p className="text-center text-[#252B42] text-[24px] font-bold">BESTSELLER SERVICES</p>
      <p className="text-center text-[#737373] text-xs">Problems trying to resolve the conflict between</p>
      <div className="flex flex-wrap w-[100%] items-center justify-between py-10">
        {services.map((service, index) => {
          return <div className="flex flex-col align-items space-y-3 w-[100%] md:w-[32%] mt-8">
            <div className="w-full flex justify-center">
              <Image
                src={`/images/services/${service.img}`}
                width={60}
                height={238}
                alt={`logo icon`}
                style={{ width: '60px', height: 'auto' }}
              />
            </div>
            

            <p className="text-center text-[#252B42] text-md font-semibold">{service.title}</p>
            <p className="text-center text-[#737373] text-xs font-semibold">{service.desc}</p>
          </div>
          }
        )}
      </div>
    </section>
  );
}
