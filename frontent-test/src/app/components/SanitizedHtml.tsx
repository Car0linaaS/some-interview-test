"use client";

import { useState, useEffect } from "react";

interface SanitizedHtmlContentProps {
  html: string;
}

// Sanitize html to prevent XSS attacks
export default function SanitizedHtml({ html }: SanitizedHtmlContentProps) {
  // Use a hook for the sanitized state variable
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  // Purify the html before rendering it
  useEffect(() => {
    import("dompurify").then((module) => {
      setSanitizedHtml(module.default.sanitize(html));
    });
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
