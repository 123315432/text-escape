import type { Mission } from '../../core/types'

export const archiveMission: Mission = {
  id: 'archive',
  title: '档案室·焚毁之前',
  subtitle: '战时情报·交叉比对·双面间谍',
  intro: '1940年代，档案馆的情报文件正在被焚毁。你要在灰烬之前，交叉比对幸存的文件，找到隐藏在其中的真相。',
  timeLimitMs: 100 * 60 * 1000,
  initialClues: ['*main_hall_archive'],
  bgmScenes: {
    '*main_hall_archive': '/audio/bgm/hall.mp3',
    '*restoration_lab': '/audio/bgm/rain.mp3',
    '*furnace_corridor': '/audio/bgm/corridor.mp3',
  },
  clueMessages: {
    '*main_hall_archive': '— 主档案厅 — 成排铁柜之间飘着焦纸味，焚毁铃随时会再次响起。',
    '*restoration_lab': '— 修复室 — 冷白灯管照着光箱与拼贴板，空气里混着药水和纸灰。',
    '*furnace_corridor': '— 焚化走廊 — 炉门轰鸣，最后一批卷宗正沿着传送轨滑向火口。',
    '#burn_notice_read': '你记住了那句关键批注：按最终焚毁次序逆序开柜。',
    '#route_map_read': '四个接头点的红线顺序已经记下：港口 → 电台 → 医院 → 领馆。',
    '#catalog_index_read': '借阅卡背面的四个数字抄下来了：7、3、1、9。',
    '#drawer_opened': '密码柜弹开了，里面还剩两样没来得及烧掉的东西。',
    '#has_index_card': '拿到了打孔索引卡。',
    '#has_seal_half_a': '拿到了半枚馆长印鉴。',
    '#reel_code_seen': '打孔卡贴上光箱，显出了新的四位编号：4826。',
    '#ash_sequence_hint': '灰盘残页说明：把接头报告按地图上的红线顺序钉回去。',
    '#comparison_solved': '拼贴板上的四份报告复原了，夹层里藏着一卷微缩胶卷。',
    '#has_microfilm_reel': '拿到了微缩胶卷。',
    '#cabinet_opened': '冷藏柜的锁退开了。',
    '#has_seal_half_b': '拿到了另一半馆长印鉴。',
    '#has_viewer_lens': '找到了一枚手摇阅片镜头。',
    '#director_memo_read': '备忘写得很明白：双半印鉴可开启走廊停炉柜。',
    '#director_seal_ready': '两半印鉴严丝合缝，已经能当完整钥印使用。',
    '#microfilm_read': '胶卷里的调档记录指向代号“黑鹭”。',
    '#double_agent_identified': '你确认双面间谍的行动链与焚毁批次有关。',
    '#dispatch_board_read': '派送板把“黑鹭”对应到了副馆员韩秋。',
    '#override_unsealed': '停炉柜的封印已经被馆长印鉴打开。',
    '#furnace_stopped': '急停杆被拉下，传送轨和炉门同时停住了。',
    '#proof_secured': '你从火口前抽出了最后一份未焚原卷。',
  },
  endings: {
    normal: {
      title: '带卷脱身',
      body: '你赶在焚化炉彻底吞掉证据前带着卷宗离开了档案馆。可你只抓到了代号“黑鹭”，真正的人已经趁混乱消失在疏散队伍里。',
    },
    perfect: {
      title: '黑鹭落网',
      body: '你用路线图、馆长备忘和派送板把“黑鹭”锁定为副馆员韩秋，并带走了未焚原卷。第二天清晨，这条战时情报投递线被整条拔起。',
    },
    timeout: {
      title: '纸灰无证',
      body: '焚化走廊重新轰鸣，最后的原卷在你面前卷成灰雪。你知道真相曾离你只差一步，但再也拼不回来了。',
    },
  },
  translations: {
    en: {
      title: 'Archive Room: Before the Burn',
      subtitle: 'Wartime intelligence, cross-checks, and a double-agent twist',
      intro: 'In the 1940s, intelligence files inside the archive are being burned. Before the ash falls, you must cross-check the surviving records and uncover the truth hidden in them.',
      clueMessages: {
        '*main_hall_archive': '— Main Archive Hall — The smell of scorched paper hangs between rows of steel cabinets, and the burn bell could ring again at any moment.',
        '*restoration_lab': '— Restoration Room — Cold white lamps shine on the light box and collage board, while chemicals and paper ash mix in the air.',
        '*furnace_corridor': '— Furnace Corridor — The furnaces roar as the last batch of files rides the conveyor toward the fire mouth.',
        '#burn_notice_read': 'You memorized the key note: open the cabinets in reverse of the final burn order.',
        '#route_map_read': 'The red-line sequence of the four contact points is memorized: port → radio → hospital → consulate.',
        '#catalog_index_read': 'The four digits on the back of the library card are copied down: 7, 3, 1, 9.',
        '#drawer_opened': 'The password cabinet popped open. Two things were left inside that had not been burned yet.',
        '#has_index_card': 'You obtained a punched index card.',
        '#has_seal_half_a': 'You obtained half of the director\'s seal.',
        '#reel_code_seen': 'When the punched card is placed on the light box, a new four-digit number appears: 4826.',
        '#ash_sequence_hint': 'The ash-pan fragment says to pin the liaison reports back in the red-line order on the map.',
        '#comparison_solved': 'The four reports on the collage board are restored, and a microfilm reel is hidden in the layer between them.',
        '#has_microfilm_reel': 'You obtained the microfilm reel.',
        '#cabinet_opened': 'The lock on the cold cabinet released.',
        '#has_seal_half_b': 'You obtained the other half of the director\'s seal.',
        '#has_viewer_lens': 'You found a hand-crank viewer lens.',
        '#director_memo_read': 'The memo is blunt: the corridor furnace cabinet can only be opened with the two halves of the director\'s seal together.',
        '#director_seal_ready': 'The two halves fit perfectly and can now be used as a complete seal.',
        '#microfilm_read': 'The filing records on the film point to the codename “Black Egret.”',
        '#double_agent_identified': 'You confirm that the double agent\'s route is tied to the burn batches.',
        '#dispatch_board_read': 'The dispatch board maps “Black Egret” to assistant curator Han Qiu.',
        '#override_unsealed': 'The furnace cabinet seal has been opened with the director\'s seal.',
        '#furnace_stopped': 'The emergency lever is pulled, and the conveyor track and furnace doors stop together.',
        '#proof_secured': 'You pull the last unburned original file out of the fire mouth.',
      },
      endings: {
        normal: {
          title: 'Escape with the File',
          body: 'You leave the archive with the dossier just before the furnace consumes the evidence. You only catch the codename “Black Egret”; the real person vanishes into the evacuation chaos.',
        },
        perfect: {
          title: 'Black Egret Exposed',
          body: 'With the route map, director\'s memo, and dispatch board, you pin “Black Egret” to assistant curator Han Qiu and walk out with the unburned original file. By morning, the wartime intelligence line is torn out by the roots.',
        },
        timeout: {
          title: 'Paper Ash, No Evidence',
          body: 'The furnace corridor roars again and the last original file curls into gray snow before you. You know the truth was only one step away, but it cannot be assembled again.',
        },
      },
      nodes: {
        root: {
          title: 'Archive Room: Before the Burn',
          desc: 'The main archive hall, restoration room, and furnace corridor form the final evidence chain. Cross-check the files, stop the burn, and get the real spy\'s name out.',
        },
        archive_hall_scene: {
          title: 'Main Archive Hall',
          desc: 'Rows of file cabinets, a red-line map, and a password cabinet that almost missed the burn order make up the first cross-check.',
        },
        hall_burn_notice: {
          title: 'Burn Notice Board',
          desc: 'The blackboard lists tonight\'s three burn waves, with a rushed note in the corner: open the cabinets in reverse of the final burn order.',
          interactions: [
            { label: 'Read the Notice', desc: 'Memorize the annotation and the burn rule.' },
          ],
        },
        hall_route_map: {
          title: 'Wall Route Map',
          desc: 'Four red pencil lines cut across the city map, with arrows landing on the port, radio, hospital, and consulate in that order.',
          interactions: [
            { label: 'Study the Red Lines', desc: 'Remember the order of the four contact points.' },
          ],
        },
        hall_catalog: {
          title: 'Index Card Cabinet',
          desc: 'Several library cards are still half-stuck in a drawer, each with only one number left on the back: 7, 3, 1, 9.',
          interactions: [
            { label: 'Copy the Numbers', desc: 'Write down the numbers on the four library cards.' },
          ],
        },
        hall_lock_drawer: {
          title: 'Archivist\'s Password Cabinet',
          desc: 'A small steel cabinet almost made it out of the fire. Its four dials have to be reversed from the card number and the notice.',
          interactions: [
            { label: 'Enter the Password', desc: 'Turn the four dials in reverse order.' },
          ],
        },
        hall_to_lab: {
          title: 'To the Restoration Room',
          desc: 'Behind the password cabinet, a fire door is still open a crack, and the light box and collage board are inside.',
          interactions: [
            { label: 'Enter the Restoration Room', desc: 'Carry the new clues into the restoration area.' },
          ],
        },
        archive_lab_scene: {
          title: 'Restoration Room',
          desc: 'The light box reveals numbers, the collage board reconstructs reports, and the cold cabinet holds the last sensitive evidence.',
        },
        lab_lightbox: {
          title: 'Punch-Check Light Box',
          desc: 'The yellowing light box has four alignment holes, as if waiting for a punched index card to be placed on it.',
          interactions: [
            { label: 'Check the Light Box', desc: 'Only a punched card can fill the four alignment holes.' },
          ],
        },
        lab_ash_pan: {
          title: 'Ash-Pan Fragment',
          desc: 'The burned restoration note is reduced to half a sentence: pin the liaison reports back in the red-line order on the map, and the original will fall free from the layer between them.',
          interactions: [
            { label: 'Read the Fragment', desc: 'Remember how the reports are restored.' },
          ],
        },
        lab_comparison_board: {
          title: 'Report Collage Board',
          desc: 'The four liaison reports have had their pins removed, leaving only the labels port, radio, hospital, and consulate to be rearranged.',
          sortSymbols: ['Port', 'Radio', 'Hospital', 'Consulate'],
          interactions: [
            { label: 'Restore the Order', desc: 'Repin the four reports in the order of the red lines.' },
          ],
        },
        lab_cold_cabinet: {
          title: 'Cold Storage Cabinet',
          desc: 'The cabinet door has a four-digit lock, with a note beside it: fragile film and seal copies only.',
          interactions: [
            { label: 'Enter the Number', desc: 'Use the four digits revealed by the light box to unlock the cabinet.' },
          ],
        },
        lab_director_memo: {
          title: 'Director\'s Memo',
          desc: 'The memo is only one line: the emergency furnace cabinet must be opened only when both halves of the director\'s seal are joined, and no one may hold a single half alone.',
          interactions: [
            { label: 'Read the Memo', desc: 'Confirm how the furnace cabinet is opened.' },
          ],
        },
        lab_return: {
          title: 'Back to the Archive Hall',
          desc: 'If you need to recheck the cabinets and map, you can return to the main archive hall at any time.',
          interactions: [
            { label: 'Return to the Hall', desc: 'Switch back to the main archive hall scene.' },
          ],
        },
        lab_to_corridor: {
          title: 'Furnace Corridor Door',
          desc: 'A constant roar comes from behind the fire door, and the last batch of files is lining up there to go into the furnace.',
          interactions: [
            { label: 'Enter the Furnace Corridor', desc: 'Carry the film, lens, and seal into the final evidence area.' },
          ],
        },
        archive_corridor_scene: {
          title: 'Furnace Corridor',
          desc: 'The hand-crank viewer, furnace shutoff cabinet, and evidence tray all sit here. The evidence survives only if you finish the last few steps.',
        },
        corridor_reader: {
          title: 'Hand-Crank Viewer',
          desc: 'The lens seat is empty, but the film track remains, and the bulb beside it is still faintly warm.',
          interactions: [
            { label: 'Inspect the Viewer', desc: 'The missing part is the lens, not the film track.' },
          ],
        },
        corridor_dispatch_board: {
          title: 'Dispatch Roster',
          desc: 'The duty board pins the codename, temporary employee number, and archivist name on the same line. Only someone who has seen the film knows which column matters.',
          interactions: [
            { label: 'Check the Name', desc: 'Match “Black Egret” to the real identity.' },
          ],
        },
        corridor_override_panel: {
          title: 'Furnace Cabinet Seal',
          desc: 'A round seal slot presses through the red lacquer on the cabinet door, clearly meant for the complete director\'s seal.',
          interactions: [
            { label: 'Study the Seal Slot', desc: 'Only the complete seal can open this cabinet.' },
          ],
        },
        corridor_stop_lever: {
          title: 'Emergency Stop Lever',
          desc: 'Once the cabinet opens, only a heat-wrapped emergency lever remains inside. Pulling it stops the whole conveyor track.',
          interactions: [
            { label: 'Pull the Stop Lever', desc: 'Stop the conveyor first, then grab the last file.' },
          ],
        },
        corridor_evidence_box: {
          title: 'Furnace Evidence Tray',
          desc: 'The last metal evidence tray is wedged beside the fire mouth, with one unburned original file still inside.',
          interactions: [
            { label: 'Pull Out the File', desc: 'Snatch it before it goes into the furnace.' },
          ],
        },
        corridor_return: {
          title: 'Back to the Restoration Room',
          desc: 'If the tools are not all ready yet, you can return to the restoration room and finish the last link.',
          interactions: [
            { label: 'Return to the Restoration Room', desc: 'Switch back to the restoration room scene.' },
          ],
        },
        corridor_exit: {
          title: 'Field Exit Door',
          desc: 'Once the furnace is stopped, the side door briefly loses its fire interlock. Only by rushing out with the original file do you really save the truth from the flames.',
          interactions: [
            { label: 'Burst Through the Side Door', desc: 'Leave the archive with the evidence.' },
          ],
        },
        backpack: {
          title: 'Backpack',
          desc: 'Holds the key objects recovered from the archive.',
        },
        index_card_item: {
          title: 'Punched Index Card',
          desc: 'Soot-darkened at the edges, but the four holes are intact and line up perfectly with the punch-check light box.',
        },
        seal_half_a_item: {
          title: 'Seal Half A',
          desc: 'The half copper seal from the password cabinet, with a clean break along the edge.',
        },
        seal_half_b_item: {
          title: 'Seal Half B',
          desc: 'The other half of the copper seal stored in the cold cabinet, its inner ring matching Half A exactly.',
        },
        director_seal_item: {
          title: 'Complete Director\'s Seal',
          desc: 'Once the two copper halves are joined, they carry enough weight to press cleanly into the furnace cabinet\'s round seal slot.',
        },
        microfilm_reel_item: {
          title: 'Microfilm Reel',
          desc: 'A tiny reel shaken loose from the collage board layer. It needs the viewer lens before its contents can be seen.',
        },
        viewer_lens_item: {
          title: 'Viewer Lens',
          desc: 'The hand-crank viewer lens stored in the cold cabinet is still intact and fits the corridor machine perfectly.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '档案室·焚毁之前',
    desc: '主档案厅、修复室和焚化走廊组成最后一条取证链。先交叉比对文件，再停炉取卷，把真正的间谍名字带出去。',
    type: 'text',
    isFixed: true,
    children: [
      {
        id: 'archive_hall_scene',
        title: '主档案厅',
        desc: '成排卷宗柜、红线地图和一只没来得及清空的密码柜，构成了第一轮交叉比对。',
        type: 'text',
        sceneClue: '*main_hall_archive',
        scenes: ['*main_hall_archive'],
        layout: { direction: 180, distance: 140 },
        children: [
          {
            id: 'hall_burn_notice',
            title: '焚毁告示板',
            desc: '黑板上写着今夜三轮焚毁时刻，边角有一行匆忙加盖的批注：按最终焚毁次序逆序开柜。',
            type: 'text',
            scenes: ['*main_hall_archive'],
            layout: { direction: 230, distance: 150 },
            interactions: [
              {
                label: '阅读告示',
                desc: '把批注和焚毁规则记下来。',
                when: '!#burn_notice_read',
                addClues: ['#burn_notice_read'],
              },
            ],
            doneClue: '#burn_notice_read',
          },
          {
            id: 'hall_route_map',
            title: '墙面线路图',
            desc: '城市地图被四道红铅笔连线穿过，箭头依次落在港口、电台、医院和领馆的位置上。',
            type: 'text',
            scenes: ['*main_hall_archive'],
            layout: { direction: 290, distance: 150 },
            interactions: [
              {
                label: '查看红线',
                desc: '记下四个接头点的先后顺序。',
                when: '!#route_map_read',
                addClues: ['#route_map_read'],
              },
            ],
            doneClue: '#route_map_read',
          },
          {
            id: 'hall_catalog',
            title: '索引卡柜',
            desc: '几张借阅卡还插在半开的抽屉里，背面各自只留下一个数字：7、3、1、9。',
            type: 'text',
            scenes: ['*main_hall_archive'],
            layout: { direction: 330, distance: 150 },
            interactions: [
              {
                label: '抄下数字',
                desc: '把四张借阅卡上的编号记下来。',
                when: '!#catalog_index_read',
                addClues: ['#catalog_index_read'],
              },
            ],
            doneClue: '#catalog_index_read',
          },
          {
            id: 'hall_lock_drawer',
            title: '馆员密码柜',
            desc: '一只小型钢柜还没来得及送去焚毁，四位拨轮需要结合卡号和告示批注来反推。',
            type: 'password',
            scenes: ['*main_hall_archive'],
            preClue: ['AND', '#burn_notice_read', '#catalog_index_read'],
            layout: { direction: 35, distance: 155 },
            code: '9137',
            successClues: ['#drawer_opened', '#has_index_card', '#has_seal_half_a'],
            doneClue: '#drawer_opened',
            interactions: [
              {
                label: '输入密码',
                desc: '按逆序转动四位拨轮。',
              },
            ],
          },
          {
            id: 'hall_to_lab',
            title: '通往修复室',
            desc: '密码柜后方的防火门还开着一条缝，光箱和拼贴板都在里面。',
            type: 'text',
            scenes: ['*main_hall_archive'],
            preClue: '#drawer_opened',
            layout: { direction: 95, distance: 165 },
            interactions: [
              {
                label: '进入修复室',
                desc: '带着新拿到的线索转入修复区。',
                addClues: ['*restoration_lab', '-*main_hall_archive'],
              },
            ],
          },
        ],
      },
      {
        id: 'archive_lab_scene',
        title: '修复室',
        desc: '光箱负责显号，拼贴板负责还原报告，冷藏柜里封着最后一批敏感物证。',
        type: 'text',
        sceneClue: '*restoration_lab',
        scenes: ['*restoration_lab'],
        layout: { direction: 0, distance: 140 },
        children: [
          {
            id: 'lab_lightbox',
            title: '检孔光箱',
            desc: '发黄的光箱上预留着四个对位孔，像在等一张特殊索引卡贴上去。',
            type: 'switch',
            scenes: ['*restoration_lab'],
            layout: { direction: 300, distance: 150 },
            doneClue: '#reel_code_seen',
            interactions: [
              {
                label: '检查光箱',
                desc: '四个对位孔只会被打孔纸片补全。',
                when: '!#reel_code_seen',
                addClues: [],
              },
            ],
          },
          {
            id: 'lab_ash_pan',
            title: '灰盘残页',
            desc: '焚焦的复原说明只剩半句：把接头报告按地图上的红线顺序钉回去，夹层自会掉出原件。',
            type: 'text',
            scenes: ['*restoration_lab'],
            layout: { direction: 235, distance: 150 },
            interactions: [
              {
                label: '翻看残页',
                desc: '记住拼贴报告的复原方法。',
                when: '!#ash_sequence_hint',
                addClues: ['#ash_sequence_hint'],
              },
            ],
            doneClue: '#ash_sequence_hint',
          },
          {
            id: 'lab_comparison_board',
            title: '报告拼贴板',
            desc: '四张接头报告被拔掉了图钉，只剩港口、电台、医院、领馆四个标签能重新排回去。',
            type: 'click-sort',
            scenes: ['*restoration_lab'],
            preClue: ['AND', '#route_map_read', '#ash_sequence_hint'],
            layout: { direction: 355, distance: 155 },
            sortSymbols: ['港口', '电台', '医院', '领馆'],
            sortSolution: [0, 1, 2, 3],
            successClues: ['#comparison_solved', '#has_microfilm_reel'],
            doneClue: '#comparison_solved',
            interactions: [
              {
                label: '复原顺序',
                desc: '按地图红线的先后重钉四份报告。',
              },
            ],
          },
          {
            id: 'lab_cold_cabinet',
            title: '冷藏柜',
            desc: '柜门上有四位数字锁，旁边写着“仅存易损胶片与印鉴副本”。',
            type: 'password',
            scenes: ['*restoration_lab'],
            preClue: '#reel_code_seen',
            layout: { direction: 65, distance: 155 },
            code: '4826',
            successClues: ['#cabinet_opened', '#has_seal_half_b', '#has_viewer_lens'],
            doneClue: '#cabinet_opened',
            interactions: [
              {
                label: '输入编号',
                desc: '用光箱显出的四位数解锁冷藏柜。',
              },
            ],
          },
          {
            id: 'lab_director_memo',
            title: '馆长备忘',
            desc: '备忘短短一行：紧急停炉柜须由馆长印鉴正副两半合并后启封，任何人不得单独持有。',
            type: 'text',
            scenes: ['*restoration_lab'],
            preClue: '#cabinet_opened',
            layout: { direction: 125, distance: 150 },
            interactions: [
              {
                label: '阅读备忘',
                desc: '确认走廊停炉柜的开启方式。',
                when: '!#director_memo_read',
                addClues: ['#director_memo_read'],
              },
            ],
            doneClue: '#director_memo_read',
          },
          {
            id: 'lab_return',
            title: '退回档案厅',
            desc: '需要重新比对卷柜和地图时，可以立刻退回主档案厅。',
            type: 'text',
            scenes: ['*restoration_lab'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '返回档案厅',
                desc: '切回主档案厅场景。',
                addClues: ['*main_hall_archive', '-*restoration_lab'],
              },
            ],
          },
          {
            id: 'lab_to_corridor',
            title: '焚化走廊门',
            desc: '防火门后传来持续轰鸣，最后一批文件正在那条走廊上排队等着进炉。',
            type: 'text',
            scenes: ['*restoration_lab'],
            preClue: ['AND', '#comparison_solved', '#cabinet_opened'],
            layout: { direction: 15, distance: 170 },
            interactions: [
              {
                label: '进入焚化走廊',
                desc: '带着胶卷、镜头和印鉴进入最后的取证区。',
                addClues: ['*furnace_corridor', '-*restoration_lab'],
              },
            ],
          },
        ],
      },
      {
        id: 'archive_corridor_scene',
        title: '焚化走廊',
        desc: '手摇阅片器、停炉柜和炉前取卷箱都在这里，证据能否保住只差最后几步。',
        type: 'text',
        sceneClue: '*furnace_corridor',
        scenes: ['*furnace_corridor'],
        layout: { direction: 35, distance: 280 },
        children: [
          {
            id: 'corridor_reader',
            title: '手摇阅片器',
            desc: '阅片器的镜头座已经空了，但胶卷轨道还在，旁边的灯泡微微发热。',
            type: 'switch',
            scenes: ['*furnace_corridor'],
            layout: { direction: 315, distance: 150 },
            doneClue: '#microfilm_read',
            interactions: [
              {
                label: '检查阅片器',
                desc: '缺的是镜头，不是胶卷轨道。',
                when: '!#microfilm_read',
                addClues: [],
              },
            ],
          },
          {
            id: 'corridor_dispatch_board',
            title: '派送值班板',
            desc: '值班板上把代号、临时工号和馆员姓名钉在同一行，只有看过胶卷的人才知道该盯哪一列。',
            type: 'text',
            scenes: ['*furnace_corridor'],
            preClue: '#microfilm_read',
            layout: { direction: 245, distance: 150 },
            interactions: [
              {
                label: '核对姓名',
                desc: '把代号“黑鹭”对回真实身份。',
                when: '!#dispatch_board_read',
                addClues: ['#dispatch_board_read'],
              },
            ],
            doneClue: '#dispatch_board_read',
          },
          {
            id: 'corridor_override_panel',
            title: '停炉柜封印',
            desc: '红漆封住的柜门中央压着一枚圆形印槽，明显是给完整馆长印鉴预留的。',
            type: 'switch',
            scenes: ['*furnace_corridor'],
            layout: { direction: 10, distance: 155 },
            doneClue: '#override_unsealed',
            interactions: [
              {
                label: '观察印槽',
                desc: '只有完整印鉴才能开这只停炉柜。',
                when: '!#override_unsealed',
                addClues: [],
              },
            ],
          },
          {
            id: 'corridor_stop_lever',
            title: '紧急停炉杆',
            desc: '柜门打开后，里面只剩一根包着耐热布的急停杆，拉下去就能让整条传送轨停住。',
            type: 'switch',
            scenes: ['*furnace_corridor'],
            preClue: ['AND', '#override_unsealed', '#microfilm_read'],
            layout: { direction: 75, distance: 155 },
            doneClue: '#furnace_stopped',
            interactions: [
              {
                label: '拉下急停杆',
                desc: '先停传送轨，再抢出最后的卷宗。',
                when: '!#furnace_stopped',
                addClues: ['#furnace_stopped'],
              },
            ],
          },
          {
            id: 'corridor_evidence_box',
            title: '炉前取卷箱',
            desc: '火口前最后一只金属取卷箱卡在半开的轨道边，里面还夹着一份未焚原卷。',
            type: 'text',
            scenes: ['*furnace_corridor'],
            preClue: '#microfilm_read',
            layout: { direction: 120, distance: 150 },
            interactions: [
              {
                label: '抽出原卷',
                desc: '在卷宗彻底进炉前把它抢下来。',
                when: '!#proof_secured',
                addClues: ['#proof_secured'],
              },
            ],
            doneClue: '#proof_secured',
          },
          {
            id: 'corridor_return',
            title: '退回修复室',
            desc: '如果还没把道具准备齐，可以立刻退回修复室补完最后一环。',
            type: 'text',
            scenes: ['*furnace_corridor'],
            layout: { direction: 180, distance: 165 },
            interactions: [
              {
                label: '返回修复室',
                desc: '切回修复室场景。',
                addClues: ['*restoration_lab', '-*furnace_corridor'],
              },
            ],
          },
          {
            id: 'corridor_exit',
            title: '外勤逃生门',
            desc: '停炉之后，侧门会短暂解除防火联锁。带着原卷冲出去，才算把真相从火里救出来。',
            type: 'text',
            scenes: ['*furnace_corridor'],
            preClue: ['AND', '#furnace_stopped', '#proof_secured'],
            layout: { direction: 35, distance: 175 },
            interactions: [
              {
                label: '冲出侧门',
                desc: '带着证据离开档案馆。',
                addClues: ['@escape'],
              },
            ],
          },
        ],
      },
      {
        id: 'backpack',
        title: '背包',
        desc: '收纳从档案馆各区域抢出来的关键物件。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'index_card_item',
            title: '打孔索引卡',
            desc: '边缘被烟熏黑了，但四个缺口仍然完整，正好能对到检孔光箱上。',
            type: 'item',
            preClue: ['AND', '#has_index_card', '!#reel_code_seen'],
            itemUse: {
              targetIds: ['lab_lightbox'],
              addClues: ['#reel_code_seen'],
            },
          },
          {
            id: 'seal_half_a_item',
            title: '印鉴半枚·甲',
            desc: '从密码柜里拿到的半枚铜印，边缘留着清晰断口。',
            type: 'item',
            preClue: ['AND', '#has_seal_half_a', '!#director_seal_ready'],
            combineWith: [
              {
                targetId: 'seal_half_b_item',
                addClues: ['#director_seal_ready'],
              },
            ],
          },
          {
            id: 'seal_half_b_item',
            title: '印鉴半枚·乙',
            desc: '冷藏柜里封存的另一半铜印，内圈纹路与甲半枚完全对得上。',
            type: 'item',
            preClue: ['AND', '#has_seal_half_b', '!#director_seal_ready'],
            combineWith: [
              {
                targetId: 'seal_half_a_item',
                addClues: ['#director_seal_ready'],
              },
            ],
          },
          {
            id: 'director_seal_item',
            title: '完整馆长印鉴',
            desc: '两半铜印合成后分量十足，印面能完整压入停炉柜的圆形封槽。',
            type: 'item',
            preClue: ['AND', '#director_seal_ready', '!#override_unsealed'],
            itemUse: {
              targetIds: ['corridor_override_panel'],
              addClues: ['#override_unsealed'],
            },
          },
          {
            id: 'microfilm_reel_item',
            title: '微缩胶卷',
            desc: '从拼贴板夹层抖出来的细小胶卷，需要装上镜头才能看清其中内容。',
            type: 'item',
            preClue: ['AND', '#has_microfilm_reel', '!#microfilm_read'],
            itemUse: {
              targetIds: ['corridor_reader'],
              when: '#has_viewer_lens',
              addClues: ['#microfilm_read', '#double_agent_identified'],
            },
          },
          {
            id: 'viewer_lens_item',
            title: '阅片镜头',
            desc: '冷藏柜中剩下的手摇阅片镜头，玻璃还算完整，刚好能装回走廊里的机器。',
            type: 'item',
            preClue: '#has_viewer_lens',
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
        '#burn_notice_read',
        '#route_map_read',
        '#catalog_index_read',
        '#ash_sequence_hint',
        '#comparison_solved',
        '#director_memo_read',
        '#microfilm_read',
        '#dispatch_board_read',
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
