"use strict";

window.addEventListener("load", app);

let rooms = [];

function app() {
    console.log("hello");

    document
        .querySelector("#create-room-form")
        .addEventListener("submit", createRoom);
}

function createRoom(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const width = Number(form.width.value);
    const length = Number(form.length.value);
    const area = length * width;

    rooms.push({ name, width, length, area });
    console.log(rooms);

    showRooms(rooms);
}

function showRooms(rooms) {
    document.querySelector("#rooms-table").innerHTML = "";

    for (const room of rooms) {
        const html = /*html*/ `
        <tr>
            <td>${room.name}</td>
            <td>${room.width}</td>
            <td>${room.length}</td>
            <td>${room.area}</td>
        <tr>

        `;

        document
            .querySelector("#rooms-table")
            .insertAdjacentHTML("beforeend", html);
    }
}

function sortRooms(sortBy) {
    switch (sortBy) {
        case "width":
            rooms.sort((b, a) => a.width - b.width);
            break;
        case "length":
            rooms.sort((b, a) => a.length - b.length);
            break;
        case "area":
            rooms.sort((b, a) => a.area - b.area);
            break;

        default:
            break;
    }

    showRooms(rooms);
}
