import React from 'react';
import backgroundImage from '../../assets/images/AboutUs/aboutusposter.webp';
import aboutpost1 from '../../assets/images/AboutUs/emmafounder2.jpg';
import aboutpost2 from '../../assets/images/AboutUs/sleepingbaby.jpg';
import aboutpost3 from '../../assets/images/AboutUs/fatherandaughter2.webp';
import aboutpost4 from '../../assets/images/AboutUs/emmamodel.jpg';
import aboutpost5 from '../../assets/images/AboutUs/emmaabout.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className='mainContainer'>
      <div className='post1'>
        <div className="relative bg-gray-100 w-full h-[380px] flex items-center justify-end ">
          <img src={backgroundImage} alt="Background" className="absolute inset-0 w-full h-full object-cover z-0" />

          <div className="relative z-20 max-w-xl p-8 bg-white rounded-lg opacity-80 shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h1 className="text-4xl font-bold text-black-900 mb-4  text-orange-500">Europe’s Bestselling Mattress</h1>
            <p className="text-black-700 mb-4 font-bold">82,00,000+ Happy Customers</p>
            <p className="text-black-700 mb-4 font-bold">Loved in 33 Countries</p>
            <p className="text-black-700 mb-4 font-bold">78 Global Awards</p>
            <Link to='/Mattresses'>
              <button className="mt-4 bg-orange-500 text-white py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-orange-600">
                SHOP MATTRESSES
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='post2'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            {/* <img src={aboutpost1} alt="About Us" className="w-full h-auto object-cover rounded-lg" /> */}
            <img src={aboutpost1} alt="ourvision" className="w-[500px] h-[400px] object-cover rounded-lg" />

          </div>
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Our Vision For India</h2>
            <p className='font-semibold'>We are extremely excited to launch Emma in India. We aim to bring our globally awarded cutting-edge sleep technology to Indian sleepers.</p>
          </div>
        </div>
      </div>

      <div className='post3'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Sleep for all</h2>
            <p className='font-semibold'>Beyond the feeling during the day, the immune system, learning ability and emotional health are impacted. For this, we design products that go beyond ergonomics. To allow everyone to access a restful sleep, we design our products to suit a maximum of morphology.</p>
          </div>
          <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={aboutpost2} alt="sleepall" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div className='post4'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={aboutpost3} alt="makeSleep" className="w-full h-[400px] object-cover rounded-lg" />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Make sleep accessible</h2>
            <p className='font-semibold'>Originally, Emma was born from the observation that the mattress industry lacks ease and accessibility. This is how two friends, Dennis Schmoltzi and Manuel Müller, decided to revolutionize the world of bedding, putting the improvement of life in the broad sense at the heart of their mission. But their ambition does not stop there. Emma's philosophy is that of sleep for all. By understanding the importance of daily recovery, Emma wants to offer a complete range of products and services that meet everyone's needs for peaceful sleep.</p>
          </div>
        </div>
      </div>

      <div className='post5'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Fast and free delivery service</h2>
            <p className='font-semibold'>It's also quite a challenge to transport a mattress home. Fortunately, Emma thought of it with her mattress delivered in a box. So you can easily order the mattress online and transport it to your room without much effort. In this way, Emma not only provides a good mattress, but also an ideal service!.</p>
          </div>
          <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={aboutpost4} alt="Fast" className="w-[500px] h-[400px] object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <div className='post6'>
        <div className="w-full bg-gray-100 flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="imgContainer w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <img src={aboutpost5} alt="Innovation" className="w-[500px] h-[400px] object-cover rounded-lg" />
          </div>
          <div className="flex flex-col items-center p-6 rounded-lg mx-auto w-full md:w-1/2 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left  text-orange-500">Innovation as a driving force</h2>
            <p className='font-semibold'>Emma also carries innovative DNA and conducts in-house research to develop superior products that combine science and technology. All this takes place in its sleep lab in Frankfurt, the heart of innovation in Europe. Engineers and sleep professionals work hand in hand and bring innovative products to the world to improve the daily lives of its customers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
