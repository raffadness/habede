import ucapanData from "../data/ucapan.js";
import maspras from "../assets/maspras.jpg";
import mbaindi from "../assets/mbaindi.jpg";
import masbedu from "../assets/masbedu.jpg";
import pras from "../assets/maspras.png";
import indi from "../assets/mbaindi.png";
import bedu from "../assets/masbedu.png";

export default function Ucapan() {
  const greetings = ucapanData();

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
          <img src={maspras} alt="Pras" className="rounded-2xl" />
          <img src={mbaindi} alt="Indi" className="rounded-2xl" />
          <img src={masbedu} alt="Indi" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
