'use client'

import { ArrowForwardIosOutlined, StarOutlined, StarBorderOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react'
import fox from "../../../public/images/fox.svg";
import Image from "../../../node_modules/next/image";
import Products from '@/components/products';
import { useDispatch, useSelector } from 'react-redux';
import { formatProdPrice } from '@/utils/product';
import { fetchSingleProduct} from '@/lib/features/products/productSlice';
import { addToCart, getUserCart} from '@/lib/features/cart/cartSlice';
import { addToWishList, getUserWishList } from '@/lib/features/wishList/wishListSlice';
import { toast } from 'react-toastify';
import { isInWishList } from '@/utils/wishList';
import { AppDispatch } from '@/lib/store';


export default function Product() {
  const brands = 'abcdef'.split('');
  const { activeProduct } = useSelector((state: any) => state.product);
  const dispatch = useDispatch();
  const [activeImage, setActiveImage] = useState(activeProduct?.thumbnail);
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const [isWishListUpdated, setIsWishListUpdated] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const ratings = Array.from(Array(Math.round(activeProduct?.rating)).keys());
  const undeservedRating = Array.from(Array((5 - Math.round(activeProduct?.rating))).keys());

  useEffect(()=>{
    dispatch(fetchSingleProduct(activeProduct?.id));
    setActiveImage(activeProduct?.thumbnail);
    setIsCartUpdated(false);
    setIsWishListUpdated(false);
  }, [activeProduct?.id])

  const viewNextImage = () => {
    if(imgIndex >= (activeProduct?.images?.length - 1)){
      setActiveImage(activeProduct?.thumbnail);
      setImgIndex(0);
      return;
    }else{
      setActiveImage(activeProduct?.images[imgIndex]);
      setImgIndex(old => old + 1);
    }
  }

  const putInCart = () => {
    dispatch(addToCart(activeProduct)); 
    setTimeout(async ()=>{
      toast.success('Cart updated successfully');
      dispatch(getUserCart());
      return setIsCartUpdated(true);
    }, 1000)
  }

  const putInWishList = () => {
    if(isInWishList(activeProduct)){
      toast.error('Product added to your WishList already!');
      return;
    }
    dispatch(addToWishList(activeProduct)); 
    setTimeout(async ()=>{
      toast.success('WishList updated successfully');
      dispatch(getUserWishList());
      return setIsWishListUpdated(true);
    }, 1000)
  }



  return (
    <section className="w-full relative">
      <div className="flex space-x-3 items-center justify-center md:justify-start mb-5 px-5 lg:py-3 lg:px-[250px]">
        <p className="font-bold text-sm">
          Home
        </p>
        <ArrowForwardIosOutlined className="text-sm text-[#BDBDBD]" />
        <p className="text-sm  text-[#BDBDBD]">
          Shop
        </p>
      </div>

      <div className="flex flex-wrap w-full justify-between bg-[#FAFAFA] px-5 lg:pb-3 lg:px-[250px]">
        <div className="w-full md:w-[48%]">
          <div className="w-[100%] h-[300px] md:h-[400px] p-4 relative" style={{ backgroundImage: `url(${activeImage})`, backgroundSize: 'cover' }}>
            <ArrowForwardIosOutlined className="text-[#FFFFFF] absolute top-30 md:bottom-20 right-5 cursor-pointer" onClick={viewNextImage}/>
          </div>

          <div className="flex mt-5 flex-wrap">
            {activeProduct?.images?.map((image: string, index: number) => {
              return <Image
                key={index}
                src={image}
                width={100}
                height={100}
                alt={`logo icon`}
                onClick={()=> setActiveImage(image)}
                style={{ width: '18%', cursor:'pointer', height: '90px', backgroundSize:'contain', margin:'0px 5px 5px 0px' }}
              />
            })
            }
          </div>
        </div>

        <div className="w-full md:w-[48%]">
          <p className='font-semibold text-sm mt-5 md:mt-0'>{activeProduct?.title}</p>
          <div className="flex space-x-2 items-center mt-5">
            {
              ratings.map((rate, index) => {
                return <StarOutlined key={index} className="text-[#F3CD03]" />
              })
            }

            {
              undeservedRating.map((rate, index) => {
                return <StarBorderOutlined key={index} className="text-[#F3CD03]" />
              })
            }
            <p className="text-xs text-[#737373] font-semibold">10 Reviews</p>
          </div>
          <p className="font-bold text-xl text-[#252B42] mt-5">${formatProdPrice(activeProduct?.price - activeProduct?.price*(activeProduct?.discountPercentage/100))}</p>
          <p className="text-[#737373] text-sm font-semibold mt-3">Availability: <span className="text-[#23A6F0]">{activeProduct?.stock > 0 ? 'In Stock': 'out of stock'}</span></p>

          <p className="font-light text-xs mt-5">
            {activeProduct?.description}
          </p>

          <hr className="mt-10 md:mt-[60px] mb-10" />
          <div className="flex space-x-3">
            <div className="rounded-full w-[30px] h-[30px] bg-[#23A6F0]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#2DC071]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#E77C40]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#252B42]"></div>
          </div>

          <div className="flex space-x-5 mt-3">
            <button className="hover:text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] text-[#FFFFFF] bg-[#23A6F0] hover:bg-[#FFFFFF] hover:text-[#23A6F0]">Select Options</button>
            <button className="bg-[#E8E8E8] flex items-center justify-between p-2 rounded-full cursor-pointer" onClick={putInWishList} disabled={isWishListUpdated}>
              <FavoriteBorderOutlined className=""/>
            </button>
            <button className="bg-[#E8E8E8] flex items-center justify-between p-2 rounded-full cursor-pointer"  onClick={putInCart} disabled={isCartUpdated}>
              <ShoppingCartOutlined className="" />
            </button>

            <div className="bg-[#E8E8E8] flex items-center justify-between p-2 rounded-full">
              <RemoveRedEyeOutlined className="" />
            </div>
          </div>


        </div>
      </div>

      <div className="flex justify-center items-center space-x-3 my-10">
        <p className="text-sm font-semibold text-[#737373]">Description</p>
        <p className="text-sm font-semibold text-[#737373]">Additional Information</p>
        <p className="text-sm font-semibold text-[#737373]">Reviews (0)</p>
      </div>

      <div className="hidden md:flex flex-wrap px-5 lg:py-10 lg:px-[250px] w-full justify-between">
        <div className="w-full md:w-[46%]">
          <p className="font-bold text-[#252B42] text-md">the quick fox jumps over</p>

          <p className="font-light text-[#737373] text-sm mt-3">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <div className='border-solid border-l-4 border-[#23856D] mt-3'>
            <p className="font-light text-[#737373] text-sm ml-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
          <p className="font-light text-[#737373] text-sm mt-3">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>

        </div>

        <div className="w-full md:w-[46%] h-[300px] md:h-[350px] p-4 relative" style={{ backgroundImage: `url(${fox.src})`, backgroundSize: 'cover' }}>

        </div>

      </div>



      <div className="px-5 lg:py-10 lg:px-[250px] w-full relative">
        <Products title='BESTSELLER PRODUCTS' row={4} topic='' paginated={0} description='' />
      </div>

      <div className="flex justify-between items-center bg-[#FAFAFA] px-5 lg:py-5 lg:px-[250px] w-full flex-wrap mb-5">
        {brands.map((brand, index) => {
          return <div key={index} className="w-full md:w-[15%] md:text-start flex justify-center md:justify-start mt-10 md:mt-0">
            <Image
              src={`/images/brands/${brand}.svg`}
              width={200}
              height={238}
              alt={`${brand} icon`}
              style={{ width: '20%', height: 'auto' }}
            />
          </div>


        })}
      </div>




    </section>
  );
}
