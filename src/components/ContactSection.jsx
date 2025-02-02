import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex overflow-hidden flex-col self-stretch px-20 pt-24 pb-36 mt-52 w-full text-white bg-black max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <div className="flex flex-col self-start mt-4 max-md:max-w-full">
          <h2 className="self-start text-7xl font-medium max-md:max-w-full max-md:text-4xl">
            engage with us in conversation.
          </h2>
          <p className="mt-20 text-base max-md:mt-10 max-md:max-w-full">
            We would love to hear from you! Whether you're looking to discuss a new project, explore design possibilities, or simply ask a question, our team is here to assist. Reach out to us through the contact details below, and we'll get back to you promptly. Let's bring your vision to life together!
          </p>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/36e18127bfb77e6af06399a2a217d2cc5f9975b72682d5a5ce8c53b912fc7113?placeholderIfAbsent=true&apiKey=3811c589575a445db6dee01b5c2a7c3b" alt="Contact visual" className="object-contain w-full rounded-3xl aspect-[1.81] max-md:max-w-full" />
      </div>
      <footer className="flex gap-10 items-start mt-28 mb-0 w-full text-base max-w-[1679px] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
        <nav className="flex flex-col items-start">
          <h3 className="self-stretch text-3xl font-medium">about</h3>
          <a href="#our-story" className="mt-9">our story</a>
          <a href="#careers" className="mt-5">careers</a>
          <a href="#contact" className="mt-5">contact</a>
        </nav>
        <nav className="flex flex-col items-start">
          <h3 className="self-stretch text-3xl font-medium">customer service</h3>
          <a href="#prices" className="mt-9">prices and payments</a>
          <a href="#terms" className="mt-5">terms of services</a>
          <a href="#privacy" className="mt-5">privacy policy</a>
        </nav>
        <nav className="flex flex-col items-start">
          <h3 className="self-stretch text-3xl font-medium">social media</h3>
          <a href="#instagram" className="mt-9">instagram</a>
          <a href="#facebook" className="mt-5">facebook</a>
          <a href="#linkedin" className="mt-5">linkedin</a>
        </nav>
        <div className="grow shrink self-end mt-24 text-5xl font-medium tracking-[20.64px] w-[415px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          STUDIO.AOI
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;