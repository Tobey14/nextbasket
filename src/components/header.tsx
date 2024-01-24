"use client"; // This is a client component 

import { LocalPhoneOutlined, EmailOutlined, ExpandMore, PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from '@mui/icons-material';
import Image from '../../node_modules/next/image';
import { useState } from 'react';
import {
    toggleCart
} from '@/lib/features/cart/cartSlice';
import {
    toggleWishList
} from '@/lib/features/wishList/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from "@/utils/interface";

export default function Header() {
    const socials = ['insta', 'youtube', 'fb', 'twitter'];
    const [showDropDown, setShowDropDown] = useState(false);
    const { cart } = useSelector((state: any) => state.cart);
    const { wishList } = useSelector((state: any) => state.wishList);
    const dispatch = useDispatch();
    function total(): number {
        let total = 0;
        cart.forEach(function (element: Product) {
            total += Number(element.quantity);
        });
        return Number(total);
    }

    return (
        <main className="text-sm font-semibold  cursor-pointer">
            <section className="hidden bg-[#23856D] h-[58px] lg:flex items-center justify-between px-5 text-white">
                <div className="flex items-center space-x-9">
                    <p className="">
                        <LocalPhoneOutlined className="text-sm" /> (225) 555-0118
                    </p>

                    <p className="">
                        <EmailOutlined className="text-sm" /> michelle.rivera@example.com
                    </p>
                </div>

                <p className='hidden lg:block'>
                    Follow Us  and get a chance to win 80% off
                </p>

                <div className="flex space-x-3 items-center">
                    <p className="">
                        Follow Us  :
                    </p>
                    {socials.map((social, key) => {
                        return <Image
                            key={key}
                            src={`/images/${social}.svg`}
                            width={16}
                            height={16}
                            alt={`${social} icon`}
                            style={{ width: '17px', cursor: 'pointer', height: 'auto' }}
                        />
                    })
                    }
                </div>
            </section>

            <section className="relative bg-transparent h-[58px] flex items-center justify-between px-5 text-black font-bold mt-2 sm:mb-10">
                <nav className="flex items-center w-[100%] justify-between">
                    <div className='flex items-center justify-between lg:w-[55%] xl:w-[45%] space-x-5'>
                        <Image
                            src={`/images/logo.svg`}
                            width={105}
                            height={24}
                            alt={`logo icon`}
                        />

                        <ul className='hidden lg:flex space-x-5 items-center text-[#737373]'>
                            <li>Home</li>
                            <li>Shop <ExpandMore /></li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Pages</li>
                        </ul>
                    </div>


                    <div className='flex items-center justify-between text-[#23A6F0] space-x-5'>
                        <button className='hidden lg:block'><PersonOutlineOutlined className="hidden text-sm" /> Login / Register</button>

                        <ul className='flex space-x-5 items-center'>
                            <li className='hidden lg:block cursor-pointer'><SearchOutlined className="text-base" /></li>
                            <li className='text-[#737373] lg:text-[#23A6F0] cursor-pointer' onClick={() => dispatch(toggleCart(true))}><ShoppingCartOutlined className="text-xl" /> {total()}</li>
                            <li className='text-[#737373] lg:text-[#23A6F0] cursor-pointer' onClick={() => dispatch(toggleWishList(true))}><FavoriteBorderOutlined className="text-xl" /> {wishList?.length}</li>
                            <Image
                                className="lg:hidden"
                                src={`/images/menu.svg`}
                                width={25}
                                height={25}
                                alt={`logo icon`}
                                onClick={() => setShowDropDown(!showDropDown)}
                            />
                        </ul>
                    </div>

                </nav>

            </section>
            <nav className="lg:hidden w-full relative left-0 text-[#737373] text-xl font-bold">
                <ul className={showDropDown ? 'flex flex-col items-center space-y-7 h-fit bg-[#FFFFFF] py-5 duration-1000' : 'h-0 duration-500'}>
                    <li className={!showDropDown ? 'hidden duration-1000' : 'duration-1000'}>Home</li>
                    <li className={!showDropDown ? 'hidden duration-1000' : 'duration-1000'}>Product</li>
                    <li className={!showDropDown ? 'hidden duration-1000' : 'duration-1000'}>Pricing</li>
                    <li className={!showDropDown ? 'hidden duration-1000' : 'duration-1000'}>Contact</li>
                    <li className={!showDropDown ? 'hidden duration-1000' : 'duration-1000'}><button className='block text-[#23A6F0]'><PersonOutlineOutlined className="text-sm" /> Login / Register</button></li>

                    

                </ul>
                
            </nav>




        </main>
    );
}