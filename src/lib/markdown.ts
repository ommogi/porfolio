function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Minimal markdown-to-html: only supports `[text](url)` links, the sole
 * markdown construct used in the resume data. */
export function renderInlineMarkdown(text: string): string {
  const escaped = escapeHtml(text);
  return escaped.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match, label, href) =>
      `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
  );
}
