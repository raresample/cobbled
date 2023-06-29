import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <nav className="bottom-0 left-0 right-0 bg-black z-10 lg:p-16 sm:p-8 p-4">
      <div id="social-links-top" className="flex justify-center mb-4 pb-2 fa-inverse fa-2x border-b lg:hidden">
        <div>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
        <div className="mx-4">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
      <div id="links" className="mx-auto  grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-4 sm:gap-8">
        <div id="quick-links" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">QUICK LINKS</div>
          <div>
            <Link href="/" className="text-white">Everything</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Shoes</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Clothing</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Accessories</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Brands</Link>
          </div>
        </div>
        <div id="top-brands" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">TOP BRANDS</div>
          <div>
            <Link href="/" className="text-white">Nike</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Jordan</Link>
          </div>
          <div>
            <Link href="/" className="text-white">adidas</Link>
          </div>
          <div>
            <Link href="/" className="text-white">New Balance</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Balenciaga</Link>
          </div>
        </div>
        <div id="new-releases" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">NEW RELEASES</div>
          <div>
            <Link href="/" className="text-white">Nike</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Jordan</Link>
          </div>
          <div>
            <Link href="/" className="text-white">adidas</Link>
          </div>
          <div>
            <Link href="/" className="text-white">New Balance</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Balenciaga</Link>
          </div>
        </div>
        <div id="departments" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">DEPARMENTS</div>
          <div>
            <Link href="/" className="text-white">Men</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Women</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Boys</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Girls</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Baby & Todder</Link>
          </div>
        </div>
        <div id="popular-models" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">MODELS</div>
          <div>
            <Link href="/" className="text-white">Air Jordan 1</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Air Jordan 4</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Nike Dunk</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Nike Air Force 1</Link>
          </div>
          <div>
            <Link href="/" className="text-white">New Balance 550</Link>
          </div>
        </div>
        <div id="sale" className="mb-4">
          <div className="text-orange-200 font-bold mb-1">SALE</div>
          <div>
            <Link href="/" className="text-white">Nike</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Jordan</Link>
          </div>
          <div>
            <Link href="/" className="text-white">adidas</Link>
          </div>
          <div>
            <Link href="/" className="text-white">New Balance</Link>
          </div>
          <div>
            <Link href="/" className="text-white">Clothing</Link>
          </div>
        </div>
      </div>
      <div className="md:my-2 my-8 lg:grid lg:grid-cols-2 border-t">
        <div id="social-links-bottom" className="hidden lg:flex justify-left py-2 fa-inverse fa-2x">
          <div>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="mx-4">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
        <div id="company-links" className="flex md:flex-row lg:justify-end md:justify-center flex-col items-center lg:pt-0 pt-4 text-sm">
          <p className="text-white font-bold"><Link href="https://github.com/raresample/cobbled" target="_blank">Aaron Hope &copy;2023</Link></p>
          <Link href="/" className="text-gray-200 md:mx-4">Terms & Conditions</Link>
          <Link href="/" className="text-gray-200">Privacy Policy</Link>
        </div>
      </div>
    </nav>
  );
}
