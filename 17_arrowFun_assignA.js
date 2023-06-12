console.log(`Arrow function with no arguments and no return value`);
let msg = ()=> {
    console.log(`Good Morning, Today is Monday`);
}
msg();

console.log(`----------------------------------------------------`);


console.log(`Arrow function with arguments and no return value`);
let show = (id, name) => {
    console.log(`ID: ${id} Name: ${name}`);
    console.log(`Inside show function ...`);
}
show(22, "Bill");