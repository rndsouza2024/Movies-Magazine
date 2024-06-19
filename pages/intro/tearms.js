import React from 'react'
import Head from 'next/head'
import Script from 'next/script';

const Tearms = () => {

  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px',
  };

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const listItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  };

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
        <title>Youtube Magazine™ | Terms of Service</title>
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
          <link rel='canonical' href='https://youtubemagazine.vercel.app/intro/tearms' />
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
          <meta property='og:url' content='https://youtubemagazine.vercel.app/intro/tearms/' />
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
     
<div style={containerStyle}>

<section style={sectionStyle}>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto', marginBottom: '12px', width: '100%', padding: '0 12px' }}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        Welcome to YouTube Magazine™ For Unlisted Videos. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:
      </p>

      <h2 style={headingStyle}>Submission Guidelines</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
        <li>Creators must submit their own original unlisted videos for consideration.</li>
        <li>Submitted videos must comply with YouTube's community guidelines and terms of service.</li>
      </ul>

      <h2 style={headingStyle}>Content Ownership</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
        <li>Creators retain ownership of their videos but grant YouTube Magazine™ permission to feature and promote submitted content.</li>
        <li>YouTube Magazine™ may use submitted videos for promotional purposes on its website and associated platforms.</li>
      </ul>

      {/* Add more sections with similar structure */}

      <p style={{ color: '#666' }}>
        Please review these terms and conditions carefully before using our website. If you have any questions or concerns, please contact us at <a style={linkStyle} href="mailto:ytmagpublisher@gmail.com">ytmagpublisher@outlook.com</a>.
      </p>
    </div>
  </div>
</section>

</div>
    </div>
  )
}

export default Tearms