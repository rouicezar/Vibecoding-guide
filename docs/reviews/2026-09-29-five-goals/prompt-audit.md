# 全步骤提示词交接审计

所有现有步骤均检查：材料输入 → 实际产物 → 下一步读取。填写类模板需确认后通过已有保存话术交给工具，本站存储不视为真实项目文件。

| 步骤 | 输入 | 产物 | 类型 |
|---|---|---|---|
| idea | 本人当前材料/项目位置 | 本站确认记录或只读核对 | 操作及提示词 |
| description | 本人当前材料/项目位置 | 本站确认记录或只读核对 | worksheet |
| tool | 本人当前材料/项目位置 | 本站确认记录或只读核对 | worksheet |
| folder | 本人当前材料/项目位置 | 本站确认记录或只读核对 | worksheet |
| open-project | 本人当前材料/项目位置 | 本站确认记录或只读核对 | prompt |
| checkpoint | 本人当前材料/项目位置 | idea.md、工具支持的规则文件 / supported rule file、.gitignore | prompt |
| first-file | idea.md | 本站确认记录或只读核对 | prompt |
| clarify | idea.md | idea.md | prompt |
| scope | idea.md | docs/requirements.md | prompt |
| requirements | idea.md、docs/requirements.md | docs/requirements.md | prompt |
| stories | idea.md、docs/requirements.md | docs/stories.md | 操作及提示词 |
| prototype | docs/requirements.md、docs/stories.md | docs/design.md | prompt |
| choose-stack | docs/requirements.md、docs/stories.md、docs/design.md | docs/design.md | prompt |
| plan | docs/requirements.md、docs/stories.md、docs/design.md | tasks/todo.md | 操作及提示词 |
| environment | docs/design.md、tasks/todo.md | README.md、docs/checks.md | 操作及提示词 |
| preview | docs/requirements.md、docs/stories.md、docs/design.md、tasks/todo.md、README.md | tasks/todo.md、docs/checks.md | prompt |
| interface | docs/design.md、tasks/todo.md | docs/checks.md | prompt |
| save | docs/requirements.md、docs/design.md、tasks/todo.md | docs/checks.md | prompt |
| flow | docs/requirements.md、tasks/todo.md | docs/checks.md | prompt |
| test | docs/requirements.md、docs/checks.md | docs/checks.md | prompt |
| restart | README.md | docs/checks.md | 操作及提示词 |
| accept | 本人当前材料/项目位置 | docs/acceptance.md | worksheet |
| feedback | 本人当前材料/项目位置 | docs/feedback.md | 操作及提示词 |
| repair-plan | docs/feedback.md、docs/requirements.md | docs/repair-plan.md | 操作及提示词 |
| repair | docs/repair-plan.md、docs/feedback.md | docs/checks.md、docs/feedback.md | 操作及提示词 |
| delivery | 本人当前材料/项目位置 | docs/delivery.md | worksheet |
| release-review | docs/requirements.md、docs/design.md、docs/checks.md、docs/acceptance.md、docs/delivery.md | docs/release.md、docs/feedback.md | prompt |
| package | docs/design.md、docs/delivery.md、docs/release.md | docs/release.md | 操作及提示词 |
| live-check | docs/release.md、docs/delivery.md | docs/release.md | prompt |
| publish | docs/delivery.md | 本站确认记录或只读核对 | prompt |
| maintain | docs/release.md | docs/handoff.md | 操作及提示词 |

修复：重启提示词补检查结果落盘；Pages 方案提前咨询不依赖后续 release.md；维护提示词明确可在获准测试环境核验备份恢复；清除描述/反馈/交付/准备检查/Pages 的英文迁移残句。
原始输入缺失或工具无法读取时停止，回上一产物步骤补齐，不虚构文件或结果。源码与最终双语构建均另行验证。
