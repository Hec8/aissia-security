'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
    radius: number;
}

export const ParticleNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const PARTICLE_COUNT = 80;
        const CONNECTION_DISTANCE = 150;
        const MOUSE_RADIUS = 200;
        const DRIFT_RANGE = 120;
        const PARTICLE_SPEED = 0.3;

        let animationId = 0;
        const mouse = { x: -1000, y: -1000 };
        let particles: Particle[] = [];

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push({
                    x,
                    y,
                    originX: x,
                    originY: y,
                    vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
                    vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
                    radius: Math.random() * 2 + 1.5,
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if (particles.length === 0) {
                initParticles();
            }
        };

        const animate = () => {
            const { width, height } = canvas;
            ctx.clearRect(0, 0, width, height);

            // Update particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const dx = p.x - p.originX;
                const dy = p.y - p.originY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist > DRIFT_RANGE) {
                    p.vx -= (dx / dist) * 0.02;
                    p.vy -= (dy / dist) * 0.02;
                }

                p.vx += (Math.random() - 0.5) * 0.01;
                p.vy += (Math.random() - 0.5) * 0.01;

                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > PARTICLE_SPEED) {
                    p.vx = (p.vx / speed) * PARTICLE_SPEED;
                    p.vy = (p.vy / speed) * PARTICLE_SPEED;
                }

                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                p.x = Math.max(0, Math.min(width, p.x));
                p.y = Math.max(0, Math.min(height, p.y));
            }

            // Draw connections between particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(6, 21, 37, ${opacity})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse connections & particle dots
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const mdx = p.x - mouse.x;
                const mdy = p.y - mouse.y;
                const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

                if (mDist < MOUSE_RADIUS) {
                    const opacity = (1 - mDist / MOUSE_RADIUS) * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(6, 21, 37, ${opacity})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(6, 21, 37, 0.4)';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius + 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(6, 21, 37, 0.08)';
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        />
    );
};
