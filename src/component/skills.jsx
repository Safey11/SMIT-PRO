import React from 'react';

const workItems = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Building responsive and user-friendly websites using React, CSS, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3ZWJ8ZW58MHx8fHwxNjM3MTA2MjI1&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Creating mobile applications with React Native for seamless user experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3ZWJ8ZW58MHx8fHwxNjM3MTA2MjI1&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Crafting intuitive user interfaces and experiences that delight users.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3ZWJ8ZW58MHx8fHwxNjM3MTA2MjI1&ixlib=rb-1.2.1&q=80&w=400',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Building robust e-commerce platforms to boost online sales and user engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx3ZWJ8ZW58MHx8fHwxNjM3MTA2MjI1&ixlib=rb-1.2.1&q=80&w=400',
  },
];

const WhatWeWorkOn = () => {
  return (
    <div className="bg-gray-50 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">What We Work On</h2>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -m-4">
          {workItems.map((item) => (
            <div key={item.id} className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img className="w-full h-48 object-cover" src={item.imageUrl} alt={item.title} />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-indigo-600">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeWorkOn;
