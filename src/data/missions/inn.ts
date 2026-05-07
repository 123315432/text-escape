import type { Mission } from '../../core/types'

export const innMission: Mission = {
  id: 'inn',
  title: '雪夜旅店·审讯',
  subtitle: '暴风雪困住五人，侦探你来找凶手',
  intro:
    '民国二十三年，皖北深山，大雪封路三日。昨夜，商人方德昌死在阁楼房间，死因不明。凶手就在剩余五人之中：老板娘刘氏、厨子老郑、游方医生叶先生、作家苏白、伙计小虎。你是恰好投宿的侦探。',
  timeLimitMs: 90 * 60 * 1000,
  initialClues: ['*hall'],
  bgmScenes: {},
  clueMessages: {
    '*hall': '— 大堂 —',
    '*kitchen': '— 厨房 —',
    '*attic': '— 阁楼 —',
    '*cellar_inn': '— 地下室 —',
    '#found_body': '方德昌的尸体在阁楼，有外伤痕迹。',
    '#found_bloody_knife': '在厨房发现一把带血的刀。',
    '#found_apron': '在地下室发现一件染血的围裙。',
    '#found_ledger': '在地下室发现一本账本，记录方德昌的债务。',
    '#found_medicine': '在地下室发现一瓶药水，疑似安眠药。',
    '#found_manuscript': '在阁楼发现苏白的手稿，有方德昌的批注。',
    '#chat_madam': '老板娘：昨晚十点我在厨房，郑厨可以证明。',
    '#chat_chef': '老郑：昨晚我整晚在厨房。刀……刀我不知道怎么到那里的。',
    '#chat_doctor': '叶先生：我为方先生看过病，他有心脏问题，但不致命。',
    '#chat_writer': '苏白：我整晚在房间写作。方先生……我们有些误会，仅此而已。',
    '#chat_boy': '小虎：我昨晚十点后去添柴，阁楼那边好像有动静。',
    '#madam_alibi_shaky': '老板娘承认：实际上十一点后她独自去了地下室取酒。',
    '#chef_knife_explained': '老郑说：那把刀早上才发现不见的，昨晚在刀架上。',
    '#doctor_timeline': '叶先生：我十点半给方先生送了安眠药，他那时还活着。',
    '#writer_conflict': '苏白承认：方德昌威胁要毁掉他的名誉，两人发生过争吵。',
    '#boy_testimony': '小虎：我听到的动静在十一点到十一点半之间。',
    '#ledger_motive': '账本显示：方德昌借给刘氏三百块，催债催了两年。',
    '#madam_cracked': '老板娘崩溃坦白：她去阁楼与方德昌理论，失手推倒，人头磕在床柱上。',
    '#true_culprit': '真凶：刘氏（老板娘）。过失杀人，非蓄意谋杀。',
  },
  translations: {
    en: {
      title: 'Snowbound Inn: Interrogation',
      subtitle: 'A blizzard traps five suspects. Find the killer.',
      intro: 'In 1934, deep in the mountains of northern Anhui, heavy snow sealed the road for three days. Last night, merchant Fang Dechang died in the attic room, and the cause is unclear. The killer is among the remaining five people: Madam Liu the innkeeper, Old Zheng the cook, Dr. Ye the itinerant doctor, writer Su Bai, and Xiao Hu the servant. You are the detective who just happened to stay here.',
      clueMessages: {
        '*hall': '— Lobby —',
        '*kitchen': '— Kitchen —',
        '*attic': '— Attic —',
        '*cellar_inn': '— Basement —',
        '#found_body': 'Fang Dechang\'s body was found in the attic, with signs of blunt trauma.',
        '#found_bloody_knife': 'A bloodstained knife was found in the kitchen.',
        '#found_apron': 'A bloodstained apron was found in the basement.',
        '#found_ledger': 'A ledger was found in the basement, recording Fang Dechang\'s debts.',
        '#found_medicine': 'A bottle of medicine was found in the basement, likely a sedative.',
        '#found_manuscript': 'Su Bai\'s manuscript was found in the attic, marked up by Fang Dechang.',
        '#chat_madam': 'Madam Liu: I was in the kitchen at ten last night. Old Zheng can vouch for me.',
        '#chat_chef': 'Old Zheng: I stayed in the kitchen all night. The knife... I do not know how it got there.',
        '#chat_doctor': 'Dr. Ye: I treated Mr. Fang. He had heart trouble, but nothing fatal.',
        '#chat_writer': 'Su Bai: I wrote in my room all night. Mr. Fang... we had a misunderstanding, nothing more.',
        '#chat_boy': 'Xiao Hu: After ten last night I went to tend the fire, and there seemed to be some noise up in the attic.',
        '#madam_alibi_shaky': 'Madam Liu admits she actually went to the basement alone after eleven to get wine.',
        '#chef_knife_explained': 'Old Zheng says: that knife was missing only this morning. It was on the rack last night.',
        '#doctor_timeline': 'Dr. Ye: I brought Mr. Fang a sedative at ten-thirty. He was still alive then.',
        '#writer_conflict': 'Su Bai admits Mr. Fang threatened to ruin his reputation, and the two did argue.',
        '#boy_testimony': 'Xiao Hu: The noise I heard was between eleven and eleven-thirty.',
        '#ledger_motive': 'The ledger shows Fang Dechang lent Madam Liu 300 yuan and had been pressing her for two years.',
        '#madam_cracked': 'Madam Liu breaks down: she went to the attic to argue with Fang Dechang, shoved him by accident, and his head hit the bedpost.',
        '#true_culprit': 'Real culprit: Liu Shi (the innkeeper). Manslaughter, not premeditated murder.',
      },
      nodes: {
        root: {
          title: 'Snowbound Inn: Interrogation',
          desc: 'Question the five NPCs, gather evidence from four locations, cross-check contradictions, and enter the killer\'s name.',
        },
        hall_hub: {
          title: 'Lobby',
          desc: 'The inn lobby is lit by a stove. Five people are scattered around the room, each with a different expression. Snow whispers against the windows.',
        },
        npc_madam: {
          title: 'Madam Liu',
          desc: 'In her forties, she keeps wiping the tables, her eyes slightly red.',
          interactions: [
            { label: 'Make Small Talk', desc: '"I was in the kitchen at ten last night. Old Zheng can vouch for me. Mr. Fang... what a misfortune."' },
            { label: 'Press Her on Last Night', desc: 'She pauses: "...After eleven, I went to the basement alone to get wine, maybe for half an hour."' },
            { label: 'Confront Her with the Ledger', desc: '"That money... I was almost done paying it back! He should not have come to pressure me. He should not have..." She grips the rag.' },
            { label: 'Force Her with Blood Evidence', desc: 'She collapses into the chair: "I only went to argue... he shoved me, I shoved him, and he fell on his own... I did not mean to kill him..."' },
          ],
        },
        npc_chef: {
          title: 'Old Zheng',
          desc: 'In his fifties, broad and thick-set, he sits in the corner smoking dry tobacco, looking dull and slow.',
          interactions: [
            { label: 'Start a Conversation', desc: '"I stayed in the kitchen all night. The knife... I do not know how it got there."' },
            { label: 'Ask About the Knife', desc: '"It was missing only this morning. I saw it on the rack last night, around eight."' },
            { label: 'Ask if Madam Liu Can Back Him Up', desc: '"Madam Liu was in the kitchen before ten, that\'s true. After that... after that I was alone, so I am not sure."' },
          ],
        },
        npc_doctor: {
          title: 'Dr. Ye',
          desc: 'A forty-year-old itinerant doctor with glasses, holding a teacup and looking calm, which makes him feel out of place here.',
          interactions: [
            { label: 'Introduce Yourself, Ask Around', desc: '"I treated Mr. Fang. He had heart trouble, but nothing fatal. Last night I brought him a sedative."' },
            { label: 'Press Him on the Time', desc: '"At exactly ten-thirty, he was still alive and somewhat agitated. I told him to rest, but he urged me to leave."' },
            { label: 'Ask if He Saw Anyone Else', desc: '"When I went downstairs, there was a shadow in the corridor - a woman\'s figure, heading toward the attic. That was after eleven."' },
          ],
        },
        npc_writer: {
          title: 'Su Bai',
          desc: 'A frail writer in his thirties, tearing up bits of paper in his hands and refusing to meet anyone\'s eyes.',
          interactions: [
            { label: 'Strike Up a Chat', desc: '"I wrote in my room all night. Mr. Fang... we had a misunderstanding, that is all."' },
            { label: 'Confront Him with the Manuscript', desc: '"Fine, I admit it! He threatened to expose my old business. But I did not touch him - I was scared."' },
            { label: 'Check His Timeline', desc: '"When Dr. Ye left, I happened to go fetch water and ran into him - a little after ten-thirty. I have an alibi."' },
          ],
        },
        npc_boy: {
          title: 'Xiao Hu',
          desc: 'A boy of sixteen or seventeen, shrinking by the doorway and sneaking looks at everyone.',
          interactions: [
            { label: 'Ask Gently', desc: '"After ten last night I went to tend the fire, and the attic... seemed to have an argument."' },
            { label: 'Press on the Time of the Argument', desc: '"Around eleven to eleven-thirty. I remember because a stick of incense had just burned out. A man and a woman were speaking."' },
          ],
        },
        hall_to_kitchen: {
          title: 'To the Kitchen',
          desc: 'The corridor behind the lobby leads to the kitchen.',
          interactions: [
            { label: 'Go to the Kitchen', desc: 'Pass through the corridor, where the smell of cooking oil hits you immediately.' },
          ],
        },
        hall_to_attic: {
          title: 'Stairs to the Attic',
          desc: 'A wooden staircase leads to the attic, where Fang Dechang\'s room is located.',
          interactions: [
            { label: 'Go Up to Inspect the Scene', desc: 'Climb the creaking wooden stairs toward the attic.' },
          ],
        },
        kitchen_hub: {
          title: 'Kitchen',
          desc: 'Pots, bowls, and a fire stove. The knife rack holds several knives, but one slot is empty.',
        },
        kitchen_knife_rack: {
          title: 'Knife Rack',
          desc: 'A wooden knife rack with six knives hanging on it. The third slot is empty.',
          interactions: [
            { label: 'Inspect the Rack', desc: 'The third slot is empty, and there is fresh blood along the edge of the rack - did someone take the knife out and put it back?' },
          ],
        },
        kitchen_bloody_knife: {
          title: 'Bloodstain Behind the Stove',
          desc: 'In the corner behind the stove, a knife has been hastily hidden here.',
          interactions: [
            { label: 'Find and Check the Hidden Knife', desc: 'The blade has dried blood on it. Is it from an old wound, or from Fang Dechang?' },
          ],
        },
        kitchen_to_cellar: {
          title: 'Basement Entrance',
          desc: 'A wooden hatch in the corner of the kitchen leads to the storage cellar.',
          interactions: [
            { label: 'Open the Basement Hatch', desc: 'The hatch creaks open, revealing steep stairs into the dark basement.' },
          ],
        },
        kitchen_return: {
          title: 'Back to the Lobby',
          desc: 'The corridor leads back to the lobby.',
          interactions: [
            { label: 'Return to the Lobby', desc: 'Walk back through the corridor to the lobby.' },
          ],
        },
        cellar_inn_hub: {
          title: 'Basement',
          desc: 'Dark and damp, stacked with wine jars, dry goods, and clutter. A crumpled apron is stuffed into the corner.',
        },
        cellar_apron: {
          title: 'Apron in the Corner',
          desc: 'A woman\'s apron, crumpled into a ball, with blood on it.',
          interactions: [
            { label: 'Inspect the Apron', desc: 'There is blood on the apron, and the size matches a woman. This is where Madam Liu went to "get wine" last night.' },
          ],
        },
        cellar_ledger: {
          title: 'Ledger',
          desc: 'A ledger hidden behind the wine jars, filled with debt records.',
          interactions: [
            { label: 'Flip Through the Ledger', desc: 'A 300-yuan loan under Fang Dechang\'s name is recorded, with collection notes updated as recently as yesterday. The motive comes into focus.' },
          ],
        },
        cellar_medicine: {
          title: 'Medicine Bottle',
          desc: 'A bottle of the same sedative Dr. Ye carries, but this one is empty.',
          interactions: [
            { label: 'Check the Bottle', desc: 'An empty bottle - Dr. Ye\'s medicine. If Mr. Fang took the sedative, he should already have been drowsy and unable to resist.' },
          ],
        },
        cellar_to_hall: {
          title: 'Back to the Kitchen',
          desc: 'The wooden hatch leads up to the kitchen.',
          interactions: [
            { label: 'Return to the Kitchen', desc: 'Climb the stairs and go back to the kitchen.' },
          ],
        },
        attic_hub: {
          title: 'Attic',
          desc: 'Fang Dechang\'s room. The scene has not been disturbed. The blood is by the bedpost, not on the bed - as if this were an accidental fall and head strike.',
        },
        attic_body: {
          title: 'Body Scene',
          desc: 'Fang Dechang lies by the bedpost, with a head wound but no knife injury. There are faint drag marks on the floor.',
          interactions: [
            { label: 'Inspect the Scene', desc: 'Cause of death: head struck the bedpost, not a knife wound. The drag marks suggest a violent shove, and there are women\'s footprints in the room.' },
          ],
        },
        attic_manuscript: {
          title: 'Su Bai\'s Manuscript',
          desc: 'Several pages of manuscript lie on the table, with red-pen notes along the edge in handwriting that looks like Fang Dechang\'s.',
          interactions: [
            { label: 'Check the Marginal Notes', desc: 'The notes are vicious and threatening: "If you do not hand over the evidence, it will be in the paper tomorrow." Su Bai now has motive too.' },
          ],
        },
        attic_window: {
          title: 'Attic Window',
          desc: 'The window is ajar. There is snow on the sill, but the snow is undisturbed - no one came in from outside.',
          interactions: [
            { label: 'Check the Snow on the Sill', desc: 'The snow is intact, with no footprints. The killer must have come in through the door, so it was a guest.' },
          ],
        },
        attic_to_hall: {
          title: 'Back to the Lobby',
          desc: 'The attic stairs lead back to the lobby.',
          interactions: [
            { label: 'Return to the Lobby', desc: 'Go back down the stairs to the lobby.' },
          ],
        },
        attic_final_accusation: {
          title: 'Accuse the Killer',
          desc: 'The evidence and testimony are enough. It is time to formally accuse the killer. Enter the killer\'s name (two Chinese characters).',
          interactions: [
            { label: 'Write the Killer\'s Name and Close the Case', desc: 'Combine all the evidence: the shove location (attic), the time (11:00-11:30), the motive (debt), and the eyewitness (Dr. Ye).' },
          ],
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '雪夜旅店·审讯',
    desc: '审讯五名NPC，收集四处场景证据，交叉验证证词矛盾，输入凶手姓名。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 场景一：大堂（含5个NPC） ─────────────────────────────
      {
        id: 'hall_hub',
        title: '大堂',
        desc: '旅店大堂，烧着火炉，五个人分散在各处，神情各异。雪声在窗外沙沙作响。',
        type: 'text',
        sceneClue: '*hall',
        scenes: ['*hall'],
        layout: { direction: 270, distance: 130 },
        children: [
          {
            id: 'npc_madam',
            title: '老板娘刘氏',
            desc: '四十多岁，手脚不停地擦桌子，眼圈有些红。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 225, distance: 160 },
            interactions: [
              {
                label: '寒暄问情况',
                when: '!#chat_madam',
                addClues: ['#chat_madam'],
                desc: '「昨晚十点我在厨房，郑厨可以证明。方先生……唉，真是不幸。」',
              },
              {
                label: '追问昨晚动向',
                when: ['AND', '#chat_madam', '#boy_testimony', '!#madam_alibi_shaky'],
                addClues: ['#madam_alibi_shaky'],
                desc: '她的手顿了一下：「……十一点后，我一个人去地下室取酒，大概半小时。」',
              },
              {
                label: '出示账本质问',
                when: ['AND', '#found_ledger', '#madam_alibi_shaky', '!#ledger_motive'],
                addClues: ['#ledger_motive'],
                desc: '「那钱……那钱我快还上了！他不该来逼的，不该来的……」她握住抹布。',
              },
              {
                label: '出示血迹证据逼问',
                when: ['AND', '#found_apron', '#ledger_motive', '#doctor_timeline', '!#madam_cracked'],
                addClues: ['#madam_cracked', '#true_culprit'],
                desc: '她跌坐在椅子上：「我只是去理论……他推我，我推他，他自己倒下的……我没想杀他……」',
              },
            ],
            doneClue: '#madam_cracked',
          },
          {
            id: 'npc_chef',
            title: '厨子老郑',
            desc: '五十多岁，膀大腰圆，坐在角落抽旱烟，神情迟钝。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 270, distance: 160 },
            interactions: [
              {
                label: '问候聊天',
                when: '!#chat_chef',
                addClues: ['#chat_chef'],
                desc: '「昨晚我整晚在厨房。那把刀……刀我不知道怎么到那儿的。」',
              },
              {
                label: '细问那把刀',
                when: ['AND', '#chat_chef', '#found_bloody_knife', '!#chef_knife_explained'],
                addClues: ['#chef_knife_explained'],
                desc: '「早上才发现不见的，昨晚我在刀架上见过它，八点来钟。」他掰着手指确认。',
              },
              {
                label: '问老板娘能否作证',
                when: ['AND', '#chef_knife_explained', '#madam_alibi_shaky', '!#chef_madam_confirm'],
                addClues: ['#chef_madam_confirm'],
                desc: '「老板娘十点前在厨房没错，之后……之后我一个人了，不太清楚。」',
              },
            ],
            doneClue: '#chef_madam_confirm',
          },
          {
            id: 'npc_doctor',
            title: '游方医生叶先生',
            desc: '四十岁，戴眼镜，端着茶杯，神情平静，显得与这里格格不入。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 315, distance: 160 },
            interactions: [
              {
                label: '介绍自己，打听情况',
                when: '!#chat_doctor',
                addClues: ['#chat_doctor'],
                desc: '「我为方先生看过病，他有心脏问题，但不致命。昨晚我给他送了安眠药。」',
              },
              {
                label: '追问送药时间',
                when: ['AND', '#chat_doctor', '#found_body', '!#doctor_timeline'],
                addClues: ['#doctor_timeline'],
                desc: '「十点半整，他还活着，有些焦躁。我建议他休息，他催我走。」',
              },
              {
                label: '问是否看到其他人',
                when: ['AND', '#doctor_timeline', '#madam_alibi_shaky', '!#doctor_saw_madam'],
                addClues: ['#doctor_saw_madam'],
                desc: '「我下楼时，走廊里有人影——是女人的身形，朝阁楼走去。那是十一点多。」',
              },
            ],
            doneClue: '#doctor_saw_madam',
          },
          {
            id: 'npc_writer',
            title: '作家苏白',
            desc: '三十岁，文弱书生，不断撕碎手里的纸条。眼神游移，不敢直视人。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 180, distance: 160 },
            interactions: [
              {
                label: '搭话',
                when: '!#chat_writer',
                addClues: ['#chat_writer'],
                desc: '「我整晚在房间写作。方先生……我们有些误会，仅此而已。」',
              },
              {
                label: '出示手稿追问',
                when: ['AND', '#found_manuscript', '#chat_writer', '!#writer_conflict'],
                addClues: ['#writer_conflict'],
                desc: '「好，我承认！他威胁要把我的旧事捅出去。但我没动他，我怕事！」',
              },
              {
                label: '核实时间线',
                when: ['AND', '#writer_conflict', '#doctor_timeline', '!#writer_cleared'],
                addClues: ['#writer_cleared'],
                desc: '「叶先生出门时我正好去倒水，我们碰上了——十点半多一点，我有不在场证明。」',
              },
            ],
            doneClue: '#writer_cleared',
          },
          {
            id: 'npc_boy',
            title: '伙计小虎',
            desc: '十六七岁的少年，缩在门边，偷偷打量每个人。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 135, distance: 160 },
            interactions: [
              {
                label: '和气问话',
                when: '!#chat_boy',
                addClues: ['#chat_boy'],
                desc: '「我昨晚十点后去添柴，阁楼那边……好像有吵架声。」',
              },
              {
                label: '追问吵架时间',
                when: ['AND', '#chat_boy', '#found_body', '!#boy_testimony'],
                addClues: ['#boy_testimony'],
                desc: '「大概十一点到十一点半之间，我记得因为香炉刚燃完一支香。一男一女的声音。」',
              },
            ],
            doneClue: '#boy_testimony',
          },
          {
            id: 'hall_to_kitchen',
            title: '去往厨房',
            desc: '大堂后侧的走廊通往厨房。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 90, distance: 150 },
            preClue: '#chat_chef',
            interactions: [
              {
                label: '前往厨房勘察',
                addClues: ['*kitchen', '-*hall'],
                desc: '穿过走廊，厨房油烟气扑面而来。',
              },
            ],
          },
          {
            id: 'hall_to_attic',
            title: '通往阁楼的楼梯',
            desc: '通往阁楼的木楼梯，方德昌的房间就在上面。',
            type: 'text',
            scenes: ['*hall'],
            layout: { direction: 0, distance: 150 },
            preClue: '#attic_accessible',
            interactions: [
              {
                label: '上阁楼查看现场',
                addClues: ['*attic', '-*hall'],
                desc: '踏上吱呀作响的木楼梯，走向阁楼。',
              },
            ],
          },
        ],
      },

      // ── 场景二：厨房 ────────────────────────────────────────
      {
        id: 'kitchen_hub',
        title: '厨房',
        desc: '锅碗瓢盆，柴火灶台。刀架挂着几把刀，但有一个位置是空的。',
        type: 'text',
        sceneClue: '*kitchen',
        scenes: ['*kitchen'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'kitchen_knife_rack',
            title: '刀架',
            desc: '木制刀架，挂着六把刀，第三个位置是空的。',
            type: 'text',
            scenes: ['*kitchen'],
            layout: { direction: 45, distance: 150 },
            interactions: [
              {
                label: '检查刀架',
                when: '!#knife_rack_checked',
                addClues: ['#knife_rack_checked'],
                desc: '第三个位置空着，刀架边缘有新鲜的血迹——有人把刀取走后又放回来了？',
              },
            ],
            doneClue: '#knife_rack_checked',
          },
          {
            id: 'kitchen_bloody_knife',
            title: '灶台后的血迹',
            desc: '灶台后方的角落，有一把刀被匆忙藏在这里。',
            type: 'text',
            scenes: ['*kitchen'],
            layout: { direction: 315, distance: 150 },
            preClue: '#knife_rack_checked',
            interactions: [
              {
                label: '发现并检查藏刀',
                when: '!#found_bloody_knife',
                addClues: ['#found_bloody_knife'],
                desc: '刀刃有干涸的血迹。不是新伤口的血——是老伤还是方德昌的血？',
              },
            ],
            doneClue: '#found_bloody_knife',
          },
          {
            id: 'kitchen_to_cellar',
            title: '地下室入口',
            desc: '厨房角落的木板门，通向地下储物室。',
            type: 'text',
            scenes: ['*kitchen'],
            layout: { direction: 270, distance: 150 },
            preClue: '#knife_rack_checked',
            interactions: [
              {
                label: '打开地下室木板门',
                addClues: ['*cellar_inn', '-*kitchen'],
                desc: '木板门吱呀打开，陡峭的台阶通向阴暗的地下室。',
              },
            ],
          },
          {
            id: 'kitchen_return',
            title: '返回大堂',
            desc: '走廊原路返回大堂。',
            type: 'text',
            scenes: ['*kitchen'],
            layout: { direction: 180, distance: 150 },
            preClue: '#knife_rack_checked',
            interactions: [
              {
                label: '返回大堂',
                addClues: ['*hall', '-*kitchen'],
                desc: '穿过走廊，返回大堂。',
              },
            ],
          },
        ],
      },

      // ── 场景三：地下室 ──────────────────────────────────────
      {
        id: 'cellar_inn_hub',
        title: '地下室',
        desc: '阴暗潮湿，酒坛、干粮、杂物堆叠。一件围裙被团成一团塞在角落。',
        type: 'text',
        sceneClue: '*cellar_inn',
        scenes: ['*cellar_inn'],
        layout: { direction: 90, distance: 130 },
        children: [
          {
            id: 'cellar_apron',
            title: '角落里的围裙',
            desc: '一件女式围裙，团成一团，上面有血迹。',
            type: 'text',
            scenes: ['*cellar_inn'],
            layout: { direction: 45, distance: 150 },
            interactions: [
              {
                label: '检查围裙',
                when: '!#found_apron',
                addClues: ['#found_apron'],
                desc: '围裙上有血迹，尺寸是女性的。这里正是老板娘昨晚「取酒」的地方。',
              },
            ],
            doneClue: '#found_apron',
          },
          {
            id: 'cellar_ledger',
            title: '账本',
            desc: '藏在酒坛后面的一本账本，写着债务记录。',
            type: 'text',
            scenes: ['*cellar_inn'],
            layout: { direction: 315, distance: 150 },
            preClue: '#found_apron',
            interactions: [
              {
                label: '翻阅账本',
                when: '!#found_ledger',
                addClues: ['#found_ledger'],
                desc: '方德昌名下的一笔三百块的借款，追债记录写到昨日。杀人动机浮现。',
              },
            ],
            doneClue: '#found_ledger',
          },
          {
            id: 'cellar_medicine',
            title: '药瓶',
            desc: '架子上有一瓶和叶先生同款的安眠药，但这瓶是空的。',
            type: 'text',
            scenes: ['*cellar_inn'],
            layout: { direction: 270, distance: 150 },
            preClue: '#found_apron',
            interactions: [
              {
                label: '检查药瓶',
                when: '!#found_medicine',
                addClues: ['#found_medicine'],
                desc: '空瓶，叶先生的药。若方先生服了安眠药，那他当时应已昏昏欲睡——无力反抗。',
              },
            ],
            doneClue: '#found_medicine',
          },
          {
            id: 'cellar_to_hall',
            title: '返回厨房',
            desc: '台阶通向厨房的木板门。',
            type: 'text',
            scenes: ['*cellar_inn'],
            layout: { direction: 180, distance: 150 },
            preClue: '#found_apron',
            interactions: [
              {
                label: '返回厨房',
                addClues: ['*kitchen', '-*cellar_inn'],
                desc: '攀上台阶，返回厨房。',
              },
            ],
          },
        ],
      },

      // ── 场景四：阁楼 ────────────────────────────────────────
      {
        id: 'attic_hub',
        title: '阁楼',
        desc: '方德昌的房间。现场未动。血迹在床柱边，不在床上——像是意外跌倒后头部撞击。',
        type: 'text',
        sceneClue: '*attic',
        scenes: ['*attic'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'attic_body',
            title: '尸体现场',
            desc: '方德昌倒在床柱旁，头部有撞伤，身上没有刀伤。地板有轻微拖拽痕迹。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 135, distance: 150 },
            interactions: [
              {
                label: '勘察现场',
                when: '!#found_body',
                addClues: ['#found_body'],
                desc: '死因：头部撞床柱，非刀伤。地板轻微拖痕表明曾有激烈推搡，现场有女鞋印。',
              },
            ],
            doneClue: '#found_body',
          },
          {
            id: 'attic_manuscript',
            title: '苏白的手稿',
            desc: '桌上有几页手稿，边缘有红笔批注，字迹像方德昌的。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 225, distance: 150 },
            preClue: '#found_body',
            interactions: [
              {
                label: '检查手稿批注',
                when: '!#found_manuscript',
                addClues: ['#found_manuscript'],
                desc: '批注极为刻薄，并有威胁性文字：「若不交出证据，明日见报。」苏白的动机也有了。',
              },
            ],
            doneClue: '#found_manuscript',
          },
          {
            id: 'attic_window',
            title: '阁楼窗户',
            desc: '窗户虚掩，窗台有雪，但雪面完整，没有人从外面进入的痕迹。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 315, distance: 150 },
            preClue: '#found_body',
            interactions: [
              {
                label: '检查窗台积雪',
                when: '!#window_checked',
                addClues: ['#window_checked'],
                desc: '雪面完整，无脚印——凶手必是从门进入，是住客。',
              },
            ],
            doneClue: '#window_checked',
          },
          {
            id: 'attic_to_hall',
            title: '返回大堂',
            desc: '阁楼楼梯通向大堂。',
            type: 'text',
            scenes: ['*attic'],
            layout: { direction: 45, distance: 150 },
            preClue: '#found_body',
            interactions: [
              {
                label: '返回大堂',
                addClues: ['*hall', '-*attic'],
                desc: '沿楼梯返回大堂。',
              },
            ],
          },
          {
            id: 'attic_final_accusation',
            title: '指认凶手',
            desc: '证据和证词已经足够，是时候正式指认凶手了。输入凶手的姓名（两个字）。',
            type: 'password',
            scenes: ['*attic'],
            layout: { direction: 270, distance: 150 },
            preClue: ['OR', '#madam_cracked', ['AND', '#found_apron', '#ledger_motive', '#doctor_saw_madam', '#boy_testimony']],
            code: '刘氏',
            successClues: ['@normal_ending'],
            doneClue: '@normal_ending',
            interactions: [
              {
                label: '写下凶手姓名，结案',
                desc: '综合所有证据：推搡地点（阁楼）、时间（11-11:30）、动机（债务）、目击（叶先生）。',
              },
            ],
          },
        ],
      },
    ],
  },
  triggers: [
    // 进入阁楼需要先在大堂问过基本情况
    {
      id: 'unlock_attic',
      when: ['AND', '#chat_madam', '#chat_boy'],
      addClues: ['#attic_accessible'],
    },
    {
      id: 'timeout',
      when: '@timeout',
      addClues: ['@timeout_ending'],
    },
  ],
}
