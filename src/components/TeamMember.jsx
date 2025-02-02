import React from 'react';

const TeamMember = ({ name, role, description, imageUrl, signatureUrl, isReversed }) => {
  const textContent = (
    <div className={`flex flex-col self-stretch my-auto text-black max-md:mt-10 max-md:max-w-full w-full max-w-7xl aspect-[2.0] px-5 md:px-5 lg:px-5 mx-auto ${isReversed ? 'items-start' : ''}`}>
      <h2 className={`text-7xl font-medium max-md:text-4xl ${isReversed ? '' : 'mr-9 max-md:mr-2.5 max-md:max-w-full'}`}>
        {name}
      </h2>
      <div className="mt-9 text-3xl text-zinc-600">{role}</div>
      <p className="mt-9 text-base pb-5 max-md:max-w-full">
        {description}
      </p>
      <button type="button" class="text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        About Us
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
      </button>
    </div>
  );

  const imageContent = (
    <img loading="lazy" src={imageUrl} alt={name} className="object-contain w-full rounded-3xl aspect-[1.8] max-md:mt-10 max-md:max-w-full" />
  );

  return (
    <section className={`mt-20 w-full ${isReversed ? 'max-w-[1405px]' : 'max-w-[1343px]'} max-md:mt-10 max-md:max-w-full`}>
      <div className="flex gap-5 max-md:flex-col">
        {isReversed ? (
          <>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              {textContent}
            </div>
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              {imageContent}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
              {imageContent}
            </div>
            <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
              {textContent}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TeamMember;