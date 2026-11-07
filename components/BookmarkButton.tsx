'use client';

import { useEffect, useState } from 'react';

interface BookmarkProps {
  pageId: string;
  pageTitle: string;
}

export function BookmarkButton({ pageId, pageTitle }: BookmarkProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    setIsBookmarked(!!bookmarks[pageId]);
  }, [pageId]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    
    if (bookmarks[pageId]) {
      delete bookmarks[pageId];
    } else {
      bookmarks[pageId] = {
        title: pageTitle,
        url: window.location.pathname,
        addedAt: new Date().toISOString(),
      };
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleBookmark}
      style={{
        padding: '8px 12px',
        background: isBookmarked ? 'var(--accent-soft)' : 'var(--card2)',
        border: `1px solid ${isBookmarked ? 'var(--accent)' : 'var(--line)'}`,
        color: isBookmarked ? 'var(--accent)' : 'var(--muted)',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '12px',
        fontWeight: 600,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        transition: 'all 0.3s ease',
      }}
      title={isBookmarked ? '북마크 제거' : '북마크 추가'}
    >
      <svg
        viewBox="0 0 24 24"
        fill={isBookmarked ? 'currentColor' : 'none'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: '16px', height: '16px', stroke: 'currentColor' }}
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      </svg>
      {isBookmarked ? '북마크됨' : '북마크'}
    </button>
  );
}
