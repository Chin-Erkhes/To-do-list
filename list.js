const input = document.getElementById("inp");
const button = document.getElementById("but");
const contain = document.getElementById("container");
const paragraph = document.getElementById("edit");
const editButton = document.getElementById("editbutton");
const endButton = document.getElementById("endediting");
const cont = document.getElementsByTagName("body");

function list() {
  if (input.value == "") {
    alert("ym bichne u");
  } else {
    const element = document.createElement("div");
    element.innerHTML = input.value;
    element.className = "back";
    const threeElement = document.createElement("div");
    const img = document.createElement("img");
    const edit = document.createElement("img");
    // const done = document.createElement("img");
    const label = document.createElement("label");
    const inputTag = document.createElement("input");
    const span = document.createElement("span");
    label.appendChild(inputTag);
    label.appendChild(span);
    element.append(label);
    label.className = "cl-checkbox";
    inputTag.type = "checkbox";
    input.checked = "";

    edit.src = "./icons8-edit-32.png";
    img.src = "./icons8-trash-24.png";
    // done.src = "./icons8-done-24.png";
    threeElement.appendChild(edit);
    threeElement.appendChild(img);
    threeElement.appendChild(label);
    element.appendChild(threeElement);
    threeElement.className = "threeElement";
    edit.style.height = "20px";
    edit.style.width = "20px";
    // done.style.height = "20px";
    // done.style.width = "20px";
    img.style.height = "20px";
    img.style.margin = "10px";
    edit.className = "inputGroup";
    element.style.alignItems = "center";
    edit.style.padding = "5px";
    element.style.padding = "5px";
    element.style.display = "flex";
    contain.appendChild(element);
    label.addEventListener("click", function () {
      element.style.width = "13.5vw";
      element.style.height = "40px";
      element.style.background = "#f1f1f1";
      element.style.background - image;
      edit.style.pointerEvents = "none";
    });
    edit.addEventListener("click", function () {
      const editButton1 = document.createElement("input");
      const el = document.createElement("div");
      const svg = document.createElement("svg");
      const g = document.createElement("g");
      const path = document.createElement("path");
      el.appendChild(svg, g, path);
      el.tabIndex = "0";
      el.className = "plusButton";
      svg.className = "plusIcon";
      svg.xmlns = "http://www.w3.org/2000/svg";
      svg.viewBox = "0 0 30 30";
      g.mask = "url(#mask0_21_345)";
      path.d =
        "M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z";
      element.appendChild(el);
      const eb = document.createElement("div");
      const stylish = document.createElement("div");
      stylish.appendChild(editButton1);
      stylish.className = "textInputWrapper";
      eb.className = "editButton";
      editButton1.className = "textInput";
      element.appendChild(stylish);

      eb.appendChild(el);
      eb.appendChild(editButton1);

      element.appendChild(eb);
      el.addEventListener("click", function () {
        element.innerHTML = editButton1.value;
        element.appendChild(edit);
        element.appendChild(img);
        element.appendChild(label);
      });
    });
    img.addEventListener("click", function () {
      element.remove();
    });

    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedTime = formatter.format(date);
    console.log(formattedTime);
  }
}

button.onclick = list;

// const element = document.createElement("h1");
// element.innerHTML = text;
// body.appendChild(element);
