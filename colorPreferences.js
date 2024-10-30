// Initialize an array to store colors
let colorPreferences = [];
// Function to get user input and update array
function addColor() {
    let color = prompt("Enter a color:");
    colorPreferences.push(color);
    console.log("Updated Color Preferences:", colorPreferences);
}
// Example usage - add three colors
for (let i = 0; i < 3; i++) {
    addColor();
}
