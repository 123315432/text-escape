import type { Mission } from '../../core/types'

export const concessionMission: Mission = {
  id: 'concession',
  title: '民国租界',
  subtitle: '密电与双语线索',
  intro: '1930年代，你潜伏于上海租界的某洋行。一份分成两截的电报，一台摩斯电码机，一扇通往天台的铁门——你必须在日落前发出信号，等来接头人，从后港逃离。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*lobby'],
  bgmScenes: {
    '*lobby': '/audio/bgm/concession1.mp3',
    '*cipher_room': '/audio/bgm/concession2.mp3',
    '*rooftop': '/audio/bgm/concession3.mp3',
  },
  clueMessages: {
    '*lobby': '— 洋行大厅 —',
    '*cipher_room': '— 密室 —',
    '*rooftop': '— 天台 —',
    '#lobby_signs_read': '四块招牌，首字母各有玄机。',
    '#safe_opened': '保险箱开了！',
    '#has_telegram_a': '拿到了电报甲，残缺的上半截。',
    '#morse_solved': '电码机解密完成！',
    '#has_telegram_b': '拿到了电报乙，残缺的下半截。',
    '#telegram_combined': '两份电报拼出完整地址：天台信号灯，顺序是风火雷。',
    '#signal_sent': '信号发出！远处船影接近。',
    '#contact_made': '接头人已确认身份，逃生通道就在眼前。',
  },
  translations: {
    en: {
      title: 'The Concession',
      subtitle: 'Cipher traffic and bilingual clues',
      intro: 'It is 1930s Shanghai. You are undercover inside a foreign trading house in the concession. A telegram split in two, a Morse machine, and an iron door to the rooftop stand between you and the river escape route. Send the signal before sunset and meet your contact.',
      clueMessages: {
        '*lobby': '— Trading Hall —',
        '*cipher_room': '— Cipher Room —',
        '*rooftop': '— Rooftop —',
        '#lobby_signs_read': 'The four signs hide a pattern in their initials.',
        '#safe_opened': 'The safe is open!',
        '#has_telegram_a': 'You took Telegram A, the torn upper half.',
        '#morse_solved': 'The Morse machine has been deciphered!',
        '#has_telegram_b': 'You took Telegram B, the torn lower half.',
        '#telegram_combined': 'The two telegram halves reveal the full instruction: rooftop signal lamps, in the order Wind, Fire, Thunder.',
        '#signal_sent': 'Signal sent! A ship is drawing near in the distance.',
        '#contact_made': 'Your contact has confirmed your identity. The escape route is right in front of you.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You got the signal out and slipped from the concession by the back harbor before the net closed.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'Every coded detail lined up cleanly, the contact answered on time, and you left the concession without leaving a loose end behind.',
        },
        timeout: {
          title: 'Time Ran Out',
          body: 'Before the signal was sent, dusk settled over the Bund and the escape window shut with it.',
        },
      },
      nodes: {
        root: {
          title: 'The Concession',
          desc: 'Three linked scenes. Only by gathering every clue can you escape the concession.',
        },
        lobby: {
          title: 'Trading Hall',
          desc: 'Tall Roman columns, four bilingual signs on the lintel, and a heavy safe at the center.',
        },
        lobby_signs: {
          title: 'Bilingual Signs',
          desc: 'Four plaques stand side by side: Emporium, Library, Insurance, Medical. Their Chinese translations are written beneath them.',
          interactions: [
            {
              label: 'Read the Signs Closely',
              desc: 'Compare the Chinese and English signs one by one and note the initials.',
            },
          ],
        },
        lobby_safe: {
          title: 'Safe',
          desc: 'A rusted four-letter dial lock, but the wheels still turn smoothly.',
          interactions: [
            {
              label: 'Enter Code',
              desc: 'Turn the four letter dials.',
            },
          ],
        },
        lobby_cipher_entrance: {
          title: 'Cipher Room Entrance',
          desc: 'Behind the hidden compartment is an iron door leading down to the secret room.',
          interactions: [
            {
              label: 'Enter the Cipher Room',
              desc: 'Push open the hidden door and step into the underground cipher room.',
            },
          ],
        },
        cipher_room: {
          title: 'Cipher Room',
          desc: 'The cellar is dim and damp. An old Morse machine sits in the corner, and half a telegram lies on the desk.',
        },
        cipher_morse: {
          title: 'Morse Machine',
          desc: 'Three groups of dots and dashes are printed on the receipt paper. Decode them into three letters to unlock the compartment.',
          interactions: [
            {
              label: 'Enter Decoded Text',
              desc: 'Use the dots and dashes on the paper to enter the three-letter result.',
            },
          ],
        },
        cipher_desk: {
          title: 'Telegram Desk',
          desc: 'The address can only be read once both torn telegram halves are joined together.',
          interactions: [
            {
              label: 'Join the Telegram',
              desc: 'Align Telegram A and Telegram B and read the complete contents.',
            },
          ],
        },
        cipher_return: {
          title: 'Return to the Hall',
          desc: 'Go back through the hidden passage and fill in any clues you missed.',
          interactions: [
            {
              label: 'Return to the Hall',
              desc: 'Take the hidden passage back to the trading hall.',
            },
          ],
        },
        cipher_rooftop_entrance: {
          title: 'Rooftop Stair',
          desc: 'An iron ladder leads straight to the rooftop, but only the completed telegram confirms the destination.',
          interactions: [
            {
              label: 'Go Up to the Rooftop',
              desc: 'Climb the iron ladder to the rooftop signal lamps.',
            },
          ],
        },
        rooftop: {
          title: 'Rooftop',
          desc: 'Night wind sweeps across the railing. Four old signal lamps stand beside it, facing a steamship on the Huangpu River.',
        },
        rooftop_signal: {
          title: 'Signal Lamp Sequence',
          desc: 'The four lamps are marked Wind, Fire, Thunder, Lightning. The telegram specifies the sending order.',
          sortSymbols: ['Wind', 'Fire', 'Thunder', 'Lightning'],
          interactions: [
            {
              label: 'Arrange the Lamps',
              desc: 'Activate the four lamps in the sequence given by the telegram.',
            },
          ],
        },
        rooftop_contact: {
          title: 'The Contact',
          desc: 'A figure climbs up from the ship and waits for your code phrase on the rooftop.',
          interactions: [
            {
              label: 'Make Contact',
              desc: 'Use the agreed phrase to confirm identities.',
            },
          ],
        },
        rooftop_escape: {
          title: 'Escape Route',
          desc: 'Your contact opens an emergency ladder hidden behind the water tower, leading straight to the dock.',
          interactions: [
            {
              label: 'Escape',
              desc: 'Climb down to the dock and board the ship.',
            },
          ],
        },
        rooftop_return: {
          title: 'Return to the Cipher Room',
          desc: 'If anything is still missing, you can head back down and finish collecting clues.',
          interactions: [
            {
              label: 'Return to the Cipher Room',
              desc: 'Climb down the iron ladder to the underground room.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Stores the items taken from the scene.',
        },
        telegram_a_item: {
          title: 'Telegram A',
          desc: 'The upper half of the telegram, carrying the first part of the address but missing key characters.',
        },
        telegram_b_item: {
          title: 'Telegram B',
          desc: 'The lower half taken from the Morse compartment. Once aligned with A, the full address becomes clear.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '民国租界',
    desc: '三处场景环环相扣，找齐线索方能逃出租界。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 场景一：洋行大厅 ──────────────────────────────
      {
        id: 'lobby',
        title: '洋行大厅',
        desc: '高大的罗马廊柱，四块中英文招牌挂在门楣上，正中是一口厚重的保险箱。',
        type: 'text',
        sceneClue: '*lobby',
        scenes: ['*lobby'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'lobby_signs',
            title: '中英文招牌',
            desc: '四块匾额并列：Emporium（洋行）、Library（书馆）、Insurance（保险）、Medical（医馆）。汉字译名各占一行。',
            type: 'text',
            scenes: ['*lobby'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '细读招牌',
                desc: '逐一核对中英文，记下首字母。',
                when: '!#lobby_signs_read',
                addClues: ['#lobby_signs_read'],
              },
            ],
            doneClue: '#lobby_signs_read',
          },
          {
            id: 'lobby_safe',
            title: '保险箱',
            desc: '四位字母转盘密码锁，锈迹斑斑，但拨轮仍然灵活。',
            type: 'password',
            scenes: ['*lobby'],
            layout: { direction: 270, distance: 150 },
            preClue: '#lobby_signs_read',
            code: 'ELIM',
            successClues: ['#safe_opened', '#has_telegram_a'],
            doneClue: '#safe_opened',
            interactions: [
              {
                label: '输入密码',
                desc: '拨动四位字母转盘。',
              },
            ],
          },
          {
            id: 'lobby_cipher_entrance',
            title: '密室入口',
            desc: '暗格后面是一扇隐藏铁门，通往地下密室。',
            type: 'text',
            scenes: ['*lobby'],
            layout: { direction: 315, distance: 150 },
            preClue: '#lobby_signs_read',
            interactions: [
              {
                label: '进入密室',
                desc: '推开暗门，踏入地下密室。',
                addClues: ['*cipher_room', '-*lobby'],
              },
            ],
          },
        ],
      },

      // ── 场景二：密室 ──────────────────────────────────
      {
        id: 'cipher_room',
        title: '密室',
        desc: '地下室昏暗潮湿，角落摆着一台老式摩斯电码机，桌面散落着半截电报纸。',
        type: 'text',
        sceneClue: '*cipher_room',
        scenes: ['*cipher_room'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'cipher_morse',
            title: '摩斯电码机',
            desc: '收报纸上有三组点划，译出三字母即可解锁储物格。',
            type: 'password',
            scenes: ['*cipher_room'],
            layout: { direction: 45, distance: 150 },
            code: 'SOS',
            successClues: ['#morse_solved', '#has_telegram_b'],
            doneClue: '#morse_solved',
            interactions: [
              {
                label: '输入译码',
                desc: '根据收报纸上的点划输入三字母。',
              },
            ],
          },
          {
            id: 'cipher_desk',
            title: '电报桌',
            desc: '两截残缺的电报纸，拼在一起才能看清完整地址。',
            type: 'text',
            scenes: ['*cipher_room'],
            layout: { direction: 315, distance: 150 },
            preClue: ['AND', '#has_telegram_a', '#has_telegram_b'],
            interactions: [
              {
                label: '拼合电报',
                desc: '将电报甲与电报乙对齐拼接，读出完整内容。',
                when: '!#telegram_combined',
                addClues: ['#telegram_combined'],
              },
            ],
            doneClue: '#telegram_combined',
          },
          {
            id: 'cipher_return',
            title: '返回大厅',
            desc: '原路退回洋行大厅，补充遗漏的线索。',
            type: 'text',
            scenes: ['*cipher_room'],
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '返回大厅',
                desc: '沿暗道退回洋行大厅。',
                addClues: ['*lobby', '-*cipher_room'],
              },
            ],
          },
          {
            id: 'cipher_rooftop_entrance',
            title: '天台入口',
            desc: '铁梯直通楼顶天台，电报合并后才能确认地址无误。',
            type: 'text',
            scenes: ['*cipher_room'],
            layout: { direction: 90, distance: 160 },
            preClue: '#telegram_combined',
            interactions: [
              {
                label: '上天台',
                desc: '攀上铁梯，前往天台信号灯处。',
                addClues: ['*rooftop', '-*cipher_room'],
              },
            ],
          },
        ],
      },

      // ── 场景三：天台 ──────────────────────────────────
      {
        id: 'rooftop',
        title: '天台',
        desc: '夜风刮过，四盏旧式信号灯立在栏杆旁，对面黄浦江上漂着一艘蒸汽船。',
        type: 'text',
        sceneClue: '*rooftop',
        scenes: ['*rooftop'],
        layout: { direction: 0, distance: 260 },
        children: [
          {
            id: 'rooftop_signal',
            title: '信号灯排序',
            desc: '四盏信号灯标着"风火雷电"，电报指明了发送顺序。',
            type: 'click-sort',
            scenes: ['*rooftop'],
            layout: { direction: 30, distance: 150 },
            preClue: '#telegram_combined',
            sortSymbols: ['风', '火', '雷', '电'],
            sortSolution: [0, 1, 2, 3],
            successClues: ['#signal_sent'],
            doneClue: '#signal_sent',
            interactions: [
              {
                label: '排列信号灯',
                desc: '按电报所示顺序依次激活四盏信号灯。',
              },
            ],
          },
          {
            id: 'rooftop_contact',
            title: '接头人',
            desc: '船上下来一道人影，沿铁梯攀上天台，等待你的暗语。',
            type: 'switch',
            scenes: ['*rooftop'],
            layout: { direction: 330, distance: 150 },
            preClue: '#signal_sent',
            doneClue: '#contact_made',
            interactions: [
              {
                label: '接头',
                desc: '用约定暗语确认身份。',
                when: '!#contact_made',
                addClues: ['#contact_made'],
              },
            ],
          },
          {
            id: 'rooftop_escape',
            title: '逃离通道',
            desc: '接头人打开了藏在水塔后的逃生梯，直通码头。',
            type: 'text',
            scenes: ['*rooftop'],
            layout: { direction: 60, distance: 200 },
            preClue: '#contact_made',
            interactions: [
              {
                label: '逃离',
                desc: '沿逃生梯下到码头，登船离开。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'rooftop_return',
            title: '返回密室',
            desc: '若还有线索未收集，可退回密室补全。',
            type: 'text',
            scenes: ['*rooftop'],
            layout: { direction: 210, distance: 160 },
            interactions: [
              {
                label: '返回密室',
                desc: '沿铁梯退回地下密室。',
                addClues: ['*cipher_room', '-*rooftop'],
              },
            ],
          },
        ],
      },

      // ── 背包 ──────────────────────────────────────────
      {
        id: 'backpack',
        title: '背包',
        desc: '存放从现场取得的道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'telegram_a_item',
            title: '电报甲',
            desc: '电报上半截，印着收件人地址的前半段，缺了关键字符。',
            type: 'item',
            preClue: ['AND', '#has_telegram_a', '!#telegram_combined'],
            combineWith: [
              {
                targetId: 'telegram_b_item',
                addClues: ['#telegram_combined'],
              },
            ],
          },
          {
            id: 'telegram_b_item',
            title: '电报乙',
            desc: '电报下半截，摩斯储物格里取出，与甲对齐后地址完整。',
            type: 'item',
            preClue: ['AND', '#has_telegram_b', '!#telegram_combined'],
            combineWith: [
              {
                targetId: 'telegram_a_item',
                addClues: ['#telegram_combined'],
              },
            ],
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
        '#morse_solved',
        '#lobby_signs_read',
        '#telegram_combined',
        '#contact_made',
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
