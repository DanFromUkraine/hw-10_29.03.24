// Задача 1: Створення простого калькулятора з можливістю обчислення простих математичних операцій, таких як додавання, віднімання, множення та ділення, за допомогою прототипів та прототипного наслідування.

// Задача 2: Напишіть програму для обчислення середнього балу студента. Програма має мати можливість вводити інформацію про студента, таку як його ім'я, прізвище та оцінки з різних предметів. Для обчислення середнього балу необхідно використовувати прототипне наслідування.

Object.prototype.add = function (a, b) {
  return a + b;
};
Object.prototype.subtraction = function (a, b) {
  return a - b;
};
Object.prototype.multiplication = function (a, b) {
  return a * b;
};
Object.prototype.division = function (a, b) {
  return a / b;
};

const calc1 = Object.create(add);
const calc2 = Object.create(calc1, subtraction);
const calc3 = Object.create(calc2, multiplication);
const calc4 = Object.create(calc2, division);

console.dir(calc4);

console.log(calc4.add(2, 2));
console.log(calc4.subtraction(2, 2));
console.log(calc4.multiplication(2, 2));
console.log(calc4.division(2, 2));

// task2

const student_constructor = function (name, surname, marks) {
  this.name = name;
  this.surname = surname;
  this.marks = marks;
};
// передбачається, що marks буде об'єктом масивів {a: [],b: []}
student_constructor.prototype.calc_avarage_mark = function () {
  return Math.floor(
    Object.values(this.marks)
      .flat(1)
      .reduce((acc, number) => {
        return acc + number;
      }, 0) / Object.values(student.marks).flatMap((i) => i).length
  );
};

const student = new student_constructor("somebody", "Smith", {
  math: [100, 2, 3, 4, 5],
  english: [2, 3, 4, 5, 10],
  ukrainian: [3, 4, 5, 6, 7],
});
console.log(student.calc_avarage_mark());

console.log(Object.values(student.marks).flatMap((i) => i).length);
