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

      {/* grid experiment */}
      <section className="lg:mx-16 sm:mx-8 mx-4 mb-8 flex justify-center">
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
                  <div className="px-6 py-4 grid grid-cols-3">
                    <h4 className="mb-1 text-xl font-semibold tracking-tight text-gray-800 col-span-2">{product.NAME}</h4>
                    <div>
                      {
                        (product.price) && <h5 className="flex justify-end pt-1">${product.price}</h5>
                      }
                    </div>
                    {/* <p className="leading-normal text-gray-700">We could put a brief product description here.</p> */}
                  </div>
                </a>
              </div></>
            );
          })}
        </div>        
      </section>
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
