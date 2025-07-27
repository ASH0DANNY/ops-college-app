'use client';

import { useState } from 'react';

const NewsCard = ({
  item,
  image,
  date,
  title,
  description
}: {
  item: number;
  image: string;
  date: string;
  title: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300"
      style={{ transform: isHovered ? 'translateY(-5px)' : 'none' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={`News ${item}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-blue-600 text-sm mb-2">{date}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:text-blue-700">Read More →</a>
      </div>
    </div>
  );
};

export default NewsCard;
