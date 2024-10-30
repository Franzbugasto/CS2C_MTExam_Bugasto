// Define arrays for each subject
const DSA = [];
const PL = [];
const Networks = [];

// Function to display the menu options
function mainMenu() {
    return prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit");
}

// Function to display operations menu
function operationsMenu(subject) {
    return prompt(`You selected ${subject}. Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`);
}

// Function to enroll a student in a given subject array
function enrollStudent(subjectArray) {
    const studentName = prompt("Enter the name of the student to enroll:");
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled in the selected subject.`);
}

// Function to unenroll a student from a given subject array
function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students are enrolled in this subject.");
        return;
    }

    console.log("Currently enrolled students:", subjectArray.join(", "));
    const studentName = prompt("Enter the name of the student to unenroll:");
    const index = subjectArray.indexOf(studentName);

    if (index !== -1) {
        subjectArray.splice(index, 1);
        console.log(`${studentName} has been unenrolled.`);
    } else {
        console.log("Student not found in this subject.");
    }
}

// Main program loop
let running = true;

while (running) {
    const subjectChoice = mainMenu();

    let currentSubject = null;
    let subjectArray = null;

    if (subjectChoice === "A") {
        currentSubject = "DSA";
        subjectArray = DSA;
    } else if (subjectChoice === "B") {
        currentSubject = "PL";
        subjectArray = PL;
    } else if (subjectChoice === "C") {
        currentSubject = "Networks";
        subjectArray = Networks;
    } else if (subjectChoice === "D") {
        // Exit and print all students in each subject
        console.log("DSA students:", DSA);
        console.log("PL students:", PL);
        console.log("Networks students:", Networks);
        running = false;
        continue;
    } else {
        console.log("Invalid choice. Try again.");
        continue;
    }

    let subjectMenuRunning = true;

    while (subjectMenuRunning) {
        const operationChoice = operationsMenu(currentSubject);

        if (operationChoice === "A") {
            enrollStudent(subjectArray);
        } else if (operationChoice === "B") {
            unenrollStudent(subjectArray);
        } else if (operationChoice === "C") {
            subjectMenuRunning = false; // Go back to the subject selection menu
        } else if (operationChoice === "D") {
            console.log("DSA students:", DSA);
            console.log("PL students:", PL);
            console.log("Networks students:", Networks);
            running = false;
            subjectMenuRunning = false; // Exit the program
        } else {
            console.log("Invalid choice. Try again.");
        }
    }
}
