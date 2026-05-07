# 当前目标
- 继续为剩余 mission 批次补齐英文翻译，并验证中英文界面的实际体验。

# 已确认事实
- `src/core/lang.ts`、`src/core/i18n.ts`、`src/ui/strings.ts` 已接入主流程；世界地图与游戏内 UI 支持 `zh/en` 切换。
- `src/data/missions/castle.ts`、`concession.ts`、`cyberpunk.ts`、`tomb.ts`、`opera.ts` 已补齐 `translations.en`，覆盖标题、副标题、导语、线索提示、结局与全部可见节点文本。
- `src/core/storage.ts` 恢复存档时会按当前语言重建 `end` 文案，避免切换语言后继续旧存档仍显示旧语言结局。
- `npx tsc --noEmit` 与 `npm run build` 已于 2026-05-06 通过。

# 下一步
- 继续为下一批 mission 补 `translations.en`，并保持地图英文名与 mission 内英文标题一致。
- 在浏览器中手动点验英文模式下的密码提示、排序文本、详情面板换行和已结局存档恢复表现。

# 阻塞
- 当前无代码 blocker；剩余是浏览器端体验验收与后续 mission 翻译批次。
