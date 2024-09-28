import React from 'react';

const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review: "Absolutely fantastic service! Highly recommended.",
    date: "September 12, 2024"
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review: "Great experience, but there's room for improvement.",
    date: "August 23, 2024"
  },
  {
    name: "Michael Lee",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    rating: 5,
    review: "Exceptional quality and support. Will use again!",
    date: "July 5, 2024"
  },
  {
    name: "Sarah Brown",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review: "Loved the experience. Would recommend to anyone.",
    date: "June 16, 2024"
  }
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center justify-center mt-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`h-6 w-6 ${
            index < rating ? "text-yellow-400" : "text-gray-300"
          } transition-colors duration-200 ease-in-out`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927a1 1 0 011.902 0l1.379 4.243a1 1 0 00.95.69h4.462c.969 0 1.371 1.24.588 1.81l-3.617 2.623a1 1 0 00-.364 1.118l1.379 4.243c.294.905-.755 1.655-1.538 1.118l-3.617-2.623a1 1 0 00-1.176 0l-3.617 2.623c-.783.537-1.832-.213-1.538-1.118l1.379-4.243a1 1 0 00-.364-1.118L2.49 9.67c-.783-.57-.381-1.81.588-1.81h4.462a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function AppReview() {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-lg">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl p-8 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="relative text-center">
                <img
                  src={review.avatar}
                  alt={`${review.name}'s avatar`}
                  className={`h-20 w-20 rounded-full object-cover border-4 ${
                    review.rating === 5
                      ? "border-yellow-400"
                      : "border-indigo-500"
                  } shadow-lg mx-auto`}
                />
                <StarRating rating={review.rating} />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500">{review.date}</p>
                <p className="mt-4 text-gray-600 italic">
                  "{review.review}"
                </p>
              </div>
              <div className="mt-6">
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-full shadow-md transition-all duration-200 transform hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
