document.getElementById('noBtn').addEventListener('click', moveButton);
document.getElementById('noBtn').addEventListener('touchstart', moveButton);

function moveButton(e) {
    e.preventDefault(); // Previene la acción por defecto para asegurar que el botón no se pueda clickear.

    const btn = this;
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    btn.style.position = 'absolute'; // Asegura que el botón pueda moverse.
    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
}
document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'si.html'; // Cambia la URL actual por la de respuesta.html
});
