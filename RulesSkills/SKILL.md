---
name: RulesSkills
description: 与用户 jonny 协作时长期有效的规则、偏好和纠正记录。由 SessionStart hook 在每次会话开始时自动注入上下文,必须始终遵守。
---

# 协作规则与纠正记录 (RulesSkills)

> 本文件由 `SessionStart` hook 在每次会话开始时自动加载进上下文。
> 这里记录「必须遵守的规则」和「用户指出我犯错后纠正的正确做法」。
> 当用户提出新规则、或指出我犯错时,把内容追加到下面相应小节,然后 commit 备份。

## 规则 (Rules)

- **危险操作先自查(yolo 模式)**:本机 Claude Code 以 `bypassPermissions` 全局运行,任何提示都不会拦截破坏性命令。执行 `rm -rf`、`git reset --hard`、覆盖/删除文件等不可逆操作前,先确认目标、三思而行。

## 纠正记录 (Corrections)

<!-- 用户指出我犯错后,在此追加条目。格式建议:日期 + 错误描述 + 正确做法。 -->

(暂无)
