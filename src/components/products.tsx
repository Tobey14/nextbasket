
import Image from "../../node_modules/next/image";
interface Props {
  topic: string;
  title: string;
  description: string;
  row: number;
  paginated:boolean;
}
export default function Products(props: Props) {
  const records = Array.from(Array(10).keys());
  return (
    <section className="mt-[300px] md:mt-0 py-[120px] w-full">
      <p className="text-center text-[#737373] text-md font-semibold">{props.topic}</p>
      <p className={props.row === 5?"text-center text-[#252B42] text-[24px] font-bold": "text-left text-[#252B42] text-[24px] font-bold"}>{props.title}</p>
      <p className="text-center text-[#737373] text-xs">{props.description}</p>
      {props.row === 4 && <hr className="my-2"/>}
      <div className="flex flex-wrap w-[100%] items-center justify-between py-5">
        {records.map((rec, index) => {
          return <div className={props.row === 5? "flex flex-col align-items space-y-3 w-[100%] md:w-[32%] lg:w-[18.5%] mt-8" : "flex flex-col align-items space-y-3 w-[100%] md:w-[32%] lg:w-[23.5%] mt-8"}>
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
      {props.paginated && <div className="w-full text-center mt-5">
        <button className="text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] hover:text-[#FFFFFF] hover:bg-[#23A6F0]">LOAD MORE PRODUCTS</button>
      </div>}
    </section>
  );
}
