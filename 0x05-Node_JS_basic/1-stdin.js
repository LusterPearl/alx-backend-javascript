// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
process.stdin.setEncoding('utf8');

// Listen for data (user input)
process.stdin.on('data', (input) => {
  // Remove any trailing newline characters from the input
  const name = input.trim();

  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Explicitly end the process to trigger the 'end' event
  process.stdin.emit('end');
});

// Listen for the 'end' event to display the closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
