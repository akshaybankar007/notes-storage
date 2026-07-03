import { Link, useParams } from 'react-router-dom';
import { getModule } from '../config/modules';
import { useProgress } from '../hooks/useProgress';

export default function ModulePage() {
  const { module: slug } = useParams();
  const module = getModule(slug);
  const { isCompleted } = useProgress(slug);

  if (!module) {
    return (
      <div className="module-container">
        <h2>Module Not Found</h2>
        <p className="module-desc">This module does not exist.</p>
        <Link to="/" className="read-btn" style={{ display: 'inline-block', width: 'auto', textAlign: 'center', textDecoration: 'none' }}>
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="module-container">
      <h2>{module.title}</h2>
      <p className="module-desc">{module.description}</p>

      <div className="syllabus-grid">
        {module.syllabus.map((item) => (
          <article key={item.id} className={`topic-card${isCompleted(item.id) ? ' completed' : ''}`}>
            <div className="topic-header">
              <span className="topic-id">{item.id}.</span>
              <h3>{item.topic}</h3>
              {isCompleted(item.id) && <span className="checkmark" title="Completed">✓</span>}
            </div>
            <div className="topic-body">
              <strong>Konw this:</strong>
              <p>{item.mustKnow}</p>
            </div>
            <Link
              to={`/${module.slug}/${item.id}`}
              className="read-btn"
              style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              Read
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
