// app/model/[id]/page.tsx
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import ModelViewer from '../../components/ModelViewer';
import '../../styles/ModelViewer.scss';

const models = [
  { id: 'model1', name: 'Model 1', url: '/3d-objects/model1.glb' },
  { id: 'model2', name: 'Model 2', url: '/3d-objects/model2.glb' },
  { id: 'model3', name: 'Model 3', url: '/3d-objects/model3.glb' },
  { id: 'model4', name: 'Model 4', url: '/3d-objects/model4.glb' },
  { id: 'model5', name: 'Model 5', url: '/3d-objects/model5.glb' },
];

export async function generateStaticParams() {
  return models.map((model) => ({ id: model.id }));
}

export default function ModelPage({ params }: { params: { id: string } }) {
  const model = models.find((m) => m.id === params.id);

  if (!model) {
    notFound();
  }

  return (
    <div className="model-page">
      <header>
        <Link href="/" className="back-link">
          ← Back
        </Link>
        <h1>{model.name}</h1>
      </header>
      <ModelViewer modelUrl={model.url} />
    </div>
  );
}