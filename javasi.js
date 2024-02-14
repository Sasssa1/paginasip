document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('girasolCanvas');
    const ctx = canvas.getContext('2d');

    // Dibuja un círculo simple para el centro del girasol
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

    // Dibuja los pétalos alrededor del centro
    for (let i = 0; i < 360; i += 15) {
        let angle = i * Math.PI / 180;
        let x = 300 + 60 * Math.cos(angle);
        let y = 200 + 60 * Math.sin(angle);
        
        ctx.beginPath();
        ctx.ellipse(x, y, 20, 10, angle, 0, 2 * Math.PI);
        ctx.fillStyle = 'orange';
        ctx.fill();
        ctx.stroke();
    }
});
