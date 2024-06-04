// display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read user input
process.stdin.setEncoding('utf8');

// Listen for data(user input)
process.stdin.on('data', (input) => {
  // remove any trailing newline character from the input
  const name = input.trim();

  // DIsplay the user name
  console.log(`Your name is: ${name}`);

// listen for the end event to display closing message
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
