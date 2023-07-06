const inputs = document.querySelectorAll('.controls input');
// console.log(inputs);

function handleUpdate() {

    // console.log(this.value);
  const suffix = this.dataset.sizing || '';
//   console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//For Understanding 
// inputs.forEach(event1);
// inputs.forEach(event2);

// function event1(){
//     for (let i=0; i< inputs.length; i++){
//         inputs[i].addEventListener("change", handleUpdate)
//     }
// }

inputs.forEach(node => node.addEventListener("change", handleUpdate));
inputs.forEach(node => node.addEventListener("mousemove", handleUpdate));


// function event2(){
//     for (let i=0; i< inputs.length; i++){
//         inputs[i].addEventListener("mousemove", handleUpdate)
//     }
// }

