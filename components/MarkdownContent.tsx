'use client';

import { useEffect, useState } from 'react';
import { renderMarkdown } from '@/lib/markdown';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export function MarkdownContent({ content, className = 'markdown' }: MarkdownContentProps) {
  const [html, setHtml] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const render = async () => {
      try {
        setIsLoading(true);
        const rendered = await renderMarkdown(content);
        setHtml(rendered);
        setError(null);
      } catch (err) {
        setError('콘텐츠를 렌더링할 수 없습니다.');
        console.error('렌더링 오류:', err);
      } finally {
        setIsLoading(false);
      }
    };

    render();
  }, [content]);

  if (isLoading) {
    return <div className={className} style={{ color: 'var(--muted)' }}>로딩 중...</div>;
  }

  if (error) {
    return <div className={className} style={{ color: 'var(--muted)' }}>{error}</div>;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
