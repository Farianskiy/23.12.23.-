function amount(a, b) {
    return a + b;
  }
  
  // Пример использования
  const result = amount(5, 10);
  console.log("Сумма чисел:", result);

  function Student(имя, возраст) {
    this.имя = имя;
    this.возраст = возраст;
  }
  
  // Пример использования
  const studentOne = new Student("Василий", 20);
  const studentTwo = new Student("Мария", 22);
  
  console.log("Студент 1:", studentOne);
  console.log("Студент 2:", studentTwo);
  