const fs = require('fs');

function createStudents(listOfData, fields) {
  const students = [];

  listOfData.shift();
  listOfData.pop();

  for (const line of listOfData) {
    const values = line.split(',');
    const student = {};
    for (let j = 0; j < fields.length; j += 1) {
      const field = fields[j];
      const value = values[j];
      student[field] = value;
    }
    students.push(student);
  }
  return students;
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const listOfData = data.split('\n');
    const fields = listOfData[0].split(',');

    const students = createStudents(listOfData, fields);

    const fieldCounts = {};
    students.forEach((student) => {
      const { field, firstname } = student;

      if (!fieldCounts[field]) {
        fieldCounts[field] = {
          count: 0,
          firstNames: [],
        };
      }

      fieldCounts[field].count += 1;
      fieldCounts[field].firstNames.push(firstname);
    });

    console.log(`Number of students: ${students.length}`);
    for (const field in fieldCounts) {
      if (Object.hasOwnProperty.call(fieldCounts, field)) {
        const { count, firstNames } = fieldCounts[field];
        console.log(`Number of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
