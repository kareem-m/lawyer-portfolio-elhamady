"use client";

import Link from "next/link";

export default function ArticleForm({ action, article }) {
  return (
    <form action={action} className="article-form">
      {article && <input type="hidden" name="id" value={article.id} />}
      <div className="form-grid">
        <label>
          Arabic title
          <input name="titleAr" defaultValue={article?.titleAr} required />
        </label>
        <label>
          English title
          <input name="titleEn" defaultValue={article?.titleEn} required />
        </label>
        <label className="full-width">
          Google Drive Image URL
          <input
            name="image"
            type="url"
            defaultValue={article?.image}
            placeholder="https://drive.google.com/file/d/FILE_ID/view"
            required
          />
          <small className="field-help">
            Click <strong>Share</strong> in Google Drive, choose
            <strong> Anyone with the link</strong>, and select <strong>Viewer</strong>.
            The image must be publicly accessible.
          </small>
        </label>
        <label>
          Arabic Markdown
          <textarea name="contentAr" defaultValue={article?.contentAr} rows="18" required />
        </label>
        <label>
          English Markdown
          <textarea name="contentEn" defaultValue={article?.contentEn} rows="18" required />
        </label>
      </div>
      <details className="markdown-help">
        <summary>Markdown writing guide</summary>
        <p>Use these simple examples when writing your article.\</p>
        <div className="markdown-examples">
          <div><strong>Title</strong><code># Your title</code></div>
          <div><strong>Subtitle</strong><code>## Your subtitle</code></div>
          <div><strong>Bold text</strong><code>**important text**</code></div>
          <div><strong>Italic text</strong><code>*short note*</code></div>
          <div><strong>Bullet list</strong><code>- First point<br />- Second point</code></div>
          <div><strong>Numbered list</strong><code>1. First step<br />2. Second step</code></div>
          <div><strong>Link</strong><code>[Open website](https://example.com)</code></div>
          <div><strong>Quote</strong><code>&gt; Important note</code></div>
          <div><strong>Divider</strong><code>---</code></div>
        </div>
      </details>
      <div className="form-actions">
        <Link href="/" className="button secondary">Cancel</Link>
        <button type="submit">{article ? "Save changes" : "Add article"}</button>
      </div>
    </form>
  );
}
