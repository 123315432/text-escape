import type { Mission } from '../../core/types'

export const pirateMission: Mission = {
  id: 'pirate',
  title: '海盗船·分支宝藏',
  subtitle: '三条逃生路线，只有一条带走宝藏',
  intro:
    '南洋飓风将"血鹦鹉号"拦腰打断，你被困在半沉的船舱。罗盘完好——它能与不同的物品组合，指向三条逃生路线。火药炸壁、凭钥匙取宝、潜水出舱：只能选一条，只有一条带走宝藏。',
  timeLimitMs: 75 * 60 * 1000,
  initialClues: ['*hold'],
  bgmScenes: {},
  clueMessages: {
    '*hold': '— 底舱 —',
    '*powder_room': '— 火药库 —',
    '*captain_cabin': '— 船长室 —',
    '*deck': '— 甲板 —',
    '#has_compass': '拿到了罗盘——与不同碎片组合可指向不同路线。',
    '#has_crowbar': '拿到了铁撬棒——能撬开船上多处封死的木板。',
    '#has_sea_chart': '海图碎片——与罗盘组合，指向火药路线。',
    '#has_astrolabe': '星盘碎片——与罗盘组合，指向船长室路线。',
    '#has_deep_pearl': '深海珍珠——与罗盘组合，指向潜水路线。',
    '#route_gunpowder': '罗盘+海图：火药路线已选定。',
    '#route_captain': '罗盘+星盘：船长室路线已选定。',
    '#route_dive': '罗盘+珍珠：潜水路线已选定。',
    '#route_chosen': '路线已选定，无法更改。',
    '#gunpowder_packed': '火药已装填到船壁裂缝处。',
    '#fuse_ready': '导火索已引好。',
    '#safe_code_found': '船长日志：保险箱密码是KRAKEN。',
    '#safe_opened': '保险箱开了——黄金钥匙和宝藏！',
    '#has_treasure': '拿到了宝藏。',
    '#diving_bell_found': '找到了潜水钟。',
    '#signal_flare_found': '找到了信号弹。',
  },
  endings: {
    perfect: {
      title: '完美逃脱·带走宝藏',
      body: '你用船长的钥匙打开了保险箱，怀抱黄金踏上救援船。"血鹦鹉号"缓缓沉入海底，而你选对了唯一带走宝藏的路线。',
    },
    normal: {
      title: '普通逃脱·活着就好',
      body: '你活着离开了，但宝藏留在了沉船里。也许有人会去打捞，但那个人不是你。',
    },
  },
  translations: {
    en: {
      title: 'Pirate Ship',
      subtitle: 'Three escape routes, but only one carries the treasure away',
      intro:
        'A South Sea typhoon has split the Blood Parrot in half, and you are trapped in its half-sunken hold. The compass still works, but only when combined with the right object. Blast through the hull, claim the captain\'s route to the treasure, or dive through the breach: three ways out, but only one lets you leave rich.',
      clueMessages: {
        '*hold': '— Hold —',
        '*powder_room': '— Powder Magazine —',
        '*captain_cabin': '— Captain\'s Cabin —',
        '*deck': '— Deck —',
        '#has_compass': 'You picked up the compass. Combined with different fragments, it can lock onto different escape routes.',
        '#has_crowbar': 'You picked up an iron crowbar. It can pry open sealed planks all over the ship.',
        '#has_sea_chart': 'Sea chart fragment. Combined with the compass, it points to the powder route.',
        '#has_astrolabe': 'Astrolabe fragment. Combined with the compass, it points to the captain\'s cabin route.',
        '#has_deep_pearl': 'Deep-sea pearl. Combined with the compass, it points to the dive route.',
        '#route_gunpowder': 'Compass plus sea chart: the powder route is now selected.',
        '#route_captain': 'Compass plus astrolabe: the captain\'s cabin route is now selected.',
        '#route_dive': 'Compass plus pearl: the dive route is now selected.',
        '#route_chosen': 'A route has been chosen and cannot be changed.',
        '#gunpowder_packed': 'The gunpowder has been packed into the cracked section of the hull.',
        '#fuse_ready': 'The fuse has been laid.',
        '#safe_code_found': 'Captain\'s log: the safe code is KRAKEN.',
        '#safe_opened': 'The safe is open, revealing a golden key and the treasure.',
        '#has_treasure': 'You obtained the treasure.',
        '#diving_bell_found': 'You found the diving bell.',
        '#signal_flare_found': 'You found the signal flare.',
      },
      endings: {
        perfect: {
          title: 'Perfect Escape · Treasure Secured',
          body: 'You opened the safe with the captain\'s key and boarded the rescue ship with gold in your arms. The Blood Parrot sank beneath the sea, and you alone chose the route that carried the treasure away.',
        },
        normal: {
          title: 'Escape · Alive, But Empty-Handed',
          body: 'You made it out alive, but the treasure stayed inside the wreck. Someone may dive for it one day, but that someone will not be you.',
        },
      },
      nodes: {
        root: {
          title: 'Pirate Ship',
          desc: 'The route is decided by how you combine the compass with the fragments you find. Three paths, three outcomes, and only one perfect escape.',
        },
        hold_hub: {
          title: 'Hold',
          desc: 'The hull tilts and seawater reaches your ankles. Crates drift, a crowbar is wedged into a beam, and a brass compass lies in the water.',
        },
        hold_compass_pick: {
          title: 'Compass',
          desc: 'A brass compass with a wildly spinning needle. It needs the right object to calibrate it.',
          interactions: [
            {
              label: 'Pick Up the Compass',
              desc: 'Take the compass. The needle is still spinning. You will need something else to align it.',
            },
          ],
        },
        hold_crowbar_pick: {
          title: 'Crowbar',
          desc: 'A sturdy iron crowbar jammed into a beam.',
          interactions: [
            {
              label: 'Pull Out the Crowbar',
              desc: 'Take the crowbar. It should open up sealed planks elsewhere on the ship.',
            },
          ],
        },
        hold_crate: {
          title: 'Sealed Cargo Crate',
          desc: 'A floating crate nailed shut. Something shifts inside. You will need the crowbar.',
          interactions: [
            {
              label: 'Pry Open the Crate',
              desc: 'Inside is a fragment of sea chart. Combined with the compass, it points to the powder route.',
            },
          ],
        },
        hold_net: {
          title: 'Submerged Net Bag',
          desc: 'Something glows faintly inside a net bag hanging in the waist-deep water.',
          interactions: [
            {
              label: 'Dive for the Net',
              desc: 'Recover the glowing deep-sea pearl. Combined with the compass, it points toward the underwater breach.',
            },
          ],
        },
        hold_to_powder: {
          title: 'Passage to the Powder Magazine',
          desc: 'A watertight hatch toward the bow leads into the powder room.',
          interactions: [
            {
              label: 'Go to the Powder Magazine',
              desc: 'The compass leads you toward the bow, where the smell of sulfur hangs in the air.',
            },
          ],
        },
        hold_to_cabin: {
          title: 'Passage to the Captain\'s Cabin',
          desc: 'A ladder in the middle section leads up toward the captain\'s cabin.',
          interactions: [
            {
              label: 'Go to the Captain\'s Cabin',
              desc: 'The compass points to the cabin where the real treasure waits.',
            },
          ],
        },
        hold_dive_exit: {
          title: 'Hull Breach',
          desc: 'A breach at the lowest point of the hold leads outside, but diving through safely requires both the bell and a flare.',
          interactions: [
            {
              label: 'Light the Flare and Dive Out',
              desc: 'With the flare burning and the bell over your head, you swim through the breach toward the surface and distant rescue.',
            },
          ],
        },
        powder_room_hub: {
          title: 'Powder Magazine',
          desc: 'Powder kegs, a copper munitions box, and coils of fuse line the shelves. The storm has cracked the hull here, making it the perfect weak point to blow open.',
        },
        powder_barrel: {
          title: 'Powder Kegs',
          desc: 'Two sealed kegs of powder, still dry despite the storm.',
          interactions: [
            {
              label: 'Move the Powder to the Crack',
              desc: 'Roll the kegs to the split in the hull, where the wood is weakest.',
            },
          ],
        },
        powder_fuse: {
          title: 'Fuse',
          desc: 'There is enough fuse here to light the blast and still reach cover.',
          interactions: [
            {
              label: 'Lay the Fuse',
              desc: 'Run one end to the powder and the other to a safer corner.',
            },
          ],
        },
        powder_chest: {
          title: 'Nailed Crate in the Corner',
          desc: 'A crate in the corner rattles with navigation instruments. It will need the crowbar.',
          interactions: [
            {
              label: 'Pry Open the Crate',
              desc: 'Inside is a fragment of astrolabe. If you had not already chosen a route, it would point the compass toward the captain\'s cabin.',
            },
          ],
        },
        powder_explode: {
          title: 'Detonate the Powder',
          desc: 'The fuse is ready. Light it, blow the hull open, and dive for the sea.',
          interactions: [
            {
              label: 'Light It and Run for Cover',
              desc: 'The blast tears open the hull and daylight floods in. You swim out alive, but without the treasure.',
            },
          ],
        },
        powder_return: {
          title: 'Return to the Hold',
          desc: 'You can go back to the hold along the same route.',
          interactions: [
            {
              label: 'Return to the Hold',
              desc: 'Retreat through the passage back into the hold.',
            },
          ],
        },
        captain_cabin_hub: {
          title: 'Captain\'s Cabin',
          desc: 'A luxurious cabin in disarray. A grand desk and a wall safe suggest the treasure is hidden here.',
        },
        cabin_log: {
          title: 'Captain\'s Log',
          desc: 'A leather-bound log whose last pages record the crew\'s actions before the storm.',
          interactions: [
            {
              label: 'Read the Log',
              desc: 'The final page reveals the safe code: the ship\'s own name, KRAKEN.',
            },
          ],
        },
        cabin_safe: {
          title: 'Safe',
          desc: 'A steel safe with a six-letter lock. The answer is hidden in the captain\'s log.',
          interactions: [
            {
              label: 'Enter the Code',
              desc: 'Use the ship\'s name: KRAKEN.',
            },
          ],
        },
        cabin_chest: {
          title: 'Iron Chest Beside the Desk',
          desc: 'A heavy iron chest rattles inside. It will need the crowbar.',
          interactions: [
            {
              label: 'Pry Open the Chest',
              desc: 'Inside is a diving bell, which would matter a great deal on the dive route.',
            },
          ],
        },
        cabin_to_deck: {
          title: 'Ladder to the Deck',
          desc: 'A ladder above the cabin leads straight to the deck.',
          interactions: [
            {
              label: 'Climb to the Deck',
              desc: 'Carry the treasure upward into the sea wind.',
            },
          ],
        },
        cabin_return: {
          title: 'Return to the Hold',
          desc: 'You can retrace your steps back to the hold.',
          interactions: [
            {
              label: 'Return to the Hold',
              desc: 'Climb back down into the lower hold.',
            },
          ],
        },
        deck_hub: {
          title: 'Deck',
          desc: 'The deck tilts under the storm, and a rescue ship is approaching in the distance. A hatch in the middle remains boarded shut.',
        },
        deck_flare: {
          title: 'Signal Flare Box',
          desc: 'A red storage box on the deck that still holds a few flares.',
          interactions: [
            {
              label: 'Take the Flares',
              desc: 'Recover three flares to call for rescue.',
            },
          ],
        },
        deck_hatch: {
          title: 'Boarded Deck Hatch',
          desc: 'The hatch is nailed shut. Opening it with the crowbar gives access back down to the lower breach.',
          interactions: [
            {
              label: 'Pry Open the Hatch',
              desc: 'The hatch opens, letting you reach the dive exit below.',
            },
          ],
        },
        deck_perfect_escape: {
          title: 'Wait for Rescue',
          desc: 'Stand on the deck with the treasure in your arms as the rescue ship draws closer.',
          interactions: [
            {
              label: 'Signal the Rescue Ship',
              desc: 'Raise the treasure and wave. This is the only route that leaves you alive and rich.',
            },
          ],
        },
        deck_return: {
          title: 'Return to the Hold',
          desc: 'The ladder leads back down into the broken hold.',
          interactions: [
            {
              label: 'Return to the Hold',
              desc: 'Climb back down from the deck.',
            },
          ],
        },
        pirate_backpack: {
          title: 'Backpack',
          desc: 'Combine the items you found so the compass points toward the route you truly want.',
        },
        compass_item: {
          title: 'Compass',
          desc: 'Its needle spins without direction until it is paired with the right fragment.',
        },
        sea_chart_item: {
          title: 'Sea Chart Fragment',
          desc: 'A torn chart marking the powder magazine. Combined with the compass, it points to the blasting route.',
        },
        astrolabe_item: {
          title: 'Astrolabe Fragment',
          desc: 'A fragment of a navigation astrolabe. Combined with the compass, it points toward the captain\'s hidden safe.',
        },
        deep_pearl_item: {
          title: 'Deep-Sea Pearl',
          desc: 'A pearl glowing with a strange light. Combined with the compass, it points toward the breach in the hold.',
        },
      },
    },
  },
  root: {
    id: 'root',
    title: '海盗船·分支宝藏',
    desc: '罗盘与碎片组合决定路线。三条路各有结局，完美结局只有一条。',
    type: 'text',
    isFixed: true,
    children: [
      // ── 场景一：底舱 ──────────────────────────────────────────
      {
        id: 'hold_hub',
        title: '底舱',
        desc: '舱壁倾斜，海水渗入脚踝。货箱漂浮，铁撬棒楔在木梁里，一只黄铜罗盘沉在水中。',
        type: 'text',
        sceneClue: '*hold',
        scenes: ['*hold'],
        layout: { direction: 270, distance: 130 },
        children: [
          {
            id: 'hold_compass_pick',
            title: '罗盘',
            desc: '黄铜罗盘，指针乱转，需要特定物品才能校准。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 225, distance: 150 },
            interactions: [
              {
                label: '捡起罗盘',
                when: '!#has_compass',
                addClues: ['#has_compass'],
                desc: '罗盘入手，指针仍在乱转——需要找到能校准它的物品再合用。',
              },
            ],
            doneClue: '#has_compass',
          },
          {
            id: 'hold_crowbar_pick',
            title: '铁撬棒',
            desc: '楔在木梁里的铁撬棒，坚固耐用。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 270, distance: 150 },
            interactions: [
              {
                label: '取出铁撬棒',
                when: '!#has_crowbar',
                addClues: ['#has_crowbar'],
                desc: '撬棒在手，能撬开船上多处封死的木板。',
              },
            ],
            doneClue: '#has_crowbar',
          },
          {
            id: 'hold_crate',
            title: '封死的货箱',
            desc: '漂浮的货箱，木板钉死，里面东西在晃动。需要撬棒。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 315, distance: 150 },
            preClue: '#has_crowbar',
            interactions: [
              {
                label: '用撬棒撬开货箱',
                when: '!#has_sea_chart',
                addClues: ['#has_sea_chart'],
                desc: '箱子里有一张海图碎片——与罗盘合用可指向火药路线。',
              },
            ],
            doneClue: '#has_sea_chart',
          },
          {
            id: 'hold_net',
            title: '沉入水中的网兜',
            desc: '腰深的海水里，一个网兜里有什么在隐约发光。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 135, distance: 150 },
            interactions: [
              {
                label: '潜水捞起网兜',
                when: '!#has_deep_pearl',
                addClues: ['#has_deep_pearl'],
                desc: '深海珍珠，泛着异光——与罗盘合用可指向底舱潜水出口。',
              },
            ],
            doneClue: '#has_deep_pearl',
          },
          {
            id: 'hold_to_powder',
            title: '通往火药库',
            desc: '船头方向的水密舱门，通往火药库。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 180, distance: 150 },
            preClue: '#route_gunpowder',
            interactions: [
              {
                label: '前往火药库（火药路线）',
                addClues: ['*powder_room', '-*hold'],
                desc: '罗盘指引你向船头走去，硫磺气息扑面而来。',
              },
            ],
          },
          {
            id: 'hold_to_cabin',
            title: '通往船长室',
            desc: '船中段的舱梯，通往船长室。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 90, distance: 150 },
            preClue: '#route_captain',
            interactions: [
              {
                label: '前往船长室（宝藏路线）',
                addClues: ['*captain_cabin', '-*hold'],
                desc: '罗盘指向船长室，那里有真正的宝藏。',
              },
            ],
          },
          {
            id: 'hold_dive_exit',
            title: '底舱破口',
            desc: '底舱最深处有一道破口，潜水可出，但需要潜水钟和信号弹。',
            type: 'text',
            scenes: ['*hold'],
            layout: { direction: 0, distance: 150 },
            preClue: ['AND', '#route_dive', '#diving_bell_found', '#signal_flare_found'],
            interactions: [
              {
                label: '点燃信号弹，套上潜水钟，从破口游出',
                when: '!#dive_escaped',
                addClues: ['@escape', '#dive_escaped'],
                desc: '信号弹冲上海面，你套着潜水钟从破口游出——远处有船赶来。',
              },
            ],
            doneClue: '#dive_escaped',
          },
        ],
      },

      // ── 场景二：火药库 ────────────────────────────────────────
      {
        id: 'powder_room_hub',
        title: '火药库',
        desc: '木桶、铜制药箱、导火索盘绕在架子上。飓风撞开了一道船壁裂缝，正是炸开出路的关键。',
        type: 'text',
        sceneClue: '*powder_room',
        scenes: ['*powder_room'],
        layout: { direction: 0, distance: 130 },
        children: [
          {
            id: 'powder_barrel',
            title: '火药桶',
            desc: '两桶密封火药，防水处理完好。',
            type: 'text',
            scenes: ['*powder_room'],
            layout: { direction: 45, distance: 150 },
            interactions: [
              {
                label: '搬运火药至裂缝处',
                when: '!#gunpowder_packed',
                addClues: ['#gunpowder_packed'],
                desc: '将火药桶推至船壁裂缝——这里是最薄弱的地方。',
              },
            ],
            doneClue: '#gunpowder_packed',
          },
          {
            id: 'powder_fuse',
            title: '导火索',
            desc: '足够长的导火索，能让你点燃后跑到安全距离。',
            type: 'text',
            scenes: ['*powder_room'],
            layout: { direction: 315, distance: 150 },
            preClue: '#gunpowder_packed',
            interactions: [
              {
                label: '引好导火索',
                when: '!#fuse_ready',
                addClues: ['#fuse_ready'],
                desc: '导火索一端接在火药桶，另一端延伸到安全角落。',
              },
            ],
            doneClue: '#fuse_ready',
          },
          {
            id: 'powder_chest',
            title: '角落的钉死木箱',
            desc: '角落里钉死的木箱，里面有航海仪器的声音。需要撬棒。',
            type: 'text',
            scenes: ['*powder_room'],
            layout: { direction: 270, distance: 150 },
            preClue: '#has_crowbar',
            interactions: [
              {
                label: '用撬棒撬开木箱',
                when: '!#has_astrolabe',
                addClues: ['#has_astrolabe'],
                desc: '星盘碎片——与罗盘合用可指向船长室暗格（如果你还没选路线）。',
              },
            ],
            doneClue: '#has_astrolabe',
          },
          {
            id: 'powder_explode',
            title: '引爆火药',
            desc: '导火索已就绪，点燃后炸开船壁，游向海面。',
            type: 'text',
            scenes: ['*powder_room'],
            layout: { direction: 90, distance: 150 },
            preClue: '#fuse_ready',
            interactions: [
              {
                label: '点燃，奔向安全位，等待爆炸',
                when: '!#powder_escaped',
                addClues: ['@escape', '#powder_escaped'],
                desc: '轰！舱壁炸开，阳光涌入——你游向海面。活着了，但没有宝藏。',
              },
            ],
            doneClue: '#powder_escaped',
          },
          {
            id: 'powder_return',
            title: '返回底舱',
            desc: '原路返回底舱。',
            type: 'text',
            scenes: ['*powder_room'],
            layout: { direction: 180, distance: 150 },
            interactions: [
              {
                label: '返回底舱',
                addClues: ['*hold', '-*powder_room'],
                desc: '原路退回底舱。',
              },
            ],
          },
        ],
      },

      // ── 场景三：船长室 ────────────────────────────────────────
      {
        id: 'captain_cabin_hub',
        title: '船长室',
        desc: '豪华舱室，摆设散落一地。一张大书桌，一个嵌在墙里的保险箱，宝藏就在其中。',
        type: 'text',
        sceneClue: '*captain_cabin',
        scenes: ['*captain_cabin'],
        layout: { direction: 90, distance: 130 },
        children: [
          {
            id: 'cabin_log',
            title: '船长日志',
            desc: '皮革封面日志，最后几页记录了飓风前的行动。',
            type: 'text',
            scenes: ['*captain_cabin'],
            layout: { direction: 45, distance: 150 },
            interactions: [
              {
                label: '翻阅船长日志',
                when: '!#safe_code_found',
                addClues: ['#safe_code_found'],
                desc: '日志末页：「保险箱密码如旧，以船之名——KRAKEN（克拉肯，巨型海妖）。」',
              },
            ],
            doneClue: '#safe_code_found',
          },
          {
            id: 'cabin_safe',
            title: '保险箱',
            desc: '钢制保险箱，六位字母密码锁。密码就在日志里。',
            type: 'password',
            scenes: ['*captain_cabin'],
            layout: { direction: 315, distance: 150 },
            preClue: '#safe_code_found',
            code: 'KRAKEN',
            successClues: ['#safe_opened', '#has_treasure'],
            doneClue: '#safe_opened',
            interactions: [
              {
                label: '输入密码',
                desc: '「以船之名」——KRAKEN，克拉肯。',
              },
            ],
          },
          {
            id: 'cabin_chest',
            title: '书桌旁的钉死铁箱',
            desc: '沉重铁箱，里面哗哗作响。需要撬棒。',
            type: 'text',
            scenes: ['*captain_cabin'],
            layout: { direction: 270, distance: 150 },
            preClue: '#has_crowbar',
            interactions: [
              {
                label: '用撬棒撬开铁箱',
                when: '!#diving_bell_found',
                addClues: ['#diving_bell_found'],
                desc: '里面是一套潜水钟——如果选了潜水路线会很有用。',
              },
            ],
            doneClue: '#diving_bell_found',
          },
          {
            id: 'cabin_to_deck',
            title: '通往甲板的舱梯',
            desc: '船长室上方的舱梯直通甲板。',
            type: 'text',
            scenes: ['*captain_cabin'],
            layout: { direction: 90, distance: 150 },
            preClue: '#safe_opened',
            interactions: [
              {
                label: '带着宝藏上甲板',
                addClues: ['*deck', '-*captain_cabin'],
                desc: '怀抱宝藏，攀上舱梯，甲板的海风扑面而来。',
              },
            ],
          },
          {
            id: 'cabin_return',
            title: '返回底舱',
            desc: '原路返回底舱。',
            type: 'text',
            scenes: ['*captain_cabin'],
            layout: { direction: 180, distance: 150 },
            interactions: [
              {
                label: '返回底舱',
                addClues: ['*hold', '-*captain_cabin'],
                desc: '原路退回底舱。',
              },
            ],
          },
        ],
      },

      // ── 场景四：甲板 ────────────────────────────────────────
      {
        id: 'deck_hub',
        title: '甲板',
        desc: '甲板倾斜，风浪翻滚。远处有一艘船的轮廓在靠近。甲板中央有一处舱口被木板封死。',
        type: 'text',
        sceneClue: '*deck',
        scenes: ['*deck'],
        layout: { direction: 180, distance: 130 },
        children: [
          {
            id: 'deck_flare',
            title: '信号弹储藏箱',
            desc: '甲板上的红色储藏箱，里面有信号弹。',
            type: 'text',
            scenes: ['*deck'],
            layout: { direction: 135, distance: 150 },
            interactions: [
              {
                label: '取出信号弹',
                when: '!#signal_flare_found',
                addClues: ['#signal_flare_found'],
                desc: '三支信号弹，点燃可引来救援。',
              },
            ],
            doneClue: '#signal_flare_found',
          },
          {
            id: 'deck_hatch',
            title: '封死的甲板舱口',
            desc: '舱口被木板封死，撬开后可下到底舱潜水出口。需要撬棒。',
            type: 'text',
            scenes: ['*deck'],
            layout: { direction: 225, distance: 150 },
            preClue: '#has_crowbar',
            interactions: [
              {
                label: '用撬棒撬开舱口',
                when: '!#deck_hatch_opened',
                addClues: ['#deck_hatch_opened'],
                desc: '舱口打开——可下到底舱的潜水出口。',
              },
            ],
            doneClue: '#deck_hatch_opened',
          },
          {
            id: 'deck_perfect_escape',
            title: '等待救援船',
            desc: '带着宝藏站在甲板上，救援船正在靠近。',
            type: 'text',
            scenes: ['*deck'],
            layout: { direction: 315, distance: 150 },
            preClue: '#has_treasure',
            interactions: [
              {
                label: '举起宝藏，挥手示意救援船',
                when: '!#perfect_deck_done',
                addClues: ['@escape', '#perfect_deck_done'],
                desc: '救援船靠近，你手持宝藏踏上甲板——这是唯一带走宝藏的路线！',
              },
            ],
            doneClue: '#perfect_deck_done',
          },
          {
            id: 'deck_return',
            title: '返回底舱',
            desc: '从舱梯下到底舱。',
            type: 'text',
            scenes: ['*deck'],
            layout: { direction: 45, distance: 150 },
            interactions: [
              {
                label: '返回底舱',
                addClues: ['*hold', '-*deck'],
                desc: '从舱梯下到底舱。',
              },
            ],
          },
        ],
      },

      // ── 背包：道具组合（核心机制：罗盘+3种碎片） ─────────────────
      {
        id: 'pirate_backpack',
        title: '背包',
        desc: '把找到的物品组合，让罗盘指向正确的方向。',
        type: 'backpack',
        isFixed: true,
        children: [
          {
            id: 'compass_item',
            title: '罗盘',
            desc: '指针乱转，需要与特定碎片组合才能校准。',
            type: 'item',
            preClue: ['AND', '#has_compass', '!#route_chosen'],
            combineWith: [
              {
                targetId: 'sea_chart_item',
                when: '!#route_chosen',
                addClues: ['#route_gunpowder', '#route_chosen'],
              },
              {
                targetId: 'astrolabe_item',
                when: '!#route_chosen',
                addClues: ['#route_captain', '#route_chosen'],
              },
              {
                targetId: 'deep_pearl_item',
                when: '!#route_chosen',
                addClues: ['#route_dive', '#route_chosen'],
              },
            ],
          },
          {
            id: 'sea_chart_item',
            title: '海图碎片',
            desc: '标注了火药库位置的海图碎片，与罗盘组合，罗盘将指向火药路线。',
            type: 'item',
            preClue: ['AND', '#has_sea_chart', '!#route_chosen'],
            combineWith: [
              {
                targetId: 'compass_item',
                when: '!#route_chosen',
                addClues: ['#route_gunpowder', '#route_chosen'],
              },
            ],
          },
          {
            id: 'astrolabe_item',
            title: '星盘碎片',
            desc: '航海星盘碎片，与罗盘组合，罗盘将指向船长室暗格。',
            type: 'item',
            preClue: ['AND', '#has_astrolabe', '!#route_chosen'],
            combineWith: [
              {
                targetId: 'compass_item',
                when: '!#route_chosen',
                addClues: ['#route_captain', '#route_chosen'],
              },
            ],
          },
          {
            id: 'deep_pearl_item',
            title: '深海珍珠',
            desc: '泛着异光的深海珍珠，与罗盘组合，罗盘将指向底舱出口方向。',
            type: 'item',
            preClue: ['AND', '#has_deep_pearl', '!#route_chosen'],
            combineWith: [
              {
                targetId: 'compass_item',
                when: '!#route_chosen',
                addClues: ['#route_dive', '#route_chosen'],
              },
            ],
          },
        ],
      },
    ],
  },
  triggers: [
    // 完美逃脱：带宝藏+船长路线
    {
      id: 'perfect_ending',
      when: ['AND', '@escape', '#has_treasure', '#route_captain'],
      addClues: ['@perfect_ending'],
    },
    // 普通逃脱：其他路线
    {
      id: 'normal_ending',
      when: ['AND', '@escape', '!@perfect_ending'],
      addClues: ['@normal_ending'],
    },
    // 超时
    {
      id: 'timeout',
      when: '@timeout',
      addClues: ['@timeout_ending'],
    },
  ],
}
