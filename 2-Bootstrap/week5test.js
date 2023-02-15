const bicycle = {
    color: "blue",
    electric: false,
    start() {
        console.log("You begin to pedal the bike.");
    }
}

bicycle.color = "green";
bicycle.electric = true;

console.log(bicycle);
console.log(bicycle.color);
console.log(bicycle.electric);
bicycle.start();

/* function hello(name) {
    return name;
} */

const hello = name => {studentName: name};
hello("Brandon");

class Book {
    constructor(title, author, year, isRead=false) {
        this.title = title,
        this.author = author,
        this.year = year,
        this.isRead = isRead
    }
}

const book3 = new Book("Where am I?", "Some Dude", 2002, true);
console.log(book3);

class Audiobook extends Book {
    constructor(title, author, year) {
        super(title, author, year)
    }
    playaudio() {
        console.log("This book is awesome to read.");
    }
}

const book4 = new Audiobook ("As I lay dying", "Some Guy", 1999);
console.log(book4);

class Student {
    constructor() {
        
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

class Teacher extends Student {
    constructor(name, email, faculty) {
        super(name, email);
        this.faculty = faculty;
    }
}

const teacher1 = new Teacher("Brandon", "b@gmail.com", null);
console.log(teacher1);