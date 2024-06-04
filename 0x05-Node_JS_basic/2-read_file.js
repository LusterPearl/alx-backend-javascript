// Display the welcome message
const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data by new lines
    const lines = data.trim().split('\n');

    // Remove the header line
    lines.shift();

    // Initialize counters and storage for each field
    const fields = {};

    // Process each line
    lines.forEach((line) => {
      if (line.trim()) {
        const [firstname, lastname, age, field] = line.split(',');

        // Initialize the field if it doesn't exist
        if (!fields[field]) {
          fields[field] = [];
        }

        // Add the student to the appropriate field
        fields[field].push(firstname);
      }
    });

    // Count the total number of students
    const totalStudents = Object.values(fields).reduce((acc, students) => acc + students.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Print the number of students in each field
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
