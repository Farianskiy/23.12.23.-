// Функция, возвращающая Promise
function delay() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise разрешен!');
      }, 1000);
    });
  }
  
  // Использование async/await для вызова функции и вывода результата в консоль
  async function CompleteTheTask() {
    try {
      console.log('Начало выполнения задачи...');
      const результат = await delay();
      console.log('Результат:', результат);
      console.log('Задача выполнена.');
    } catch (ошибка) {
      console.error('Произошла ошибка:', ошибка);
    }
  }
  
  // Вызов функции выполнения задачи
  CompleteTheTask();
  