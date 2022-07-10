const formData = JSON.parse(localStorage.getItem('formData')) || [];

loadData();

function loadData() {
    formData.forEach( (e) =>  {
        createCard(e);
    });
}

function createCard(data) {
    let html = `<div class="submit-history-card">
        <p class="card-first-name"><b>First name:</b> ${data[1]}</p><br>
        <p class="card-last-name"><b>Last name:</b> ${data[2]}</p><br>
        <p class="card-email"><b>Email:</b> ${data[3]}</p><br>
        <p class="card-phone"><b>Phone:</b> ${data[4]}</p><br>
        <p class="card-company"><b>Company:</b> ${data[5]}</p><br>
        <p class="card-address"><b>Address:</b> ${data[6]}</p><br>
        <button class="delete-button" id="${data[0]}" type="button">Delete</button>
        </div>`;

    document.querySelector('body').insertAdjacentHTML("beforeend", html);

    let delBtn = document.getElementById(`${data[0]}`);
    delBtn.addEventListener("click", (e) => deleteCard(e));
}

function deleteCard(e) {
    let id = e.target.id;
    let div = e.target.parentNode;
    let idx = formData.findIndex(e => e[0] == id);
    div.remove();
    formData.splice(idx, 1);
    localStorage.setItem('formData', JSON.stringify(formData));
}