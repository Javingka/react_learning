var names = ['gaby', 'javier', 'felipe'];

names.forEach( function(n) {
  console.log('for each', n);
})

names.forEach( (n) => {console.log('for each arrow', n)} );

names.forEach( (n) => console.log('short for each arrow', n) );

//=====//

var returnMe = (name) => name+'!';
console.log(returnMe('javier'));

//=====//

var person = {
  name: 'javier',
  greet: function(){
    names.forEach( function(_name){
      console.log(this.name + ' says hy to', _name)
    })
  }
}

/* arows functions have access to the 'this' of its parent  */
var personArrow = {
  name: 'javier',
  greet: function(){
    names.forEach( (_name) => {
      console.log(this.name + ' says hy to', _name)
    })
  }
}
person.greet();
personArrow.greet();

//=====//

//add anonnymous
function add (a, b) {
  return a+b;
}

//add Statement
var addS = (a,b) => { return a+b };
//add Expression
var addE = (a,b) => a+b;

console.log( 'add anonnymous', add(1,3));
console.log( 'add anonnymous', add(9,0));

console.log( 'add Statemet', addS(1,3));
console.log( 'add Statemet', addS(9,0));

console.log( 'add Expression', addE(1,3));
console.log( 'add Expression', addE(9,0));
