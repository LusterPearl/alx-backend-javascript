const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the promise with an error if the file can't be read
        reject(new Error('Cannot load the database'));
      } else {
        // Process the file data
        const lines = data.split('\n').filter(line => line.trim() !== '');
        const numberOfStudents = lines.length - 1; // Exclude the header line
        console.log(`Number of students: ${numberOfStudents}`);

        const fields = {};
        
        lines.slice(1).forEach(line => {
          const [firstname, lastname, age, field] = line.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(firstname);
        });

        for (const [field, students] of Object.entries(fields)) {
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
