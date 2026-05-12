/** Split portfolio description blocks into short bullets (truthful text only). */
export function bulletsFromDescription(description, max = 4) {
  if (!description || typeof description !== "string") return [];
  return description
    .split(/\n\n+/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, max);
}

/** Parse "Stack: …" line from hackathon descriptions. */
export function stackTagsFromDescription(description) {
  if (!description || typeof description !== "string") return [];
  const m = description.match(/Stack:\s*([^\n]+)/i);
  if (!m) return [];
  return m[1]
    .split(/[,，]/)
    .map((t) => t.trim())
    .filter(Boolean);
}

/** First narrative block for hackathon card summary (no invention). */
export function firstBlockFromDescription(description, maxLen = 200) {
  if (!description || typeof description !== "string") return "";
  const blocks = description
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
  const raw = blocks[0] || "";
  const cleaned = raw.replace(/\s+/g, " ").trim();
  if (cleaned.length <= maxLen) return cleaned;
  return `${cleaned.slice(0, maxLen - 1)}…`;
}
