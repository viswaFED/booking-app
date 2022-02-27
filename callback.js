var obj={num:12};
var obj2={num:5};
var addToThis=function(a,b,c){
    return this.num+a+b+c;
};
console.log(addToThis.call(obj,5,1,2));

var arr=[1,20,3];
console.log(addToThis.apply(obj,arr));
var bound=addToThis.bind(obj);

console.log(bound(1,20,3));

var student={age:20};
var functionAGe=function(){
    return this.age;
};
var bound1=functionAGe.bind(student);
console.log(bound1());