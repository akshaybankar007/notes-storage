import { Link } from 'react-router-dom';
import { modules } from '../config/modules';
import { getAllProgress } from '../hooks/useProgress';

export default function Dashboard() {
  const progress = getAllProgress();

  const stats = modules.map((mod) => {
    const total = mod.syllabus.length;
    const completed = progress[mod.slug]?.length ?? 0;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { ...mod, total, completed, percent };
  });

  return (
    <div className="module-container">
      <h2>Dashboard</h2>
      
      <div className="insight-message">
        <p>"Mastery is not measured by completion bars, but by comprehension. Focus on architectural understanding, build ruthlessly, and grasp the core mechanics."</p>
      </div>

      <h3 className="dashboard-section-title">Module Progress</h3>
      <div className="dashboard-grid">
        {stats.map((mod) => (
          <Link key={mod.slug} to={`/${mod.slug}`} className="dashboard-card">
            <div className="dashboard-card-header">
              <h4>{mod.label}</h4>
              <span className="dashboard-percent">{mod.percent}%</span>
            </div>
            <p className="dashboard-card-desc">{mod.description}</p>
            <div className="dashboard-card-progress">
              <div className="progress-bar-container small">
                <div className="progress-bar" style={{ width: `${mod.percent}%` }} />
              </div>
              <span className="dashboard-count">{mod.completed}/{mod.total} topics</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}