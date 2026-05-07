import type { Mission } from '../../core/types'

export const trapsMission: Mission = {
  id: 'traps',
  title: '盗墓·活陷阱',
  subtitle: '汉代机关墓，踩错一步就会被迫重走',
  intro: '汉墓地宫没有冤魂，只有被做成活口的机关。你已经看见两具盗墓贼的骨架，其中一具手里还死死攥着半截铜钩。',
  timeLimitMs: 90 * 60 * 1000,
  initialClues: ['*passage'],
  bgmScenes: {
    '*passage': '/audio/bgm/corridor.mp3',
    '*trap_gallery': '/audio/bgm/tomb2.mp3',
    '*relay_room': '/audio/bgm/chamber.mp3',
    '*exit_tunnel': '/audio/bgm/tomb3.mp3',
  },
  clueMessages: {
    '*passage': '— 前墓道 — 地砖松紧不一，脚下的灰尘薄得不自然。',
    '*trap_gallery': '— 陷阱廊 — 两侧箭孔黑洞洞地张着，墙里像有东西在等你犯错。',
    '*relay_room': '— 机括室 — 铜轮、配重与锁链彼此咬合，像一具还活着的骨架。',
    '*exit_tunnel': '— 出口甬道 — 墓风终于有了向外吹的方向。',
    '#traps_bones_checked': '骨架旁的地面密密麻麻，全是被箭头凿出的白点。',
    '#traps_hook_found': '半截铜钩被你掰了下来，钩尖还算结实。',
    '#traps_dust_read': '你看清了地砖的差别：有尘的是实砖，过净的是压板。',
    '#traps_arrow_counted': '你数清了箭槽分布：左壁五孔、右壁七孔，近口稀、深处密，机关显然故意逼人走中线。',
    '#traps_bricks_marked': '安全落脚点已经记住：左二、右一、左三。',
    '#trap_reset': '脚下猛地一沉，箭槽连响。你狼狈退回原处，只能重新推一遍进度。',
    '#trap_gallery_crossed': '你踩着记住的三块实砖穿过了箭廊。',
    '#weight_pattern_found': '壁龛刻着四个篆字：轻、重、轻、重。',
    '#rope_found': '骨架腰间的麻绳还没完全朽烂，勉强能用。',
    '#hook_rope_ready': '铜钩绑上麻绳，变成了一根够长的探路钩绳。',
    '#axe_head_found': '墙缝里卡着一枚青铜斧头，像是配重机关断下来的部件。',
    '#relay_sequence_seen': '铜轮边缘刻着顺序：提链、挂钩、压轮、退锁。',
    '#counterweight_released': '你用钩绳拉开高处插销，第一道配重终于落下。',
    '#relay_wedge_reset': '你抢先松手，配重弹回原位，幸亏这次没有整段回退。',
    '#relay_wheel_fixed': '斧头卡进缺口后，铜轮终于能稳稳压住锁齿。',
    '#relay_door_opened': '锁链连响三次，机括室尽头的石门滑开了。',
    '#fake_exit_noted': '地上那具新骨架证实了一件事：左侧亮口是假的。',
    '#wind_hint_found': '火折子的余烬朝右侧飘，真正的气流从那边来。',
    '#stone_key_found': '壁缝里藏着一枚燕尾石钥，表面磨得发亮。',
    '#final_slot_seen': '右侧石门的锁缝是燕尾形，和石钥正好相配。',
    '#final_door_opened': '石钥插到底后，封门内部的横栓一节节退开。',
  },
  translations: {
    en: {
      title: 'Buried Traps',
      subtitle: 'A Han-era tomb of mechanisms that force you to try again',
      intro: 'This Han tomb has no ghosts, only traps made alive. You have already found two raider skeletons, and one of them is still clutching a half bronze hook.',
      clueMessages: {
        '*passage': '— Front Passage — The floor bricks sit unevenly, and the dust underfoot is unnaturally thin.',
        '*trap_gallery': '— Trap Gallery — Arrow slots gape dark on both sides, as if something in the walls is waiting for you to slip up.',
        '*relay_room': '— Mechanism Room — Bronze wheels, counterweights, and chains interlock like a skeleton that is still alive.',
        '*exit_tunnel': '— Exit Tunnel — The tomb wind finally has a way out.',
        '#traps_bones_checked': 'The ground around the bones is packed with tiny white pits made by arrowheads.',
        '#traps_hook_found': 'You pry off half a bronze hook; the tip is still solid.',
        '#traps_dust_read': 'You can tell the bricks apart now: dusty ones are solid, polished ones are pressure plates.',
        '#traps_arrow_counted': 'You count the arrow slots: five on the left wall, seven on the right. Sparse near the entrance, dense deeper in, clearly meant to force people down the center line.',
        '#traps_bricks_marked': 'The safe steps are memorized: left two, right one, left three.',
        '#trap_reset': 'The floor sinks hard and the arrow slots rattle. You stumble back to where you started and have to rebuild your progress.',
        '#trap_gallery_crossed': 'You cross the arrow gallery by stepping only on the three remembered solid bricks.',
        '#weight_pattern_found': 'Four seal-script characters are carved into the niche: light, heavy, light, heavy.',
        '#rope_found': 'The rope at the skeleton\'s waist has not fully rotted; it can still be used.',
        '#hook_rope_ready': 'The bronze hook is tied to the rope, becoming a long grappling line.',
        '#axe_head_found': 'A bronze axe head is jammed in the wall crack, as if torn off from the counterweight mechanism.',
        '#relay_sequence_seen': 'The bronze wheel is engraved with the order: lift chain, hang hook, press wheel, release lock.',
        '#counterweight_released': 'You pull the high pin free with the grappling line, and the first counterweight finally drops.',
        '#relay_wedge_reset': 'You let go too soon; the counterweight snaps back into place, but at least this time the whole room does not roll back.',
        '#relay_wheel_fixed': 'Once the axe head wedges into the gap, the bronze wheel finally holds the lock teeth steady.',
        '#relay_door_opened': 'The chains clang three times, and the stone door at the end of the mechanism room slides open.',
        '#fake_exit_noted': 'The fresh skeleton on the floor proves one thing: the bright opening on the left is fake.',
        '#wind_hint_found': 'The ember from the fire starter drifts to the right; the real airflow comes from there.',
        '#stone_key_found': 'A dovetail stone key is hidden in the wall crack, its surface polished bright.',
        '#final_slot_seen': 'The lock slot on the right-hand stone door is dovetail-shaped, a perfect match for the stone key.',
        '#final_door_opened': 'After the stone key goes all the way in, the crossbars inside the seal door begin to withdraw one by one.',
      },
      nodes: {
        root: {
          title: 'Buried Traps',
          desc: 'This is not a tomb built for storytelling, but one that fights back. Learn the pattern of the living traps before you move.',
        },
        passage_scene: {
          title: 'Front Passage',
          desc: 'Two raider skeletons lie near the entrance, while the real mechanism waits deeper inside for someone to step on it.',
        },
        passage_bones: {
          title: 'Raider Skeletons',
          desc: 'One fell on its back to an arrow, the other collapsed against the wall, still gripping half a bronze hook as if it had tried to pull something down.',
          interactions: [
            {
              label: 'Inspect the Skeletons',
              desc: 'Check the cause of death and what they left behind.',
            },
          ],
        },
        passage_dust: {
          title: 'Tomb Floor',
          desc: 'The passage floor looks level, but some bricks carry dust while others are polished bright, as if something kept pressing them down.',
          interactions: [
            {
              label: 'Study the Dust',
              desc: 'Compare the dust and wear on the bricks.',
            },
          ],
        },
        passage_marks: {
          title: 'Wall Marks',
          desc: 'Three faint knife scratches remain in the brick seam along the right wall, as if someone had marked the route while moving.',
          interactions: [
            {
              label: 'Compare the Marks',
              desc: 'Match the knife marks to the dusty bricks.',
            },
          ],
        },
        passage_arrow_holes: {
          title: 'Arrow Slots',
          desc: 'The arrow slots on both walls vary in height. The deeper you go, the denser they become, clearly meant to herd the living onto a preset route.',
          interactions: [
            {
              label: 'Count the Slots',
              desc: 'Work out which row of bricks the arrow array is trying to force you onto.',
            },
          ],
        },
        passage_to_gallery: {
          title: 'Enter the Trap Gallery',
          desc: 'The narrow stone corridor ahead is lined with arrow holes. Whether you make it through depends entirely on how well you read the bricks.',
          interactions: [
            {
              label: 'Head for the Gallery',
              desc: 'Slip into the arrow-lined gallery along the wall.',
            },
          ],
        },
        trap_gallery_scene: {
          title: 'Trap Gallery',
          desc: 'The arrow slots are too dark to see into, and any pressure plate could pin you to the wall.',
        },
        gallery_floor_pattern: {
          title: 'Three Rows of Bricks',
          desc: 'The floor bricks are split into left, center, and right rows, and only three of them can bear weight. One wrong step and the whole gallery will wake instantly.',
          interactions: [
            {
              label: 'Confirm the Safe Step Pattern',
              desc: 'Check the safe brick positions one last time.',
            },
          ],
        },
        gallery_safe_crossing: {
          title: 'Wall-Hugging Steps',
          desc: 'If you step in the right order, you can slip across before the arrows fire.',
          interactions: [
            {
              label: 'Step Left Two, Right One, Left Three',
              desc: 'Cross the gallery according to the skeleton\'s marks.',
            },
          ],
        },
        gallery_wrong_step: {
          title: 'Shining Pressure Plate',
          desc: 'The brightest brick is clearly the one most often stepped on. It looks like a shortcut, but it feels designed for the impatient.',
          interactions: [
            {
              label: 'Step Straight on the Bright Patch',
              desc: 'Risk that the pressure plate has already been disabled.',
            },
          ],
        },
        gallery_to_relay: {
          title: 'Enter the Mechanism Room',
          desc: 'After the arrow gallery, a tall mechanism room opens ahead, its chains and bronze wheels still swaying slowly.',
          interactions: [
            {
              label: 'Enter the Mechanism Room',
              desc: 'Cross the last stone ledge and step into the real core of the mechanism.',
            },
          ],
        },
        gallery_back_to_passage: {
          title: 'Back to the Front Passage',
          desc: 'If you want to review the entrance clues, you can still step back first.',
          interactions: [
            {
              label: 'Return to the Front Passage',
              desc: 'Head back to the entrance area and inspect again.',
            },
          ],
        },
        relay_room_scene: {
          title: 'Mechanism Room',
          desc: 'This trap does not kill in one blow; it forces you to waste time. You have to dismantle the chain reaction first.',
        },
        relay_inscription: {
          title: 'Bronze Wheel Inscription',
          desc: 'The wheel rim is blackened with age, but the four-step order is still readable: lift chain, hang hook, press wheel, release lock.',
          interactions: [
            {
              label: 'Read the Mechanism Order',
              desc: 'Memorize the steps carved into the bronze wheel.',
            },
          ],
        },
        relay_weight_pattern: {
          title: 'Counterweight Niche',
          desc: 'A high niche is carved with the rhythm of the counterweights: light, heavy, light, heavy. Beside it is a high pin you cannot reach by hand.',
          interactions: [
            {
              label: 'Study the Counterweights',
              desc: 'Check the drop rhythm and the position of the pin.',
            },
          ],
        },
        relay_corpse_rope: {
          title: 'Mummified Corpse',
          desc: 'Another corpse hangs under the chains in the corner, with a stiff rope tied around its waist, as if it was killed outright by the counterweight snapping back.',
          interactions: [
            {
              label: 'Take the Rope',
              desc: 'Pull out the part of the rope that is still usable.',
            },
          ],
        },
        relay_loose_axe: {
          title: 'Bronze Axe Head',
          desc: 'The counterweight has smashed the wall before; a bronze axe head is wedged in the crack, with its handle gone and only the perforated head left behind.',
          interactions: [
            {
              label: 'Pull Out the Axe',
              desc: 'Take the axe head dropped by the counterweight mechanism.',
            },
          ],
        },
        relay_release_weight: {
          title: 'High Pin',
          desc: 'The pin hangs too high to reach; you need to hook something onto it first and then yank it down hard.',
        },
        relay_wrong_release: {
          title: 'Exposed Chain',
          desc: 'The chain is right there, so brute force looks easier, but easy paths are usually the dead ends the tomb owner left for thieves.',
          interactions: [
            {
              label: 'Tug the Chain Barehanded',
              desc: 'Drag the counterweight down without setting anything in place.',
            },
          ],
        },
        relay_press_wheel: {
          title: 'Broken Bronze Wheel',
          desc: 'One tooth on the bronze wheel is missing. You have to wedge something into the gap before the press-wheel and release-lock steps will work.',
        },
        relay_final_lock: {
          title: 'Stone Door at the End',
          desc: 'The last crossbar is still hanging. Only if the previous three steps are correct will the door truly unlock.',
          interactions: [
            {
              label: 'Press Down the Release Lever',
              desc: 'Finish the last step and let the whole mechanism release.',
            },
          ],
        },
        relay_to_exit: {
          title: 'Passage to the Exit Tunnel',
          desc: 'Once the stone door opens, both side tunnels show faint light, but only one really leads outside.',
          interactions: [
            {
              label: 'Enter the Exit Tunnel',
              desc: 'Cross the threshold at the end of the mechanism room.',
            },
          ],
        },
        relay_back_to_gallery: {
          title: 'Back to the Trap Gallery',
          desc: 'If you have not gathered every item yet, you can step back into the arrow gallery first.',
          interactions: [
            {
              label: 'Return to the Trap Gallery',
              desc: 'Go back along the arrow-lined stone passage.',
            },
          ],
        },
        exit_tunnel_scene: {
          title: 'Exit Tunnel',
          desc: 'This is the tomb owner\'s final split between the living and the dead. The bright opening is not always the exit, so trust the airflow instead.',
        },
        exit_false_opening: {
          title: 'Left-Hand Light',
          desc: 'The opening on the left is brighter, but a newer skeleton lies on the floor, with a broken fire starter and shattered shoulder blade beside it.',
          interactions: [
            {
              label: 'Inspect the False Exit',
              desc: 'Find out why this fresh skeleton died here.',
            },
          ],
        },
        exit_wall_slot: {
          title: 'Right-Hand Crack',
          desc: 'A dovetail crack splits the right-hand wall, with something small lodged inside that you cannot reach by hand.',
          interactions: [
            {
              label: 'Check the Lock Slot',
              desc: 'Confirm the key shape needed by the stone door.',
            },
          ],
        },
        exit_hidden_key: {
          title: 'Hidden Wall Pocket',
          desc: 'Something is hidden deep in the crack, and you will need a long enough tool to hook it out.',
          interactions: [
            {
              label: 'Hook Out the Hidden Cache',
              desc: 'Drag the hidden object out through the crack.',
            },
          ],
        },
        exit_real_door: {
          title: 'Right-Hand Sealed Door',
          desc: 'The real seal door fits together too tightly, leaving only a dovetail lock slot in the middle.',
        },
        exit_fake_push: {
          title: 'Collapsed Thin Wall',
          desc: 'The bright opening on the left is really a thin backfill wall. Crash into it and it will collapse, but only enough to bury you halfway inside.',
          interactions: [
            {
              label: 'Smash the Left-Hand Opening',
              desc: 'Bet that the light beyond it is the exit.',
            },
          ],
        },
        exit_escape: {
          title: 'Light Beyond the Tomb Gate',
          desc: 'Beyond the stone door is a narrow rising slope, and the wind no longer smells like dirt.',
          interactions: [
            {
              label: 'Climb Out of the Tomb',
              desc: 'Race up the slope and out of the underground chamber.',
            },
          ],
        },
        exit_back_to_relay: {
          title: 'Back to the Mechanism Room',
          desc: 'If the false exit and lock slot are still unclear, you can step back and sort the clues first.',
          interactions: [
            {
              label: 'Return to the Mechanism Room',
              desc: 'Head back to the previous tunnel section.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Anything you can carry has to be recombined and reused here.',
        },
        hook_fragment: {
          title: 'Half Bronze Hook',
          desc: 'The bronze hook pried from the skeleton is too short on its own, but the tip is sharp.',
        },
        old_rope: {
          title: 'Half-Rotted Rope',
          desc: 'The rope taken from the corpse\'s waist is long enough, though only moderately strong.',
        },
        hook_rope_tool: {
          title: 'Hook Rope',
          desc: 'The bronze hook tied to the rope can hang onto a high pin or fish objects out of narrow gaps.',
        },
        axe_head: {
          title: 'Bronze Axe Head',
          desc: 'It has no wooden handle, but it is thick enough to wedge into the bronze wheel gap like a shim.',
        },
        stone_key: {
          title: 'Dovetail Stone Key',
          desc: 'The stone key hooked out of the hidden wall pocket has a dovetail tail that matches the seal door exactly.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '盗墓·活陷阱',
    desc: '这不是拼故事的墓，而是会反扑的墓。先观察活陷阱的规律，再动手。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'passage_scene',
        title: '前墓道',
        desc: '两具盗墓贼的骨架倒在入口附近，真正的机关还在更深处等人踩中。',
        type: 'text',
        sceneClue: '*passage',
        scenes: ['*passage'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'passage_bones',
            title: '盗墓贼骨架',
            desc: '一具仰面中箭，另一具侧倒在墙边，手里攥着半截铜钩，死前像是想把什么东西够下来。',
            type: 'text',
            scenes: ['*passage'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '检查骨架',
                desc: '查看死因和他们临死前留下的东西。',
                when: '!#traps_bones_checked',
                addClues: ['#traps_bones_checked', '#traps_hook_found'],
              },
            ],
            doneClue: '#traps_bones_checked',
          },
          {
            id: 'passage_dust',
            title: '墓道地砖',
            desc: '墓道地面看似平整，细看却有些砖面浮着灰，有些却被磨得发亮，像总被什么东西压下去。',
            type: 'text',
            scenes: ['*passage'],
            layout: { direction: 270, distance: 150 },
            interactions: [
              {
                label: '俯身看灰',
                desc: '对比地砖表面的积灰与磨损。',
                when: '!#traps_dust_read',
                addClues: ['#traps_dust_read'],
              },
            ],
            doneClue: '#traps_dust_read',
          },
          {
            id: 'passage_marks',
            title: '墙面刻痕',
            desc: '靠右墙的砖缝上留着三道极浅的刀刻，像有人边走边偷偷做了记号。',
            type: 'text',
            scenes: ['*passage'],
            preClue: '#traps_dust_read',
            layout: { direction: 315, distance: 150 },
            interactions: [
              {
                label: '对照刻痕',
                desc: '把刀刻位置和积灰差异对应起来。',
                when: '!#traps_bricks_marked',
                addClues: ['#traps_bricks_marked'],
              },
            ],
            doneClue: '#traps_bricks_marked',
          },
          {
            id: 'passage_arrow_holes',
            title: '箭槽分布',
            desc: '两侧墙上的箭槽高低不一，越往里越密，像在驱赶活人往某条预设路线踩。',
            type: 'text',
            scenes: ['*passage'],
            preClue: '#traps_bones_checked',
            layout: { direction: 350, distance: 150 },
            interactions: [
              {
                label: '数箭槽位置',
                desc: '确认箭阵想把人逼向哪一列地砖。',
                when: '!#traps_arrow_counted',
                addClues: ['#traps_arrow_counted'],
              },
            ],
            doneClue: '#traps_arrow_counted',
          },
          {
            id: 'passage_to_gallery',
            title: '进入陷阱廊',
            desc: '前方狭长石廊两侧满是箭孔。能不能过去，全看你对地砖的判断。',
            type: 'text',
            scenes: ['*passage'],
            preClue: '#traps_bones_checked',
            layout: { direction: 25, distance: 165 },
            interactions: [
              {
                label: '走向陷阱廊',
                desc: '贴着墙进入箭孔密布的石廊。',
                addClues: ['*trap_gallery', '-*passage'],
              },
            ],
          },
        ],
      },
      {
        id: 'trap_gallery_scene',
        title: '陷阱廊',
        desc: '箭孔黑得看不见底，任何一块压板都足够把人钉在墙上。',
        type: 'text',
        sceneClue: '*trap_gallery',
        scenes: ['*trap_gallery'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'gallery_floor_pattern',
            title: '三列地砖',
            desc: '地砖分成左中右三列，只有其中三块能承重。记错一步，整条箭廊都会立刻活过来。',
            type: 'text',
            scenes: ['*trap_gallery'],
            layout: { direction: 290, distance: 150 },
            interactions: [
              {
                label: '确认落脚顺序',
                desc: '最后再核对一遍安全砖位。',
                when: '!#traps_bricks_marked',
                addClues: ['#traps_bricks_marked'],
              },
            ],
            doneClue: '#traps_bricks_marked',
          },
          {
            id: 'gallery_safe_crossing',
            title: '贴墙跃步',
            desc: '按正确顺序落脚，就能从箭孔齐发前钻到对面。',
            type: 'switch',
            scenes: ['*trap_gallery'],
            preClue: '#traps_bricks_marked',
            layout: { direction: 330, distance: 150 },
            doneClue: '#trap_gallery_crossed',
            interactions: [
              {
                label: '踩左二、右一、左三',
                desc: '依照骨架留下的记号穿过箭廊。',
                when: '!#trap_gallery_crossed',
                addClues: ['#trap_gallery_crossed'],
              },
            ],
          },
          {
            id: 'gallery_wrong_step',
            title: '发亮压板',
            desc: '最亮的那块砖明显常被踩中。它看起来像近路，其实像是专门留给急性子的一步。',
            type: 'switch',
            scenes: ['*trap_gallery'],
            layout: { direction: 250, distance: 150 },
            doneClue: '#trap_reset',
            interactions: [
              {
                label: '直接踩中间近路',
                desc: '赌一把压板已经失效。',
                when: ['AND', '!#trap_gallery_crossed', '!#trap_reset'],
                addClues: ['#trap_reset'],
              },
            ],
          },
          {
            id: 'gallery_to_relay',
            title: '进入机括室',
            desc: '穿过箭廊后，前方是一间高挑的机括室，锁链和铜轮仍在缓缓晃动。',
            type: 'text',
            scenes: ['*trap_gallery'],
            preClue: '#trap_gallery_crossed',
            layout: { direction: 30, distance: 160 },
            interactions: [
              {
                label: '进入机括室',
                desc: '跨过最后一段石坎，走进真正的机关核心。',
                addClues: ['*relay_room', '-*trap_gallery'],
              },
            ],
          },
          {
            id: 'gallery_back_to_passage',
            title: '退回前墓道',
            desc: '想补看入口线索，还可以先退回去。',
            type: 'text',
            scenes: ['*trap_gallery'],
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '返回前墓道',
                desc: '退回入口附近重新观察。',
                addClues: ['*passage', '-*trap_gallery'],
              },
            ],
          },
        ],
      },
      {
        id: 'relay_room_scene',
        title: '机括室',
        desc: '这里的陷阱不是一下杀人，而是让你前面白走。你得先拆掉它的连锁反应。',
        type: 'text',
        sceneClue: '*relay_room',
        scenes: ['*relay_room'],
        layout: { direction: 0, distance: 280 },
        children: [
          {
            id: 'relay_inscription',
            title: '铜轮铭刻',
            desc: '铜轮边缘的刻痕已经发黑，但还能辨出四道操作顺序：提链、挂钩、压轮、退锁。',
            type: 'text',
            scenes: ['*relay_room'],
            layout: { direction: 290, distance: 150 },
            interactions: [
              {
                label: '读操作顺序',
                desc: '把铜轮上写死的步骤记下来。',
                when: '!#relay_sequence_seen',
                addClues: ['#relay_sequence_seen'],
              },
            ],
            doneClue: '#relay_sequence_seen',
          },
          {
            id: 'relay_weight_pattern',
            title: '壁龛配重图',
            desc: '高处壁龛刻着配重节奏：轻、重、轻、重。旁边有一根高位插销，徒手够不到。',
            type: 'text',
            scenes: ['*relay_room'],
            layout: { direction: 330, distance: 150 },
            interactions: [
              {
                label: '观察配重',
                desc: '确认配重落下时的节奏和插销位置。',
                when: '!#weight_pattern_found',
                addClues: ['#weight_pattern_found'],
              },
            ],
            doneClue: '#weight_pattern_found',
          },
          {
            id: 'relay_corpse_rope',
            title: '墙角干尸',
            desc: '墙角还有一具挂在锁链下方的干尸，腰间系着一截发硬的麻绳，像是被回弹的配重直接抽死的。',
            type: 'text',
            scenes: ['*relay_room'],
            layout: { direction: 250, distance: 150 },
            interactions: [
              {
                label: '取下麻绳',
                desc: '把还能用的那段麻绳抽出来。',
                when: '!#rope_found',
                addClues: ['#rope_found'],
              },
            ],
            doneClue: '#rope_found',
          },
          {
            id: 'relay_loose_axe',
            title: '墙缝青铜斧',
            desc: '配重曾撞裂过墙面，一枚青铜斧头卡在裂缝里，柄已经没了，只剩带孔的斧头本体。',
            type: 'text',
            scenes: ['*relay_room'],
            preClue: '#counterweight_released',
            layout: { direction: 30, distance: 150 },
            interactions: [
              {
                label: '拔出斧头',
                desc: '把这枚配重机关掉出来的斧头取走。',
                when: '!#axe_head_found',
                addClues: ['#axe_head_found'],
              },
            ],
            doneClue: '#axe_head_found',
          },
          {
            id: 'relay_release_weight',
            title: '高位插销',
            desc: '插销挂在高处，只能先把东西挂上去再猛拽下来。',
            type: 'switch',
            scenes: ['*relay_room'],
            preClue: ['AND', '#relay_sequence_seen', '#weight_pattern_found'],
            layout: { direction: 350, distance: 170 },
            doneClue: '#counterweight_released',
          },
          {
            id: 'relay_wrong_release',
            title: '裸露锁链',
            desc: '锁链就在眼前，直接硬拽当然更省事，但省事的路通常也是墓主人留给盗墓贼的死路。',
            type: 'switch',
            scenes: ['*relay_room'],
            layout: { direction: 210, distance: 150 },
            doneClue: '#relay_wedge_reset',
            interactions: [
              {
                label: '徒手猛拽锁链',
                desc: '不做固定，强行把配重拉下来。',
                when: ['AND', '!#counterweight_released', '!#relay_wedge_reset'],
                addClues: ['#relay_wedge_reset'],
              },
            ],
          },
          {
            id: 'relay_press_wheel',
            title: '缺口铜轮',
            desc: '铜轮锁齿缺了一角，必须先用硬物卡住缺口，才能完成“压轮、退锁”两步。',
            type: 'switch',
            scenes: ['*relay_room'],
            preClue: '#counterweight_released',
            layout: { direction: 60, distance: 170 },
            doneClue: '#relay_wheel_fixed',
          },
          {
            id: 'relay_final_lock',
            title: '尽头石门',
            desc: '最后一节横锁仍挂着。只有前面三步全对，门才会真正退开。',
            type: 'switch',
            scenes: ['*relay_room'],
            preClue: '#relay_wheel_fixed',
            layout: { direction: 20, distance: 210 },
            doneClue: '#relay_door_opened',
            interactions: [
              {
                label: '推下退锁杆',
                desc: '完成最后一步，让整套机括退锁。',
                when: '!#relay_door_opened',
                addClues: ['#relay_door_opened'],
              },
            ],
          },
          {
            id: 'relay_to_exit',
            title: '通往出口甬道',
            desc: '石门退开后，左右两条甬道都能看见微弱亮光，但只有一条真通向外面。',
            type: 'text',
            scenes: ['*relay_room'],
            preClue: '#relay_door_opened',
            layout: { direction: 90, distance: 180 },
            interactions: [
              {
                label: '进入出口甬道',
                desc: '跨过机括室尽头的门槛。',
                addClues: ['*exit_tunnel', '-*relay_room'],
              },
            ],
          },
          {
            id: 'relay_back_to_gallery',
            title: '退回陷阱廊',
            desc: '如果道具还没拿齐，可以先退回箭廊。',
            type: 'text',
            scenes: ['*relay_room'],
            layout: { direction: 170, distance: 180 },
            interactions: [
              {
                label: '返回陷阱廊',
                desc: '沿原路退回箭孔石廊。',
                addClues: ['*trap_gallery', '-*relay_room'],
              },
            ],
          },
        ],
      },
      {
        id: 'exit_tunnel_scene',
        title: '出口甬道',
        desc: '这里是墓主留给活人和死人分道的最后一手。亮处未必是出口，风向才不会撒谎。',
        type: 'text',
        sceneClue: '*exit_tunnel',
        scenes: ['*exit_tunnel'],
        layout: { direction: 90, distance: 280 },
        children: [
          {
            id: 'exit_false_opening',
            title: '左侧亮口',
            desc: '左侧洞口更亮，地上却躺着一具较新的骨架，脚边散着断裂火折子和被砸碎的肩胛。',
            type: 'text',
            scenes: ['*exit_tunnel'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '查看假出口',
                desc: '弄清这具新骨架为什么会死在这里。',
                when: '!#fake_exit_noted',
                addClues: ['#fake_exit_noted', '#wind_hint_found'],
              },
            ],
            doneClue: '#fake_exit_noted',
          },
          {
            id: 'exit_wall_slot',
            title: '右侧壁缝',
            desc: '右侧石壁裂开一道燕尾缝，里面像嵌着什么小东西，手伸不进去。',
            type: 'text',
            scenes: ['*exit_tunnel'],
            layout: { direction: 340, distance: 150 },
            interactions: [
              {
                label: '看锁缝形状',
                desc: '确认石门锁缝需要的钥匙规格。',
                when: '!#final_slot_seen',
                addClues: ['#final_slot_seen'],
              },
            ],
            doneClue: '#final_slot_seen',
          },
          {
            id: 'exit_hidden_key',
            title: '壁缝暗格',
            desc: '壁缝深处藏着东西，必须用够长的器具才能勾出来。',
            type: 'switch',
            scenes: ['*exit_tunnel'],
            preClue: '#wind_hint_found',
            layout: { direction: 20, distance: 160 },
            doneClue: '#stone_key_found',
            interactions: [
              {
                label: '用钩绳勾暗格',
                desc: '顺着缝隙把藏物拖出来。',
                when: ['AND', '#hook_rope_ready', '!#stone_key_found'],
                addClues: ['#stone_key_found'],
              },
            ],
          },
          {
            id: 'exit_real_door',
            title: '右侧封门',
            desc: '真正的封门严丝合缝，只在中部留了一道燕尾锁缝。',
            type: 'switch',
            scenes: ['*exit_tunnel'],
            preClue: '#final_slot_seen',
            layout: { direction: 60, distance: 170 },
            doneClue: '#final_door_opened',
          },
          {
            id: 'exit_fake_push',
            title: '坍塌薄壁',
            desc: '左侧亮口后其实是一段薄薄的回填土，一撞就塌，但塌下来只会把人埋死在半截洞里。',
            type: 'switch',
            scenes: ['*exit_tunnel'],
            layout: { direction: 250, distance: 150 },
            doneClue: '#trap_reset',
            interactions: [
              {
                label: '撞开左侧亮口',
                desc: '赌亮光后面就是出口。',
                when: ['AND', '!#final_door_opened', '!#trap_reset', '!#fake_exit_noted'],
                addClues: ['#trap_reset'],
              },
            ],
          },
          {
            id: 'exit_escape',
            title: '墓门外的天光',
            desc: '石门后是向上的狭窄坡道，风里终于没有土腥味了。',
            type: 'text',
            scenes: ['*exit_tunnel'],
            preClue: '#final_door_opened',
            layout: { direction: 110, distance: 190 },
            interactions: [
              {
                label: '爬出墓门',
                desc: '顺着坡道冲出地宫。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'exit_back_to_relay',
            title: '返回机括室',
            desc: '如果还没把假出口和锁缝看明白，可以先退回去整理线索。',
            type: 'text',
            scenes: ['*exit_tunnel'],
            layout: { direction: 180, distance: 170 },
            interactions: [
              {
                label: '返回机括室',
                desc: '退回上一段甬道。',
                addClues: ['*relay_room', '-*exit_tunnel'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '能带走的东西都得在这里重新组合、重复利用。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'hook_fragment',
            title: '半截铜钩',
            desc: '从骨架手里掰下来的铜钩，单独太短，但钩尖够利。',
            type: 'item',
            preClue: ['AND', '#traps_hook_found', '!#hook_rope_ready'],
            combineWith: [
              {
                targetId: 'old_rope',
                addClues: ['#hook_rope_ready'],
              },
            ],
          },
          {
            id: 'old_rope',
            title: '半朽麻绳',
            desc: '从干尸腰间抽下来的麻绳，长度够，强度一般。',
            type: 'item',
            preClue: ['AND', '#rope_found', '!#hook_rope_ready'],
            combineWith: [
              {
                targetId: 'hook_fragment',
                addClues: ['#hook_rope_ready'],
              },
            ],
          },
          {
            id: 'hook_rope_tool',
            title: '钩绳',
            desc: '铜钩绑着麻绳，既能挂高处插销，也能从窄缝里勾东西。',
            type: 'item',
            preClue: '#hook_rope_ready',
            itemUse: {
              targetIds: ['relay_release_weight'],
              addClues: ['#counterweight_released'],
            },
          },
          {
            id: 'axe_head',
            title: '青铜斧头',
            desc: '没有木柄，但形制够厚，正好能卡进铜轮缺口当楔子。',
            type: 'item',
            preClue: '#axe_head_found',
            itemUse: {
              targetIds: ['relay_press_wheel'],
              addClues: ['#relay_wheel_fixed'],
            },
          },
          {
            id: 'stone_key',
            title: '燕尾石钥',
            desc: '从壁缝暗格里勾出来的石钥，尾部正是燕尾形。',
            type: 'item',
            preClue: '#stone_key_found',
            itemUse: {
              targetIds: ['exit_real_door'],
              addClues: ['#final_door_opened'],
            },
          },
        ],
      },
    ],
  },
  triggers: [
    {
      id: 'gallery_reset',
      when: '#trap_reset',
      addClues: [
        '*passage',
        '-*trap_gallery',
        '-*relay_room',
        '-*exit_tunnel',
        '-#trap_reset',
        '-#trap_gallery_crossed',
        '-#weight_pattern_found',
        '-#rope_found',
        '-#hook_rope_ready',
        '-#axe_head_found',
        '-#relay_sequence_seen',
        '-#counterweight_released',
        '-#relay_wedge_reset',
        '-#relay_wheel_fixed',
        '-#relay_door_opened',
        '-#fake_exit_noted',
        '-#wind_hint_found',
        '-#stone_key_found',
        '-#final_slot_seen',
        '-#final_door_opened',
      ],
    },
    {
      id: 'perfect_escape',
      when: [
        'AND',
        '@escape',
        '#traps_bones_checked',
        '#traps_dust_read',
        '#traps_arrow_counted',
        '#traps_bricks_marked',
        '#trap_gallery_crossed',
        '#weight_pattern_found',
        '#relay_sequence_seen',
        '#counterweight_released',
        '#relay_wheel_fixed',
        '#fake_exit_noted',
        '#wind_hint_found',
        '#stone_key_found',
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
