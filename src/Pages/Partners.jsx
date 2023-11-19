import React from 'react'
import Marquee from 'react-fast-marquee';

const Partners = () => {
  return (
    <div>
       <div className="container mx-auto pb-10 dash_classes">
        <div>
          <div className="pb-6 py-16">
          <div className="py-8 flex items-center justify-center my-10 bg-custom bg-opacity-40 w-1/3 mx-auto mb-14">
          <div className="text-[50px] font-semibold space-y-5 text-end pr-5">
              <p className="text-gray-800 uppercase"><span className="bg-custom p-2 ml-1 uppercase">Partners</span></p>
            </div>
          </div>
         <div className='py-24 my-10 space-y-6' >
             
             <Marquee direction='right' speed={40}>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/atticus.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/channel.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/cytora.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/harmon.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/loupedeck.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/point.svg" alt="" />
              </div>
              </Marquee>
              <Marquee direction='left' speed={60}> 
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/rhode.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/roto.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/sourcy.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/systems-studio.svg" alt="" />
              </div>
              <div className='p-4 mr-4 h-24 w-full my-auto'>
                      <img className='w-full h-full object-cover' src="/public/tentree.svg" alt="" />
              </div>
              </Marquee>
         </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
