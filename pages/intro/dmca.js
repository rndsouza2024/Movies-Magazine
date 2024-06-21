import React from 'react'
import Head from 'next/head'
import Script from 'next/script'


const dmca = () => {
  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px'
  }

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333'
  }

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  }

  const listItemStyle = {
    marginLeft: '20px'
  }

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none'
  }

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
        name: 'Movies Magazine - Explore. Discover. Connect.',
        url: 'https://moviesmagazine.onrender.com'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moviesmagazine.onrender.com/#website',
        url: 'https://moviesmagazine.onrender.com',
        name: 'Movies Magazine - Explore. Discover. Connect.',
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
              name: 'Movies Magazine - Explore. Discover. Connect.',
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
              name: 'Movies Magazine - Explore. Discover. Connect.',
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
              name: 'Movies Magazine - Explore. Discover. Connect.',
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
        <title>Movies Magazine | DMCA</title>
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='https://moviesmagazine.onrender.com/sitemap.xml'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          type='image/x-icon'
          href='/favicon.ico'
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
          content='download, software, freeware, shareware, trial versions, program, utilities, security, network, multimedia, movies, mobile, games, graphic design, file sharing, education, development, desktop, browser'
        />
        <meta
          name='description'
          content='Explore. Discover. Download - Free Your Desired Software.'
        />
        <link
          rel='canonical'
          href='https://moviesmagazine.onrender.com/intro/tearms'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Movies Magazine ' />
        <meta
          property='og:description'
          content='Movies Magazine is the top platform for exploring and downloading software,the premier platform for the latest releases and secure downloads.'
        />
        <meta
          property='og:url'
          content='https://moviesmagazine.onrender.com/intro/tearms/'
        />
        <meta property='og:site_name' content='Movies Magazine ' />
        <meta
          property='og:image'
          content='https://moviesmagazine.onrender.com/og_image.jpg'
        />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta property='og:image:type' content='image/jpg' />
        <meta name='application-name' content='Movies Magazine ' />
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

      <div style={containerStyle}>
        <section style={sectionStyle}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: 'auto',
                marginBottom: '12px',
                width: '100%',
                padding: '0 12px'
              }}
            >
              <h1 style={headingStyle}>
                DMCA Copyright Infringement Notification
              </h1>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                All trademarks, registered trademarks, product names, and
                company names or logos appearing on the site are the property of
                their respective owners. Filepuma complies with the federal
                Digital Millennium Copyright Act (DMCA) by responding to
                credible notices of alleged infringement that adhere to the DMCA
                and other applicable laws. As part of our response protocol, we
                may take down or disable access to material hosted on the
                Filepuma website that is claimed to be infringing. In such
                cases, we will earnestly attempt to establish contact with the
                developer who posted the disputed material, allowing them the
                opportunity to present a counter notification as outlined by the
                DMCA.
              </p>
              <p style={{ color: '#666', marginBottom: '24px' }}>
                Before proceeding with either a Notice of Infringing Material or
                Counter-Notification, it is recommended to seek legal advice to
                fully comprehend your rights and obligations under the DMCA and
                other relevant laws. The subsequent notice guidelines are
                designed to align with Filepuma's responsibilities under the
                DMCA, particularly section 512(c), and do not constitute legal
                counsel.
              </p>

              <h2 style={headingStyle}>Notice of Copyright Infringement</h2>
              <ul
                style={{
                  ...listItemStyle,
                  color: '#666',
                  marginBottom: '24px'
                }}
              >
                <li>
                  To submit a notice of infringing material on Filepuma, kindly
                  provide a notification containing the ensuing details:
                </li>
                <li>
                  A physical signature of a developer or development team
                  authorized to act on behalf of the owner of an exclusive right
                  that is allegedly infringed. For third-party agencies, please
                  include a copy of the "Physical Authorization Letter" to
                  verify authority over copyrighted content.
                </li>
                <li>
                  Identification of the copyrighted work claimed to be
                  infringed, or, if multiple copyrighted works at a single
                  online location are covered by one notification, furnish a
                  representative list of these works on that site.
                </li>
                <li>
                  Incorporating URLs within the email body is the most effective
                  way to expedite content identification.
                </li>
                <li>
                  Information reasonably sufficient to enable the service
                  provider to contact the complaining party, including an
                  address, telephone number, and, if available, an email address
                  where the complaining party can be reached.
                </li>
                <li>
                  A statement that the complaining party believes in good faith
                  that the material's usage, as complained of, lacks
                  authorization from the copyright owner, its agent, or the law.
                </li>
                <li>
                  A statement affirming the accuracy of the notification's
                  information, along with a declaration, made under penalty of
                  perjury, that the complaining party is authorized to act on
                  behalf of the owner of an exclusive right that is allegedly
                  infringed (Note: Under Section 512(f), individuals who
                  knowingly and materially misrepresent infringing material or
                  activity may be liable for damages).
                </li>
              </ul>

              <h2 style={headingStyle}>Contact Infringement Notice</h2>

              <p style={{ color: '#666' }}>
                Please review these terms and conditions carefully before using
                our website. If you have any questions or concerns, please
                contact us at{' '}
                <a style={linkStyle} href='mailto:softwatebay@outlook.com'>
                  softwatebay@outlook.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default dmca
