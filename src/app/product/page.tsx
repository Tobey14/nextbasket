import { ArrowForwardIosOutlined, StarOutlined, StarBorderOutlined, FavoriteBorderOutlined, ShoppingCartOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import single from "../../../public/images/products/single.svg";
import fox from "../../../public/images/fox.svg";
import Image from "../../../node_modules/next/image";
import Products from '@/components/products';

export default function Product() {
  const ratings = Array.from(Array(4).keys());
  const brands = 'abcdef'.split('');



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
          <div className="w-[100%] h-[300px] md:h-[400px] p-4 relative" style={{ backgroundImage: `url(${single.src})`, backgroundSize:'cover'}}>
            <ArrowForwardIosOutlined className="text-[#FFFFFF] absolute top-30 md:bottom-20 right-5" />
          </div>

          <div className="flex space-x-2 mt-5">
            <Image
              src={`/images/products/a.svg`}
              width={0}
              height={238}
              alt={`logo icon`}
              style={{ width: '20%', height: 'auto' }}
            />
            <Image
              src={`/images/products/b.svg`}
              width={0}
              height={238}
              alt={`logo icon`}
              style={{ width: '20%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="w-full md:w-[48%]">
          <p className='font-semibold text-sm mt-5 md:mt-0'>Floating Phone</p>
          <div className="flex space-x-2 items-center mt-5">
            {
              ratings.map((rate, index) => {
                return <StarOutlined key={index} className="text-[#F3CD03]" />
              })
            }

            <StarBorderOutlined className="text-[#F3CD03]" />
            <p className="text-xs text-[#737373] font-semibold">10 Reviews</p>
          </div>
          <p className="font-bold text-xl text-[#252B42] mt-5">$1,139.33</p>
          <p className="text-[#737373] text-sm font-semibold mt-3">Availability: <span className="text-[#23A6F0]">In Stock</span></p>

          <p className="md:hidden font-light text-xs mt-5">
            Met minim Mollie non desert
            Alamo est sit cliquey dolor do
            met sent. RELIT official consequent
            door ENIM RELIT Mollie. Excitation
            venial consequent sent nostrum met.
          </p>

          <hr className="mt-10 md:mt-[120px] mb-10" />
          <div className="flex space-x-3">
            <div className="rounded-full w-[30px] h-[30px] bg-[#23A6F0]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#2DC071]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#E77C40]"></div>
            <div className="rounded-full w-[30px] h-[30px] bg-[#252B42]"></div>
          </div>

          <div className="flex space-x-5 mt-3">
            <button className="hover:text-[#23A6F0] px-5 py-2 w-fit border-solid border-2 border-[#23A6F0] text-[#FFFFFF] bg-[#23A6F0] hover:bg-[#FFFFFF] hover:text-[#23A6F0]">Select Options</button>
            <div className="bg-[#E8E8E8] flex items-center justify-between p-2 rounded-full">
              <FavoriteBorderOutlined className="" />
            </div>
            <div className="bg-[#E8E8E8] flex items-center justify-between p-2 rounded-full">
              <ShoppingCartOutlined className="" />
            </div>

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

        <div className="w-full md:w-[46%] h-[300px] md:h-[350px] p-4 relative" style={{ backgroundImage: `url(${fox.src})`, backgroundSize:'cover'}}>

        </div>

      </div>

      

      <div className="px-5 lg:py-10 lg:px-[250px] w-full relative">
        <Products title='BESTSELLER PRODUCTS' row={4} topic='' paginated={false} description=''/>
      </div>

      <div className="flex justify-between items-center bg-[#FAFAFA] px-5 lg:py-5 lg:px-[250px] w-full flex-wrap mb-5">
        {brands.map((brand, index) => {
          return <div className="w-full md:w-[15%] md:text-start flex justify-center md:justify-start mt-10 md:mt-0">
            <Image
              key={index}
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
