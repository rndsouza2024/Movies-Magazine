import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://123moviesmagazine.vercel.app/sitemap.xml'
          />
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
            content='free, movies, TV shows, legal, streaming, HD, full length, full movie'
          />
          <meta
            name='description'
            content='Explore the world of cinema with 123Movies Magazine™: Captivating reviews, top picks, and the latest news.'
          />
          <link
            rel='canonical'
            href='https://123moviesmagazine.vercel.app/'
          />
          <meta property='og:locale' content='en_US' />
          <meta property="og:type" content="video.movie" />
          <meta
            property='og:title'
            content='Movies Magazine.™ - Explore. Discover. Watch.'
          />
          <meta
            property='og:description'
            content='Explore the world of cinema with Movies Magazine: Captivating reviews, top picks, and the latest news.'
          />
          <meta
            property='og:url'
            content='https://123moviesmagazine.vercel.app/'
          />  
          <meta
            property='og:site_name'
            content='123Movies Magazine.™ - Explore. Discover. Watch.'
          />
          {/* <meta
            property='og:image'
            content='https://123moviesmagazine.vercel.app/og_image.jpg'
          /> */}
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/webp' />
          <meta
            name='application-name'
            content='123Movies Magazine.™ - Explore. Discover. Watch.'
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://123moviesmagazine.vercel.app/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
      
          <meta
            name='google-adsense-account'
            content='ca-pub-5527677677744511'
          />
          <meta
            name='google-site-verification'
            content='4gdbnCGat0T4Ow3Y_RYzPM4vwtsXvhUel5Q-2yULK6k'
          />
          <meta
            name='facebook-domain-verification'
            content='zifsy861dlzorbop8eww76tsqlf7t4'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dmdzuqt3p027t2adn'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          />
          {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W62BF3BQ"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
