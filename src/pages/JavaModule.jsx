import { javaSyllabus } from '../data/javaSyllabus';

export default function JavaModule() {
  return (
    <div className="module-container">
      <h2>Java Preparation Module</h2>
      <p className="module-desc">Complete syllabus for cracking Java-based interviews.</p>
      
      <div className="syllabus-grid">
        {javaSyllabus.map((item) => (
          <article key={item.id} className="topic-card">
            <div className="topic-header">
              <span className="topic-id">#{item.id}</span>
              <h3>{item.topic}</h3>
            </div>
            <div className="topic-body">
              <strong>Must Know:</strong>
              <p>{item.mustKnow}</p>
            </div>
            <button className="primary-btn read-btn">Read Tutorial</button>
          </article>
        ))}
      </div>
    </div>
  );
}