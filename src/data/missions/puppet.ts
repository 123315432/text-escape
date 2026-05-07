import type { Mission } from '../../core/types'

export const puppetMission: Mission = {
  id: 'puppet',
  title: '傀儡戏台',
  subtitle: '清代戏班·操控杆·三幕循环',
  intro:
    '封班后的清代戏楼里，空席上还留着压痕，后台木偶却在自己转头。失传剧目《傀儡师之梦》只差最后一晚：你得把三幕按旧规演完，戏台才肯把出口还给活人。',
  timeLimitMs: 75 * 60 * 1000,
  initialClues: ['*audience'],
  bgmScenes: {
    '*audience': '/audio/bgm/opera2.mp3',
    '*backstage': '/audio/bgm/opera1.mp3',
    '*understage': '/audio/bgm/chamber.mp3',
    '*flyloft': '/audio/bgm/hall.mp3',
  },
  clueMessages: {
    '*audience': '— 戏台前席 — 幕布半垂，空椅上却像刚刚坐满了人。',
    '*backstage': '— 后台 — 木偶箱、戏衣与油彩味全都还没散。',
    '*understage': '— 台底机括层 — 齿轮与绳轮像在木板下缓慢呼吸。',
    '*flyloft': '— 吊杆层 — 头顶尽是绳索与横梁，任何一步都像踩在旧戏的喉咙上。',
    '#seat_code_seen': '前三排座签给出木偶箱密码：四、二、七。',
    '#libretto_order_seen': '残本写明了失传剧目的三幕顺序：月出 → 剜心 → 送神。',
    '#memorial_plaque_read': '牌位记下了名字：这出戏是班主为亡徒阿喜而留。',
    '#backstage_trunk_opened': '木偶箱开了，里面留着半截操控杆和弯月幕片。',
    '#has_rod_half': '拿到了半截乌木操控杆。',
    '#has_moon_screen': '拿到了弯月幕片。',
    '#thread_spool_found': '找到一轴还没腐断的傀儡丝。',
    '#prompt_book_read': '提词本朱批警告：错一锣点，三幕重来。',
    '#puppetmaker_diary_seen': '日记写着：阿喜死后，班主还在让她的影子继续登台。',
    '#control_socket_seen': '后台地板的卡槽正缺一根总控杆。',
    '#control_rod_ready': '半杆与傀儡丝绞成了可用的总控杆。',
    '#mechanism_slot_opened': '总控杆卡进机括，台底活板被带开了。',
    '#has_heart_lamp': '拿到了心灯。',
    '#mask_heap_seen': '碎面具背面写着：第二幕要以心灯照见空腔。',
    '#cue_wheel_aligned': '提示轮按剧目顺序归位，通往吊杆层的梯子降了下来。',
    '#loft_access_open': '吊杆层的木梯已经放下。',
    '#rigging_order_seen': '吊杆朱条写清了布景顺序：先挂月幕，次点心灯，末鸣魂铃。',
    '#child_shoe_seen': '横梁上钉着一只小绣鞋，鞋底写着“阿喜”。',
    '#has_soul_bell': '魂铃被你从高架上放了下来。',
    '#moon_prop_placed': '月幕挂回了左侧景位。',
    '#heart_prop_placed': '心灯点在了台中央。',
    '#bell_prop_placed': '魂铃悬回了右侧铃架。',
    '#conductor_rule_seen': '总控签台上写着：月出引魂，剜心换线，送神出门。',
    '#act1_played': '第一幕《月出》已经唱起。',
    '#act2_played': '第二幕《剜心》顺利接上。',
    '#act3_played': '第三幕《送神》落定，戏台终于安静下来。',
    '#loop_misplayed': '你敲错了一次锣点，整座戏台硬生生倒回了首幕。',
  },
  endings: {
    normal: {
      title: '正常逃脱',
      body: '你把《傀儡师之梦》硬是演到了最后，台口暗门终于松开。可走出戏楼前，你仍听见身后传来一阵没有观众的掌声。',
    },
    perfect: {
      title: '完美逃脱',
      body: '你不只演完了三幕，也看懂了阿喜为什么一直留在台上。最后一只魂铃停住时，戏楼里那道最轻的影子终于没有再回头。',
    },
    timeout: {
      title: '傀儡替身',
      body: '你还没把三幕接完，台上的丝线已经先落了下来。等天亮时，前席多了一具姿势端正的新木偶。',
    },
  },
  translations: {
    en: {
      title: 'Puppet Stage',
      subtitle: 'A Qing-era troupe, a control rod, and a three-act loop',
      intro:
        'In a Qing-era opera house long after the troupe was dismissed, impressions still mark the empty seats while the puppets backstage turn their heads on their own. The lost play The Puppeteer\'s Dream lacks only its final night. You must stage all three acts by the old rules before the theater returns its exit to the living.',
      clueMessages: {
        '*audience': '— Audience Hall — The curtain hangs half-lowered, yet the empty seats feel as though they were filled only moments ago.',
        '*backstage': '— Backstage — Puppet trunks, costumes, and the smell of greasepaint still linger here.',
        '*understage': '— Mechanism Layer — Gears and pulleys breathe slowly beneath the floorboards.',
        '*flyloft': '— Fly Loft — Ropes and beams crowd the darkness overhead, and every step feels like treading on the old play\'s throat.',
        '#seat_code_seen': 'The first three rows reveal the puppet trunk code: four, two, seven.',
        '#libretto_order_seen': 'The torn libretto records the order of the lost play: Moonrise → Heart-Cleave → Farewell to the Spirits.',
        '#memorial_plaque_read': 'The memorial tablet gives the name: the troupe master kept this play for his dead apprentice, A-Xi.',
        '#backstage_trunk_opened': 'The puppet trunk opened. Inside were half a control rod and a crescent backdrop panel.',
        '#has_rod_half': 'You obtained half of the ebony control rod.',
        '#has_moon_screen': 'You obtained the crescent backdrop panel.',
        '#thread_spool_found': 'You found a spool of puppet thread that has not yet rotted through.',
        '#prompt_book_read': 'A red note in the prompt book warns: miss a single gong cue, and all three acts begin again.',
        '#puppetmaker_diary_seen': 'The diary says that after A-Xi died, the troupe master kept forcing her shadow back onto the stage.',
        '#control_socket_seen': 'The slot in the backstage floor is missing a master control rod.',
        '#control_rod_ready': 'The broken rod and puppet thread have been twisted into a usable master control rod.',
        '#mechanism_slot_opened': 'The control rod locked into the machinery, and a hidden panel beneath the stage slid open.',
        '#has_heart_lamp': 'You obtained the heart lamp.',
        '#mask_heap_seen': 'On the back of a shattered mask is written: in the second act, the empty chest must be lit by the heart lamp.',
        '#cue_wheel_aligned': 'The cue wheel has been restored to the proper sequence, and the ladder to the fly loft has dropped down.',
        '#loft_access_open': 'The wooden ladder to the fly loft has been lowered.',
        '#rigging_order_seen': 'A red strip on the rigging states the scene order clearly: hang the moon screen first, light the heart lamp second, ring the soul bell last.',
        '#child_shoe_seen': 'A tiny embroidered shoe is nailed to the beam above, with "A-Xi" written on the sole.',
        '#has_soul_bell': 'You brought the soul bell down from the rigging.',
        '#moon_prop_placed': 'The moon screen has been rehung on the left stage slot.',
        '#heart_prop_placed': 'The heart lamp now burns at center stage.',
        '#bell_prop_placed': 'The soul bell hangs again from the right-hand frame.',
        '#conductor_rule_seen': 'The conductor\'s stand reads: moonrise summons the soul, heart-cleaving changes the strings, farewell to the spirits opens the door.',
        '#act1_played': 'Act One, Moonrise, has begun.',
        '#act2_played': 'Act Two, Heart-Cleave, has followed cleanly.',
        '#act3_played': 'Act Three, Farewell to the Spirits, has settled into place. The stage is finally still.',
        '#loop_misplayed': 'You struck the wrong gong cue once, and the entire stage lurched back to the opening act.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You forced The Puppeteer\'s Dream all the way to its ending, and the hidden door at the stage mouth finally gave way. Yet before you left the opera house, you still heard applause behind you from an audience that was not there.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You did more than finish the three acts. You understood why A-Xi kept remaining on the stage. When the final soul bell stopped ringing, the lightest shadow in the theater finally did not turn back.',
        },
        timeout: {
          title: 'Puppet Replacement',
          body: 'Before you could finish the three acts, the strings descended from above first. By dawn, a new puppet sits upright among the front seats.',
        },
      },
      nodes: {
        root: {
          title: 'Puppet Stage',
          desc: 'Recover the lost play\'s clues, restore the props and machinery, and perform all three acts in the proper order.',
        },
        audience_scene: {
          title: 'Audience Hall',
          desc: 'Rows of empty seats face a curtain hanging half-fallen. The play has not ended; it is only missing one final opening.',
        },
        audience_seat_tags: {
          title: 'Seat Markers',
          desc: 'The wooden seat tags are not in order. The three nearest the stage are turned to show Four, Two, and Seven.',
          interactions: [
            {
              label: 'Check the Markers',
              desc: 'Memorize the three digits on the front rows.',
            },
          ],
        },
        audience_libretto: {
          title: 'Damaged Libretto',
          desc: 'Only three entries remain in the table of contents: Moonrise, Heart-Cleave, Farewell to the Spirits. Dried cinnabar fingerprints pin the pages down.',
          interactions: [
            {
              label: 'Straighten the Pages',
              desc: 'Recover the order of the three surviving acts.',
            },
          ],
        },
        audience_memorial_plaque: {
          title: 'Memorial Tablet',
          desc: 'A small tablet sits at the side of the stage, blackened by ash, with only the name A-Xi still visible on its face.',
          interactions: [
            {
              label: 'Brush Away the Ash',
              desc: 'See who this play was truly performed for.',
            },
          ],
        },
        audience_to_backstage: {
          title: 'Side Curtain Door',
          desc: 'A narrow door just wide enough for one person leads into the part of the theater no audience member was ever meant to see.',
          interactions: [
            {
              label: 'Slip Backstage',
              desc: 'Pass behind the curtain and enter the backstage area.',
            },
          ],
        },
        stage_left_rig: {
          title: 'Left Stage Slot',
          desc: 'A crescent-shaped gap remains in the left-hand scenery mount, as though meant for one specific backdrop cutout.',
        },
        stage_center_hook: {
          title: 'Center Lamp Hook',
          desc: 'Only a charred metal ring remains at center stage, where the lamp that illuminated the puppet\'s chest once hung.',
        },
        stage_right_bell: {
          title: 'Right Bell Frame',
          desc: 'An empty bell cradle hangs on the right side, green with age.',
        },
        stage_conductor_stand: {
          title: 'Conductor\'s Stand',
          desc: 'Three old cue slips stand upright on the rack. Strike the wrong one at the wrong time and the whole play rewinds to the beginning.',
          interactions: [
            {
              label: 'Study the Cue Slips',
              desc: 'The stand reads: Moonrise summons the soul, Heart-Cleave changes the strings, Farewell to the Spirits opens the door.',
            },
            {
              label: 'Begin with Moonrise',
              desc: 'Strike the first cue of the lost play.',
            },
            {
              label: 'Start with Heart-Cleave',
              desc: 'Skip the opening act and force the puppets into the middle scene.',
            },
            {
              label: 'End with Farewell',
              desc: 'Try to close the play before the first two acts have happened.',
            },
            {
              label: 'Continue with Heart-Cleave',
              desc: 'Let the second act follow the first with the heart lamp in place.',
            },
            {
              label: 'Jump Straight to Farewell',
              desc: 'Try to dismiss the spirits before the second act is complete.',
            },
            {
              label: 'Close with Farewell',
              desc: 'Settle the third act at the proper ending.',
            },
            {
              label: 'Black Out the Stage',
              desc: 'Smother the stage in darkness before the final act can land.',
            },
          ],
        },
        stage_exit: {
          title: 'Hidden Stage Door',
          desc: 'Once the third act is complete, a soft click sounds from center stage. A narrow hidden door appears behind the curtain.',
          interactions: [
            {
              label: 'Leave Through the Door',
              desc: 'Slip out through the exit revealed by the final curtain call.',
            },
          ],
        },
        backstage_scene: {
          title: 'Backstage',
          desc: 'Costumes, puppet trunks, and the prompt desk are all packed together here. The real secrets were never shown to the audience.',
        },
        backstage_trunk: {
          title: 'Puppet Trunk',
          desc: 'A heavy wooden trunk is locked with a three-digit combination, its edge marked by repeated fingernail scratches.',
          interactions: [
            {
              label: 'Enter the Code',
              desc: 'Dial in the numbers from the front seat markers.',
            },
          ],
        },
        backstage_costume_rack: {
          title: 'Costume Rack',
          desc: 'A spool of dark thread is caught behind the costumes. It has not become brittle, as though someone still waxed it regularly.',
          interactions: [
            {
              label: 'Pull Free the Thread',
              desc: 'Take the puppet thread that can still be used.',
            },
          ],
        },
        backstage_prompt_book: {
          title: 'Prompt Desk',
          desc: 'The prompt book is filled with red corrections, and the last page repeats only one line: miss a single gong cue and all three acts begin again.',
          interactions: [
            {
              label: 'Turn to the Last Page',
              desc: 'Read the one rule this play refuses to forgive.',
            },
          ],
        },
        backstage_diary: {
          title: 'Troupe Master\'s Diary',
          desc: 'A thin notebook warped by greasepaint and damp, written by someone who could not admit what they had failed to let go of.',
          interactions: [
            {
              label: 'Read the Remaining Pages',
              desc: 'The diary admits that after A-Xi died, her shadow kept being forced onto the stage for new puppets.',
            },
          ],
        },
        backstage_control_socket: {
          title: 'Floor Control Socket',
          desc: 'An iron socket is exposed in the floor, and its shape almost exactly matches the gap in the broken control rod from the trunk.',
          interactions: [
            {
              label: 'Inspect the Socket',
              desc: 'Confirm that the stage machinery is missing its master rod.',
            },
          ],
        },
        backstage_to_understage: {
          title: 'Understage Hatch',
          desc: 'Once the control mechanism shifts, part of the floor slides away and reveals a short ladder into the machinery layer below.',
          interactions: [
            {
              label: 'Descend Beneath the Stage',
              desc: 'Climb down into the mechanism layer.',
            },
          ],
        },
        backstage_return: {
          title: 'Return to the Audience Hall',
          desc: 'Pulling back the side curtain leads you straight to the rows of empty seats again.',
          interactions: [
            {
              label: 'Return to the Front',
              desc: 'Step back out from behind the curtain.',
            },
          ],
        },
        understage_scene: {
          title: 'Mechanism Layer',
          desc: 'Every floorboard above is tied to pulleys and axle gears. The audience sees a play; underneath, the bones do the work.',
        },
        understage_prop_crate: {
          title: 'Lacquered Prop Case',
          desc: 'Only one red paper heart lamp remains inside the case, hollow at its center as if meant to shine through an empty chest.',
          interactions: [
            {
              label: 'Take the Heart Lamp',
              desc: 'Recover the lamp missing from the second act.',
            },
          ],
        },
        understage_mask_heap: {
          title: 'Pile of Shattered Masks',
          desc: 'A note in red ink is written on the back of one discarded mask: in the second act, the empty cavity must be lit by the heart lamp.',
          interactions: [
            {
              label: 'Turn Over the Masks',
              desc: 'Confirm what the second act is truly missing.',
            },
          ],
        },
        understage_cue_wheel: {
          title: 'Cue Wheel',
          desc: 'Three rotating plates read Farewell, Moonrise, and Heart-Cleave. Only when they are restored to the libretto\'s order will the ladder to the fly loft descend.',
          sortSymbols: ['Farewell', 'Moonrise', 'Heart-Cleave'],
          interactions: [
            {
              label: 'Realign the Wheel',
              desc: 'Restore the sequence of the three acts.',
            },
          ],
        },
        understage_to_flyloft: {
          title: 'Fly Loft Ladder',
          desc: 'A wooden ladder that was once hidden above now slowly lowers, leading up toward the rigging.',
          interactions: [
            {
              label: 'Climb to the Fly Loft',
              desc: 'Follow the ladder up above the stage.',
            },
          ],
        },
        understage_return: {
          title: 'Return to Backstage',
          desc: 'The short ladder behind you still leads back to the backstage area and your collected props.',
          interactions: [
            {
              label: 'Return to Backstage',
              desc: 'Climb back up the ladder.',
            },
          ],
        },
        flyloft_scene: {
          title: 'Fly Loft',
          desc: 'The final heavy prop of the whole production hangs here. Until the bell rings, the play cannot end cleanly.',
        },
        flyloft_ribbon_note: {
          title: 'Rigging Ribbon',
          desc: 'Three red lines are written on the strip: hang the moon screen first, light the heart lamp second, ring the soul bell last.',
          interactions: [
            {
              label: 'Copy the Ribbon',
              desc: 'Memorize the order for the scenery and the final bell.',
            },
          ],
        },
        flyloft_child_shoe: {
          title: 'Child\'s Embroidered Shoe',
          desc: 'A faded little shoe is nailed to the beam, as if someone pinned it there on impulse and then could never bear to take it away.',
          interactions: [
            {
              label: 'Look More Closely',
              desc: 'The sole has "A-Xi" written clumsily across it.',
            },
          ],
        },
        flyloft_bell_frame: {
          title: 'Suspended Soul Bell',
          desc: 'The bell is stuck in the upper rigging and cannot be reached by hand. Only a long control rod can knock it loose.',
          interactions: [
            {
              label: 'Knock the Bell Loose',
              desc: 'Use the master control rod to bring the soul bell down from the rigging.',
            },
          ],
        },
        flyloft_return: {
          title: 'Return to the Front',
          desc: 'Following the side beam to the end lets you slip back down behind the top of the curtain into the audience hall.',
          interactions: [
            {
              label: 'Return to the Audience Hall',
              desc: 'Drop back down to the front of the stage.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'The true missing props and control pieces of all three acts stay here until the stage is ready for them.',
        },
        rod_half_item: {
          title: 'Half Control Rod',
          desc: 'The ebony shaft remains, but the break is too clean to be accidental. It feels as though it was left waiting for the rest of itself.',
        },
        thread_spool_item: {
          title: 'Spool of Puppet Thread',
          desc: 'Waxed thread strong enough to lash the broken rod back into a usable master control piece.',
        },
        control_rod_item: {
          title: 'Master Control Rod',
          desc: 'Once bound with puppet thread, the broken rod is long and flexible enough to drive the backstage mechanism and reach the high bell frame.',
        },
        moon_screen_item: {
          title: 'Crescent Screen Panel',
          desc: 'A thin wooden panel cut into the shape of a crescent moon, worn on the back where it used to hook into the stage rigging.',
        },
        heart_lamp_item: {
          title: 'Heart Lamp',
          desc: 'The red paper shade is cut open in the center so its light can reveal the hollow puppet chest.',
        },
        soul_bell_item: {
          title: 'Soul Bell',
          desc: 'The bell is small, but once shaken, its echo rolls through the entire opera house.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '傀儡戏台',
    desc: '先补齐失传戏目的线索，再把道具、机括和三幕顺序一并复位。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'audience_scene',
        title: '戏台前席',
        desc: '空席正对着半落的大幕。戏还没散，只是差最后一次开场。',
        type: 'text',
        sceneClue: '*audience',
        scenes: ['*audience'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'audience_seat_tags',
            title: '前三排座签',
            desc: '木座签没有按顺序排，偏偏最靠舞台的三块被翻成了“四”“二”“七”。',
            type: 'text',
            scenes: ['*audience'],
            layout: { direction: 230, distance: 150 },
            interactions: [
              {
                label: '翻看座签',
                desc: '记下最靠戏台的三块数字座签。',
                when: '!#seat_code_seen',
                addClues: ['#seat_code_seen'],
              },
            ],
            doneClue: '#seat_code_seen',
          },
          {
            id: 'audience_libretto',
            title: '残缺戏本',
            desc: '戏本只剩三页目录：月出引魂、剜心换线、送神出门，旁边压着干掉的朱砂指印。',
            type: 'text',
            scenes: ['*audience'],
            layout: { direction: 280, distance: 150 },
            interactions: [
              {
                label: '整理残本',
                desc: '把还能辨认的三幕顺序记下来。',
                when: '!#libretto_order_seen',
                addClues: ['#libretto_order_seen'],
              },
            ],
            doneClue: '#libretto_order_seen',
          },
          {
            id: 'audience_memorial_plaque',
            title: '供桌牌位',
            desc: '台口角落供着一块小牌位，木纹已经被香灰熏黑，牌面上只刻着“阿喜”二字。',
            type: 'text',
            scenes: ['*audience'],
            layout: { direction: 330, distance: 145 },
            interactions: [
              {
                label: '拂去香灰',
                desc: '看清这出戏究竟是替谁而演。',
                when: '!#memorial_plaque_read',
                addClues: ['#memorial_plaque_read'],
              },
            ],
            doneClue: '#memorial_plaque_read',
          },
          {
            id: 'audience_to_backstage',
            title: '侧幕小门',
            desc: '一条只够一人侧身通过的窄门，门后就是戏班绝不让观众进入的后台。',
            type: 'text',
            scenes: ['*audience'],
            layout: { direction: 20, distance: 165 },
            interactions: [
              {
                label: '钻进后台',
                desc: '绕过幕布，进入后台。',
                addClues: ['*backstage', '-*audience'],
              },
            ],
          },
          {
            id: 'stage_left_rig',
            title: '左侧景位',
            desc: '左边景位空着一道弯月形缺口，像是专门留给某块剪影幕片。',
            type: 'switch',
            scenes: ['*audience'],
            layout: { direction: 70, distance: 150 },
            doneClue: '#moon_prop_placed',
          },
          {
            id: 'stage_center_hook',
            title: '中台灯钩',
            desc: '戏台正中只剩一枚焦黑灯环。这里原本挂着能照亮木偶胸腔的那盏灯。',
            type: 'switch',
            scenes: ['*audience'],
            preClue: '#moon_prop_placed',
            layout: { direction: 105, distance: 155 },
            doneClue: '#heart_prop_placed',
          },
          {
            id: 'stage_right_bell',
            title: '右侧铃架',
            desc: '右侧高架只剩一只空铃座，边上还沾着陈年的铜绿。',
            type: 'switch',
            scenes: ['*audience'],
            preClue: '#heart_prop_placed',
            layout: { direction: 140, distance: 160 },
            doneClue: '#bell_prop_placed',
          },
          {
            id: 'stage_conductor_stand',
            title: '总控签台',
            desc: '签台上插着三支旧戏签。敲哪一签，台上的木偶就会跟着走哪一幕；错一次，整场戏都会自己倒回首幕。',
            type: 'text',
            scenes: ['*audience'],
            preClue: '#bell_prop_placed',
            layout: { direction: 175, distance: 170 },
            interactions: [
              {
                label: '查看戏签',
                desc: '签台写着：月出引魂，剜心换线，送神出门。',
                when: '!#conductor_rule_seen',
                addClues: ['#conductor_rule_seen'],
              },
              {
                label: '先起《月出》',
                desc: '按失传戏本的第一幕起锣。',
                when: ['AND', '!#act1_played', '#conductor_rule_seen'],
                addClues: ['#act1_played'],
              },
              {
                label: '先唱《剜心》',
                desc: '跳过第一幕，直接让木偶演到中段。',
                when: ['AND', '!#act1_played', '#conductor_rule_seen'],
                addClues: ['#stage_loop_reset'],
              },
              {
                label: '先落《送神》',
                desc: '抢在前两幕前就强行收尾。',
                when: ['AND', '!#act1_played', '#conductor_rule_seen'],
                addClues: ['#stage_loop_reset'],
              },
              {
                label: '续《剜心》',
                desc: '让第二幕接上心灯与空腔。',
                when: ['AND', '#act1_played', '!#act2_played'],
                addClues: ['#act2_played'],
              },
              {
                label: '直接落《送神》',
                desc: '不等第二幕唱完就急着送神。',
                when: ['AND', '#act1_played', '!#act2_played'],
                addClues: ['#stage_loop_reset'],
              },
              {
                label: '收《送神》',
                desc: '把第三幕稳稳落到底。',
                when: ['AND', '#act2_played', '!#act3_played'],
                addClues: ['#act3_played'],
              },
              {
                label: '此时灭灯收幕',
                desc: '在最后一幕前先把台口彻底压黑。',
                when: ['AND', '#act2_played', '!#act3_played'],
                addClues: ['#stage_loop_reset'],
              },
            ],
            doneClue: '#act3_played',
          },
          {
            id: 'stage_exit',
            title: '台口暗门',
            desc: '第三幕唱完后，戏台正中发出一声轻响。幕布后多出一道刚够人钻过去的暗门。',
            type: 'text',
            scenes: ['*audience'],
            preClue: '#act3_played',
            layout: { direction: 205, distance: 175 },
            interactions: [
              {
                label: '从暗门离开',
                desc: '穿过最后一次落幕后的出口。',
                addClues: ['@escape'],
              },
            ],
          },
        ],
      },
      {
        id: 'backstage_scene',
        title: '后台',
        desc: '戏衣、木偶箱和提词台全挤在这里。真正的秘密从不摆在观众那一面。',
        type: 'text',
        sceneClue: '*backstage',
        scenes: ['*backstage'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'backstage_trunk',
            title: '木偶箱',
            desc: '厚木箱挂着三位转盘锁，箱盖边缘还残留着被指甲反复抠过的痕迹。',
            type: 'password',
            scenes: ['*backstage'],
            preClue: '#seat_code_seen',
            layout: { direction: 300, distance: 150 },
            code: '427',
            successClues: ['#backstage_trunk_opened', '#has_rod_half', '#has_moon_screen'],
            doneClue: '#backstage_trunk_opened',
            interactions: [
              {
                label: '输入密码',
                desc: '把前三排座签的数字拨进转盘锁。',
              },
            ],
          },
          {
            id: 'backstage_costume_rack',
            title: '戏衣架',
            desc: '旧戏衣后面缠着一轴乌黑细丝，没有发脆，像一直有人定期给它上蜡。',
            type: 'text',
            scenes: ['*backstage'],
            layout: { direction: 245, distance: 150 },
            interactions: [
              {
                label: '抽出细丝',
                desc: '把还能用的傀儡丝收起来。',
                when: '!#thread_spool_found',
                addClues: ['#thread_spool_found'],
              },
            ],
            doneClue: '#thread_spool_found',
          },
          {
            id: 'backstage_prompt_book',
            title: '提词台',
            desc: '提词本边角全是红笔批改，最后一页只反复圈着一句：“错一锣点，三幕重来。”',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#backstage_trunk_opened',
            layout: { direction: 340, distance: 150 },
            interactions: [
              {
                label: '翻到末页',
                desc: '看清这出戏最不能犯的规矩。',
                when: '!#prompt_book_read',
                addClues: ['#prompt_book_read'],
              },
            ],
            doneClue: '#prompt_book_read',
          },
          {
            id: 'backstage_diary',
            title: '班主日记',
            desc: '一本被油彩浸皱的薄册子，字迹断断续续，像写的人不肯承认自己还没放下。',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#prompt_book_read',
            layout: { direction: 35, distance: 150 },
            interactions: [
              {
                label: '读剩下的几页',
                desc: '日记承认了：阿喜死后，班主一直让她的影子替新木偶压台。',
                when: '!#puppetmaker_diary_seen',
                addClues: ['#puppetmaker_diary_seen'],
              },
            ],
            doneClue: '#puppetmaker_diary_seen',
          },
          {
            id: 'backstage_control_socket',
            title: '地板总控槽',
            desc: '地板中间露出一圈铁制卡槽，形状和木偶箱里的半杆缺口几乎完全一致。',
            type: 'switch',
            scenes: ['*backstage'],
            preClue: '#prompt_book_read',
            layout: { direction: 90, distance: 155 },
            doneClue: '#mechanism_slot_opened',
            interactions: [
              {
                label: '检查卡槽',
                desc: '看清这里缺的正是后台总控杆。',
                when: '!#control_socket_seen',
                addClues: ['#control_socket_seen'],
              },
            ],
          },
          {
            id: 'backstage_to_understage',
            title: '台底活板',
            desc: '总控一带动，地板就滑开了一块，下面露出通往台底机括层的短梯。',
            type: 'text',
            scenes: ['*backstage'],
            preClue: '#mechanism_slot_opened',
            layout: { direction: 145, distance: 165 },
            interactions: [
              {
                label: '下到台底',
                desc: '顺短梯进入机括层。',
                addClues: ['*understage', '-*backstage'],
              },
            ],
          },
          {
            id: 'backstage_return',
            title: '回到前席',
            desc: '掀开侧幕，仍然能回到那片空椅子前。',
            type: 'text',
            scenes: ['*backstage'],
            layout: { direction: 190, distance: 165 },
            interactions: [
              {
                label: '返回前席',
                desc: '从侧幕退回戏台前。',
                addClues: ['*audience', '-*backstage'],
              },
            ],
          },
        ],
      },
      {
        id: 'understage_scene',
        title: '台底机括层',
        desc: '头顶每一块台板都连着绳轮和齿轴。台上看见的是戏，台下运作的是骨头。',
        type: 'text',
        sceneClue: '*understage',
        scenes: ['*understage'],
        layout: { direction: 30, distance: 280 },
        children: [
          {
            id: 'understage_prop_crate',
            title: '漆木道具匣',
            desc: '匣子里只剩一盏红纸糊的心灯，灯身中空，像故意要从里面照出去。',
            type: 'text',
            scenes: ['*understage'],
            layout: { direction: 290, distance: 150 },
            interactions: [
              {
                label: '取出心灯',
                desc: '把第二幕缺的那盏灯带走。',
                when: '!#has_heart_lamp',
                addClues: ['#has_heart_lamp'],
              },
            ],
            doneClue: '#has_heart_lamp',
          },
          {
            id: 'understage_mask_heap',
            title: '碎面具堆',
            desc: '废弃面具堆在墙角，其中一张背面拿朱笔写着：“第二幕要以心灯照见空腔。”',
            type: 'text',
            scenes: ['*understage'],
            layout: { direction: 235, distance: 150 },
            interactions: [
              {
                label: '翻开碎面具',
                desc: '确认第二幕到底少了什么。',
                when: '!#mask_heap_seen',
                addClues: ['#mask_heap_seen'],
              },
            ],
            doneClue: '#mask_heap_seen',
          },
          {
            id: 'understage_cue_wheel',
            title: '提示轮',
            desc: '三块转片刻着“送神”“月出”“剜心”。把它们按戏本顺序排好，吊杆层的梯子才会放下来。',
            type: 'click-sort',
            scenes: ['*understage'],
            preClue: '#libretto_order_seen',
            layout: { direction: 345, distance: 155 },
            sortSymbols: ['送神', '月出', '剜心'],
            sortSolution: [1, 2, 0],
            successClues: ['#cue_wheel_aligned', '#loft_access_open'],
            doneClue: '#cue_wheel_aligned',
            interactions: [
              {
                label: '调整提示轮',
                desc: '把三幕顺序排回原来的位置。',
              },
            ],
          },
          {
            id: 'understage_to_flyloft',
            title: '吊杆层木梯',
            desc: '一架原本收在顶上的木梯已经缓缓垂下，尽头正通向吊杆层。',
            type: 'text',
            scenes: ['*understage'],
            preClue: '#loft_access_open',
            layout: { direction: 45, distance: 170 },
            interactions: [
              {
                label: '爬上吊杆层',
                desc: '顺着木梯爬到戏台上方。',
                addClues: ['*flyloft', '-*understage'],
              },
            ],
          },
          {
            id: 'understage_return',
            title: '回到后台',
            desc: '短梯就在身后，随时可以回到后台整理道具。',
            type: 'text',
            scenes: ['*understage'],
            layout: { direction: 175, distance: 165 },
            interactions: [
              {
                label: '返回后台',
                desc: '沿短梯爬回后台。',
                addClues: ['*backstage', '-*understage'],
              },
            ],
          },
        ],
      },
      {
        id: 'flyloft_scene',
        title: '吊杆层',
        desc: '这里悬着整座戏台的最后一件重物。铃一响，戏才能真正收得住。',
        type: 'text',
        sceneClue: '*flyloft',
        scenes: ['*flyloft'],
        layout: { direction: 85, distance: 280 },
        children: [
          {
            id: 'flyloft_ribbon_note',
            title: '吊杆朱条',
            desc: '朱条一共三句：先挂月幕，次点心灯，末鸣魂铃。班里的人显然怕谁再把这套顺序忘了。',
            type: 'text',
            scenes: ['*flyloft'],
            layout: { direction: 320, distance: 150 },
            interactions: [
              {
                label: '抄下朱条',
                desc: '记住布景和魂铃的落位顺序。',
                when: '!#rigging_order_seen',
                addClues: ['#rigging_order_seen'],
              },
            ],
            doneClue: '#rigging_order_seen',
          },
          {
            id: 'flyloft_child_shoe',
            title: '横梁小绣鞋',
            desc: '一只褪色绣鞋被细钉钉在横梁上，像是谁临时起意，又像谁根本舍不得取走。',
            type: 'text',
            scenes: ['*flyloft'],
            layout: { direction: 250, distance: 150 },
            interactions: [
              {
                label: '够近细看',
                desc: '鞋底歪歪扭扭写着“阿喜”。',
                when: '!#child_shoe_seen',
                addClues: ['#child_shoe_seen'],
              },
            ],
            doneClue: '#child_shoe_seen',
          },
          {
            id: 'flyloft_bell_frame',
            title: '高架魂铃',
            desc: '魂铃被卡在最上层的架槽里，徒手够不到，只有细长的总控杆能把它拨下来。',
            type: 'switch',
            scenes: ['*flyloft'],
            layout: { direction: 20, distance: 155 },
            doneClue: '#has_soul_bell',
            interactions: [
              {
                label: '用总控杆拨铃',
                desc: '把卡在高架里的魂铃拨松放下来。',
                when: ['AND', '#control_rod_ready', '!#has_soul_bell'],
                addClues: ['#has_soul_bell'],
              },
            ],
          },
          {
            id: 'flyloft_return',
            title: '回到前席',
            desc: '沿侧梁走到头，能从幕顶后方滑回前席。',
            type: 'text',
            scenes: ['*flyloft'],
            layout: { direction: 150, distance: 170 },
            interactions: [
              {
                label: '回到前席',
                desc: '从幕顶后方落回戏台前。',
                addClues: ['*audience', '-*flyloft'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '把三幕真正缺的道具和控制件都先收在这里。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'rod_half_item',
            title: '半截操控杆',
            desc: '乌木杆身还在，尾端却断得很齐，像故意留着等另一段力量接上。',
            type: 'item',
            preClue: ['AND', '#has_rod_half', '!#control_rod_ready'],
            combineWith: [
              {
                targetId: 'thread_spool_item',
                addClues: ['#control_rod_ready'],
              },
            ],
          },
          {
            id: 'thread_spool_item',
            title: '傀儡丝轴',
            desc: '细丝浸过蜡，韧性还在，足够把断杆重新绞成能用的总控杆。',
            type: 'item',
            preClue: ['AND', '#thread_spool_found', '!#control_rod_ready'],
            combineWith: [
              {
                targetId: 'rod_half_item',
                addClues: ['#control_rod_ready'],
              },
            ],
          },
          {
            id: 'control_rod_item',
            title: '总控杆',
            desc: '半杆与傀儡丝绞紧后，刚好够长够韧，能插进后台机括，也能拨高处铃架。',
            type: 'item',
            preClue: '#control_rod_ready',
            itemUse: {
              targetIds: ['backstage_control_socket'],
              addClues: ['#mechanism_slot_opened'],
            },
          },
          {
            id: 'moon_screen_item',
            title: '弯月幕片',
            desc: '薄木刻成弯月形，背面还留着舞台挂扣的磨痕。',
            type: 'item',
            preClue: ['AND', '#has_moon_screen', '!#moon_prop_placed'],
            itemUse: {
              targetIds: ['stage_left_rig'],
              addClues: ['#moon_prop_placed'],
            },
          },
          {
            id: 'heart_lamp_item',
            title: '心灯',
            desc: '红纸灯罩中央挖空了一块，点亮时正好照出木偶胸前的空腔。',
            type: 'item',
            preClue: ['AND', '#has_heart_lamp', '!#heart_prop_placed'],
            itemUse: {
              targetIds: ['stage_center_hook'],
              addClues: ['#heart_prop_placed'],
            },
          },
          {
            id: 'soul_bell_item',
            title: '魂铃',
            desc: '小铜铃并不大，晃起来却带着整座戏楼都能听见的回音。',
            type: 'item',
            preClue: ['AND', '#has_soul_bell', '!#bell_prop_placed'],
            itemUse: {
              targetIds: ['stage_right_bell'],
              addClues: ['#bell_prop_placed'],
            },
          },
        ],
      },
    ],
  },
  triggers: [
    {
      id: 'stage_loop_reset',
      when: '#stage_loop_reset',
      addClues: [
        '#loop_misplayed',
        '*audience',
        '-*backstage',
        '-*understage',
        '-*flyloft',
        '-#stage_loop_reset',
        '-#moon_prop_placed',
        '-#heart_prop_placed',
        '-#bell_prop_placed',
        '-#act1_played',
        '-#act2_played',
        '-#act3_played',
      ],
    },
    {
      id: 'perfect_escape',
      when: [
        'AND',
        '@escape',
        '!#loop_misplayed',
        '#memorial_plaque_read',
        '#prompt_book_read',
        '#puppetmaker_diary_seen',
        '#mask_heap_seen',
        '#rigging_order_seen',
        '#child_shoe_seen',
        '#cue_wheel_aligned',
        '#conductor_rule_seen',
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
