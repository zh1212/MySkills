#!/usr/bin/env node
// SessionStart hook:读取本 skill 的 SKILL.md,作为 additionalContext 注入每次会话。
const fs = require('node:fs');
const path = require('node:path');

const rulesFile = path.join(__dirname, 'SKILL.md');

let content;
try {
  content = fs.readFileSync(rulesFile, 'utf8');
} catch {
  process.exit(0); // 规则文件不存在时静默退出,不注入任何内容
}

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'SessionStart',
      additionalContext: content,
    },
  })
);
