window.addEventListener('load', () => {
    showdata();

    document.getElementById('fetch-comment').addEventListener('click', () => {
        document.getElementById('comment-container').innerHTML = `<h3 class="fw-bold mb-4">Random Comments:</h3>`;
        showdata();
    });
});

function showdata() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < 10; i++) {
                const element = data[Math.floor(Math.random() * 500)]
                const div = document.createElement('div');
                div.classList.add('comment', 'my-3', 'p-3', 'p-md-4', 'rounded-3');
                div.innerHTML = `<h4 class="fw-bold my-3">${element.name}</h4><p>${element.body}</p><h6 class="fw-light text-end">- ${element.email}</h6>`;
                document.getElementById('comment-container').appendChild(div);
            }
        });
}