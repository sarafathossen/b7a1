// Problem 1:

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter(num => num % 2 === 0);
};



// Problem 2:

const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};



// Problem 3:

type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};




// Problem 4:

const getProperty = (obj: any, key: string) => {
  return obj[key];
};




// Problem 5:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}



const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};








// Problem 6:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}






// Problem 7:


const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const intersection = arr1.filter((element) => arr2.includes(element));
  return intersection;
};



