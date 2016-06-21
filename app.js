var provided = 'Hello World!';

//step 1
console.log(provided.charAt(1).length);

//step 2
console.log(Number(provided));

//step 3
console.log(provided.substring(0,5).split(''));

//step 4
console.log(typeof provided);

//step 5
console.log(provided.substring(0,9).length);

//step 6
console.log(provided.charAt(1));

//step 7
console.log(provided.toUpperCase());

//step 8
console.log(provided.replace("!","?"));

//step 9 Hard Mode
console.log(provided.substring(0,5).replace("H","\'"));

//step 10
console.log(provided.split('').reverse().join(''));

//step 11
console.log(provided.replace('!','').length.toString().repeat(2));

//step 12
console.log(provided.split(' '));
