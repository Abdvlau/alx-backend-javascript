// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location

// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const student1: Student = {
	firstName: "Faith",
	lastName: "Adam",
	age: 97,
	location: "Nigeria"
}

const student2: Student = {
	firstName: "Sani",
	lastName: "Musa",
	age: 79,
	location: "Nigeria"
}

// Create an array of students
const studentsList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})