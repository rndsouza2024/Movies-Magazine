import React from 'react'
import Head from 'next/head'
import Script from 'next/script';


const Privacy = () => {


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
        name: 'Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
        url: 'https://youtubemagazine.vercel.app'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://youtubemagazine.vercel.app/#website',
        url: 'https://youtubemagazine.vercel.app',
        name: 'Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
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
              name: 'Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
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
              name: 'Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
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
              name: 'Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.™',
              url: 'https://youtubemagazine.vercel.app'
            }
          }
        ]
      }
    ]
  })
  
  return (
    <div>
       <Head>
        <title>Youtube Magazine™ | Privacy Policy</title>
      
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
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators, and explore captivating content.'
          />
          <link rel='canonical' href='https://youtubemagazine.vercel.app/intro/privacy' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
          />
          <meta
            property='og:description'
            content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators, and explore captivating content.'
          />
          <meta property='og:url' content='https://youtubemagazine.vercel.app/intro/privacy/' />
          <meta
            property='og:site_name'
            content='Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
          />
          <meta
            property='og:image'
            content='https://youtubemagazine.vercel.app/og_image.jpg'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='Youtube Magazine™ - For Unlisted Videos. Explore. Discover. Connect.'
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
    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full  px-3 lg:px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="font-bold mb-2">Youtube Magazine</p>
      <p className="text-gray-500 mb-6">
      Please read the following terms and conditions carefully and pay attention to the fact that by entering this site you completely agree to its terms and conditions. Youtube Magazine site reserves the right to change these terms and conditions without any prior notice. To get the changes check this policy on a regular base. This Site (Youtube Magazine) shall have no responsibilities or liabilities for the content, data, opinions, statements and links this site contains.
      </p>
      <p className="font-bold mb-2">Note: Important</p>
      <p className="text-gray-500 mb-6">
      YOU HEREBY FURTHER AFFIRM AND WARRANT THAT YOU ARE CURRENTLY OVER THE AGE OF EIGHTEEN (<strong>18</strong>) YEARS (TWENTYONE (<strong>21</strong>) IN PLACES WHERE EIGHTEEN (<strong>18</strong>) YEARS IS NOT THE AGE OF MAJORITY) AND ARE CAPABLE OF LAWFULLY ENTERING INTO AND EXECUTING THE TERMS OF THIS AGREEMENT.
      </p>
      <p className="font-bold mb-2">
      Youtube Magazine uses the right of &#8220;Free Speech&#8221;.
      </p>
      <p className="text-gray-500 mb-6">
      This site (Youtube Magazine) works in accordance with copyright law. Persons who reproduce or distribute any works without a copyright owner&#8217;s consent, may be in violation of this law.
      </p>

     
      <p className="text-gray-500">
      We do not make warranties that this site will operate error free. If you see an error, please contact the <a className="font-bold text-blue-500 mb-6" href="mailto:drtrailer2022@gmail.com ">webmaster</a>. By entering this site you agree to hold the owners, employees, advertisers of Youtube Magazine free from any and all liability.This site (Youtube Magazine) do not offer any membership.If you have any questions please feel free to <a className="font-bold text-blue-500 mb-6" href="mailto:drtrailer2022@gmail.com">contact us</a>.
      </p>
    </div>

  </div>
</section>


</div>
    </div>
  )
}

export default Privacy