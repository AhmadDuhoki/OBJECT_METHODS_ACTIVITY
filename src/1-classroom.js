console.log("========== YES ===========");
console.log("Hooooray! You've solved this one correctly. Now move");
console.log("to the file '1-classroom.js' and do the tasks there");
// =====================
const classroom = {
  name: "Moon's Web Development Bootcamp",
  id: 0,
  students: [
    {
      name: "Lajan",
      attendance: 0.8,
      performance: 0.88,
      gender: "F",
      age: 25
    },
    {
      name: "Zerin",
      attendance: 0.7,
      performance: 0.95,
      gender: "F",
      age: 26
    },
    {
      name: "Ahmad",
      attendance: 0.99,
      performance: 0.78,
      gender: "M",
      age: 30
    },
    {
      name: "Freshta",
      attendance: 1,
      performance: 0.98,
      gender: "F",
      age: 21
    },
    {
      name: "Husam",
      attendance: 0.63,
      performance: 0.76,
      gender: "M",
      age: 24
    },
    {
      name: "Bestun",
      attendance: 0.92,
      performance: 0.93,
      gender: "M",
      age: 29
    },
    {
      name: "Violet",
      attendance: 0.76,
      performance: 0.71,
      gender: "F",
      age: 27
    },
    {
      name: "Ali",
      attendance: 0.68,
      performance: 0.69,
      gender: "M",
      age: 26
    },
    {
      name: "Delan",
      attendance: 0.85,
      performance: 0.7,
      gender: "F",
      age: 22
    },
    {
      name: "Rebaz",
      attendance: 0.75,
      performance: 0.85,
      gender: "M",
      age: 24
    }
  ],
  getTopPerformers: function(threshold = 0.7) {
    // filter the students array to return only students whose
    // performance greater than or equal threshold
    // let performanceFilter= this.students.filter((filtering) => {
    //     return performanceFilter.push(this.students.performance>=threshold);

    // })
    // return performanceFilter;

    // // let performanceArray= [];
    // // this["students"].forEach(element =>{
    // //   if(this.students.performance>=threshold){
    // //     performanceArray.push(element);
    // //   }
    // // });
    // // return performanceArray;
    let performanceArray = this.students.filter(condition => {
      return condition.performance >= threshold;
    });

    return performanceArray;
  },
  getTopAttenders: function(threshold = 0.6) {
    // filter the students array to return only students whose
    // attendance greater than or equal threshold)
    // let attendanceArray= [];
    // this["students"].forEach(element =>{
    //   if(this.students.attendance>=threshold1){
    //     attendanceArray.push(element);
    //   }
    // });
    // return attendanceArray;

    let attendanceArray = this.students.filter(condition => {
      return condition.attendance >= threshold;
    });
    return attendanceArray;
  },
  addStudent: function(name, age, performance, attendance, gender) {
    // this function should use the arguments to create a student object
    // then pushes it to the students array, and return the object
    let newStudent = this.students.push({
      name: `${name}`,
      age: `${age}`,
      performance: `${performance}`,
      attendance: `${attendance}`,
      gender: `${gender}`
    });
    return newStudent;
  },
  removeStudent: function(index) {
    // this function should remove the student with the array index 'index'
    // from the array, then returns the deleted user
    // const removedStudent = [...this.students];
    //   if (index > -1) {
    //    let deletedStudent = removedStudent(removedStudent.splice(index, 1));
    //   }
    //   return deletedStudent;

    const removedStudent = this.students.splice(index, 1);
    return removedStudent;
  },
  getAveragePerformance: function() {
    // reduce the students array into a number that represents the average
    // classroom performance
    let averagePerformance = this.students.reduce((acc = 0, curr) => {
      return (acc += curr.performance);
    }, 0);
    return averagePerformance;
  },
  getAverageAttendance: function() {
    // reduce the students array into a number that represents the average
    // classroom attendance
    let averageAttendance = this.students.reduce((acc = 0, curr) => {
      return (acc += curr.attendance);
    }, 0);
    return averageAttendance;
  },
  studentsToHTML: function() {
    // map the students array into a an array of html elements
    // then join the html and return it to be used for the ul's innerHTML
    let arrayOfHtmlElements = this.students.map(obj => {
      return `<li>
      <h4>${obj.name}</h4>
      <p>performance: <b>${obj.performance}</b>, gender: <b>${
        obj.gender
      }</b></p>
      </li>`;
    });
    return arrayOfHtmlElements.join("");
  }
};

const studentsUl = document.getElementById("students-list");
studentsUl.innerHTML = classroom.studentsToHTML();

const perfSpan = document.getElementById("perf-span");
perfSpan.innerText = classroom.getAveragePerformance();

const attenSpan = document.getElementById("atten-span");
attenSpan.innerText = classroom.getAverageAttendance();

console.log(classroom.getTopAttenders().length);
console.log(classroom.getTopPerformers().length);
