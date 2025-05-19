"use client";

import { useState, useEffect } from "react";

interface SanitizedHtmlContentProps {
  html: string;
}

export default function SanitizedHtml({ html }: SanitizedHtmlContentProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    import("dompurify").then((module) => {
      setSanitizedHtml(module.default.sanitize(html));
    });
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}
