---
layout: page
title: Ride Eternal
permalink: /pages/eternal/
---

  <style>
    body {
      margin: 0;
      overflow: hidden;
      background-color: black;
    }
    canvas {
      display: block;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas"></canvas>
  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ship = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      width: 40,
      height: 40,
      speed: 5,
      dx: 0,
      dy: 0,
      angle: 0
    };

    const stars = [];
    const particles = [];
    const numStars = 100;

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2,
          alpha: Math.random(),
          dx: (Math.random() - 0.5) * 0.1,
          dy: (Math.random() - 0.5) * 0.1
        });
      }
    }

    function drawStars() {
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawShip() {
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle);

      // Draw main triangle
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, -ship.height / 2); // Top point
      ctx.lineTo(-ship.width / 2, ship.height / 2); // Bottom left point
      ctx.lineTo(ship.width / 2, ship.height / 2); // Bottom right point
      ctx.closePath();
      ctx.stroke();

      // Draw inner lines for ASCII art effect
      ctx.beginPath();
      ctx.moveTo(0, -ship.height / 2); // Top point
      ctx.lineTo(0, ship.height / 2); // Bottom center point
      ctx.moveTo(-ship.width / 2, ship.height / 2); // Bottom left point
      ctx.lineTo(ship.width / 2, ship.height / 2); // Bottom right point
      ctx.moveTo(-ship.width / 4, ship.height / 4); // Mid left point
      ctx.lineTo(ship.width / 4, ship.height / 4); // Mid right point
      ctx.stroke();

      ctx.restore();
    }

    function createParticles(direction) {
      for (let i = 0; i < 5; i++) {
        let particleX = ship.x;
        let particleY = ship.y;

        if (direction === 'up') {
          particleY += ship.height / 2;
        } else if (direction === 'down') {
          particleY -= ship.height / 2;
        } else if (direction === 'left') {
          particleX += ship.width / 2;
        } else if (direction === 'right') {
          particleX -= ship.width / 2;
        }

        particles.push({
          x: particleX,
          y: particleY,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          alpha: 1,
          size: Math.random() * 2
        });
      }
    }

    function drawParticles() {
      particles.forEach((particle, index) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Update particle position
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.alpha -= 0.02;

        // Remove particle if it becomes invisible
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });
    }

    function updateStars() {
      stars.forEach(star => {
        star.x -= ship.dx * 0.5;
        star.y -= ship.dy * 0.5;

        // Move stars slowly on their own
        star.x += star.dx;
        star.y += star.dy;

        // Glimmer effect
        star.alpha += (Math.random() - 0.5) * 0.05;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 1) star.alpha = 1;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    }

    function clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function update() {
      clear();
      drawStars();
      drawParticles();
      drawShip();
      updateStars();
      requestAnimationFrame(update);
    }

    function moveUp() {
      ship.dy = -ship.speed;
      createParticles('up');
    }

    function moveDown() {
      ship.dy = ship.speed;
      createParticles('down');
    }

    function moveLeft() {
      ship.dx = -ship.speed;
      ship.angle = -0.1; // Tilt left
      createParticles('left');
    }

    function moveRight() {
      ship.dx = ship.speed;
      ship.angle = 0.1; // Tilt right
      createParticles('right');
    }

    function keyDown(e) {
      if (e.key === 'ArrowUp' || e.key === 'w') moveUp();
      if (e.key === 'ArrowDown' || e.key === 's') moveDown();
      if (e.key === 'ArrowLeft' || e.key === 'a') moveLeft();
      if (e.key === 'ArrowRight' || e.key === 'd') moveRight();
    }

    function keyUp(e) {
      if (e.key === 'ArrowUp' || e.key === 'w') ship.dy = 0;
      if (e.key === 'ArrowDown' || e.key === 's') ship.dy = 0;
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        ship.dx = 0;
        ship.angle = 0; // Reset tilt
      }
      if (e.key === 'ArrowRight' || e.key === 'd') {
        ship.dx = 0;
        ship.angle = 0; // Reset tilt
      }
    }

    createStars();
    update();

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
  </script>