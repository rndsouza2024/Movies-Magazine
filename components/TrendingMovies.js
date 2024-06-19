import { useState, useEffect } from 'react';
import Image from 'next/image';
import shuffle from 'lodash/shuffle'; // Import shuffle function from lodash
import ytmagData from '../public/ytmag.json';

const Trendingmovies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Shuffle each category separately
    const shuffledytmags = shuffle(ytmagData.map(item => ({ ...item, category: 'ytmag' })));
    // const shuffledtechs = shuffle(techData.map(item => ({ ...item, category: 'tech' })));
    // const shuffledsportss = shuffle(sportsData.map(item => ({ ...item, category: 'sports' })));
    // const shuffledmarket = shuffle(marketData.map(item => ({ ...item, category: 'market' })));
    // const shuffledentertainment = shuffle(entertainmentData.map(item => ({ ...item, category: 'entertainment' })));

    // Interleave shuffled lists to ensure a mix of categories
    // const interleavedItems = interleaveArrays([shuffledytmags, shuffledtechs, shuffledsportss, shuffledmarket, shuffledentertainment]);

    const interleavedItems = interleaveArrays([shuffledytmags]);


    // Set the interleaved items state
    setItems(interleavedItems);
  }, []);

  // Function to interleave arrays
  const interleaveArrays = arrays => {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    const result = [];
    for (let i = 0; i < maxLength; i++) {
      arrays.forEach(arr => {
        if (arr[i]) {
          result.push(arr[i]);
        }
      });
    }
    return result;
  };

  return (
    <div className='container'>
      <div className='col-xl-3 nopadding'>
        <ul className='playlist_scrol'>
          {items.map(item => (
            <li key={item.id} className="playlist-video">
              <a href={`/${item.category}/${item.id}`} className='w-img'>
                <Image
                  src={`/wp-content/uploads/2023/06/${item.poster}`}
                  alt={item.title}
                  className="rounded-md border"
                  width={500}
                  height={500}
                  priority
                  style={{
                    filter: 'contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg)',
                    marginTop:'10px'
                  }}
                />
                <div className="badge">{item.badge}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .container {
          width: 100%;
          max-width: 1200px;
          height: 500px;
          overflow-y: auto;
          margin: 0 auto;
          border: 5px solid rgba(0, 0, 0, 0); /* Transparent border */
          box-shadow: 0 0 10px rgba(0, 0, 0, 1.5); /* Shadow effect */
        }

        .playlist_scrol {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .playlist-video {
          margin-right: 4px; /* Adjust margin for space between images */
          margin-bottom: 4px; /* Adjust margin for space between rows */
          width: calc(33.33% - 8px); /* Adjust width for three images side by side */
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .playlist-video .w-img {
          display: block;
          text-align: center;
          text-decoration: none;
          position: relative;
          transition: transform 0.3s ease;
        }

        .playlist-video .w-img:hover {
          transform: scale(1.03);
        }

        .playlist-video img {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
          border-radius: 10px;
          border: 2px solid #40d7bc;
          filter: contrast(1.2) saturate(1.5) brightness(1.4) hue-rotate(0deg);
        }

        .badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #40D7BC;
          font-weight: bold;
          padding: 2px;
          border-radius: 5px;
          fontSize: 12px;
        }
        
      `}</style>
    </div>
  );
};

export default Trendingmovies;

