import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import latestData from '../../public/latest.json'
import adultData from '../../public/adult.json'
import GoogleTranslate from '../../components/GoogleTranslate'
import Pagination from '../../components/Pagination'
import SocialSharing from '../../components/SocialSharing'
import SearchComponent from '../../components/SearchComponent'
import Head from 'next/head'
import Script from 'next/script'

const uwatchfreeSchema = JSON.stringify([
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '123MoviesGo™ - Explore. Stream. Download.',
    url: 'https://123moviesgo.vercel.app/',
    image: ['https://123moviesgo.vercel.app/favicon.ico'],
    logo: {
      '@type': 'ImageObject',
      url: 'https://123moviesgo.vercel.app/logo.png',
      width: 280,
      height: 80
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://123moviesgo.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://123moviesgo.vercel.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

const softwareSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://123moviesgo.vercel.app/adult/',
  headline: 'Watch Online Adult Content | 123MoviesGo™',
  url: 'https://123moviesgo.vercel.app/adult/',
  description:
    'Stream HD movies and TV series for free on 123MoviesGo. Explore, stream, and download full-length movies and shows in HD quality without registration.',
  image: 'https://123moviesgo.vercel.app/og_image.jpg',
  author: {
    '@type': 'Person',
    name: 'DrTrailer',
    url: 'https://gravatar.com/drtrailer2022'
  },
  publisher: {
    '@type': 'Organization',
    name: '123MoviesGo™ - Explore. Stream. Download.',
    logo: {
      '@type': 'ImageObject',
      url: 'https://123moviesgo.vercel.app/og_image.jpg'
    }
  },
  datePublished: '2024-06-02',
  dateModified: '2024-06-02',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://123moviesgo.vercel.app/adult/'
  },
  additionalProperty: {
    '@type': 'PropertyValue',
    name: 'Action Platform',
    value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
  }
})

const breadcrumbSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '123MoviesGo™ - Explore. Stream. Download.',
      item: 'https://123moviesgo.vercel.app/'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Adult',
      item: 'https://123moviesgo.vercel.app/adult/'
    }
  ]
})

