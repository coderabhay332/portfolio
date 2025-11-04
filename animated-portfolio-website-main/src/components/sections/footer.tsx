import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
        <div className="text-2xl font-bold">
          Abhay
        </div>
        <p className="text-sm">
          © 2025 Personal Portfolio
        </p>
        <p className="text-sm">
          inspired by{' '}
          <a
            href="https://www.behance.net/jhanvishah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7B86D1] hover:underline"
          >
            Jhanvi Shah
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;