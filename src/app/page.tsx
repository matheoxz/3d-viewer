// app/page.tsx
import Link from 'next/link';
import ModelThumbnail from '../components/ModelThumbnail';
import '@/styles/Home.scss';

const models = [
  { id: 'model1', name: 'Model 1', url: '/3d-objects/model1.glb' },
  { id: 'model2', name: 'Model 2', url: '/3d-objects/model2.glb' },
  { id: 'model3', name: 'Model 3', url: '/3d-objects/model3.glb' },
  { id: 'model4', name: 'Model 4', url: '/3d-objects/model4.glb' },
  { id: 'model5', name: 'Model 5', url: '/3d-objects/model5.glb' },
];

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>3D Visualizer</h1>
        <input
          type="text"
          placeholder="Search models..."
          // For search functionality, you'll need to implement client-side filtering
          // or use server-side search with query parameters
        />
      </header>
      <main className="grid">
        {models.map((model) => (
          <Link
            key={model.id}
            href={`/model/${model.id}`}
            className="grid-item"
          >
            <ModelThumbnail modelUrl={model.url} />
            <div className="model-name">{model.name}</div>
          </Link>
        ))}
      </main>
    </div>
  );
}