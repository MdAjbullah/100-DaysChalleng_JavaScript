function mixColors(color1, color2) {
    let resultingColor;
    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    resultingColor = 'purple';
                    break;
                case 'yellow':
                    resultingColor = 'orange';
                    break;
                default:
                    resultingColor = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    resultingColor = 'purple';
                    break;
                case 'yellow':
                    resultingColor = 'green';
                    break;
                default:
                    resultingColor = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    resultingColor = 'orange';
                    break;
                case 'blue':
                    resultingColor = 'green';
                    break;
                default:
                    resultingColor = 'Invalid color combination';
            }
            break;
        default:
            resultingColor = 'Invalid color combination';
    }
    console.log(resultingColor);
}


mixColors('red', 'blue');    // Output: purple
mixColors('red', 'yellow');  // Output: orange
mixColors('blue', 'yellow'); // Output: green
mixColors('green', 'yellow');// Output: Invalid color combination





// highest marka
// **********************************************************************


function findHighestMarks(marks) {
    let highestMarks = marks.reduce((max, current) => max > current ? max : current);
    console.log("The highest marks scored by any student is: " + highestMarks);
}


const marks = [85, 90, 78, 92, 88];
findHighestMarks(marks);  // Output: The highest marks scored by any student is: 92











// **********************************************************************
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}


let userName = "john";
let modifiedName = userName.charAt(0).toUpperCase() === userName.charAt(0) ? userName : capitalizeName(userName);
console.log(modifiedName); // Output: "John"

userName = "Mary";
modifiedName = userName.charAt(0).toUpperCase() === userName.charAt(0) ? userName : capitalizeName(userName);
console.log(modifiedName); // Output: "Mary"




// ***********************************************************************************

function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            count++;
        }
    }

    return count;
}

// Example usage:
const name = "John Doe";
console.log("Number of vowels in the name:", countVowels(name)); // Output: 3





// ************************************************************************************
function removeDuplicates(cart) {
    return Array.from(new Set(cart));
}

// Example usage:
const customerCart = ['item1', 'item2', 'item1', 'item3', 'item2'];
const uniqueCart = removeDuplicates(customerCart);
console.log("Customer's unique cart:", uniqueCart);



