// let checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

// // let conatainer = document.querySelector(".inbox");
// // let checkboxes = conatainer.querySelectorAll(`input[type="checkbox"]`);

// // console.log(checkboxes)


// let lastChecked;

// function checkClick(e){
//     //check if shift key is down
//     // And check that they are checking it
//     let inBetween = false;
//     if(e.shiftKey && this.checked){
//         //main task will be done here
//         // console.log(this);

//         //Loop over every checkboxes
//         checkboxes.forEach(checkbox => {
//             console.log(checkbox);
//             if(checkbox === this || checkbox === lastChecked) {
//                 inBetween = !inBetween;
//                 console.log("Hello");
//             }

//             if(inBetween){
//                 checkbox.checked = true;
//             }
//         });
//     }
//     // console.log(e)
//     // console.log(this)
//     // console.log(this.checked)
//     lastChecked = this;


// }

// checkboxes.forEach(checkbox => checkbox.addEventListener("click", checkClick));




// const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// let lastChecked;

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween && checkbox !== this) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));