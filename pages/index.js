import { useState, useEffect } from 'react'
// import securityData from '../public/security.json'
import latestData from '../public/latest.json'
import reviewsData from '../public/reviews.json'
import trailerData from '../public/trailer.json'
// import graphicdesignData from '../public/graphicdesign.json'
import recapsData from '../public/recaps.json'
// import Marquee from '../components/Marquee';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



// Function to shuffle an array and return the first few items
function getRandomItems (array, numberOfItems) {
  return array.sort(() => Math.random() - 0.5).slice(0, numberOfItems)
}

const HomePage = () => {
  const [latest, setlatest] = useState(latestData)

  // const [security, setsecurity] = useState(securityData.slice(0, 2)) // Only the first 2 items
  // const [browser, setbrowser] = useState(browserData.slice(0, 2)) // Only the first 2 items

  // Initial state with a consistent set of data
  // const [security, setsecurity] = useState(securityData.slice(0, 2))
  const [reviews, setreviews] = useState(reviewsData.slice(0, 4))
  const [trailer, settrailer] = useState(trailerData.slice(0, 4))
  // const [graphicdesign, setgraphicdesign] = useState(
  //   graphicdesignData.slice(0, 2))
    const [recaps, setrecaps] = useState(recapsData.slice(0, 4))

  // // Update the state with random items after the component mounts
  useEffect(() => {
  //   const shuffledsecurityData = getRandomItems(securityData, 2)
    const shuffledreviewsData = getRandomItems(reviewsData, 4)
    const shuffledtrailerData = getRandomItems(trailerData, 4)
  //   const shuffledgraphicdesignData = getRandomItems(graphicdesignData, 2)
    const shuffledrecapsData = getRandomItems(recapsData, 4)

  //   setsecurity(shuffledsecurityData)
    setreviews(shuffledreviewsData)
    settrailer(shuffledtrailerData)
  //   setgraphicdesign(shuffledgraphicdesignData)
    setrecaps(shuffledrecapsData)
  }, [])

  const pageTitle = 'Movies Magazine. - Explore. Discover. Watch.'

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Movies Magazine. - Explore. Discover. Watch.',
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

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
        name: 'Dr Trailer',
        url: 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://moviesmagazine.onrender.com/#organization',
        name: 'Movies Magazine - Explore. Discover. Watch.',
        url: 'https://moviesmagazine.onrender.com/'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moviesmagazine.onrender.com/#website',
        url: 'https://moviesmagazine.onrender.com/',
        name: 'Movies Magazine - Explore. Discover. Watch.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://moviesmagazine.onrender.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://moviesmagazine.onrender.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://moviesmagazine.onrender.com/#webpage',
        url: 'https://moviesmagazine.onrender.com/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
          name: 'Dr Trailer',
          url: 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://moviesmagazine.onrender.com/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://moviesmagazine.onrender.com/',
            url: 'https://moviesmagazine.onrender.com/',
            headline: 'Movies Magazine - Explore. Discover. Watch.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/moviesmagazine./',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://moviesmagazine.onrender.com/#organization',
              name: 'Movies Magazine - Explore. Discover. Watch.',
              url: 'https://moviesmagazine.onrender.com/'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://moviesmagazine.onrender.com/',
            url: 'https://moviesmagazine.onrender.com/',
            headline: 'Movies Magazine. - Explore. Discover. Watch.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://moviesmagazine.onrender.com/#organization',
              name: 'Movies Magazine.™ - Explore. Discover. Watch.',
              url: 'https://moviesmagazine.onrender.com/'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://moviesmagazine.onrender.com/',
            url: 'https://moviesmagazine.onrender.com/',
            headline: 'Movies Magazine.™ - Explore. Discover. Watch.',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/moviesmagazine/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://moviesmagazine.onrender.com/#organization',
              name: 'Movies Magazine. - Explore. Discover. Watch.',
              url: 'https://moviesmagazine.onrender.com/'
            }
          }
        ]
      }
    ]
  })

  return (
    <div className='w-full' style={{ backgroundColor: '#D3D3D3' }}>
      <div className='container'>
        <Head>
          <title>{pageTitle}</title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://moviesmagazine.onrender.com/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link rel='icon' type='image/x-icon' href='/favicon.ico' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='movie review sites,movie magazine,movie magazines uk,movie magazines us,movie magazines in,the film magazine,thefilmmagazine,movie news websites,film reviews,film reviews uk,film reviews us,film reviews in,film magazine online'
          />
          {/* <meta
            name='description'
            content='Explore. Discover. Watch.'
          /> */}
          {/* <link rel='canonical' href='https://moviesmagazine.onrender.com/' /> */}
          <meta property='og:locale' content='en_US' />
          <meta property="og:type" content="video.other" />
          <meta
            property='og:title'
            content='Movies Magazine.™ - Explore. Discover. Watch.'
          />
          <meta
            property='og:description'
            content='Explore the world of cinema with Movies Magazine: Captivating reviews, top picks, and the latest news.'
          />
          <meta property='og:url' content='https://moviesmagazine.onrender.com/' />
          <meta
            property='og:site_name'
            content='Movies Magazine.™ - Explore. Discover. Watch.'
          />
          <meta
            property='og:image'
            content='https://moviesmagazine.onrender.com/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpeg' />
          <meta
            name='application-name'
            content='Movies Magazine™ - Explore. Discover. Watch.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://moviesmagazine.onrender.com/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='trustpilot-one-time-domain-verification-id'
            content='48b41bc7-60cf-4de8-9c3b-6a55be476696'
          />
          <meta
            name='google-adsense-account'
            content='ca-pub-5527677677744511'
          />
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
            content='dmdzuqt3p027t2adn'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
          />
          <script
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

            webpushr('setup', { 'key': ''BNg0bEcTYIGpkB8PxFaYCZPLChz2m-TV2OIusYmW5TNE_cPdi2qSKLueUYe9NlkG2q6ZgvwZKzcvSYKVYZanPVY'' });
          `
            }}
          />
        </Head>

        <h1
          className='text-black bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6  shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
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
          Welcome to Movies Magazine.
        </h1>
        <p
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl hover:text-blue-800 font-bold mt-2'
          style={{
            marginTop: '15px'
          }}
        >
          {' '}
          Explore. Discover. Watch.{' '}
        </p>

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
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../trailer/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies Trailers<span className='p'></span>
                </a>
              </li>
            </button>
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../reviews/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies Reviews<span className='p'></span>
                </a>
              </li>
            </button>
           
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-11606' className='menu-security'>
                <a
                  href='../recaps/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies Recaps<span className='p'></span>
                </a>
              </li>
            </button> 
            <button className='border border-black p-2 m-1 hover:bg-orange-100'>
              <li id='menu-item-194' className='menu-tutorials'>
                <a
                  href='../latest/'
                  className='text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl'
                >
                  Movies Post<span className='p'></span>
                </a>
              </li>
            </button>
          </ul>
        </div>

        {/* <h3
          className='px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  font-bold hover:text-blue-800 text-3xl  mt-2'
          style={{
            marginTop: '15px'
          }}
        >
          Most Latest & Popular Software{' '}
        </h3> */}
        <div className='container'>
          <div className='flex-container'>
            <div className='category-container'>
              <div className='card-container'>
              {trailer.map(trailerItem => (
                  <div key={trailerItem.id} className='card'>
                    <a href={`/trailer/${trailerItem.id}`}>
                      <p
                        className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{ marginBottom: '20px' }}
                      >
                        {trailerItem.name}
                      </p>
                      <div className='relative'>
                        <Image
                          src={trailerItem.image}
                          alt={trailerItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                          }}
                        />

                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {trailerItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {trailerItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p
                  className=' animate-pulse text-black text-2xl font-semibold mt-2'
                  style={{
                    marginTop: '15px',
                    color: '#000',
                    font: 'bold',
                    textShadow: '1px 2px 2px #000 '
                  }}
                >
                  Many More Coming Soon...
                </p>
             {recaps.map(recapsItem => (
                  <div key={recapsItem.id} className='card'>
                    <a href={`/recaps/${recapsItem.id}`}>
                      <p
                        className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{ marginBottom: '20px' }}
                      >
                        {recapsItem.name}
                      </p>
                      <div className='relative'>
                        <Image
                          src={recapsItem.image}
                          alt={recapsItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                          }}
                        />

                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {recapsItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {recapsItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p
                  className=' animate-pulse text-black text-2xl font-semibold mt-2'
                  style={{
                    marginTop: '15px',
                    color: '#000',
                    font: 'bold',
                    textShadow: '1px 2px 2px #000 '
                  }}
                >
                  Many More Coming Soon...
                </p> 
                {reviews.map(reviewsItem => (
                  <div key={reviewsItem.id} className='card'>
                    <a href={`/reviews/${reviewsItem.id}`}>
                      <p
                        className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{ marginBottom: '20px' }}
                      >
                        {reviewsItem.name}
                      </p>
                      <div className='relative'>
                        <Image
                          src={reviewsItem.image}
                          alt={reviewsItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                          }}
                        />

                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {reviewsItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {reviewsItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p
                  className=' animate-pulse text-black text-2xl font-semibold mt-2'
                  style={{
                    marginTop: '15px',
                    color: '#000',
                    font: 'bold',
                    textShadow: '1px 2px 2px #000 '
                  }}
                >
                  Many More Coming Soon...
                </p>

                
                {/* {graphicdesign.map(graphicdesignItem => (
                  <div key={graphicdesignItem.id} className='card'>
                    <a href={`/graphic-design/${graphicdesignItem.id}`}>
                      <p
                        className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{ marginBottom: '20px' }}
                      >
                        {graphicdesignItem.name}
                      </p>
                      <div className='relative'>
                        <Image
                          src={graphicdesignItem.image}
                          alt={graphicdesignItem.title}
                          className='rounded-lg '
                          width={140} // Specify the desired width
                          height={140} // Specify the desired height
                          quality={90}
                          style={{
                            width: '200px', // Ensures the image is displayed at this width
                            height: '300px', // Ensures the image is displayed at this height
                            filter:
                              'contrast(1.2) saturate(1.5) brightness(1.0) hue-rotate(-15deg)'
                          }}
                        />

                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {graphicdesignItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {graphicdesignItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p
                  className=' animate-pulse text-black text-2xl font-semibold mt-2'
                  style={{
                    marginTop: '15px',
                    color: '#000',
                    font: 'bold',
                    textShadow: '1px 2px 2px #000 '
                  }}
                >
                  Many More Coming Soon...
                </p>
                {security.map(securityItem => (
                  <div key={securityItem.id} className='card'>
                    <a href={`/security/${securityItem.id}`}>
                      <p
                        className='text-black text-xl bg-gradient-to-r from-amber-500 to-pink-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'
                        style={{ marginBottom: '20px' }}
                      >
                        {securityItem.name}
                      </p>
                      <div className='relative'>
                        <Image
                          src={securityItem.image}
                          alt={securityItem.title}
                          className='rounded-lg '
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

                        <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2'>
                          {securityItem.text}
                        </div>
                        <div className='badge bg-gradient-to-r from-pink-500 to-amber-500 font-bold py-3 px-6 rounded-lg shadow-lg hover:from-amber-600 hover:to-pink-600 transition duration-300'>
                          {securityItem.badge}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
                <p
                  className=' animate-pulse text-black text-2xl font-semibold mt-2'
                  style={{
                    marginTop: '15px',
                    color: '#000',
                    font: 'bold',
                    textShadow: '1px 2px 2px #000 '
                  }}
                >
                  Many More Coming Soon...
                </p> */}
              </div>
            </div>
            <div className='sidebar'>
              <p
                className='text-black text-2xl font-bold mt-2'
                style={{
                  marginTop: '15px',
                  color: '#000',
                  font: 'bold',
                  textShadow: '1px 2px 2px #000 '
                }}
              >
                LATEST MOVIES NEWS{' '}
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
                                'contrast(1.1) saturate(1.2) brightness(1.2) hue-rotate(5deg)'
                            }}
                          />
                          <p className='text-black text-lg font-semibold mt-2'>
                            {latestItem.name}
                          </p>
                          <div className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-sm font-semibold mt-2'>
                            {latestItem.text}
                          </div>
                          {/* <div className='badge'>{latestItem.badge}</div> */}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
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
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .category-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(50% - 10px); /* Adjust width to leave space between */
          }
          .categorylatest-container {
            flex-grow: 1; /* Take remaining space */
            margin-top: 40px;
            width: calc(100% - 0px); /* Adjust width to leave space between */
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
          .cardlatest-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
          }
          .cardlatest {
            width: 100%; /* Card width will automatically adapt */
            max-width: 100%; /* Limit max width for larger screens */
            // border: 1px solid #ccc;
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

          // h1 {
          //   // color: #fff;
          //   font-weight: bold;
          //   // text-shadow: 3px 5px 5px #000;
          //   margin-bottom: 10px;
          //   font-size: 30px; /* Corrected property */
          //   line-height: 1; /* Optional: Adjust line height if needed */
          //   height: 30px; /* Set the desired height */
          // }

          .sidebar {
            width: calc(40% - 10px); /* Adjust width to leave space between */
            padding: 20px;
            // border: 1px solid #ccc;
            border-radius: 8px;
            margin-top: 40px;
          }

          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column; /* Stack items vertically on smaller screens */
            }

            .category-container,
            .sidebar {
              width: 100%; /* Make both full width on smaller screens */
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

export default HomePage
