// Создаем promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.ceil(Math.random() * 100);
        if (number % 2 == 0) {
            resolve("Завершено успешно. Сгенерированное число — " + number);
        } else {
            reject("Завершено с ошибкой. Сгенерированное число — " + number);
        }
    }, 3000);
});

// Выполняем promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });