
import Image from "../../node_modules/next/image";
import { StarOutlined, StarBorderOutlined } from '@mui/icons-material';

export default function Testimonials() {
  const testimonials = 'abcdefhij'.split('');
  const ratings = Array.from(Array(4).keys());


  return (
    <section className="mt-0 py-[20px] w-full flex flex-wrap justify-between items-center">

      <div className="flex flex-col items-center w-[100%] md:w-[48%]">
        <p className="text-center text-[#252B42] text-[24px] font-semibold mb-10 md:mb-20 w-[60%] md:w-fit">What they say about us</p>
        <Image
          src={`/images/testimonials/woman.svg`}
          width={60}
          height={138}
          alt={`logo icon`}
          style={{ width: '60px', height: 'auto', borderRadius:"50%" }}
        />

        <div className="ratings mt-5">
          {
            ratings.map((rate, index) => {
              return <StarOutlined key={index} className="text-[#F3CD03]"/>
            })
          }

          <StarBorderOutlined className="text-[#F3CD03]"/>
        </div>
        <p className="text-center text-[#737373] text-xs font-semibold mt-5 md:mt-10 w-[70%] md:w-fit">Slate helps you see how many more days you need to work to reach your financial goal.</p>
        <p className="text-center text-[#23A6F0] text-sm font-semibold mt-5 md:mt-10">Regina Miles</p>
        <p className="text-center text-[#252B42] text-sm font-bold">Designer</p>
      </div>
      
      <div className="flex flex-wrap w-[100%] md:w-[48%] items-center justify-between mt-10 md:mt-0">
        {testimonials.map((test, index) => {
          return <div className="w-[32%] mt-2" key={index}>
              <Image
                src={`/images/testimonials/${test}.svg`}
                width={0}
                height={238}
                alt={`logo icon`}
                style={{ width: '100%', height: 'auto' }}
              />
          </div>
          }
        )}
      </div>
    </section>
  );
}
