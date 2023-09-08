import Image from 'next/image'
import {Philosopher } from 'next/font/google'
import ImageHome from '@/app/profile_hfg.jpg'
import Sponsor_1 from '@/app/sponsor_1.jpg'
const philosopher = Philosopher({ 
  weight: ['400', '700'],
  style:['normal', 'italic'],
  subsets:['latin'],
  display:'swap'
    
  });
export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden relative">
        <div className='w-full h-full absolute z-0'>
          <Image src={ImageHome} alt='image-hfg' className='object-cover absolute z-0 h-full w-auto xl:h-auto xl:w-full	'/>
          <div className=' absolute w-full h-full bg-[#064C72] opacity-50 '></div>
        </div>
        <div className={`${philosopher.className} absolute z-1 w-full h-full  p-16 md:p-32 text-white flex flex-col justify-between`} >
            <div className='text-center text-white'>
              <h1 className='text-4xl'>Hindu For Generation 17 Under Construction</h1>
              <p>To make things right we need some time to build.</p>
            </div>

            <div className='w-full flex flex-col justify-center'>
              <p>Sponsored by</p>
              <Image src={Sponsor_1} alt='halo-belanja' className='mt-6 h-[120px] w-[120px] rounded-full items-center p-auto' />
            </div>
        </div>    
    </main>
  )
}
