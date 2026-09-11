import React, { useEffect, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

export default function LegalPage({ slug, fallbackTitle }) {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pages/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setPage(data.data);
      })
      .catch(err => console.error(err));
  }, [slug]);

  return (
    <div style={{ padding: '5rem 0' }}>
      <div className="bc-container" style={{ maxWidth: '850px' }}>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--bc-primary)', marginBottom: '1.5rem', borderBottom: '2px solid var(--bc-border)', paddingBottom: '1rem' }}>
          {page?.title || fallbackTitle}
        </h1>

        {page?.content ? (
          <div
            style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--bc-text-dark)' }}
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <p style={{ color: 'var(--bc-text-muted)' }}>Legal statement and regulatory governance details.</p>
        )}
      </div>
    </div>
  );
}
