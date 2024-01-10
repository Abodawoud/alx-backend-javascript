export default function getStudentIdsSum(listOfIds) {
  const sumOfIds = listOfIds.reduce((acc, ele) => acc + ele.id, 0);

  return sumOfIds;
}
