import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#000]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" className="flex items-center justify-center text-gray-900">
              <img src="/logo.png" alt="Logo" width={500} height={150} className="rounded-3xl" />
            </a>
            <p className="text-white mt-2 text-center text-lg" style={{ marginTop: '10px', textShadow: '5px 5px 5px #2b2' }}>
              Explore. Discover. Connect.
            </p>
            
            <div className="flex justify-center mt-4">
            <a href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">
              Youtube Magazine™
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="https://youtubemagazine.vercel.app/" className="text-gray-600 text-xl font-bold hover:text-blue-800">Travel</a>
                </li>
                <li>
                  <a href="https://youtubemagazine.vercel.app/" className="text-gray-600 text-xl font-bold hover:text-blue-800">Tech</a>
                </li>
                <li>
                  <a href="https://youtubemagazine.vercel.app/" className="text-gray-600 text-xl font-bold hover:text-blue-800">Market</a>
                </li>
                <li>
                  <a href="https://youtubemagazine.vercel.app/" className="text-gray-600 text-xl font-bold hover:text-blue-800">Sports</a>
                </li>
                <li>
                  <a href="https://youtubemagazine.vercel.app/" className="text-gray-600 text-xl font-bold hover:text-blue-800">Entertainment</a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-blue-600 tracking-widest text-sm mb-3 font-bold md:text-sm">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/intro/contact" className="text-gray-600 text-xl font-bold hover:text-blue-800">Contact</a>
                </li>
                <li>
                  <a href="/intro/privacy" className="text-gray-600 text-xl font-bold hover:text-blue-800">Privacy Policy</a>
                </li>
                <li>
                  <a href="/intro/terms" className="text-gray-600 text-xl font-bold hover:text-blue-800">Terms of Use</a>
                </li>
                {/* <li>
                  <a href="/intro/dmca" className="text-gray-600 text-xl font-bold hover:text-blue-800">D.M.C.A</a>
                </li> */}
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Youtube Magazine™ —{' '}
              <a href="https://twitter.com/MxplayerMovies" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                Explore. Discover. Connect. All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
