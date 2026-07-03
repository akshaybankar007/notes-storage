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

  const globalTotal = stats.reduce((sum, s) => sum + s.total, 0);
  const globalCompleted = stats.reduce((sum, s) => sum + s.completed, 0);
  const globalPercent = globalTotal > 0 ? Math.round((globalCompleted / globalTotal) * 100) : 0;

  return (
    <div className="module-container">
      <h2>Dashboard</h2>
      <p className="module-desc">Track your interview preparation progress across all modules.</p>

      <div className="dashboard-summary">
        <div className="stat-card">
          <span className="stat-value">{globalCompleted}/{globalTotal}</span>
          <span className="stat-label">Topics Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{globalPercent}%</span>
          <span className="stat-label">Overall Progress</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{modules.length}</span>
          <span className="stat-label">Active Modules</span>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${globalPercent}%` }} />
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
