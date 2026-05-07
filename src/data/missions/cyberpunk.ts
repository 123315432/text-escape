import type { Mission } from '../../core/types'

export const cyberpunkMission: Mission = {
  id: 'cyberpunk',
  title: '赛博水墨',
  subtitle: '数字荒原中的古法机关',
  intro: '系统崩溃前的最后三分钟，你被困在废弃的数据节点群里。墨迹引路，五行归位，古法机关响应数字共振——找到出口，穿越虚空。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*terminal'],
  bgmScenes: {
    '*terminal': '/audio/bgm/cyber2.mp3',
    '*grid': '/audio/bgm/cyber3.mp3',
    '*void': '/audio/bgm/rain.mp3',
  },
  clueMessages: {
    '*terminal': '— 数据终端室 —',
    '*grid': '— 电路矩阵间 —',
    '*void': '— 虚空核心 —',
    '#terminal_access': '屏幕上闪着字：墨迹引路，三字成诀。',
    '#keyboard_unlocked': '键盘解锁！',
    '#has_data_shard_a': '数据碎片A浮现，嵌入背包。',
    '#circuit_aligned': '电路归位！',
    '#has_data_shard_b': '数据碎片B涌出，嵌入背包。',
    '#hologram_read': '全息图显示：虚空核心坐标已解锁。',
    '#data_merged': '两块碎片融合成完整数据核心。',
    '#ancient_gate_open': '古老符文与数字光流共振——门开了！',
  },
  translations: {
    en: {
      title: 'Cyber Ink',
      subtitle: 'Ancient mechanisms in a digital wasteland',
      intro: 'With only moments left before system collapse, you are trapped in an abandoned cluster of data nodes. Ink-light points the way, the Five Elements must be aligned, and ancient machinery answers digital resonance. Find the exit and cross the void.',
      clueMessages: {
        '*terminal': '— Terminal Chamber —',
        '*grid': '— Circuit Matrix —',
        '*void': '— Void Core —',
        '#terminal_access': 'Text flashes across the screen: ink leads the way; three characters form the key.',
        '#keyboard_unlocked': 'Keyboard unlocked!',
        '#has_data_shard_a': 'Data Shard A materializes and drops into your pack.',
        '#circuit_aligned': 'The circuit has aligned!',
        '#has_data_shard_b': 'Data Shard B surges out and drops into your pack.',
        '#hologram_read': 'The hologram displays the unlocked coordinates of the Void Core.',
        '#data_merged': 'The two shards merge into a complete data core.',
        '#ancient_gate_open': 'Ancient runes resonate with the digital light stream — the gate opens!',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You forced a route through the collapsing node cluster and slipped out before the void sealed over.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You aligned every system, read every signal, and crossed the void with the old mechanism and the digital ruins in perfect sync.',
        },
        timeout: {
          title: 'Time Ran Out',
          body: 'Before the resonance stabilized, the node cluster broke apart and the exit was swallowed by system failure.',
        },
      },
      nodes: {
        root: {
          title: 'Cyber Ink',
          desc: 'Three digital nodes unlock in sequence while an ancient mechanism waits for resonance.',
        },
        terminal: {
          title: 'Terminal Chamber',
          desc: 'A fluorescent screen pulses in the dark while streams of ink-black light creep through the cracks beside an ink-script keyboard.',
        },
        terminal_screen: {
          title: 'Main Screen',
          desc: 'Ancient Chinese characters and hexadecimal strings roll together across the display in a looping stream.',
          interactions: [
            {
              label: 'Read the Screen',
              desc: 'Fix your eyes on the character stream and pick the key hint out of the noise.',
            },
          ],
        },
        terminal_keyboard: {
          title: 'Ink Keyboard',
          desc: 'Three keys are marked with brush-script characters. Their order must still be determined.',
          interactions: [
            {
              label: 'Enter Key Phrase',
              desc: 'Input the three-character phrase shown on the screen to activate the keyboard. // ⚠️ CN-SPECIFIC: the answer is the Chinese characters "墨引路"',
            },
          ],
        },
        terminal_grid_entrance: {
          title: 'Circuit Gate',
          desc: 'A light-barrier door hides behind the crack in the wall, leading to the circuit matrix.',
          interactions: [
            {
              label: 'Enter the Matrix Room',
              desc: 'Pass through the light barrier into the circuit matrix.',
            },
          ],
        },
        grid: {
          title: 'Circuit Matrix',
          desc: 'Five-element runes float above a circuit board in disarray while a holographic projector glows faintly in the corner.',
        },
        grid_circuit: {
          title: 'Circuit Sequence',
          desc: 'The runes are Fire, Water, Wood, Metal, Earth. They must be reordered into the generating cycle to restore flow.',
          sortSymbols: ['Fire', 'Water', 'Wood', 'Metal', 'Earth'],
          interactions: [
            {
              label: 'Adjust Runes',
              desc: 'Drag the five-element runes into the proper generating sequence.',
            },
          ],
        },
        grid_hologram: {
          title: 'Holographic Projector',
          desc: 'The projector reads the circuit signal and casts a coordinate map of the Void Core.',
          interactions: [
            {
              label: 'Read the Hologram',
              desc: 'Touch the projector head and parse the coordinate data.',
            },
          ],
        },
        grid_return: {
          title: 'Return to the Terminal',
          desc: 'Head back to the terminal chamber if any clues are still missing.',
          interactions: [
            {
              label: 'Return to the Terminal',
              desc: 'Go back through the light barrier to the terminal chamber.',
            },
          ],
        },
        grid_void_entrance: {
          title: 'Void Gate',
          desc: 'Once the coordinates are unlocked, a portal to the Void Core forms inside the folded space ahead.',
          interactions: [
            {
              label: 'Enter the Void',
              desc: 'Step through the portal to the Void Core.',
            },
          ],
        },
        void: {
          title: 'Void Core',
          desc: 'In zero gravity, ancient machinery roars amid digital light streams while the fusion platform at the center waits for the complete core.',
        },
        void_fusion_platform: {
          title: 'Fusion Platform',
          desc: 'Two empty slots wait for Data Shards A and B to be inserted together.',
          interactions: [
            {
              label: 'Fuse the Shards',
              desc: 'Insert Data Shards A and B from your pack into the platform at the same time.',
            },
          ],
        },
        void_ancient_gate: {
          title: 'Ancient Mechanism',
          desc: 'Runes are carved into a floating stone disk, waiting for a digital resonance signal to wake them.',
          interactions: [
            {
              label: 'Activate Mechanism',
              desc: 'Feed the data core\'s energy into the ancient runes and trigger the resonance.',
            },
          ],
        },
        void_exit: {
          title: 'Escape Breach',
          desc: 'Once the mechanism opens, the crack in the void widens into an exit large enough to pass through.',
          interactions: [
            {
              label: 'Cross the Exit',
              desc: 'Leap into the void breach and escape the node cluster.',
            },
          ],
        },
        void_return: {
          title: 'Return to the Matrix',
          desc: 'If you still lack a shard, go back and complete the circuit room.',
          interactions: [
            {
              label: 'Return to the Matrix',
              desc: 'Use the portal to go back to the circuit matrix.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Stores items extracted from the digital nodes.',
        },
        data_shard_a: {
          title: 'Data Shard A',
          desc: 'It surfaced after the terminal keyboard was unlocked, flickering with half a stream of rune-light.',
        },
        data_shard_b: {
          title: 'Data Shard B',
          desc: 'It surged out after the circuit was aligned, mirroring Shard A.',
        },
        data_core: {
          title: 'Data Core',
          desc: 'Formed by fusing the two shards, this complete hybrid of code and runes can activate the ancient mechanism.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '赛博水墨',
    desc: '三处数字节点依序解锁，古法机关等待共振启动。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 场景一：数据终端室 ────────────────────────────
      {
        id: 'terminal',
        title: '数据终端室',
        desc: '荧光屏在黑暗中跳动，墨色光流沿着裂缝蔓延，一台墨迹键盘静置在主机旁。',
        type: 'text',
        sceneClue: '*terminal',
        scenes: ['*terminal'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'terminal_screen',
            title: '主机屏幕',
            desc: '屏幕上循环滚动着古汉字与十六进制混排的字符流。',
            type: 'text',
            scenes: ['*terminal'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '读取屏幕',
                desc: '盯住字符流，从噪声中辨出关键提示。',
                when: '!#terminal_access',
                addClues: ['#terminal_access'],
              },
            ],
            doneClue: '#terminal_access',
          },
          {
            id: 'terminal_keyboard',
            title: '墨迹键盘',
            desc: '键帽上的字用毛笔体印制，共三字，顺序待破。',
            type: 'password',
            scenes: ['*terminal'],
            layout: { direction: 270, distance: 150 },
            preClue: '#terminal_access',
            code: '墨引路',
            successClues: ['#keyboard_unlocked', '#has_data_shard_a'],
            doneClue: '#keyboard_unlocked',
            interactions: [
              {
                label: '输入密语',
                desc: '按屏幕提示输入三字密语激活键盘。',
              },
            ],
          },
          {
            id: 'terminal_grid_entrance',
            title: '电路入口',
            desc: '墙壁裂缝后是一道光栅门，通往电路矩阵间。',
            type: 'text',
            scenes: ['*terminal'],
            layout: { direction: 315, distance: 150 },
            preClue: '#terminal_access',
            interactions: [
              {
                label: '进入电路间',
                desc: '穿过光栅门，进入电路矩阵间。',
                addClues: ['*grid', '-*terminal'],
              },
            ],
          },
        ],
      },

      // ── 场景二：电路矩阵间 ───────────────────────────
      {
        id: 'grid',
        title: '电路矩阵间',
        desc: '五行符文悬浮在电路板上方，位置错乱；角落里一台全息投影仪散发着微光。',
        type: 'text',
        sceneClue: '*grid',
        scenes: ['*grid'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'grid_circuit',
            title: '电路排序',
            desc: '五行符文：火、水、木、金、土，需按相生顺序重新排列方能导通。',
            type: 'click-sort',
            scenes: ['*grid'],
            layout: { direction: 45, distance: 150 },
            sortSymbols: ['火', '水', '木', '金', '土'],
            sortSolution: [2, 4, 1, 0, 3],
            successClues: ['#circuit_aligned', '#has_data_shard_b'],
            doneClue: '#circuit_aligned',
            interactions: [
              {
                label: '调整符文',
                desc: '拖动五行符文到正确的相生顺序。',
              },
            ],
          },
          {
            id: 'grid_hologram',
            title: '全息投影仪',
            desc: '投影仪读取电路信号，投出虚空核心的坐标图。',
            type: 'switch',
            scenes: ['*grid'],
            layout: { direction: 315, distance: 150 },
            preClue: '#circuit_aligned',
            doneClue: '#hologram_read',
            interactions: [
              {
                label: '读取全息',
                desc: '触摸投影仪读头，解析坐标数据。',
                when: '!#hologram_read',
                addClues: ['#hologram_read'],
              },
            ],
          },
          {
            id: 'grid_return',
            title: '返回终端',
            desc: '退回数据终端室，补充遗漏线索。',
            type: 'text',
            scenes: ['*grid'],
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '返回终端',
                desc: '穿过光栅门退回数据终端室。',
                addClues: ['*terminal', '-*grid'],
              },
            ],
          },
          {
            id: 'grid_void_entrance',
            title: '虚空入口',
            desc: '全息坐标解锁后，空间折叠处浮现出虚空核心的传送门。',
            type: 'text',
            scenes: ['*grid'],
            layout: { direction: 90, distance: 160 },
            preClue: '#hologram_read',
            interactions: [
              {
                label: '进入虚空',
                desc: '踏入传送门，前往虚空核心。',
                addClues: ['*void', '-*grid'],
              },
            ],
          },
        ],
      },

      // ── 场景三：虚空核心 ─────────────────────────────
      {
        id: 'void',
        title: '虚空核心',
        desc: '零重力空间，悬浮的古法机关在数字光流中轰鸣，融合台在正中央等待数据核心注入。',
        type: 'text',
        sceneClue: '*void',
        scenes: ['*void'],
        layout: { direction: 0, distance: 260 },
        children: [
          {
            id: 'void_fusion_platform',
            title: '数据融合台',
            desc: '两个碎片插槽空置，等待数据碎片A与B同时接入。',
            type: 'text',
            scenes: ['*void'],
            layout: { direction: 30, distance: 150 },
            preClue: ['AND', '#has_data_shard_a', '#has_data_shard_b'],
            interactions: [
              {
                label: '融合碎片',
                desc: '将背包中的数据碎片A与B同时插入融合台。',
                when: '!#data_merged',
                addClues: ['#data_merged'],
              },
            ],
            doneClue: '#data_merged',
          },
          {
            id: 'void_ancient_gate',
            title: '古法机关',
            desc: '符文铭刻在悬浮石盘上，等待数字共振信号将其唤醒。',
            type: 'breakable',
            scenes: ['*void'],
            layout: { direction: 330, distance: 150 },
            preClue: '#data_merged',
            doneClue: '#ancient_gate_open',
            interactions: [
              {
                label: '激活机关',
                desc: '将数据核心能量注入古法符文，触发共振。',
                when: '!#ancient_gate_open',
                addClues: ['#ancient_gate_open'],
              },
            ],
          },
          {
            id: 'void_exit',
            title: '逃脱口',
            desc: '机关开启后，虚空裂缝扩展成足够通过的出口。',
            type: 'text',
            scenes: ['*void'],
            layout: { direction: 60, distance: 200 },
            preClue: '#ancient_gate_open',
            interactions: [
              {
                label: '穿越出口',
                desc: '跳入虚空裂缝，脱离数据节点群。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'void_return',
            title: '返回电路间',
            desc: '若碎片尚未收齐，退回电路矩阵间补全。',
            type: 'text',
            scenes: ['*void'],
            layout: { direction: 210, distance: 160 },
            interactions: [
              {
                label: '返回电路间',
                desc: '穿越传送门退回电路矩阵间。',
                addClues: ['*grid', '-*void'],
              },
            ],
          },
        ],
      },

      // ── 背包 ──────────────────────────────────────────
      {
        id: 'backpack',
        title: '背包',
        desc: '存放从数字节点中提取的道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'data_shard_a',
            title: '数据碎片A',
            desc: '从终端键盘解锁后浮现，闪烁着半截符文光流。',
            type: 'item',
            preClue: ['AND', '#has_data_shard_a', '!#data_merged'],
            combineWith: [
              {
                targetId: 'data_shard_b',
                addClues: ['#data_merged'],
              },
            ],
          },
          {
            id: 'data_shard_b',
            title: '数据碎片B',
            desc: '从电路排序完成后涌出，与碎片A互为镜像。',
            type: 'item',
            preClue: ['AND', '#has_data_shard_b', '!#data_merged'],
            combineWith: [
              {
                targetId: 'data_shard_a',
                addClues: ['#data_merged'],
              },
            ],
          },
          {
            id: 'data_core',
            title: '数据核心',
            desc: '两块碎片融合后生成，完整的数字-符文混合结构，能激活古法机关。',
            type: 'item',
            preClue: '#data_merged',
            itemUse: {
              targetIds: ['void_ancient_gate'],
              addClues: ['#ancient_gate_open'],
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
        '#terminal_access',
        '#keyboard_unlocked',
        '#circuit_aligned',
        '#hologram_read',
        '#data_merged',
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
