// Defien the interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two students
const student1: Student = {
   firstName: "Tosin",
   lastName: "Adedoyin",
   age: 27,
   location: "Abuja", 
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

// Create an array containing the two students
const studentList: Student[] = [student1, student2];

// Render a table using Vanilla Javascript
const table = document.createElement("table");
const thead = table.createTHead();
const headerRow = thead.insertRow();
headerRow.insertCell().textContent = "First Name";
headerRow.insertCell().textContent = "Location";

const tbody = table.createTBody();
studentList.forEach((student) => {
    const row = tbody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

document.body.appendChild(table);