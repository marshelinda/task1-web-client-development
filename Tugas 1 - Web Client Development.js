function areaOfRectangle(length, width) {
    return length * width;
}

function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    return { diameter, circumference, area };
}

function thirdAngleOfTriangle(angle1, angle2) {
    return 180 - (angle1 + angle2);
}

function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
}

function nameInitials(name) {
    return name.split(" ").map(word => word[0].toUpperCase()).join("");
}

// Contoh Penggunaan
console.log("Area of rectangle:", areaOfRectangle(5, 3));
let circle = circleProperties(5);
console.log(`Circle - Diameter: ${circle.diameter}, Circumference: ${circle.circumference.toFixed(4)}, Area: ${circle.area.toFixed(4)}`);
console.log("Third angle of triangle:", thirdAngleOfTriangle(80, 65));
console.log("Date difference:", dateDifference("2024-03-19", "2024-03-21"));
console.log("Name initials:", nameInitials("Marshelinda Rukmana"));