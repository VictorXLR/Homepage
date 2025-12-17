class HyperpopEngine {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        this.clock = new THREE.Clock();
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        this.uniforms = {
            time: { value: 0 },
            resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
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
        // Heavy entrance
        gsap.from('.hero-title', {
            x: -200,
            opacity: 0,
            duration: 0.8,
            ease: "expo.out"
        });

        gsap.from('.brutal-card', {
            y: 100,
            rotation: 10,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: '.experience-list',
                start: 'top 80%'
            }
        });

        // Marquee-like tilt on scroll
        window.addEventListener('scroll', () => {
            const speed = window.scrollY * 0.05;
            gsap.to('.section-label', {
                rotation: -2 + Math.sin(speed * 0.1) * 2,
                duration: 0.1
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new HyperpopEngine('canvas-container');
    new BrutalUI();
});
