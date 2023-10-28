const home = () => {
    let content = document.querySelector('div.content');

    let info = document.createElement('div');
    content.appendChild(info);
    info.classList.add('info');

    let headline = document.createElement('div');
    info.appendChild(headline);
    headline.classList.add('headline');
    headline.textContent = "Delicious Sushi Since 1999";

    let image = document.createElement('div');
    info.appendChild(image);
    image.classList.add('image');

    let order = document.createElement('button');
    info.appendChild(order);
    order.textContent = 'Order Now';
    order.classList.add('order-btn');
}

export { home };