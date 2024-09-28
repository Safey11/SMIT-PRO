import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ];

  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 flex items-center justify-center">
      <img
        alt="Background"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl transition-transform duration-500 transform hover:scale-105" data-aos="fade-up">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 transition-opacity duration-500 opacity-70 hover:opacity-100" data-aos="fade-up" data-aos-delay="100">
            We are a global leader in innovation, dedicated to creating exceptional experiences for our customers and fostering a vibrant work environment for our team.
          </p>
          <div className="mt-10 space-y-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-white">Why Join Us?</h3>
            <p className="text-gray-400">Our mission is to empower our employees and support their growth. Here's what we offer:</p>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Collaborative work environment</li>
              <li>Career advancement opportunities</li>
              <li>Inclusive culture that values diversity</li>
            </ul>
          </div>
   
          <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-2xl font-semibold text-white">Explore Opportunities</h3>
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 justify-center">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 transition duration-200 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={400 + index * 100} // Incremental delay for each link
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
