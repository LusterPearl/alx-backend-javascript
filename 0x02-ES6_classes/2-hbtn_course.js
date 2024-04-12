class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Getter for name attribute
  get name() {
    return this.name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this.name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this.length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this.length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students attribute
  get students() {
    return this.students;
  }

  // Setter for students attribute
  set students(newStudents) {
    this.students = newStudents;
  }
}

export default HolbertonCourse;
