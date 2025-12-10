const colors = ["blue", "yellow", "green"];

for (let i = 0; i < colors.length; i++) {
  const button = document.createElement("button");
  button.textContent = colors[i].charAt(0).toUpperCase() + colors[i].slice(1);
  button.style.backgroundColor = colors[i];
  button.style.color = "white";
  button.style.margin = "5px";
  document.body.appendChild(button);
}
