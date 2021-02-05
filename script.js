const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('side-bar');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
});

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
})
