// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
const fs = require('fs').promises;
const path = require('path');

const foo = async () => {
  try {
    await fs.mkdir(path.join(__dirname, 'main'));
    await fs.mkdir(path.join(__dirname, 'main', 'online'));
    await fs.mkdir(path.join(__dirname, 'main', 'inPerson'));
  } catch (e) {
    console.log(e);
  }
}
foo();

// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }), відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів, але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

const onlineUsers = [
  { name: "Maksym", age: 22, city: "Kyiv" },
  { name: "Alina", age: 22, city: "Lviv" },
  { name: "Olena", age: 22, city: "Odessa" },
  { name: "Alex", age: 22, city: "Lviv" },
  { name: "Tamara", age: 22, city: "Kyiv" }
]
const inPersonUsers = [
  { name: "Dina", age: 22, city: "Lviv" },
  { name: "Olya", age: 22, city: "Lviv" },
  { name: "Andrii", age: 22, city: "Kyiv" },
  { name: "Oksana", age: 22, city: "Odessa" },
  { name: "Panas", age: 22, city: "Odessa" }
]

const foo = async (arr, folder) => {
  await Promise.all(arr.map(async user => {
        await fs.writeFile(path.join(__dirname, 'main', folder, `${user.name}.txt`), `${user.name}\n${user.age}\n${user.city}\n`)
      })
  );
}
foo(onlineUsers, 'online');
foo(inPersonUsers, 'inPerson');

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу. (ті, що були в папці inPerson будуть в папці online)

const foo = async (moveFrom, moveTo) => {
  const pathToDir = path.join(__dirname, 'main', moveFrom);
  const arrFileNames = await fs.readdir(pathToDir);

  arrFileNames.map(fileName => {
    if (!fileName.includes('new_')) {
      fs.rename(path.join(pathToDir, fileName), path.join(__dirname, 'main', moveTo, `new_${fileName}`));
    }
  });
}
foo('inPerson', 'online');
foo('online', 'inPerson');

