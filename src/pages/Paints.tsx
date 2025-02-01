export const Paints = () => {
  return (
    <div className="m-4 sm:m-16 h-auto space-y-12">
      <div className="flex flex-col sm:flex-row w-full sm:h-[75vh] bg-white rounded-md">
        <div className="w-full sm:w-1/2">
          <div className="relative w-full h-full">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/robinbbart/videos/paints.mp4" type="video/mp4" />
              <source src="/robinbbart/videos/paints.mp4" type="video/webm" />
              <source
                src="/robinbbart/videos/paints.mp4"
                type="video/quicktime"
              />
            </video>
          </div>
        </div>
        <div className="space-y-8 p-6 sm:p-0 sm:w-1/2 flex flex-col sm:justify-center sm:mx-22 overflow-y-scroll">
          <div>
            Since 2020, Robin has been making handmade, artisan-grade watercolor
            paints from ethically sourced mineral pigments. They began making
            their own paints to find a more ethical approach to art and to avoid
            additives used in many commercial paint brands.
          </div>
          <div>
            Made with handmade vegan watercolor binder, these paints contain no
            additives and find their binding strength from bio acacia sap and
            clove oil. These artisan watercolors showcase the unique
            characteristics of each pigment, from the colour and tinting
            strength, to the particle size and density, which affect how the
            pigments settle into paper when used.
          </div>
          <div>
            They have since also branched out into foraged paints using the
            laking process to convert plant dye into water-insoluble pigment, as
            well as exploring gouache and tempera paints.
          </div>
          <div>
            Handmade paints are time and labor-intensive, taking anywhere from 2
            to 8 hours for a single color. You can find Robin experimenting for
            days on end with different pigment combinations and swatch samples.
          </div>

          <div className="block sm:hidden">
            {/* Button to paints presentation on mobile */}
            <a
              href="https://docs.google.com/presentation/d/1yF3UVsCubRU0odldCXjITezddz28_emOT0n0IjJxMpc"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border rounded-md hover:bg-black hover:text-white transition-colors duration-300"
            >
              View Paint Options
            </a>
          </div>
        </div>
      </div>
      {/* View Paints Presentation */}
      <div className="relative w-full h-screen hidden sm:block">
        <iframe
          src="https://docs.google.com/presentation/d/1yF3UVsCubRU0odldCXjITezddz28_emOT0n0IjJxMpc/embed"
          className="w-full h-full"
          frameBorder="0"
          width="100%"
          height="100%"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Paints;
