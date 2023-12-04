const FoodGallery = () => {
  const foodGallery = document.createElement("div");
  foodGallery.setAttribute("class", "gallery");

  const galleryTitle = document.createElement("h2");
  galleryTitle.textContent = "Food Gallery";
  galleryTitle.setAttribute("class", "gallery-title");
  foodGallery.appendChild(galleryTitle);

  const images = [
    { src: "imgs/cheese_fries.jpg", alt: "cheese fries" },
    { src: "imgs/nachosimg.jpg", alt: "nachos and cheese" },
    { src: "imgs/onion_rings.jpg", alt: "onion rings" },
    { src: "imgs/chickenimg.jpg", alt: "chicken" },
    { src: "imgs/fishimg.jpg", alt: "fish" },
    { src: "imgs/barbecueimg.jpg", alt: "barbecue" },
  ];

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("class", "image-container");

  for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", images[i].src);
    img.setAttribute("alt", images[i].alt);
    img.style.maxWidth = "200px";

    if (i === 2 || i === 3) {
      img.setAttribute("class", "col-span-2");
    }
    if (i === 1 || i === 3) {
      img.setAttribute("class", "row-span-2");
    }

    imageContainer.appendChild(img);
  }

  foodGallery.appendChild(imageContainer);

  return foodGallery;
};

export default FoodGallery;
