// Saves options to localStorage.
function save_options() {

  // delete all localStorage first
  localStorage.clear();

  var select = document.getElementById("color");
  var color = select.children[select.selectedIndex].value;
  localStorage["settings_color"] = color;

  var select = document.getElementById("width");
  var width = select.children[select.selectedIndex].value;
  localStorage["settings_width"] = width;

  var select = document.getElementById("keys");
  var keys = select.children[select.selectedIndex].value;
  localStorage["settings_keys"] = keys;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var color = localStorage["settings_color"];
  var width = localStorage["settings_width"];
  var keys  = localStorage["settings_keys"];

  if (!color || !width || !keys) {
    return;
  }

  var select = document.getElementById("color");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == color) {
      child.selected = "true";
      break;
    }
  }

  var select = document.getElementById("width");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == width) {
      child.selected = "true";
      break;
    }
  }

  var select = document.getElementById("keys");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == keys) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);