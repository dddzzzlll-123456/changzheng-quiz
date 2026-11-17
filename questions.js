const questionBank = [
    // ================== 单项选择题（共50题） ==================
    // --- 背景与起因 ---
    { id: 1, type: "single", event: "综合", question: "中央红军被迫进行长征的直接原因是（ ）", options: ["第五次反“围剿”失败", "日本发动全面侵华", "党内出现严重分歧", "为了北上抗日"], answer: 0, explanation: "由于博古、李德等人的“左”倾错误指挥，导致第五次反“围剿”失败，红军被迫进行战略转移。" },
    { id: 2, type: "single", event: "综合", question: "中央红军长征出发的地点是（ ）", options: ["江西瑞金", "贵州遵义", "陕西吴起镇", "甘肃会宁"], answer: 0, explanation: "1934年10月，中共中央和中央红军从江西瑞金等地出发，开始长征。" },
    
    // --- 湘江战役 ---
    { id: 3, type: "single", event: "湘江", question: "长征初期，红军遭遇的最惨烈、损失最严重的一场战役是（ ）", options: ["湘江战役", "四渡赤水", "飞夺泸定桥", "娄山关战役"], answer: 0, explanation: "湘江战役后，中央红军由出发时的8.6万人锐减至3万余人，是长征以来最惨烈的战役。" },
    { id: 4, type: "single", event: "湘江", question: "湘江战役中，担任全军后卫、付出巨大牺牲的红34师师长是（ ）", options: ["陈树湘", "贺炳炎", "刘伯承", "彭德怀"], answer: 0, explanation: "陈树湘重伤被俘后，断肠明志，壮烈牺牲，年仅29岁。" },

    // --- 遵义会议 ---
    { id: 5, type: "single", event: "遵义", question: "确立毛泽东在党中央和红军的领导地位的会议是（ ）", options: ["遵义会议", "八七会议", "古田会议", "瓦窑堡会议"], answer: 0, explanation: "1935年1月的遵义会议，事实上确立了毛泽东在党中央和红军的领导地位。" },
    { id: 6, type: "single", event: "遵义", question: "遵义会议被视为中国共产党历史上一个生死攸关的转折点，主要是因为它（ ）", options: ["纠正了“左”倾军事路线，确立了正确领导", "宣告了长征的胜利结束", "提出了抗日民族统一战线方针", "清算了陈独秀的右倾错误"], answer: 0, explanation: "遵义会议结束了王明“左”倾教条主义在中央的统治，挽救了党、挽救了红军、挽救了中国革命。" },
    { id: 7, type: "single", event: "遵义", question: "遵义会议召开的时间和地点是（ ）", options: ["1935年1月，贵州遵义", "1934年10月，江西瑞金", "1935年10月，陕北吴起镇", "1936年10月，甘肃会宁"], answer: 0, explanation: "遵义会议于1935年1月在贵州遵义召开。" },

    // --- 四渡赤水 ---
    { id: 8, type: "single", event: "赤水", question: "打乱敌人追剿计划，被誉为毛泽东军事生涯“得意之笔”的战役是（ ）", options: ["四渡赤水", "湘江战役", "百团大战", "台儿庄战役"], answer: 0, explanation: "四渡赤水战役中，红军声东击西，摆脱了数十万敌军的围追堵截，是运动战的典范。" },
    { id: 9, type: "single", event: "赤水", question: "红军四渡赤水的主要战术特点是（ ）", options: ["高度机动灵活，声东击西", "阵地战，死守硬拼", "集中优势兵力打歼灭战", "依托山地开展游击战"], answer: 0, explanation: "四渡赤水展现了红军高度的机动灵活性，彻底粉碎了敌人围歼红军于川黔滇边境的计划。" },

    // --- 巧渡金沙江 / 强渡大渡河 / 泸定桥 ---
    { id: 10, type: "single", event: "综合", question: "红军长征途中，跳出敌人几十万大军包围圈的关键一步是（ ）", options: ["巧渡金沙江", "四渡赤水", "飞夺泸定桥", "翻越夹金山"], answer: 0, explanation: "红军巧渡金沙江，跳出了敌人的包围圈，取得了战略转移中具有决定意义的胜利。" },
    { id: 11, type: "single", event: "泸定桥", question: "“飞夺泸定桥”发生在哪条河流之上？（ ）", options: ["大渡河", "金沙江", "赤水河", "乌江"], answer: 0, explanation: "泸定桥横跨大渡河，红军22名突击队员冒着枪林弹雨攀爬铁索夺下桥头。" },
    { id: 12, type: "single", event: "泸定桥", question: "红军飞夺泸定桥时，桥上的木板状况是（ ）", options: ["敌人抽走了大部分木板，只剩铁索", "木板完好无损", "只有中间部分有木板", "木板被大火烧毁"], answer: 0, explanation: "敌人为了阻止红军过河，抽掉了桥上的木板，红军勇士是在光溜溜的铁索上攀爬夺桥的。" },

    // --- 娄山关 / 遵义战役 ---
    { id: 13, type: "single", event: "娄山关", question: "毛泽东在长征途中写下“雄关漫道真如铁，而今迈步从头越”，这里的“雄关”指的是（ ）", options: ["娄山关", "山海关", "嘉峪关", "剑门关"], answer: 0, explanation: "这句词出自《忆秦娥·娄山关》，描写的是红军攻克娄山关的壮烈场景。" },
    { id: 14, type: "single", event: "娄山关", question: "娄山关战役是红军长征以来的首次大捷，它发生在哪次会议之后？（ ）", options: ["遵义会议", "八七会议", "古田会议", "瓦窑堡会议"], answer: 0, explanation: "遵义会议后，红军二渡赤水，回师黔北，取得了娄山关大捷。" },

    // --- 雪山草地 ---
    { id: 15, type: "single", event: "雪山", question: "中央红军长征途中翻越的第一座大雪山是（ ）", options: ["夹金山", "岷山", "六盘山", "祁连山"], answer: 0, explanation: "1935年6月，中央红军翻越了海拔4000多米的夹金山，这是长征中翻越的第一座大雪山。" },
    { id: 16, type: "single", event: "草地", question: "红军长征走过的草地，主要位于今天的（ ）", options: ["四川省西北部", "陕西省北部", "甘肃省南部", "青海省东部"], answer: 0, explanation: "红军过的草地主要是指川西北的松潘草地，环境极其恶劣，遍布泥沼。" },
    { id: 17, type: "single", event: "雪山", question: "“更喜岷山千里雪，三军过后尽开颜”出自毛泽东的哪首诗？（ ）", options: ["《七律·长征》", "《忆秦娥·娄山关》", "《沁园春·雪》", "《清平乐·六盘山》"], answer: 0, explanation: "这是《七律·长征》的尾联，表达了红军历经艰难即将胜利的喜悦。" },

    // --- 重要事件与人物 ---
    { id: 18, type: "single", event: "综合", question: "红军长征途中，刘伯承与彝族首领小叶丹歃血为盟，这体现了红军的（ ）", options: ["正确的民族政策", "严明的军事纪律", "灵活的战术战略", "强大的军事实力"], answer: 0, explanation: "“彝海结盟”是红军正确执行民族政策的典范，为红军顺利通过彝区创造了条件。" },
    { id: 19, type: "single", event: "综合", question: "长征途中，中共中央召开的政治局扩大会议中，最具转折意义的是（ ）", options: ["遵义会议", "黎平会议", "猴场会议", "扎西会议"], answer: 0, explanation: "遵义会议是党的历史上一个生死攸关的转折点。" },
    { id: 20, type: "single", event: "综合", question: "中央红军长征胜利结束的标志是（ ）", options: ["到达陕北吴起镇", "三大主力在会宁会师", "强渡大渡河", "翻越六盘山"], answer: 0, explanation: "1935年10月，中央红军到达陕北吴起镇，与陕北红军会师，标志着中央红军长征胜利结束。而1936年10月三大主力会师，标志着整个长征的全面胜利结束。" },
    { id: 21, type: "single", event: "综合", question: "红军三大主力会师的地点是（ ）", options: ["甘肃会宁", "陕西吴起镇", "江西瑞金", "贵州遵义"], answer: 0, explanation: "1936年10月，红一、二、四方面军在甘肃会宁会师，宣告长征全面胜利。" },
    { id: 22, type: "single", event: "综合", question: "毛泽东评价长征是“宣言书，宣传队，播种机”，其中“播种机”是指（ ）", options: ["播下了革命的火种", "宣传了共产党的主张", "向世界宣告了红军的强大", "传播了马克思主义理论"], answer: 0, explanation: "长征沿途播撒了革命种子，为后来开展革命斗争创造了条件。" },
    
    // --- 历史意义与精神 ---
    { id: 23, type: "single", event: "综合", question: "长征精神的核心是（ ）", options: ["把全国人民和中华民族的根本利益看得高于一切", "不怕艰难险阻，艰苦奋斗", "坚持独立自主，实事求是", "顾全大局，严守纪律"], answer: 0, explanation: "长征精神内涵丰富，其核心是坚定的革命理想信念，把国家和民族利益看得高于一切。" },
    { id: 24, type: "single", event: "综合", question: "长征的胜利，粉碎了国民党反动派消灭共产党和红军的图谋，保存了党和红军的基干力量，铸就了（ ）", options: ["伟大的长征精神", "井冈山精神", "延安精神", "西柏坡精神"], answer: 0, explanation: "长征铸就了伟大的长征精神，成为中国共产党人和人民军队革命风范的生动反映。" },
    
    // --- 补充其他单选（基于教材细节） ---
    { id: 25, type: "single", event: "综合", question: "长征初期，中央红军突破敌人四道封锁线，损失最为惨重是在突破（ ）", options: ["湘江封锁线", "第一道封锁线", "乌江封锁线", "大渡河封锁线"], answer: 0, explanation: "湘江战役是突破第四道封锁线的战役，损失最惨重。" },
    { id: 26, type: "single", event: "遵义", question: "遵义会议后，成立了由毛泽东、周恩来、王稼祥组成的（ ）", options: ["三人军事指挥小组", "三人政治局常委", "总前敌委员会", "中央军委"], answer: 0, explanation: "三人团负责全军的军事行动，保证了正确军事路线的执行。" },
    { id: 27, type: "single", event: "综合", question: "红军长征期间，日本帝国主义加紧了对中国的侵略，制造了（ ）", options: ["华北事变", "九一八事变", "七七事变", "一二八事变"], answer: 0, explanation: "1935年日本策动华北事变，民族危机加深，这也是红军北上抗日的重要背景。" },
    { id: 28, type: "single", event: "综合", question: "长征途中，红军创办的报纸是（ ）", options: ["《红星报》", "《新青年》", "《向导》", "《解放日报》"], answer: 0, explanation: "邓小平曾主编《红星报》，在长征中发挥了重要的宣传鼓舞作用。" },
    { id: 29, type: "single", event: "综合", question: "“不到长城非好汉，屈指行程二万”出自毛泽东的（ ）", options: ["《清平乐·六盘山》", "《七律·长征》", "《忆秦娥·娄山关》", "《沁园春·雪》"], answer: 0, explanation: "这是毛泽东翻越六盘山后写下的名篇。" },
    { id: 30, type: "single", event: "综合", question: "红军长征共途经多少个省份？（ ）", options: ["14个省", "10个省", "11个省", "18个省"], answer: 0, explanation: "红军长征先后经过江西、福建、广东、湖南、广西、贵州、云南、四川、西康、甘肃、陕西等14个省。" },
    
    // 31-50单选题（略去重复背景，深入考点）
    { id: 31, type: "single", event: "综合", question: "长征中，红军跨越了多少条大江河？（ ）", options: ["24条", "10条", "18条", "30条"], answer: 0, explanation: "红军长征跨越了24条大江河，翻越了18座大山。" },
    { id: 32, type: "single", event: "综合", question: "长征中，中央红军平均每天行军多少里？（ ）", options: ["71里", "50里", "100里", "30里"], answer: 0, explanation: "中央红军长征368天，平均每天行军71华里。" },
    { id: 33, type: "single", event: "综合", question: "红军在长征途中，针对张国焘分裂主义进行了坚决斗争，最终确保了（ ）", options: ["党和红军的统一", "北上抗日的实现", "长征的胜利", "以上都是"], answer: 3, explanation: "反对张国焘分裂主义的斗争，维护了党和红军的团结，保证了长征的胜利。" },
    { id: 34, type: "single", event: "综合", question: "中央红军到达陕北后，与哪支红军会师？（ ）", options: ["红十五军团", "红二方面军", "红四方面军", "红六军团"], answer: 0, explanation: "1935年10月，中央红军与徐海东、程子华领导的红十五军团在吴起镇会师。" },
    { id: 35, type: "single", event: "综合", question: "长征的胜利，宣告了（ ）", options: ["国民党反动派消灭共产党和红军图谋的彻底失败", "中国新民主主义革命的胜利", "抗日战争的全面爆发", "“左”倾错误的彻底终结"], answer: 0, explanation: "长征胜利粉碎了蒋介石消灭红军的企图，保存了革命力量。" },
    { id: 36, type: "single", event: "综合", question: "标志着中国共产党在政治上走向成熟的会议是（ ）", options: ["遵义会议", "中共一大", "中共二大", "中共七大"], answer: 0, explanation: "遵义会议是中国共产党第一次独立自主地运用马列主义基本原理解决自己的路线、方针和政策问题，标志着党在政治上走向成熟。" },
    { id: 37, type: "single", event: "综合", question: "“红军不怕远征难，万水千山只等闲”体现了红军的（ ）", options: ["革命英雄主义精神", "乐观主义精神", "集体主义精神", "以上都是"], answer: 3, explanation: "这句诗完美体现了长征精神中的革命英雄主义和革命乐观主义。" },
    { id: 38, type: "single", event: "湘江", question: "湘江战役的惨重代价，直接促使了红军将士对哪种错误的反思？（ ）", options: ["王明“左”倾教条主义", "陈独秀右倾机会主义", "张国焘分裂主义", "游击主义"], answer: 0, explanation: "湘江战役的惨重损失让广大红军指战员对博古、李德的“左”倾军事指挥产生了严重怀疑，为遵义会议的召开奠定了思想基础。" },
    { id: 39, type: "single", event: "遵义", question: "遵义会议主要纠正了当时中央领导在（ ）方面的错误。", options: ["军事和组织", "政治和思想", "经济和外交", "文化和教育"], answer: 0, explanation: "遵义会议主要纠正了博古、李德在军事上和组织上的“左”倾错误。" },
    { id: 40, type: "single", event: "综合", question: "红军长征途中，哪次会议确立了北上抗日的方针？（ ）", options: ["遵义会议", "两河口会议", "八七会议", "古田会议"], answer: 0, explanation: "遵义会议决定红军北渡长江，到川西北建立新根据地，实际上确立了北上抗日的战略方向。" },
    { id: 41, type: "single", event: "综合", question: "在长征途中，红军将士面临的自然环境困难不包括（ ）", options: ["台风的袭击", "高寒缺氧", "泥沼遍布", "缺粮少药"], answer: 0, explanation: "长征途经内陆山区和草地，没有遭遇台风。" },
    { id: 42, type: "single", event: "综合", question: "标志着长征全面胜利结束的历史事件是（ ）", options: ["三大主力红军会宁会师", "中央红军到达吴起镇", "飞夺泸定桥", "四渡赤水"], answer: 0, explanation: "1936年10月三大主力会师，标志着长征全面胜利结束。" },
    { id: 43, type: "single", event: "综合", question: "长征精神是中华民族百折不挠、自强不息的民族精神的（ ）", options: ["最高表现", "基础", "重要组成部分", "唯一体现"], answer: 0, explanation: "教材原文表述：长征精神是中华民族百折不挠、自强不息的民族精神的最高表现。" },
    { id: 44, type: "single", event: "综合", question: "红军在长征中能够克服千难万险，取得胜利的最根本保证是（ ）", options: ["中国共产党的正确领导和坚定的革命信念", "充足的武器弹药", "国际社会的援助", "国民党内部的分裂"], answer: 0, explanation: "坚定的理想信念和党的正确领导是长征胜利的根本保证。" },
    { id: 45, type: "single", event: "综合", question: "中央红军长征历时多久？（ ）", options: ["一年", "两年", "半年", "一年半"], answer: 0, explanation: "中央红军从1934年10月出发，到1935年10月到达陕北，历时一年。" },
    { id: 46, type: "single", event: "综合", question: "下列关于长征的说法，不正确的是（ ）", options: ["长征完全是盲目转移", "长征是战略转移", "长征传播了革命思想", "长征保存了革命骨干"], answer: 0, explanation: "长征最初是第五次反“围剿”失败后的被动战略转移，但并非盲目转移，遵义会议后有了正确的方向。" },
    { id: 47, type: "single", event: "综合", question: "红军长征途中打的第一场大胜仗，极大鼓舞了士气的战役是（ ）", options: ["娄山关战役", "湘江战役", "强渡大渡河", "腊子口战役"], answer: 0, explanation: "遵义会议后的娄山关战役，是长征以来的首次大捷。" },
    { id: 48, type: "single", event: "综合", question: "中国工农红军长征的根本原因是（ ）", options: ["王明“左”倾错误导致第五次反围剿失败", "为了北上抗日", "为了寻找新的根据地", "日本帝国主义的侵略"], answer: 0, explanation: "根本原因是党内“左”倾错误导致反围剿失败，红军被迫转移。" },
    { id: 49, type: "single", event: "综合", question: "长征中，红军战士以惊人的毅力战胜了严寒和缺氧，翻越了多座大雪山，这体现了（ ）", options: ["革命英雄主义精神", "乐观主义精神", "国际主义精神", "民主主义精神"], answer: 0, explanation: "战胜自然极限体现了革命英雄主义精神。" },
    { id: 50, type: "single", event: "综合", question: "长征为中国革命的胜利奠定了（ ）", options: ["基础", "条件", "方向", "一切"], answer: 0, explanation: "长征保存了党和红军的骨干，为中国革命的最终胜利奠定了基础。" },

    // ================== 判断题（共50题） ==================
    // --- 背景与起因 ---
    { id: 51, type: "judge", event: "综合", question: "中央红军开始长征的直接原因是第五次反“围剿”的失败。", options: ["正确", "错误"], answer: 0, explanation: "正确。由于“左”倾错误指挥，第五次反“围剿”失败，红军被迫长征。" },
    { id: 52, type: "judge", event: "综合", question: "长征一开始就确立了毛泽东的领导地位。", options: ["正确", "错误"], answer: 1, explanation: "错误。长征初期毛泽东并未掌握最高领导权，是在1935年遵义会议后才逐步确立的。" },
    { id: 53, type: "judge", event: "综合", question: "中央红军长征的出发地是江西瑞金。", options: ["正确", "错误"], answer: 0, explanation: "正确。1934年10月，中央红军从江西瑞金等地出发。" },
    
    // --- 湘江战役 ---
    { id: 54, type: "judge", event: "湘江", question: "湘江战役中，红军虽然损失惨重，但成功突破了敌人的第四道封锁线。", options: ["正确", "错误"], answer: 0, explanation: "正确。红军付出了极大代价，但最终渡过了湘江，突破了封锁。" },
    { id: 55, type: "judge", event: "湘江", question: "湘江战役发生在1934年底。", options: ["正确", "错误"], answer: 0, explanation: "正确。湘江战役发生于1934年11月底至12月初。" },
    
    // --- 遵义会议 ---
    { id: 56, type: "judge", event: "遵义", question: "遵义会议是中国共产党历史上一个生死攸关的转折点。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是教材对遵义会议历史地位的经典评价。" },
    { id: 57, type: "judge", event: "遵义", question: "遵义会议彻底清算了王明的“左”倾政治路线。", options: ["正确", "错误"], answer: 1, explanation: "错误。遵义会议主要纠正了军事和组织上的“左”倾错误，政治路线是在后来的延安整风运动中才彻底清算的。" },
    { id: 58, type: "judge", event: "遵义", question: "遵义会议决定由毛泽东、周恩来、王稼祥组成三人军事指挥小组。", options: ["正确", "错误"], answer: 0, explanation: "正确。这个小组负责全军的军事行动。" },
    { id: 59, type: "judge", event: "遵义", question: "遵义会议标志着中国共产党在政治上走向成熟。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是党第一次独立自主地解决自己的路线、方针和政策问题。" },
    
    // --- 四渡赤水 ---
    { id: 60, type: "judge", event: "赤水", question: "四渡赤水战役彻底粉碎了国民党军队的围追堵截，使红军跳出了敌人的包围圈。", options: ["正确", "错误"], answer: 0, explanation: "正确。四渡赤水是红军运动战的经典，打乱了敌人的追剿计划。" },
    { id: 61, type: "judge", event: "赤水", question: "四渡赤水发生在遵义会议之后。", options: ["正确", "错误"], answer: 0, explanation: "正确。遵义会议后，毛泽东指挥了四渡赤水。" },
    { id: 62, type: "judge", event: "赤水", question: "四渡赤水体现了红军阵地战的极高水平。", options: ["正确", "错误"], answer: 1, explanation: "错误。四渡赤水体现的是红军高度机动的运动战水平。" },
    
    // --- 巧渡金沙江 / 泸定桥 ---
    { id: 63, type: "judge", event: "综合", question: "红军巧渡金沙江，跳出了敌人的重重包围圈。", options: ["正确", "错误"], answer: 0, explanation: "正确。金沙江是红军长征途中的一道重要天险，巧渡金沙江取得了战略转移的决定性胜利。" },
    { id: 64, type: "judge", event: "泸定桥", question: "飞夺泸定桥发生在金沙江上。", options: ["正确", "错误"], answer: 1, explanation: "错误。飞夺泸定桥发生在大渡河上。" },
    { id: 65, type: "judge", event: "泸定桥", question: "飞夺泸定桥的22名勇士全部壮烈牺牲。", options: ["正确", "错误"], answer: 1, explanation: "错误。虽然伤亡惨重，但并非全部牺牲。" },
    
    // --- 娄山关 ---
    { id: 66, type: "judge", event: "娄山关", question: "娄山关战役是中央红军长征以来的首次大捷。", options: ["正确", "错误"], answer: 0, explanation: "正确。遵义会议后，红军二渡赤水，取得了娄山关大捷。" },
    { id: 67, type: "judge", event: "娄山关", question: "“雄关漫道真如铁，而今迈步从头越”描写的是夺取泸定桥的战斗。", options: ["正确", "错误"], answer: 1, explanation: "错误。这是毛泽东《忆秦娥·娄山关》中的词句，描写的是娄山关战役。" },
    
    // --- 雪山草地 ---
    { id: 68, type: "judge", event: "雪山", question: "中央红军翻越的第一座大雪山是夹金山。", options: ["正确", "错误"], answer: 0, explanation: "正确。夹金山是红军长征翻越的第一座大雪山。" },
    { id: 69, type: "judge", event: "草地", question: "红军过草地时，由于环境恶劣，非战斗减员非常严重。", options: ["正确", "错误"], answer: 0, explanation: "正确。草地泥沼密布、气候恶劣、缺粮少药，红军付出了巨大牺牲。" },
    { id: 70, type: "judge", event: "雪山", question: "红军在翻越雪山时，采取了喝辣椒水等办法来御寒。", options: ["正确", "错误"], answer: 0, explanation: "正确。在物资极度匮乏的情况下，红军用辣椒水、生姜等御寒。" },
    
    // --- 重要事件与人物 ---
    { id: 71, type: "judge", event: "综合", question: "刘伯承与彝族首领小叶丹歃血为盟，体现了红军的民族平等政策。", options: ["正确", "错误"], answer: 0, explanation: "正确。彝海结盟是红军民族政策的成功实践。" },
    { id: 72, type: "judge", event: "综合", question: "中央红军长征的终点是甘肃会宁。", options: ["正确", "错误"], answer: 1, explanation: "错误。中央红军长征的终点是陕北吴起镇。甘肃会宁是三大主力会师的地点。" },
    { id: 73, type: "judge", event: "综合", question: "1936年10月，红一、二、四方面军在甘肃会宁会师，标志着长征全面胜利结束。", options: ["正确", "错误"], answer: 0, explanation: "正确。三大主力会师是长征胜利的标志。" },
    { id: 74, type: "judge", event: "综合", question: "长征的胜利，宣告了国民党反动派消灭共产党和红军图谋的彻底失败。", options: ["正确", "错误"], answer: 0, explanation: "正确。长征保存了革命力量，粉碎了敌人的企图。" },
    { id: 75, type: "judge", event: "综合", question: "毛泽东评价长征是“宣言书，宣传队，播种机”。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是毛泽东对长征历史意义的经典概括。" },
    
    // --- 历史意义与精神（教材重点考点） ---
    { id: 76, type: "judge", event: "综合", question: "长征的胜利，粉碎了国民党反动派消灭共产党和红军的图谋，保存了党和红军的基干力量。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是长征最重要的历史意义之一。" },
    { id: 77, type: "judge", event: "综合", question: "长征精神是中华民族百折不挠、自强不息的民族精神的最高表现。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是教材中的明确表述。" },
    { id: 78, type: "judge", event: "综合", question: "长征精神只包含艰苦奋斗、不怕牺牲的精神。", options: ["正确", "错误"], answer: 1, explanation: "错误。长征精神还包括坚定的革命信念、实事求是、顾全大局、紧密团结等丰富内涵。" },
    { id: 79, type: "judge", event: "综合", question: "长征的胜利，为中国革命的最终胜利奠定了基础。", options: ["正确", "错误"], answer: 0, explanation: "正确。长征保存了革命火种，为抗日战争的胜利和全国的解放打下了基础。" },
    { id: 80, type: "judge", event: "综合", question: "红军长征是迫于无奈的消极退却，没有任何积极意义。", options: ["正确", "错误"], answer: 1, explanation: "错误。长征虽然是被迫转移，但长征是宣言书、宣传队、播种机，具有伟大的历史意义。" },
    
    // --- 更多补充（细节把控） ---
    { id: 81, type: "judge", event: "综合", question: "红军长征只经过了国民党统治区，没有经过少数民族地区。", options: ["正确", "错误"], answer: 1, explanation: "错误。红军经过了许多少数民族聚居区（如彝族、藏族、回族等），并实行了正确的民族政策。" },
    { id: 82, type: "judge", event: "综合", question: "中央红军长征历时一年，行程约二万五千里。", options: ["正确", "错误"], answer: 0, explanation: "正确。1934年10月至1935年10月，历时一年，行程二万五千里。" },
    { id: 83, type: "judge", event: "遵义", question: "遵义会议取消了博古、李德的最高军事指挥权。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是遵义会议的重要组织决定。" },
    { id: 84, type: "judge", event: "遵义", question: "遵义会议是在长征开始前召开的。", options: ["正确", "错误"], answer: 1, explanation: "错误。遵义会议是在长征途中召开的，时间是1935年1月。" },
    { id: 85, type: "judge", event: "赤水", question: "四渡赤水战役中，红军始终处于被动挨打的状态。", options: ["正确", "错误"], answer: 1, explanation: "错误。红军在四渡赤水中掌握了战场主动权，声东击西，牵着敌人的鼻子走。" },
    { id: 86, type: "judge", event: "娄山关", question: "娄山关位于贵州省境内。", options: ["正确", "错误"], answer: 0, explanation: "正确。娄山关位于遵义以北，是川黔交通要道。" },
    { id: 87, type: "judge", event: "泸定桥", question: "飞夺泸定桥发生在1935年5月。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是红军长征途中的著名战斗。" },
    { id: 88, type: "judge", event: "雪山", question: "红军长征过程中翻越了多座大雪山。", options: ["正确", "错误"], answer: 0, explanation: "正确。中央红军翻越了夹金山、梦笔山等数座大雪山。" },
    { id: 89, type: "judge", event: "草地", question: "红军过草地时，最大的威胁是敌人的追兵。", options: ["正确", "错误"], answer: 1, explanation: "错误。过草地时最大的威胁是恶劣的自然环境（泥沼）和饥饿。" },
    { id: 90, type: "judge", event: "综合", question: "长征的胜利，宣告了帝国主义侵略中国的图谋彻底失败。", options: ["正确", "错误"], answer: 1, explanation: "错误。长征胜利宣告的是国民党反动派消灭红军图谋的失败。帝国主义侵略图谋的失败是后来的事。" },
    { id: 91, type: "judge", event: "湘江", question: "湘江战役后，红军人数从8.6万锐减至3万余人。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是长征初期最惨重的损失。" },
    { id: 92, type: "judge", event: "综合", question: "《红星报》是在长征途中创办的。", options: ["正确", "错误"], answer: 0, explanation: "正确。《红星报》是红军总政治部机关报，在长征中坚持出版。" },
    { id: 93, type: "judge", event: "综合", question: "红一、红二、红四方面军是长征中的三大主力红军。", options: ["正确", "错误"], answer: 0, explanation: "正确。1936年10月，三大主力在会宁会师。" },
    { id: 94, type: "judge", event: "综合", question: "中央红军长征到达陕北后，与红二十五军会师。", options: ["正确", "错误"], answer: 0, explanation: "正确。红二十五军先期到达陕北，与陕北红军组成了红十五军团，中央红军到达后与红十五军团会师。" },
    { id: 95, type: "judge", event: "综合", question: "长征精神是中国共产党人和人民军队革命风范的生动反映。", options: ["正确", "错误"], answer: 0, explanation: "正确。这是对长征精神实质的准确评价。" },
    { id: 96, type: "judge", event: "综合", question: "长征的胜利，彻底改变了中国半殖民地半封建社会的性质。", options: ["正确", "错误"], answer: 1, explanation: "错误。改变中国半殖民地半封建社会性质的是1949年新中国的成立。" },
    { id: 97, type: "judge", event: "综合", question: "红军长征经过了福建、江西、广东、湖南、广西等14个省。", options: ["正确", "错误"], answer: 0, explanation: "正确。红军长征的足迹遍布大半个中国。" },
    { id: 98, type: "judge", event: "综合", question: "“红军不怕远征难，万水千山只等闲”表现了红军的革命乐观主义精神。", options: ["正确", "错误"], answer: 0, explanation: "正确。这句诗体现了红军面对艰难险阻时的从容和乐观。" },
    { id: 99, type: "judge", event: "综合", question: "长征中，红军实行了严格的群众纪律，做到了不拿群众一针一线。", options: ["正确", "错误"], answer: 0, explanation: "正确。红军有着严明的纪律，深受沿途百姓爱戴。" },
    { id: 100, type: "judge", event: "综合", question: "长征的胜利，是中国共产党独立自主解决中国革命问题的胜利。", options: ["正确", "错误"], answer: 0, explanation: "正确。遵义会议等历史事件体现了党独立自主解决自身问题的能力。" }
];