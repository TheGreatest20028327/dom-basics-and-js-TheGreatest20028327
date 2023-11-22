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

  const appItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');

    const app1 = document.createElement('h1');
    app1.setAttribute('id', 'app1');
    app1.setAttribute('class', 'text-center');
    app1.innerHTML = 'CHICKEN';
    list.appendChild(app1);

    const appParagraph1 = document.createElement('p');
    appParagraph1.setAttribute('class', 'my-3 pb-3');
    appParagraph1.innerHTML = 'We use ALWAYS FRESH, NEVER EVER FROZEN® premium chicken breast tenderloins to make the most tender chicken fingers possible.';
    list.appendChild(appParagraph1);

    const app2 = document.createElement('h1');
    app2.setAttribute('id', 'app2');
    app2.setAttribute('class', 'text-center');
    app2.innerHTML = 'BARBECUE';
    list.appendChild(app2);

    const appParagraph2 = document.createElement('p');
    appParagraph2.setAttribute('class', 'my-3 pb-3');
    appParagraph2.innerHTML = 'Full Rack. Slow-cooked to fall off the bone tenderness. Slathered with your choice of sauce: - Spicy Texas BBQ sauce - Honey BBQ sauce';
    list.appendChild(appParagraph2);

    const app3 = document.createElement('h1');
    app3.setAttribute('id', 'app3');
    app3.setAttribute('class', 'text-center');
    app3.innerHTML = 'FISH';
    list.appendChild(app3);

    const appParagraph3 = document.createElement('p');
    appParagraph3.setAttribute('class', 'my-3 pb-3');
    appParagraph3.innerHTML = 'Blackened salmon fillet grilled to perfection. 6 oz. Served with your choice of two sides.';
    list.appendChild(appParagraph3);

    const appImage1 = document.createElement('div');
    appImage1.setAttribute('id', 'app1');
    appImage1.style.backgroundImage = `url('${chickenImage}')`;
    imagesContainer.appendChild(appImage1);

    const appImage2 = document.createElement('div');
    appImage2.setAttribute('id', 'app2');
    appImage2.style.backgroundImage = `url('${barbecueImage}')`;
    imagesContainer.appendChild(appImage2);

    const appImage3 = document.createElement('div');
    appImage3.setAttribute('id', 'app3');
    appImage3.style.backgroundImage = `url('${fishImage}')`;
    imagesContainer.appendChild(appImage3);

    return list;
  };

  appContent.appendChild(appHeader);
  appContent.appendChild(appList);
  appContent.appendChild(imagesContainer);
  appContent.appendChild(appItems());

  return appContent;
};

export default Appitizers;
