"use client"; // This is a client component 
import Image from '../../node_modules/next/image';

export default function Footer() {
  const socials = ['insta', 'fb', 'twitter'];

  return (
    <main className="text-sm font-semibold  cursor-pointer relative mt-5">
      <section className="relative w-full px-5 lg:py-10 lg:px-[250px]">
        <div className='flex flex-col md:flex-row md:items-center justify-between w-full'>
          <Image
            src={`/images/logo.svg`}
            width={105}
            height={24}
            alt={`logo icon`}
          />

          <div className="flex space-x-3 items-center mt-3 md:mt-0">
            {socials.map((social, key) => {
              return <Image
                key={key}
                src={`/images/${social}Blue.svg`}
                width={20}
                height={20}
                alt={`${social} icon`}
                style={{ width: 'auto', cursor:'pointer', height: 'auto' }}
              />
            })
            }
          </div>
        </div>
        <hr className='my-5' />
        <div className="flex flex-wrap w-full justify-between">
          <div className='space-y-4 w-[100%] mt-4 md:w-[15%] lg:w-[20%]'>
            <p className="font-bold text-sm">Company Info</p>
            <p className="text-xs text-[#737373]">About Us</p>
            <p className="text-xs text-[#737373]">Carrier</p>
            <p className="text-xs text-[#737373]">We are hiring</p>
            <p className="text-xs text-[#737373]">Blog</p>
          </div>

          <div className='space-y-4 w-[100%] mt-4 md:w-[15%] lg:w-[20%]'>
            <p className="font-bold text-sm">Legal</p>
            <p className="text-xs text-[#737373]">About Us</p>
            <p className="text-xs text-[#737373]">Carrier</p>
            <p className="text-xs text-[#737373]">We are hiring</p>
            <p className="text-xs text-[#737373]">Blog</p>
          </div>

          <div className='space-y-4 w-[100%] mt-4 md:w-[15%] lg:w-[20%]'>
            <p className="font-bold text-sm">Features</p>
            <p className="text-xs text-[#737373]">Business Marketing</p>
            <p className="text-xs text-[#737373]">User Analytic</p>
            <p className="text-xs text-[#737373]">Live Chat</p>
            <p className="text-xs text-[#737373]">Unlimited Support</p>
          </div>

          <div className='space-y-4 w-[100%] mt-4 md:w-[15%] lg:w-[20%]'>
            <p className="font-bold text-sm">Resources</p>
            <p className="text-xs text-[#737373]">IOS & Android</p>
            <p className="text-xs text-[#737373]">Watch a Demo</p>
            <p className="text-xs text-[#737373]">Customers</p>
            <p className="text-xs text-[#737373]">API</p>
          </div>

          <div className='space-y-4 w-[100%] mt-4 md:w-[40%] lg:w-[20%]'>
            <p className="font-bold text-sm">Get In Touch</p>
            <div className="flex">
              <input type="text" placeholder='Your Email' className='p-3 border-solid border-2 border-[#23A6F0] bg-[#E6E6E6]' />
              <button className="hover:text-[#23A6F0] px-5 py-3 w-fit border-solid border-2 border-[#23A6F0] text-[#FFFFFF] bg-[#23A6F0] placeholder:text-[#737373] hover:bg-[#FFFFFF] hover:text-[#23A6F0]">Subscribe</button>
            </div>
            <p className="text-xs font-extralight text-[#737373]">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </section>
      <div className="bg-[#FAFAFA] w-full justify-between">
        <p className="p-5 lg:px-[250px] text-[#737373]">Made With Love By Finland All Right Reserved </p>
      </div>
    </main>
  );
}