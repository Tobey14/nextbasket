'use client'
import { DeleteOutline, Clear } from '@mui/icons-material';
import { formatProdPrice } from '@/utils/product';
import {
    toggleCart, getUserCart, removeFromCart, minusOneFromCart, addToCart
} from '@/lib/features/cart/cartSlice';
import Image from "../../node_modules/next/image";
import { useDispatch, useSelector } from 'react-redux'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';
import { Product } from "@/utils/interface";
import { toast } from 'react-toastify';
import { AppDispatch } from '@/lib/store';

export default function Cart() {
    // const data = getActiveProductFromLocalStorage();
    const { isOpen, cart } = useSelector((state: any) => state.cart);
    const dispatch = useDispatch();
    function closeModal() {
        dispatch(toggleCart(false))
    }

    function totalAmount(): number {
        let total = 0;
        cart.forEach(function (element: Product) {
            total += Number(element.price) * Number(element.quantity);
        });
        return Number(total);
    }

    function total(): number {
        let total = 0;
        cart.forEach(function (element: Product) {
            total += Number(element.quantity);
        });
        return Number(total);
    }

    function deleteItemFromCart(item: Product) {
        dispatch(removeFromCart(item));
        setTimeout(async () => {
            toast.success('Cart updated successfully');
            dispatch(getUserCart());
        }, 1000)
    }

    function removeOneFromCart(data: Product) {
        dispatch(minusOneFromCart(data));
        setTimeout(async () => {
            toast.success('Cart updated successfully');
            dispatch(getUserCart());
        }, 1000)
    }

    function addOneToCart(data: Product) {
        dispatch(addToCart(data));
        setTimeout(async () => {
            toast.success('Cart updated successfully');
            dispatch(getUserCart());
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
                                            My cart
                                        </p>

                                        <Clear className="text-[#23A6F0] cursor-pointer" onClick={closeModal} />
                                    </div>

                                    <section className="w-full relative">
                                        <div className="flex flex-wrap md:space-x-3 justify-center md:justify-start mb-5 px-2 md:px-5">
                                            <div className="w-full md:w-[65%] h-fit bg-[#FFFFFF] p-1 md:p-3 shadow-2xl  overflow-x-hidden overflow-y-auto">
                                                <p className='m-0'>Items ({total()})</p>
                                                <hr className='my-3' />
                                                {!cart.length && <div className='text-center'>
                                                    <p>Your Cart is Empty</p>
                                                </div>}

                                                {cart.map((data: Product, index: number) => {
                                                    return <div key={index}>
                                                        <div className="flex w-full justify-between">
                                                            <div className="min-w-[70%] flex">
                                                                <Image
                                                                    key={index}
                                                                    src={data.thumbnail}
                                                                    width={100}
                                                                    height={100}
                                                                    alt={`product-image`}
                                                                    style={{ width: '18%', cursor: 'pointer', height: '50px', backgroundSize: 'contain', marginRight:'10px'}}
                                                                />
                                                                <div>
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
                                                            <button className="flex border-0 cursor-pointer" onClick={() => deleteItemFromCart(data)}>
                                                                <DeleteOutline className="text-[#23A6F0]" />
                                                            </button>

                                                            <div className="flex">
                                                                <div className="flex w-fit items-center">
                                                                    <button className='w-[20px] h-[20px] pb-1 rounded-full flex justify-center items-center shadow-xl cursor-pointer border-2 border-[#23A6F0]' onClick={() => removeOneFromCart(data)}><p className='m-0 text-sm'>-</p> </button>
                                                                    <p className='mx-3 text-md'>{data.quantity}</p>
                                                                    <button className='w-[20px] h-[20px] pb-1 rounded-full flex justify-center items-center shadow-xl cursor-pointer border-2 border-[#23A6F0]' onClick={() => addOneToCart(data)}><p className='m-0 text-sm'>+</p></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className='my-3' />

                                                    </div>
                                                })
                                                }

                                            </div>

                                            <div className="cart-summary shadow-2xl p-1 md:p-3 w-full md:w-[34%] h-fit mt-5 md:mt-0">
                                                <p>Cart Summary</p>
                                                <hr />

                                                <div className="flex justify-between">
                                                    <p>Subtotal</p>

                                                    <p className='font-semibold'>${formatProdPrice(totalAmount())}</p>
                                                </div>

                                                {/* <div className="flex justify-between">
                                                    <p>Discount</p>

                                                    <p className='font-semibold'>${formatProdPrice(data.price)}</p>
                                                </div> */}

                                                <div className='w-full flex justify-center mt-5'>
                                                    <button className="w-fit h-fit px-3 py-1 text-[#FFFFFF] items-center bg-[#23A6F0]" onClick={() => console.log("checkout()")} >Checkout</button>
                                                </div>
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