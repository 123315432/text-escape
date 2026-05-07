import type { Mission } from '../../core/types'

export const operaMission: Mission = {
  id: 'opera',
  title: '戏班后台',
  subtitle: '清末戏班，脸谱密码，鼓点机关',
  intro: '你被锁在一座百年戏楼的后台。脸谱里藏着密码，鼓点是机关的语言。找到那把折扇，推开那扇门。',
  timeLimitMs: 60 * 60 * 1000,
  initialClues: ['*backstage'],
  bgmScenes: {
    '*backstage': '/audio/bgm/opera1.mp3',
    '*stage': '/audio/bgm/opera2.mp3',
    '*props_room': '/audio/bgm/opera1.mp3',
    '*attic': '/audio/bgm/hall.mp3',
  },
  clueMessages: {
    '*backstage': '— 化妆间 — 脂粉香气与樟木箱的气息混在一起。',
    '*stage': '— 舞台 — 大幕低垂，台板吱嘎，百年的故事就在脚下。',
    '*props_room': '— 道具房 — 满架的刀枪剑戟落了灰，只有骨扇还算完整。',
    '*attic': '— 戏楼顶 — 横梁上积了厚厚的尘，中央有个孤零零的扇钩。',
    '#opera_hint_red': '红色脸谱：七。',
    '#opera_hint_green': '绿色脸谱：三。',
    '#opera_hint_blue': '蓝色脸谱：一。',
    '#opera_makeup_note': '"赤七绿三蓝一，上下拼合"——纸条的字迹细如发丝。',
    '#opera_drum_solved': '五面鼓依次作响，台板震颤，一道隐秘的机括弹开了。',
    '#opera_floor_opened': '活板翻转，夹层里压着旧物，多年无人问津。',
    '#has_costume_piece': '戏服碎片到手，丝线还是原来的颜色，只是边角已经磨损。',
    '#opera_fan_cloth_found': '宝箱里有一块完整的扇面布料，色泽依旧鲜亮。',
    '#opera_chest_opened': '宝箱咔哒弹开，百年的秘密就压在这一层木板下面。',
    '#opera_prop_hint': '"折扇悬于顶梁，压镇戏楼百年。"——道具单上的字。',
    '#opera_costume_note': '戏服箱旁有个注记：骨扇配扇面，完整方能成器。',
    '#has_fan_frame': '空骨扇入手，骨架完好，只是没有扇面，撑不开来。',
    '#opera_fan_ready': '骨扇与扇面严密合拢，一把完整的折扇重新成形。',
    '#opera_attic_hint': '"扇镇百年，今日移扇，戏楼自开。"——梁上的题字。',
    '#opera_fan_hung': '折扇挂上横梁扇钩，机括应声而动，侧门自行弹开。',
  },
  translations: {
    en: {
      title: 'Opera Backstage',
      subtitle: 'Late Qing opera house, painted-face code, drum mechanism',
      intro: 'You are locked backstage in a century-old opera house. The painted faces conceal a code, and the drums speak the language of mechanisms. Find the folding fan and open the door.',
      clueMessages: {
        '*backstage': '— Dressing Room — The scent of powder mixes with old camphor chests.',
        '*stage': '— Stage — The curtain hangs low, the boards creak, and a century of stories rests beneath your feet.',
        '*props_room': '— Props Room — Dust coats the weapon racks; only the fan frame remains mostly intact.',
        '*attic': '— Loft — Thick dust lies across the beams, and a lone fan hook waits at the center.',
        '#opera_hint_red': 'Red face paint: seven.',
        '#opera_hint_green': 'Green face paint: three.',
        '#opera_hint_blue': 'Blue face paint: one.',
        '#opera_makeup_note': '"Red seven, green three, blue one — stack them top to bottom." The writing on the note is hair-thin.',
        '#opera_drum_solved': 'The five drums sound in sequence, the stage boards tremble, and a hidden mechanism springs loose.',
        '#opera_floor_opened': 'The trap panel flips open. Old belongings have been pressed inside for years.',
        '#has_costume_piece': 'You obtained a costume fragment. The thread keeps its old color, though the edges are badly worn.',
        '#opera_fan_cloth_found': 'Inside the chest is an intact fan cloth, its colors still bright.',
        '#opera_chest_opened': 'The chest clicks open, and a century of secrets lies under this layer of wood.',
        '#opera_prop_hint': '"The folding fan hangs from the roof beam, holding the opera house in check for a hundred years." — from the prop list.',
        '#opera_costume_note': 'A note beside the costume chest reads: pair the fan frame with the fan cloth; only whole can become useful.',
        '#has_fan_frame': 'You picked up the bare fan frame. The ribs are intact, but without a leaf it cannot open.',
        '#opera_fan_ready': 'The frame and cloth fit together perfectly, forming a complete folding fan once more.',
        '#opera_attic_hint': '"A fan steadied this house for a hundred years; move the fan today, and the theater opens itself." — from the beam inscription.',
        '#opera_fan_hung': 'The folding fan catches on the beam hook, the mechanism answers, and the side door pops open on its own.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You pieced together the old backstage mechanism and walked out of the opera house through its long-hidden side door.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You read every mirror, beat every drum in order, restored the fan, and left the theater with all of its old secrets understood.',
        },
        timeout: {
          title: 'Time Ran Out',
          body: 'Before the side door opened, the opera house fell quiet again and its century-old machinery locked you in place.',
        },
      },
      nodes: {
        root: {
          title: 'Opera Backstage',
          desc: 'Painted faces, drumbeats, and a folding fan — three threads tied to the same opera house secret.',
        },
        backstage_scene: {
          title: 'Dressing Room',
          desc: 'Three makeup mirrors and a single makeup box. The painted-face code is hidden here.',
        },
        opera_mirror_left: {
          title: 'Left Makeup Mirror',
          desc: 'Half a painted face is reflected in the glass, and the red section clearly bears the number seven.',
          interactions: [
            {
              label: 'Inspect Left Mirror',
              desc: 'Lean close and identify the number written on the painted face.',
            },
          ],
        },
        opera_mirror_center: {
          title: 'Center Makeup Mirror',
          desc: 'A diagonal crack crosses the mirror. Through its refraction you can see the green section marked with the number three.',
          interactions: [
            {
              label: 'Look Through the Crack',
              desc: 'Shift your angle and use the crack\'s refraction to see the reflection properly.',
            },
          ],
        },
        opera_mirror_right: {
          title: 'Right Makeup Mirror',
          desc: 'The rightmost mirror is covered by an old cloth. Once removed, the blue section of the painted face reveals the number one.',
          interactions: [
            {
              label: 'Pull Away the Cloth',
              desc: 'Tear off the cover and reveal the face in the mirror.',
            },
          ],
        },
        opera_makeup_box: {
          title: 'Makeup Box',
          desc: 'A folded note lies beneath the paint tubes in the bottom layer: red seven, green three, blue one — stack top and bottom.',
          interactions: [
            {
              label: 'Search the Box',
              desc: 'Pull out the note tucked underneath the makeup supplies.',
            },
          ],
        },
        opera_dressing_room_door: {
          title: 'Toward the Stage',
          desc: 'A side door from the dressing room leads into the backstage stage area.',
          interactions: [
            {
              label: 'Go to the Stage',
              desc: 'Pass through the side door into the stage area.',
            },
          ],
        },
        opera_props_door: {
          title: 'Toward the Props Room',
          desc: 'A smaller door on the other side of the dressing room leads straight into the props room.',
          interactions: [
            {
              label: 'Enter the Props Room',
              desc: 'Push through the small door into the props room.',
            },
          ],
        },
        stage_scene: {
          title: 'Stage',
          desc: 'The curtain hangs low. Drum rack, chest, and trap panel all wait to be understood.',
        },
        opera_drum_lock: {
          title: 'Drum Mechanism',
          desc: 'Five drums hang from the rack, each marked with a symbol: ● ◐ ○ ◑ ◉. The inscription reads: "Urgent — gentle — resonance — half-tone — silence, strike in that order." The mapping is ● = urgent, ○ = gentle, ◉ = resonance, ◐ = half-tone, ◑ = silence.',
          interactions: [
            {
              label: 'Strike the Drums',
              desc: 'Arrange the order of the five drum strikes according to the inscription.',
            },
          ],
        },
        opera_stage_lock: {
          title: 'Stage Chest',
          desc: 'An old chest bears a three-digit lock. The three painted-face colors each match one number. Two colors are above, one is below, and the code is read from top to bottom.',
          interactions: [
            {
              label: 'Turn the Lock',
              desc: 'Enter the three digits: red seven, green three, blue one, stacked top to bottom.',
            },
          ],
        },
        opera_stage_floor: {
          title: 'Stage Trap Panel',
          desc: 'The floorboard at the center of the stage has always felt slightly loose, and the drum resonance makes it even more obvious.',
          interactions: [
            {
              label: 'Press the Panel',
              desc: 'Stamp down on the loose board and listen for the mechanism inside.',
            },
          ],
        },
        opera_under_stage: {
          title: 'Understage Compartment',
          desc: 'When the panel flips open, a damaged costume and a scrap of cloth are revealed inside, pressed there for years.',
          interactions: [
            {
              label: 'Take the Hidden Items',
              desc: 'Remove the costume fragment from the compartment.',
            },
          ],
        },
        opera_stage_to_props: {
          title: 'Toward the Props Room',
          desc: 'A passage behind the side curtain connects the stage to the props room.',
          interactions: [
            {
              label: 'Enter the Props Room',
              desc: 'Go through the side curtain into the props room.',
            },
          ],
        },
        opera_stage_return: {
          title: 'Return to the Dressing Room',
          desc: 'Leave the stage and head back to the backstage dressing room.',
          interactions: [
            {
              label: 'Return to the Dressing Room',
              desc: 'Go back to the dressing room.',
            },
          ],
        },
        props_room_scene: {
          title: 'Props Room',
          desc: 'Dusty racks of stage weapons line the room, and a bare fan frame hangs on the fan stand without a leaf.',
        },
        opera_fan_rack: {
          title: 'Fan Stand',
          desc: 'The stand is almost empty, save for a bare folding-fan frame of fine Xiangfei bamboo with no leaf attached.',
          interactions: [
            {
              label: 'Take the Fan Frame',
              desc: 'Remove the bare fan frame from the stand and store it in your pack.',
            },
          ],
        },
        opera_costume_chest: {
          title: 'Costume Chest',
          desc: 'The large chest is shut. A note beside it reads: pair the fan frame with the fan cloth; only then can it become whole.',
          interactions: [
            {
              label: 'Inspect the Costume Chest',
              desc: 'Read the note beside the chest and confirm the prop-matching hint.',
            },
          ],
        },
        opera_prop_note: {
          title: 'Old Prop List',
          desc: 'A yellowing prop checklist is pinned to the wall. The last line reads: "The folding fan hangs from the roof beam, steadying the opera house for a hundred years."',
          interactions: [
            {
              label: 'Read the Prop List',
              desc: 'Read through the old list line by line.',
            },
          ],
        },
        opera_props_to_stage: {
          title: 'Toward the Stage',
          desc: 'A side door from the props room leads back to the stage.',
          interactions: [
            {
              label: 'Enter the Stage',
              desc: 'Pass through the side door back onto the stage.',
            },
          ],
        },
        opera_props_to_attic: {
          title: 'Toward the Loft',
          desc: 'A wooden ladder in the corner of the props room leads up to the roof beams.',
          interactions: [
            {
              label: 'Climb to the Loft',
              desc: 'Carry the folding fan and climb the ladder to the loft.',
            },
          ],
        },
        attic_scene: {
          title: 'Loft',
          desc: 'Old beams, carved characters, and the fan hook that has waited a hundred years.',
        },
        opera_attic_note: {
          title: 'Beam Inscription',
          desc: 'A line of small characters is carved into the side of the beam: "A fan steadied this house for a hundred years; move the fan today, and the theater opens itself." The ink-cut grooves run deep.',
          interactions: [
            {
              label: 'Look Up at the Inscription',
              desc: 'Tilt your head back and read the carved line on the beam.',
            },
          ],
        },
        opera_beam: {
          title: 'Beam Fan Hook',
          desc: 'A bronze hook hangs from the center beam, empty and thick with dust. A folding fan belongs here.',
          interactions: [
            {
              label: 'Inspect the Hook',
              desc: 'Study the shape and position of the bronze hook at the center of the beam.',
            },
          ],
        },
        opera_exit_door: {
          title: 'Side Door of the Opera House',
          desc: 'The moment the fan is hung up, a hidden mechanism in the wall snaps open and reveals the side door.',
          interactions: [
            {
              label: 'Push the Door Open',
              desc: 'Push through the opened side door and leave the opera house.',
            },
          ],
        },
        opera_attic_return: {
          title: 'Return to the Props Room',
          desc: 'Climb back down the wooden ladder to the props room.',
          interactions: [
            {
              label: 'Return to the Props Room',
              desc: 'Climb back down the ladder.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Stores the items collected from around the opera house.',
        },
        opera_fan_frame: {
          title: 'Bare Fan Frame',
          desc: 'A well-crafted Xiangfei bamboo frame, but without a leaf it cannot be opened and used.',
        },
        opera_fan_cloth: {
          title: 'Fan Cloth',
          desc: 'A full fan leaf taken from the stage chest, still bright in color and a perfect fit for the frame.',
        },
        opera_complete_fan: {
          title: 'Folding Fan',
          desc: 'The frame and leaf have become one again. Opened fully, the painted image is vivid — this is the fan that held the theater in check for a hundred years.',
        },
        opera_costume_piece: {
          title: 'Costume Fragment',
          desc: 'A remnant of stage costume taken from beneath the floorboards, still carrying the embroidery of some long-forgotten role.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '戏班后台',
    desc: '脸谱、鼓点、折扇——三条线索串起整座戏楼的秘密。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 化妆间场景 ────────────────────────────────────────
      {
        id: 'backstage_scene',
        title: '化妆间',
        desc: '三面妆镜、一只妆盒，脸谱密码就藏在这里。',
        type: 'text',
        sceneClue: '*backstage',
        scenes: ['*backstage'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'opera_mirror_left',
            title: '左侧妆镜',
            desc: '镜中映出半张脸谱，红色部分清晰地写着一个数字"七"。',
            type: 'text',
            scenes: ['*backstage'],
            layout: { direction: 220, distance: 150 },
            interactions: [
              {
                label: '细看左镜',
                desc: '凑近镜面，辨认脸谱上的数字。',
                when: '!#opera_hint_red',
                addClues: ['#opera_hint_red'],
              },
            ],
            doneClue: '#opera_hint_red',
          },
          {
            id: 'opera_mirror_center',
            title: '中央妆镜',
            desc: '镜面有一道斜裂缝。透过裂缝的折射，能看到脸谱绿色部分写着"三"。',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#opera_hint_red',
            layout: { direction: 260, distance: 150 },
            interactions: [
              {
                label: '透过裂缝看',
                desc: '侧身利用裂缝的折射角度观察。',
                when: '!#opera_hint_green',
                addClues: ['#opera_hint_green'],
              },
            ],
            doneClue: '#opera_hint_green',
          },
          {
            id: 'opera_mirror_right',
            title: '右侧妆镜',
            desc: '最右侧的镜子蒙着一块旧布，不知遮掩了多少年。揭开后，脸谱蓝色部分写着"一"。',
            type: 'text',
            scenes: ['*backstage'],
            layout: { direction: 300, distance: 150 },
            preClue: '#opera_hint_red',
            interactions: [
              {
                label: '揭开旧布',
                desc: '扯下遮布，露出镜中的脸谱。',
                when: '!#opera_hint_blue',
                addClues: ['#opera_hint_blue'],
              },
            ],
            doneClue: '#opera_hint_blue',
          },
          {
            id: 'opera_makeup_box',
            title: '妆盒',
            desc: '妆盒底层有一张折叠的纸条，夹在颜料管之间：赤七绿三蓝一，上下拼合。',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#opera_hint_green',
            layout: { direction: 340, distance: 150 },
            interactions: [
              {
                label: '翻看妆盒',
                desc: '翻出压在底层的纸条。',
                when: '!#opera_makeup_note',
                addClues: ['#opera_makeup_note'],
              },
            ],
            doneClue: '#opera_makeup_note',
          },
          {
            id: 'opera_dressing_room_door',
            title: '前往舞台',
            desc: '化妆间侧门通往后台舞台区域。',
            type: 'text',
            scenes: ['*backstage'],
            layout: { direction: 160, distance: 160 },
            preClue: ['AND', '#opera_hint_red', '#opera_hint_green', '#opera_hint_blue'],
            interactions: [
              {
                label: '走向舞台',
                desc: '穿过侧门进入舞台区。',
                addClues: ['*stage', '-*backstage'],
              },
            ],
          },
          {
            id: 'opera_props_door',
            title: '前往道具房',
            desc: '化妆间另一侧的小门直通道具房。',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#opera_makeup_note',
            layout: { direction: 200, distance: 160 },
            interactions: [
              {
                label: '进入道具房',
                desc: '推开小门进入道具房。',
                addClues: ['*props_room', '-*backstage'],
              },
            ],
          },
        ],
      },

      // ── 舞台场景 ──────────────────────────────────────────
      {
        id: 'stage_scene',
        title: '舞台',
        desc: '大幕低垂。鼓架、宝箱和活板藏在台上，等待识破。',
        type: 'text',
        sceneClue: '*stage',
        scenes: ['*stage'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'opera_drum_lock',
            title: '鼓点机关',
            desc: '鼓架上挂着五面鼓，侧面各刻符号：●◐○◑◉。台中铭文："急促—舒缓—共鸣—半声—沉默，依此敲击。"按顺序对应：●=急促，○=舒缓，◉=共鸣，◐=半声，◑=沉默。',
            type: 'click-sort',
            scenes: ['*stage'],
            layout: { direction: 310, distance: 150 },
            sortSymbols: ['●', '◐', '○', '◑', '◉'],
            sortSolution: [0, 2, 4, 1, 3],
            successClues: ['#opera_drum_solved'],
            doneClue: '#opera_drum_solved',
            interactions: [
              {
                label: '敲击鼓面',
                desc: '按铭文给出的顺序排列五面鼓的敲击顺序。',
              },
            ],
          },
          {
            id: 'opera_stage_lock',
            title: '戏台宝箱',
            desc: '老旧宝箱上有三位密码锁。脸谱三色各对应一个数字，上面的两色在上，下面的一色在下，从上到下拼出密码。',
            type: 'password',
            scenes: ['*stage'],
            layout: { direction: 340, distance: 150 },
            preClue: ['AND', '#opera_makeup_note', '#opera_hint_blue'],
            code: '731',
            successClues: ['#opera_fan_cloth_found', '#opera_chest_opened'],
            doneClue: '#opera_chest_opened',
            interactions: [
              {
                label: '拨动密码盘',
                desc: '输入三位数字，赤七绿三蓝一，上下拼合。',
              },
            ],
          },
          {
            id: 'opera_stage_floor',
            title: '舞台活板',
            desc: '台中央那块地板一直有轻微松动，鼓声共鸣后更加明显。',
            type: 'switch',
            scenes: ['*stage'],
            layout: { direction: 30, distance: 150 },
            preClue: '#opera_drum_solved',
            doneClue: '#opera_floor_opened',
            interactions: [
              {
                label: '踩下活板',
                desc: '用力踩下松动的地板，听机括弹动的声音。',
                when: '!#opera_floor_opened',
                addClues: ['#opera_floor_opened'],
              },
            ],
          },
          {
            id: 'opera_under_stage',
            title: '地板夹层',
            desc: '活板翻开后，夹层里有一件破损的戏服和一块布料碎片，已经压了不知多少年。',
            type: 'text',
            scenes: ['*stage'],
            layout: { direction: 60, distance: 150 },
            preClue: '#opera_floor_opened',
            interactions: [
              {
                label: '取出夹层物品',
                desc: '将戏服碎片从夹层中取出。',
                when: '!#has_costume_piece',
                addClues: ['#has_costume_piece'],
              },
            ],
            doneClue: '#has_costume_piece',
          },
          {
            id: 'opera_stage_to_props',
            title: '前往道具房',
            desc: '舞台侧幕后有条通道连接道具房。',
            type: 'text',
            scenes: ['*stage'],
            preClue: '#opera_drum_solved',
            layout: { direction: 90, distance: 160 },
            interactions: [
              {
                label: '进入道具房',
                desc: '穿过侧幕进入道具房。',
                addClues: ['*props_room', '-*stage'],
              },
            ],
          },
          {
            id: 'opera_stage_return',
            title: '返回化妆间',
            desc: '从舞台退回后台化妆间。',
            type: 'text',
            scenes: ['*stage'],
            preClue: '#opera_drum_solved',
            layout: { direction: 200, distance: 160 },
            interactions: [
              {
                label: '返回化妆间',
                desc: '退回化妆间。',
                addClues: ['*backstage', '-*stage'],
              },
            ],
          },
        ],
      },

      // ── 道具房场景 ────────────────────────────────────────
      {
        id: 'props_room_scene',
        title: '道具房',
        desc: '满架刀枪落灰，扇架上挂着一只没有扇面的空骨扇。',
        type: 'text',
        sceneClue: '*props_room',
        scenes: ['*props_room'],
        layout: { direction: 270, distance: 140 },
        children: [
          {
            id: 'opera_fan_rack',
            title: '扇架',
            desc: '扇架上空空如也，只剩一只骨架完整却没有扇面的空骨扇，扇骨是上好的湘妃竹。',
            type: 'text',
            scenes: ['*props_room'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '取走骨扇',
                desc: '将空骨扇从扇架上取下收入背包。',
                when: '!#has_fan_frame',
                addClues: ['#has_fan_frame'],
              },
            ],
            doneClue: '#has_fan_frame',
          },
          {
            id: 'opera_costume_chest',
            title: '戏服箱',
            desc: '大箱盖着，旁边钉着一张便条：骨扇配扇面，完整方能成器。',
            type: 'text',
            scenes: ['*props_room'],
            layout: { direction: 330, distance: 150 },
            preClue: '#opera_chest_opened',
            interactions: [
              {
                label: '翻看戏服箱',
                desc: '查看箱旁的便条，确认道具搭配提示。',
                when: '!#opera_costume_note',
                addClues: ['#opera_costume_note'],
              },
            ],
            doneClue: '#opera_costume_note',
          },
          {
            id: 'opera_prop_note',
            title: '旧道具单',
            desc: '一张泛黄的道具清单钉在墙上，最后一行写着："折扇悬于顶梁，压镇戏楼百年。"',
            type: 'text',
            scenes: ['*props_room'],
            preClue: '#has_fan_frame',
            layout: { direction: 30, distance: 150 },
            interactions: [
              {
                label: '阅读道具单',
                desc: '逐行看完这张旧道具单。',
                when: '!#opera_prop_hint',
                addClues: ['#opera_prop_hint'],
              },
            ],
            doneClue: '#opera_prop_hint',
          },
          {
            id: 'opera_props_to_stage',
            title: '前往舞台',
            desc: '道具房侧门通回舞台区域。',
            type: 'text',
            scenes: ['*props_room'],
            preClue: '#opera_prop_hint',
            layout: { direction: 160, distance: 160 },
            interactions: [
              {
                label: '进入舞台',
                desc: '穿过侧门回到舞台。',
                addClues: ['*stage', '-*props_room'],
              },
            ],
          },
          {
            id: 'opera_props_to_attic',
            title: '前往戏楼顶',
            desc: '道具房角落有一架木梯通往戏楼顶部横梁区。',
            type: 'text',
            scenes: ['*props_room'],
            layout: { direction: 200, distance: 160 },
            preClue: '#opera_fan_ready',
            interactions: [
              {
                label: '攀上戏楼顶',
                desc: '带着折扇顺木梯爬上戏楼顶。',
                addClues: ['*attic', '-*props_room'],
              },
            ],
          },
        ],
      },

      // ── 戏楼顶场景 ────────────────────────────────────────
      {
        id: 'attic_scene',
        title: '戏楼顶',
        desc: '古旧横梁、题字和那个等了百年的扇钩。',
        type: 'text',
        sceneClue: '*attic',
        scenes: ['*attic'],
        layout: { direction: 90, distance: 260 },
        children: [
          {
            id: 'opera_attic_note',
            title: '梁上题字',
            desc: '横梁侧面刻着一行小字："扇镇百年，今日移扇，戏楼自开。"墨迹深沉，当年刻下时想必用了不少力气。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 330, distance: 150 },
            interactions: [
              {
                label: '抬头看题字',
                desc: '仰头辨认横梁上的刻字。',
                when: '!#opera_attic_hint',
                addClues: ['#opera_attic_hint'],
              },
            ],
            doneClue: '#opera_attic_hint',
          },
          {
            id: 'opera_beam',
            title: '横梁扇钩',
            desc: '横梁正中央有一个铜制扇钩，空悬着，积了厚厚的尘。此处需要挂上折扇。',
            type: 'switch',
            scenes: ['*attic'],
            layout: { direction: 300, distance: 150 },
            preClue: '#opera_fan_ready',
            doneClue: '#opera_fan_hung',
            interactions: [
              {
                label: '观察扇钩',
                desc: '看清横梁中央铜钩的形状与位置。',
                when: '!#opera_fan_hung',
                addClues: [],
              },
            ],
          },
          {
            id: 'opera_exit_door',
            title: '戏楼侧门',
            desc: '折扇一挂上，隐藏在侧墙里的机括自动弹开，侧门就此打开。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 240, distance: 160 },
            preClue: '#opera_fan_hung',
            interactions: [
              {
                label: '推门出去',
                desc: '推开弹开的侧门，走出戏楼。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'opera_attic_return',
            title: '返回道具房',
            desc: '顺木梯退回道具房。',
            type: 'text',
            scenes: ['*attic'],
            preClue: '#opera_attic_hint',
            layout: { direction: 200, distance: 160 },
            interactions: [
              {
                label: '返回道具房',
                desc: '沿木梯下去回到道具房。',
                addClues: ['*props_room', '-*attic'],
              },
            ],
          },
        ],
      },

      // ── 背包 ──────────────────────────────────────────────
      {
        id: 'backpack',
        title: '背包',
        desc: '收纳从戏楼各处取得的道具。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'opera_fan_frame',
            title: '空骨扇',
            desc: '湘妃竹骨架，打磨精良，唯独没有扇面，无法展开使用。',
            type: 'item',
            preClue: ['AND', '#has_fan_frame', '!#opera_fan_ready'],
            combineWith: [
              {
                targetId: 'opera_fan_cloth',
                addClues: ['#opera_fan_ready'],
              },
            ],
          },
          {
            id: 'opera_fan_cloth',
            title: '扇面布料',
            desc: '从戏台宝箱取出的整块扇面布料，色泽依旧鲜亮，与骨扇尺寸完全吻合。',
            type: 'item',
            preClue: ['AND', '#opera_fan_cloth_found', '!#opera_fan_ready'],
            combineWith: [
              {
                targetId: 'opera_fan_frame',
                addClues: ['#opera_fan_ready'],
              },
            ],
          },
          {
            id: 'opera_complete_fan',
            title: '折扇',
            desc: '骨扇与扇面合为一体，展开后画面栩栩如生。这就是压镇戏楼百年的那把扇。',
            type: 'item',
            preClue: '#opera_fan_ready',
            itemUse: {
              targetIds: ['opera_beam'],
              addClues: ['#opera_fan_hung'],
            },
          },
          {
            id: 'opera_costume_piece',
            title: '戏服碎片',
            desc: '从舞台夹层取出的戏服残片，绣纹依稀可辨，是某个角色的行头残余。',
            type: 'item',
            preClue: '#has_costume_piece',
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
        '#opera_hint_red',
        '#opera_hint_green',
        '#opera_hint_blue',
        '#opera_makeup_note',
        '#opera_drum_solved',
        '#opera_floor_opened',
        '#opera_prop_hint',
        '#opera_attic_hint',
        '#has_costume_piece',
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
