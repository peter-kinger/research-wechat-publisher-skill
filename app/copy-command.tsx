"use client";

import { useState } from "react";

type CopyCommandProps = {
  command: string;
  label: string;
  copiedLabel: string;
};

export function CopyCommand({ command, label, copiedLabel }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="copy-button" type="button" onClick={copy}>
      {copied ? copiedLabel : label}
    </button>
  );
}
