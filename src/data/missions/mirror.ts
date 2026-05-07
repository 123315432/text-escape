import type { Mission } from '../../core/types'

export const mirrorMission: Mission = {
  id: 'mirror',
  title: '镜像双生',
  subtitle: '现实书房与镜中书房共用同一套因果',
  intro: '雨夜老宅里，书房尽头的铜镜像一扇还没关严的门。你伸手穿过镜面，才发现现实与镜像会互相改写彼此的机关。',
  timeLimitMs: 80 * 60 * 1000,
  initialClues: ['*real_study'],
  bgmScenes: {
    '*real_study': '/audio/bgm/rain.mp3',
    '*mirror_study': '/audio/bgm/thunder.mp3',
    '*heart_chamber': '/audio/bgm/chamber.mp3',
  },
  clueMessages: {
    '*real_study': '— 现实书房 — 雨敲窗棂，铜镜背后像藏着另一间屋子。',
    '*mirror_study': '— 镜中书房 — 左右颠倒，尘埃却按同样的轨迹落下。',
    '*heart_chamber': '— 镜心之间 — 两界反光在这里叠成了真正的门。',
    '#real_poem': '纸笺上的谶语记住了：月隐于真，日藏于影；双玺相合，镜心自启；光不直行，须以丝束之。',
    '#real_book_hint': '书脊数字与镜读方向已经记下。',
    '#mirror_surface_known': '铜镜并非墙面，更像一扇等待穿过的门。',
    '#window_channel_seen': '高窗下方的铜槽正对着门锁，像专门用来引光。',
    '#study_photo_seen': '全家福里被刮掉的那个人，眉眼竟和你一模一样。',
    '#mirror_digits_seen': '镜中座钟停在 251，结合书架提示，应逆读成密码。',
    '#mirror_cabinet_open': '镜中的玻璃矮柜开了。',
    '#has_sun_half': '拿到了半枚日纹玉玺。',
    '#has_prism': '找到了一枚边角完整的三棱镜。',
    '#mirror_handprint_seen': '镜桌灰里压着另一只刚刚按下去的手印。',
    '#mirror_bolt_released': '镜中暗闩落下，现实里的木抽屉应该也松开了。',
    '#real_drawer_open': '现实书桌的暗抽屉弹开了。',
    '#has_moon_half': '拿到了半枚月纹玉玺。',
    '#has_silk_thread': '找到了一缕浸蜡红丝。',
    '#twin_seal_ready': '日月两半玺已经严丝合缝。',
    '#bound_prism_ready': '红丝缠紧了三棱镜，可以稳定导光了。',
    '#seal_inserted': '双生玉玺嵌入镜框，镜心通道显现。',
    '#heart_order_hint': '镜心石刻给出顺序：影 → 真 → 镜 → 光。',
    '#heart_diary_seen': '残页证实你曾来过这里，而镜中的那个你没能离开。',
    '#dial_solved': '镜心转盘归位，两界的光路被重新接通。',
    '#light_route_known': '你知道该把导光棱镜放回现实天窗了。',
    '#beam_aligned': '折射光压进锁芯，正门咔地一声松开。',
  },
  endings: {
    normal: {
      title: '正常逃脱',
      body: '你借折光打开正门，离开了这间老宅。可回头时，铜镜里仍有另一个你站在原地，没有一起眨眼。',
    },
    perfect: {
      title: '完美逃脱',
      body: '你补齐了双生玉玺、镜心石刻与那段被抹去的往事。现实与镜像同时安静下来，你终于只剩下一个自己。',
    },
    timeout: {
      title: '镜封结局',
      body: '最后一束光偏离了铜槽，镜面随即重新凝成冷硬的墙。你看见镜中的自己先一步转身，把你留在了这边。',
    },
  },
  translations: {
    en: {
      title: 'Mirror Twin',
      subtitle: 'One chain of cause and effect shared by the real study and its reflection',
      intro: 'In an old house on a stormy night, the bronze mirror at the end of the study looks like a door left slightly ajar. The moment you reach through it, you learn that the real room and the mirrored one can rewrite each other\'s mechanisms.',
      clueMessages: {
        '*real_study': '— Real Study — Rain taps the window lattice, and another room seems to hide behind the bronze mirror.',
        '*mirror_study': '— Mirrored Study — Left and right are reversed, yet the dust falls in the same patterns.',
        '*heart_chamber': '— Mirror Heart Chamber — Here the reflections of both worlds overlap into the true door.',
        '#real_poem': 'You remember the omen from the note: the moon hides in truth, the sun in shadow; join the twin seals and the mirror heart opens; light never travels straight, so bind it with silk.',
        '#real_book_hint': 'You memorized the spine digits and the instruction to read them in reverse through the mirror.',
        '#mirror_surface_known': 'The bronze mirror is not a wall. It is more like a door waiting to be crossed.',
        '#window_channel_seen': 'The bronze channel beneath the high window points straight at the door lock, as though built to guide light.',
        '#study_photo_seen': 'In the family portrait, the face that was scratched away looks uncannily like yours.',
        '#mirror_digits_seen': 'The mirrored clock is frozen at 251. Combined with the bookshelf hint, the code must be read backward.',
        '#mirror_cabinet_open': 'The glass cabinet in the mirrored room has opened.',
        '#has_sun_half': 'You obtained the sun-engraved half seal.',
        '#has_prism': 'You found a prism with every edge intact.',
        '#mirror_handprint_seen': 'Another fresh handprint is pressed into the dust on the mirrored desk.',
        '#mirror_bolt_released': 'The hidden bolt in the mirrored room dropped. The drawer in the real room should have loosened as well.',
        '#real_drawer_open': 'The hidden drawer in the real study has popped open.',
        '#has_moon_half': 'You obtained the moon-engraved half seal.',
        '#has_silk_thread': 'You found a waxed red silk thread.',
        '#twin_seal_ready': 'The sun and moon halves now fit together perfectly.',
        '#bound_prism_ready': 'The red silk has bound the prism tightly enough to stabilize the beam.',
        '#seal_inserted': 'The twin seal has been set into the frame, revealing the path to the mirror heart.',
        '#heart_order_hint': 'The stone inscription gives the order: Shadow → Truth → Mirror → Light.',
        '#heart_diary_seen': 'The torn page confirms that you were here once before, and the version of you in the mirror never made it out.',
        '#dial_solved': 'The heart dial is aligned. The light path between the two worlds has been reconnected.',
        '#light_route_known': 'You know the prism must be returned to the skylight in the real study.',
        '#beam_aligned': 'The refracted beam drives into the lock core, and the front door gives way with a click.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You used refracted light to open the front door and leave the old house. But when you looked back, another you still stood inside the bronze mirror without blinking.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You completed the twin seal, deciphered the mirror heart inscription, and uncovered the erased past. Reality and reflection both fell silent, and at last only one version of you remained.',
        },
        timeout: {
          title: 'Mirror-Sealed Ending',
          body: 'The final beam slipped away from the bronze channel, and the mirror hardened into a cold wall once more. In the reflection, the other you turned away first and left you on this side.',
        },
      },
      nodes: {
        root: {
          title: 'Mirror Twin',
          desc: 'Reality and reflection share the same mechanisms. Cross between them, assemble the twin tools, and align the path of light.',
        },
        real_study_scene: {
          title: 'Real Study',
          desc: 'An old desk, a bronze mirror, and a high window define this damp, chilly room where every consequence begins.',
        },
        study_note: {
          title: 'Desk Note',
          desc: 'Four lines are written on the paper: the moon hides in truth, the sun in shadow; join the twin seals and the mirror heart opens; light never travels straight, so bind it with silk.',
          interactions: [
            {
              label: 'Read the Note',
              desc: 'Memorize the omen that governs both rooms.',
            },
          ],
        },
        study_bookshelf: {
          title: 'Leaning Bookshelf',
          desc: 'Three protruding hardbound spines read 1, 5, and 2. Beside them, a pencil note says, "In the mirror, read backward."',
          interactions: [
            {
              label: 'Study the Spines',
              desc: 'Memorize the digits and the mirrored reading hint.',
            },
          ],
        },
        study_photo: {
          title: 'Family Portrait',
          desc: 'A family of three stands in the frame, but the face on the right has been scratched away until only an outline like yours remains.',
          interactions: [
            {
              label: 'Examine the Portrait',
              desc: 'Look closely at the erased face.',
            },
          ],
        },
        study_mirror_surface: {
          title: 'Bronze Standing Mirror',
          desc: 'The surface ripples like water, reflecting a matching study on the other side with every left and right reversed.',
          interactions: [
            {
              label: 'Press the Surface',
              desc: 'Find out whether the mirror is a wall or a door.',
            },
          ],
        },
        study_mirror_gate: {
          title: 'Mirror Entrance',
          desc: 'The surface has loosened. When your hand passes through, you can feel the cold air of another room.',
          interactions: [
            {
              label: 'Step Through the Mirror',
              desc: 'Switch to the mirrored study.',
            },
          ],
        },
        study_drawer: {
          title: 'Hidden Drawer',
          desc: 'A stuck compartment on the right side of the desk now looks as though a mechanism from the other side has pulled it loose.',
          interactions: [
            {
              label: 'Pull the Drawer Open',
              desc: 'Take the two objects hidden inside.',
            },
          ],
        },
        study_window: {
          title: 'Skylight Bronze Channel',
          desc: 'A narrow bronze channel runs beneath the high window and lines up with the front door lock, clearly meant to carry a directed beam.',
          interactions: [
            {
              label: 'Inspect the Channel',
              desc: 'Confirm where the final light path is supposed to go.',
            },
          ],
        },
        study_exit: {
          title: 'Front Door',
          desc: 'A tiny light aperture is exposed on the lock. Only a precise refracted beam will make the bolt withdraw.',
          interactions: [
            {
              label: 'Leave Through the Door',
              desc: 'Walk out carrying whatever truth you managed to recover.',
            },
          ],
        },
        mirror_study_scene: {
          title: 'Mirrored Study',
          desc: 'Its layout matches the real room exactly, yet even the direction of the dust suggests someone has been moving here only moments ago.',
        },
        mirror_clock: {
          title: 'Inverted Mantel Clock',
          desc: 'The clock is frozen at 251, with the digits carved into the backs of the flip cards. Together with the note in the real room, the number is clearly not meant to be read straight.',
          interactions: [
            {
              label: 'Record the Digits',
              desc: 'Combine the mirrored reading with the hint from reality.',
            },
          ],
        },
        mirror_cabinet: {
          title: 'Glass Cabinet',
          desc: 'A three-digit lock hangs on the mirrored cabinet. The real bookshelf provides the direction; the clock provides the digits.',
          interactions: [
            {
              label: 'Enter the Code',
              desc: 'Reverse 251 the way the mirror demands.',
            },
          ],
        },
        mirror_desk: {
          title: 'Dusty Mirror Desk',
          desc: 'Only one place in the dust is clear: a palm print as though another hand pressed down here a few seconds ago.',
          interactions: [
            {
              label: 'Study the Handprint',
              desc: 'Trace the direction implied by that mark.',
            },
          ],
        },
        mirror_bolt: {
          title: 'Desk Bolt',
          desc: 'A slim bolt hides beneath the mirrored desk. Pulling it here should loosen the matching structure in the real room.',
          interactions: [
            {
              label: 'Drop the Bolt',
              desc: 'Unlock the hidden drawer in the real study.',
            },
          ],
        },
        mirror_frame: {
          title: 'Empty Mirror Frame',
          desc: 'A circular recess in the wall behind the mirror is the perfect fit for a seal forged from two matching halves.',
          interactions: [
            {
              label: 'Inspect the Recess',
              desc: 'Confirm this is where the twin seal belongs.',
            },
          ],
        },
        mirror_return: {
          title: 'Return to Reality',
          desc: 'Passing back through the mirror still drops you onto the same floorboards in the real study.',
          interactions: [
            {
              label: 'Step Back Through',
              desc: 'Switch back to the real study.',
            },
          ],
        },
        heart_chamber_scene: {
          title: 'Mirror Heart Chamber',
          desc: 'This is where the two studies truly overlap. Only here do the inscription, the torn page, and the dial exist together.',
        },
        heart_inscription: {
          title: 'Heart Inscription',
          desc: 'Four words are arranged from within outward: Shadow, Truth, Mirror, Light. The sequence looks like an instruction for reconnecting the light path.',
          interactions: [
            {
              label: 'Copy the Inscription',
              desc: 'Memorize the order that resets the dial.',
            },
          ],
        },
        heart_diary: {
          title: 'Torn Diary Page',
          desc: 'Only one sentence remains: "If the one in the mirror leaves first, the one who stays will be erased into a substitute."',
          interactions: [
            {
              label: 'Read the Page',
              desc: 'Learn what truly happened in this room.',
            },
          ],
        },
        heart_dial: {
          title: 'Mirror Heart Dial',
          desc: 'The dial is engraved with Shadow, Truth, Mirror, and Light. Only by restoring the order of the inscription can the refracted beam return to reality.',
          sortSymbols: ['Shadow', 'Truth', 'Mirror', 'Light'],
          interactions: [
            {
              label: 'Adjust the Dial',
              desc: 'Arrange the four symbols in the order shown on the inscription.',
            },
          ],
        },
        heart_return: {
          title: 'Return to the Mirror Room',
          desc: 'The path through the mirror heart is still open. You can retreat to the mirrored room and then return to reality for the final step.',
          interactions: [
            {
              label: 'Go Back to the Mirror',
              desc: 'Switch back to the mirrored study.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'It holds the key objects taken while crossing between the two worlds.',
        },
        sun_half_item: {
          title: 'Sun Half-Seal',
          desc: 'Recovered from the mirrored cabinet. Its edge flares outward in sunburst lines.',
        },
        moon_half_item: {
          title: 'Moon Half-Seal',
          desc: 'Recovered from the hidden drawer in reality. Its edge curves inward like a crescent moon.',
        },
        twin_seal_item: {
          title: 'Twin Jade Seal',
          desc: 'The sun and moon halves lock together tightly, and the clasp on the back aligns perfectly with the recess in the frame.',
        },
        prism_item: {
          title: 'Prism',
          desc: 'A light-guiding prism from the mirrored cabinet. On its own, its angle is impossible to keep steady.',
        },
        silk_thread_item: {
          title: 'Waxed Red Silk',
          desc: 'An old red silk thread from the real drawer, stiff enough to fix the prism in place.',
        },
        bound_prism_item: {
          title: 'Bound Prism',
          desc: 'The red silk locks the prism at a fixed angle. All that remains is to place it into the bronze skylight channel.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '镜像双生',
    desc: '现实与镜像共享机关。跨界取物、组合双生道具，再把光路重新校准。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'real_study_scene',
        title: '现实书房',
        desc: '旧书桌、铜镜与高窗围出一间潮冷书房，所有因果都从这里开始。',
        type: 'text',
        sceneClue: '*real_study',
        scenes: ['*real_study'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'study_note',
            title: '书桌纸笺',
            desc: '纸上只写了四句：月隐于真，日藏于影；双玺相合，镜心自启；光不直行，须以丝束之。',
            type: 'text',
            scenes: ['*real_study'],
            layout: { direction: 230, distance: 150 },
            interactions: [
              {
                label: '阅读纸笺',
                desc: '记下关于两界机关的谶语。',
                when: '!#real_poem',
                addClues: ['#real_poem'],
              },
            ],
            doneClue: '#real_poem',
          },
          {
            id: 'study_bookshelf',
            title: '歪斜书架',
            desc: '三本凸出的硬皮书脊依次写着 1、5、2，旁边还有一句铅笔批注："镜里要倒着读。"',
            type: 'text',
            scenes: ['*real_study'],
            layout: { direction: 280, distance: 150 },
            interactions: [
              {
                label: '整理书脊',
                desc: '记下数字与镜读提示。',
                when: '!#real_book_hint',
                addClues: ['#real_book_hint'],
              },
            ],
            doneClue: '#real_book_hint',
          },
          {
            id: 'study_photo',
            title: '全家福',
            desc: '相框里站着一家三口，右侧那个人脸被反复刮花，只留下和你极像的轮廓。',
            type: 'text',
            scenes: ['*real_study'],
            layout: { direction: 330, distance: 145 },
            interactions: [
              {
                label: '端详照片',
                desc: '看看被刮掉的那张脸。',
                when: '!#study_photo_seen',
                addClues: ['#study_photo_seen'],
              },
            ],
            doneClue: '#study_photo_seen',
          },
          {
            id: 'study_mirror_surface',
            title: '青铜穿衣镜',
            desc: '镜面像水一样缓缓起皱，里面倒映着一间位置相同却左右颠倒的书房。',
            type: 'text',
            scenes: ['*real_study'],
            layout: { direction: 20, distance: 155 },
            interactions: [
              {
                label: '按住镜面',
                desc: '确认镜子究竟是墙还是门。',
                when: '!#mirror_surface_known',
                addClues: ['#mirror_surface_known'],
              },
            ],
            doneClue: '#mirror_surface_known',
          },
          {
            id: 'study_mirror_gate',
            title: '镜中入口',
            desc: '镜面已经松开，手掌穿过去时，能摸到另一间房的冷空气。',
            type: 'text',
            scenes: ['*real_study'],
            preClue: '#mirror_surface_known',
            layout: { direction: 55, distance: 165 },
            interactions: [
              {
                label: '跨进镜中',
                desc: '切换到镜中书房。',
                addClues: ['*mirror_study', '-*real_study'],
              },
            ],
          },
          {
            id: 'study_drawer',
            title: '暗抽屉',
            desc: '书桌右侧有一格原本卡死的暗抽屉，锁舌像被另一边的机关带着一起动过。',
            type: 'switch',
            scenes: ['*real_study'],
            preClue: '#mirror_bolt_released',
            layout: { direction: 105, distance: 155 },
            interactions: [
              {
                label: '拉开抽屉',
                desc: '取出抽屉里的两样物件。',
                when: '!#real_drawer_open',
                addClues: ['#real_drawer_open', '#has_moon_half', '#has_silk_thread'],
              },
            ],
            doneClue: '#real_drawer_open',
          },
          {
            id: 'study_window',
            title: '高窗铜槽',
            desc: '高窗下方嵌着一道细长铜槽，正对书房正门锁芯，像是专门给某种折射光准备的轨道。',
            type: 'switch',
            scenes: ['*real_study'],
            layout: { direction: 150, distance: 150 },
            interactions: [
              {
                label: '查看铜槽',
                desc: '确认光路最终会通往哪里。',
                when: '!#window_channel_seen',
                addClues: ['#window_channel_seen'],
              },
            ],
            doneClue: '#window_channel_seen',
          },
          {
            id: 'study_exit',
            title: '书房正门',
            desc: '门锁外露着一枚细小受光孔。只有折射光精准压入，门栓才会真正退开。',
            type: 'text',
            scenes: ['*real_study'],
            preClue: '#beam_aligned',
            layout: { direction: 350, distance: 175 },
            interactions: [
              {
                label: '推门离开',
                desc: '带着所有已知真相离开书房。',
                addClues: ['@escape'],
              },
            ],
          },
        ],
      },
      {
        id: 'mirror_study_scene',
        title: '镜中书房',
        desc: '布局完全对应现实，却连灰尘方向都像有人刚刚在这里活动过。',
        type: 'text',
        sceneClue: '*mirror_study',
        scenes: ['*mirror_study'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'mirror_clock',
            title: '倒置座钟',
            desc: '镜中座钟停在 251，数字被刻在翻页牌背面。结合现实书架的批注，这组数显然不能顺着看。',
            type: 'text',
            scenes: ['*mirror_study'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '记下数字',
                desc: '把镜中的读数和现实提示拼起来。',
                when: '!#mirror_digits_seen',
                addClues: ['#mirror_digits_seen'],
              },
            ],
            doneClue: '#mirror_digits_seen',
          },
          {
            id: 'mirror_cabinet',
            title: '玻璃矮柜',
            desc: '镜中矮柜挂着三位密码锁。现实书架给了方向，座钟给了数字。',
            type: 'password',
            scenes: ['*mirror_study'],
            preClue: ['AND', '#real_book_hint', '#mirror_digits_seen'],
            layout: { direction: 350, distance: 155 },
            code: '152',
            successClues: ['#mirror_cabinet_open', '#has_sun_half', '#has_prism'],
            doneClue: '#mirror_cabinet_open',
            interactions: [
              {
                label: '输入密码',
                desc: '把 251 按镜读方式逆过来。',
              },
            ],
          },
          {
            id: 'mirror_desk',
            title: '覆灰镜桌',
            desc: '桌面灰尘只缺了一块掌印，像几秒前还有另一只手按在这里。',
            type: 'text',
            scenes: ['*mirror_study'],
            layout: { direction: 245, distance: 150 },
            interactions: [
              {
                label: '观察掌印',
                desc: '比对那道掌印留下的方向。',
                when: '!#mirror_handprint_seen',
                addClues: ['#mirror_handprint_seen'],
              },
            ],
            doneClue: '#mirror_handprint_seen',
          },
          {
            id: 'mirror_bolt',
            title: '书桌底闩',
            desc: '镜中书桌底部藏着一根细闩，拉动它时，现实那边的结构也会同步松动。',
            type: 'switch',
            scenes: ['*mirror_study'],
            preClue: '#mirror_cabinet_open',
            layout: { direction: 60, distance: 155 },
            interactions: [
              {
                label: '拨下底闩',
                desc: '让现实里的暗抽屉跟着解锁。',
                when: '!#mirror_bolt_released',
                addClues: ['#mirror_bolt_released'],
              },
            ],
            doneClue: '#mirror_bolt_released',
          },
          {
            id: 'mirror_frame',
            title: '空缺镜框',
            desc: '镜后墙面露出一道圆形凹槽，正好能嵌入一枚由两半合成的玺印。',
            type: 'switch',
            scenes: ['*mirror_study'],
            preClue: '#twin_seal_ready',
            layout: { direction: 110, distance: 155 },
            doneClue: '#seal_inserted',
            interactions: [
              {
                label: '观察凹槽',
                desc: '确认这里正是双生玉玺的落位点。',
                when: '!#seal_inserted',
                addClues: [],
              },
            ],
          },
          {
            id: 'mirror_return',
            title: '返回现实',
            desc: '从镜子倒穿回去，仍会落在现实书房的同一块地板上。',
            type: 'text',
            scenes: ['*mirror_study'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '退回现实',
                desc: '切换回现实书房。',
                addClues: ['*real_study', '-*mirror_study'],
              },
            ],
          },
        ],
      },
      {
        id: 'heart_chamber_scene',
        title: '镜心之间',
        desc: '这是两间书房真正重叠的地方，石刻、残页和转盘都只会在这里同时存在。',
        type: 'text',
        sceneClue: '*heart_chamber',
        scenes: ['*heart_chamber'],
        layout: { direction: 35, distance: 280 },
        children: [
          {
            id: 'heart_inscription',
            title: '镜心石刻',
            desc: '石刻四字由内向外排开：影、真、镜、光。顺序像是某种重新接通光路的指令。',
            type: 'text',
            scenes: ['*heart_chamber'],
            layout: { direction: 320, distance: 150 },
            interactions: [
              {
                label: '抄下石刻',
                desc: '记住转盘的归位顺序。',
                when: '!#heart_order_hint',
                addClues: ['#heart_order_hint'],
              },
            ],
            doneClue: '#heart_order_hint',
          },
          {
            id: 'heart_diary',
            title: '撕裂残页',
            desc: '残页上只剩一句："如果镜中的我先出去，留下的那个就会被抹成替身。"',
            type: 'text',
            scenes: ['*heart_chamber'],
            layout: { direction: 250, distance: 150 },
            interactions: [
              {
                label: '阅读残页',
                desc: '确认这间屋子真正发生过什么。',
                when: '!#heart_diary_seen',
                addClues: ['#heart_diary_seen'],
              },
            ],
            doneClue: '#heart_diary_seen',
          },
          {
            id: 'heart_dial',
            title: '镜心转盘',
            desc: '转盘边缘刻着影、真、镜、光四个符号。按照石刻顺序归位，才能让折射光真正穿回现实。',
            type: 'click-sort',
            scenes: ['*heart_chamber'],
            preClue: '#heart_order_hint',
            layout: { direction: 20, distance: 155 },
            sortSymbols: ['影', '真', '镜', '光'],
            sortSolution: [0, 1, 2, 3],
            successClues: ['#dial_solved', '#light_route_known'],
            doneClue: '#dial_solved',
            interactions: [
              {
                label: '调整转盘',
                desc: '按石刻顺序排列四个符号。',
              },
            ],
          },
          {
            id: 'heart_return',
            title: '退回镜中书房',
            desc: '镜心通道仍然敞开，可以先退回镜中，再回现实完成最后一步。',
            type: 'text',
            scenes: ['*heart_chamber'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '返回镜中',
                desc: '切换回镜中书房。',
                addClues: ['*mirror_study', '-*heart_chamber'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '收纳穿梭两界时取得的关键道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'sun_half_item',
            title: '日纹半玺',
            desc: '来自镜中矮柜，边缘是向外放射的日芒纹。',
            type: 'item',
            preClue: ['AND', '#has_sun_half', '!#twin_seal_ready'],
            combineWith: [
              {
                targetId: 'moon_half_item',
                addClues: ['#twin_seal_ready'],
              },
            ],
          },
          {
            id: 'moon_half_item',
            title: '月纹半玺',
            desc: '来自现实暗抽屉，边缘是内收的新月纹。',
            type: 'item',
            preClue: ['AND', '#has_moon_half', '!#twin_seal_ready'],
            combineWith: [
              {
                targetId: 'sun_half_item',
                addClues: ['#twin_seal_ready'],
              },
            ],
          },
          {
            id: 'twin_seal_item',
            title: '双生玉玺',
            desc: '日月两半紧密咬合，背面的卡榫恰好对准镜框凹槽。',
            type: 'item',
            preClue: '#twin_seal_ready',
            itemUse: {
              targetIds: ['mirror_frame'],
              addClues: ['#seal_inserted', '*heart_chamber', '-*mirror_study'],
            },
          },
          {
            id: 'prism_item',
            title: '三棱镜',
            desc: '镜中矮柜里的导光棱镜，单独拿着时角度始终不稳。',
            type: 'item',
            preClue: ['AND', '#has_prism', '!#bound_prism_ready'],
            combineWith: [
              {
                targetId: 'silk_thread_item',
                addClues: ['#bound_prism_ready'],
              },
            ],
          },
          {
            id: 'silk_thread_item',
            title: '浸蜡红丝',
            desc: '现实抽屉里的旧红丝，带着硬度，正适合固定棱镜角度。',
            type: 'item',
            preClue: ['AND', '#has_silk_thread', '!#bound_prism_ready'],
            combineWith: [
              {
                targetId: 'prism_item',
                addClues: ['#bound_prism_ready'],
              },
            ],
          },
          {
            id: 'bound_prism_item',
            title: '束丝棱镜',
            desc: '红丝将棱镜牢牢束成固定角度，只差放进现实高窗的铜槽里。',
            type: 'item',
            preClue: '#bound_prism_ready',
            itemUse: {
              targetIds: ['study_window'],
              when: '#light_route_known',
              addClues: ['#beam_aligned'],
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
        '#real_poem',
        '#real_book_hint',
        '#mirror_digits_seen',
        '#mirror_cabinet_open',
        '#mirror_bolt_released',
        '#real_drawer_open',
        '#heart_order_hint',
        '#dial_solved',
        '#window_channel_seen',
        '#study_photo_seen',
        '#mirror_handprint_seen',
        '#heart_diary_seen',
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
