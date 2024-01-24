
import { AccessAlarmOutlined, EqualizerOutlined, ArrowForwardIosOutlined} from '@mui/icons-material';
import a from "../../public/images/posts/a.svg";
import b from "../../public/images/posts/b.svg";
import c from "../../public/images/posts/c.svg";


export default function Posts() {
  const posts = [
      a.src,
      b.src,
      c.src,
  ]
  return (
    <section className="mt-0 py-[20px] w-full">
      <p className="text-center text-[#23A6F0] text-md font-semibold">Practice Advice</p>
      <p className="text-center text-[#252B42] text-[24px] font-bold">Featured Posts</p>

      <div className="flex flex-wrap w-[100%] items-center justify-between py-10">
        {posts.map((post, index) => {
          return <div className="flex flex-col w-[100%] md:w-[32.5%] mt-8">
            <div className="w-[100%] h-[238px] p-4" style={{ backgroundImage: `url(${post})`, }}>
              <div className="bg-[#E74040] flex items-center justify-center w-[50px] px-3 p-1">
                <p className="text-sm font-semibold text-white">NEW</p>
              </div>
              
            </div>

            <div className="p-5 w-full border-solid border-2 border-[#E8E8E8] space-y-5">
              <div className="flex items-center space-x-3">
                <p className="text-xs text-[#8EC2F2]">Google</p>
                <p className="text-xs text-[#737373]">Trending</p>
                <p className="text-xs text-[#737373]">New</p>
              </div>
              <p className="text-[#252B42] text-md">Loudest à la Madison #1 (L'integral)</p>
              <p className="text-[#737373] text-xs">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              <div className="flex justify-between items-center">
                <p className="text-xs">
                  <AccessAlarmOutlined className="text-base text-[#23A6F0]"/> 22 April 2021
                </p>
                <p className="text-xs">
                  <EqualizerOutlined className="text-base text-[#23856D]"/> 10 comments
                </p>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="font-semibold text-xs">Learn More</p>
                <ArrowForwardIosOutlined className="text-xs text-[#23A6F0]"/>
              </div>
            </div>
          </div>
          }
        )}
      </div>
    </section>
  );
}
