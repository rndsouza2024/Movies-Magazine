import React from 'react'
import Head from 'next/head'
import Script from 'next/script';


const contact = () => {

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://moviesmagazine.onrender.com/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://moviesmagazine.onrender.com/author/ytmag/',
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
        name: 'Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
        url: 'https://moviesmagazine.onrender.com'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moviesmagazine.onrender.com/#website',
        url: 'https://moviesmagazine.onrender.com',
        name: 'Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
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
          '@id': 'https://moviesmagazine.onrender.com/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://moviesmagazine.onrender.com/author/ytmag/',
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
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/ytmag/',
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
              name: 'Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
              url: 'https://moviesmagazine.onrender.com'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://moviesmagazine.onrender.com/',
            url: 'https://moviesmagazine.onrender.com/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/ytmag/',
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
              name: 'Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
              url: 'https://moviesmagazine.onrender.com'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://moviesmagazine.onrender.com/',
            url: 'https://moviesmagazine.onrender.com/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://moviesmagazine.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://moviesmagazine.onrender.com/author/ytmag/',
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
              name: 'Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
              url: 'https://moviesmagazine.onrender.com'
            }
          }
        ]
      }
    ]
  })

  return (
    <div>
        <Head>
        <title>Movies Magazine™  | Contact Us</title>
      
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
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
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
            content='youtube, unlisted videos, youtube videos, viral videos, videos, youtubeshorts, youtube shorts'
          />
          <meta
            name='description'
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators, and explore captivating content.'
          />
          <link rel='canonical' href='https://moviesmagazine.onrender.com/intro/contact' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
          />
          <meta
            property='og:description'
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators, and explore captivating content.'
          />
          <meta property='og:url' content='https://moviesmagazine.onrender.com/intro/contact/' />
          <meta
            property='og:site_name'
            content='Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
          />
          <meta
            property='og:image'
            content='https://moviesmagazine.onrender.com/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='Movies Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
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
            name='google-site-verification'
            content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
          />
          <meta
            name='facebook-domain-verification'
            content='du918bycikmo1jw78wcl9ih6ziphd7'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dm0zffs8dj8pcb3gd'
          />
          <meta name='monetag' content='d37258c385441961edc42bec3fb9b7e8' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
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

            webpushr('setup', { 'key': 'BBQBh9BNi-dtzrb7ayxfk3Kuh11sEA0hiPlNpdyHX0pueAdWd4lxPInWWXC3bcc5EsZTx8jDnZeDiJCRKkA91Lo' });
          `
          }}
        />
        </Head>
<Script src="../../propler/ads.js" defer />
  
<div className="container my-24 px-6 mx-auto">

  <section className="mb-32 text-gray-800">
    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h1 className="text-3xl font-bold mb-6">Submit Your Youtube Unlisted Video</h1>
        <p className="text-gray-500 mb-6">
          Share your unlisted video with us for a chance to be featured on Movies Magazine™ For Unlisted Videos.
        </p>
        <p className="text-gray-500 mb-6">
          Fill out the form below to submit your video. We'll review your submission and get back to you soon!
        </p>
          {/* <p className="text-gray-500 mb-6">
            This the format Fill out and email it We'll review your submission and get back to you soon!
          </p> */}
        <p className="text-gray-500 mb-6">
          To submit your video, please email the following details to <strong>ytmagpublisher@outlook.com</strong>:
        </p>
        <ul className="list-disc list-inside text-gray-500 mb-6">
          <li>Your YouTube Channel ID</li>
          <li>Link to Your Unlisted Video</li>
          <li>Link to Thumbnail Image</li>
          <li>Additional information about your video (optional)</li>
        </ul>
        <p className="text-gray-500 mb-6">
          We will review your submission and get back to you regarding the inclusion of your video on our website.
        </p>
      </div>
      <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <form>
          <div className="form-group mb-6">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="channelId"
              placeholder="Your YouTube Channel ID"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="url"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="videoLink"
              placeholder="Link to Your Unlisted Video"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="url"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="thumbnailLink"
              placeholder="Link to Thumbnail Image"
              required
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="additionalInfo"
              rows="3"
              placeholder="Tell us more about your video (optional)"
            ></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            {/* <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="sendCopy"
            /> */}
           
            <label className="form-check-label inline-block text-gray-800" for="sendCopy">
            Send me a copy of this message is a Sample Format for your Email 
            </label>
          </div>
        
        </form>
      </div>
    </div>
  </section>

</div>


</div>
      
   
  )
}

export default contact;