import React, { useState } from 'react';

function Gallary() {
                          // Initial state with three placeholder images
  const [images, setImages] = useState([
    // 'https://via.placeholder.com/150',
    // 'https://via.placeholder.com/150',
    // 'https://via.placeholder.com/150',
  ]);

                            // Function to add a new random image to the gallery
  const addImage = () => {
    const randomImage = `https://picsum.photos/150?random=${Math.floor(Math.random() * 1000)}`;
    setImages([...images, randomImage]);
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md mt-4">
      <div className="flex justify-between">
      <button className="px-3 py-1 bg-gray-600 rounded-full">Gallery</button>
     
      <button class="button-33" role="button" onClick={addImage}>+ Add Image</button>


      {/* <button  onClick={addImage}> + Add Image</button> */}

        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-700 rounded-full">←</button>
          <button className="px-3 py-1 bg-gray-700 rounded-full">→</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-700 h-32 rounded-lg">
            <img src={image} alt="Random" className="h-full w-full object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;