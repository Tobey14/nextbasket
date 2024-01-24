'use client'
import { DeleteOutline, Clear } from '@mui/icons-material';
import { formatProdPrice } from '@/utils/product';
import {
    toggleWishList, getUserWishList, removeFromWishList
} from '@/lib/features/wishList/wishListSlice';
import Image from "../../node_modules/next/image";
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Product } from "@/utils/interface";
import { toast } from 'react-toastify';

export default function WishList() {
    const { isOpen, wishList } = useSelector((state: any) => state.wishList);
    const dispatch = useDispatch();
    function closeModal() {
        dispatch(toggleWishList(false))
    }

    function deleteItemFromWishList(item: Product) {
        dispatch(removeFromWishList(item));
        setTimeout(async () => {
            toast.success('WishList updated successfully');
            dispatch(getUserWishList());
        }, 1000)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="transform overflow-hidden min-w-[80%] max-h-[80%] rounded-2xl bg-white p-2 md:p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-between align-items">
                                        <p
                                            className="text-lg font-medium text-gray-900 ml-4"
                                        >
                                            My WishList
                                        </p>

                                        <Clear className="text-[#23A6F0] cursor-pointer" onClick={closeModal} />
                                    </div>

                                    <section className="w-full relative">
                                        <div className="flex space-x-3 justify-center md:justify-start mb-5 px-5">
                                            <div className="w-full h-fit bg-[#FFFFFF] p-1 md:p-3 shadow-2xl  overflow-x-hidden overflow-y-auto">
                                                <p className='m-0'>Items ({wishList.length})</p>
                                                <hr className='my-3' />
                                                {!wishList.length && <div className='text-center'>
                                                    <p>Your wishList is Empty</p>
                                                </div>}

                                                {wishList.map((data: Product, index: number) => {
                                                    return <div key={index}>
                                                        <div className="flex w-full justify-between">
                                                            <div className="min-w-[70%] flex">
                                                                <Image
                                                                    key={index}
                                                                    src={data.thumbnail}
                                                                    width={100}
                                                                    height={100}
                                                                    alt={`product-image`}
                                                                    style={{ width: '18%', cursor: 'pointer', height: '50px', backgroundSize: 'contain', marginRight: '10px' }}
                                                                />                                                                <div>
                                                                    <p className='text-md text-[#23A6F0] font-semibold'>{data.title}</p>
                                                                    <p className='text-xs'>{data.description}</p>
                                                                    <p className='text-xs text-[#23A6F0]'>{data.brand}</p>
                                                                    <p>{data?.stock > 0 ? 'In Stock' : 'out of stock'}</p>
                                                                </div>
                                                            </div>

                                                            <div className="">
                                                                <p className='font-semibold'>${formatProdPrice(data.price)}</p>
                                                                <p className='text-[#8D8D8D] line-through'>${formatProdPrice(data.price)}</p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-5 flex items-center justify-between bg-transparent">
                                                            <button className="flex border-0 cursor-pointer" onClick={() => deleteItemFromWishList(data)}>
                                                                <DeleteOutline className="text-[#23A6F0]" />
                                                            </button>
                                                        </div>
                                                        <hr className='my-3' />

                                                    </div>
                                                })
                                                }

                                            </div>

                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}