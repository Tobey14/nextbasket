
import Image from "../../node_modules/next/image";

export default function Products() {
  const records = Array.from(Array(10).keys());
  return (
    <section className="mt-[300px] md:mt-0 py-[120px] w-full">
      <p className="text-center text-[#737373] text-md font-semibold">Featured Products</p>
      <p className="text-center text-[#252B42] text-[24px] font-bold">BESTSELLER PRODUCTS</p>
      <p className="text-center text-[#737373] text-xs">Problems trying to resolve the conflict between</p>
      <div className="flex flex-wrap w-[100%] items-center justify-between py-10">
        {records.map((rec, index) => {
          return <div className="flex flex-col align-items space-y-3 w-[100%] md:w-[32%] lg:w-[18.5%] mt-8">
            <Image
              src={`/images/products/lamp.svg`}
              width={0}
              height={238}
              alt={`logo icon`}
              style={{ width: '100%', height: 'auto' }}
            />

            <p className="text-center text-[#252B42] text-md font-semibold">Graphic Design</p>
            <p className="text-center text-[#737373] text-xs font-semibold">English Department</p>
            <p className="text-center text-[#23856D] text-xs font-bold"><span className="text-[#BDBDBD]">$16.48</span> $6.48</p>
          </div>
          }
        )}
      </div>
      <div className="w-full text-center my-5">
        <button className="text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] hover:text-[#FFFFFF] hover:bg-[#23A6F0]">LOAD MORE PRODUCTS</button>
      </div>
    </section>
  );
}
