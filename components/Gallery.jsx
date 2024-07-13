"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:3000/api/images", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        setImages(data.images.rows);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-base-100 shadow rounded overflow-hidden">
            <Image
              src={`http://localhost:3000/api/images/${image.url}`}
              width={300}
              height={300}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-2">
              <h3 className="font-semibold">{image.title}</h3>
              <p className="text-sm text-gray-500">{image.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
