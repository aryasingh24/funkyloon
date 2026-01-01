import bannerVideo from "./images/Logo.mp4";

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">

      {/* Video */}
      <video
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 via-black/40 to-transparent
"></div>

      {/* Banner Content */}
      <div className="relative z-10 h-50vh flex items-center justify-center text-white px-10">
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Funkyloon Collection
          </h1>

          <p className="text-base md:text-lg mb-6">
            Trendy printed t-shirts at affordable prices
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
            Explore Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Banner;
