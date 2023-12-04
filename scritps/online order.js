const OrderOnline = () => {
  const orderContent = document.createElement("div");
  orderContent.setAttribute("class", "order-container");

  const orderHeader = document.createElement("h2");
  orderHeader.textContent = "Online Order";
  orderContent.appendChild(orderHeader);

  const orderForm = document.createElement("form");
  orderForm.setAttribute("action", "https://formspree.io/f/meqbbloy");
  orderForm.setAttribute("method", "POST");

  const addInputPair = (labelText, inputType, inputName) => {
    const inputDiv = document.createElement("div");

    const label = document.createElement("label");
    label.textContent = labelText;
    inputDiv.appendChild(label);

    const input = document.createElement("input");
    input.setAttribute("type", inputType);
    input.setAttribute("name", inputName);
    inputDiv.appendChild(input);

    orderForm.appendChild(inputDiv);
  };

  
  addInputPair("Name:", "text", "name");

  
  addInputPair("Email:", "email", "email");

  
  const orderDiv = document.createElement("div");
  const orderLabel = document.createElement("label");
  orderLabel.textContent = "Order:";
  orderDiv.appendChild(orderLabel);

  const orderTextarea = document.createElement("textarea");
  orderTextarea.setAttribute("name", "order");
  orderDiv.appendChild(orderTextarea);

  orderForm.appendChild(orderDiv);

  
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Submit";
  orderForm.appendChild(submitButton);

  orderContent.appendChild(orderForm);

  return orderContent;
};

export default OrderOnline;
