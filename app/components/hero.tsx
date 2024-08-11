const Hero = () => {
  return (
    <div className="flex-col items-center justify-center text-left p-10">
      <div className="leading-[60px]">
        <h2 className="font-normal text-xl text-[rgb(95,241,208)] mb-4">
          Hi, my name is
        </h2>
        <h1 className="text-[60px] mb-3 text-[rgb(204,214,246)]">Roshan Chaudhary.</h1>
        <h1 className="text-[55px] text-[rgb(136,146,176)]">
          Aspiring Software Developer.
        </h1>

      </div>
        {/* description */}
        <p className="mt-6 w-[500px] text-[rgb(118,129,158)] text-base font-medium">
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products.
        </p>
    </div>
  );
};

export default Hero;
