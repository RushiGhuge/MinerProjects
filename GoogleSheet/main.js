// let starts the main code of Google sheet
// add all globle veriable here only 
const sheetHeader = document.querySelector("#sheet-header");
const sheetBody = document.querySelector("#sheet-body");

// let activeCell = null;   // the activeCell is store the id of active or focused cell
// let add the rows and coloums in sheets...
// add alfabets also...
function apeendRowsAndColoums() {
  for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);
    let bold = document.createElement("b");
    bold.innerText = char;
    sheetHeader.appendChild(bold);
  }
  //   lets creata a rows
  for (let i = 1; i <= 100; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 64; j <= 90; j++) {
      if (j == 64) {
        // serial numbers
        let box = document.createElement("div");
        box.classList.add("box");
        box.draggable = true;
        box.classList.add("sr-no");
        box.innerText = i;
        row.appendChild(box);
      } else {
        // boxs
        let char = String.fromCharCode(j);
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = `${char}${i}`;
        box.addEventListener("focus", ceilInFocus);
        box.contentEditable = true;
        // let circul = document.createElement('div')
        // box.appendChild(circul)
        row.appendChild(box);
      }
    }
    sheetBody.appendChild(row);
  }
}


// // this is run when user focus the ceit or box
// // we have unique id for each box
// function ceilInFocus(e) {
//   fouceId.innerText = e.target.id; //  this is id or each boc whic is unique
// }

apeendRowsAndColoums();



