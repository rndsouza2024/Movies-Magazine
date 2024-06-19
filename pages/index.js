import { useState } from 'react'
import ytmagData from '../public/ytmag.json'
import Head from 'next/head'
import Image from 'next/image'

const HomePage = () => {
  const [ytmag, setytmag] = useState(ytmagData)

  const pageTitle =
    'Youtube Magazine - Explore. Discover. Connect.'

    const uwatchfreeSchema = JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Youtube Magazine',
        url: 'https://youtubemagazine.vercel.app/',
        image: [
          'https://youtubemagazine.vercel.app/wp-content/uploads/2023/05/favicon.ico'
        ],
        logo: {
          '@type': 'ImageObject',
          url: 'https://youtubemagazine.vercel.app/logo.png',
          width: 280,
          height: 80
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: 'https://youtubemagazine.vercel.app/',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://youtubemagazine.vercel.app/search?q={search_term_string}'
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
        '@id': 'https://youtubemagazine.vercel.app/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://youtubemagazine.vercel.app/author/ytmag/',
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
        '@id': 'https://youtubemagazine.vercel.app/#organization',
        name: 'Youtube Magazine - Explore. Discover. Connect.',
        url: 'https://youtubemagazine.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://youtubemagazine.vercel.app/#website',
        url: 'https://youtubemagazine.vercel.app',
        name: 'Youtube Magazine - Explore. Discover. Connect.',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://youtubemagazine.vercel.app/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://youtubemagazine.vercel.app/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://youtubemagazine.vercel.app/#webpage',
        url: 'https://youtubemagazine.vercel.app/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://youtubemagazine.vercel.app/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://youtubemagazine.vercel.app/author/ytmag/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://youtubemagazine.vercel.app/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://youtubemagazine.vercel.app/',
            url: 'https://youtubemagazine.vercel.app/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://youtubemagazine.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://youtubemagazine.vercel.app/author/ytmag/',
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
              '@id': 'https://youtubemagazine.vercel.app/#organization',
              name: 'Youtube Magazine - Explore. Discover. Connect.',
              url: 'https://youtubemagazine.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://youtubemagazine.vercel.app/',
            url: 'https://youtubemagazine.vercel.app/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://youtubemagazine.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://youtubemagazine.vercel.app/author/ytmag/',
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
              '@id': 'https://youtubemagazine.vercel.app/#organization',
              name: 'Youtube Magazine - Explore. Discover. Connect.',
              url: 'https://youtubemagazine.vercel.app'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://youtubemagazine.vercel.app/',
            url: 'https://youtubemagazine.vercel.app/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://youtubemagazine.vercel.app/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://youtubemagazine.vercel.app/author/ytmag/',
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
              '@id': 'https://youtubemagazine.vercel.app/#organization',
              name: 'Youtube Magazine - Explore. Discover. Connect.',
              url: 'https://youtubemagazine.vercel.app'
            }
          }
        ]
      }
    ]
  })

  return (
    <div className='w-full' style={{ backgroundColor: '#808080' }}>
      <div className='container'>
        <Head>
          <title>{pageTitle}</title>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://youtubemagazine.vercel.app/sitemap.xml'
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
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators,  and explore captivating content on Youtube Magazine.Unlock new favorites today!'
          />
          <link rel='canonical' href='https://youtubemagazine.vercel.app/' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Youtube Magazine - Explore. Discover. Connect.'
          />
          <meta
            property='og:description'
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators,  and explore captivating content on Youtube Magazine.Unlock new favorites today!'
          />
          <meta
            property='og:url'
            content='https://youtubemagazine.vercel.app/'
          />
          <meta
            property='og:site_name'
            content='Youtube Magazine - Explore. Discover. Connect.'
          />
          <meta
            property='og:image'
            content='https://youtubemagazine.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='Youtube Magazine - Explore. Discover. Connect.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://youtubemagazine.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name="google-adsense-account" content="ca-pub-5527677677744511" />
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
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: uwatchfreeSchema }}
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
        <h1>Welcome to Youtube Magazine</h1>
        <h2>Explore. Discover. Connect. </h2>
        <h3
          className=' text-center  font-bold text-lg items-center justify-center'
          style={{
            color: '#40D7BC',
            marginTop: '10px',
            textShadow: '5px 5px 2px #000'
          }}
        >
          Welcome to Youtube Magazine For Unlisted Videos - where hidden gems
          shine! Explore a curated collection of exclusive unlisted videos from
          talented creators around the globe. Discover captivating content
          that's off the beaten path and connect with a community passionate
          about unique, under-the-radar videos. Do you have an incredible
          unlisted video waiting to be seen? Share your masterpiece with us!
          Youtube Magazine invites creators to submit their unlisted videos for
          a chance to be featured and reach a wider audience. Showcase your
          creativity and connect with viewers who appreciate authentic and
          innovative content. Our business model revolves around promoting
          channel subscriptions, giving creators the opportunity to gain
          visibility and build a dedicated following. By subscribing to YouTube
          Magazine™, viewers unlock access to a world of unlisted videos,
          providing a platform for creators to thrive and share their stories.
          Join us on this exciting journey of exploration and discovery. Submit
          your unlisted videos today and become part of a community that
          celebrates creativity, diversity, and the power of hidden treasures
          waiting to be uncovered. Connect with Youtube Magazine For Unlisted
          Videos - where every video tells a unique story, and every viewer
          becomes part of the discovery. Together, let's explore the untold
          narratives and connect with creators who redefine what it means to
          share content on YouTube. Check [Contact page] for your Unlisted
          YouTube video to be part of this website and get Subcribers.
        </h3>

        <h3
          className='text-center font-bold text-3xl mt-8'
          style={{
            color: '#40D7BC',
            marginTop: '30px',
            fontSize: '30px',
            textShadow: '5px 5px 2px #000'
          }}
        >
          Y.T Mag Best Listed & UnListed Videos.
        </h3>

        <div className='category-container'>
          <div className='card-container'>
            {ytmag.map(ytmagItem => (
              <div key={ytmagItem.id} className='card'>
                <a href={`/ytmag/${ytmagItem.id}`}>
                  <div className='relative'>
                    <Image
                      src={ytmagItem.image}
                      alt={ytmagItem.title}
                      width={1280}
                      height={720}
                      objectFit='cover'
                      loading='lazy'
                      className='rounded-lg'
                    />

                    <div className='badge'>{ytmagItem.badge}</div>
                  </div>

                  <h2 className='text-white text-lg font-semibold mt-2'>
                    {ytmagItem.name}
                  </h2>
                </a>
              </div>
            ))}
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
            color: #40d7bc;
            font-weight: bold;
            font-size: 30px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          .category-container {
            margin-top: 40px;
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .card {
            width: 100%; /* Card width will automatically adapt */
            max-width: 500px; /* Limit max width for larger screens */
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
            color: #40d7bc;
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
            color: #40d7bc;
            font-weight: bold;
            font-size: 35px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 10px;
          }

          h2 {
            color: #40d7bc;
            font-weight: bold;
            font-size: 20px;
            text-shadow: 3px 5px 5px #000;
            margin-bottom: 20px;
          }

          @media (max-width: 768px) {
            .content-container {
              padding: 10px;
            }
            .video {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

export default HomePage
