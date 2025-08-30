import { useState } from "react";

export default function Gridfoto() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Photo data from assets - using relative paths for Netlify
  const photos = [
    { id: 1, src: "./grid (1).jpg", alt: "Beautiful Memory 1" },
    { id: 2, src: "./grid (2).jpg", alt: "Beautiful Memory 2" },
    { id: 3, src: "./grid (3).jpg", alt: "Beautiful Memory 3" },
    { id: 4, src: "./grid (4).jpg", alt: "Beautiful Memory 4" },
    { id: 5, src: "./grid (5).jpg", alt: "Beautiful Memory 5" },
    { id: 6, src: "./grid (6).jpg", alt: "Beautiful Memory 6" },
    { id: 7, src: "./grid (7).jpg", alt: "Beautiful Memory 7" },
    { id: 8, src: "./grid (8).jpg", alt: "Beautiful Memory 8" },
    { id: 9, src: "./grid (9).jpg", alt: "Beautiful Memory 9" },
    { id: 10, src: "./grid (10).jpg", alt: "Beautiful Memory 10" },
    { id: 11, src: "./grid (11).jpg", alt: "Beautiful Memory 11" },
    { id: 12, src: "./grid (12).jpg", alt: "Beautiful Memory 12" },
  ];

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="relative mb-12 text-center">
          <h1 className="text-secondary font-[modak] text-6xl md:text-8xl">
            Your Best Friends Memories
          </h1>
          <h1 className="text-secondary-content absolute top-[5%] -z-10 w-full text-center font-[modak] text-6xl md:text-8xl">
            Your Best Friends Memories
          </h1>
        </div>

        {/* Photo Grid */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div
                className="group relative cursor-pointer"
                onClick={() => openModal(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-center text-white">
                      <div className="mb-2 text-2xl">📸</div>
                      <p className="text-sm font-medium">Click to view</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
          >
            <div className="relative max-h-full max-w-full">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-h-[90vh] max-w-full rounded-lg object-contain"
              />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg transition-all duration-200 hover:bg-gray-100"
              >
                <span className="text-xl">×</span>
              </button>

              {/* Photo info */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-4 py-2 text-white">
                <p className="text-sm font-medium">{selectedPhoto.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
