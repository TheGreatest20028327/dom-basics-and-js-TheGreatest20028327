const Appitizers = () => {
  const appContent = document.createElement('div');
  appContent.setAttribute('class', 'app-content container');

  const appHeader = document.createElement('h1');
  appHeader.setAttribute('class', 'app-header text-center my-3 pt-5 mb-5');
  appHeader.innerHTML = 'APPETIZERS';

  const appList = document.createElement('ul');
  appList.setAttribute('class', 'appitizersList');

  const imagesContainer = document.createElement('div');
  imagesContainer.setAttribute('class', 'images-container');

  const item1Container = document.createElement('div');
  item1Container.setAttribute('class', 'item-container');

  const app1 = document.createElement('h1');
  app1.setAttribute('id', 'app1');
  app1.setAttribute('class', 'text-center');
  app1.innerHTML = 'CHICKEN';
  item1Container.appendChild(app1);

  const appParagraph1 = document.createElement('p');
  appParagraph1.setAttribute('class', 'my-3 pb-3');
  appParagraph1.innerHTML = 'We use ALWAYS FRESH, NEVER EVER FROZEN® premium chicken breast tenderloins to make the most tender chicken fingers possible.';
  item1Container.appendChild(appParagraph1);

  const appImage1 = document.createElement('div');
  appImage1.setAttribute('id', 'app1');
  appImage1.style.backgroundImage = `url('imgs/chickenimg.jpg')`;
  item1Container.appendChild(appImage1);

  appList.appendChild(item1container);

  const item2Container = document.createElement('div');
  item2Container.setAttribute('class', 'item-container');

  const app2 = document.createElement('h1');
  app2.setAttribute('id', 'app2');
  app2.setAttribute('class', 'text-center');
  app2.innerHTML = 'BARBECUE';
  item1Container.appendChild(app2);

  const appParagraph2 = document.createElement('p');
  appParagraph2.setAttribute('class', 'my-3 pb-3');
  appParagraph2.innerHTML = 'Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce: - Spicy Texas BBQ sauce - Honey BBQ sauce';
  item1Container.appendChild(appParagraph2);

  const appImage2 = document.createElement('div');
  appImage2.setAttribute('id', 'app1');
  appImage2.style.backgroundImage = `url('imgs/barbecueimg.jpg')`;
  item1Container.appendChild(appImage2);

  appList.appendChild(item1container);
  
  const item3Container = document.createElement('div');
  item3Container.setAttribute('class', 'item-container');

  const app3 = document.createElement('h1');
  app3.setAttribute('id', 'app3');
  app3.setAttribute('class', 'text-center');
  app3.innerHTML = 'BARBECUE';
  item1Container.appendChild(app3);

  const appParagraph3 = document.createElement('p');
  appParagraph3.setAttribute('class', 'my-3 pb-3');
  appParagraph3.innerHTML = 'Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce: - Spicy Texas BBQ sauce - Honey BBQ sauce';
  item1Container.appendChild(appParagraph3);

  const appImage3 = document.createElement('div');
  appImage3.setAttribute('id', 'app3');
  appImage3.style.backgroundImage = `url('imgs/fishimg.jpg')`;
  item1Container.appendChild(appImage3);

  appList.appendChild(item1container);

  appContent.appendChild(appHeader);
  appContent.appendChild(appList);
  appContent.appendChild(imagesContainer);
  appContent.appendChild(appItens());

  return appContent;

};

export default Appitizers;

document.body.appendChild(Appitizers());

