import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

import Image from "next/image";


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataResponse, setDataResponse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `/api/data-goat`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.products);
      setDataResponse(res.products);
    }
    getPageData();
  }, []);

  const lastPostIndex = currentPage * productsPerPage;
  const firstPostIndex = lastPostIndex - productsPerPage;
  const currentProducts = dataResponse.slice(firstPostIndex, lastPostIndex);

  return (
    <main className={`pt-16 bg-slate-100 ${inter.className}`}>
      <Navbar />
      <div className="lg:mx-16 sm:mx-8 mx-4 mb-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-8">
          
          {currentProducts.map((product) => {
            const productUrl = `/products/${product.sku}`
            return (
              <><div className="product-card max-w-s mb-2 bg-orange-100 border-2 border-black" key={product.sku}>
                <a href={productUrl}>
                  <div className="overflow-hidden">
                    <img className="grid-image w-full bg-white transition duration-300 ease-in-out hover:scale-110"
                      src={`${product.PICTUREURL}`}
                      alt="product" />
                  </div>
                  <div className="px-6 pt-4">
                    <h4 className="mb-1 text-xl font-semibold tracking-tight text-gray-800">{product.NAME}</h4>
                    {/* <div>
                      <span className="flex justify-end -mb-1 text-gray-500 text-sm">Starting at</span>
                      {
                        (product.price) && <h5 className="flex justify-end">${parseInt(product.price)-7}</h5>
                      }
                    </div> */}
                  </div>
                  <div className="flex justify-between px-6 pb-4">
                    <div>
                      <span className="flex -mb-1 text-gray-500 text-sm">Starting at</span>
                      {
                        (product.price) && <h5 className="">${parseInt(product.price)-7}</h5>
                      }
                    </div>
                    <div>
                      {
                        (product.gender) && <h5 className="capitalize">{product.gender}</h5>
                      }
                    </div>
                  </div>
                  
                </a>
              </div></>
            );
          })}
        </div>        
      </div>
      <Pagination
        totalProducts={dataResponse.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Footer />
    </main>
  )
}
