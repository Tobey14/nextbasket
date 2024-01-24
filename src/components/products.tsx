'use client'
import { useEffect, useState } from 'react'
import Image from "../../node_modules/next/image";
import { formatProdPrice } from '@/utils/product';
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProducts, setActiveProduct
} from '@/lib/features/products/productSlice';
import {Product, ProductProps} from "@/utils/interface";
import { useRouter } from 'next/navigation';
import BigLoading from './BigLoading';

export default function Products(props: ProductProps) {
  const {products, totalProducts, isLoading} = useSelector((state: any) => state.product); 
  const dispatch = useDispatch();
  const router = useRouter();
  const [limit, setLimit] = useState(props.paginated | 8);

  useEffect(()=>{
    dispatch(fetchProducts(limit));
  }, [limit])

  const handleViewProduct = (product: Product) =>{
    dispatch(setActiveProduct(product));
    router.push('/product')
  }

  return (
    <section className="mt-[300px] md:mt-0 py-[120px] w-full">
      <p className="text-center text-[#737373] text-md font-semibold">{props.topic}</p>
      <p className={props.row === 5?"text-center text-[#252B42] text-[24px] font-bold": "text-left text-[#252B42] text-[24px] font-bold"}>{props.title}</p>
      <p className="text-center text-[#737373] text-xs">{props.description}</p>
      {props.row === 4 && <hr className="my-2"/>}
      {isLoading? <BigLoading />
        :
        <div className="flex flex-wrap w-[100%] items-center justify-between py-5">
          {products.map((prod: Product, index: number) => {
            return <div key={index} onClick={() => handleViewProduct(prod)} className={props.row === 5? "flex flex-col cursor-pointer align-items space-y-3 w-[100%] md:w-[32%] lg:w-[18.5%] mt-8" : "flex flex-col cursor-pointer align-items space-y-3 w-[100%] md:w-[32%] lg:w-[23.5%] mt-8"}>
              <Image
                src={prod.thumbnail}
                width={200}
                height={238}
                alt={`logo icon`}
                style={{ width: '100%', height: '200px', backgroundSize:'cover' }}
              />

              <p className="text-center text-[#252B42] text-md font-semibold mt-5">{prod.title}</p>
              <p className="text-center text-[#737373] text-xs font-semibold">{prod.category}</p>
              <p className="text-center text-[#23856D] text-xs font-bold"><span className="text-[#BDBDBD]">${formatProdPrice(prod.price)}</span> ${formatProdPrice(prod.price - prod.price*(prod.discountPercentage/100))}</p>
            </div>
            }
          )}
        </div>
      }
      {(props.paginated && products.length !== totalProducts) && <div className="w-full text-center mt-5">
        <button className="text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] hover:text-[#FFFFFF] hover:bg-[#23A6F0]" onClick={() => setLimit(old => old*2)}>LOAD MORE PRODUCTS</button>
      </div>}
    </section>
  );
}
