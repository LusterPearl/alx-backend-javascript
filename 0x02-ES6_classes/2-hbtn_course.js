class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter for length attribute
  get length() {
    return this._length;
  }

  // Setter for length attribute
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter for students attribute
  get students() {
    return this._students;
  }

  // Setter for students attribute
  set students(newStudents) {
    this._students = newStudents;
  }
}

export default HolbertonCourse;
