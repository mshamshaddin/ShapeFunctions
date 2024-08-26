//get area of circle
function getAreaofCircle(radius){
    const area = Math.PI * radius * radius;
    return area;
}
let area = getAreaofCircle(5);
console.log(`${area} is the area of the circle.`);

//get circumference of circle
function getCircumferenceOfCircle(radius){
    const circumference = 2 * Math.PI * radius;
    return circumference;
}
let circumference = getCircumferenceOfCircle(5);
console.log(`${circumference} is the circumference of the circle.`);

//get area of squre based on side length
function getAreaOfSquare(side) {
    const area2 = side * side;
    return area2;
}
let area2 = getAreaOfSquare(7);
console.log(`${area2} is the area of square.`);

//get area of triangle
function getAreaOfTriangle(base,height){
    const area3 = (base * height)/2;
    return area3;
}
let area3 = getAreaOfTriangle(3, 3);
console.log(`${area3} is the area of the triangle`);