/* eslint-disable no-underscore-dangle */
const getListStudents = () => {

  /**
   * Return a list of students
   * @returns {Array} students
   */

  const students = [
    { id: 1, name: 'Guillaume', location: "San Francisco" },
    { id: 2, name: 'James', location: "Columbia" },
    { id: 5, name: 'Serena', location: "San Francisco" },
  ];
  
  return students;
}


export default getListStudents;