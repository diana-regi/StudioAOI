import React from 'react';
import BG1 from '../assets/images/BG1.jpg';
import Icon from '../assets/images/icons8-up-right-100.png';

const AboutUs = () => {
  return (
  
  <section class="py-24 relative mx-12">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h1 class="text-black text-4xl font-bold font-manrope leading-normal lg:text-start text-center">About Us</h1>
                    <p class="text-black text-base font-normal leading-relaxed lg:text-start text-center">At Studio AOI, we are a versatile architecture firm specializing in a wide range of design services, including interior and exterior architecture, landscaping, and the creation of custom furniture and artworks. Our approach combines creativity with functionality to craft spaces that are not only aesthetically striking but also deeply aligned with the needs and aspirations of our clients. Whether transforming interiors, designing outdoor landscapes, or producing unique pieces of furniture and art, we are committed to delivering innovative, tailored solutions that enhance the way people experience and interact with their environments.</p>
                </div>
            </div>
            <div className="relative ">
            <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src={BG1} alt="about Us image" />
            <button class="absolute -bottom-2 -right-2 bg-black text-white p-3 rounded-full hover:bg-slate-900 m-2">
                <img src={Icon} alt="" class="w-7" />
            </button>
            </div>
        </div>
    </div>
</section>
                                        
  );
};

export default AboutUs;