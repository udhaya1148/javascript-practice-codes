//ES modules

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

export {add, sub}; // named export ---> many per file

function mul(a,b){
    return a*b;
}
export default mul;   // default export ---> only one per file