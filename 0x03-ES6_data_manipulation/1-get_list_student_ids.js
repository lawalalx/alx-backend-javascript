const getListStudentIds = (students) => {
  const ids = [];
  if (Array.isArray(students)) {
    students.forEach((student) => {
      ids.push(student.id);
    });
  }
  return ids;
}
export default getListStudentIds;
