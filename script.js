document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push({ firstName, lastName, email, phone, company });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    alert('Contact added successfully!');
    document.getElementById('contact-form').reset();
});

window.addEventListener('DOMContentLoaded', (event) => {
    const contactsTableBody = document.querySelector('#contacts-table tbody');
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(contact => {
        const row = contactsTableBody.insertRow();
        row.insertCell(0).textContent = contact.firstName;
        row.insertCell(1).textContent = contact.lastName;
        row.insertCell(2).textContent = contact.email;
        row.insertCell(3).textContent = contact.phone;
        row.insertCell(4).textContent = contact.company;
    });
});