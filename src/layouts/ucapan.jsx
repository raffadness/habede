import ucapanData from "../data/ucapan.js";
import pras from "../assets/maspras.png";
import indi from "../assets/mbaindi.png";
import bedu from "../assets/masbedu.png";
import maspras from "../assets/maspras.jpg";
import mbaindi from "../assets/mbaindi.jpg";
import masbedu from "../assets/masbedu.jpg";
import cilananaio from "../assets/cilananaio.jpg";
import { useState } from "react";

export default function Ucapan() {
  const greetings = ucapanData();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = [
    { id: 1, src: maspras, alt: "Pras" },
    { id: 2, src: mbaindi, alt: "Indi" },
    { id: 3, src: masbedu, alt: "Bedu" },
    { id: 4, src: cilananaio, alt: "Cila, Nana, & Io" },
  ];
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };
  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="relative mb-12 text-center">
          <h1 className="text-secondary font-[modak] text-6xl md:text-8xl">
            Your Best Friends Wishes
          </h1>
          <h1 className="text-secondary-content absolute top-[5%] -z-10 w-full text-center font-[modak] text-6xl md:text-8xl">
            Your Best Friends Wishes
          </h1>
        </div>

        {/* Greetings Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {greetings.map((greeting, index) => (
            <div
              key={index}
              className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                {/* Avatar/Initial */}
                <div className="mb-4 flex items-center">
                  <img
                    className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white"
                    src={greeting.src}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {greeting.nickname}
                    </h3>
                  </div>
                </div>

                {/* Message */}
                <div className="rounded-xl border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                  <p className="leading-relaxed text-gray-700 italic">
                    "{greeting.words}"
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="mt-4 flex justify-end">
                  <div className="text-2xl text-pink-400">❀</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Header Section */}
        <div className="relative mb-12 text-center">
          <h1 className="text-secondary font-[modak] text-6xl md:text-8xl">
            Your Best Bro & Sis Wishes
          </h1>
          <h1 className="text-secondary-content absolute top-[5%] -z-10 w-full text-center font-[modak] text-6xl md:text-8xl">
            Your Best Bro & Sis Wishes
          </h1>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              {/* Avatar/Initial */}
              <div className="mb-4 flex items-center">
                <img
                  className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white"
                  src={pras}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mas Pras
                  </h3>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-xl border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                <p className="leading-relaxed text-gray-700 italic">
                  "Selamat ulang tahun adek ku cantik, Semua doa yg terbaik ,
                  semoga harapan harapan yg belum terlaksa dimudahkan jalan nya
                  ya , Tetep jadi orang baik , sayang keluarga , dan rendah hati
                  , maaf kalo belum bisa jdi kakak yg baik,"
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-4 flex justify-end">
                <div className="text-2xl text-pink-400">❀</div>
              </div>
            </div>
          </div>
          <div className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              {/* Avatar/Initial */}
              <div className="mb-4 flex items-center">
                <img
                  className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white"
                  src={indi}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mba Indi
                  </h3>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-xl border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                <p className="leading-relaxed text-gray-700 italic">
                  "Selamat ulang tahun, Endaaaaaang 🤍 Meskipun kita ga banyak
                  waktu bareng-bareng, pun ga banyak sharing session, tapii
                  tetep selalu ada do’a-do’a baik untuk segala kebaikan lo.
                  Semoga di tahun ini segala kemudahan, kelancaran, kebahagiaan,
                  dan apapun yang lo semogakan lekas terwujud ya. Sampai
                  kapanpun lo tetap adik gw yang berharga, Banyak-banyak
                  tersenyum deh, karena senyum lo cantik banget, muach!"
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-4 flex justify-end">
                <div className="text-2xl text-pink-400">❀</div>
              </div>
            </div>
          </div>
          <div className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              {/* Avatar/Initial */}
              <div className="mb-4 flex items-center">
                <img
                  className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white"
                  src={bedu}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mas Bedu
                  </h3>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-xl border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                <p className="leading-relaxed text-gray-700 italic">
                  "Endang, Selamat Ulang Tahun ya, Sehat selalu, kerjaanya
                  lancar, kuliahnya lancar, dan segala rencana baiknya
                  terlaksana segera aamiin. Pokoknya do’a terbaik buat endang!
                  Wish you all the best."
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-4 flex justify-end">
                <div className="text-2xl text-pink-400">❀</div>
              </div>
            </div>
          </div>
          <div className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              {/* Avatar/Initial */}
              <div className="mb-4 flex items-center">
                <img
                  className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white"
                  src={bedu}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cylla, Gianna, & Fiori
                  </h3>
                </div>
              </div>

              {/* Message */}
              <div className="rounded-xl border-l-4 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50 p-4">
                <p className="leading-relaxed text-gray-700 italic">
                  "Happy Birthday Ante Endang! 🎂✨ Thank you for being our
                  sweetest aunty in this big wild world. Love you so so so
                  mucho. From your little cheerleaders: Cylla, Gianna & Fiori.
                  We wish you lots of cake, joy, and hugs today ya Ante!"
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="mt-4 flex justify-end">
                <div className="text-2xl text-pink-400">❀</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          {/* Header Section */}
          <div className="relative mb-12 text-center">
            <h1 className="text-secondary font-[modak] text-6xl md:text-8xl">
              Your Best Bro & Sis Memories
            </h1>
            <h1 className="text-secondary-content absolute top-[5%] -z-10 w-full text-center font-[modak] text-6xl md:text-8xl">
              Your Best Bro & Sis Memories
            </h1>
          </div>
          <p className="mb-4 text-center text-2xl">
            Mas Pras : "Semoga menyusul ya dek"
          </p>
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
        </div>
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
