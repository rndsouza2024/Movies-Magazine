import { useRouter } from 'next/router'
import ytmagsData from '../../../public/ytmag.json'
import { useEffect, useState, useRef } from 'react'
import Styles from '@styles/video-player.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import HomeStyles from '@styles/styles.module.css'
import ShareButtons from '@components/ShareButtons'
import Rating from '@components/Rating'
import TrendingMovies from '@components/TrendingMovies'

import SubscribeButtontravel from '@components/SubscribeButtontravel'
// import Max from '@components/Max'
import Script from 'next/script'

const ytmagDetail = ({ ytmag }) => {
  const router = useRouter()
  const { id } = router.query

  // const [showPopup, setShowPopup] = useState(false)
  const [messageShown, setMessageShown] = useState(false) // Define messageShown state
  const [showPopup1, setShowPopup1] = useState(false)
  const [showPopup2, setShowPopup2] = useState(false)
  const [showPopup3, setShowPopup3] = useState(false)
  const [showPopupTrailer, setShowPopupTrailer] = useState(false)

  const shareMessage =
    'Watch Now !!! Movies Magazine - For ytmags, TV Show & Sports Live.!'

  // const togglePopup = () => {
  //   setShowPopup(!showPopup)
  // }

  const togglePopup1 = () => {
    setShowPopup1(!showPopup1)
  }

  const togglePopup2 = () => {
    setShowPopup2(!showPopup2)
  }

  const togglePopup3 = () => {
    setShowPopup3(!showPopup3)
  }

  const togglePopupTrailer = () => {
    setShowPopupTrailer(!showPopupTrailer)
  }

  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileDevice(window.innerWidth <= 768)
    }

    checkIsMobile()

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  const [playerReady, setPlayerReady] = useState(false)
  const playerRef = useRef(null)
  const currentIndexRef = useRef(0)

  useEffect(() => {
    const handleResize = () => {
      const player = document.getElementById('player')
      if (player) {
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        )
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        )
        player.style.width = vw + 'px'
        player.style.height = vh + 'px'
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const onYouTubeIframeAPIReady = () => setPlayerReady(true)
      if (typeof window !== 'undefined' && typeof YT === 'undefined') {
        const tag = document.createElement('script')
        tag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
      } else {
        onYouTubeIframeAPIReady()
      }
      return () => delete window.onYouTubeIframeAPIReady
    }

    loadYouTubeAPI()
  }, [])

  useEffect(() => {
    if (!playerReady || !ytmag) return

    const initializePlayer = () => {
      const videoIds = ytmag.videoitem
      const randomVideoId =
        videoIds[Math.floor(Math.random() * videoIds.length)]

      playerRef.current = new YT.Player('player', {
        width: '100%',
        height: '100%',
        videoId: randomVideoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          disablekb: 1,
          playsinline: 1,
          enablejsapi: 1,
          modestbranding: 1,
          origin: window.location.origin,
          rel: 0,
          quality: 'hd1080'
        },
        events: {
          onStateChange: event => {
            if (event.data === window.YT.PlayerState.ENDED) {
              // If video has ended, move to the next video or loop back to the beginning
              currentIndexRef.current =
                (currentIndexRef.current + 1) % videoIds.length
              playerRef.current.loadVideoById({
                videoId: videoIds[currentIndexRef.current],
                startSeconds: 0 // Start from the beginning of the next video
              })
            }
          }
        }
      })
    }

    initializePlayer()
  }, [playerReady, ytmag])

  const [adultytmags, setAdultytmags] = useState([])

  useEffect(() => {
    // Filter adult ytmags from the ytmagsData
    const filteredytmags = ytmagsData.filter(ytmag => ytmag.group === 'adult')
    setAdultytmags(filteredytmags)
  }, [])

  const audioIframeRef = useRef(null)
  const predefinedEqualizationValue = 70
  const predefinedNoiseReductionValue = 40
  const audioSourceQuality = 'high'
  const enableNoiseCancellation = true

  useEffect(() => {
    const autoAdjustSoundEnhancements = () => {
      const iframeWindow = audioIframeRef.current.contentWindow

      if (iframeWindow && iframeWindow.postMessage) {
        iframeWindow.postMessage(
          {
            command: 'autoAdjustSoundEnhancements',
            equalizationValue: predefinedEqualizationValue,
            noiseReductionValue: predefinedNoiseReductionValue,
            audioSourceQuality: audioSourceQuality
          },
          '*'
        )
      }
    }

    const loadAudioProcessing = () => {
      autoAdjustSoundEnhancements()

      const iframeAudioElement =
        audioIframeRef.current.contentDocument.getElementById('audioPlayer')

      const iframeAudioContext = new (window.AudioContext ||
        window.webkitAudioContext)()
      const sourceNode =
        iframeAudioContext.createMediaElementSource(iframeAudioElement)

      // Noise cancellation processing
      if (enableNoiseCancellation) {
        const noiseCancellationNode = iframeAudioContext.createBiquadFilter()
        noiseCancellationNode.type = 'highpass' // Using high-pass filter for noise cancellation
        noiseCancellationNode.frequency.value = 2000 // Adjust the cutoff frequency as needed (example: 2000 Hz)
        sourceNode.connect(noiseCancellationNode)
        noiseCancellationNode.connect(iframeAudioContext.destination)
      }

      // Load and apply the impulse response (Mills Greek Theater)
      fetch(
        '../wp-content/themes/website/assets/274600-Future-Wave-Rise-01.wav'
      ) // Update with the actual file path
        .then(response => response.arrayBuffer())
        .then(buffer => iframeAudioContext.decodeAudioData(buffer))
        .then(audioBuffer => {
          const convolverNode = iframeAudioContext.createConvolver()
          convolverNode.buffer = audioBuffer
          sourceNode.connect(convolverNode)
          convolverNode.connect(iframeAudioContext.destination)
        })
        .catch(error => console.error('Error loading impulse response:', error))
    }

    if (audioIframeRef.current) {
      audioIframeRef.current.addEventListener('load', loadAudioProcessing)
    }

    return () => {
      if (audioIframeRef.current) {
        audioIframeRef.current.removeEventListener('load', loadAudioProcessing)
      }
    }
  }, [ytmag, enableNoiseCancellation])

  const loadVideo = (videoPage, contentType, server) => {
    const videoIframe = document.getElementById('videoIframe')

    const userResponse = confirm(
      `Do you want to load ${
        contentType === 'tvshow' ? 'TV Show Episode' : 'ytmag'
      } from Server ${server}?`
    )

    if (userResponse) {
      // If the user clicks "OK"
      if (!messageShown) {
        // Display a message (only if it hasn't been shown before)
        alert(
          `Loading ${
            contentType === 'tvshow' ? 'TV Show Episode' : 'ytmag'
          } - Selected Server ${server}`
        )
        setMessageShown(true) // Update messageShown state
      }

      // Set the new source after a short delay
      setTimeout(() => {
        videoIframe.src = videoPage
      }, 30) // Adjust the delay as needed
    } else {
      // If the user clicks "Cancel"
      alert('Video loading canceled.')
    }
  }

  const uwatchfreeSchema = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Movies Magazine',
      url: 'https://moviesmagazine.onrender.com/',
      image: ['https://moviesmagazine.onrender.com/wp-content/uploads/2023/05/favicon.ico'],
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
          urlTemplate: 'https://moviesmagazine.onrender.com/search?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ])

  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Organization'],
        '@id': 'https://gravatar.com/drtrailer2022/#person',
        name: 'Dr Trailer'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://moviesmagazine.onrender.com#website',
        url: 'https://moviesmagazine.onrender.com',
        name: 'Movies Magazine',
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'WebPage',
        '@id': `/${ytmag['ytmag.watch']}#webpage`,
        url: `/${ytmag['ytmag.watch']}`,
        name: `${ytmag.name} | Movies Magazine`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        isPartOf: {
          '@id': 'https://moviesmagazine.onrender.com#website'
        },
        inLanguage: 'en-US'
      },
      {
        '@type': 'Person',
        '@id': 'https://moviesmagazine.onrender.comauthor/ytmag/',
        name: 'Dr Trailer',
        url: 'https://moviesmagazine.onrender.comauthor/ytmag/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        },
        sameAs: ['https://moviesmagazine.onrender.com']
      },
      {
        '@type': 'Article',
        '@id': `/${ytmag['ytmag.watch']}#article`,
        headline: `Watch ${ytmag.name} | Movies Magazine`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'ytmag',
        author: {
          '@id': 'https://moviesmagazine.onrender.comauthor/ytmag/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Discover hidden YouTube gems! Submit your unlisted videos, connect with creators,  and explore captivating content on Movies Magazine.Unlock new favorites today!`,
        image: ytmag.image,
        name: `Watch ${ytmag.name} | Movies Magazine`,
        isPartOf: {
          '@id': `/${ytmag['ytmag.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${ytmag['ytmag.watch']}#webpage`
        }
      },
      {
        '@type': 'BlogPosting',
        '@id': `/${ytmag['ytmag.watch']}#blogPost`,
        headline: `Watch ${ytmag.name} | Movies Magazine`,
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        articleSection: 'ytmag',
        author: {
          '@id': 'https://moviesmagazine.onrender.comauthor/ytmag/'
        },
        publisher: {
          '@id': 'https://gravatar.com/drtrailer2022/#person'
        },
        description: `Discover hidden YouTube gems! Submit your unlisted videos, connect with creators,  and explore captivating content on Movies Magazine.Unlock new favorites today!`,
        image: ytmag.image,
        name: `Watch ${ytmag.name} | Movies Magazine`,
        '@id': `/${ytmag['ytmag.watch']}#richSnippet`,
        isPartOf: {
          '@id': `/${ytmag['ytmag.watch']}#webpage`
        },
        inLanguage: 'en-US',
        mainEntityOfPage: {
          '@id': `/${ytmag['ytmag.watch']}#webpage`
        }
      }
    ]
  })
  const newsArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `/${ytmag['ytmag.watch']}`,
    name: ytmag.title,
    url: `/${ytmag['ytmag.watch']}`,
    description: ytmag.synopsis,
    image: ytmag.image,
    genre: ytmag.genre,
    datePublished: ytmag.startDate,
    potentialAction: {
      '@type': 'WatchAction',
      target: {
        '@type': 'EntryPoint',
        name: ytmag.title,
        urlTemplate: `${ytmag['url']}`
      }
    },
    locationCreated: {
      '@type': 'Place',
      name: ytmag.country
    },
    author: {
      '@type': 'Person',
      name: 'DrTrailer',
      url: 'https://gravatar.com/drtrailer2022'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Movies Magazine',
      logo: {
        '@type': 'ImageObject',
        url: 'https://moviesmagazine.onrender.com/og_image.jpg'
      }
    },
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Action Platform',
      value: ['Desktop Web Platform', 'iOS Platform', 'Android Platform']
    }
  }

  // Define VideoObject schema for each video entry
  const videoObjects = ytmag.contentUrl.map((contentUrl, index) => ({
    '@type': 'VideoObject',
    name: ytmag.name ?? 'Unknown',
    url: contentUrl,
    description: ytmag.synopsis ?? '',
    uploadDate: ytmag.uploadDay?.[index] ?? '',
    thumbnailUrl: ytmag.thumbnailUrl?.[index] ?? '',
    contentUrl,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionService: {
        '@type': 'WebSite',
        name: 'YouTube',
        '@id': ytmag.channelid
      },
      interactionType: 'https://schema.org/LikeAction',
      userInteractionCount: ytmag.userCount?.[index] ?? 0
    }
  }))

  // Convert newsArticleSchema and videoObjects to JSON strings
  const newsArticleJson = JSON.stringify(newsArticleSchema)
  const videoObjectsJson = JSON.stringify(videoObjects)

  return (
    <div>
      <Head>
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <title> Watch {ytmag && ytmag.name} | Movies Magazine</title>
        <link rel='canonical' href={ytmag && ytmag.url} />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index,follow' />
        <meta name='revisit-after' content='1 days' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`${ytmag && ytmag.name} - Movies Magazine`}
        />
        <meta
          property='og:description'
          content={`${
            ytmag && ytmag.name
          } | For ytmags, TV Show & Sports Live.`}
        />
        <meta
          property='og:description'
          content='Discover hidden YouTube gems! Submit your unlisted videos, connect with creators,  and explore captivating content on Movies Magazine.Unlock new favorites today!'
        />
        <meta property='og:url' content={`${ytmag && ytmag.url}`} />
        <meta name='keywords' content={`${ytmag && ytmag.keywords}`} />
        <meta property='og:site_name' content='Movies Magazine' />
        <meta property='og:type' content='article' />
        <meta property=' og:image:alt' content={`${ytmag && ytmag.group}`} />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta property='article:section' content='ytmag' />
        <meta name='author' content='admin' />
        <meta
          property='article:modified_time'
          content='2024-01-01T13:13:13+00:00'
        />
        <meta property='og:image' content={`${ytmag && ytmag.backimage}`} />

        <meta property='og:image:width' content='1080px' />
        <meta property='og:image:height' content='720px' />
        <meta property='og:image:type' content='image/jpeg' />
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
        {/* <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: ldJsonData }}
        /> */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: rankMathSchema }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: newsArticleJson }}
        />

        {/* Inject VideoObject schemas */}
        {videoObjects.map((videoObject, idx) => (
          <script
            key={`videoObject-${idx}`}
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObject) }}
          />
        ))}
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

            webpushr('setup', { 'key': 'BBQBh9BNi-dtzrb7ayxfk3Kuh11sEA0hiPlNpdyHX0pueAdWd4lxPInWWXC3bcc5EsZTx8jDnZeDiJCRKkA91Lo' });
          `
          }}
        />
      </Head>
      {/* <Script src='../../propler/ads.js' defer /> */}

      <div
        className={`w-full bg-gray-600 shadow`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          textAlign: 'center'
        }}
      >
        <h2
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          Movies Magazine Explore. Discover. Connect.{' '}
        </h2>
        <p
          className='flex flex-col text-center py-5 font-bold text-xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          "Movies Magazine - Explore. Discover. Connect." Unlock the hidden
          treasures of YouTube! Submit your exclusive unlisted videos and gain
          exposure to a global audience. Join our community of creators and
          enthusiasts to discover, share, and connect through captivating
          content. Explore the unexplored and subscribe to unique channels that
          redefine the art of storytelling. Check [Contact page] for your
          Unlisted YouTube video to be part of this website and get Subcribers.
        </p>

        <Image
          src={ytmag.channelposter}
          alt={ytmag.title}
          width={1280}
          height={720}
          // priority
          objectFit='cover'
          loading='lazy'
          style={{
            // maxWidth: '50%',
            margin: 'auto',
            marginBottom: '20px',
            borderRadius: '50px',
            boxShadow: '0 0 10px 0 #fff',
            filter:
              'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)'
          }}
        />
        <div style={{ maxWidth: '800px', width: '100%', marginBottom: '20px' }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '34px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: '#40D7BC',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            {ytmag.title}
          </h2>

          <p
            style={{
              marginBottom: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#40D7BC',
              textShadow: '2px 5px 5px #000000'
            }}
          >
            {' '}
            Genre: {ytmag.genre.join(', ')}{' '}
          </p>
          {ytmag.synopsis.split('\n\n').map((paragraph, idx) => (
            <p
              key={idx}
              className='description'
              style={{
                marginBottom: '10px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#40D7BC',
                textShadow: '2px 5px 5px #000000'
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <h2
          style={{
            marginTop: '20px',
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#40D7BC',
            textShadow: '2px 5px 5px #000000'
          }}
        >
          Video 1# Currrent Likes = {ytmag.userCount?.[0] ?? ''}
        </h2>
        <h2
          style={{
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#40D7BC',
            textShadow: '2px 5px 5px #000000'
          }}
        >
          Video 2# Currrent Likes = {ytmag.userCount?.[1] ?? ''}
        </h2>
        <h2
          style={{
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#40D7BC',
            textShadow: '2px 5px 5px #000000',
            marginBottom: '20px'
          }}
        >
          Video 3# Currrent Likes = {ytmag.userCount?.[2] ?? ''}
        </h2>

        <Rating />
        <h2
          style={{
            marginTop: '20px',
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#40D7BC',
            textShadow: '2px 5px 5px #000000'
          }}
        >
          {' '}
          {ytmag.title} Channel
          <SubscribeButtontravel ytmag={ytmag} />{' '}
        </h2>
        <h2
          style={{
            marginTop: '20px',
            marginBottom: '10px',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#40D7BC',
            textShadow: '2px 5px 5px #000000'
          }}
        >
          {' '}
          {ytmag.title} Current Subscribers {ytmag.channelsub}.{' '}
        </h2>
        <div className={HomeStyles.ytmagDetails}>
          {ytmag && (
            <div>
              <div
                className={`${HomeStyles.imageGrid} mt-5 `}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '50px'
                }}
              >
                <Image
                  className={`${HomeStyles.image} img-fluid lazyload`}
                  src={ytmag.directorimg} // Assuming 'directorimg' is the correct property
                  alt='Challen Logo'
                  width={200} // Use 'width' without curly braces
                  height={200} // Use 'height' without curly braces
                  objectFit='cover' // Use string value for 'objectFit'
                  style={{
                    borderRadius: '50%', // Make the image circular
                    border: '2px solid #fff' // Add a border around the circle
                  }}
                  loading='lazy'
                />
                {/* Render other images similarly */}
              </div>
            </div>
          )}
        </div>
        {/* <DailyMotionBackground videoId={ytmag.video} /> */}

        <h1
          className='flex flex-col text-center py-5 font-bold text-3xl items-center justify-center'
          style={{ color: '#40D7BC', textShadow: '5px 5px 2px #000' }}
        >
          YTMag - {ytmag && ytmag.title}{' '}
        </h1>

        <h2
          style={{
            color: '#40D7BC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            fontWeight: 'bold',
            fontSize: '25px',
            textShadow: '1px 2px 2px #000'
          }}
        >
          Top Best {ytmag.term} Videos to Watch.
        </h2>
        <div
          id='player'
          style={{
            filter:
              'contrast(1.2) saturate(1.5) brightness(1.3) hue-rotate(0deg)',
            maxWidth: '100%',
            borderRadius: '20px',
            maxHeight: isMobileDevice ? '50vh' : '100vh'
          }}
        ></div>
        <p
          style={{
            color: '#40D7BC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textShadow: '1px 2px 2px #000',
            fontSize: '15px',
            fontWeight: 'bold'
          }}
        >
          *Note: Use Setting in Player to improve the Quality of video to HD
          Quality 1080p.
        </p>
        <div class='container1'>
          <ShareButtons
            title='Movies Magazine'
            description='For ytmags, TV Show & Sports Live. social platform'
            shareMessage={shareMessage}
            image={ytmag && ytmag.url}
          />
        </div>
        <h2
          className='mb-10 animate-pulse'
          style={{
            color: '#40D7BC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            textShadow: '1px 2px 2px #000'
          }}
        >
          &#x1F604;Trending Videos to Watch Other Channels&#128515;
        </h2>

        <TrendingMovies />
        {/* <Max /> */}
        <div class='container1'>
          <ShareButtons
            title='Movies Magazine'
            description='For ytmags, TV Show & Sports Live. social platform'
            shareMessage={shareMessage}
            image={ytmag && ytmag.url}
          />
        </div>
        <p
          className='flex flex-col text-center py-5 font-bold text-xl items-center justify-center'
          style={{
            color: '#40D7BC',
            textShadow: '5px 5px 2px #000',
            fontSize: '12px'
          }}
        >
          Please Note:* We're thrilled to inform you that we've featured one of
          your amazing YouTube videos on our website. Your content resonates
          deeply with our audience, and we believe it adds tremendous value to
          our platform. To ensure proper credit and recognition for your work,
          we've taken the following steps: Attribution in the Video Player: Your
          name is prominently displayed near the embedded video player on our
          website. Link to the Original Video: We've included a clickable link
          back to the original video on YouTube, allowing viewers to explore
          more of your content on your channel. Description: Beneath the
          embedded video, we've provided a brief description that mentions your
          name, the title of the video, and a link to the original video on
          YouTube.
        </p>
      </div>
    </div>
  )
}

export async function getStaticPaths () {
  const paths = ytmagsData.map(ytmag => ({
    params: { id: ytmag.id } // Assuming each ytmag object has an "id" field
  }))
  return { paths, fallback: false }
}

export async function getStaticProps ({ params }) {
  // Fetch the ytmag data based on the provided id
  const ytmag = ytmagsData.find(m => m.id === params.id)

  return {
    props: {
      ytmag
    }
  }
}

export default ytmagDetail
