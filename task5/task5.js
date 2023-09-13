const btn = document.querySelector('.getTasks');
const id = document.querySelector('.userId');
const tasksList = document.querySelector('.tasksList');

const userRequest = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id.value}/todos`)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json;
        })
        .catch(() => {
            console.log('Ошибка получения списка задач')
        });
}

function outputTask(task) {
    let list = '';

    for (let key in task) {
        const taskTitle = task[key]["title"];
        const taskStatus = task[key]["completed"];
        let taskLi;
        if (taskStatus) {
            taskLi = `<li style="text-decoration: line-through">${taskTitle}</li>`;
        } else {
            taskLi = `<li>${taskTitle}</li>`;
        }
        list = list + taskLi;
    }
    tasksList.innerHTML = list;
}

btn.addEventListener('click', async () => {
    const requestResult = await userRequest();
    if (requestResult.length > 0) {
        outputTask(requestResult);
    } else {
        alert("Пользователь с указанным id не найден");
        outputTask(null);
    }
});