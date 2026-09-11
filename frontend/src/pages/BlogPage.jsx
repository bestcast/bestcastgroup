import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setPosts(data.data);
        }
      })
      .catch(err => console.error('Failed to fetch posts:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="bc-page-hero">
        <div className="bc-container">
          <span style={{ color: 'var(--bc-orange)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '0.9rem' }}>
            Foundry Insights
          </span>
          <h1 className="bc-page-hero-title">
            Technical Articles & News
          </h1>
          <p className="bc-page-hero-desc">
            Engineering insights, metallurgical developments, and best practices in precision investment casting.
          </p>
        </div>
      </div>

      <section className="bc-section">
        <div className="bc-container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--bc-text-muted)' }}>Loading articles...</div>
          ) : (
            <div className="bc-grid-3">
              {posts.map((post) => (
                <article key={post._id} className="bc-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--bc-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                    <Tag size={14} />
                    <span>{post.category}</span>
                  </div>

                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bc-primary)', marginBottom: '0.8rem', lineHeight: '1.4' }}>
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p style={{ color: 'var(--bc-text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--bc-border)', paddingTop: '1rem', marginTop: 'auto', fontSize: '0.82rem', color: 'var(--bc-text-muted)' }}>
                    <span>By {post.author}</span>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'var(--bc-accent)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
