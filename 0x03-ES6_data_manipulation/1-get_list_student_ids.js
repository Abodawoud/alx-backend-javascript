export default function getListStudentIds(listOfIds) {
  if (!Array.isArray(listOfIds)) {
    return [];
  }

  const ids = listOfIds.map((ele) => ele.id);

  return ids;
}
