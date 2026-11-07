import { marked } from 'marked';
import hljs from 'highlight.js';

// highlight.js 설정
const renderer = {
  code(this: any, { text, lang }: { text: string; lang?: string }) {
    if (lang && hljs.getLanguage(lang)) {
      const highlighted = hljs.highlight(text, { language: lang, ignoreIllegals: true }).value;
      return `<pre><code class="hljs language-${lang}">${highlighted}</code></pre>`;
    }
    return `<pre><code>${hljs.highlightAuto(text).value}</code></pre>`;
  }
};

marked.use({ renderer });

export async function renderMarkdown(content: string): Promise<string> {
  try {
    const html = await marked(content);
    return html as string;
  } catch (error) {
    console.error('마크다운 렌더링 오류:', error);
    return '<p>콘텐츠를 로드할 수 없습니다.</p>';
  }
}
