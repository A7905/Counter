// let t3=performance.now();
// let fragment=document.createDocumentFragment();
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent='This is para '+i;

//     fragment.appendChild(para);
// }

// document.body.appendChild(fragment);
// let t4=performance.now();

// console.log(t4-t3);

// const t1=performance.now();
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent='This is para '+i;

//     document.body.appendChild(para);
// }
// const t2=performance.now();
// console.log(t2-t1);

// var a=()=>{
//     let b=2;
//     return b*2;
// };
// console.log(a());
// const greet = (name = "stranger") => `Hello, ${name}!`;

// console.log(greet()); // Outputs: Hello, stranger!
// console.log(greet("Alice")); // Outputs: Hello, Alice!

// let waada1= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Hey buddy 1");
//     },2000);
//     resolve(true);
// })

// waada1.then(
//      ()=>{
//         let waada2=new Promise(function(resolve, reject){
//             setTimeout(()=>{
//                 console.log("Hey Buddy 2");
//             },3000);
//             resolve(9000);
//         })
//         return waada2;
//     }
// ).then((value)=>{ console.log(value)})







const content=document.querySelector("#content");
let inc= () =>{
       
        let integer=parseInt(content.textContent);
        integer=integer+1;
        content.textContent=integer;
}

let dec=()=>{
    let integer=parseInt(content.innerText);
    if(integer>0){
        integer=integer-1;
        content.innerText=integer;
    }
    else{
        alert("You have exceed the counter. Thank You!")
    }
    
}