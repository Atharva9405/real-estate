import React from 'react'
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24' >
    <div className="flex flex-col lg:flex-row">
    <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1px-4 lg:px-0">
        <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
        <span className="text-violet-700">Rent</span> Your Dream House With Us.
        </h1>
        <p className='max-w-[480px] mb-8'>Launched in 2005, World's No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=""/>
      </div>
    </div>
    <Search />
    </section>
  )
}

export default Banner
