import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const { sku } = router.query;
  const [dataResponse, setDataResponse] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    async function getPageData() {
      const apiUrlEndpoint = `/api/data-router-goat`;
      const postData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sku: sku,
        })
      }
      const response = await fetch(apiUrlEndpoint, postData);
      const res = await response.json();
      console.log("API Response: ", res.products[0]);
      setDataResponse(res.products[0]);
      // console.log("dataResponse 0: ", dataResponse);
    }
    getPageData();
  }, [router.query.id, router.isReady]);
  return (
    <main className={`mt-24 ${inter.className}`}>
      <Navbar />
      <div id="top" className="lg:mx-16 sm:mx-8 mx-4 mb-16 md:flex">
        <div id="image" className="md:w-1/2 border-2 pt-6">
          <div className="ml-10">
            <h1 className="sm:text-3xl text-2xl font-bold">{dataResponse.SILHOUETTE}</h1>
            <h2 className="sm:text-3xl text-2xl">{dataResponse.NICKNAME}</h2>
          </div>
          <img src={`${dataResponse.PICTUREURL}`} alt="" className="sm:-mt-20 -mt-10"/>
        </div>
        <div id="links" className="md:mt-0 mt-8 md:w-1/2 xl:ml-60 lg:ml-24 md:ml-12">
          <div className="flex justify-center text-xl font-semibold mb-2">Buy Now - 4 Stores</div>
          <div className="mb-2 border-2 px-4 pt-2 pb-4">
            <div className="flex items-center justify-between">
              <span>
                <img src="https://assets.solesense.com/site/images/logos/retailers/flight-club.svg" alt="" className="w-16 mb-4 mr-4 pt-4 first-line:inline" />
              </span>
              <span className="sm:text-xl text-lg">
                {
                  (dataResponse.price) && <h2 className="sm:text-2xl">${parseInt(dataResponse.price)+2}</h2>
                }
              </span>
              <span>
                <h2 className="sm:text-2xl"><a href={`${dataResponse.URL}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-md px-3 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" target="_blank">Buy</a></h2>
              </span>            
            </div>
            <div className="text-sm">Flight Club</div>
            <div className="text-xs">Last checked 3 days ago</div>
          </div>
          <div className="mb-2 border-2 px-4 pt-2 pb-4">
            <div className="flex items-center justify-between">
              <span>
                <img src="https://assets.solesense.com/site/images/logos/retailers/goat.svg" alt="" className="w-16 mb-4 mr-4 pt-4 first-line:inline" />
              </span>
              <span className="sm:text-xl text-lg">
                {
                  (dataResponse.price) && <h2 className="sm:text-2xl">${dataResponse.price}</h2>
                }
              </span>
              <span>
                <h2 className="sm:text-2xl"><a href={`${dataResponse.URL}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-md px-3 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" target="_blank">Buy</a></h2>
              </span>            
            </div>
            <div className="text-sm">Goat</div>
            <div className="text-xs">Last checked 2 days ago</div>
          </div>
          <div className="mb-2 border-2 px-4 pt-2 pb-4">
            <div className="flex items-center justify-between">
              <span>
                <img src="https://assets.solesense.com/site/images/logos/retailers/stockx.svg" alt="" className="w-16 mb-4 mr-4 pt-4 first-line:inline" />
              </span>
              <span className="sm:text-xl text-lg">
                {
                  (dataResponse.price) && <h2 className="sm:text-2xl">${parseInt(dataResponse.price)+6}</h2>
                }
              </span>
              <span>
                <h2 className="sm:text-2xl"><a href={`${dataResponse.URL}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-md px-3 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" target="_blank">Buy</a></h2>
              </span>            
            </div>
            <div className="text-sm">StockX</div>
            <div className="text-xs">Last checked yesterday</div>
          </div>
          <div className="mb-2 border-2 px-4 pt-2 pb-4">
            <div className="flex items-center justify-between">
              <span>
                <img src="https://assets.solesense.com/site/images/logos/retailers/klekt.svg" alt="" className="w-16 mb-4 mr-4 pt-4 first-line:inline" />
              </span>
              <span className="sm:text-xl text-lg">
                {
                  (dataResponse.price) && <h2 className="sm:text-2xl">${parseInt(dataResponse.price)-7}</h2>
                }
              </span>
              <span>
                <h2 className="sm:text-2xl"><a href={`${dataResponse.URL}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-3xl text-md px-3 py-2 mr-2 mb-2 dark:bg-black dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800" target="_blank">Buy</a></h2>
              </span>            
            </div>
            <div className="text-sm">Klekt</div>
            <div className="text-xs">Last checked 5 hours ago</div>
          </div>
        </div>
      </div>
      <div id="product-info" className="md:grid md:grid-cols-3 lg:mx-16 sm:mx-8 mx-4">
        <div id="details" className="mb-12 lg:pr-14 md:pr-4 md:border-r border-black break-words">
          <div className="flex justify-center text-xl font-semibold">Product Details</div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Brand</span>
            <span>{dataResponse.BRAND}</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Silhouette</span>
            <span>{dataResponse.SILHOUETTE}</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>SKU</span>
            <span>{dataResponse.sku}</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Colorway</span>
            <span>{dataResponse.DETAILS}</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Main Color</span>
            <span>{dataResponse.COLOR}</span>
          </div>
          <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Main Material</span>
            <span>{dataResponse.MATERIAL}</span>
          </div>
          {
            (dataResponse.released) && <div className="grid grid-cols-2 border-b border-black py-3">
            <span>Release Date</span>
            <span>{dataResponse.released}</span>
          </div>
          }
        </div>
        {
          (dataResponse.description) && <div id="description" className="md:mt-0 lg:ml-14 md:ml-4 mt-8 md:col-span-2">
          <div className="flex justify-center mb-4 text-xl font-semibold">About the {dataResponse.NAME}</div>
          <div className="mb-12">{dataResponse.description}</div>
        </div>
        }
      </div>
      <Footer />
    </main>
  )
}
