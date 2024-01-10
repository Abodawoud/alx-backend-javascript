import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const students = getStudentsByLocation(listOfStudents, city);

  const updateStudent = students.map((student) => {
    const matchStudents = newGrades.filter((ele) => ele.studentId === student.id);

    if (typeof matchStudents[0] !== 'undefined') {
      Object.assign(student, { grade: matchStudents[0].grade });
    } else {
      Object.assign(student, { grade: 'N/A' });
    }
    return student;
  }).flat();
  return updateStudent;
}
