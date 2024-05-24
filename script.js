const dog=[{name:'Snickers',age:2},{name:'hugo',age:8}];

function makeGreen() {
    const p=document.querySelector('p');
    p.style.color='#BADA55';
    p.style.fontSize='50px';
}


// Regular
console.log("hello");

// Interpolated
console.log('Hello I am a %s string!','💩' );

// Styled
console.log('%c I am some great text','font-size:50px;background:red;text-shadow:10px 10px 0 blue')

// warning!
console.warn(`OH NOO0`);

// error
console.error(`Shit!`);


// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p=document.querySelector('p');
console.assert(p.classList.contains('ouch'),'This is wrong!');

// clearing
console.clear();


// viewing DOM Elements
console.log(p);
console.dir(p);

// grouping together
dog.forEach(dog=>{
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age *7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Sonu');
console.count('Wes');
console.count('Sonu');
console.count('Wes');
console.count('Sonu');
console.count('Wes');
console.count('Sonu');

// timing
// console.time(`fetching data`);
// fetch('http://api.gethub.com/users/wesbos')
// .then(data=>data.json())
// .then(data=>{
//     console.timeEnd(`fetching data`);
//     console.log(data);
// });
// console.table(dogs);




