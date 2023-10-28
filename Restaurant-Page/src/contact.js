const contact = () => {
    let content = document.querySelector('div.content');

    let contact = document.createElement('div');
    content.appendChild(contact);
    contact.classList.add('contact-info');

    let address = document.createElement('div');
    contact.appendChild(address);
    address.textContent = 'Address: 123 Main Street, City, State';

    let phone = document.createElement('div');
    contact.appendChild(phone);
    phone.textContent = 'Phone: (555) 666 - 7777';
}

export { contact };