# History

## 2026-05-05
- 将项目重构为 `text-escape v2`：核心状态从旧剧情结构切到 `Set<string>` 线索集。
- 新增 `src/core/clue-eval.ts`，统一处理条件求值、场景互斥和节点显隐逻辑。
- 重写 `src/core/engine.ts` / `storage.ts`，用 mission 数据驱动交互、触发器和结局。
- 新增 `src/data/missions/castle.ts` 与 `src/data/missions/index.ts`，落地烬色古堡节点树和背包道具链。
- 重写 `src/ui/render.ts` 与 `src/style.css`，改成纯黑黑金风 SVG 节点图 UI。
- 删除旧 v1 文件 `src/data/story.ts`、`src/counter.ts`。
- 构建通过，并用本地 reducer 脚本验证了完整逃脱链可达 `perfect` 结局。

## 2026-05-06
- 接入运行时双语链路：新增 `src/core/lang.ts`、`src/core/i18n.ts`、`src/ui/strings.ts`，并在 `main.ts` / `world-map.ts` / `render.ts` 中接入语言切换。
- 更新 `src/style.css`，为世界地图增加语言切换按钮样式。
- 为 `castle`、`concession`、`cyberpunk`、`tomb`、`opera` 五个 mission 补齐 `translations.en`，覆盖 clueMessages、endings 与全部可见节点文本。
- 修正结局存档的语言恢复：`loadGameState()` 现按当前 mission 文案重建 `end`。
- 再次通过 `npx tsc --noEmit` 与 `npm run build`。
