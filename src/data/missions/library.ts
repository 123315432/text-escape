import type { Mission } from '../../core/types'

export const libraryMission: Mission = {
  id: 'library',
  title: '沉船图书馆',
  subtitle: '水下古庙·条件合成·卷轴修复',
  intro: '你潜入了被刻意沉没的水下藏书阁，必须在氧气耗尽前，找到出口——但出口只为尊重书籍的人开放。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*dome'],
  bgmScenes: {
    '*dome': '/audio/bgm/tomb2.mp3',
    '*stacks': '/audio/bgm/corridor.mp3',
    '*scriptorium': '/audio/bgm/chamber.mp3',
    '*vault': '/audio/bgm/tomb3.mp3',
  },
  clueMessages: {
    '*dome': '— 穹顶大厅 —',
    '*stacks': '— 书架回廊 —',
    '*scriptorium': '— 抄写间 —',
    '*vault': '— 藏卷密室 —',
    '#dome_tablet_read': '石牌上写着：先净手，再避水，再认字，最后开门。',
    '#has_dry_cloth': '拿到了一块干布，边缘绣着藏书阁的纹样。',
    '#has_bronze_key': '拿到了一把青铜钥匙，钥齿细而长。',
    '#has_ink_stone': '拿到一方墨石，底部刻着卷号。',
    '#has_scroll_tube': '拿到一只卷轴筒，筒口封蜡已经裂开。',
    '#shelf_order_hint': '书脊残字提示：海、风、灯、钟。',
    '#waterline_hint': '水痕把低处书架的字迹泡得发胀，但还能辨认。',
    '#ink_formula_seen': '墨配方：盐、灰、油，三者按轻重相合。',
    '#scroll_fragments_seen': '卷轴碎页拼起来，露出一半门禁咒文。',
    '#catalog_opened': '目录册翻开了，密室卷号和门禁位置都在其中。',
    '#clasp_released': '铜扣松开了，封蜡筒可以取出里面的东西。',
    '#vault_door_unsealed': '密室的封门退开了。',
    '#scrubber_ready': '干布、墨石和卷筒已经拼成了可用的修复工具。',
    '#restored_scroll': '残卷已修复，缺失的字终于连上。',
    '#archive_blessed': '书架上的水纹褪去，图书馆认出了你是来保存它的人。',
  },
  endings: {
    normal: {
      title: '逃出图书馆',
      body: '你从水下古庙里活着出来了，带走了部分残卷。只是最深处那卷真正的目录，仍留在沉没的书架之间。',
    },
    perfect: {
      title: '完美逃出',
      body: '你修复了残卷，补齐了目录，连密室封门也按规矩解开。图书馆在你身后合拢，像终于把名字交还给你。',
    },
    timeout: {
      title: '水没结局',
      body: '氧气先耗尽了。穹顶外的水压重新填满回廊，书页在黑暗里慢慢散开。',
    },
  },
  translations: {
    en: {
      title: 'Sunken Library',
      subtitle: 'An underwater temple of crafted tools and restored scrolls',
      intro: 'You slipped into a library deliberately sunk beneath the water. Before your air runs out, you must find the exit, but that exit only opens for someone who treats the books with reverence.',
      clueMessages: {
        '*dome': '— Dome Hall —',
        '*stacks': '— Stacks Corridor —',
        '*scriptorium': '— Scriptorium —',
        '*vault': '— Archive Vault —',
        '#dome_tablet_read': 'The tablet reads: cleanse your hands, keep clear of water, read the script, and only then open the door.',
        '#has_dry_cloth': 'You picked up a dry cloth embroidered with the library\'s emblem.',
        '#has_bronze_key': 'You picked up a bronze key with long, narrow teeth.',
        '#has_ink_stone': 'You picked up an inkstone with a catalog number carved into the base.',
        '#has_scroll_tube': 'You picked up a scroll tube. The wax seal at its mouth has already cracked.',
        '#shelf_order_hint': 'The broken characters on the spines suggest the order: Sea, Wind, Lamp, Bell.',
        '#waterline_hint': 'The waterline has swollen the lower text, but it can still be read.',
        '#ink_formula_seen': 'Ink formula: salt, ash, oil. Combine the three by weight.',
        '#scroll_fragments_seen': 'The scroll fragments join together and reveal half of the warding text.',
        '#catalog_opened': 'The catalog is open. Both the vault volume number and the door seal are recorded inside.',
        '#clasp_released': 'The bronze clasp came loose. The tube\'s contents can now be removed.',
        '#vault_door_unsealed': 'The vault seal has withdrawn.',
        '#scrubber_ready': 'The cloth, inkstone, and scroll tube have been assembled into a usable restoration kit.',
        '#restored_scroll': 'The damaged scroll has been restored. The missing characters finally connect.',
        '#archive_blessed': 'The watermarks fade from the shelves. The library recognizes you as someone who came to preserve it.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You made it out of the underwater temple alive with part of the broken scrolls. The true catalog from the deepest chamber still rests among the drowned shelves.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You restored the scroll, completed the catalog, and unsealed the vault by the proper rite. The library closed behind you as if it had finally returned its name to you.',
        },
        timeout: {
          title: 'Drowned Ending',
          body: 'Your air ran out first. Water pressure flooded the corridors again, and the pages slowly drifted apart in the dark.',
        },
      },
      nodes: {
        root: {
          title: 'Sunken Library',
          desc: 'Find the key, recover the fragments, restore the catalog, and unseal the deepest chamber of the drowned library.',
        },
        dome_scene: {
          title: 'Dome Hall',
          desc: 'A half-submerged rotunda where pages drift between stone columns and the first tablet stands on a central altar.',
        },
        dome_tablet: {
          title: 'Entry Tablet',
          desc: 'The tablet lays out the entry rites, as though every visitor must be tested at the threshold.',
          interactions: [
            {
              label: 'Read the Tablet',
              desc: 'Memorize the rules of entry.',
            },
          ],
        },
        dome_cloth: {
          title: 'Altar Cloth',
          desc: 'A dry, moisture-proof cloth hangs from the corner of the altar, clearly left here on purpose.',
          interactions: [
            {
              label: 'Take the Cloth',
              desc: 'Carry off the cloth that can keep water away.',
            },
          ],
        },
        dome_keycase: {
          title: 'Bronze Key Case',
          desc: 'Rust seals the case shut. The same cloud-and-thunder motif from the dome is stamped into its face.',
          interactions: [
            {
              label: 'Pry Open the Case',
              desc: 'Open the case and take the key inside.',
            },
          ],
        },
        dome_to_stacks: {
          title: 'Stacks Corridor',
          desc: 'A long passage beyond the columns leads toward the stacks.',
          interactions: [
            {
              label: 'Enter the Corridor',
              desc: 'Follow the underwater passage deeper into the stacks.',
            },
          ],
        },
        stacks_scene: {
          title: 'Stacks Corridor',
          desc: 'Tall shelves stand underwater. The lower spines are swollen, and only the upper rows remain clear.',
        },
        stacks_order: {
          title: 'Spine Order',
          desc: 'Four exposed spines read Sea, Wind, Lamp, and Bell. It looks like an ordering clue.',
          interactions: [
            {
              label: 'Note the Order',
              desc: 'Commit the order of the spines to memory.',
            },
          ],
        },
        stacks_waterline: {
          title: 'Watermarked Shelf',
          desc: 'The lowest shelf is the most waterlogged, yet a legible annotation still hides along the edge.',
          interactions: [
            {
              label: 'Inspect the Waterline',
              desc: 'Read the note swollen by the water.',
            },
          ],
        },
        stacks_inkstone: {
          title: 'Inkstone Casket',
          desc: 'A small casket is wedged beneath the shelf. Inside are an inkstone and part of a formula slip.',
          interactions: [
            {
              label: 'Take the Inkstone',
              desc: 'Remove the inkstone from the casket.',
            },
          ],
        },
        stacks_scroll_tube: {
          title: 'Sealed Scroll Tube',
          desc: 'A bronze clasp keeps the tube shut. Something like torn scroll pages lies inside.',
          interactions: [
            {
              label: 'Unlock the Clasp with the Key',
              desc: 'Break the seal and take the scroll tube.',
            },
          ],
        },
        stacks_to_scriptorium: {
          title: 'Scriptorium Entrance',
          desc: 'The scriptorium lies deeper down the corridor, though its access is still sealed.',
          interactions: [
            {
              label: 'Enter the Scriptorium',
              desc: 'Continue through the corridor into the restoration room.',
            },
          ],
        },
        scriptorium_scene: {
          title: 'Scriptorium',
          desc: 'This room was built for restoring damaged texts. Salt, ash, and oil still lie scattered across the tables.',
        },
        scriptorium_formula: {
          title: 'Ink Formula',
          desc: 'Carved into the stone table: salt, ash, oil. The three must be balanced by weight.',
          interactions: [
            {
              label: 'Memorize the Formula',
              desc: 'Remember the proportions for the restoration ink.',
            },
          ],
        },
        scriptorium_fragments: {
          title: 'Fragment Table',
          desc: 'Pieces of a scroll are pinned across the tabletop. Only once joined can the warding text be read clearly.',
          interactions: [
            {
              label: 'Piece the Fragments Together',
              desc: 'Examine the missing line in the text.',
            },
          ],
        },
        scriptorium_catalog: {
          title: 'Catalog Ledger',
          desc: 'The ledger records the vault volume number and the position of its seal, though mold has spread across the cover.',
          interactions: [
            {
              label: 'Turn Through the Catalog',
              desc: 'Find the vault\'s access information.',
            },
          ],
        },
        scriptorium_to_vault: {
          title: 'Archive Vault',
          desc: 'The final sealed door stands exactly where the catalog says it should.',
          interactions: [
            {
              label: 'Go to the Vault',
              desc: 'Carry the restored scroll to the sealed chamber.',
            },
          ],
        },
        vault_scene: {
          title: 'Archive Vault',
          desc: 'The deepest seal only recognizes the restored text. Beyond it lies the core the drowned library truly tried to preserve.',
        },
        vault_unseal: {
          title: 'Seal-Carved Door',
          desc: 'The missing lines of the scroll are carved into the door, as if waiting for someone to supply what is absent.',
          interactions: [
            {
              label: 'Compare the Text',
              desc: 'Confirm how the seal is meant to withdraw.',
            },
          ],
        },
        vault_blessing: {
          title: 'Shelf Oath',
          desc: 'A small line beside the door reads: protect the books first, claim them second, and leave only at the end.',
          interactions: [
            {
              label: 'Honor the Oath',
              desc: 'Return the catalog and depart by the proper rite.',
            },
          ],
        },
        vault_exit: {
          title: 'Underwater Exit',
          desc: 'Stone steps rise behind the vault door, and the current has already grown gentle.',
          interactions: [
            {
              label: 'Break the Surface',
              desc: 'Follow the steps upward and leave the drowned temple behind.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'It holds the tools you need to restore the scroll, open the vault, and preserve the archive.',
        },
        cloth_item: {
          title: 'Dry Cloth',
          desc: 'Absorbent and ideal for cleaning the surface of damaged pages.',
        },
        inkstone_item: {
          title: 'Inkstone',
          desc: 'Once the formula is known, it can be used to restore the faded characters on the scroll.',
        },
        scrolltube_item: {
          title: 'Scroll Fragments',
          desc: 'The pages taken from the tube are still incomplete, with key characters missing.',
        },
        key_item: {
          title: 'Bronze Key',
          desc: 'It can undo the tube\'s clasp and open the sealed access deeper in the corridor.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '沉船图书馆',
    desc: '在水下藏书阁里找钥匙、找残卷、修复目录，再打开最深处的封门。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'dome_scene',
        title: '穹顶大厅',
        desc: '半淹没的圆顶大厅，石柱间漂着书页，中央石台上立着第一块石牌。',
        type: 'text',
        sceneClue: '*dome',
        scenes: ['*dome'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'dome_tablet',
            title: '入门石牌',
            desc: '石牌刻着进门规矩，像是给来客的第一道筛选。',
            type: 'text',
            scenes: ['*dome'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '阅读石牌',
                desc: '把门规记下来。',
                when: '!#dome_tablet_read',
                addClues: ['#dome_tablet_read'],
              },
            ],
            doneClue: '#dome_tablet_read',
          },
          {
            id: 'dome_cloth',
            title: '石台干布',
            desc: '供奉台角落挂着一块防潮干布，显然被故意留下。',
            type: 'text',
            scenes: ['*dome'],
            layout: { direction: 270, distance: 150 },
            interactions: [
              {
                label: '取下干布',
                desc: '把能防潮的布拿走。',
                when: '!#has_dry_cloth',
                addClues: ['#has_dry_cloth'],
              },
            ],
            doneClue: '#has_dry_cloth',
          },
          {
            id: 'dome_keycase',
            title: '青铜钥盒',
            desc: '钥盒被水锈封住，盒面印着和穹顶纹样相同的云雷图。',
            type: 'switch',
            scenes: ['*dome'],
            layout: { direction: 315, distance: 150 },
            preClue: '#dome_tablet_read',
            interactions: [
              {
                label: '拨开钥盒',
                desc: '打开钥盒取出钥匙。',
                when: '!#has_bronze_key',
                addClues: ['#has_bronze_key'],
              },
            ],
            doneClue: '#has_bronze_key',
          },
          {
            id: 'dome_to_stacks',
            title: '书架回廊',
            desc: '石柱后方的长廊通往书架区。',
            type: 'text',
            scenes: ['*dome'],
            layout: { direction: 0, distance: 160 },
            preClue: '#has_bronze_key',
            interactions: [
              {
                label: '进入回廊',
                desc: '沿着水下回廊深入书架区。',
                addClues: ['*stacks', '-*dome'],
              },
            ],
          },
        ],
      },
      {
        id: 'stacks_scene',
        title: '书架回廊',
        desc: '高大的书架沉在水里，低处书脊发胀，只有上层还能看清。',
        type: 'text',
        sceneClue: '*stacks',
        scenes: ['*stacks'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'stacks_order',
            title: '书脊顺序',
            desc: '四册书脊露出的字分别是海、风、灯、钟，看起来像排列提示。',
            type: 'text',
            scenes: ['*stacks'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '记下顺序',
                desc: '把书脊顺序记住。',
                when: '!#shelf_order_hint',
                addClues: ['#shelf_order_hint'],
              },
            ],
            doneClue: '#shelf_order_hint',
          },
          {
            id: 'stacks_waterline',
            title: '水痕书架',
            desc: '最低层书架被水泡得最厉害，边缘却藏着一行可辨认的批注。',
            type: 'text',
            scenes: ['*stacks'],
            layout: { direction: 250, distance: 150 },
            interactions: [
              {
                label: '检查水痕',
                desc: '读取被水泡开的批注。',
                when: '!#waterline_hint',
                addClues: ['#waterline_hint'],
              },
            ],
            doneClue: '#waterline_hint',
          },
          {
            id: 'stacks_inkstone',
            title: '墨石匣',
            desc: '一只小匣子压在书架底层，里面是墨石和一张配方残纸。',
            type: 'text',
            scenes: ['*stacks'],
            layout: { direction: 345, distance: 150 },
            preClue: '#waterline_hint',
            interactions: [
              {
                label: '取出墨石',
                desc: '拿走墨石。',
                when: '!#has_ink_stone',
                addClues: ['#has_ink_stone'],
              },
            ],
            doneClue: '#has_ink_stone',
          },
          {
            id: 'stacks_scroll_tube',
            title: '封蜡卷筒',
            desc: '卷筒被铜扣拴住，里面似乎卷着残页。',
            type: 'switch',
            scenes: ['*stacks'],
            preClue: '#has_bronze_key',
            layout: { direction: 20, distance: 150 },
            interactions: [
              {
                label: '用钥匙打开铜扣',
                desc: '解除封口，取出卷轴筒。',
                when: '!#has_scroll_tube',
                addClues: ['#has_scroll_tube', '#clasp_released'],
              },
            ],
            doneClue: '#clasp_released',
          },
          {
            id: 'stacks_to_scriptorium',
            title: '抄写间入口',
            desc: '更深处的抄写间在回廊尽头，门禁还未解开。',
            type: 'text',
            scenes: ['*stacks'],
            layout: { direction: 90, distance: 165 },
            preClue: ['AND', '#shelf_order_hint', '#has_scroll_tube'],
            interactions: [
              {
                label: '进入抄写间',
                desc: '顺着回廊进入抄写间。',
                addClues: ['*scriptorium', '-*stacks'],
              },
            ],
          },
        ],
      },
      {
        id: 'scriptorium_scene',
        title: '抄写间',
        desc: '这里原本负责修复残卷，桌上还散着盐、灰、油三种材料。',
        type: 'text',
        sceneClue: '*scriptorium',
        scenes: ['*scriptorium'],
        layout: { direction: 90, distance: 260 },
        children: [
          {
            id: 'scriptorium_formula',
            title: '墨配方',
            desc: '石桌边刻着：盐、灰、油，三者按轻重相合。',
            type: 'text',
            scenes: ['*scriptorium'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '记下配方',
                desc: '把修复墨配方记下来。',
                when: '!#ink_formula_seen',
                addClues: ['#ink_formula_seen'],
              },
            ],
            doneClue: '#ink_formula_seen',
          },
          {
            id: 'scriptorium_fragments',
            title: '残页拼桌',
            desc: '桌面压着几段卷页，合起来才能看清门禁咒文。',
            type: 'text',
            scenes: ['*scriptorium'],
            layout: { direction: 250, distance: 150 },
            preClue: '#has_scroll_tube',
            interactions: [
              {
                label: '拼出残句',
                desc: '查看缺失字句。',
                when: '!#scroll_fragments_seen',
                addClues: ['#scroll_fragments_seen'],
              },
            ],
            doneClue: '#scroll_fragments_seen',
          },
          {
            id: 'scriptorium_catalog',
            title: '目录册',
            desc: '目录册记着密室的卷号和封门位置，但封面已经发霉。',
            type: 'text',
            scenes: ['*scriptorium'],
            layout: { direction: 20, distance: 150 },
            interactions: [
              {
                label: '翻看目录',
                desc: '找到密室的门禁信息。',
                when: '!#catalog_opened',
                addClues: ['#catalog_opened'],
              },
            ],
            doneClue: '#catalog_opened',
          },
          {
            id: 'scriptorium_to_vault',
            title: '藏卷密室',
            desc: '最后一道封门就在目录册记载的位置。',
            type: 'text',
            scenes: ['*scriptorium'],
            layout: { direction: 60, distance: 165 },
            preClue: ['AND', '#catalog_opened', '#restored_scroll'],
            interactions: [
              {
                label: '前往密室',
                desc: '带着修复好的残卷去开密室。',
                addClues: ['*vault', '-*scriptorium'],
              },
            ],
          },
        ],
      },
      {
        id: 'vault_scene',
        title: '藏卷密室',
        desc: '最深处的封门只认修复后的卷文，门后应该就是沉船图书馆真正保存的核心。',
        type: 'text',
        sceneClue: '*vault',
        scenes: ['*vault'],
        layout: { direction: 0, distance: 280 },
        children: [
          {
            id: 'vault_unseal',
            title: '封门刻纹',
            desc: '门上刻着残缺卷文的位置，像是在等人把缺失部分补齐。',
            type: 'text',
            scenes: ['*vault'],
            layout: { direction: 315, distance: 150 },
            preClue: '#restored_scroll',
            interactions: [
              {
                label: '对照卷文',
                desc: '确认封门该如何退开。',
                when: '!#vault_door_unsealed',
                addClues: ['#vault_door_unsealed'],
              },
            ],
            doneClue: '#vault_door_unsealed',
          },
          {
            id: 'vault_blessing',
            title: '书架誓约',
            desc: '门边有一句小字：先护书，再取书，最后才可离开。',
            type: 'switch',
            scenes: ['*vault'],
            layout: { direction: 225, distance: 150 },
            preClue: '#vault_door_unsealed',
            interactions: [
              {
                label: '遵守誓约',
                desc: '把目录归位，按规矩离开。',
                when: '!#archive_blessed',
                addClues: ['#archive_blessed'],
              },
            ],
            doneClue: '#archive_blessed',
          },
          {
            id: 'vault_exit',
            title: '水下出口',
            desc: '门后是向上的石阶，水流已经变得平缓。',
            type: 'text',
            scenes: ['*vault'],
            layout: { direction: 45, distance: 170 },
            preClue: '#archive_blessed',
            interactions: [
              {
                label: '冲出水面',
                desc: '沿石阶向上，离开水下古庙。',
                addClues: ['@escape'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '收着能修卷、开门、保书的东西。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'cloth_item',
            title: '干布',
            desc: '能吸水，适合清理残卷表面。',
            type: 'item',
            preClue: ['AND', '#has_dry_cloth', '!#scrubber_ready'],
            combineWith: [
              {
                targetId: 'inkstone_item',
                addClues: ['#scrubber_ready'],
              },
            ],
          },
          {
            id: 'inkstone_item',
            title: '墨石',
            desc: '配方齐了以后，能用来补足残卷字痕。',
            type: 'item',
            preClue: ['AND', '#has_ink_stone', '!#scrubber_ready'],
            combineWith: [
              {
                targetId: 'cloth_item',
                addClues: ['#scrubber_ready'],
              },
            ],
          },
          {
            id: 'scrolltube_item',
            title: '卷筒残页',
            desc: '卷筒里取出的残页，缺字还没补完。',
            type: 'item',
            preClue: '#has_scroll_tube',
            itemUse: {
              targetIds: ['scriptorium_formula'],
              when: '#ink_formula_seen',
              addClues: ['#restored_scroll'],
            },
          },
          {
            id: 'key_item',
            title: '青铜钥匙',
            desc: '能解开卷筒铜扣，也能开启回廊里的封门。',
            type: 'item',
            preClue: '#has_bronze_key',
            itemUse: {
              targetIds: ['stacks_scroll_tube'],
              addClues: ['#clasp_released'],
            },
          },
        ],
      },
    ],
  },
  triggers: [
    {
      id: 'perfect_escape',
      when: ['AND', '@escape', '#dome_tablet_read', '#shelf_order_hint', '#waterline_hint', '#ink_formula_seen', '#scroll_fragments_seen', '#catalog_opened', '#restored_scroll', '#vault_door_unsealed', '#archive_blessed'],
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
