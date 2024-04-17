// Define the Teacher interface
interface Teacher {
firstName: string;
lastName: string;
readonly fullTimeEmployee: boolean;
yearsOfExperience: number;
readonlylocation: string;
[key: string]: any;
}

//Create a function to create a teacher object
function createTeacher(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, ...args: [string, any][]): Teacher {
   const teacher: Teacher = { firstName, lastName, fullTimeEmployee, location };

   args.forEach(([key, value]) => {
    teacher[key] = value;
   });

   return teacher;
} 

// Create a Teacher object
const techer3: Teacher = createTeacher("Mary", "Doe", false, "London", ["contract", false]);

console.log(techer3);
