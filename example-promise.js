/*
function getTempCallBack( location, callback) {
  
  callback(undefined, 78);
  callback('City not found');

}

getTempCallBack('Sao Paulo', function(err, temp){
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp )
  }
});

function getTempPromise(location){

  return new Promise( function(resolve, reject) {
    setTimeout(function (){
      reject('City not found')
      resolve(79);
    }, 1000);
  });
}

getTempPromise('Sao Paulo').then( function(temp){
   console.log('promise success', temp);
}, function(err){
   console.log('promise error', err);
});
*/

function addPromise(a,b){

  return new Promise( function(resolve, reject){
    if ( typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('ERROR');
    }
  });
}

addPromise(3,5).then( resolvePromise, rejectPromise);
addPromise('5', 4).then( resolvePromise, rejectPromise);


function resolvePromise(r) {
  console.log( 'sum result: ', r);
}
function rejectPromise(err){
  console.log(err+' | Some parameter is not a number')
}


