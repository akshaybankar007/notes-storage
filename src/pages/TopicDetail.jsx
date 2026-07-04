import { useParams, Link } from 'react-router-dom';
import { getModule } from '../config/modules';
import { useProgress } from '../hooks/useProgress';

export default function TopicDetail() {
  const { module: moduleSlug, topicId } = useParams();
  const module = getModule(moduleSlug);
  const { isCompleted, toggleComplete } = useProgress(moduleSlug);

  if (!module) {
    return (
      <div className="module-container">
        <h2>Module Not Found</h2>
        <Link to="/" className="back-link">← Go to Dashboard</Link>
      </div>
    );
  }

  const topic = module.content[topicId];
  const completed = isCompleted(topicId);

  if (!topic) {
    return (
      <div className="module-container">
        <Link to={`/${moduleSlug}`} className="back-link">← Back to Syllabus</Link>
        <h2 style={{ marginTop: '20px' }}>Tutorial Content Pending</h2>
        <p className="module-desc">This topic hasn&apos;t been written yet.</p>
        <button
          className={`complete-btn${completed ? ' completed' : ''}`}
          onClick={() => toggleComplete(topicId)}
        >
          {completed ? '✓ Marked Complete' : 'Mark as Complete'}
        </button>
      </div>
    );
  }

  return (
    <div className="module-container">
      <div className="topic-detail-header">
        <Link to={`/${moduleSlug}`} className="back-link">← Back</Link>
        <button
          className={`complete-btn${completed ? ' completed' : ''}`}
          onClick={() => toggleComplete(topicId)}
        >
          {completed ? '✓ Completed' : 'Mark as Read'}
        </button>
      </div>
      <h2 style={{ marginTop: '20px' }}>{topic.title}</h2>

      <div className="tutorial-content">
        {topic.sections.map((sec, idx) => (
          <div key={idx} className="tutorial-section">
            {sec.heading && <h3>{sec.heading}</h3>}
            {sec.text && <p>{sec.text}</p>}
            {sec.code && (
              <pre className="code-block">
                <code>{sec.code}</code>
              </pre>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
