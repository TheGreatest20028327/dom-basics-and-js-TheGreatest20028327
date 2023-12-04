class AppetizerItem {
  constructor(id, title, description, imagePath) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imagePath = imagePath;
  }

  createItem() {
    const item = document.createElement("div");
    item.setAttribute("class", `appetizer-item text-center ${this.id}`);

    const itemContent = document.createElement("div");
    itemContent.setAttribute("class", "appetizer-content");

    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", this.imagePath);
    itemImage.setAttribute("alt", this.title);
    itemImage.setAttribute("class", "appetizer-image");
    itemImage.style.maxWidth = "200px";
    itemImage.style.maxHeight = "150px";
    itemContent.appendChild(itemImage);

    const itemTitle = document.createElement("h2");
    itemTitle.innerHTML = this.title;
    itemTitle.setAttribute("class", "appetizer-title");

    const itemDescription = document.createElement("p");
    itemDescription.innerHTML = this.description;
    itemDescription.setAttribute("class", "appetizer-description");

    itemContent.appendChild(itemTitle);
    itemContent.appendChild(itemDescription);

    item.appendChild(itemContent);

    return item;
  }
}

const Appetizer = () => {
  const appetizerContent = document.createElement("div");
  appetizerContent.setAttribute("class", "appetizer-container container");

  const appetizerHeader = document.createElement("h1");
  appetizerHeader.setAttribute(
    "class",
    "appetizer-header text-center my-3 pt-5 mb-5"
  );
  appetizerHeader.innerHTML = "Appetizer Menu";
  appetizerContent.appendChild(appetizerHeader);

  const appetizerFlexBox = document.createElement("div");
  appetizerFlexBox.setAttribute(
    "class",
    "appetizer-flexbox d-flex justify-content-between"
  );

  const cheeseFries = new AppetizerItem(
    "barbecue item",
    "Barbecue",
    "Better then Arby's, We have more meats!",
    "imgs/barbecueimg.jpg"
  );
  appetizerFlexBox.appendChild(cheeseFries.createItem());

  const onionRings = new AppetizerItem(
    "fish platter",
    "Fish Delight",
    "Smells better then your mom.",
    "imgs/fishimg.jpg"
  );
  appetizerFlexBox.appendChild(onionRings.createItem());

  const nachos = new AppetizerItem(
    "nachos",
    "Nachos",
    "Locked and Loaded.....with cheese",
    "imgs/nachosimg.jpg"
  );
  appetizerFlexBox.appendChild(nachos.createItem());

  appetizerContent.appendChild(appetizerFlexBox);

  return appetizerContent;
};

export default Appetizer;
