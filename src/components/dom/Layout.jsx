import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { VRButton } from '@react-three/xr'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom bg-zinc-900 text-gray-50'>
      <VRButton />
      {children}
    </div>
  )
})
Layout.displayName = 'Layout'

export default Layout
