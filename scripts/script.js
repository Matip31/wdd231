const navButton = document.querySelector('#ham');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle("show");
});
const navBar=document.querySelector("#nav-bar");
const currentYear=new Date().getFullYear();
document.getElementById("currentyear").innerHTML=currentYear;
document.getElementById("lastModified").innerHTML=document.lastModified;
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
const coursesList=document.getElementById("courses-list");
const allButton=document.getElementById("all");
const cseButton=document.getElementById("cse");
const wddButton=document.getElementById("wdd");
function CreateCourseSpan(filteredCourses){
    coursesList.innerHTML="";
    filteredCourses.forEach(course => {
        const span=document.createElement("span");
        if(course.completed){
            span.textContent="✓"+course.subject+course.number;
        }
        else{
            span.textContent=course.subject+course.number;
        }
        const totalCredits=filteredCourses.reduce((sum,course)=>{
            return sum+course.credits;
        },0);
        const p=document.getElementById("credits");
        p.textContent="The total number of credits for the courses listed above is "+totalCredits;
        coursesList.appendChild(span);
        coursesList.addEventListener('click', () => {
        displayCourseDetails(course);
});
    });
}
CreateCourseSpan(courses);
allButton.addEventListener("click",()=>{
    CreateCourseSpan(courses);
});
cseButton.addEventListener("click",()=>{
    let cse=courses.filter(course=>{
        const subject=course.subject;
        return subject=="CSE";
    })
    CreateCourseSpan(cse);
});
wddButton.addEventListener("click",()=>{
    let wdd=courses.filter(course=>{
        const subject=course.subject;
        return subject=="WDD";
    })
    CreateCourseSpan(wdd);
});
courseDetails=document.querySelector("#course-details")
function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}
