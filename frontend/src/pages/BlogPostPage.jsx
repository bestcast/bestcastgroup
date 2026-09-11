import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Tag } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setPost(data.data);
        }
      })
      .catch(err => console.error('Error fetching post:', err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="bc-container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>Loading article...</div>;
  }

  if (!post) {
    return (
      <div className="bc-container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h2>Post Not Found</h2>
        <Link to="/blog" style={{ color: 'var(--bc-accent)', marginTop: '1rem', display: 'inline-block' }}>Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '4rem 0' }}>
      <div className="bc-container" style={{ maxWidth: '850px' }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--bc-accent)', fontWeight: 700, marginBottom: '2rem' }}>
          <ArrowLeft size={16} />
          <span>Back to All Articles</span>
        </Link>

        <span style={{ display: 'inline-block', backgroundColor: 'rgba(196,154,69,0.15)', color: 'var(--bc-accent)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>
          {post.category}
        </span>

        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--bc-primary)', lineHeight: '1.25', marginBottom: '1.2rem' }}>
          {post.title}
        </h1>

        <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--bc-text-muted)', fontSize: '0.9rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--bc-border)', paddingBottom: '1.2rem' }}>
          <span>Written by: <strong>{post.author}</strong></span>
          <span>Published: {new Date(post.createdAt).toLocaleDateString()}</span>
        </div>

        <div
          style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--bc-text-dark)' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
