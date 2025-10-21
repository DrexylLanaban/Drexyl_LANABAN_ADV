export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg rounded-xl p-6 max-w-sm w-full text-center transform transition duration-500 hover:scale-105">
      <div className="flex justify-center">
        <img
          src="/Dreyx.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-indigo-500"
        />
      </div>

      <h2
        className="mt-4 text-xl font-semibold md:text-2xl lg:text-3xl text-white"
        style={{
          textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ffffff',
        }}
      >
        Drexsho Kazuha
      </h2>

      <p className="mt-2 text-gray-300 text-sm md:text-base">
        BSIT 2nd Year College Student
      </p>

      <div className="mt-4 flex justify-center space-x-4">
        <a
          href="https://www.facebook.com/DrexGomenasai"
          className="transition-transform hover:scale-110"
        >
          <img
            src="/facebook.png"
            alt="Facebook"
            className="w-6 h-6 md:w-7 md:h-7"
          />
        </a>
        <a
          href="https://www.youtube.com/@kotarokashima"
          className="transition-transform hover:scale-110"
        >
          <img
            src="/youtube.png"
            alt="YouTube"
            className="w-6 h-6 md:w-7 md:h-7"
          />
        </a>
        <a
          href="https://www.instagram.com/dreksrosa_"
          className="transition-transform hover:scale-110"
        >
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-6 h-6 md:w-7 md:h-7"
          />
        </a>
      </div>
    </div>
  );
}
