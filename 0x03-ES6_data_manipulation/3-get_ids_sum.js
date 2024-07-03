export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((previousValue, currentValu) => previousValue + currentValu.id, 0);
}
