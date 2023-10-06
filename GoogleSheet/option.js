// this is a option file -->
// put the all aption code here -->
const fontS = document.getElementById("fontSmall");
const fontM = document.getElementById("fontMore");
const fontSize = document.getElementById("fontSizeDisplay");
const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underlineBtn");
const print = document.getElementById('print');

const fouceId = document.querySelector("#fouceId");
let activeCell = null; // the activeCell is store the id of active or focused cell

// intialoptionState of ceil
const intialOptionState = {
  fontFamily: "",
  isBoldSelected: "false",
  isItalicSelected: "false",
  isUnderlineSelected: "false",
  textAlign: "left",
  textColor: "#000",
  backgroundColor: "white",
  fontSize: 16,
};
// created active option state ... globle
let activeOptionState;

function defaultOptionSelectsOnFouce() {
  // console.log(activeCell.classList);

  // bold btn code
  if (activeOptionState.isBoldSelected) {
    if (!boldBtn.classList.contains("active-option")) {
      boldBtn.classList.add("active-option");
    }
  } else {
    boldBtn.classList.remove("active-option");
  }

  //italic btn code
  if (activeOptionState.isItalicSelected) {
    if (!italicBtn.classList.contains("active-option")) {
      italicBtn.classList.add("active-option");
    }
  } else {
    italicBtn.classList.remove("active-option");
  }

  //underline btn code
  if (activeOptionState.isUnderlineSelected) {
    if (!underlineBtn.classList.contains("active-option")) {
      underlineBtn.classList.add("active-option");
    }
  } else {
    underlineBtn.classList.remove("active-option");
  }

  //text align...
  activeAlign(activeOptionState.textAlign);
}

// this is run when user focus the ceit or box
// we have unique id for each box
function ceilInFocus(e) {
  if (activeCell && activeCell.id === e.target.id) {
    return;
  }

  activeCell = e.target;
  fouceId.innerText = e.target.id; //  this is id or each boc whic is unique

  let computedStyle = getComputedStyle(activeCell);
  activeOptionState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight == 600,
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderlineSelected: computedStyle.textDecoration === "underlined",
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.background,
    fontSize: computedStyle.fontSize,
  };

  fontSize.innerText = Number(activeOptionState.fontSize.replace("px", ""));


  defaultOptionSelectsOnFouce();
}

function toggleBold(boldBtn) {
  // this function is trigger on when user click on the bold btn...
  // toggle the active class
  boldBtn.classList.toggle("active-option");
  const currentCeil = document.getElementById(activeCell);
  if (activeCell) {
    if (activeOptionState.isBoldSelected) {
      // bold to regular
      activeOptionState.isBoldSelected = false;
      activeCell.style.fontWeight = 400;
    } else {
      // regular to bold
      activeOptionState.isBoldSelected = true;
      activeCell.style.fontWeight = 600;
      console.log(activeOptionState);
    }
  }
}

function toggleItalic(italicBtn) {
  // this function is trigger on when user click on the bold btn...
  // toggle the active class
  italicBtn.classList.toggle("active-option");
  const currentCeil = document.getElementById(activeCell);
  if (activeCell) {
    if (activeOptionState.isItalicSelected) {
      // bold to regular
      activeOptionState.isItalicSelected = false;
      activeCell.style.fontStyle = "normal";
    } else {
      // regular to bold
      activeOptionState.isItalicSelected = true;
      activeCell.style.fontStyle = "italic";
    }
  }
}

function toggleUnderline(underlineBtn) {
  // this function is trigger on when user click on the bold btn...
  // toggle the active class
  underlineBtn.classList.toggle("active-option");
  const currentCeil = document.getElementById(activeCell);
  if (activeCell) {
    if (activeOptionState.isUnderlineSelected) {
      // bold to regular
      activeOptionState.isUnderlineSelected = false;
      activeCell.style.textDecoration = "none";
    } else {
      // regular to bold
      activeOptionState.isUnderlineSelected = true;
      activeCell.style.textDecoration = "underline";
    }
  }
}

function activeAlign(align) {
  let textAlign = document.querySelectorAll(".text-align");
  for (let i = 0; i < textAlign.length; i++) {
    if (textAlign[i].getAttribute("data-value") === align) {
      textAlign[i].classList.add("active-option");
    } else {
      textAlign[i].classList.remove("active-option");
    }
  }
}

function toggleTextAlign(align) {
  const currentCeil = document.getElementById(activeCell);
  let selectedAlign = align.getAttribute("data-value");
  activeAlign(selectedAlign);
  activeCell.style.textAlign = selectedAlign; // update the DOM
  activeOptionState.textAlign = selectedAlign; // update the state
}

function textColor(color) {
  activeCell.style.color = color.value;
  activeOptionState.color = color.value;
}

function backgroundColor(bg) {
  activeCell.style.background = bg.value;
  activeOptionState.background = bg.value;
}

function fontSelect(font) {
  activeCell.style.fontFamily = font.value;
}

function fontSizeChange(fontSize) {
  activeCell.style.fontSize = `${fontSize.innerText}px`;
}

// font size change functions
function fontSmall() {
  if (Number(fontSize.innerText) > 6) {
    fontSize.innerHTML = Number(fontSize.innerText) - 1;
  } else {
    return;
  }
  fontSizeChange(fontSize);
}
function fontMore() {
  fontSize.innerHTML = Number(fontSize.innerText) + 1;
  fontSizeChange(fontSize);
}

// undo Btn
document.getElementById('undoBtn').addEventListener('click', function() {
  // Simulate Ctrl + Z using execCommand
  document.execCommand('undo', false, null);
});

//redo btn
document.getElementById('redoBtn').addEventListener('click', function() {
  // Simulate Ctrl + Z using execCommand
  document.execCommand('redo', false, null);
});

// print
print.addEventListener('click',() => {

})