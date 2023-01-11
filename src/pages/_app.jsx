import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/config';
import Layout from '@/components/dom/Layout';
import '@/styles/index.css';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true });

//! Read the notes at the bottom of the file
export default function App({ Component, pageProps = { title: 'Eco-treat' } }) {
  const ref = useRef();
  return (
    <>
      {/* // for SEO and all we don't need it */}
      <Header title={pageProps.title} />

      {/* // Layout is the parent of the dom and canvas */}
      {/* its a div wrapping canvas and other dom div's we gonna make */}
      <Layout ref={ref}>

        {/* // Render dom elements */}
        {/*Move component after scene to make dom appear in front of canvas*/}
        <Component {...pageProps} />

        {/* // Render canvas elements */}
        {Component?.canvas && (
          <Scene
            className='pointer-events-none'
            eventSource={ref}
            eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  );
}

//! Notes:
//  * The canvas can either be in front of the dom or behind. If it is in front it can overlay contents.
//  * Setting the event source to a shared parent allows both the dom and the canvas to receive events.
//  * Since the event source is now shared, the canvas would block events, we prevent that with pointerEvents: none.
