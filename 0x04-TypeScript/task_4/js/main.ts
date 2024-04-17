// Import necessary classes and interfaces
import { Subjects } from "./subjects/Subject";
import { Teacher } from "./subjects/Teacher";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";

// Create and export constants for Cpp, Java, and React Subjects
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Teacher = { firstName: "Guillaume", lastName: "Salva", experienceTeachingC: 10 };

// For Cpp subject
cpp.setTeacher(cTeacher);
console.log("C++");
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
java.setTeacher(cTeacher);
console.log("Java");
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
react.setTeacher(cTeacher);
console.log("React");
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());