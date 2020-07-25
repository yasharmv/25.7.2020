// HTTP request methods

// GET - `url`
// POST - `url`, data
// PUT - `url`, data
// DELETE - `url`

/**
 * 1. GET index.html
 */
// JSON
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((res)=>{
    const list = document.querySelector('.todo-list');

    res.forEach((todo) => {
        const { title, completed } = todo;
        $('.todo-list').append(`
            <div class="todo-item ${completed && 'done'}">
                <h4 class="title">
                    ${title}
                </h4>
            </div>
        `);
    })
});

var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})
