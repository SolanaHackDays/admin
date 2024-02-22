import { Start } from '@/components/Start/Start'
import Image from 'next/image'

export default function Home() {
  return (
    <main
    //CENTER THE CONTENT
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
    <Start  />
    </main>
  )
}
