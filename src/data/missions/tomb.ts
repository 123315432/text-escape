import type { Mission } from '../../core/types'

export const tombMission: Mission = {
  id: 'tomb',
  title: '五行古墓',
  subtitle: '汉代石棺，五行相生相克，暗室机关',
  intro: '你闯入了一座汉代古墓。五行符文锁住了每一道门，唯有读懂相生相克之理，方能走出这座千年地宫。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*tomb_entrance'],
  bgmScenes: {
    '*tomb_entrance': '/audio/bgm/corridor.mp3',
    '*tomb_main': '/audio/bgm/tomb2.mp3',
    '*tomb_corridor': '/audio/bgm/corridor.mp3',
    '*tomb_hidden': '/audio/bgm/tomb3.mp3',
  },
  clueMessages: {
    '*tomb_entrance': '— 墓道 — 火把的光在青铜壁画上跳动。',
    '*tomb_main': '— 主室 — 石棺静静伫立，五行符文闪着幽光。',
    '*tomb_corridor': '— 甬道 — 脚步声在狭窄石道中回响。',
    '*tomb_hidden': '— 暗室 — 千年的黑暗在这里凝固成了形状。',
    '#tomb_mural_read': '壁画上的五行相生之序已刻入脑海：木生火，火生土，土生金，金生水，水生木。',
    '#tomb_inscription_read': '金一、木二、水三、火四、土五——铭文拓印在心。',
    '#tomb_torch_a_checked': '右侧火把的位置似乎有些特别，方向指向更深处。',
    '#tomb_entrance_opened': '沉重的石板缓缓位移，尘土扑簌而落。',
    '#tomb_coffin_opened': '石棺在轰鸣中开了一道缝，内里透出幽幽光泽。',
    '#tomb_jade_found': '棺内隐约可见一件玉器的轮廓。',
    '#tomb_pillars_solved': '五根石柱依相克之序归位，地底传来沉闷的机械声。',
    '#has_mirror_a': '铜镜碎片甲到手，边缘的锈迹还留着千年前的温度。',
    '#has_mirror_b': '铜镜碎片乙已收好，拼图缺了一半。',
    '#tomb_mirror_combined': '两块铜镜碎片严丝合缝地拼在一起，镜面重新照出了光。',
    '#tomb_door_unlocked': '铜镜嵌入底座，石门轰然退开，暗室的气息扑面而来。',
    '#tomb_silk_hint': '绢帛上的字迹晕染，却仍依稀可辨：水映则通。',
    '#tomb_offering_counted': '供桌上的五件陪葬品，有两件已经损毁，其余三件完好。',
    '#tomb_hidden_hint': '"带走不属于墓主之物"——那件古玉，或许才是钥匙。',
    '#has_jade_piece': '古玉入手，温润如初，仿佛刚刚雕就。',
    '#tomb_jade_placed': '古玉嵌入祭台凹槽，卡榫声清脆，往生之门随之颤动。',
  },
  translations: {
    en: {
      title: 'Five Elements Tomb',
      subtitle: 'Han tomb, elemental cycles, and hidden chambers',
      intro: 'You have broken into a Han dynasty tomb. Every gate is sealed by Five Elements sigils. Only by understanding the cycles of generation and overcoming can you walk back out of this thousand-year underground mausoleum.',
      clueMessages: {
        '*tomb_entrance': '— Entrance Passage — Torchlight dances across the bronze mural.',
        '*tomb_main': '— Main Chamber — The stone coffin stands silent while the five-element sigils glow faintly.',
        '*tomb_corridor': '— Side Corridor — Footsteps echo through the narrow stone passage.',
        '*tomb_hidden': '— Hidden Chamber — A thousand years of darkness have hardened into shape here.',
        '#tomb_mural_read': 'The mural\'s generating cycle is fixed in your mind: wood feeds fire, fire creates earth, earth bears metal, metal carries water, water nourishes wood.',
        '#tomb_inscription_read': 'Metal one, wood two, water three, fire four, earth five — the inscription has been copied into memory.',
        '#tomb_torch_a_checked': 'The torch on the right is positioned strangely, pointing deeper into the tomb.',
        '#tomb_entrance_opened': 'The heavy stone slab shifts aside as dust rains down.',
        '#tomb_coffin_opened': 'The stone coffin groans open a crack, spilling a dim glow from within.',
        '#tomb_jade_found': 'You can make out the outline of a jade object inside the coffin.',
        '#tomb_pillars_solved': 'The five stone pillars settle into the overcoming cycle, and a dull mechanical rumble rises from below.',
        '#has_mirror_a': 'You obtained Bronze Mirror Fragment A. Rust still clings to its edge with the chill of a thousand years.',
        '#has_mirror_b': 'Bronze Mirror Fragment B is secured. Half the puzzle remains missing.',
        '#tomb_mirror_combined': 'The two bronze mirror fragments fit together perfectly, and the mirror catches light again.',
        '#tomb_door_unlocked': 'The mirror slides into the base, the stone gate thunders open, and the breath of the hidden chamber rushes out.',
        '#tomb_silk_hint': 'The silk is stained and blurred, but one line can still be made out: reflected in water, the way opens.',
        '#tomb_offering_counted': 'There are five burial offerings on the altar. Two are broken, and the remaining three are intact.',
        '#tomb_hidden_hint': '"Take what does not belong to the tomb\'s master" — perhaps that ancient jade is the true key.',
        '#has_jade_piece': 'The ancient jade rests warm in your hand, as if freshly carved.',
        '#tomb_jade_placed': 'The jade locks into the altar slot with a crisp click, and the gate of return trembles in answer.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You followed the elemental logic far enough to open the final gate and leave the tomb alive.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You traced every mural, inscription, offering, and hidden warning, then left the Han tomb with its entire mechanism laid bare.',
        },
        timeout: {
          title: 'Time Ran Out',
          body: 'Before the tomb yielded its last gate, dust and stone sealed the passages again and buried your escape beneath the earth.',
        },
      },
      nodes: {
        root: {
          title: 'Five Elements Tomb',
          desc: 'The entire tomb is built on the cycles of generation and overcoming. Read the mural, open the coffin, restore the bronze mirror, and take the jade.',
        },
        tomb_entrance_scene: {
          title: 'Entrance Passage',
          desc: 'The entry corridor. Torchlight trembles while mural and inscription wait in silence.',
        },
        tomb_mural: {
          title: 'Five Elements Mural',
          desc: 'The bronze mural shows the generating cycle of the Five Elements: wood feeds fire, fire creates earth, earth bears metal, metal carries water, water nourishes wood. The lines are ancient yet still clear.',
          interactions: [
            {
              label: 'Inspect Mural',
              desc: 'Study the generating cycle of the Five Elements.',
            },
          ],
        },
        tomb_inscription: {
          title: 'Stone Inscription',
          desc: 'A carved line on the wall maps the elements to numbers: metal one, wood two, water three, fire four, earth five.',
          interactions: [
            {
              label: 'Copy the Inscription',
              desc: 'Commit the elemental number mapping to memory.',
            },
          ],
        },
        tomb_torch_a: {
          title: 'Right-Hand Torch',
          desc: 'The torch on the right wall sits at a different angle from the one on the left, as if pointing deeper into the tomb.',
          interactions: [
            {
              label: 'Inspect Torch',
              desc: 'Check the direction of the torch on the right.',
            },
          ],
        },
        tomb_entrance_stone: {
          title: 'Entrance Slab',
          desc: 'A stone slab blocks the way into the main chamber. A thin crack at the center suggests it can be forced open.',
          interactions: [
            {
              label: 'Push the Slab',
              desc: 'Leverage the crack and force the slab aside.',
            },
          ],
        },
        tomb_entrance_to_main: {
          title: 'Passage to the Main Chamber',
          desc: 'Once the slab shifts aside, the stone path into the central chamber is clear.',
          interactions: [
            {
              label: 'Enter the Main Chamber',
              desc: 'Go deeper into the tomb.',
            },
          ],
        },
        tomb_main_scene: {
          title: 'Main Chamber',
          desc: 'The heart of the tomb. The stone coffin stands in the center, surrounded by five pillars and hidden mechanisms.',
        },
        tomb_coffin: {
          title: 'Stone Coffin Lock',
          desc: 'A code dial made of elemental sigils is set into the front of the coffin. Use the element-number mapping and enter the five numbers in the generating order.',
          interactions: [
            {
              label: 'Turn the Sigil Dial',
              desc: 'Enter the numbers that match the generating order Wood → Fire → Earth → Metal → Water.',
            },
          ],
        },
        tomb_five_pillars: {
          title: 'Five-Pillar Mechanism',
          desc: 'The pillars are carved with Metal, Wood, Water, Fire, and Earth. The inscription says only the overcoming order opens the way: water overcomes fire, fire overcomes metal, metal overcomes wood, wood overcomes earth, earth overcomes water.',
          sortSymbols: ['Metal', 'Wood', 'Water', 'Fire', 'Earth'],
          interactions: [
            {
              label: 'Inspect the Pillars',
              desc: 'Study the elemental sigils carved into the five stone pillars.',
            },
            {
              label: 'Arrange the Pillars',
              desc: 'Turn the pillars into the Five Elements overcoming order.',
            },
          ],
        },
        tomb_mirror_fragment_b: {
          title: 'Bronze Mirror Fragment B',
          desc: 'After the pillars shift, a bronze mirror shard appears beside the base, rusted and sharply cut at the edge.',
          interactions: [
            {
              label: 'Pick Up the Fragment',
              desc: 'Store Bronze Mirror Fragment B in your pack.',
            },
          ],
        },
        tomb_sarcophagus_lid: {
          title: 'Gap in the Coffin Lid',
          desc: 'The loosened lid reveals the corner of something hidden inside.',
          interactions: [
            {
              label: 'Reach Inside',
              desc: 'Pull the hidden object out through the gap in the coffin lid.',
            },
          ],
        },
        tomb_main_to_corridor: {
          title: 'Toward the Side Corridor',
          desc: 'A side passage from the main chamber leads deeper in, toward the shrine niche and the sealed stone gate.',
          interactions: [
            {
              label: 'Enter the Corridor',
              desc: 'Head deeper through the side passage.',
            },
          ],
        },
        tomb_main_return: {
          title: 'Return to the Entrance Passage',
          desc: 'Withdraw along the original path to the tomb entrance.',
          interactions: [
            {
              label: 'Return to the Entrance',
              desc: 'Go back to the entrance passage.',
            },
          ],
        },
        tomb_corridor_scene: {
          title: 'Side Corridor',
          desc: 'A narrow corridor linking the main chamber to the hidden room. A shrine niche, spent candle, and sealed stone gate line the way.',
        },
        tomb_side_niche: {
          title: 'Wall Shrine',
          desc: 'A bronze mirror fragment rests inside the niche. In front of it, a half-burned candle has left wax in an uncanny shape.',
          interactions: [
            {
              label: 'Take Mirror Fragment',
              desc: 'Remove Bronze Mirror Fragment A from the shrine niche.',
            },
          ],
        },
        tomb_candle_riddle: {
          title: 'Spent Candle and Silk',
          desc: 'A folded silk cloth is pinned under the candle stand, its edges soaked with wax but its writing still legible.',
          interactions: [
            {
              label: 'Read the Silk',
              desc: 'Unfold the silk and read the hidden chamber clue written on it.',
            },
          ],
        },
        tomb_blocked_door: {
          title: 'Sealed Stone Gate',
          desc: 'At the center of the gate is a circular base shaped exactly for a bronze mirror. A mirror must be set here.',
          interactions: [
            {
              label: 'Inspect the Base',
              desc: 'Examine the circular recess at the center of the stone gate.',
            },
          ],
        },
        tomb_corridor_to_main: {
          title: 'Return to the Main Chamber',
          desc: 'Go back through the corridor to the heart of the tomb.',
          interactions: [
            {
              label: 'Return to the Main Chamber',
              desc: 'Go back to the main chamber.',
            },
          ],
        },
        tomb_corridor_to_hidden: {
          title: 'Hidden Chamber Gate',
          desc: 'Once the bronze mirror is set in place, the gate retreats and reveals the chamber beyond.',
          interactions: [
            {
              label: 'Enter the Hidden Chamber',
              desc: 'Step into the thousand-year chamber no one has touched.',
            },
          ],
        },
        tomb_hidden_scene: {
          title: 'Hidden Chamber',
          desc: 'A sealed chamber where the offering table, inscription, and final gate have waited for centuries.',
        },
        tomb_hidden_inscription: {
          title: 'Hidden Chamber Inscription',
          desc: '"Take what does not belong to the tomb\'s master, and only then will the gate of return open." The strokes are deep and archaic.',
          interactions: [
            {
              label: 'Read the Inscription',
              desc: 'Carefully make out the writing on the chamber wall.',
            },
          ],
        },
        tomb_offering_table: {
          title: 'Offering Table',
          desc: 'Five burial objects rest on the table. Some are broken, and a strangely shaped recess sits among the fragments.',
          interactions: [
            {
              label: 'Count the Offerings',
              desc: 'Inspect each object laid out on the offering table.',
            },
          ],
        },
        tomb_jade_altar: {
          title: 'Jade Altar',
          desc: 'A jade-shaped recess lies at the center of the altar, ringed by delicate cloud motifs. An ancient jade piece belongs here.',
          interactions: [
            {
              label: 'Inspect the Altar',
              desc: 'Examine the shape of the recess at the center of the altar.',
            },
          ],
        },
        tomb_final_door: {
          title: 'Gate of Return',
          desc: 'When the mechanism is triggered, the heavy stone gate rolls back and blinding light spills in from beyond.',
          interactions: [
            {
              label: 'Leave the Tomb',
              desc: 'Step through the gate of return and re-enter the world of the living.',
            },
          ],
        },
        tomb_hidden_return: {
          title: 'Return to the Corridor',
          desc: 'Go back to the corridor and reconsider any mechanism you have not yet solved.',
          interactions: [
            {
              label: 'Return to the Corridor',
              desc: 'Exit the hidden chamber by the way you came.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Stores the items taken from throughout the tomb.',
        },
        tomb_mirror_a: {
          title: 'Bronze Mirror Fragment A',
          desc: 'A corroded shard taken from the corridor shrine niche. Even now its surface catches a faint reflection.',
        },
        tomb_mirror_b: {
          title: 'Bronze Mirror Fragment B',
          desc: 'A shard taken from beside the pillar mechanism. Its broken edge matches Fragment A.',
        },
        tomb_complete_mirror: {
          title: 'Complete Bronze Mirror',
          desc: 'The two shards fit together perfectly. The restored surface reflects a clear image once more — reflected in water, the way opens.',
        },
        tomb_jade_piece: {
          title: 'Ancient Jade',
          desc: 'A finely carved jade piece taken from the coffin. Its cloud motifs match the altar recess exactly.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '五行古墓',
    desc: '五行相生相克构成这座古墓的全部机关。读懂壁画，解开石棺，拼合铜镜，取走古玉。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 墓道场景 ──────────────────────────────────────────
      {
        id: 'tomb_entrance_scene',
        title: '墓道',
        desc: '入口通道。火把光摇曳，壁画和石刻铭文静静守候。',
        type: 'text',
        sceneClue: '*tomb_entrance',
        scenes: ['*tomb_entrance'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'tomb_mural',
            title: '五行壁画',
            desc: '青铜壁画刻着五行相生的循环图示：木生火，火生土，土生金，金生水，水生木。线条古朴，历经千年仍清晰可辨。',
            type: 'text',
            scenes: ['*tomb_entrance'],
            layout: { direction: 210, distance: 150 },
            interactions: [
              {
                label: '查看壁画',
                desc: '细读五行相生顺序。',
                when: '!#tomb_mural_read',
                addClues: ['#tomb_mural_read'],
              },
            ],
            doneClue: '#tomb_mural_read',
          },
          {
            id: 'tomb_inscription',
            title: '石刻铭文',
            desc: '石壁上的铭文刻着五行数字对照：金一、木二、水三、火四、土五。',
            type: 'text',
            scenes: ['*tomb_entrance'],
            layout: { direction: 250, distance: 150 },
            preClue: '#tomb_mural_read',
            interactions: [
              {
                label: '拓印铭文',
                desc: '将五行数字对照牢记于心。',
                when: '!#tomb_inscription_read',
                addClues: ['#tomb_inscription_read'],
              },
            ],
            doneClue: '#tomb_inscription_read',
          },
          {
            id: 'tomb_torch_a',
            title: '右侧火把',
            desc: '右侧墙壁上的火把，角度与左侧不同，似乎指向更深处的方向。',
            type: 'text',
            scenes: ['*tomb_entrance'],
            preClue: '#tomb_inscription_read',
            layout: { direction: 290, distance: 150 },
            interactions: [
              {
                label: '观察火把',
                desc: '查看右侧火把的方向。',
                when: '!#tomb_torch_a_checked',
                addClues: ['#tomb_torch_a_checked'],
              },
            ],
            doneClue: '#tomb_torch_a_checked',
          },
          {
            id: 'tomb_entrance_stone',
            title: '入口石板',
            desc: '通向主室的石板，中央有一道细长裂缝，用力应当可以推开。',
            type: 'switch',
            scenes: ['*tomb_entrance'],
            layout: { direction: 330, distance: 150 },
            preClue: '#tomb_torch_a_checked',
            doneClue: '#tomb_entrance_opened',
            interactions: [
              {
                label: '推动石板',
                desc: '借助裂缝施力，石板缓缓位移。',
                when: '!#tomb_entrance_opened',
                addClues: ['#tomb_entrance_opened'],
              },
            ],
          },
          {
            id: 'tomb_entrance_to_main',
            title: '通往主室',
            desc: '石板移开后，主室的石道已经畅通。',
            type: 'text',
            scenes: ['*tomb_entrance'],
            layout: { direction: 160, distance: 160 },
            preClue: '#tomb_entrance_opened',
            interactions: [
              {
                label: '进入主室',
                desc: '深入古墓主室。',
                addClues: ['*tomb_main', '-*tomb_entrance'],
              },
            ],
          },
        ],
      },

      // ── 主室场景 ──────────────────────────────────────────
      {
        id: 'tomb_main_scene',
        title: '主室',
        desc: '古墓核心。石棺居中，五柱林立，机关密布。',
        type: 'text',
        sceneClue: '*tomb_main',
        scenes: ['*tomb_main'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'tomb_coffin',
            title: '石棺密码锁',
            desc: '石棺正面嵌着五行符文组成的密码盘。根据五行数字对照表，填入以相生顺序排列的五行数字。',
            type: 'password',
            scenes: ['*tomb_main'],
            layout: { direction: 300, distance: 150 },
            preClue: '#tomb_pillars_examined',
            code: '23415',
            successClues: ['#tomb_coffin_opened', '#tomb_jade_found'],
            doneClue: '#tomb_coffin_opened',
            interactions: [
              {
                label: '拨动符文盘',
                desc: '按五行相生顺序（木→火→土→金→水）输入对应数字。',
              },
            ],
          },
          {
            id: 'tomb_five_pillars',
            title: '五柱机关',
            desc: '五根石柱分别刻着金、木、水、火、土。铭文说：相克之序方能开道。五行相克：水克火，火克金，金克木，木克土，土克水。',
            type: 'click-sort',
            scenes: ['*tomb_main'],
            layout: { direction: 330, distance: 150 },
            preClue: '#tomb_inscription_read',
            sortSymbols: ['金', '木', '水', '火', '土'],
            sortSolution: [2, 3, 0, 4, 1],
            successClues: ['#tomb_pillars_solved'],
            doneClue: '#tomb_pillars_solved',
            interactions: [
              {
                label: '察看五柱',
                desc: '审视五根石柱上的五行符文。',
                when: '!#tomb_pillars_examined',
                addClues: ['#tomb_pillars_examined'],
              },
              {
                label: '排列石柱',
                desc: '按五行相克顺序拨动石柱。',
              },
            ],
          },
          {
            id: 'tomb_mirror_fragment_b',
            title: '铜镜碎片乙',
            desc: '石柱位移后，底座旁显出一块铜镜碎片，锈迹斑斑，边缘整齐如刀割。',
            type: 'text',
            scenes: ['*tomb_main'],
            layout: { direction: 30, distance: 150 },
            preClue: '#tomb_pillars_solved',
            interactions: [
              {
                label: '捡起碎片',
                desc: '将铜镜碎片乙收入背包。',
                when: '!#has_mirror_b',
                addClues: ['#has_mirror_b'],
              },
            ],
            doneClue: '#has_mirror_b',
          },
          {
            id: 'tomb_sarcophagus_lid',
            title: '棺盖夹缝',
            desc: '棺盖松动，夹缝中隐约露出什么东西的边角。',
            type: 'text',
            scenes: ['*tomb_main'],
            layout: { direction: 60, distance: 150 },
            preClue: '#tomb_coffin_opened',
            interactions: [
              {
                label: '伸手取出',
                desc: '从棺盖缝隙中取出藏匿之物。',
                when: '!#has_jade_piece',
                addClues: ['#has_jade_piece'],
              },
            ],
            doneClue: '#has_jade_piece',
          },
          {
            id: 'tomb_main_to_corridor',
            title: '前往甬道',
            desc: '主室侧壁的甬道通向更深处，神龛和封堵石门都在那里。',
            type: 'text',
            scenes: ['*tomb_main'],
            layout: { direction: 90, distance: 160 },
            preClue: ['OR', '#tomb_pillars_solved', '#tomb_coffin_opened'],
            interactions: [
              {
                label: '进入甬道',
                desc: '向侧道深处走去。',
                addClues: ['*tomb_corridor', '-*tomb_main'],
              },
            ],
          },
          {
            id: 'tomb_main_return',
            title: '返回墓道',
            desc: '沿原路退回墓道入口。',
            type: 'text',
            scenes: ['*tomb_main'],
            preClue: '#tomb_pillars_examined',
            layout: { direction: 200, distance: 160 },
            interactions: [
              {
                label: '返回墓道',
                desc: '退回墓道。',
                addClues: ['*tomb_entrance', '-*tomb_main'],
              },
            ],
          },
        ],
      },

      // ── 甬道场景 ──────────────────────────────────────────
      {
        id: 'tomb_corridor_scene',
        title: '甬道',
        desc: '连接主室与暗室的狭窄通道。神龛、残烛和封堵石门依次排列。',
        type: 'text',
        sceneClue: '*tomb_corridor',
        scenes: ['*tomb_corridor'],
        layout: { direction: 90, distance: 140 },
        children: [
          {
            id: 'tomb_side_niche',
            title: '侧壁神龛',
            desc: '神龛里供着一块铜镜碎片甲，龛前的半截残烛几乎燃尽，蜡油凝成怪异的形状。',
            type: 'text',
            scenes: ['*tomb_corridor'],
            layout: { direction: 30, distance: 150 },
            interactions: [
              {
                label: '取铜镜碎片',
                desc: '从神龛中取出铜镜碎片甲。',
                when: '!#has_mirror_a',
                addClues: ['#has_mirror_a'],
              },
            ],
            doneClue: '#has_mirror_a',
          },
          {
            id: 'tomb_candle_riddle',
            title: '残烛与绢帛',
            desc: '烛台底部压着一张叠好的绢帛，纸边被蜡油浸透，字迹仍在。',
            type: 'text',
            scenes: ['*tomb_corridor'],
            preClue: '#has_mirror_a',
            layout: { direction: 60, distance: 150 },
            interactions: [
              {
                label: '细读绢帛',
                desc: '展开绢帛，阅读上面的暗室玄机。',
                when: '!#tomb_silk_hint',
                addClues: ['#tomb_silk_hint'],
              },
            ],
            doneClue: '#tomb_silk_hint',
          },
          {
            id: 'tomb_blocked_door',
            title: '封堵石门',
            desc: '石门正中有一圆形铜镜底座，底座凹槽与铜镜轮廓完全吻合。此处需要嵌入铜镜。',
            type: 'switch',
            scenes: ['*tomb_corridor'],
            layout: { direction: 330, distance: 150 },
            preClue: '#tomb_mirror_combined',
            doneClue: '#tomb_door_unlocked',
            interactions: [
              {
                label: '观察底座',
                desc: '查看石门中央的圆形凹槽。',
                when: '!#tomb_door_unlocked',
                addClues: [],
              },
            ],
          },
          {
            id: 'tomb_corridor_to_main',
            title: '返回主室',
            desc: '沿甬道退回古墓主室。',
            type: 'text',
            scenes: ['*tomb_corridor'],
            preClue: '#tomb_silk_hint',
            layout: { direction: 200, distance: 160 },
            interactions: [
              {
                label: '返回主室',
                desc: '退回主室。',
                addClues: ['*tomb_main', '-*tomb_corridor'],
              },
            ],
          },
          {
            id: 'tomb_corridor_to_hidden',
            title: '暗室石门',
            desc: '铜镜嵌入后，石门退开，暗室入口显露。',
            type: 'text',
            scenes: ['*tomb_corridor'],
            layout: { direction: 300, distance: 160 },
            preClue: '#tomb_door_unlocked',
            interactions: [
              {
                label: '进入暗室',
                desc: '踏入从未有人涉足的千年暗室。',
                addClues: ['*tomb_hidden', '-*tomb_corridor'],
              },
            ],
          },
        ],
      },

      // ── 暗室场景 ──────────────────────────────────────────
      {
        id: 'tomb_hidden_scene',
        title: '暗室',
        desc: '千年封闭的暗室，供桌、铭文和往生之门在这里等候。',
        type: 'text',
        sceneClue: '*tomb_hidden',
        scenes: ['*tomb_hidden'],
        layout: { direction: 270, distance: 140 },
        children: [
          {
            id: 'tomb_hidden_inscription',
            title: '暗室铭文',
            desc: '"带走不属于墓主之物，方可打开往生之门。" 字体古拙，刻痕极深。',
            type: 'text',
            scenes: ['*tomb_hidden'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '阅读铭文',
                desc: '仔细辨认暗室壁上的文字。',
                when: '!#tomb_hidden_hint',
                addClues: ['#tomb_hidden_hint'],
              },
            ],
            doneClue: '#tomb_hidden_hint',
          },
          {
            id: 'tomb_offering_table',
            title: '供桌',
            desc: '供桌上摆着五件陪葬品，有几件已经损坏，只剩残片。其中有一凹槽，形状古怪。',
            type: 'text',
            scenes: ['*tomb_hidden'],
            layout: { direction: 330, distance: 150 },
            preClue: '#tomb_silk_hint',
            interactions: [
              {
                label: '清点陪葬品',
                desc: '仔细观察供桌上的每一件物品。',
                when: '!#tomb_offering_counted',
                addClues: ['#tomb_offering_counted'],
              },
            ],
            doneClue: '#tomb_offering_counted',
          },
          {
            id: 'tomb_jade_altar',
            title: '玉器祭台',
            desc: '祭台正中有一处玉器形状的凹槽，边缘刻着细密的云纹，等待着某件物品的归位。此处需要嵌入古玉。',
            type: 'switch',
            scenes: ['*tomb_hidden'],
            layout: { direction: 240, distance: 150 },
            preClue: '#tomb_offering_counted',
            doneClue: '#tomb_jade_placed',
            interactions: [
              {
                label: '观察祭台',
                desc: '查看祭台中央的凹槽形状。',
                when: '!#tomb_jade_placed',
                addClues: [],
              },
            ],
          },
          {
            id: 'tomb_final_door',
            title: '往生之门',
            desc: '沉重的石门在机关触动后轰然退开，门外是刺目的光。',
            type: 'text',
            scenes: ['*tomb_hidden'],
            layout: { direction: 210, distance: 160 },
            preClue: '#tomb_jade_placed',
            interactions: [
              {
                label: '走出古墓',
                desc: '踏过往生之门，重归人间。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'tomb_hidden_return',
            title: '返回甬道',
            desc: '退回甬道，重新审视尚未解开的机关。',
            type: 'text',
            scenes: ['*tomb_hidden'],
            preClue: '#tomb_hidden_hint',
            layout: { direction: 170, distance: 160 },
            interactions: [
              {
                label: '返回甬道',
                desc: '沿原路退出暗室。',
                addClues: ['*tomb_corridor', '-*tomb_hidden'],
              },
            ],
          },
        ],
      },

      // ── 背包 ──────────────────────────────────────────────
      {
        id: 'backpack',
        title: '背包',
        desc: '收纳从古墓各处取得的道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'tomb_mirror_a',
            title: '铜镜碎片甲',
            desc: '从甬道神龛取下的铜镜残片，锈蚀的镜面仍能映出模糊的光。',
            type: 'item',
            preClue: ['AND', '#has_mirror_a', '!#tomb_mirror_combined'],
            combineWith: [
              {
                targetId: 'tomb_mirror_b',
                addClues: ['#tomb_mirror_combined'],
              },
            ],
          },
          {
            id: 'tomb_mirror_b',
            title: '铜镜碎片乙',
            desc: '从五柱机关底座旁取得的铜镜残片，断口与甲片吻合。',
            type: 'item',
            preClue: ['AND', '#has_mirror_b', '!#tomb_mirror_combined'],
            combineWith: [
              {
                targetId: 'tomb_mirror_a',
                addClues: ['#tomb_mirror_combined'],
              },
            ],
          },
          {
            id: 'tomb_complete_mirror',
            title: '完整铜镜',
            desc: '两片残镜严丝合缝，镜面重新能映出清晰的倒影——水映则通。',
            type: 'item',
            preClue: '#tomb_mirror_combined',
            itemUse: {
              targetIds: ['tomb_blocked_door'],
              addClues: ['#tomb_door_unlocked'],
            },
          },
          {
            id: 'tomb_jade_piece',
            title: '古玉',
            desc: '从石棺夹缝中取出的玉器，温润细腻，云纹雕刻与祭台凹槽分毫不差。',
            type: 'item',
            preClue: '#has_jade_piece',
            itemUse: {
              targetIds: ['tomb_jade_altar'],
              addClues: ['#tomb_jade_placed'],
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
        '#tomb_mural_read',
        '#tomb_inscription_read',
        '#tomb_silk_hint',
        '#tomb_offering_counted',
        '#tomb_hidden_hint',
        '#tomb_pillars_solved',
        '#has_jade_piece',
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
