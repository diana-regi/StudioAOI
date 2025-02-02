import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import TeamMember from './TeamMember';
import ContactSection from './ContactSection';
import BGImage from '../assets/images/Bg.png';
import AboutImage from '../assets/images/Frame 8944.png';

const MainContent = () => {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-11 bg-white">
      <Header />
      <div className="mx-10 relative h-[85vh] flex items-center justify-start">
        <img
        src={BGImage}
        alt="Hero"
        className="rounded-2xl top-0 w-full h-full object-cover"
      />
      </div>
      <AboutUs />
      <TeamMember
        name="AFFRIN FIROS"
        role="CO-FOUNDER"
        description="Discover a symphony of form and function, where innovative design meets timeless elegance. Our architecture studio crafts spaces that not only captivate the eye but also enrich the soul. Let us transform your vision into awe-inspiring structures that redefine the art of living."
        imageUrl={AboutImage}
        signatureUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5b12d1fb-dfb7-497d-82a3-1a899c1e23d2?placeholderIfAbsent=true&apiKey=3811c589575a445db6dee01b5c2a7c3b"
        isReversed={false}
      />
      <TeamMember
        name="ANU JOJO"
        role="CO-FOUNDER"
        description="Discover a symphony of form and function, where innovative design meets timeless elegance. Our architecture studio crafts spaces that not only captivate the eye but also enrich the soul. Let us transform your vision into awe-inspiring structures that redefine the art of living."
        imageUrl={AboutImage}
        signatureUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/779be595-0540-4f68-9ebd-b4335a4dbb48?placeholderIfAbsent=true&apiKey=3811c589575a445db6dee01b5c2a7c3b"
        isReversed={true}
      />
      <ContactSection />
    </main>
  );
};

export default MainContent;