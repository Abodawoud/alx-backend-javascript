export default class HolbertonCourse {

  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    function checkStudentsType(student) {
      return typeof student === 'string';
    }
    if (!(Array.isArray(students) && students.every(checkStudentsType))) {
      throw new TypeError('Array must be a array of Strings');
    }

    this._name = name;
    this._length = length;
    this._students= students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    function checkStudentsType(student) {
      return typeof student === 'string';
    }
    if (!(Array.isArray(newStudents) && newStudents.every(checkStudentsType))) {
      throw new TypeError('Array must be a array of Strings');
    }
    this._students = newStudents;
  }
}
