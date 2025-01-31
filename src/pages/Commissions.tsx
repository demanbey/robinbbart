const images = [
  "./images/commissions/commission-pets/0d85150c-367b-4fa1-87b2-310be1a1ec07.jpg",
  "./images/commissions/commission-pets/2DDCD680-3863-4B90-BA66-B98E56DD4E7E.jpg",
  "./images/commissions/commission-pets/5F9A4177-5418-48FE-A5A1-3B72E8D084B2.jpg",
  "./images/commissions/commission-pets/13CDFADE-BBED-409E-8206-9C12D3277105.jpg",
  "./images/commissions/commission-other/IMG_4461.jpg",
  "./images/commissions/commission-other/IMG_4464.jpg",
  "./images/commissions/commission-other/IMG_4476.jpg",
  "./images/commissions/commission-other/IMG_4482.jpg",
];

export const Commissions = () => {
  return (
    <div className="flex items-center m-4 sm:mx-16 sm:h-[calc(100vh-6rem)]">
      <div className="bg-white flex flex-col sm:flex-row sm:items-center p-8 rounded-md space-y-8">
        {/* Text Section */}
        <div className="sm:w-1/2 flex flex-col space-y-8">
          <div className="text-2xl font-black">
            I am actively taking commissioned painting and illustration
            projects.
          </div>
          <div>
            Custom work is one of my favorite things to do, and I have worked on
            projects spanning paintings, pet portraits, private murals, to logos
            and commercial designs.
          </div>
          <div>
            My commissions process is unique to each client. We will work
            together to ensure your vision comes to life. Please email me for
            details and to begin the process.
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

export default Commissions;
