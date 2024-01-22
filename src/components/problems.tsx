
import problem from "../../public/images/problem.svg";

export default function Problems() {


  return (
    <section className="mt-0 py-[20px] w-full flex flex-col justify-center items-center w-[100%] h-[440px] md:h-[640px] mt-10" style={{ backgroundImage: `url(${problem.src})`, backgroundSize:'cover', backgroundRepeat: "no-repeat" }}>
      <p className="text-[#23A6F0] text-sm font-semibold">Designing Better Experience</p>
      <p className="text-center text-[#252B42] text-[24px] md:text-[40px] font-bold w-[90%] md:w-[50%] leading-0 mt-5">Problems trying to resolve the conflict between </p>
      <p className="text-center text-[#737373] text-xs mt-5 w-[90%] md:w-[30%]">Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
      <p className="font-bold text-md text-[#23856D] mt-5">$16.48</p>
      <div className="w-full text-center my-5">
        <button className="hover:text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] text-[#FFFFFF] bg-[#23A6F0] hover:bg-[#FFFFFF] hover:text-[#23A6F0]">ADD YOUR CALL TO ACTION</button>
      </div>


    </section>
  );
}
