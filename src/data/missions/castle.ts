import type { Mission } from '../../core/types'

export const castleMission: Mission = {
  id: 'castle',
  title: '烬色古堡',
  subtitle: '线索集驱动的节点树逃脱',
  intro: '你被困在烬色古堡，必须沿着线索链拆开大厅、走廊和密码室的机关。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*hall'],
  bgmScenes: {
    '*hall': '/audio/bgm/hall.mp3',
    '*corridor': '/audio/bgm/corridor.mp3',
    '*chamber': '/audio/bgm/chamber.mp3',
  },
  clueMessages: {
    '#hall_candle_code': '烛台数字刻进了记忆。',
    '#safe_solved': '书桌抽屉弹开了！',
    '#has_broken_key': '得到了断裂黄铜钥匙。',
    '#has_gear_core': '找到了齿轮芯。',
    '#noticed_hall_gate': '铁门锁芯中心是空的。',
    '#repaired_key_ready': '断钥匙与齿轮芯拼合了！',
    '#hall_gate_unlocked': '东侧铁门退开了！',
    '*corridor': '— 走廊 —',
    '#corridor_sequence_hint': '"先见光，再开锁，再推门，最后照见自己。"',
    '#corridor_perfect_hint': '"别漏掉任何线索。"',
    '*chamber': '— 密码室 —',
    '#sequence_solved': '四柱机关归位，轰鸣声渐息。',
    '#used_repaired_key': '钥匙插入锁芯，咔哒一声。',
    '*hall': '— 入口大厅 —',
  },
  translations: {
    en: {
      title: 'Ashen Castle',
      subtitle: 'A clue-driven escape through a ruined keep',
      intro: 'You are trapped inside Ashen Castle. Follow the chain of clues to dismantle the mechanisms in the hall, the corridor, and the cipher chamber.',
      clueMessages: {
        '#hall_candle_code': 'The numbers on the candlesticks are fixed in your memory.',
        '#safe_solved': 'The desk drawer sprang open!',
        '#has_broken_key': 'You obtained a broken brass key.',
        '#has_gear_core': 'You found a gear core.',
        '#noticed_hall_gate': 'The center of the iron gate\'s lock is hollow.',
        '#repaired_key_ready': 'The broken key and gear core fit together!',
        '#hall_gate_unlocked': 'The eastern iron gate slid open!',
        '*corridor': '— Corridor —',
        '#corridor_sequence_hint': '"See the light first, then the lock, then the door, and finally yourself."',
        '#corridor_perfect_hint': '"Leave no clue behind."',
        '*chamber': '— Cipher Chamber —',
        '#sequence_solved': 'The four-pillar mechanism settles into place as the rumbling fades.',
        '#used_repaired_key': 'The key clicks into the lock.',
        '*hall': '— Entrance Hall —',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You forced the castle gate and made it out, though some of the keep\'s secrets stayed buried in ash and iron.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You followed every clue through hall, corridor, and chamber, then walked out with the castle\'s logic fully unraveled.',
        },
        timeout: {
          title: 'Time Ran Out',
          body: 'Before the final gate yielded, the castle\'s mechanisms reset and sealed Ashen Castle around you once more.',
        },
      },
      nodes: {
        root: {
          title: 'Ashen Castle',
          desc: 'The node tree opens from here. Track clues, collect items, combine them, and advance each scene.',
        },
        hall: {
          title: 'Entrance Hall',
          desc: 'Candlesticks, a desk, and an iron gate form the first unlocking chain.',
        },
        hall_candles: {
          title: 'Four Candlesticks',
          desc: 'The candles have burned to different heights, as if the code were written straight into the dust.',
          interactions: [
            {
              label: 'Inspect Candlesticks',
              desc: 'From left to right, the wax marks trace the numbers: 4 · 1 · 3 · 2',
            },
          ],
        },
        hall_safe: {
          title: 'Desk Combination Lock',
          desc: 'A four-digit lock on the drawer hides the key parts.',
          interactions: [
            {
              label: 'Enter Code',
              desc: 'Try a 4-digit number.',
            },
          ],
        },
        hall_gate: {
          title: 'Eastern Iron Gate',
          desc: 'The center of the lock is hollow, as if waiting for a repaired key.',
          interactions: [
            {
              label: 'Inspect Keyhole',
              desc: 'A curved gap sits in the middle of the lock, as if it were waiting for a key that had been broken and fitted back together.',
            },
          ],
        },
        hall_exit: {
          title: 'Passage to the Corridor',
          desc: 'Only after the iron gate withdraws does the corridor beyond connect.',
          interactions: [
            {
              label: 'Enter Corridor',
              desc: 'Switch to the corridor scene.',
            },
          ],
        },
        corridor: {
          title: 'Narrow Corridor',
          desc: 'The inscription gives the order. The cracked mirror gives the condition for a perfect ending.',
        },
        corridor_plaque: {
          title: 'Stone Plaque',
          desc: 'See the light first, then the lock, then the door, and finally yourself.',
          interactions: [
            {
              label: 'Read Inscription',
              desc: 'See the light first, then the lock, then the door, and finally yourself.',
            },
          ],
        },
        corridor_mirror: {
          title: 'Cracked Mirror',
          desc: 'A line hovers in the reflection: leave no clue behind.',
          interactions: [
            {
              label: 'Stare into the Mirror',
              desc: 'Words surface in the reflection: leave no clue behind.',
            },
          ],
        },
        corridor_return: {
          title: 'Back to the Hall',
          desc: 'You can always turn back and finish the chains in the hall.',
          interactions: [
            {
              label: 'Return to the Hall',
              desc: 'Switch back to the hall scene.',
            },
          ],
        },
        corridor_chamber: {
          title: 'Archway to the Cipher Chamber',
          desc: 'The final mechanism and the exit lie deeper inside.',
          interactions: [
            {
              label: 'Enter the Cipher Chamber',
              desc: 'Switch to the cipher chamber.',
            },
          ],
        },
        chamber: {
          title: 'Cipher Chamber',
          desc: 'The four-pillar mechanism decides whether the castle gate releases its final lock.',
        },
        chamber_mechanism: {
          title: 'Four-Pillar Mechanism',
          desc: 'The symbols are candle, key, gate, and mirror. Only the correct order will release the lock.',
          sortSymbols: ['Candle', 'Key', 'Gate', 'Mirror'],
          interactions: [
            {
              label: 'Activate Mechanism',
              desc: 'Arrange the four symbols.',
            },
          ],
        },
        chamber_return: {
          title: 'Back to the Corridor',
          desc: 'If your clues are still incomplete, you can retreat to the corridor.',
          interactions: [
            {
              label: 'Return to the Corridor',
              desc: 'Switch back to the corridor.',
            },
          ],
        },
        chamber_exit: {
          title: 'Castle Gate',
          desc: 'Once the mechanism settles into place, pushing the gate is enough to attempt your escape.',
          interactions: [
            {
              label: 'Push Open the Gate',
              desc: 'Trigger the escape.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Stores the items recovered on site.',
        },
        broken_key_item: {
          title: 'Broken Brass Key',
          desc: 'The teeth are intact, but the bow has snapped off.',
        },
        gear_core_item: {
          title: 'Gear Core',
          desc: 'Its fine teeth are intact. It looks like it can be fitted back into the body of the key.',
        },
        repaired_key_item: {
          title: 'Repaired Brass Key',
          desc: 'The gear core and key body now fit together seamlessly.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '烬色古堡',
    desc: '节点树从这里展开。找到线索、收集道具、组合并推进场景。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'hall',
        title: '入口大厅',
        desc: '烛台、书桌和铁门构成第一条解锁链。',
        type: 'text',
        sceneClue: '*hall',
        scenes: ['*hall'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'hall_candles',
            title: '四盏烛台',
            desc: '四盏烛泪高低不同，像把密码直接写在灰尘上。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '查看烛台',
                desc: '四支蜡烛从左到右，蜡泪凝痕刻着数字：4 · 1 · 3 · 2',
                when: '!#hall_candle_code',
                addClues: ['#hall_candle_code'],
              },
            ],
            doneClue: '#hall_candle_code',
          },
          {
            id: 'hall_safe',
            title: '书桌密码锁',
            desc: '抽屉上的四位密码锁藏着关键零件。',
            type: 'password',
            scenes: ['*hall'],
            layout: { direction: 270, distance: 150 },
            preClue: '#hall_candle_code',
            code: '4132',
            successClues: ['#safe_solved', '#has_broken_key', '#has_gear_core'],
            doneClue: '#safe_solved',
            interactions: [
              {
                label: '输入密码',
                desc: '尝试 4 位数字。',
              },
            ],
          },
          {
            id: 'hall_gate',
            title: '东侧铁门',
            desc: '锁芯中心空了一圈，像在等一把修复后的钥匙。',
            type: 'switch',
            scenes: ['*hall'],
            layout: { direction: 315, distance: 150 },
            preClue: '#hall_candle_code',
            doneClue: '#hall_gate_unlocked',
            interactions: [
              {
                label: '观察锁孔',
                desc: '锁芯正中有弧形缺口，像在等一把断裂后重新拼合的钥匙。',
                when: '!#hall_gate_unlocked',
                addClues: ['#noticed_hall_gate'],
              },
            ],
          },
          {
            id: 'hall_exit',
            title: '通往走廊',
            desc: '铁门退开后，后面的走廊才会接通。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 15, distance: 160 },
            preClue: '#hall_gate_unlocked',
            interactions: [
              {
                label: '进入走廊',
                desc: '切换到走廊场景。',
                addClues: ['*corridor', '-*hall'],
              },
            ],
          },
        ],
      },
      {
        id: 'corridor',
        title: '狭长走廊',
        desc: '铭文给出顺序，裂镜给出完美结局条件。',
        type: 'text',
        sceneClue: '*corridor',
        scenes: ['*corridor'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'corridor_plaque',
            title: '石牌铭文',
            desc: '先见光，再开锁，再推门，最后照见自己。',
            type: 'text',
            scenes: ['*corridor'],
            layout: { direction: 315, distance: 150 },
            interactions: [
              {
                label: '读取铭文',
                desc: '先见光，再开锁，再推门，最后照见自己。',
                when: '!#corridor_sequence_hint',
                addClues: ['#corridor_sequence_hint'],
              },
            ],
            doneClue: '#corridor_sequence_hint',
          },
          {
            id: 'corridor_mirror',
            title: '裂镜',
            desc: '镜面里浮着一句话：别漏掉任何线索。',
            type: 'text',
            scenes: ['*corridor'],
            preClue: '#corridor_sequence_hint',
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '凝视裂镜',
                desc: '镜中字迹：别漏掉任何线索。',
                when: '!#corridor_perfect_hint',
                addClues: ['#corridor_perfect_hint'],
              },
            ],
            doneClue: '#corridor_perfect_hint',
          },
          {
            id: 'corridor_return',
            title: '退回大厅',
            desc: '随时可以回头补大厅里的链条。',
            type: 'text',
            scenes: ['*corridor'],
            preClue: '#corridor_sequence_hint',
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '返回大厅',
                desc: '切回大厅场景。',
                addClues: ['*hall', '-*corridor'],
              },
            ],
          },
          {
            id: 'corridor_chamber',
            title: '密码室拱门',
            desc: '最终机关和出口都在更深处。',
            type: 'text',
            scenes: ['*corridor'],
            preClue: '#corridor_perfect_hint',
            layout: { direction: 45, distance: 160 },
            interactions: [
              {
                label: '进入密码室',
                desc: '切换到密码室。',
                addClues: ['*chamber', '-*corridor'],
              },
            ],
          },
        ],
      },
      {
        id: 'chamber',
        title: '密码室',
        desc: '四柱机关决定古堡正门是否退锁。',
        type: 'text',
        sceneClue: '*chamber',
        scenes: ['*chamber'],
        layout: { direction: 0, distance: 260 },
        children: [
          {
            id: 'chamber_mechanism',
            title: '四柱机关',
            desc: '符号分别是烛、钥、门、镜。按对顺序才会退锁。',
            type: 'click-sort',
            scenes: ['*chamber'],
            layout: { direction: 300, distance: 150 },
            sortSymbols: ['烛', '钥', '门', '镜'],
            sortSolution: [0, 1, 2, 3],
            successClues: ['#sequence_solved'],
            doneClue: '#sequence_solved',
            interactions: [
              {
                label: '启动机关',
                desc: '排列四个符号。',
              },
            ],
          },
          {
            id: 'chamber_return',
            title: '回到走廊',
            desc: '若线索还没补齐，可以退回走廊。',
            type: 'text',
            scenes: ['*chamber'],
            preClue: '#sequence_solved',
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '返回走廊',
                desc: '切回走廊。',
                addClues: ['*corridor', '-*chamber'],
              },
            ],
          },
          {
            id: 'chamber_exit',
            title: '古堡正门',
            desc: '机关归位后，推门即可尝试逃出。',
            type: 'text',
            scenes: ['*chamber'],
            layout: { direction: 30, distance: 160 },
            preClue: '#sequence_solved',
            interactions: [
              {
                label: '推开正门',
                desc: '触发逃脱。',
                addClues: ['@escape'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '收纳现场回收到的道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'broken_key_item',
            title: '断裂黄铜钥匙',
            desc: '钥齿完整，钥柄断裂。',
            type: 'item',
            preClue: ['AND', '#has_broken_key', '!#repaired_key_ready'],
            combineWith: [
              {
                targetId: 'gear_core_item',
                addClues: ['#repaired_key_ready'],
              },
            ],
          },
          {
            id: 'gear_core_item',
            title: '齿轮芯',
            desc: '边缘细齿完整，能嵌回钥匙中芯。',
            type: 'item',
            preClue: ['AND', '#has_gear_core', '!#repaired_key_ready'],
            combineWith: [
              {
                targetId: 'broken_key_item',
                addClues: ['#repaired_key_ready'],
              },
            ],
          },
          {
            id: 'repaired_key_item',
            title: '修复黄铜钥匙',
            desc: '齿轮芯和钥柄已经严丝合缝。',
            type: 'item',
            preClue: '#repaired_key_ready',
            itemUse: {
              targetIds: ['hall_gate'],
              addClues: ['#hall_gate_unlocked', '#used_repaired_key'],
            },
          },
        ],
      },
    ],
  },
  triggers: [
    {
      id: 'perfect_escape',
      when: [
        'AND',
        '@escape',
        '#hall_candle_code',
        '#safe_solved',
        '#has_broken_key',
        '#has_gear_core',
        '#corridor_sequence_hint',
        '#corridor_perfect_hint',
      ],
      addClues: ['@perfect_ending'],
    },
    {
      id: 'normal_escape',
      when: ['AND', '@escape', '!@perfect_ending'],
      addClues: ['@normal_ending'],
    },
    {
      id: 'timeout',
      when: '@timeout',
      addClues: ['@timeout_ending'],
    },
  ],
}
