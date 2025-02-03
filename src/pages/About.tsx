export const About = () => {
  return (
    <div className="w-full h-[calc(100vh-6rem)]">
      <div className="flex flex-col lg:flex-row lg:items-center h-full m-4 lg:m-0 lg:mx-12">
        {/* Text Section */}
        <div className="w-full space-y-8 sm:w-1/2 p-3 sm:p-10 bg-white sm:mr-10">
          <div className="font-semibold text-4xl">
            Multidisciplinary visual and tattoo artist
          </div>
          <div>
            Robin Binder is a multidisciplinary visual and tattoo artist based
            in so-called Montreal, Canada. They explore the fantasy of the
            urbanscape and beyond it through an anticolonialist, collectivist
            lens. Robin uses primarily watercolors, gouache, photography,
            stencil, and ink to depict illustrations of botanicals, urban
            scapes, and dream-like scenes. They often use motifs from their
            Slavic heritage, patterns, food and fruit, and bodies and bones in
            their visual depictions of their experiences. Their work also
            features handmade watercolor paints using ethically-sourced and
            plant-based pigments.
          </div>
          <div>
            Robin’s approach to creating centers the collective goals of their
            community, firmly rooted in knowledge- and materials-sharing. They
            hold a fascination for limbs, wings, and spines since a spinal
            injury introduced severe chronic pain into their life. They hope to
            expand their botanical knowledge to further their pigment-making
            practice and to enable more people access to art materials, to work
            on larger scale pieces, and to incorporate tattooing techniques into
            traditional paintings.
          </div>
          <div className="text-lg">
            Follow on Instagram for recent projects:
          </div>
          <div className="sm:flex sm:space-x-8 flex-wrap">
            <a
              href="https://www.instagram.com/robinbbart"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold rounded-md transition-colors duration-300"
            >
              @ROBINBBART
            </a>

            <a
              href="https://www.instagram.com/robinbbtattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold rounded-md transition-colors duration-300"
            >
              @ROBINBBTATTOO
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <div className="w-full h-full">
            <img
              src="/images/99820013.avif"
              className="w-full h-full object-cover"
              alt="robin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
