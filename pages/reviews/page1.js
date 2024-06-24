import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/latest.json'
import moviesp1Data from '../../public/moviesp1.json'
import Marquee from '../../components/Marquee'
import Head from 'next/head'
import Script from 'next/script'
import Pagination from '../../components/Pagination';

const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Movies Magazine - Explore. Discover. Watch..',
    url: 'https://moviesmagazine.onrender.com/',
    image: ['https://moviesmagazine.onrender.com/favicon.ico'],
    logo: {
      '@type': 'ImageObject',
      url: 'https://moviesmagazine.onrender.com/logo.png',
      width: 280,
      height: 80
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://moviesmagazine.onrender.com/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://moviesmagazine.onrender.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://moviesmagazine.onrender.com/movies-page1/',
  headline: 'Download movies | Movies Magazine™',
  url: 'https://moviesmagazine.onrender.com/movies-page1/',
  description:
    'Movies Magazine is the top platform for exploring and downloading software,the premier platform for the latest releases and secure downloads.',
  image: 'https://moviesmagazine.onrender.com/wp-content/uploads/movies.webp',
  author: {
    '@type': 'Person',
    name: 'DrTrailer',
    url: 'https://gravatar.com/drtrailer2022'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Movies Magazine - Explore. Discover. Watch..',
    logo: {
      '@type': 'ImageObject',
      url: 'https://moviesmagazine.onrender.com/og_image.jpg'
    }
  },
  datePublished: '2024-06-02',
  dateModified: '2024-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://moviesmagazine.onrender.com/movies-page1/'
  },
  additionalProperty: {
    '@type': 'PropertyValue',
    name: 'Action Platform',
    'value': ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
  }
})

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Windows',
      item: 'https://moviesmagazine.onrender.com/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Movies',
      item: 'https://moviesmagazine.onrender.com/movies/'
    },
     {
      '@type': 'ListItem',
      position: 3,
      name: 'Movies Page 1',
      item: 'https://moviesmagazine.onrender.com/movies-page1/'
    }
  ]
})
const moviesp1 = ({ items }) => {
  const [latest, setLatest] = useState(latestData)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 0 // Assume there are 3 pages


  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <Head>
        <title> Download Movies | Movies Magazine™</title>
        <link rel='canonical' href='https://moviesmagazine.onrender.com/movies-page1/' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property="og:type" content="video.other" />
        <meta property='og:title' content=' Download Movies | Movies Magazine' />
        <meta
          property='og:description'
          content='Movies Magazine is the top platform for exploring and downloading software,the premier platform for the latest releases and secure downloads.'
        />

        <meta
          property='og:url'
          content='https://moviesmagazine.onrender.com/movies-page1'
        />

        <meta
          name='keywords'
          content='download, software, freeware, shareware, trial versions, program, utilities, security, network, multimedia, movies, movies, movies, graphic design, file sharing, movies, movies, movies, browser'
        />
        <meta property='og:site_name' content='Movies Magazine' />
        <meta property='og:type' content='article' />
        <meta
          property=' og:image:alt'
          content='https://moviesmagazine.onrender.com/wp-content/uploads/movies.webp'
        />
        <meta name='movies-web-app-capable' content='yes' />
        <meta property='article:section' content='Movies' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta
          name='keywords'
          content='download, software, freeware, shareware, trial versions, program, utilities'
        />
        <meta
          property='og:image'
          content='https://moviesmagazine.onrender.com/wp-content/uploads/movies.webp'
        />
        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='29ovWU8qJ15jdW0kAcuES-LaJKM1Dsk3neAuZEBz5gs'
        />
        <meta
          name='facebook-domain-verification'
          content='du918bycikmo1jw78wcl9ih6ziphd7'
        />
        <meta
          name='dailymotion-domain-verification'
          content='dmv6sg06w9r5eji88'
        />

        {/* <script src='https://www.youtube.com/iframe_api' /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: softwareSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
          integrity='sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        {/* Webpushr tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': ''BNg0bEcTYIGpkB8PxFaYCZPLChz2m-TV2OIusYmW5TNE_cPdi2qSKLueUYe9NlkG2q6ZgvwZKzcvSYKVYZanPVY'' });
          `
          }}
        />
      </Head>
      <Script src='../../propler/ads.js' defer />
      <Script src='../../propler/ads2.js' defer />

      {/* <div className='container'> */}
      <h1
        className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Movies Magazine Movies Section.
      </h1>
      <Marquee />
      {/* <p
        className='px-0 text-black font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 mt-2'
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px',
          fontSize: '35px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '15px'
        }}
      >
        Select Categories.{' '}
      </p> */}
      <div
        className='shadow-lg flex items-center justify-center'
        role='navigation'
      >
        <ul
          id='menu-header-menu'
          className='menu flex flex-wrap justify-center'
        >
           <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Home<span className='p'></span>
                </a>
              </li>
            </button>

            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-284913' className='menu-softwarecategories'>
                <a href='../browsers/'>
                  <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                    Browser<span className='p'></span>
                  </h3>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-248' className='menu-operating-systems'>
                <a
                  href='../desktop/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Desktop<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11605' className='menu-3dcad'>
                <a
                  href='../multimedia/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Multimedia<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11610' className='menu-graphicdesign'>
                <a
                  href='../graphic-design/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Graphic Design<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-196' className='menu-multimedia'>
                <a
                  href='../network/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Network<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-161' className='menu-development'>
                <a
                  href='../development/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Development<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../file-sharing/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  File Sharing<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-84' className='menu-antivirus'>
                <a
                  href='../security/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Security<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-security'>
                <a
                  href='../games/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Games<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='../education'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Education<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-35' className='menu-home active'>
                <a
                  href='../mobile'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Mobile<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-security'>
                <a
                  href='../utilities/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Utilities<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../movies/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../latest/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Blog Post<span className='p'></span>
                </a>
              </li>
            </button>
        </ul>
      </div>
      {/* </div> */}
    
      <div className='container'>
        {/* <h1  className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>moviesp1 Section</h1> */}
        <div className='flex-container'>
          <div className='main-content'>
            <div className='card-container'>
              {moviesp1Data.map(item => (
                <div key={item.id}>
                  {/* <div key={item.id} className='card'> */}
                  <Link href={`/movies-page1/${item.id}`}>
                    <div className='relative'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        loading='lazy'
                        className='rounded-lg'
                        width={140} // Specify the desired width
                        height={140} // Specify the desired height
                        quality={90}
                        style={{
                          width: '200px', // Ensures the image is displayed at this width
                          height: '300px', // Ensures the image is displayed at this height
                          filter:
                            'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                        }}
                      />
                      <p className='text-black text-2xl font-semibold mt-2'>
                        {item.name}
                      </p>
                      <p className='text-black text-bg font-semibold mt-2'>
                        License: {item.license}, Version: {item.version}
                      </p>
                      <p className='text-black text-bg font-semibold mt-2'>
                        Developers: {item.developers}
                      </p>

                      <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                        {item.text}
                      </div>
                      <div className='animate-pulse badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                        {item.badge}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              <p
                className=' text-black text-2xl font-semibold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                Many More Coming Soon...
              </p>
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} route="movies" />
          </div>
        
          <div className='sidebar'>
            <p
              className='text-black text-2xl font-bold mt-2'
              style={{
                marginTop: '15px',
                color: '#000',
                font: 'bold',
                textShadow: '1px 2px 2px #000'
              }}
            >
              LATEST SOFTWARE NEWS
            </p>
            <div className='categorylatest-container'>
              <div className='cardlatest-container'>
                {latest.map(latestItem => (
                  <div key={latestItem.id} className='cardlatest'>
                    <a href={`/latest/${latestItem.id}`}>
                      <div className='relative'>
                        <Image
                          src={latestItem.image}
                          alt={latestItem.title}
                          className='rounded-lg mx-auto'
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '300px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.3) saturate(1.4) brightness(1.2) hue-rotate(10deg)'
                          }}
                        />
                        <p className='text-black text-lg font-semibold mt-2'>
                          {latestItem.name}
                        </p>
                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                          {latestItem.text}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Global styles */
          body {
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .section-title {
            color: #000;
            font-weight: bold;
            font-size: 30px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          .flex-container {
            display: flex;
            justify-content: space-between;
          }

          .main-content {
            flex: 3; /* 60% of the width */
          }

          .sidebar {
            flex: 2; /* 40% of the width */
            padding: 10px;
            border-radius: 8px;
            margin-top: 1px;
          }

          .card-container,
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card,
          .cardlatest {
            width: 100%;
            max-width: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }

          .relative {
            position: relative;
          }

          .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.4);
            color: #000;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
          }

          .card img {
            width: 100%;
            height: auto;
            object-fit: cover;
            border-radius: 8px;
          }

          .text-center {
            text-align: center;
          }

          h1 {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 30px;
            line-height: 1;
            height: 30px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }

            .main-content,
            .sidebar {
              width: 100%;
            }

            .sidebar {
              margin-top: 20px;
            }
          }
        `}</style>


      </div>
    </div>
  )
}

export async function getStaticProps () {
  try {
    const res = await fetch('https://moviesmagazine.onrender.com/moviesp1.json')
    const data = await res.json()

    return {
      props: {
        items: data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: {
        items: []
      }
    }
  }
}

export default moviesp1
