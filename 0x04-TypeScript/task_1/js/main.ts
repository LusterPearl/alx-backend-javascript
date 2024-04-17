// Define the Teacher interface
interface Teacher {
firstName: string;
lastName: string;
readonly fullTimeEmployee: boolean;
yearsOfExperience: number;
readonly location: string;
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
const teacher3: Teacher = createTeacher("Mary", "Doe", false, "London", ["contract", false]);

console.log(teacher3);

// Define the Directors interface extending teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// Create a Director object
const director1: Directors = {
    firstName: 'Paul',
    lastName: 'Peter',
    location: 'Austraila',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

//  Create print Teacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

// Test the function
console.log(printTeacher('Paul', 'Peter'));

// Define the interface for the StudentClass construcrtor
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

// Define the interface for the StudentClass
interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Implent the StudentClass
const StudentClass: StudentClassConstructor = class implements StudentClass {
    constructor(private firstName: string, private lastName: string) {}
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  };

  // Test the class
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());
  