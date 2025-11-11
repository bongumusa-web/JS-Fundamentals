
const firstArg = process.argv[2];
const myNumber = parseInt(firstArg, 10); // convert to integer

if (!isNaN(myNumber)) {
    console.log("My number: " + myNumber);
} else {
    console.log("Not a number");
}
