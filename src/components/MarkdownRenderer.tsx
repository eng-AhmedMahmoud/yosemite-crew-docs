"use client";

import React from "react";

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Code (backtick)
    const codeMatch = remaining.match(/^`([^`]+)`/);
    if (codeMatch) {
      nodes.push(<code key={key++}>{codeMatch[1]}</code>);
      remaining = remaining.slice(codeMatch[0].length);
      continue;
    }

    // Bold + italic
    const boldItalicMatch = remaining.match(/^\*\*\*(.+?)\*\*\*/);
    if (boldItalicMatch) {
      nodes.push(
        <strong key={key++}>
          <em>{boldItalicMatch[1]}</em>
        </strong>
      );
      remaining = remaining.slice(boldItalicMatch[0].length);
      continue;
    }

    // Bold
    const boldMatch = remaining.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      nodes.push(<strong key={key++}>{boldMatch[1]}</strong>);
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    // Italic
    const italicMatch = remaining.match(/^\*(.+?)\*/);
    if (italicMatch) {
      nodes.push(<em key={key++}>{italicMatch[1]}</em>);
      remaining = remaining.slice(italicMatch[0].length);
      continue;
    }

    // Link
    const linkMatch = remaining.match(/^\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      nodes.push(
        <a
          key={key++}
          href={linkMatch[2]}
          className="text-brand-950 hover:underline"
          target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
          rel={
            linkMatch[2].startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
        >
          {linkMatch[1]}
        </a>
      );
      remaining = remaining.slice(linkMatch[0].length);
      continue;
    }

    // Regular character
    nodes.push(remaining[0]);
    remaining = remaining.slice(1);
  }

  return nodes;
}

function parseMarkdown(markdown: string): React.ReactNode[] {
  const lines = markdown.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Code block
    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3);
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={key++} data-lang={lang}>
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // Headings
    const h1Match = line.match(/^# (.+)/);
    if (h1Match) {
      elements.push(
        <h1 key={key++}>{parseInlineMarkdown(h1Match[1])}</h1>
      );
      i++;
      continue;
    }

    const h2Match = line.match(/^## (.+)/);
    if (h2Match) {
      elements.push(
        <h2 key={key++}>{parseInlineMarkdown(h2Match[1])}</h2>
      );
      i++;
      continue;
    }

    const h3Match = line.match(/^### (.+)/);
    if (h3Match) {
      const text = h3Match[1];
      // Detect HTTP method in headings
      const methodMatch = text.match(
        /^(GET|POST|PUT|PATCH|DELETE)\s+(.+)/
      );
      if (methodMatch) {
        const method = methodMatch[1];
        const path = methodMatch[2];
        elements.push(
          <h3 key={key++} className="flex items-center gap-2 flex-wrap">
            <span
              className={`method-badge method-${method.toLowerCase()}`}
            >
              {method}
            </span>
            <code className="text-[0.95rem] font-medium !bg-transparent !text-neutral-900 !p-0">
              {path}
            </code>
          </h3>
        );
      } else {
        elements.push(
          <h3 key={key++}>{parseInlineMarkdown(text)}</h3>
        );
      }
      i++;
      continue;
    }

    const h4Match = line.match(/^#### (.+)/);
    if (h4Match) {
      elements.push(
        <h4 key={key++}>{parseInlineMarkdown(h4Match[1])}</h4>
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={key++} />);
      i++;
      continue;
    }

    // Table
    if (line.includes("|") && lines[i + 1]?.match(/^\|[\s-:|]+\|/)) {
      const tableLines: string[] = [line];
      i++;
      // Skip separator
      i++;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim() !== "") {
        tableLines.push(lines[i]);
        i++;
      }

      const headers = tableLines[0]
        .split("|")
        .map((h) => h.trim())
        .filter(Boolean);
      const rows = tableLines.slice(1).map((row) =>
        row
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean)
      );

      elements.push(
        <div key={key++} className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {headers.map((h, hi) => (
                  <th key={hi}>{parseInlineMarkdown(h)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{parseInlineMarkdown(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++}>
          {quoteLines.map((ql, qi) => (
            <p key={qi}>{parseInlineMarkdown(ql)}</p>
          ))}
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (line.match(/^[-*] /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        listItems.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      elements.push(
        <ul key={key++}>
          {listItems.map((item, li) => (
            <li key={li}>{parseInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\. /)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        listItems.push(lines[i].replace(/^\d+\. /, ""));
        i++;
      }
      elements.push(
        <ol key={key++}>
          {listItems.map((item, li) => (
            <li key={li}>{parseInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("|") &&
      !lines[i].startsWith("> ") &&
      !lines[i].match(/^[-*] /) &&
      !lines[i].match(/^\d+\. /) &&
      lines[i].trim() !== "---"
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={key++}>{parseInlineMarkdown(paraLines.join(" "))}</p>
      );
    }
  }

  return elements;
}

export default function MarkdownRenderer({ content }: { content: string }) {
  return <div className="prose">{parseMarkdown(content)}</div>;
}
