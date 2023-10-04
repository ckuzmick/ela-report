import Head from 'next/head';
import Image from 'next/image'
import { useState } from 'react';


export default function Home() {
  return (
    <div>
      <Head>
        <title>The Harlem Renaissance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>The Harlem Renaissance</h2>
        <div className='card-grid'>
          <div className='card1'>
            <div className='card-1'>
              <div className='front'>
                <Image
                  src="/photo-1.png"
                  width={800/2}
                  height={500/2}
                  alt="Picture of the Cotton Clubr"
                  style={{
                    borderRadius: "2rem"
                  }}
                />
              </div>
              <div className='back'>
                <h1>The Cotton Club</h1>
                <p>The Cotton Club featured entertainers such as Count Basie, Duke Ellington, and Louis Armstrong. It was previously used to sell beer during the prohibition era, before in 1935 opening for black customers in 1935, and being shut down in 1940. </p>
              </div>
            </div>
          </div>
          <div className='card1'>
            <div className='card-1'>
              <div className='front'>
                <Image
                  src="/photo-2.png"
                  width={800/2}
                  height={500/2}
                  alt="Picture of Duke Ellington"
                  style={{
                    borderRadius: "2rem"
                  }}
                />
              </div>
              <div className='back'>
                <h1>Duke Ellington</h1>
                <p>After starting off in Washington D.C., Ellington made it big in New York City by perfroming in the previously mentioned Cotton Club along with his orchestra. He was an extremely talented jazz composer, condidered by many to be one of the msot important to the genre.</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        main {
          background-color: black;
          width: 100vw;
          height: 100vh;
        }
        .front, 
        .back {
          height: 100%;
          width: 100%;
          border-radius: 2rem;
          position: absolute;
          backface-visibility: hidden;
        }
        .card1:hover > .card-1 {
          cursor: pointer;
          transform: rotateY(180deg);
        }
        .card-1 {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 1500ms;
          transform-style: preserve-3d;
        }
        .card1 {
          width: 400px;
          height: 250px;
          perspective: 1000px;
          margin: 20px;
          display: inline-block;
        }
        .back {
          background-color: #F1F1F1;
          transform: rotateY(180deg);
          padding: 20px
        }
        .card-grid {
          width: 100%;
          height: 100%;
          perspective: 5000px;
          text-align: center;
        }
        Image {
          border-radius: 2rem;
        }
        h1 , p {
          margin: 0;
        }
        p {
          margin-top: 5px;
          line-height: 21px;
        }
        h2 {
          margin: 0;
          padding: 20px;
          padding-bottom: 0;
          color: white;
          font-size: 40px;
        }
        
        
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
