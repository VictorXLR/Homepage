class HyperpopEngine {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.clock = new THREE.Clock();
        this.bgColor = new THREE.Color('#ff00ff');
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        this.uniforms = {
            time: { value: 0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            bgColor: { value: this.bgColor }
        };

        const material = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: document.getElementById('vertexShader').textContent,
            fragmentShader: document.getElementById('fragmentShader').textContent
        });

        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        window.addEventListener('resize', () => {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
        });

        this.animate();
    }

    updateBackgroundColor(hexColor) {
        this.bgColor.set(hexColor);
        this.uniforms.bgColor.value = this.bgColor;
        document.documentElement.style.setProperty('--bg', hexColor);
    }

    animate() {
        this.uniforms.time.value = this.clock.getElapsedTime();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
}

class BrutalUI {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        this.init();
    }

    init() {
        // Color picker functionality
        const colorPicker = document.getElementById('bg-color');
        if (colorPicker) {
            colorPicker.addEventListener('input', (e) => {
                this.hyperpopEngine?.updateBackgroundColor(e.target.value);
            });
        }

        // Heavy entrance
        gsap.from('.hero-title', {
            x: -200,
            opacity: 0,
            duration: 0.5,
            ease: "expo.out"
        });

        // Snappy per-card reveal: each card animates as it enters the viewport
        gsap.set('.brutal-card', { opacity: 0, y: 40, rotation: 3 });
        ScrollTrigger.batch('.brutal-card', {
            start: 'top 92%',
            once: true,
            onEnter: (batch) => gsap.to(batch, {
                opacity: 1,
                y: 0,
                rotation: 0,
                stagger: 0.05,
                duration: 0.3,
                ease: 'power3.out',
                overwrite: true
            })
        });

        // Marquee-like tilt on scroll
        window.addEventListener('scroll', () => {
            const speed = window.scrollY * 0.05;
            gsap.to('.section-label', {
                rotation: -2 + Math.sin(speed * 0.1) * 2,
                duration: 0.1,
                overwrite: 'auto'
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const hyperpopEngine = new HyperpopEngine('canvas-container');
    const brutalUI = new BrutalUI();
    brutalUI.hyperpopEngine = hyperpopEngine;
});
