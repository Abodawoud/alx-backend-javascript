// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Function to render a table and append rows for each student
function renderTable(students: Student[]): void {
  // Get the table element from the HTML
  const table = document.getElementById("studentTable") as HTMLTableElement;

  // Create a header row
  const headerRow = table.createTHead().insertRow(0);
  const firstNameHeader = headerRow.insertCell(0);
  const locationHeader = headerRow.insertCell(1);
  firstNameHeader.innerHTML = "<b>First Name</b>";
  locationHeader.innerHTML = "<b>Location</b>";

  // Iterate through the students and append a new row for each
  students.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
}

// Call the renderTable function with the studentsList
renderTable(studentsList);
