const images = [
  "/robinbbart/images/tattoos/1DD12ACA-BA01-4837-AE42-18E027394E69.JPG",
  "/robinbbart/images/tattoos/8F760908-2077-4D61-ABD4-3F276685D866.jpg",
  "/robinbbart/images/tattoos/48C437E1-9767-4890-80AB-7118E21473AE.JPG",
  "/robinbbart/images/tattoos/FullSizeRender 2.jpg",
  "/robinbbart/images/tattoos/FullSizeRender.jpg",
  "/robinbbart/images/tattoos/IMG_0178.jpg",
  "/robinbbart/images/tattoos/IMG_2089.jpg",
  "/robinbbart/images/tattoos/IMG_0645.jpg",
];

export const Tattoos = () => {
  return (
    <div className="m-4 sm:mx-16 sm:h-[calc(100vh-6rem)] flex items-center">
      {/* Text with image gallery */}
      <div className="bg-white flex flex-col sm:flex-row space-y-24">
        <div className="p-4 sm:w-1/2 sm:p-12 space-y-8 flex flex-col flex-wrap">
          <div>
            Tattooing is one of the great joys and passions in my life. Everyone
            should be able to get tattooed in a safe and comfortable
            environment, with access to health and safety information, while
            having their body treated with respect.
          </div>
          <div>
            I began tattooing in 2020, in a slow and hybrid
            apprenticeship-self-taught process. My style has evolved, and I now
            enjoy tattooing a mix of both stylized work and tattoos in my
            illustration and watercolor painting styles (both in color and black
            ink only).
          </div>
          <div>
            I regularly take on custom requests, and I also have an extensive
            book of flash designs available for tattoos.
          </div>
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/robinbbtattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold rounded-md transition-colors duration-300"
          >
            @ROBINBBTATTOO
          </a>

          {/* links */}
          <div className="mt-8 space-x-4 space-y-4 md:space-y-0 flex flex-col md:flex-row">
            {/* Flashbook Button */}
            <a
              href="https://docs.google.com/presentation/d/1g-xIcAj4qrIJiaCVxcvDEt_2NCTu3YyQmPu42tADAZs/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border rounded-md hover:bg-black hover:text-white transition-colors duration-300"
            >
              Flashbook
            </a>

            {/* Booking Form (FR) Button */}
            <a
              href="https://docs.google.com/forms/u/0/d/14XynPdzh7iWOCzuL0TYVUWng7iR7qQFCBnFWNjMaWI0/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border rounded-md hover:bg-black hover:text-white transition-colors duration-300"
            >
              Booking Form (FR)
            </a>

            {/* Booking Form (EN) Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8VnZ6V5Grv7Sxv8IxBzPCzf420-dl6AeLYY5P_Tx8pDiDOQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border rounded-md hover:bg-black hover:text-white transition-colors duration-300"
            >
              Booking Form (EN)
            </a>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="sm:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full transform transition-all duration-500 hover:scale-120"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tattoos;
