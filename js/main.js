const calculator = document.querySelector('#button');
calculator.addEventListener('click', calculate)



function calculate (){
 
    let p = parseInt(document.querySelector("#principal").value);
    let r = parseInt(document.querySelector("#rate").value);
    let t = parseInt(document.querySelector("#time").value);

    let result = (p * r * t) / 100;
    document.querySelector("#result").innerText = `Your simple interest is $${result}`;
}

// This is to work on the input event listener

const p =document.querySelector('#principal');
const r = document.querySelector('#rate');
const t = document.querySelector('#time');

values = {}; 
// for(let  names of [p, r, t]){
//     names.addEventListener('input', function(e){
//         values[names] = this.value;  
//     })
// };
p.addEventListener('input', function(e){
   values['principal'] = this.value; 
})
r.addEventListener('input', function(e){
    values['rate'] = this.value; 
})
t.addEventListener('input', function(e){
    values['time'] = this.value; 
})

  