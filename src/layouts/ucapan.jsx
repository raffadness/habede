import ucapanData from "../data/ucapan.js";

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {greetings.map((greeting, index) => (
            <div
              key={index}
              className="transform rounded-2xl border border-white/20 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-6">
                {/* Avatar/Initial */}
                <div className="mb-4 flex items-center">
                  <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-lg font-bold text-white">
                    {greeting.nickname.charAt(0).toUpperCase()}
                  </div>
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
      </div>
    </div>
  );
}
