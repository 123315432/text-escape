# text-escape

## 当前架构
- `src/main.ts`：加载本地化 mission、存档、UI 状态，驱动 render/dispatch 循环，并处理地图语言切换。
- `src/core/types.ts`：v2 通用类型，核心状态为 `Set<string>` 线索集，并定义 `translations.en` 的 mission/node 文案覆盖结构。
- `src/core/clue-eval.ts`：线索条件求值、场景互斥切换、节点显隐判定。
- `src/core/engine.ts`：零硬编码 reducer，负责节点交互、道具使用/组合、trigger 链和结局判定，并支持 mission 级结局文案覆盖。
- `src/core/storage.ts`：`text-escape.save.v2` 存档读写，并清理旧 `text-escape.save.v1`；恢复存档时按当前语言重建结局文案。
- `src/core/lang.ts`：维护 `text-escape.lang` 语言状态。
- `src/core/i18n.ts`：将 `Mission.translations.en` 覆盖到 mission、node、clue 和 ending 文案。
- `src/data/missions/castle.ts`：烬色古堡 mission 数据，定义场景树、背包道具、谜题、触发器。
- `src/data/missions/mirror.ts`：镜像双生 mission 数据，定义现实/镜中/镜心三场景、跨场景抽屉联动、双生玉玺与导光棱镜链路。
- `src/data/missions/meta.ts`：元叙事终局 mission 数据，定义白房间→调试长廊→核心库三层结构、访问卡/快照钥匙链、流程重排与错误回退。
- `src/data/missions/index.ts`：导出 `MISSIONS` 和 `DEFAULT_MISSION_ID`。
- `src/ui/render.ts`：黑金风 SVG 节点图 UI、底部详情、背包、密码/排序模态、拖拽平移，并消费通用 UI 文案表。
- `src/ui/world-map.ts`：章节世界地图、关卡详情与语言切换按钮。
- `src/ui/strings.ts`：世界地图与游戏内通用 UI 的 zh/en 文案表。
- `src/style.css`：mobile-first 430px 黑底样式。

## 已完成阶段
- 已从旧房间/剧情硬编码结构切到 mission 驱动节点树。
- 已完成大厅→走廊→密码室→逃脱的完整链路与三种结局触发。
- 已完成镜像双生关卡：现实书房 ↔ 镜中书房 ↔ 镜心之间的跨界因果、双道具组合和导光逃脱。
- 已完成 `meta` 关卡：白房间→调试长廊→核心库，含假 EXIT 回退、手动权限门、普通/完美/超时三结局。
- 已完成 v2 存档恢复，刷新后保留线索集、倒计时和结局状态。
- 已为 `castle`、`concession`、`cyberpunk`、`tomb`、`opera` 五个 mission 补齐 `translations.en`，覆盖标题、副标题、导语、线索提示、结局和节点文案。
- 已完成首版运行时 bilingual i18n：地图与游戏内 UI 可切换 zh/en，mission 文案按当前语言动态构建。

## 接口与规则
- 状态标志前缀：`#` 普通线索，`*` 场景，`@` 内置，`-` 删除线索。
- `applyClues()` 负责 `*` 场景互斥和 `-` 删除语义。
- `reduceGame()` 只消费 `GameAction` 和 mission 数据，不依赖具体谜题硬编码。
- 结局触发条件定义在 mission `triggers`，文案可由 mission `endings` 覆盖默认值。
- `Mission.translations?.en` 支持覆盖 `title/subtitle/intro`、`clueMessages`、`endings` 以及按 `node.id` 映射的 `title/desc/sortSymbols/interactions`。
- `buildLocalizedMission()` 在英文模式下返回浅克隆 mission，并保持 clue id / code / 逻辑不变。

## 删除的旧文件
- 已删除 `src/data/story.ts`。
- 已删除 `src/counter.ts`。
