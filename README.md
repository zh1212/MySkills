# MyTools Skills

个人 Claude Code skills 仓库。每个子目录是一个 skill(含 `SKILL.md`)。

## 结构

```
Skills/
├── playwright-skill/   # Playwright 浏览器自动化
└── ...
```

## 与 Claude Code 关联

本目录通过软链接挂载为 Claude Code 的外部 skills 目录：

```
~/.claude/skills -> /home/jonny/MyTools/Skills
```

Claude Code 在会话启动时扫描 `~/.claude/skills/*/SKILL.md` 来发现可用 skill。

## 新增 skill

把 skill 目录放到本仓库下即可，例如：

```bash
cp -r /path/to/some-skill ~/.claude/skills/some-skill   # 经软链接落到本仓库
```

需要安装依赖的 skill，进入其目录运行 `npm run setup`（或其他 setup 命令）。

## 说明

- `node_modules` 等依赖目录已被 `.gitignore` 忽略，不进版本库。
- Playwright 的浏览器二进制缓存在 `~/.cache/ms-playwright/`，不在本仓库内。
