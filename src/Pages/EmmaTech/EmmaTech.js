import React from 'react'
import emmatechpost1 from '../../assets/images/EmmaTech/emmatechno1.webp'
import emmatechpost2 from '../../assets/images/EmmaTech/emmatechno2.webp'
import emmatechpost3 from '../../assets/images/EmmaTech/emmatechno3.webp'

const EmmaTech = () => {
  return (
    <div className='mainContainer '>
      <h3 className="text-4xl font-bold text-center mt-8 mb-4  text-orange-400">Emma Technology</h3>
      <div className='post2'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto">
          <div className="imgContainer w-full md:w-1/2">
            <img src={emmatechpost1} alt="homepagePosterImg" className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-sans mb-4 text-center md:text-left font-bold text-orange-500 ">Designed by Industry Experts</h2>
            <p className='font-semibold'>
              We brought together an expert team of product engineers, materials specialists, neuroscientists and orthopedic doctors to design a mattress that it good for you in the long term and provides ultimate comfort in the short term.
              We undertake extensive R&D in our development lab in Frankfurt, Germany to make sure that every new mattress we introduce provides restful sleep.
            </p>
          </div>
        </div>
      </div>
      <div className='post3'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto">

          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Adapted to Indian Sleep Patterns</h2>
            <p className='font-semibold'>A study across 1500 Indian consumers gave us great insight into Indian sleeping preferences. Our products in India reflect the same in terms of the high durability materials used and the firmness index of the mattresses and pillows. In order to achieve our global benchmark in sleep quality, we infused our products with cooling gel granules to combat the typically warm climates in India.</p>

          </div>
          <div className="imgContainer w-full md:w-1/2">
            <img src={emmatechpost2} alt="homepagePosterImg" className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
          </div>

        </div>
      </div>
      <div className='post4'>
        <div className="w-full bg-gray-100 flex flex-col-reverse md:flex-row items-center p-6 rounded-lg shadow-md mx-auto">
          <div className="imgContainer w-full md:w-1/2">
            <img src={emmatechpost3} alt="homepagePosterImg" className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Designed to last a Lifetime</h2>
            <p className='font-semibold'>We test our mattresses extensively under extreme point loads, impact loads and shear stresses to make sure that they last for a very long time. This enables us to provide a 15 year replacement warranty for every Emma that you get.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default EmmaTech