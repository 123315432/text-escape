import type { Mission } from '../../core/types'

export const timeloopMission: Mission = {
  id: 'timeloop',
  title: '时间循环旅馆',
  subtitle: '1930年代上海，同一个夜晚，三次轮回',
  intro:
    '民国二十四年夏夜，暴雨封住了华懋旅馆的门。午夜枪响一次次重演，而你每次都在大堂醒来。想活着离开，只能把三次轮回里留下的记忆拼成一把钥匙。',
  timeLimitMs: 90 * 60 * 1000,
  initialClues: ['*lobby', '#phase1'],
  bgmScenes: {
    '*lobby': '/audio/bgm/hall.mp3',
    '*corridor': '/audio/bgm/rain.mp3',
    '*clock_room': '/audio/bgm/thunder.mp3',
  },
  clueMessages: {
    '*lobby': '— 旅馆大堂 —',
    '*corridor': '— 三楼走廊 —',
    '*clock_room': '— 钟房 —',
    '#register_read': '房簿写着：白小姐在 314 房。',
    '#clock_stopped_read': '落地钟停在了 11:47。',
    '#song_list_read': '歌单顺序记住了：红灯在白蝶之前。',
    '#trunk_opened': '314 房皮箱打开了。',
    '#has_brass_half': '拿到了黄铜钥匙半片。',
    '#bell_before_gun': '你记住了：第三声钟后才有枪响。',
    '#staff_note_read': '红墨批注提到：另一半钥匙在唱片箱里。',
    '#has_steel_half': '拿到了钢制钥匙半片。',
    '#phone_warning_heard': '总机残音只剩一句：蝶后有雨。',
    '#master_key_ready': '两枚半片拼成了总钥匙。',
    '#cabinet_keyhole_known': '你看清了控制柜上的异形锁孔。',
    '#clock_reset_truth': '循环的源头，就是被人改过的报时机关。',
    '#killer_identity_known': '你确认了红墨批注和经理签字出自同一只手。',
    '#cabinet_unlocked': '钟房控制柜开了。',
    '#loop_broken': '报时顺序被改写，循环开始松动。',
    '#victim_saved': '楼下没有再传来那一声枪响。',
  },
  translations: {
    en: {
      title: 'Time Loop Hotel',
      subtitle: '1930s Shanghai, one night repeated across three loops',
      intro:
        'On a summer night in 1935, rain seals the doors of the Cathay Hotel. A gunshot at midnight plays over and over, and every time you wake back up in the lobby. If you want to survive, you will have to turn the memories left behind across three loops into a single key.',
      clueMessages: {
        '*lobby': '— Hotel Lobby —',
        '*corridor': '— Third-Floor Corridor —',
        '*clock_room': '— Clock Room —',
        '#register_read': 'The register says Miss Bai is staying in room 314.',
        '#clock_stopped_read': 'The standing clock stopped at 11:47.',
        '#song_list_read': 'You remember the song order: Red Lantern comes before White Butterfly.',
        '#trunk_opened': 'The suitcase in room 314 has opened.',
        '#has_brass_half': 'You obtained the brass half of a key.',
        '#bell_before_gun': 'You learned that the gunshot comes only after the third bell.',
        '#staff_note_read': 'A red-ink annotation says the other half of the key is in the record box.',
        '#has_steel_half': 'You obtained the steel half of the key.',
        '#phone_warning_heard': 'The switchboard leaves only one fragment of warning: after the butterfly comes rain.',
        '#master_key_ready': 'The two halves now form a master key.',
        '#cabinet_keyhole_known': 'You got a clear look at the unusual keyhole on the control cabinet.',
        '#clock_reset_truth': 'The source of the loop is the tampered chime mechanism.',
        '#killer_identity_known': 'You confirmed that the red annotation and the manager\'s signature were written by the same hand.',
        '#cabinet_unlocked': 'The control cabinet in the clock room is open.',
        '#loop_broken': 'The chime order has been rewritten. The loop is beginning to loosen.',
        '#victim_saved': 'No gunshot rises from below this time.',
      },
      endings: {
        normal: {
          title: 'Escape',
          body: 'You finally left the Cathay Hotel, and for the first time midnight did not drag you back into the lobby. But the rain-soaked night still concealed debts you never fully uncovered.',
        },
        perfect: {
          title: 'Perfect Escape',
          body: 'You pieced together every fragment left behind by the three loops, rewrote the chime mechanism, and stopped the gunshot. Before dawn, the whole hotel gave up its truth at last.',
        },
        timeout: {
          title: 'Loop Reset',
          body: 'Before you could reach the clock room, midnight arrived on schedule again. Gunshot, rain, and bells folded over one another, and you opened your eyes in the lobby as if nothing had happened.',
        },
      },
      nodes: {
        root: {
          title: 'Time Loop Hotel',
          desc: 'The same hotel and the same midnight. Each reset wipes the scene clean, but it cannot erase what you remember.',
        },
        lobby: {
          title: 'Hotel Lobby',
          desc: 'The front desk, bandstand, and staircase to the third floor still hold the false calm of the moment before midnight.',
        },
        lobby_register_p1: {
          title: 'Front Desk Register',
          desc: 'A leather register lies open on the desk. Miss Bai\'s line has been circled over and over in red ink.',
          interactions: [
            {
              label: 'Read the Register',
              desc: 'Confirm which room tonight\'s victim is staying in.',
            },
          ],
        },
        lobby_clock_p1: {
          title: 'Standing Clock',
          desc: 'Its brass pendulum still sways, but the minute hand has been forced to stop at a single moment.',
          interactions: [
            {
              label: 'Check the Dial',
              desc: 'Memorize the frozen time.',
            },
          ],
        },
        lobby_stage_p1: {
          title: 'Bandstand Set List',
          desc: 'The jazz band has already left, but Miss Bai\'s encore set list still sits clipped to the music stand.',
          interactions: [
            {
              label: 'Read the Set List',
              desc: 'Memorize the unusual order of the two songs.',
            },
          ],
        },
        lobby_register_p2: {
          title: 'Front Desk Register',
          desc: 'The second time you return here, you spot a subtler red-ink note hidden in the margin at once.',
          interactions: [
            {
              label: 'Study the Note',
              desc: 'Read the line deliberately pressed into the page fold.',
            },
          ],
        },
        lobby_stage_p2: {
          title: 'Record Box',
          desc: 'Behind the gramophone base is a flat wooden box just large enough to hide a strangely shaped piece of metal.',
          interactions: [
            {
              label: 'Search the Record Box',
              desc: 'Take the metal half hidden beneath the records.',
            },
          ],
        },
        lobby_switchboard_p2: {
          title: 'Switchboard',
          desc: 'Rain drips through the window frame onto the switchboard, and the line to room 314 still spits intermittent noise.',
          interactions: [
            {
              label: 'Listen to the Static',
              desc: 'Catch the rest of Miss Bai\'s unfinished warning.',
            },
          ],
        },
        lobby_register_p3: {
          title: 'Front Desk Register',
          desc: 'By the third return, the resemblance between the red note and the manager\'s signature is impossible to ignore.',
          interactions: [
            {
              label: 'Compare the Handwriting',
              desc: 'Link the note, the signature, and the figure you saw in the clock room.',
            },
          ],
        },
        lobby_to_corridor: {
          title: 'Stairway to the Third Floor',
          desc: 'Room 314 waits upstairs. No matter how many times the night resets, these steps still lead toward the same answer.',
          interactions: [
            {
              label: 'Go Upstairs',
              desc: 'Head for the corridor outside room 314.',
            },
          ],
        },
        corridor: {
          title: 'Third-Floor Corridor',
          desc: 'Room 314 stands at the end of the hall, and the rain awning outside looks down toward the side door of the stage below.',
        },
        corridor_room314: {
          title: 'Suitcase in Room 314',
          desc: 'The door is ajar. A four-digit lock hangs from the suitcase by the bed, as though the answer was left for someone who knew they would return.',
          interactions: [
            {
              label: 'Enter the Code',
              desc: 'Use the room number and the frozen clock time to test the correct four digits.',
            },
          ],
        },
        corridor_balcony_p1: {
          title: 'Rain Awning',
          desc: 'Lean out through the window frame and you can see both the side stage door below and the window toward the clock tower.',
          interactions: [
            {
              label: 'Look Down',
              desc: 'Learn exactly when the midnight gunshot happens.',
            },
          ],
        },
        corridor_service_lift: {
          title: 'Clock Room Service Lift',
          desc: 'A small freight lift at the end of the hall normally hauls oil to the clock room. Now it is the shortest path to the source of the loop.',
          interactions: [
            {
              label: 'Take the Lift Up',
              desc: 'Follow Miss Bai\'s warning to the core of the chime machinery.',
            },
          ],
        },
        corridor_return: {
          title: 'Return to the Lobby',
          desc: 'The stairwell is still behind you. You can always go back and finish any clue you missed.',
          interactions: [
            {
              label: 'Go Back Down',
              desc: 'Return to the ground floor by the stairs.',
            },
          ],
        },
        clock_room: {
          title: 'Clock Room',
          desc: 'Gears, chime cams, and a bank of linked levers are packed into this narrow room. This is where midnight was tampered with.',
        },
        clock_cabinet_p2: {
          title: 'Clock Control Cabinet',
          desc: 'The cabinet keyhole looks like two asymmetric metal halves joined together, and the chime cam inside bears fresh grind marks.',
          interactions: [
            {
              label: 'Inspect the Keyhole',
              desc: 'Confirm that this cabinet does not take an ordinary key.',
            },
          ],
        },
        clock_window_p2: {
          title: 'Observation Slit',
          desc: 'Looking through the slit, you can see both the side stage door below and the shadow cast on the outer wall of the clock tower.',
          interactions: [
            {
              label: 'Look Down from Above',
              desc: 'See who is using the bells and lights to force the night back into reset.',
            },
          ],
        },
        clock_cabinet_p3: {
          title: 'Clock Control Cabinet',
          desc: 'By the third visit, you already understand why the keyhole and the broken key halves share the same shape.',
        },
        clock_console: {
          title: 'Chime Lever Bank',
          desc: 'Four levers are marked Bell, Light, Butterfly, and Rain. Only the right order keeps the hotel from being dragged back to midnight again.',
          sortSymbols: ['Bell', 'Light', 'Butterfly', 'Rain'],
          interactions: [
            {
              label: 'Reorder the Chimes',
              desc: 'Use what you learned across three loops to rewrite the sequence.',
            },
          ],
        },
        clock_brake: {
          title: 'Emergency Brake',
          desc: 'Once the loop begins to loosen, this brake can delay the gunshot below forever.',
          interactions: [
            {
              label: 'Pull the Brake',
              desc: 'Bring the tampered chime chain to a complete stop.',
            },
          ],
        },
        clock_exit: {
          title: 'Outer Iron Ladder',
          desc: 'The gunshot never comes, and the hotel is quiet for the first real time. The ladder down the outside wall leads into a night that will not repeat.',
          interactions: [
            {
              label: 'Leave the Hotel',
              desc: 'Climb down the iron ladder and escape with the first true midnight this place has seen.',
            },
          ],
        },
        clock_return: {
          title: 'Return to the Corridor',
          desc: 'If there is still evidence missing, you can always ride the lift back to the third floor.',
          interactions: [
            {
              label: 'Return to the Corridor',
              desc: 'Ride the service lift back to the third floor.',
            },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Only a few strange objects can survive the reset along with your memory.',
        },
        brass_half_item: {
          title: 'Brass Key Half',
          desc: 'Recovered from the suitcase in room 314. Its jagged edge looks as though it was made to lock into another half.',
        },
        steel_half_item: {
          title: 'Steel Key Half',
          desc: 'Hidden in the record box near the stage. Its shape perfectly complements the brass half.',
        },
        master_key_item: {
          title: 'Hotel Master Key',
          desc: 'The two strange halves form a complete master key that matches the cabinet in the clock room exactly.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '时间循环旅馆',
    desc: '同一座旅馆，同一个午夜。每次重置都会洗掉现场，却洗不掉你留下的记忆。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'lobby',
        title: '旅馆大堂',
        desc: '前台、舞台和通往三楼的楼梯都还维持着午夜前的平静。',
        type: 'text',
        sceneClue: '*lobby',
        scenes: ['*lobby'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'lobby_register_p1',
            title: '前台房簿',
            desc: '皮面房簿摊在前台，白小姐那一行被人用红墨重重圈了起来。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: '#phase1',
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '翻阅房簿',
                desc: '确认今晚出事的人住在哪一间。',
                addClues: ['#register_read'],
              },
            ],
            doneClue: '#register_read',
          },
          {
            id: 'lobby_clock_p1',
            title: '落地钟',
            desc: '铜摆还在轻晃，分针却像被人强行扯停在某个时刻。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: '#phase1',
            layout: { direction: 270, distance: 150 },
            interactions: [
              {
                label: '查看表盘',
                desc: '记下停住的时间。',
                addClues: ['#clock_stopped_read'],
              },
            ],
            doneClue: '#clock_stopped_read',
          },
          {
            id: 'lobby_stage_p1',
            title: '小舞台歌单',
            desc: '爵士乐队已经散场，谱架上还夹着白小姐今晚的返场歌单。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: '#phase1',
            layout: { direction: 315, distance: 150 },
            interactions: [
              {
                label: '看歌单',
                desc: '把顺序异常的那两首记下来。',
                addClues: ['#song_list_read'],
              },
            ],
            doneClue: '#song_list_read',
          },
          {
            id: 'lobby_register_p2',
            title: '前台房簿',
            desc: '第二次回到这里后，你一眼就看见了页边那道更隐蔽的红墨批注。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: ['OR', '#phase2', '#phase3'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '细看批注',
                desc: '读出被故意压在页缝里的那行字。',
                addClues: ['#staff_note_read'],
              },
            ],
            doneClue: '#staff_note_read',
          },
          {
            id: 'lobby_stage_p2',
            title: '舞台唱片箱',
            desc: '留声机底座后方藏着一只扁平木盒，正好能塞下一片异形钥匙。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: ['AND', ['OR', '#phase2', '#phase3'], '#staff_note_read'],
            layout: { direction: 315, distance: 150 },
            interactions: [
              {
                label: '翻找唱片箱',
                desc: '把藏在黑胶唱片下面的金属半片取出来。',
                addClues: ['#has_steel_half'],
              },
            ],
            doneClue: '#has_steel_half',
          },
          {
            id: 'lobby_switchboard_p2',
            title: '总机接线板',
            desc: '雨水顺着窗缝滴到接线板上，314 房的线路仍在断断续续地吐出杂音。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: ['OR', '#phase2', '#phase3'],
            layout: { direction: 270, distance: 150 },
            interactions: [
              {
                label: '监听残音',
                desc: '把白小姐没说完的提醒听完整。',
                addClues: ['#phone_warning_heard'],
              },
            ],
            doneClue: '#phone_warning_heard',
          },
          {
            id: 'lobby_register_p3',
            title: '前台房簿',
            desc: '第三次回到大堂时，红墨批注和经理签字已经再明显不过了。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: '#phase3',
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '对比笔迹',
                desc: '把批注、签字和你在钟房看到的人影串起来。',
                addClues: ['#killer_identity_known'],
              },
            ],
            doneClue: '#killer_identity_known',
          },
          {
            id: 'lobby_to_corridor',
            title: '通往三楼的楼梯',
            desc: '314 房就在楼上。无论轮回重来多少次，这截楼梯都指向同一个答案。',
            type: 'text',
            scenes: ['*lobby'],
            preClue: '#register_read',
            layout: { direction: 15, distance: 165 },
            interactions: [
              {
                label: '上三楼',
                desc: '前往 314 房外的走廊。',
                addClues: ['*corridor', '-*lobby'],
              },
            ],
          },
        ],
      },
      {
        id: 'corridor',
        title: '三楼走廊',
        desc: '长廊尽头是 314 房，雨棚外侧正对着楼下的舞台侧门。',
        type: 'text',
        sceneClue: '*corridor',
        scenes: ['*corridor'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'corridor_room314',
            title: '314 房皮箱',
            desc: '房门虚掩着，床边皮箱挂着四位数字锁，像是故意把答案留给会回来的人。',
            type: 'password',
            scenes: ['*corridor'],
            preClue: ['AND', '#register_read', '#clock_stopped_read'],
            layout: { direction: 315, distance: 150 },
            code: '3147',
            successClues: ['#trunk_opened', '#has_brass_half'],
            doneClue: '#trunk_opened',
            interactions: [
              {
                label: '输入密码',
                desc: '用房号和停表时刻试出正确四位数。',
              },
            ],
          },
          {
            id: 'corridor_balcony_p1',
            title: '外侧雨棚',
            desc: '翻出窗框后，你能正好看见楼下舞台侧门和钟楼方向的窗口。',
            type: 'text',
            scenes: ['*corridor'],
            preClue: ['AND', '#phase1', '#trunk_opened'],
            layout: { direction: 30, distance: 155 },
            interactions: [
              {
                label: '探身观察',
                desc: '看清午夜那一枪究竟在什么时候响起。',
                addClues: ['#bell_before_gun', '#phase2', '-#phase1', '*lobby'],
              },
            ],
            doneClue: '#bell_before_gun',
          },
          {
            id: 'corridor_service_lift',
            title: '钟房货梯',
            desc: '走廊尽头的小货梯平时只给钟房送机油。现在，它是离循环源头最近的路。',
            type: 'text',
            scenes: ['*corridor'],
            preClue: ['AND', ['OR', '#phase2', '#phase3'], '#phone_warning_heard'],
            layout: { direction: 65, distance: 165 },
            interactions: [
              {
                label: '乘货梯上钟房',
                desc: '顺着白小姐留下的提醒，去报时机关的核心位置。',
                addClues: ['*clock_room', '-*corridor'],
              },
            ],
          },
          {
            id: 'corridor_return',
            title: '退回大堂',
            desc: '楼梯口还在身后，随时可以回到大堂补全遗漏的线索。',
            type: 'text',
            scenes: ['*corridor'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '返回大堂',
                desc: '沿楼梯回到底层。',
                addClues: ['*lobby', '-*corridor'],
              },
            ],
          },
        ],
      },
      {
        id: 'clock_room',
        title: '钟房',
        desc: '齿轮、报时凸轮和一排联动拉杆挤在狭窄屋里。这里就是午夜被篡改的地方。',
        type: 'text',
        sceneClue: '*clock_room',
        scenes: ['*clock_room'],
        layout: { direction: 0, distance: 260 },
        children: [
          {
            id: 'clock_cabinet_p2',
            title: '钟房控制柜',
            desc: '控制柜锁孔像两片不对称金属拼在一起，里面的报时凸轮带着新鲜磨痕。',
            type: 'switch',
            scenes: ['*clock_room'],
            preClue: '#phase2',
            layout: { direction: 300, distance: 150 },
            interactions: [
              {
                label: '检查锁孔',
                desc: '确认这里需要的并不是普通钥匙。',
                addClues: ['#cabinet_keyhole_known'],
              },
            ],
            doneClue: '#cabinet_keyhole_known',
          },
          {
            id: 'clock_window_p2',
            title: '狭窄观察窗',
            desc: '从窗缝看下去，能同时看见楼下舞台侧门和钟楼外墙的影子。',
            type: 'text',
            scenes: ['*clock_room'],
            preClue: ['AND', '#phase2', '#cabinet_keyhole_known'],
            layout: { direction: 25, distance: 150 },
            interactions: [
              {
                label: '俯视楼下',
                desc: '确认是谁在利用钟声和灯光制造这一轮又一轮的重置。',
                addClues: ['#clock_reset_truth', '#phase3', '-#phase2', '*lobby'],
              },
            ],
            doneClue: '#clock_reset_truth',
          },
          {
            id: 'clock_cabinet_p3',
            title: '钟房控制柜',
            desc: '第三次站到这里时，你已经知道锁孔和半片钥匙为什么会长成同一个形状。',
            type: 'switch',
            scenes: ['*clock_room'],
            preClue: ['AND', '#phase3', '#cabinet_keyhole_known'],
            layout: { direction: 300, distance: 150 },
            doneClue: '#cabinet_unlocked',
          },
          {
            id: 'clock_console',
            title: '报时拉杆组',
            desc: '四根拉杆分别刻着钟、灯、蝶、雨。只有把触发顺序排对，整座旅馆才不会再被拖回午夜。',
            type: 'click-sort',
            scenes: ['*clock_room'],
            preClue: '#cabinet_unlocked',
            layout: { direction: 0, distance: 150 },
            sortSymbols: ['钟', '灯', '蝶', '雨'],
            sortSolution: [0, 1, 2, 3],
            successClues: ['#loop_broken'],
            doneClue: '#loop_broken',
            interactions: [
              {
                label: '重排报时',
                desc: '按三次轮回里拼出来的顺序改写机关。',
              },
            ],
          },
          {
            id: 'clock_brake',
            title: '紧急制动杆',
            desc: '只要循环一松动，这根制动杆就能让楼下那一枪永远迟到。',
            type: 'switch',
            scenes: ['*clock_room'],
            preClue: '#loop_broken',
            layout: { direction: 45, distance: 165 },
            interactions: [
              {
                label: '拉下制动杆',
                desc: '让被篡改的报时链彻底停下来。',
                addClues: ['#victim_saved'],
              },
            ],
            doneClue: '#victim_saved',
          },
          {
            id: 'clock_exit',
            title: '外墙铁梯',
            desc: '枪声没有响起，旅馆第一次真正安静下来。沿铁梯下去，就是不再重来的那一夜。',
            type: 'text',
            scenes: ['*clock_room'],
            preClue: '#victim_saved',
            layout: { direction: 85, distance: 195 },
            interactions: [
              {
                label: '离开旅馆',
                desc: '沿外墙铁梯逃离钟房，带着这次真正的午夜一起离开。',
                addClues: ['@escape'],
              },
            ],
          },
          {
            id: 'clock_return',
            title: '退回走廊',
            desc: '如果还有证据没补齐，可以沿货梯回三楼走廊。',
            type: 'text',
            scenes: ['*clock_room'],
            preClue: ['OR', '#phase2', '#phase3'],
            layout: { direction: 180, distance: 170 },
            interactions: [
              {
                label: '返回走廊',
                desc: '沿货梯退回三楼。',
                addClues: ['*corridor', '-*clock_room'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '只有少数异物能和记忆一起穿过重置。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'brass_half_item',
            title: '黄铜钥匙半片',
            desc: '从 314 房皮箱里找到，边缘缺口像专门留给另一半去咬合。',
            type: 'item',
            preClue: ['AND', '#has_brass_half', '!#master_key_ready'],
            combineWith: [
              {
                targetId: 'steel_half_item',
                addClues: ['#master_key_ready'],
              },
            ],
          },
          {
            id: 'steel_half_item',
            title: '钢制钥匙半片',
            desc: '藏在舞台唱片箱里，尺寸和黄铜半片刚好互补。',
            type: 'item',
            preClue: ['AND', '#has_steel_half', '!#master_key_ready'],
            combineWith: [
              {
                targetId: 'brass_half_item',
                addClues: ['#master_key_ready'],
              },
            ],
          },
          {
            id: 'master_key_item',
            title: '旅馆总钥匙',
            desc: '两片异形钥匙拼成一把完整的总钥匙，正好对应钟房控制柜的锁孔。',
            type: 'item',
            preClue: '#master_key_ready',
            itemUse: {
              targetIds: ['clock_cabinet_p3'],
              when: '#phase3',
              addClues: ['#cabinet_unlocked'],
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
        '#register_read',
        '#clock_stopped_read',
        '#song_list_read',
        '#trunk_opened',
        '#bell_before_gun',
        '#staff_note_read',
        '#phone_warning_heard',
        '#cabinet_keyhole_known',
        '#clock_reset_truth',
        '#killer_identity_known',
        '#victim_saved',
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
