export interface Movie {
  title: string;
  englishTitle: string;
  director: {
    name: string;
    region: string;
  };
  year: number;
  genre: string[];
  rating: number;
  duration: number;
  region: string[];
  summary: string;
  poeticSummary: string;
  artworkStyle: {
    bgFrom: string;
    bgTo: string;
    shapeType: 'galaxy' | 'gate' | 'rings' | 'feather' | 'rose' | 'ocean' | 'stars' | 'path' | 'hourglass' | 'moon' | 'grid' | 'violin' | 'light' | 'city' | 'tree' | 'train' | 'chess' | 'flower' | 'key' | 'mask';
    color: string;
    accentColor: string;
  };
}

export const movies: Movie[] = [
  {
    title: "肖申克的救赎",
    englishTitle: "The Shawshank Redemption",
    director: { name: "弗兰克·德拉邦特", region: "美国" },
    year: 1994,
    genre: ["剧情"],
    rating: 9.7,
    duration: 142,
    region: ["美国"],
    summary: "银行家安迪因被误判杀害妻子而入狱，在肖申克监狱中用二十年完成了不可能的越狱，也救赎了狱友瑞德的人生。",
    poeticSummary: "漫长的风雨洗净了泥淖，那片没有边际的碧海终会等来飞鸟。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#0f172a",
      shapeType: "gate",
      color: "#94a3b8",
      accentColor: "#38bdf8"
    }
  },
  {
    title: "霸王别姬",
    englishTitle: "Farewell My Concubine",
    director: { name: "陈凯歌", region: "中国" },
    year: 1993,
    genre: ["剧情", "爱情"],
    rating: 9.6,
    duration: 171,
    region: ["中国", "中国香港"],
    summary: "段小楼与程蝶衣从小在戏班学艺，合演《霸王别姬》名震京城。半个世纪的爱恨纠葛中，京剧的兴衰与时代的变迁交织成一部悲怆史诗。",
    poeticSummary: "尘世的锣鼓渐次停息，唯有台上的戏，唱进了没有时间的梦里。",
    artworkStyle: {
      bgFrom: "#03001e",
      bgTo: "#12001c",
      shapeType: "mask",
      color: "#f43f5e",
      accentColor: "#fb7185"
    }
  },
  {
    title: "阿甘正传",
    englishTitle: "Forrest Gump",
    director: { name: "罗伯特·泽米吉斯", region: "美国" },
    year: 1994,
    genre: ["剧情", "喜剧"],
    rating: 9.5,
    duration: 142,
    region: ["美国"],
    summary: "智商只有75的阿甘，凭着一股“跑下去“的傻劲，见证了美国战后三十年的重大历史事件，也始终爱着青梅竹马的珍妮。",
    poeticSummary: "在风中漫无目的飞舞的羽毛，落在了每个用心奔跑的旅途之上。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#0b1528",
      shapeType: "feather",
      color: "#cbd5e1",
      accentColor: "#f1f5f9"
    }
  },
  {
    title: "泰坦尼克号",
    englishTitle: "Titanic",
    director: { name: "詹姆斯·卡梅隆", region: "加拿大" },
    year: 1997,
    genre: ["爱情", "灾难"],
    rating: 9.4,
    duration: 194,
    region: ["美国"],
    summary: "穷画家杰克与贵族少女罗丝在泰坦尼克号首航中相遇相爱，巨轮撞上冰山后，杰克把生的希望留给了罗丝。",
    poeticSummary: "冰山沉入深海，而那首手风琴的旋律，永留于永不起航的黎明。",
    artworkStyle: {
      bgFrom: "#04081c",
      bgTo: "#09143c",
      shapeType: "ocean",
      color: "#38bdf8",
      accentColor: "#22d3ee"
    }
  },
  {
    title: "千与千寻",
    englishTitle: "Spirited Away",
    director: { name: "宫崎骏", region: "日本" },
    year: 2001,
    genre: ["动画", "奇幻"],
    rating: 9.4,
    duration: 125,
    region: ["日本"],
    summary: "10岁的千寻随父母误入神灵世界，父母因贪吃变成了猪。为了救回父母，她在汤婆婆的浴场里打工，逐渐学会了勇敢与独立。",
    poeticSummary: "忘记了名字的童年散落在风中，但那缕温热的灯火会指引回家的路。",
    artworkStyle: {
      bgFrom: "#080721",
      bgTo: "#1c0d45",
      shapeType: "train",
      color: "#fb923c",
      accentColor: "#f472b6"
    }
  },
  {
    title: "美丽人生",
    englishTitle: "Life Is Beautiful",
    director: { name: "罗伯托·贝尼尼", region: "意大利" },
    year: 1997,
    genre: ["剧情", "喜剧", "战争"],
    rating: 9.5,
    duration: 116,
    region: ["意大利"],
    summary: "犹太青年圭多与多拉相爱并有了儿子约书亚，二战爆发后一家人被关进集中营。为了让儿子相信这只是场游戏，圭多编造了一个美丽的谎言。",
    poeticSummary: "在最黑暗的角落里，他用温柔编织了一个不曾醒来的美丽游戏。",
    artworkStyle: {
      bgFrom: "#040b15",
      bgTo: "#0a1f33",
      shapeType: "light",
      color: "#e2e8f0",
      accentColor: "#fbbf24"
    }
  },
  {
    title: "辛德勒的名单",
    englishTitle: "Schindler's List",
    director: { name: "史蒂文·斯皮尔伯格", region: "美国" },
    year: 1993,
    genre: ["剧情", "历史", "战争"],
    rating: 9.5,
    duration: 195,
    region: ["美国"],
    summary: "二战期间，德国商人辛德勒目睹纳粹对犹太人的屠杀后，倾尽家财开出一份“生命名单“，拯救了1100多名犹太人的生命。",
    poeticSummary: "当世界陷入冰冷的黑暗，那一抹抹微弱的红，点亮了人性的微光。",
    artworkStyle: {
      bgFrom: "#020205",
      bgTo: "#0f0f16",
      shapeType: "rose",
      color: "#e11d48",
      accentColor: "#fda4af"
    }
  },
  {
    title: "盗梦空间",
    englishTitle: "Inception",
    director: { name: "克里斯托弗·诺兰", region: "英国" },
    year: 2010,
    genre: ["科幻", "动作"],
    rating: 9.4,
    duration: 148,
    region: ["美国", "英国"],
    summary: "职业盗梦者柯布受命完成一项不可能的任务——在目标的深层潜意识中植入一个想法。多重梦境层层嵌套，现实与梦的边界逐渐模糊。",
    poeticSummary: "旋转的陀螺若不停歇，那场关于重逢的梦，便永远不必醒来。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#1e1b4b",
      shapeType: "rings",
      color: "#e2e8f0",
      accentColor: "#38bdf8"
    }
  },
  {
    title: "这个杀手不太冷",
    englishTitle: "Léon: The Professional",
    director: { name: "吕克·贝松", region: "法国" },
    year: 1994,
    genre: ["剧情", "动作"],
    rating: 9.4,
    duration: 110,
    region: ["法国"],
    summary: "职业杀手里昂收留了全家被杀害的12岁女孩玛蒂尔达，两人在纽约的公寓里相互取暖——他教她杀人，她教他生活。",
    poeticSummary: "一株不曾落地的盆栽，在钢铁森林的角落里，开出了温热的花。",
    artworkStyle: {
      bgFrom: "#080c1d",
      bgTo: "#161b33",
      shapeType: "flower",
      color: "#4ade80",
      accentColor: "#cbd5e1"
    }
  },
  {
    title: "忠犬八公的故事",
    englishTitle: "Hachi: A Dog's Tale",
    director: { name: "拉斯·霍尔斯道姆", region: "瑞典" },
    year: 2009,
    genre: ["剧情"],
    rating: 9.4,
    duration: 93,
    region: ["美国", "英国"],
    summary: "大学教授帕克在小镇车站偶遇一只走失的秋田犬，取名“八公“。帕克去世后，八公每天傍晚准时出现在车站，一等就是九年。",
    poeticSummary: "风雪模糊了小镇车站的钟声，它留在原地，等了一生一世的傍晚。",
    artworkStyle: {
      bgFrom: "#030712",
      bgTo: "#0f172a",
      shapeType: "stars",
      color: "#94a3b8",
      accentColor: "#e2e8f0"
    }
  },
  {
    title: "十二怒汉",
    englishTitle: "12 Angry Men",
    director: { name: "西德尼·吕美特", region: "美国" },
    year: 1957,
    genre: ["剧情"],
    rating: 9.4,
    duration: 96,
    region: ["美国"],
    summary: "一个贫民窟少年被控弑父，12名陪审员在闷热的房间里展开辩论。起初只有一人投“无罪“，一场关于偏见与正义的对话由此展开。",
    poeticSummary: "闷热的木屋里，理性的微风徐徐吹过，推开了偏见与阴霾的窗棂。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#111827",
      shapeType: "grid",
      color: "#cbd5e1",
      accentColor: "#475569"
    }
  },
  {
    title: "教父",
    englishTitle: "The Godfather",
    director: { name: "弗朗西斯·福特·科波拉", region: "美国" },
    year: 1972,
    genre: ["剧情", "犯罪"],
    rating: 9.3,
    duration: 175,
    region: ["美国"],
    summary: "维托·柯里昂是纽约最有权势的黑手党家族首领。三儿子迈克尔本不想涉足家族事务，却在一次次变故中走向了父亲的老路。",
    poeticSummary: "权力的阴影在低沉的管弦乐中蔓延，有些荣光，注定要由孤独来献祭。",
    artworkStyle: {
      bgFrom: "#020204",
      bgTo: "#0c0d16",
      shapeType: "rose",
      color: "#e2e8f0",
      accentColor: "#991b1b"
    }
  },
  {
    title: "星际穿越",
    englishTitle: "Interstellar",
    director: { name: "克里斯托弗·诺兰", region: "英国" },
    year: 2014,
    genre: ["科幻", "冒险"],
    rating: 9.3,
    duration: 169,
    region: ["美国", "英国"],
    summary: "不远的未来地球环境恶化，前NASA飞行员库珀穿越虫洞寻找人类新家园。在黑洞边缘的一小时，等于地球上的七年。",
    poeticSummary: "穿越亿万光年的荒凉黑洞，唯有爱能穿透时空，将回声送达彼岸。",
    artworkStyle: {
      bgFrom: "#01010d",
      bgTo: "#050a1e",
      shapeType: "galaxy",
      color: "#a5f3fc",
      accentColor: "#60a5fa"
    }
  },
  {
    title: "楚门的世界",
    englishTitle: "The Truman Show",
    director: { name: "彼得·威尔", region: "澳大利亚" },
    year: 1998,
    genre: ["剧情", "科幻"],
    rating: 9.3,
    duration: 103,
    region: ["美国"],
    summary: "楚门从出生起就活在一个巨大的摄影棚里，他的一切都是被安排的真人秀。当发现真相后，他决心走出这个虚假的世界。",
    poeticSummary: "当虚幻的蓝天被轻轻触及，他优雅地鞠躬谢幕，走向未知的晨曦。",
    artworkStyle: {
      bgFrom: "#081026",
      bgTo: "#172554",
      shapeType: "gate",
      color: "#38bdf8",
      accentColor: "#e0f2fe"
    }
  },
  {
    title: "海上钢琴师",
    englishTitle: "The Legend of 1900",
    director: { name: "朱塞佩·托纳多雷", region: "意大利" },
    year: 1998,
    genre: ["剧情", "音乐"],
    rating: 9.3,
    duration: 165,
    region: ["意大利"],
    summary: "1900年，一个婴儿被遗弃在豪华邮轮上，被锅炉工收养。他无师自通成为钢琴天才，却一生从未踏上过陆地。",
    poeticSummary: "八十八个琴键是无限的，他选择留在永不靠岸的船上，弹奏一生的纯白。",
    artworkStyle: {
      bgFrom: "#040b19",
      bgTo: "#0c1f40",
      shapeType: "violin",
      color: "#f8fafc",
      accentColor: "#94a3b8"
    }
  },
  {
    title: "机器人总动员",
    englishTitle: "WALL-E",
    director: { name: "安德鲁·斯坦顿", region: "美国" },
    year: 2008,
    genre: ["动画", "科幻", "冒险"],
    rating: 9.3,
    duration: 98,
    region: ["美国"],
    summary: "公元2805年，地球上只剩一个清理垃圾的小机器人瓦力。探测机器人伊娃从天而降，瓦力坠入爱河，追随她踏上太空冒险。",
    poeticSummary: "在荒凉的废墟星球，微弱的牵手，是浩瀚星空里最浪漫的脉搏。",
    artworkStyle: {
      bgFrom: "#030712",
      bgTo: "#0f1c3f",
      shapeType: "stars",
      color: "#22d3ee",
      accentColor: "#f1f5f9"
    }
  },
  {
    title: "三傻大闹宝莱坞",
    englishTitle: "3 Idiots",
    director: { name: "拉库马·希拉尼", region: "印度" },
    year: 2009,
    genre: ["剧情", "喜剧"],
    rating: 9.2,
    duration: 170,
    region: ["印度"],
    summary: "兰彻是帝国工程学院里最不按常理出牌的学生，他用热爱而非功利的态度对待学习，改变了好友法尔汉和拉朱的人生轨迹。",
    poeticSummary: "青春在功利的考场里呼喊，而他们乘着风，追寻名为热爱的自由野马。",
    artworkStyle: {
      bgFrom: "#070216",
      bgTo: "#1a0b3c",
      shapeType: "path",
      color: "#a855f7",
      accentColor: "#cbd5e1"
    }
  },
  {
    title: "放牛班的春天",
    englishTitle: "The Chorus",
    director: { name: "克里斯托夫·巴拉蒂耶", region: "法国" },
    year: 2004,
    genre: ["剧情", "音乐"],
    rating: 9.3,
    duration: 97,
    region: ["法国", "瑞士", "德国"],
    summary: "失意的音乐家马修来到一所问题少年寄宿学校做代课老师，他用音乐打开了孩子们封闭的心门，组建了一支合唱团。",
    poeticSummary: "纸飞机飞过斑驳的铁门，那些迷失的音符，悄然拼凑出春天的第一阕赞美诗。",
    artworkStyle: {
      bgFrom: "#0d0e1a",
      bgTo: "#1e1e38",
      shapeType: "feather",
      color: "#f8fafc",
      accentColor: "#38bdf8"
    }
  },
  {
    title: "无间道",
    englishTitle: "Infernal Affairs",
    director: { name: "刘伟强", region: "中国香港" },
    year: 2002,
    genre: ["剧情", "犯罪"],
    rating: 9.3,
    duration: 101,
    region: ["中国香港"],
    summary: "警方卧底陈永仁与黑帮卧底刘建明，分别潜入对方组织多年。一场毒品交易后，双方都意识到——组织里有内鬼。",
    poeticSummary: "天台的阳光刺眼而冰冷，两个在深渊中挣扎的影子，永远无法回望起点。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#0f172a",
      shapeType: "grid",
      color: "#94a3b8",
      accentColor: "#f1f5f9"
    }
  },
  {
    title: "熔炉",
    englishTitle: "Silenced",
    director: { name: "黄东赫", region: "韩国" },
    year: 2011,
    genre: ["剧情"],
    rating: 9.3,
    duration: 125,
    region: ["韩国"],
    summary: "来自首尔的哑语美术老师姜仁浩来到雾津一所聋哑学校任教，逐渐发现教职工对学生们长期实施的性侵暴行。他决定撕开黑暗。",
    poeticSummary: "我们一路奋战，并不是为了改变世界，而是为了不让世界改变我们最初的纯洁。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#0a1329",
      shapeType: "gate",
      color: "#e2e8f0",
      accentColor: "#94a3b8"
    }
  },
  {
    title: "大话西游之大圣娶亲",
    englishTitle: "A Chinese Odyssey Part Two: Cinderella",
    director: { name: "刘镇伟", region: "中国香港" },
    year: 1995,
    genre: ["喜剧", "爱情", "奇幻"],
    rating: 9.2,
    duration: 99,
    region: ["中国香港"],
    summary: "至尊宝穿越回五百年前，本为救白晶晶却爱上了紫霞仙子。戴上金箍就无法拥抱你，放下金箍就无法保护你。",
    poeticSummary: "戴上金箍，那片荒漠上的晚霞，成了此生再也回不去的梦幻泡影。",
    artworkStyle: {
      bgFrom: "#1e010a",
      bgTo: "#020102",
      shapeType: "rings",
      color: "#bf55ed",
      accentColor: "#e03e54"
    }
  },
  {
    title: "活着",
    englishTitle: "To Live",
    director: { name: "张艺谋", region: "中国" },
    year: 1994,
    genre: ["剧情", "历史", "家庭"],
    rating: 9.3,
    duration: 133,
    region: ["中国", "中国香港"],
    summary: "福贵本是地主家的纨绔少爷，因赌博输光家产，却阴差阳错躲过了土改。此后几十年里，他经历了战争、运动和家庭的一次次离散。",
    poeticSummary: "皮影戏在油灯斑驳里流转，即便命运千疮百孔，也还是要拉紧马车继续前行。",
    artworkStyle: {
      bgFrom: "#140c03",
      bgTo: "#030200",
      shapeType: "light",
      color: "#fb923c",
      accentColor: "#ea580c"
    }
  },
  {
    title: "鬼子来了",
    englishTitle: "Devils on the Doorstep",
    director: { name: "姜文", region: "中国" },
    year: 2000,
    genre: ["剧情", "历史", "战争"],
    rating: 9.3,
    duration: 139,
    region: ["中国"],
    summary: "抗日战争末期，河北挂甲台村的马大三被强塞了一个日本俘虏和一个翻译。全村人既不敢杀也不敢放，在恐惧与摇摆中走向荒诞的结局。",
    poeticSummary: "在黑色幽默与荒诞的唢呐声中，历史的利刃，劈开了荒野的恐惧与暮色。",
    artworkStyle: {
      bgFrom: "#020202",
      bgTo: "#121212",
      shapeType: "grid",
      color: "#f8fafc",
      accentColor: "#94a3b8"
    }
  },
  {
    title: "大闹天宫",
    englishTitle: "The Monkey King",
    director: { name: "万籁鸣", region: "中国" },
    year: 1961,
    genre: ["动画", "奇幻"],
    rating: 9.3,
    duration: 114,
    region: ["中国"],
    summary: "中国动画史上的巅峰之作。孙悟空龙宫借宝、天庭封官、大闹蟠桃会、大战天兵——从头到尾都是反抗与自由的狂欢。",
    poeticSummary: "朱砂与墨色在古老的宣纸上飞舞，那是关于抗争与自由最斑斓的童年梦境。",
    artworkStyle: {
      bgFrom: "#1f0904",
      bgTo: "#0a0100",
      shapeType: "galaxy",
      color: "#fbbf24",
      accentColor: "#ef4444"
    }
  },
  {
    title: "乱世佳人",
    englishTitle: "Gone with the Wind",
    director: { name: "维克多·弗莱明", region: "美国" },
    year: 1939,
    genre: ["剧情", "爱情", "历史"],
    rating: 9.3,
    duration: 238,
    region: ["美国"],
    summary: "南北战争背景下，骄傲任性的南方庄园千金斯嘉丽在战火中失去了一切，却又一次次凭着自己的倔强站了起来。“明天又是新的一天。”",
    poeticSummary: "战火烧透了红色的泥土，但她说，明天又是新的一天，橡树依旧挺拔。",
    artworkStyle: {
      bgFrom: "#1a0505",
      bgTo: "#050101",
      shapeType: "tree",
      color: "#f43f5e",
      accentColor: "#d97706"
    }
  },
  {
    title: "触不可及",
    englishTitle: "The Intouchables",
    director: { name: "奥利维埃·纳卡什", region: "法国" },
    year: 2011,
    genre: ["剧情", "喜剧"],
    rating: 9.3,
    duration: 112,
    region: ["法国"],
    summary: "因跳伞事故瘫痪的白人富翁菲利普雇佣了刚从监狱出来的黑人青年德里斯做护工。两个来自完全不同世界的人，碰撞出了最真诚的友谊。",
    poeticSummary: "在规整优雅的古典乐中，一阵随性的爵士音符响过，唤醒了冰封轮椅上的春光。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#0b1528",
      shapeType: "rings",
      color: "#e2e8f0",
      accentColor: "#38bdf8"
    }
  },
  {
    title: "让子弹飞",
    englishTitle: "Let the Bullets Fly",
    director: { name: "姜文", region: "中国" },
    year: 2010,
    genre: ["剧情", "喜剧", "动作"],
    rating: 9.0,
    duration: 132,
    region: ["中国", "中国香港"],
    summary: "北洋年间，悍匪张麻子劫了县长马邦德的火车后冒名上任鹅城，与地方恶霸黄四郎展开了一场斗智斗勇的较量。",
    poeticSummary: "火车徐徐驶向夕阳，而马背上的身影，注定要隐入没有名字的群山深处。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#1c1202",
      shapeType: "train",
      color: "#ca8a04",
      accentColor: "#ef4444"
    }
  },
  {
    title: "控方证人",
    englishTitle: "Witness for the Prosecution",
    director: { name: "比利·怀尔德", region: "美国" },
    year: 1957,
    genre: ["剧情", "悬疑", "犯罪"],
    rating: 9.6,
    duration: 116,
    region: ["美国"],
    summary: "伦敦著名律师威尔弗里德爵士为涉嫌谋杀富婆的沃尔辩护。庭审中，沃尔的妻子克莉丝汀竟作为控方证人出庭，一场精妙绝伦的法庭反转就此展开。",
    poeticSummary: "法庭的灯光惨白如镜，在精妙的反转之下，爱欲与背叛皆沦为悲凉的尘埃。",
    artworkStyle: {
      bgFrom: "#0b0c10",
      bgTo: "#1f2833",
      shapeType: "chess",
      color: "#94a3b8",
      accentColor: "#cbd5e1"
    }
  },
  {
    title: "天堂电影院",
    englishTitle: "Cinema Paradiso",
    director: { name: "朱塞佩·托纳多雷", region: "意大利" },
    year: 1988,
    genre: ["剧情", "爱情"],
    rating: 9.2,
    duration: 124,
    region: ["意大利", "法国"],
    summary: "意大利小镇上，男孩多多与电影院放映师阿尔弗雷多成了忘年交。在阿尔弗雷多的鼓励下，多多走出小镇追寻电影梦想，多年后回乡参加葬礼时收到了一份特殊的礼物。",
    poeticSummary: "胶片在放映机的灯火中燃烧，那是关于成长、吻、以及故乡最漫长的道别。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#1e1b4b",
      shapeType: "light",
      color: "#cbd5e1",
      accentColor: "#6366f1"
    }
  },
  {
    title: "指环王3：王者无敌",
    englishTitle: "The Return of the King",
    director: { name: "彼得·杰克逊", region: "新西兰" },
    year: 2003,
    genre: ["奇幻", "冒险", "动作"],
    rating: 9.3,
    duration: 201,
    region: ["新西兰", "美国"],
    summary: "弗罗多和山姆深入魔多完成销毁至尊魔戒的使命，阿拉贡率领人类最后的军队在黑门前决战索伦。中土世界的命运在此一战。",
    poeticSummary: "白树重归繁茂，当魔戒消逝于烈焰，勇士们终在晨曦的微光中安然而归。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#111827",
      shapeType: "tree",
      color: "#e2e8f0",
      accentColor: "#cbd5e1"
    }
  },
  {
    title: "蝙蝠侠：黑暗骑士",
    englishTitle: "The Dark Knight",
    director: { name: "克里斯托弗·诺兰", region: "英国" },
    year: 2008,
    genre: ["动作", "犯罪", "剧情"],
    rating: 9.2,
    duration: 152,
    region: ["美国", "英国"],
    summary: "蝙蝠侠联手检察官哈维·丹特打击哥谭市犯罪，却遭遇了不按任何规则出牌的小丑。混乱面前，英雄的底线受到了最极端的考验。",
    poeticSummary: "硬币在混乱的雨夜中翻卷，蝙蝠的影子融入黑夜，守望着哥谭静默的黎明。",
    artworkStyle: {
      bgFrom: "#02040a",
      bgTo: "#0a1128",
      shapeType: "city",
      color: "#64748b",
      accentColor: "#94a3b8"
    }
  },
  {
    title: "龙猫",
    englishTitle: "My Neighbor Totoro",
    director: { name: "宫崎骏", region: "日本" },
    year: 1988,
    genre: ["动画", "奇幻"],
    rating: 9.2,
    duration: 86,
    region: ["日本"],
    summary: "小月和小梅随父亲搬到乡下，在一棵大樟树下发现了只有孩子才能看见的森林精灵龙猫。龙猫带着她们在月光下飞翔，在树顶眺望田野。",
    poeticSummary: "踩着软绵绵的雨后泥土，大龙猫撑着竹伞，在深夜的森林深处轻轻守护着童真。",
    artworkStyle: {
      bgFrom: "#02120b",
      bgTo: "#052e16",
      shapeType: "tree",
      color: "#86efac",
      accentColor: "#22c55e"
    }
  },
  {
    title: "搏击俱乐部",
    englishTitle: "Fight Club",
    director: { name: "大卫·芬奇", region: "美国" },
    year: 1999,
    genre: ["剧情", "动作", "悬疑"],
    rating: 9.1,
    duration: 139,
    region: ["美国", "德国"],
    summary: "一个患有失眠症的都市白领遇到了肥皂商人泰勒，两人创建了一个地下搏击俱乐部。会员越来越多，泰勒的计划却远远超越了拳拳到肉的宣泄。",
    poeticSummary: "两手相执，高楼在虚无与火焰中轰然崩塌，那是一场电掣现代都市的荒诞葬礼。",
    artworkStyle: {
      bgFrom: "#0a0a0a",
      bgTo: "#1c1105",
      shapeType: "city",
      color: "#94a3b8",
      accentColor: "#ca8a04"
    }
  },
  {
    title: "当幸福来敲门",
    englishTitle: "The Pursuit of Happyness",
    director: { name: "加布里尔·穆奇诺", region: "意大利" },
    year: 2006,
    genre: ["剧情", "传记"],
    rating: 9.2,
    duration: 117,
    region: ["美国"],
    summary: "推销员克里斯用全部积蓄购入骨密度扫描仪却滞销，妻子离开、房东赶人，他带着5岁的儿子流落地铁站厕所。为了翻身，他争抢一个无薪的股票经纪人实习机会。",
    poeticSummary: "在无数个绝望的地铁宿营夜后，在人海中噙满泪水的掌声，是黎明最响亮的回答。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#1e1b4b",
      shapeType: "light",
      color: "#fbbf24",
      accentColor: "#f59e0b"
    }
  },
  {
    title: "飞屋环游记",
    englishTitle: "Up",
    director: { name: "彼特·道格特", region: "美国" },
    year: 2009,
    genre: ["动画", "冒险", "剧情"],
    rating: 9.1,
    duration: 96,
    region: ["美国"],
    summary: "78岁的卡尔为了实现亡妻的遗愿，用成千上万个气球把老屋升上天空飞往南美洲。意外带上了一个8岁小胖墩罗素，两人在仙境瀑布边展开冒险。",
    poeticSummary: "五彩斑斓的气球牵起斑驳的小屋，把关于一生的追寻，温柔落定在童话的瀑布边缘。",
    artworkStyle: {
      bgFrom: "#041d3b",
      bgTo: "#0f3c6d",
      shapeType: "stars",
      color: "#f472b6",
      accentColor: "#60a5fa"
    }
  },
  {
    title: "少年派的奇幻漂流",
    englishTitle: "Life of Pi",
    director: { name: "李安", region: "中国台湾" },
    year: 2012,
    genre: ["剧情", "奇幻", "冒险"],
    rating: 9.1,
    duration: 127,
    region: ["美国", "中国台湾", "英国", "加拿大"],
    summary: "16岁的印度少年派一家带着动物园的动物乘船移民加拿大，途中遭遇海难。派与一只孟加拉虎理查德·帕克在太平洋上漂了227天。",
    poeticSummary: "茫茫碧海如镜，与猛虎同舟前行的日子，是一场关于信仰与生存最奇幻的梦境。",
    artworkStyle: {
      bgFrom: "#04152e",
      bgTo: "#022c54",
      shapeType: "ocean",
      color: "#22d3ee",
      accentColor: "#fbbf24"
    }
  },
  {
    title: "怦然心动",
    englishTitle: "Flipped",
    director: { name: "罗伯·莱纳", region: "美国" },
    year: 2010,
    genre: ["剧情", "爱情"],
    rating: 9.1,
    duration: 90,
    region: ["美国"],
    summary: "二年级时朱莉对邻家男孩布莱斯一见钟情，此后六年里她追他躲。当布莱斯终于开始注意到朱莉时，朱莉却在重新思考——他到底值不值得我喜欢？",
    poeticSummary: "彩虹般絢烂的女孩，住在高高的无花果树梢，让每个单调的清晨都拥有了颜色。",
    artworkStyle: {
      bgFrom: "#061517",
      bgTo: "#0a2d24",
      shapeType: "tree",
      color: "#6ee7b7",
      accentColor: "#fbcfe8"
    }
  },
  {
    title: "狮子王",
    englishTitle: "The Lion King",
    director: { name: "罗杰·阿勒斯", region: "美国" },
    year: 1994,
    genre: ["动画", "冒险", "歌舞"],
    rating: 9.1,
    duration: 89,
    region: ["美国"],
    summary: "小狮子辛巴被叔叔刀疤陷害，以为父亲的死是自己的错，逃离了荣耀大地。多年后在朋友们的鼓励下，他决定回去夺回本该属于自己的王位。",
    poeticSummary: "荣耀石上传来万物的低吼，小狮子在风雨中历练归来，昂首唱起生命的轮回之歌。",
    artworkStyle: {
      bgFrom: "#200d04",
      bgTo: "#050201",
      shapeType: "moon",
      color: "#f59e0b",
      accentColor: "#dc2626"
    }
  },
  {
    title: "闻香识女人",
    englishTitle: "Scent of a Woman",
    director: { name: "马丁·布莱斯特", region: "美国" },
    year: 1992,
    genre: ["剧情"],
    rating: 9.1,
    duration: 157,
    region: ["美国"],
    summary: "贫困高中生查理受雇在感恩节照顾脾气暴躁的盲人退役中校弗兰克。弗兰克带着查理去纽约进行“最后的狂欢“——一顿大餐、一辆法拉利、一曲探戈。",
    poeticSummary: "探戈乐声里的旋转曼妙，是一颗疲惫苍老的心，在绝望深处与世界最后的和解。",
    artworkStyle: {
      bgFrom: "#0c0211",
      bgTo: "#020005",
      shapeType: "rose",
      color: "#c084fc",
      accentColor: "#d8b4fe"
    }
  },
  {
    title: "钢琴家",
    englishTitle: "The Pianist",
    director: { name: "罗曼·波兰斯基", region: "法国" },
    year: 2002,
    genre: ["剧情", "音乐", "战争"],
    rating: 9.2,
    duration: 150,
    region: ["法国", "德国", "英国", "波兰"],
    summary: "波兰犹太钢琴家斯普尔曼在二战华沙的废墟中东躲西藏，靠朋友的帮助和一个德国军官的恻隐之心活了下来。他坐在钢琴前的那一刻，音乐超越了战争。",
    poeticSummary: "废墟冰冷，但在那架落满灰尘的钢琴前，音符如水，冲刷着战争留下的所有血迹。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#12131a",
      shapeType: "violin",
      color: "#ffffff",
      accentColor: "#475569"
    }
  },
  {
    title: "指环王2：双塔奇兵",
    englishTitle: "The Two Towers",
    director: { name: "彼得·杰克逊", region: "新西兰" },
    year: 2002,
    genre: ["奇幻", "冒险", "动作"],
    rating: 9.2,
    duration: 179,
    region: ["新西兰", "美国"],
    summary: "护戒小队分散三路：弗罗多继续向魔多前进，阿拉贡等人前往洛汗王国抵抗萨鲁曼的大军，树人向艾辛格进军。圣盔谷之战成为中土历史上最壮烈的守城战。",
    poeticSummary: "号角在圣盔谷的绝壁上吹响，当晨光穿透薄雾，白衣骑兵重回守望的平原。",
    artworkStyle: {
      bgFrom: "#080b15",
      bgTo: "#020306",
      shapeType: "gate",
      color: "#e2e8f0",
      accentColor: "#94a3b8"
    }
  },
  {
    title: "指环王1：护戒使者",
    englishTitle: "The Fellowship of the Ring",
    director: { name: "彼得·杰克逊", region: "新西兰" },
    year: 2001,
    genre: ["奇幻", "冒险", "动作"],
    rating: 9.1,
    duration: 178,
    region: ["新西兰", "美国"],
    summary: "霍比特人弗罗多继承了一枚至尊魔戒，必须在中土被黑暗吞没之前将其投入末日火山的烈焰中销毁。九人护戒小队从瑞文戴尔出发，踏上了没有回头路的旅程。",
    poeticSummary: "夏尔的溪流清澈如镜，从踏出家门的那天起，漫长的黑影就已悄然拉开序幕。",
    artworkStyle: {
      bgFrom: "#051614",
      bgTo: "#010807",
      shapeType: "rings",
      color: "#34d399",
      accentColor: "#fbbf24"
    }
  },
  {
    title: "教父2",
    englishTitle: "The Godfather: Part II",
    director: { name: "弗朗西斯·福特·科波拉", region: "美国" },
    year: 1974,
    genre: ["剧情", "犯罪"],
    rating: 9.2,
    duration: 202,
    region: ["美国"],
    summary: "两条时间线交织：年轻的维托·柯里昂从西西里移民到纽约，一步步建立家族帝国；他的儿子迈克尔在父亲去世后成为新教父，却越来越孤独。",
    poeticSummary: "西西里的橄榄林随风起舞，而坐在深秋湖畔的主人，早已把自己献祭给了无边的静默。",
    artworkStyle: {
      bgFrom: "#080604",
      bgTo: "#010101",
      shapeType: "chess",
      color: "#e2e8f0",
      accentColor: "#7f1d1d"
    }
  },
  {
    title: "天空之城",
    englishTitle: "Castle in the Sky",
    director: { name: "宫崎骏", region: "日本" },
    year: 1986,
    genre: ["动画", "奇幻", "冒险"],
    rating: 9.1,
    duration: 124,
    region: ["日本"],
    summary: "少女希达从空中坠落，被矿工少年巴鲁接住。她胸前神秘的飞行石引来了军队和海盗的追逐，两人一起寻找传说中漂浮在云端的天空之城拉普达。",
    poeticSummary: "云海涌动处，废弃的拉普达花园里，只有古老的机器人守护着一朵蒲公英。",
    artworkStyle: {
      bgFrom: "#021526",
      bgTo: "#0e3150",
      shapeType: "galaxy",
      color: "#67e8f9",
      accentColor: "#38bdf8"
    }
  },
  {
    title: "沉默的羔羊",
    englishTitle: "The Silence of the Lambs",
    director: { name: "乔纳森·戴米", region: "美国" },
    year: 1991,
    genre: ["剧情", "犯罪", "惊悚"],
    rating: 8.9,
    duration: 118,
    region: ["美国"],
    summary: "实习特工克拉丽丝为追踪连环杀手“野牛比尔“，求助于被关在精神病院高戒备牢房里的食人魔汉尼拔医生。两人之间的对话是一场猫鼠游戏般的心理博弈。",
    poeticSummary: "玻璃墙的两端是理性的博弈，那些在深夜啼叫的羔羊，是否找到了安歇之所。",
    artworkStyle: {
      bgFrom: "#030614",
      bgTo: "#0a1226",
      shapeType: "mask",
      color: "#ffffff",
      accentColor: "#ef4444"
    }
  },
  {
    title: "拯救大兵瑞恩",
    englishTitle: "Saving Private Ryan",
    director: { name: "史蒂文·斯皮尔伯格", region: "美国" },
    year: 1998,
    genre: ["剧情", "战争"],
    rating: 9.1,
    duration: 169,
    region: ["美国"],
    summary: "诺曼底登陆后，瑞恩家的四个儿子中三个战死。米勒上尉奉命率领一支八人小队深入德军腹地，寻找唯一幸存的第四个儿子詹姆斯·瑞恩，带他回家。",
    poeticSummary: "硝烟在落日的墓碑前慢慢散去，白发老兵的军礼里，藏着那片永不褪色的诺曼底海滩。",
    artworkStyle: {
      bgFrom: "#060912",
      bgTo: "#121b2d",
      shapeType: "stars",
      color: "#94a3b8",
      accentColor: "#e2e8f0"
    }
  },
  {
    title: "素媛",
    englishTitle: "Hope",
    director: { name: "李濬益", region: "韩国" },
    year: 2013,
    genre: ["剧情", "家庭"],
    rating: 9.3,
    duration: 122,
    region: ["韩国"],
    summary: "一个雨天的上学路上，8岁的素媛遭遇了残忍的性侵。此后，父母和身边的人用各自的方式，帮助这个破碎的小女孩一步步走出阴影。",
    poeticSummary: "雨衣里的小小身影，在经历了狂风暴雨后，依然执意要向世界报以温柔的微笑。",
    artworkStyle: {
      bgFrom: "#020a16",
      bgTo: "#0f253e",
      shapeType: "flower",
      color: "#cbd5e1",
      accentColor: "#f472b6"
    }
  },
  {
    title: "死亡诗社",
    englishTitle: "Dead Poets Society",
    director: { name: "彼得·威尔", region: "澳大利亚" },
    year: 1989,
    genre: ["剧情"],
    rating: 9.1,
    duration: 128,
    region: ["美国"],
    summary: "威尔顿预科学院的新英语老师基廷用诗歌和自由精神唤醒了学生们被压抑的心灵，鼓励他们“Seize the day”。少年们重建了“死亡诗社“，但悲剧悄然而至。",
    poeticSummary: "站在课桌上的少年们，大声呼喊着诗歌的灵魂，那抹热血成了暮色里最亮的火把。",
    artworkStyle: {
      bgFrom: "#0d0216",
      bgTo: "#210936",
      shapeType: "feather",
      color: "#fb923c",
      accentColor: "#ffffff"
    }
  },
  {
    title: "黑客帝国",
    englishTitle: "The Matrix",
    director: { name: "莉莉·沃卓斯基", region: "美国" },
    year: 1999,
    genre: ["科幻", "动作"],
    rating: 9.1,
    duration: 136,
    region: ["美国", "澳大利亚"],
    summary: "程序猿尼奥发现自己生活的世界只是一个名为“矩阵“的虚拟程序，真实的人类被机器奴役在营养液中。吃下红色药丸后，他看到了真实世界的荒漠。",
    poeticSummary: "数字雨在雨夜的霓虹中流淌，吃下红色药丸后，才明白梦境与觉醒只在一念之间。",
    artworkStyle: {
      bgFrom: "#010803",
      bgTo: "#021c08",
      shapeType: "grid",
      color: "#4ade80",
      accentColor: "#16a34a"
    }
  },
  {
    title: "饮食男女",
    englishTitle: "Eat Drink Man Woman",
    director: { name: "李安", region: "中国台湾" },
    year: 1994,
    genre: ["剧情", "家庭"],
    rating: 9.2,
    duration: 124,
    region: ["中国台湾", "美国"],
    summary: "退休名厨老朱独自抚养三个女儿，每周日的家宴是全家人唯一的纽带。一道道精美菜肴之间，藏着每个人不愿说出口的秘密。",
    poeticSummary: "热气腾腾的周日餐桌上，酸甜苦辣的滋味交织，那是家庭最温柔也最沉重的羁绊。",
    artworkStyle: {
      bgFrom: "#140702",
      bgTo: "#2a1205",
      shapeType: "flower",
      color: "#fb923c",
      accentColor: "#f43f5e"
    }
  },
  {
    title: "疯狂动物城",
    englishTitle: "Zootopia",
    director: { name: "拜伦·霍华德", region: "美国" },
    year: 2016,
    genre: ["动画", "冒险", "喜剧"],
    rating: 9.2,
    duration: 109,
    region: ["美国"],
    summary: "兔子朱迪从小梦想当警察，来到动物城后却只能做开罚单的差事。她抓住机会调查一桩神秘失踪案，和狐狸尼克结成搭档揭开了一个大阴谋。",
    poeticSummary: "在霓虹闪烁的钢铁之城，一只执着的兔子与狡黠的狐狸，用勇敢击碎了偏见与隔阂。",
    artworkStyle: {
      bgFrom: "#040b15",
      bgTo: "#0d2b45",
      shapeType: "city",
      color: "#fbbf24",
      accentColor: "#fb7185"
    }
  },
  {
    title: "罗马假日",
    englishTitle: "Roman Holiday",
    director: { name: "威廉·惠勒", region: "美国" },
    year: 1953,
    genre: ["喜剧", "爱情"],
    rating: 9.1,
    duration: 118,
    region: ["美国"],
    summary: "厌烦了王室繁文缛节的安妮公主在罗马街头邂逅了美国记者乔，两人骑着摩托车穿越大街小巷，度过了童话般的一天。",
    poeticSummary: "真理之口前的轻盈欢笑，永远留在骑着一辆伟士牌摩托的那个罗马午后。",
    artworkStyle: {
      bgFrom: "#051119",
      bgTo: "#12263a",
      shapeType: "key",
      color: "#cbd5e1",
      accentColor: "#e2e8f0"
    }
  },
  {
    title: "哈尔的移动城堡",
    englishTitle: "Howl's Moving Castle",
    director: { name: "宫崎骏", region: "日本" },
    year: 2004,
    genre: ["动画", "奇幻", "冒险"],
    rating: 9.1,
    duration: 119,
    region: ["日本"],
    summary: "帽子店女孩苏菲被荒野女巫变成了90岁的老太婆，逃入荒野后住进了魔法师哈尔那座蒸汽驱动、在荒原上行走的移动城堡里。",
    poeticSummary: "咔哒作响的烟囱喷出纯白烟雾，移动的城堡载着少女的温柔，飞往永恒的清凉草原。",
    artworkStyle: {
      bgFrom: "#030c14",
      bgTo: "#0f233a",
      shapeType: "gate",
      color: "#60a5fa",
      accentColor: "#f472b6"
    }
  },
  {
    title: "我不是药神",
    englishTitle: "Dying to Survive",
    director: { name: "文牧野", region: "中国" },
    year: 2018,
    genre: ["剧情", "喜剧"],
    rating: 9.0,
    duration: 117,
    region: ["中国"],
    summary: "保健品店主程勇为了赚钱从印度走私低价仿制药，却意外成为白血病患者眼中的“药神“。当法律与生命冲突时，他该如何抉择。",
    poeticSummary: "在无数双期盼活下去的眼睛里，他用微茫的勇气，劈开了关于尊严与希望的黑夜。",
    artworkStyle: {
      bgFrom: "#030712",
      bgTo: "#1e1b4b",
      shapeType: "light",
      color: "#38bdf8",
      accentColor: "#93c5fd"
    }
  },
  {
    title: "看不见的客人",
    englishTitle: "The Invisible Guest",
    director: { name: "奥里奥尔·保罗", region: "西班牙" },
    year: 2016,
    genre: ["悬疑", "犯罪"],
    rating: 8.8,
    duration: 106,
    region: ["西班牙"],
    summary: "企业家阿德里安被控谋杀情妇，他请来顶级律师为自己辩护。一夜之间，双方一次次推倒重来，真相在层层反转中逐步浮出水面。",
    poeticSummary: "暴雨中的湖畔小屋，谎言在分分秒秒中重组，却终究漏掉了最后一抹正义的影子。",
    artworkStyle: {
      bgFrom: "#080c14",
      bgTo: "#111827",
      shapeType: "chess",
      color: "#94a3b8",
      accentColor: "#475569"
    }
  },
  {
    title: "猫鼠游戏",
    englishTitle: "Catch Me If You Can",
    director: { name: "史蒂文·斯皮尔伯格", region: "美国" },
    year: 2002,
    genre: ["剧情", "犯罪", "传记"],
    rating: 9.1,
    duration: 141,
    region: ["美国", "加拿大"],
    summary: "16岁的弗兰克·阿巴内尔在父母离异后出走，靠伪造支票和假冒身份（飞行员、医生、律师）成为FBI史上最年轻的头号通缉犯。探员卡尔花了数年追捕这个天才骗子。",
    poeticSummary: "像一只不知疲倦的飞鸟在世界云端穿梭，但他最想回到的，依旧是那个温暖的家。",
    artworkStyle: {
      bgFrom: "#020617",
      bgTo: "#1e1b4b",
      shapeType: "feather",
      color: "#60a5fa",
      accentColor: "#cbd5e1"
    }
  },
  {
    title: "心灵捕手",
    englishTitle: "Good Will Hunting",
    director: { name: "格斯·范·桑特", region: "美国" },
    year: 1997,
    genre: ["剧情"],
    rating: 8.9,
    duration: 126,
    region: ["美国"],
    summary: "麻省理工学院的清洁工威尔是个数学天才，却用叛逆和暴力把自己封闭起来。心理医生肖恩用真诚的对话，帮他走出了童年的阴影。",
    poeticSummary: "当阳光洒在波士顿公园的座椅上，那句温柔的'不是你的错'，推开了尘封已久的心窗。",
    artworkStyle: {
      bgFrom: "#020a1c",
      bgTo: "#0f2347",
      shapeType: "path",
      color: "#93c5fd",
      accentColor: "#fef08a"
    }
  }
];
