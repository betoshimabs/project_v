import { Scene } from '../components/three/Scene';

export function Home() {
    return (
        <div className="page">
            <header className="header">
                <h1>Project V</h1>
                <p>React Three Fiber Development Environment</p>
            </header>

            <main className="canvas-container">
                <Scene />
            </main>

            <aside className="info-panel">
                <div className="info-card">
                    <h3>🎮 Controls</h3>
                    <ul>
                        <li><kbd>Left Click</kbd> + Drag → Rotate</li>
                        <li><kbd>Right Click</kbd> + Drag → Pan</li>
                        <li><kbd>Scroll</kbd> → Zoom</li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
