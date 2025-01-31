export const Publications = () => {
  const imageData = [
    {
      src: "./robinbbart/images/published/photo1.jpg",
      alt: "Image 1",
      text: "Ruido Blanco Artist Residency, 2023. Completed project: “La paleta de Iguazú” a collection of plant-based handmade watercolors made from plants found only in the Iguazú region, with accompanying paintings and a guidebook illustrating the process of making paints. Exhibited in the Ruido Blanco group exhibition.",
    },
    {
      src: "./robinbbart/images/published/hands2020.jpg",
      alt: "Image 2",
      text: "Hands - Illustrated poem, self-published",
      link: "./robinbbart/pdf/hands.pdf",
    },
    {
      src: "./robinbbart/images/published/photo3.png",
      alt: "Image 3",
      text: "Illustrations for Craig Rodger’s short novel.",
    },
    {
      src: "./robinbbart/images/published/photo4.png",
      alt: "Image 4",
      text: "Illustration selected for Emily Blair’s Two Poems. Pidgeonholes Literary Magazine.",
    },
    {
      src: ".robinbbart//images/published/photo5.png",
      alt: "Image 5",
      text: "Illustration selected for Tom Weller’s And There Came Forth a Great Fish. Pidgeonholes",
    },
    {
      src: "./robinbbart/images/published/photo6.png",
      alt: "Image 6",
      text: "Illustration selected for Nicole Oquendo’s The Antichrist Picks Flowers For Me At The Botanical Garden. Pidgeonholes Literary Magazine.",
    },
  ];

  return (
    <div className="mx-auto mt-8 px-8 py-12 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-16">
        {imageData.map((image, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {image.link ? (
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full transform transform-transition duration-300 hover:scale-110 object-cover rounded-lg mb-2"
                />
              </a>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg mb-2"
              />
            )}
            <p className="text-center text-sm text-gray-700">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
