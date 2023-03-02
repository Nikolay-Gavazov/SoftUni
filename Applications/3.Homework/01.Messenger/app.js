function attachEvents() {
    const textArea = document.getElementById('messages');
    const nameInput = document.getElementsByName('author')[0];
    const messageInput = document.getElementsByName('content')[0];

    document.getElementById('refresh').addEventListener('click', refresh);
    document.getElementById('submit').addEventListener('click', submit);

    let messages = [];
    async function refresh(){
        textArea.textContent = '';
        try {
            const res = await fetch('http://localhost:3030/jsonstore/messenger');
            if(!res.ok) throw Error;

            const data = await res.json();
            
            for(const el in data){
                console.log(data[el]);
                messages.push(`${data[el].author}: ${data[el].content}`);
            }
            textArea.textContent = messages.join('\n');
            messages = [];
        } catch (error) {
            alert(error.message);
        }
    }

    async function submit(){
        try {
            if(!nameInput.value || !messageInput.value){
                throw new Error('All fields must be filled!');
            }
            const data = {author: nameInput.value , content: messageInput.value};

            const res = await fetch('http://localhost:3030/jsonstore/messenger', {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data)
            })
            
            if(!res.ok) throw Error;

            
        } catch (error) {
            alert(error.message);
        }
    }
}

attachEvents();