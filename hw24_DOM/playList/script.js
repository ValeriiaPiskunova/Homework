"use strict";
import data from "./data.json" with {type: "json"};

let container = document.createElement("div");
let heading = document.createElement("h1");
let list = document.createElement("ol");

const listItems = data.map((item) => {
  let li = document.createElement("li");
  li.innerText = `Author: ${item.author}, Song: ${item.song}`;
  return li;
});

heading.innerText = "Play List";
listItems.forEach((item) => list.appendChild(item));
container.append(heading);
container.append(list);

document.body.append(container);
