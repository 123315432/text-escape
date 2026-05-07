import type { Mission } from '../../core/types'

export const dreamMission: Mission = {
  id: 'dream',
  title: '梦境回廊',
  subtitle: '心理恐怖·四层梦境·觉醒选择',
  intro:
    '你被困在一条会自己呼吸的回廊里。恐惧、愧疚、怀旧、接纳，四层梦境轮流把你拖回过去。只有把碎掉的自己重新拼起来，你才有资格决定要不要醒来。',
  timeLimitMs: 70 * 60 * 1000,
  initialClues: ['*corridor_dream'],
  bgmScenes: {
    '*corridor_dream': '/audio/bgm/corridor.mp3',
    '*fear_ward': '/audio/bgm/thunder.mp3',
    '*guilt_court': '/audio/bgm/hall.mp3',
    '*nostalgia_home': '/audio/bgm/rain.mp3',
    '*acceptance_shore': '/audio/bgm/chamber.mp3',
    '*core_dream': '/audio/bgm/chamber.mp3',
  },
  clueMessages: {
    '*corridor_dream': '— 梦境回廊 — 四扇门像肺叶一样缓慢开合。',
    '*fear_ward': '— 恐惧层·无窗病房 — 灯光一闪一灭，像有人正隔着帘子盯着你。',
    '*guilt_court': '— 愧疚层·审判庭 — 所有座位都空着，只有你的名字写在被告席上。',
    '*nostalgia_home': '— 怀旧层·旧宅餐厅 — 饭菜还是热的，可屋里没有任何活人。',
    '*acceptance_shore': '— 接纳层·潮声白岸 — 海浪只把同一句话推回你脚边。',
    '*core_dream': '— 梦核 — 最后一扇门后，没有世界，只剩下你自己。',
    '#corridor_order_hint': '钟摆给出了顺序：先止颤，再落笔，再听曲，最后照见海面上的自己。',
    '#corridor_mirror_hint': '墙皮下渗出一句提醒：碎片不能永远留在门外。',
    '#fear_monitor_hint': '监护屏反复闪出 3 · 1 · 4。',
    '#fear_locker_open': '储物柜打开了。',
    '#has_memory_thread': '拿到了记忆线。',
    '#fear_bed_seen': '床底拖痕一路通向门口，像有人一直在逃。',
    '#fear_token': '你没有再逃，恐惧之印落进了掌心。',
    '#guilt_sequence_hint': '录音笔留下的顺序是：雨停，灯灭，门响，落笔。',
    '#guilt_recorder_fixed': '录音笔吐出一枚薄得像刃的玻璃签。',
    '#has_glass_talon': '拿到了玻璃签。',
    '#guilt_letter_seen': '判决书末尾只写着一句：你最难原谅的人一直是自己。',
    '#guilt_token': '你按下指印，愧疚之印亮了。',
    '#nostalgia_code_hint': '旧日历停在 0827，那天被人圈了两次。',
    '#nostalgia_box_open': '八音盒打开了。',
    '#has_music_spring': '拿到了发条簧片。',
    '#nostalgia_photo_seen': '合照里少了一个人，而那个空缺刚好是你的轮廓。',
    '#nostalgia_token': '旋律播完后，怀旧之印落了下来。',
    '#threaded_talon_ready': '记忆线缠住了玻璃签，成了一把能缝合裂口的细钥。',
    '#awakening_key_ready': '玻璃签、记忆线和发条簧片扣成了一把醒梦钥。',
    '#acceptance_mirror_seen': '潮水问你：醒来以后，痛苦也会一起醒来，你还要回去吗？',
    '#acceptance_token': '你把醒梦钥放进潮汐祭台，接纳之印被点亮了。',
    '#core_order_hint': '白岸回声只重复四个词：恐惧、愧疚、怀旧、接纳。',
    '#core_truth_seen': '门后的那个人不是怪物，只是迟迟不肯醒来的你。',
    '#core_solved': '四枚印记归位，梦核开始崩解。',
    '#gate_open': '最后一扇门终于打开了。',
  },
  endings: {
    normal: {
      title: '醒来，但并不完整',
      body: '你穿过正在崩塌的梦核，从床上惊醒。窗外已经天亮，可有些被你刻意绕开的画面仍留在脑后，像一场还没真正结束的雨。',
    },
    perfect: {
      title: '完整醒来',
      body: '你没有再把恐惧、愧疚和怀旧丢回梦里，而是带着它们一起走出了回廊。睁眼的那一刻，你终于认得镜子里的人，也愿意继续活成他。',
    },
    timeout: {
      title: '沉回梦底',
      body: '潮水漫过回廊，四扇门同时闭合。你听见钟摆还在走，可那声音越来越远，直到你再次分不清自己究竟是睡着了，还是从未醒来过。',
    },
  },
  translations: {
    en: {
      title: 'Dream Corridor',
      subtitle: 'Psychological horror, four dream layers, and the choice to wake',
      intro: 'You are trapped in a corridor that seems to breathe on its own. Fear, guilt, nostalgia, and acceptance take turns dragging you back into the past. Only by piecing your shattered self back together can you decide whether to wake up.',
      clueMessages: {
        '*corridor_dream': '— Dream Corridor — Four doors open and close slowly like lungs.',
        '*fear_ward': '— Fear Layer · Windowless Ward — The light flickers on and off, as if someone is watching you from behind the curtain.',
        '*guilt_court': '— Guilt Layer · Courtroom — Every seat is empty, and only your name is written in the defendant\'s chair.',
        '*nostalgia_home': '— Nostalgia Layer · Old House Dining Room — The food is still hot, but there is not a single living person in the house.',
        '*acceptance_shore': '— Acceptance Layer · White Shore with Waves — The tide keeps pushing the same sentence back to your feet.',
        '*core_dream': '— Dream Core — Behind the final door there is no world, only yourself.',
        '#corridor_order_hint': 'The pendulum gives the order: first still the shaking, then write, then listen to the song, and finally see yourself on the sea surface.',
        '#corridor_mirror_hint': 'A warning seeps through the peeling wall: fragments cannot stay outside the door forever.',
        '#fear_monitor_hint': 'The monitor flashes 3 · 1 · 4 again and again.',
        '#fear_locker_open': 'The locker is open.',
        '#has_memory_thread': 'You obtained the memory thread.',
        '#fear_bed_seen': 'The drag marks under the bed lead straight to the door, as if someone had been trying to escape all along.',
        '#fear_token': 'You stop running. The seal of fear settles into your palm.',
        '#guilt_sequence_hint': 'The voice recorder left this order behind: rain stops, light goes out, door sounds, then the pen falls.',
        '#guilt_recorder_fixed': 'The voice recorder spits out a glass tab as thin as a blade.',
        '#has_glass_talon': 'You obtained the glass tab.',
        '#guilt_letter_seen': 'The last line of the verdict says only this: the person you can least forgive has always been yourself.',
        '#guilt_token': 'You press your fingerprint down, and the seal of guilt lights up.',
        '#nostalgia_code_hint': 'The old calendar stops on 0827, and that date has been circled twice.',
        '#nostalgia_box_open': 'The music box is open.',
        '#has_music_spring': 'You obtained the spring plate.',
        '#nostalgia_photo_seen': 'One person is missing from the group photo, and the gap is exactly your outline.',
        '#nostalgia_token': 'When the melody ends, the seal of nostalgia falls into place.',
        '#threaded_talon_ready': 'The memory thread wraps around the glass tab, becoming a thin key that can stitch a crack shut.',
        '#awakening_key_ready': 'The glass tab, memory thread, and spring plate have locked together into a waking key.',
        '#acceptance_mirror_seen': 'The tide asks: if you wake up, the pain wakes up too. Do you still want to go back?',
        '#acceptance_token': 'You place the waking key on the tide altar, and the seal of acceptance lights up.',
        '#core_order_hint': 'The white shore echoes only four words: fear, guilt, nostalgia, acceptance.',
        '#core_truth_seen': 'The person behind the door is not a monster, only you, unwilling to wake up.',
        '#core_solved': 'The four seals return to their places, and the dream core begins to collapse.',
        '#gate_open': 'The final door finally opens.',
      },
      endings: {
        normal: {
          title: 'Waking, but Incomplete',
          body: 'You pass through the collapsing dream core and wake up in bed. Dawn is already outside, but the images you tried to avoid still linger behind you like a rain that has not finished falling.',
        },
        perfect: {
          title: 'Wake Up Whole',
          body: 'You do not leave fear, guilt, or nostalgia behind. You walk out of the corridor with them, and when you open your eyes, you finally recognize the person in the mirror and choose to keep living as him.',
        },
        timeout: {
          title: 'Sinking Back to the Bottom',
          body: 'The tide floods the corridor and all four doors close at once. You can hear the pendulum still moving, but the sound keeps getting farther away until you can no longer tell whether you are asleep or never truly woke up.',
        },
      },
      nodes: {
        root: {
          title: 'Dream Corridor',
          desc: 'Four dream layers unfold around the same corridor. Bring back the fragments, assemble the waking key, and decide whether you truly want to wake up.',
        },
        corridor_scene: {
          title: 'Dream Corridor',
          desc: 'Four doors lead to four emotions. The wordless door in the center has no handle, as if waiting for you to put yourself back together first.',
        },
        corridor_clock: {
          title: 'Backward Clock',
          desc: 'The pendulum never tells time. It just keeps writing the same order hint inside the glass cover.',
          interactions: [
            { label: 'Watch the Pendulum', desc: 'First still the shaking, then write, then listen to the song, and finally see yourself on the sea surface.' },
          ],
        },
        corridor_wall: {
          title: 'Peeling Wall',
          desc: 'It looks like a mirror is hiding under the wall skin, and the cracks slowly arrange themselves into a sentence when you get close.',
          interactions: [
            { label: 'Touch the Cracks', desc: 'Fragments cannot stay outside the door forever.' },
          ],
        },
        fear_door: {
          title: 'Door of Fear',
          desc: 'Cold white light spills through the crack, along with a frantic, uneven ticking sound.',
          interactions: [
            { label: 'Enter the Windowless Ward', desc: 'When you open the door, the smell of disinfectant and the heart monitor alarms hit you at once.' },
          ],
        },
        guilt_door: {
          title: 'Door of Guilt',
          desc: 'The nameplate has been nailed into the shape of a gavel, and the sound of documents being flipped drifts through the gap behind it.',
          interactions: [
            { label: 'Enter the Courtroom', desc: 'You hear the gavel fall, and the door locks shut behind you.' },
          ],
        },
        nostalgia_door: {
          title: 'Door of Nostalgia',
          desc: 'The handle is warm, as if someone just left. But the smell of soup makes you hesitate before opening it.',
          interactions: [
            { label: 'Enter the Old House Dining Room', desc: 'A familiar domestic warmth - almost cruel in how much it hurts - rushes over you.' },
          ],
        },
        acceptance_door: {
          title: 'Door of Acceptance',
          desc: 'The sound of waves comes from behind it. Only after you bring back everything from the first three doors does it finally reveal itself.',
          interactions: [
            { label: 'Walk Toward the White Shore', desc: 'Beyond the door is no longer a room, but an endless white tide flat.' },
          ],
        },
        awakening_gate: {
          title: 'Wordless Door',
          desc: 'The central door no longer leaks blood. Its surface is now a calm sheet of black glass.',
          interactions: [
            { label: 'Push Open the Wordless Door', desc: 'Only one final layer of the dream remains beyond it.' },
          ],
        },
        fear_scene: {
          title: 'Fear Layer · Windowless Ward',
          desc: 'No windows, no exit, and even under the bedsheets there seems to be something that could suddenly sit up.',
        },
        fear_monitor: {
          title: 'Heart Monitor',
          desc: 'The heart-rate line does not match a patient. Instead, it flashes the number set 3, 1, 4 at fixed intervals.',
          interactions: [
            { label: 'Memorize the Blink Pattern', desc: 'The pulse seems to have been deliberately set into a 3 · 1 · 4 loop.' },
          ],
        },
        fear_locker: {
          title: 'Nurse Locker',
          desc: 'The locker has a three-digit keypad, and a gray thread is caught in the seam.',
          interactions: [
            { label: 'Enter the Password', desc: 'Try the numbers from the monitor screen.' },
          ],
        },
        fear_bed: {
          title: 'Bed Covered with a White Sheet',
          desc: 'There is no body under the sheet, only a deep hollow, as if someone had crawled away in a panic just moments ago.',
          interactions: [
            { label: 'Lift the Sheet', desc: 'The drag marks under the bed lead to the door, as if someone had been trying to run the entire time.' },
          ],
        },
        fear_curtain: {
          title: 'Figure Behind the Curtain',
          desc: 'On the other side of the curtain is a person-shaped shadow your height, shaking all over.',
          interactions: [
            { label: 'Pull Back the Curtain', desc: 'You find yourself curled up in a ball. You do not run again - you help him stand up.' },
          ],
        },
        fear_return: {
          title: 'Back to the Corridor',
          desc: 'The ward door appears behind you again, and the cold white light slowly dies away through the crack.',
          interactions: [
            { label: 'Return to the Corridor', desc: 'Walk back to the central corridor with the fear you did not run from.' },
          ],
        },
        guilt_scene: {
          title: 'Guilt Layer · Courtroom',
          desc: 'Only the defendant\'s seat is lit in the entire courtroom, and your own name is carved onto it.',
        },
        guilt_docket: {
          title: 'Case File Desk',
          desc: 'The opened case file contains no case details, only one line circled in red again and again: rain stops, light goes out, door sounds, then the pen falls.',
          interactions: [
            { label: 'Reconstruct the Timeline', desc: 'The order is now fixed: rain stops, light goes out, door sounds, then the pen falls.' },
          ],
        },
        guilt_recorder: {
          title: 'Evidence Voice Recorder',
          desc: 'The recorder casing is cracked, and the screen shows only four broken words. They have to be ordered correctly before the trapped piece will come out.',
          interactions: [
            { label: 'Reorder the Fragments', desc: 'Restore the recording to the correct order from the file clue.' },
          ],
        },
        guilt_verdict: {
          title: 'Unsigned Verdict',
          desc: 'Only the last line on the page is still readable, as if it was left there just for you.',
          interactions: [
            { label: 'Read the Last Line', desc: 'The person you can least forgive has always been yourself.' },
          ],
        },
        guilt_stamp: {
          title: 'Defendant Fingerprint Pad',
          desc: 'Only one empty spot remains on the pad, waiting for the last person who still refuses to admit it.',
          interactions: [
            { label: 'Press Your Finger Down', desc: 'The gavel never falls. Your fingerprint starts to glow, and guilt finally stops chasing you.' },
          ],
        },
        guilt_return: {
          title: 'Back to the Corridor',
          desc: 'The courtroom door turns back into a normal wooden door, and only the corridor bell remains waiting outside.',
          interactions: [
            { label: 'Leave the Courtroom', desc: 'Walk back to the corridor with the still-warm fingerprint.' },
          ],
        },
        nostalgia_scene: {
          title: 'Nostalgia Layer · Old House Dining Room',
          desc: 'The noodles on the table are still steaming, but the wall clock stopped many years ago, as if the whole house refuses to move forward.',
        },
        nostalgia_calendar: {
          title: 'Old Calendar',
          desc: 'The calendar is stopped in August, and the twenty-seventh has been circled twice, once in pen and once in pencil, as if someone was afraid of forgetting.',
          interactions: [
            { label: 'Check the Calendar', desc: 'The number you were never supposed to forget is pinned to 0827.' },
          ],
        },
        nostalgia_box: {
          title: 'Music Box by the Table',
          desc: 'The music box has a four-digit lock, and the inside of the lid faintly reflects a family photo.',
          interactions: [
            { label: 'Enter the Password', desc: 'Use the date from the calendar to open the music box.' },
          ],
        },
        nostalgia_photo: {
          title: 'Dining Table Photo',
          desc: 'There should be four people in the frame, but now only three remain. The missing part has been cut away neatly, and the edge looks like a side profile.',
          interactions: [
            { label: 'Study the Gap', desc: 'One person is missing, and the empty space is exactly your outline.' },
          ],
        },
        nostalgia_player: {
          title: 'Wind-Up Record Player',
          desc: 'The record player is missing one key spring plate. Put it back, and maybe the meal that never finished eating can finally finish its song.',
          interactions: [
            { label: 'Turn the Record Player', desc: 'You stop trying to keep this meal forever and let it play all the way through. When the melody ends, the seal of nostalgia quietly falls into place.' },
          ],
        },
        nostalgia_return: {
          title: 'Back to the Corridor',
          desc: 'The warm air inside slowly fades, and the endless corridor appears again beyond the door.',
          interactions: [
            { label: 'Leave the Old House', desc: 'You do not leave yourself trapped inside that old photograph.' },
          ],
        },
        acceptance_scene: {
          title: 'Acceptance Layer · White Shore with Waves',
          desc: 'The white shore has neither distance nor road back. Every wave seems to ask you the same question.',
        },
        acceptance_pool: {
          title: 'Still Tide Mirror',
          desc: 'The sea surface is like a sheet of glass. It does not reflect the sky, only the hesitation you have not spoken aloud yet.',
          interactions: [
            { label: 'Look at the Water', desc: 'The tide asks: if you wake up, the pain wakes up too. Do you still want to go back?' },
          ],
        },
        acceptance_altar: {
          title: 'Tide Altar',
          desc: 'There is only a tiny keyhole at the center, shaped like something hastily assembled. It is waiting for you to put the fragments back together.',
        },
        acceptance_echo: {
          title: 'White Shore Echo',
          desc: 'Once the altar lights up, the waves stop asking questions and leave only four words, pushed back onto the shore again and again.',
          interactions: [
            { label: 'Listen Carefully', desc: 'Fear, guilt, nostalgia, acceptance.' },
          ],
        },
        acceptance_return: {
          title: 'Back to the Corridor',
          desc: 'The tide parts at your feet, revealing a dry path that leads only back to the corridor.',
          interactions: [
            { label: 'Leave the White Shore', desc: 'You already know which door needs to open last.' },
          ],
        },
        core_scene: {
          title: 'Dream Core',
          desc: 'The last layer has no scenery, only a door, a mirror, and four seals waiting to be restored.',
        },
        core_reflection: {
          title: 'Reflection Before the Door',
          desc: 'The person standing in the black-glass door is not a monster, not another you, only the one who has never wanted to open his eyes.',
          interactions: [
            { label: 'See the Face Clearly', desc: 'The person behind the door is not a monster, only you, unwilling to wake up.' },
          ],
        },
        core_dial: {
          title: 'Four-Seal Wheel',
          desc: 'Fear, guilt, nostalgia, and acceptance are all mixed together on the wheel. Only by admitting their true order will the door open.',
          interactions: [
            { label: 'Restore the Seals', desc: 'Arrange the four seals in the order given by the white shore echo.' },
          ],
        },
        core_exit: {
          title: 'Door of Waking',
          desc: 'The handle finally feels warm. The air outside is no longer dream wind, but the real air of morning.',
          interactions: [
            { label: 'Push the Door and Wake Up', desc: 'This time, you leave yourself no way back.' },
          ],
        },
        core_return: {
          title: 'Back to the Corridor',
          desc: 'If you still want to fill in missing clues, the corridor will let you turn around for a while longer.',
          interactions: [
            { label: 'Return to the Corridor', desc: 'The dream has not fully fallen apart yet, so you still have time to look back.' },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'What you bring out of the dream layers are not objects, but fragments that can rebuild you.',
        },
        memory_thread_item: {
          title: 'Memory Thread',
          desc: 'A gray thread taken from the locker in the fear layer. When pulled tight, it feels like a needle for stitching old wounds shut.',
        },
        glass_talon_item: {
          title: 'Glass Tab',
          desc: 'The thin shard from the recorder is cold at the edges, like an unfinished confession.',
        },
        threaded_talon_item: {
          title: 'Threaded Key',
          desc: 'Once the memory thread wraps around the glass tab, it is no longer a weapon, but a key with one last missing tooth.',
        },
        music_spring_item: {
          title: 'Spring Plate',
          desc: 'The old spring plate from the nostalgia-layer music box still carries a fragment of the unfinished melody.',
        },
        awakening_key_item: {
          title: 'Waking Key',
          desc: 'The three fragments finally lock together. It is less a key for opening doors than proof that you are allowed to wake.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '梦境回廊',
    desc: '四层梦境围绕同一条回廊展开。带回碎片，拼成醒梦钥，再决定自己是否真的愿意醒来。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'corridor_scene',
        title: '梦境回廊',
        desc: '四扇门通往四种情绪。中央那扇无字门没有把手，像在等你把自己拼完整。',
        type: 'text',
        sceneClue: '*corridor_dream',
        scenes: ['*corridor_dream'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'corridor_clock',
            title: '倒走的立钟',
            desc: '钟摆并不报时，只在玻璃罩里一遍遍写着同一句顺序提示。',
            type: 'text',
            scenes: ['*corridor_dream'],
            layout: { direction: 235, distance: 150 },
            interactions: [
              {
                label: '盯住钟摆',
                desc: '先止颤，再落笔，再听曲，最后照见海面上的自己。',
                when: '!#corridor_order_hint',
                addClues: ['#corridor_order_hint'],
              },
            ],
            doneClue: '#corridor_order_hint',
          },
          {
            id: 'corridor_wall',
            title: '起皮墙面',
            desc: '墙皮下像藏着镜子，裂纹在你靠近时慢慢拼成一句话。',
            type: 'text',
            scenes: ['*corridor_dream'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '摸开裂纹',
                desc: '碎片不能永远留在门外。',
                when: '!#corridor_mirror_hint',
                addClues: ['#corridor_mirror_hint'],
              },
            ],
            doneClue: '#corridor_mirror_hint',
          },
          {
            id: 'fear_door',
            title: '恐惧之门',
            desc: '门缝里透出冷白色灯光，还有某种急促而紊乱的滴答声。',
            type: 'text',
            scenes: ['*corridor_dream'],
            layout: { direction: 330, distance: 160 },
            interactions: [
              {
                label: '进入无窗病房',
                desc: '推门后，消毒水味和心电警报一起扑了上来。',
                addClues: ['*fear_ward', '-*corridor_dream'],
              },
            ],
          },
          {
            id: 'guilt_door',
            title: '愧疚之门',
            desc: '门牌被钉成了一块法槌的形状，门后断断续续传来翻卷宗的声音。',
            type: 'text',
            scenes: ['*corridor_dream'],
            layout: { direction: 15, distance: 165 },
            interactions: [
              {
                label: '进入审判庭',
                desc: '你听见法槌落下，门在身后自动关死。',
                addClues: ['*guilt_court', '-*corridor_dream'],
              },
            ],
          },
          {
            id: 'nostalgia_door',
            title: '怀旧之门',
            desc: '门把手温热，像刚有人从里面出来。汤面的香气却让你不敢立刻推门。',
            type: 'text',
            scenes: ['*corridor_dream'],
            layout: { direction: 65, distance: 165 },
            interactions: [
              {
                label: '进入旧宅餐厅',
                desc: '一阵熟悉得近乎残忍的烟火气迎面而来。',
                addClues: ['*nostalgia_home', '-*corridor_dream'],
              },
            ],
          },
          {
            id: 'acceptance_door',
            title: '接纳之门',
            desc: '门后传来潮水声。只有把前三扇门里的东西都带回来，它才肯真正显形。',
            type: 'text',
            scenes: ['*corridor_dream'],
            preClue: ['AND', '#fear_token', '#guilt_token', '#nostalgia_token'],
            layout: { direction: 110, distance: 160 },
            interactions: [
              {
                label: '走向白岸',
                desc: '门后不再是房间，而是一片没有尽头的白色潮滩。',
                addClues: ['*acceptance_shore', '-*corridor_dream'],
              },
            ],
          },
          {
            id: 'awakening_gate',
            title: '无字门',
            desc: '中央那扇门终于不再渗血，门面像一块安静的黑玻璃。',
            type: 'switch',
            scenes: ['*corridor_dream'],
            preClue: '#acceptance_token',
            layout: { direction: 155, distance: 150 },
            interactions: [
              {
                label: '推开无字门',
                desc: '门后只剩下最后一层梦。',
                addClues: ['*core_dream', '-*corridor_dream'],
              },
            ],
          },
        ],
      },
      {
        id: 'fear_scene',
        title: '恐惧层·无窗病房',
        desc: '没有窗，没有出口，连床单下面都像藏着会突然坐起来的东西。',
        type: 'text',
        sceneClue: '*fear_ward',
        scenes: ['*fear_ward'],
        layout: { direction: 320, distance: 250 },
        children: [
          {
            id: 'fear_monitor',
            title: '心电监护屏',
            desc: '心率曲线并不对应病人，而是在固定间隔里闪着 3、1、4 这组数字。',
            type: 'text',
            scenes: ['*fear_ward'],
            layout: { direction: 245, distance: 150 },
            interactions: [
              {
                label: '记下闪烁节奏',
                desc: '心率像被谁故意调成了 3 · 1 · 4 的循环。',
                when: '!#fear_monitor_hint',
                addClues: ['#fear_monitor_hint'],
              },
            ],
            doneClue: '#fear_monitor_hint',
          },
          {
            id: 'fear_locker',
            title: '护士储物柜',
            desc: '储物柜门上有三位数密码盘，缝里卡着一截发灰的线头。',
            type: 'password',
            scenes: ['*fear_ward'],
            preClue: '#fear_monitor_hint',
            layout: { direction: 320, distance: 155 },
            code: '314',
            successClues: ['#fear_locker_open', '#has_memory_thread'],
            doneClue: '#fear_locker_open',
            interactions: [
              {
                label: '输入密码',
                desc: '尝试把监护屏上的数字输进去。',
              },
            ],
          },
          {
            id: 'fear_bed',
            title: '盖着白布的病床',
            desc: '白布下面并没有尸体，只有一处深深凹陷，像有人刚从这里仓皇爬走。',
            type: 'text',
            scenes: ['*fear_ward'],
            layout: { direction: 30, distance: 155 },
            interactions: [
              {
                label: '掀开白布',
                desc: '床底拖痕一路通向门口，像有人一直在逃。',
                when: '!#fear_bed_seen',
                addClues: ['#fear_bed_seen'],
              },
            ],
            doneClue: '#fear_bed_seen',
          },
          {
            id: 'fear_curtain',
            title: '隔帘后的人影',
            desc: '隔帘另一侧缩着一个和你同样高的人影，肩膀一直在发抖。',
            type: 'switch',
            scenes: ['*fear_ward'],
            preClue: '#fear_locker_open',
            layout: { direction: 105, distance: 160 },
            interactions: [
              {
                label: '拉开隔帘',
                desc: '你看到的是缩成一团的自己。你没有再转身逃跑，而是把他扶了起来。',
                when: '!#fear_token',
                addClues: ['#fear_token'],
              },
            ],
            doneClue: '#fear_token',
          },
          {
            id: 'fear_return',
            title: '回到回廊',
            desc: '病房门重新出现在身后，冷白灯光在门缝里慢慢熄下去。',
            type: 'text',
            scenes: ['*fear_ward'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '退回回廊',
                desc: '带着没再躲开的恐惧走回中央回廊。',
                addClues: ['*corridor_dream', '-*fear_ward'],
              },
            ],
          },
        ],
      },
      {
        id: 'guilt_scene',
        title: '愧疚层·审判庭',
        desc: '整座审判庭只亮着被告席上方的一盏灯，而席位上刻着的正是你的名字。',
        type: 'text',
        sceneClue: '*guilt_court',
        scenes: ['*guilt_court'],
        layout: { direction: 15, distance: 260 },
        children: [
          {
            id: 'guilt_docket',
            title: '卷宗台',
            desc: '翻开的卷宗里没有案情，只有一行被红笔反复圈出的流程：雨停，灯灭，门响，落笔。',
            type: 'text',
            scenes: ['*guilt_court'],
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '整理时间线',
                desc: '顺序被记了下来：雨停，灯灭，门响，落笔。',
                when: '!#guilt_sequence_hint',
                addClues: ['#guilt_sequence_hint'],
              },
            ],
            doneClue: '#guilt_sequence_hint',
          },
          {
            id: 'guilt_recorder',
            title: '证物录音笔',
            desc: '录音笔外壳裂开了，屏幕上只有四个残词，必须按正确顺序才能吐出里面卡住的东西。',
            type: 'click-sort',
            scenes: ['*guilt_court'],
            preClue: '#guilt_sequence_hint',
            layout: { direction: 355, distance: 155 },
            sortSymbols: ['落笔', '雨停', '门响', '灯灭'],
            sortSolution: [1, 3, 2, 0],
            successClues: ['#guilt_recorder_fixed', '#has_glass_talon'],
            doneClue: '#guilt_recorder_fixed',
            interactions: [
              {
                label: '重排残词',
                desc: '按卷宗提示，把录音恢复到正确顺序。',
              },
            ],
          },
          {
            id: 'guilt_verdict',
            title: '未签名判决书',
            desc: '纸页上只有最后一句话没有被墨水糊开，像是专门留给你看的。',
            type: 'text',
            scenes: ['*guilt_court'],
            layout: { direction: 55, distance: 150 },
            interactions: [
              {
                label: '读完最后一行',
                desc: '你最难原谅的人一直是自己。',
                when: '!#guilt_letter_seen',
                addClues: ['#guilt_letter_seen'],
              },
            ],
            doneClue: '#guilt_letter_seen',
          },
          {
            id: 'guilt_stamp',
            title: '被告席指印台',
            desc: '指印台上只有一个空位，正好留给最后一个还不肯承认的人。',
            type: 'switch',
            scenes: ['*guilt_court'],
            preClue: '#guilt_recorder_fixed',
            layout: { direction: 110, distance: 155 },
            interactions: [
              {
                label: '按下手印',
                desc: '法槌没有落下。只有你的手印慢慢发亮，愧疚终于停止追着你跑。',
                when: '!#guilt_token',
                addClues: ['#guilt_token'],
              },
            ],
            doneClue: '#guilt_token',
          },
          {
            id: 'guilt_return',
            title: '退回回廊',
            desc: '法院大门重新变回普通木门，只剩下回廊里的钟声在外面等你。',
            type: 'text',
            scenes: ['*guilt_court'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '离开审判庭',
                desc: '带着那枚仍在发热的手印走回回廊。',
                addClues: ['*corridor_dream', '-*guilt_court'],
              },
            ],
          },
        ],
      },
      {
        id: 'nostalgia_scene',
        title: '怀旧层·旧宅餐厅',
        desc: '桌上的面还冒着热气，墙上的时钟却停在很多年前，像整个屋子都拒绝往前走。',
        type: 'text',
        sceneClue: '*nostalgia_home',
        scenes: ['*nostalgia_home'],
        layout: { direction: 65, distance: 260 },
        children: [
          {
            id: 'nostalgia_calendar',
            title: '旧挂历',
            desc: '挂历停在八月，二十七号被钢笔和圆珠笔各圈了一次，像谁怕自己忘记。',
            type: 'text',
            scenes: ['*nostalgia_home'],
            layout: { direction: 285, distance: 150 },
            interactions: [
              {
                label: '翻看挂历',
                desc: '那组最不该忘的数字被钉在了 0827。',
                when: '!#nostalgia_code_hint',
                addClues: ['#nostalgia_code_hint'],
              },
            ],
            doneClue: '#nostalgia_code_hint',
          },
          {
            id: 'nostalgia_box',
            title: '餐边八音盒',
            desc: '八音盒的锁扣是四位数字，盒盖内侧隐约映着一家人的合照。',
            type: 'password',
            scenes: ['*nostalgia_home'],
            preClue: '#nostalgia_code_hint',
            layout: { direction: 350, distance: 155 },
            code: '0827',
            successClues: ['#nostalgia_box_open', '#has_music_spring'],
            doneClue: '#nostalgia_box_open',
            interactions: [
              {
                label: '输入密码',
                desc: '用挂历上的日期打开八音盒。',
              },
            ],
          },
          {
            id: 'nostalgia_photo',
            title: '餐桌合照',
            desc: '相框里本该有四个人，如今只剩三个。缺失处被整齐剪掉，边缘却像人的侧脸。',
            type: 'text',
            scenes: ['*nostalgia_home'],
            layout: { direction: 50, distance: 150 },
            interactions: [
              {
                label: '端详缺口',
                desc: '合照里少了一个人，而那个空缺刚好是你的轮廓。',
                when: '!#nostalgia_photo_seen',
                addClues: ['#nostalgia_photo_seen'],
              },
            ],
            doneClue: '#nostalgia_photo_seen',
          },
          {
            id: 'nostalgia_player',
            title: '发条唱盘',
            desc: '唱盘少了一片关键簧片。装回去以后，也许能把这顿永远没吃完的饭唱完。',
            type: 'switch',
            scenes: ['*nostalgia_home'],
            preClue: '#nostalgia_box_open',
            layout: { direction: 110, distance: 155 },
            interactions: [
              {
                label: '拨动唱盘',
                desc: '你没有再执着于把这一餐永远留住，只是听它完整响完。旋律停下时，怀旧之印轻轻落了下来。',
                when: '!#nostalgia_token',
                addClues: ['#nostalgia_token'],
              },
            ],
            doneClue: '#nostalgia_token',
          },
          {
            id: 'nostalgia_return',
            title: '退回回廊',
            desc: '屋里的热气一点点散去，门外重新露出了那条没有尽头的回廊。',
            type: 'text',
            scenes: ['*nostalgia_home'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '离开旧宅',
                desc: '你没有把自己留在那张旧照片里。',
                addClues: ['*corridor_dream', '-*nostalgia_home'],
              },
            ],
          },
        ],
      },
      {
        id: 'acceptance_scene',
        title: '接纳层·潮声白岸',
        desc: '白色海岸没有远方，也没有来路。每一阵潮声都像在问你同一个问题。',
        type: 'text',
        sceneClue: '*acceptance_shore',
        scenes: ['*acceptance_shore'],
        layout: { direction: 110, distance: 250 },
        children: [
          {
            id: 'acceptance_pool',
            title: '平潮镜面',
            desc: '海面像一块铺开的镜子，没有倒映天空，只倒映你还没说出口的犹豫。',
            type: 'text',
            scenes: ['*acceptance_shore'],
            layout: { direction: 265, distance: 150 },
            interactions: [
              {
                label: '看向水面',
                desc: '潮水问你：醒来以后，痛苦也会一起醒来，你还要回去吗？',
                when: '!#acceptance_mirror_seen',
                addClues: ['#acceptance_mirror_seen'],
              },
            ],
            doneClue: '#acceptance_mirror_seen',
          },
          {
            id: 'acceptance_altar',
            title: '潮汐祭台',
            desc: '祭台中央只有一个细小锁孔，形状像某种临时拼成的钥匙。它在等你把碎片真正装回去。',
            type: 'switch',
            scenes: ['*acceptance_shore'],
            preClue: '#awakening_key_ready',
            layout: { direction: 350, distance: 160 },
            doneClue: '#acceptance_token',
          },
          {
            id: 'acceptance_echo',
            title: '白岸回声',
            desc: '祭台亮起后，海浪不再追问，只剩下四个被反复推回岸边的词。',
            type: 'text',
            scenes: ['*acceptance_shore'],
            preClue: '#acceptance_token',
            layout: { direction: 65, distance: 155 },
            interactions: [
              {
                label: '听清回声',
                desc: '恐惧、愧疚、怀旧、接纳。',
                when: '!#core_order_hint',
                addClues: ['#core_order_hint'],
              },
            ],
            doneClue: '#core_order_hint',
          },
          {
            id: 'acceptance_return',
            title: '回到回廊',
            desc: '潮水在你脚边分开，露出一条只通回廊的干燥道路。',
            type: 'text',
            scenes: ['*acceptance_shore'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '离开白岸',
                desc: '你已经知道最后该把哪扇门推开。',
                addClues: ['*corridor_dream', '-*acceptance_shore'],
              },
            ],
          },
        ],
      },
      {
        id: 'core_scene',
        title: '梦核',
        desc: '最后一层梦没有景物，只有一扇门、一面镜和四枚等待归位的印记。',
        type: 'text',
        sceneClue: '*core_dream',
        scenes: ['*core_dream'],
        layout: { direction: 160, distance: 255 },
        children: [
          {
            id: 'core_reflection',
            title: '门前倒影',
            desc: '黑玻璃门里站着的不是怪物，也不是另一个你，只是那个一直不愿睁眼的人。',
            type: 'text',
            scenes: ['*core_dream'],
            layout: { direction: 255, distance: 150 },
            interactions: [
              {
                label: '看清那张脸',
                desc: '门后的那个人不是怪物，只是迟迟不肯醒来的你。',
                when: '!#core_truth_seen',
                addClues: ['#core_truth_seen'],
              },
            ],
            doneClue: '#core_truth_seen',
          },
          {
            id: 'core_dial',
            title: '四印转盘',
            desc: '恐惧、愧疚、怀旧、接纳四枚印记被打乱嵌在转盘里。只有承认它们真正的先后，门才会开。',
            type: 'click-sort',
            scenes: ['*core_dream'],
            preClue: '#core_order_hint',
            layout: { direction: 350, distance: 160 },
            sortSymbols: ['怀旧', '接纳', '恐惧', '愧疚'],
            sortSolution: [2, 3, 0, 1],
            successClues: ['#core_solved', '#gate_open'],
            doneClue: '#core_solved',
            interactions: [
              {
                label: '归位印记',
                desc: '按白岸回声给出的顺序排列四枚印记。',
              },
            ],
          },
          {
            id: 'core_exit',
            title: '醒来的门',
            desc: '门把手终于有了温度。外面吹来的不再是梦里的风，而是真正清晨的空气。',
            type: 'text',
            scenes: ['*core_dream'],
            preClue: '#gate_open',
            layout: { direction: 70, distance: 160 },
            interactions: [
              {
                label: '推门醒来',
                desc: '这一次，你没有再给自己留下退路。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'core_return',
            title: '退回回廊',
            desc: '如果你还想补全遗漏的线索，回廊仍然允许你暂时转身。',
            type: 'text',
            scenes: ['*core_dream'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '返回回廊',
                desc: '梦还没完全塌掉，你还有回头的时间。',
                addClues: ['*corridor_dream', '-*core_dream'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '带出梦层的不是实体，而是能重新拼出自我的碎片。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'memory_thread_item',
            title: '记忆线',
            desc: '从恐惧层储物柜里取出的灰线，拉紧后像缝合旧伤口用的细针。',
            type: 'item',
            preClue: ['AND', '#has_memory_thread', '!#threaded_talon_ready'],
            combineWith: [
              {
                targetId: 'glass_talon_item',
                addClues: ['#threaded_talon_ready'],
              },
            ],
          },
          {
            id: 'glass_talon_item',
            title: '玻璃签',
            desc: '愧疚层录音笔里吐出的薄玻璃，边缘冷得像一句没说完的供词。',
            type: 'item',
            preClue: ['AND', '#has_glass_talon', '!#threaded_talon_ready'],
            combineWith: [
              {
                targetId: 'memory_thread_item',
                addClues: ['#threaded_talon_ready'],
              },
            ],
          },
          {
            id: 'threaded_talon_item',
            title: '缠线细钥',
            desc: '记忆线缠住玻璃签以后，它终于不再像武器，而像一把还缺最后一个齿位的钥匙。',
            type: 'item',
            preClue: ['AND', '#threaded_talon_ready', '!#awakening_key_ready'],
            combineWith: [
              {
                targetId: 'music_spring_item',
                addClues: ['#awakening_key_ready'],
              },
            ],
          },
          {
            id: 'music_spring_item',
            title: '发条簧片',
            desc: '怀旧层八音盒里的老簧片，轻轻一拨，还残留着一段没播完的旋律。',
            type: 'item',
            preClue: ['AND', '#has_music_spring', '!#awakening_key_ready'],
            combineWith: [
              {
                targetId: 'threaded_talon_item',
                addClues: ['#awakening_key_ready'],
              },
            ],
          },
          {
            id: 'awakening_key_item',
            title: '醒梦钥',
            desc: '三件碎片终于咬合成形。它不像打开门的钥匙，更像允许你醒来的证明。',
            type: 'item',
            preClue: ['AND', '#awakening_key_ready', '!#acceptance_token'],
            itemUse: {
              targetIds: ['acceptance_altar'],
              addClues: ['#acceptance_token'],
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
        '#corridor_order_hint',
        '#corridor_mirror_hint',
        '#fear_monitor_hint',
        '#fear_bed_seen',
        '#fear_token',
        '#guilt_sequence_hint',
        '#guilt_letter_seen',
        '#guilt_token',
        '#nostalgia_code_hint',
        '#nostalgia_photo_seen',
        '#nostalgia_token',
        '#acceptance_mirror_seen',
        '#acceptance_token',
        '#core_truth_seen',
        '#core_solved',
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
