function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', create);

    const [addTask, open, inProgress, complete] = document.querySelectorAll('section');
    
    function create(e) {
        e.preventDefault();
        if (task.value.trim() != '' && description.value.trim() != '' && date.value.trim() != '') {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = task.value;
            const desP = document.createElement('p');
            desP.textContent = `Description: ${description.value}`;
            const dateP = document.createElement('p');
            dateP.textContent = `Due Date: ${date.value}`;
            const div = document.createElement('div');
            div.className = 'flex';
            const startBtn = document.createElement('button');
            startBtn.className = 'green';
            startBtn.textContent = 'Start';
            startBtn.addEventListener('click', start);
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', del);
            div.appendChild(startBtn);
            div.appendChild(deleteBtn);
            article.appendChild(h3);
            article.appendChild(desP);
            article.appendChild(dateP);
            article.appendChild(div);

            open.lastElementChild.appendChild(article);

            function start() {
                startBtn.remove();
                const finishBtn = document.createElement('button');
                finishBtn.className = 'orange';
                finishBtn.textContent = 'Finish';
                finishBtn.addEventListener('click', finish);
                div.appendChild(finishBtn);
                inProgress.lastElementChild.appendChild(article);
            }

            function del() {
                article.remove();
            }

            function finish() {
                div.remove();
                complete.lastElementChild.appendChild(article);
            }
        }
        task.value = '';
        description.value = '';
        date.value = '';
    }
    
}