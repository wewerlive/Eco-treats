import dynamic from 'next/dynamic';
import Instructions from '@/components/dom/Instructions';

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })
const Park = dynamic(() => import('@/components/eco-treat/Park'), { ssr: false });

// Dom components go here
export default function Page(props) {
  return (
    <Instructions>
      This is a WeWer Project{' '}
    </Instructions>
  );
}

// Canvas components go here
// It will receive same props as the Page component (from getStaticProps, etc.)
// Page.canvas = (props) => <Logo scale={0.5} route='/blob' position-y={-1} />
Page.canvas = (props) => <Park />;

export async function getStaticProps() {
  return { props: { title: 'Index' } };
}