// Utility function to get random items
const getRandomItems = (data, count) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const adultPage = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = // Assume there are 3 pages
    useEffect(() => {
      // Logic to fetch browsers for the current page
    }, [currentPage])

  const [latest, setLatest] = useState([])

  const fetchData = async () => {
    try {
      const [latestRes] = await Promise.all([
        fetch('https://123moviesgo.vercel.app/latest.json')
      ])

      const [latestData] = await Promise.all([latestRes.json()])

      setLatest(getRandomItems(latestData, 3))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()

    const interval = setInterval(() => {
      fetchData()
    }, 10000) // 30000 seconds interval , 10000

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <Head>
        <title> Watch Online Adult Content | 123MoviesGo™</title>
        <link rel='canonical' href='https://123moviesgo.vercel.app/adult/' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        {/* <meta property='og:type' content='video.movie' /> */}
        <meta property='og:type' content='website' />
        <meta property='og:title' content=' Watch Online Adult |   123MoviesGo™' />
        <meta name="keywords" content="watch free movies, free movies online, download movies, full movies, HD movies, movie streaming, stream TV series, watch TV Series s free" />
       
       <meta name="description" content="Stream HD movies and TV series for free on 123MoviesGo. Explore, stream, and download full-length movies and shows in HD quality without registration."/>


        <meta property='og:url' content='https://123moviesgo.vercel.app/adult' />

        <meta property='og:site_name' content=' 123MoviesGo' />
        {/* <meta property='og:type' content='article' /> */}
        <meta
          property=' og:image:alt'
          content='https://123moviesgo.vercel.app/og_image.jpg'
        />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='adult' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
    
        <meta
          property='og:image'
          content='https://123moviesgo.vercel.app/og_image.jpg'
        />
        <meta property='og:image:width' content='1280px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/webp' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:label1' content='Est. reading time' />
        <meta name='twitter:data1' content='1 minute' />
        <meta
          name='google-site-verification'
          content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
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
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr |function () { (w.webpushr.q = w.webpushr.q |[]).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BIHpgrvLvdxGSRA7cHudMTBdr7EWGon3q4reCUGbDcm5uiM2CkypC83diBbYhTMaD8pY_5G0L817DCPB3UqY2CI' });
          `
        }}
      />
      <GoogleTranslate />
      <SocialSharing />
      {/* <Script src='../../propler/ads.js' defer /> */}
      {/* <Script src='../propler/ads2.js' defer /> */}
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
        123MoviesGo™ - Adult Section.
      </h1>

      {/* <Marquee  /> */}

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
              <a href='../trailers/'>
                <h3 className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'>
                  Trailers<span className='p'></span>
                </h3>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-11610' className='menu-graphicdesign'>
              <a
                href='../movies/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Movies<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-84' className='menu-antivirus'>
              <a
                href='../tvshow/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                TV Series <span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-84' className='menu-antivirus'>
              <a
                href='../adult/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Adult<span className='p'></span>
              </a>
            </li>
          </button>
          <button className='border border-black p-2 m-1 hover:bg-orange-100'>
            <li id='menu-item-194' className='menu-tutorials'>
              <a
                href='../latest/'
                className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
              >
                Latest News<span className='p'></span>
              </a>
            </li>
          </button>
        </ul>
      </div>
      <a
        href='https://t.me/watchmovieadult/'
        target='_blank'
        rel='noopener noreferrer'
        className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl mt-2 flex items-center justify-center'
        style={{ marginTop: '25px', marginBottom: '25px' }}
      >
        <span className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-3xl hover:text-blue-800 font-bold mt-2'>
          For Request or Demand Adult Join Telegram
          <i className='fab fa-telegram text-blue-600 hover:text-gray-600 ml-2 w-12 h-12 animate-pulse '></i>
        </span>
      </a>
      <h2
        className='bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent font-bold text-3xl mt-2 flex items-center justify-center gap-2'
        style={{ marginTop: '25px' }}
      >
        Popular Adult Content to Watch Search Now
      </h2>
      <span className='px-0 bg-clip-text text-sm text-black font-bold mt-2'>
        <SearchComponent />
      </span>
      <div className='container'>
        {/* <h1  className='px-0 font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>adult Section</h1> */}
        <div className='flex-container'>
          <div className='main-content'>
            <div className='card-container'>
              {adultData.map(item => (
                <div key={item.id}>
                  {/* <div key={item.id} className='card'> */}
                  <a href={item['adult.watch']} id={item.id}>
                    <div className='relative'>
                      <Image
                        src={item.image}
                        alt={item.title}
                        className='rounded-lg'
                        width={200} // Specify the desired width
                        height={300} // Specify the desired height
                        quality={90}
                        style={{
                          width: '200px', // Ensures the image is displayed at this width
                          height: '300px', // Ensures the image is displayed at this height
                          boxShadow: '0 0 10px 0 #000',
                          filter:
                            'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                        }}
                      />
                      <h2 className='text-black text-2xl font-semibold mt-2'>
                        {item.name}
                      </h2>
                      <h2 className='text-black text-bg font-semibold mt-2'>
                        Genre: {item.genre}
                      </h2>
                      <h2 className='text-black text-bg font-semibold mt-2'>
                        Directed by: {item.directorname}
                      </h2>

                      <h2 className='text-black text-bg font-semibold mt-2'>
                        Country of origin: {item.country} Original language:{' '}
                        {item.language}
                      </h2>

                      <h3 className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                        {item.text}
                      </h3>
                      <div
                        className='animate-pulse badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{
                          boxShadow: '0 0 10px 0 #000',
                          filter:
                            'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                        }}
                      >
                        {item.lang}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
              <h3
                className=' text-black text-2xl font-semibold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                Many More Coming Soon...
              </h3>
            </div>
            {/* <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                route='adult'
                style={{
                  marginTop: '50px',
                  marginBottom: '50px',
                  borderRadius: '50px',
                  boxShadow: '0 0 10px 0 #fff',
                  filter:
                    'contrast(1.0) saturate(1.0) brightness(1.0) hue-rotate(0deg)'
                }}
              /> */}
          </div>

          <div className='sidebar'>
            <h2
              className='text-black text-2xl font-bold mt-2'
              style={{
                marginTop: '15px',
                color: '#000',
                font: 'bold',
                textShadow: '1px 2px 2px #000'
              }}
            >
              LATEST ENTERTAINMENT NEWS
            </h2>
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
                          width={1280} // Specify the desired width
                          height={720} // Specify the desired height
                          quality={90}
                          loading='lazy'
                          style={{
                            marginTop: '50px',
                            width: '1280px', // Ensures the image is displayed at this width
                            height: '350px', // Ensures the image is displayed at this height
                            boxShadow: '0 0 10px 0 #000',
                            filter:
                              'contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)'
                          }}
                        />
                        <h2 className='text-black text-lg font-semibold mt-2'>
                          {latestItem.name}
                        </h2>
                        <h3 className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                          {latestItem.text}
                        </h3>
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

export default adultPage
