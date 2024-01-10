export default function getStudentsByLocation(listOfStudents, city) {
  const list = listOfStudents.filter((ele) => ele.location === city);

  return list;
}
