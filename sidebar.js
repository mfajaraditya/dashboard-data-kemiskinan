let dashboard = document.querySelector("#dashboard");
let table = document.querySelector("#table");

dashboard.onclick = function () {
  dashboard.className = "select-active-dashboard";
  table.className = "select-active";
};
table.onclick = function () {
  dashboard.className = "select-active";
  table.className = "select-active-dashboard";
};
