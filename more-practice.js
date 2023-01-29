for (var i = 0; i < 39; i++) {
    console.log ("I feel bad today");
}

var i = 0;
while (i < 39) {
    console.log (i);
    i++;
}

var i = 58;
while (i <= 98) {
    console.log (i);
    i++;
}

for (var i = 412; i <= 456; i+=2) {
    console.log (i);
}

for (var i = 581; i <= 623; i+=2) {
    console.log (i);
}

var myLearnings = ["HTML", "CSS", "BOOTSTRAP", "TAILWIND", "JAVASCRIPT"];
for (i = 0; i < myLearnings.length; i++) {
    var learning = myLearnings[i];
    console.log (learning);
}

var myUseMobilePhone = ['Nokia', 'Samsung', 'Symphony', 'i-Mobile', 'etc'];

var i = 0;
while (i < myUseMobilePhone.length) {
    var useMobile = myUseMobilePhone[i];
    console.log (useMobile);
    i++;
}

for (var i = 30; i <= 86; i++) {
    if (i == 44) {break;}
    console.log (i);
}

var bookPrices = [344, 222, 200, 123, 111, 100, 432, 443, 22, 45, 22, 55, 124, 333, 390, 20];
for (var i = 0; i < bookPrices.length; i++) {
    var bookPrice = bookPrices[i];
    if (bookPrice >= 200) {continue;}
    console.log (bookPrice);
}