/* ---------- sources ---------- */
var SRC = {
  spr_post:{t:"選委會 SPR｜郵寄投票申請",u:"https://spr.gov.my/permohonan-undi-pos-bagi-prudun-sarawak-ke13/"},
  spr:{t:"選委會 SPR 官網",u:"https://www.spr.gov.my/"},
  semak:{t:"選委會 MySPR Semak",u:"https://mysprsemak.spr.gov.my/semakan/daftarPemilih"},
  ukas_diss:{t:"砂州政府 UKAS｜州議會解散",u:"https://ukas.sarawak.gov.my/web/subpage/news_view/51579"},
  mk_99:{t:"當今大馬 2026-09-24",u:"https://www.malaysiakini.com/news/885654-%E7%A0%82%E9%80%89%E5%8C%BA%E9%87%8D%E5%88%92%E6%96%992%E6%9C%88%E5%90%8E%E6%96%B9%E5%AE%8C%E6%88%90%E6%96%B0%E5%B8%AD%E6%9C%AA%E8%83%BD%E5%9C%A8%E5%8D%B3%E4%B8%B4%E5%B7%9E%E9%80%89%E8%90%BD%E5%AE%9E"},
  mk_bn:{t:"當今大馬 2026-11",u:"https://www.malaysiakini.com/news/889172-%E5%9B%BD%E9%98%B5%E4%B8%8D%E5%8F%82%E4%B8%8E%E7%A0%82%E9%80%89%E4%B8%BE%E5%9B%BD%E7%9B%9F%E4%B8%8D%E6%8E%92%E9%99%A4%E4%B9%9F%E5%BC%83%E6%88%98"},
  nst_dom:{t:"NST 2026-10-26",u:"https://www.nst.com.my/amp/news/nation/2026/10/1563901/sarawak-election-can-gps-maintain-its-overwhelming-dominance"},
  star:{t:"The Star 2026-11-02",u:"https://www.thestar.com.my/news/nation/2026/11/02/sarawak-election-less-about-power-shift-more-a-popularity-test-for-abang-johari-says-analysts"},
  scmp:{t:"南華早報 2026-11-06",u:"https://www.scmp.com/week-asia/politics/article/3373494/malaysias-sarawak-locks-election-date-amid-autonomy-resource-control-push"},
  od_gps82:{t:"東方日報 2026-10-28",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/10/28/858665"},
  od_manifesto:{t:"東方日報 2026-11-04",u:"https://www.orientaldaily.com.my/news/stories/2026/11/04/860418"},
  od_gps_unity:{t:"東方日報 2026-11-15",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/11/15/863233"},
  od_sim:{t:"東方日報 2026-11-18",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/11/18/864071"},
  tv8:{t:"八度空間新聞 2026-11-18",u:"https://www.8tvnews.my/localnews/shameng25rigongbu82houxuanren-liaoxinjiumiankongdapeiyingzhanzhouxuan/"},
  premier:{t:"砂州總理署",u:"https://premierdept.sarawak.gov.my/web/subpage/news_view/11417"},
  mm_fte:{t:"Malay Mail 2024-09-15",u:"https://www.malaymail.com/news/malaysia/2024/09/15/sarawaks-bid-to-become-malaysias-bavaria-abang-joharis-vision-for-economic-growth/150481"},
  mm_2021:{t:"Malay Mail 2021-12-08",u:"https://www.malaymail.com/news/malaysia/2021/12/08/gps-launches-34-point-manifesto-to-benefit-sarawakians/2027033"},
  land:{t:"砂州土地測量局 2026-02-10",u:"https://landsurvey.sarawak.gov.my/web/subpage/news_view/1857"},
  bernama_awang:{t:"馬新社 2026-10-25",u:"https://www.bernama.com/en/region/news.php?id=2625462"},
  sun_willie:{t:"The Sun（Newswav 轉載）2026-11-11",u:"https://newswav.com/article/sarawak-incumbent-reps-told-to-show-report-cards-A2611_Prm1b2"},
  st_novel:{t:"Sarawak Tribune 2026-11",u:"https://www.sarawaktribune.com/gps-must-prove-mandate-has-improved-lives-says-analyst/"},
  fulcrum:{t:"Fulcrum 2026-04",u:"https://fulcrum.sg/sarawaks-delineation-a-test-for-the-election-commissions-credibility/"},
  od_dap7:{t:"東方日報 2026-11-01",u:"https://www.orientaldaily.com.my/news/nation/2026/11/01/859593"},
  od_dap6:{t:"東方日報 2026-11-17",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/11/17/863756"},
  od_dap_zero:{t:"東方日報 2026-04-18",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/04/18/812322"},
  od_multi:{t:"東方日報 2026-11-10",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/11/10/861863"},
  tmi_dap:{t:"透視大馬 2024-12",u:"https://www.themalaysianinsight.com/chinese/s/488884"},
  sun_term:{t:"The Sun",u:"https://thesun.my/news/malaysia-news/politics/sarawak-opposition-urges-two-term-limit-for-premier-post/"},
  fmt_dap:{t:"FMT 2026-01-17",u:"https://fmtv5.freemalaysiatoday.com/category/nation/2026/01/17/strong-opposition-narrative-not-enough-to-woo-sarawakians-dap-told"},
  bp_pkr:{t:"Borneo Post 2026-11-06",u:"https://www.theborneopost.com/2026/11/06/pkr-confirms-will-contest-sarawak-polls-still-deliberating-on-seats/"},
  st_pbds:{t:"Sarawak Tribune 2026-11-15",u:"https://www.sarawaktribune.com/pbds-manifesto-irrelevant-to-state-coalition/"},
  bp_pbds37:{t:"Borneo Post 2026-09-19",u:"https://www.theborneopost.com/2026/09/19/pbds-eyes-up-to-37-seats-in-next-state-election/"},
  bp_pbds_tu:{t:"Borneo Post 2026-11-17",u:"https://www.theborneopost.com/2026/11/17/pbds-candidate-set-to-become-first-woman-to-contest-telang-usan/"},
  dd_pbk:{t:"DayakDaily 2026-11-04",u:"https://dayakdaily.com/pbk-yet-to-decide-on-contesting-sarawak-election-2026/"},
  bp_pbk:{t:"Borneo Post 2026-11-03",u:"https://www.theborneopost.com/2026/11/03/pbk-expected-to-contest-sarawak-election-but-seat-allocation-and-voons-candidacy-remain-undecided/"},
  bp_pbk_tag:{t:"Borneo Post 2026-11-13",u:"https://www.theborneopost.com/tag/parti-bumi-kenyalang/"},
  od_pas:{t:"東方日報 2026-10-24",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/10/24/857678"},
  od_pn:{t:"東方日報 2026-11-16",u:"https://www.orientaldaily.com.my/news/nation/2026/11/16/863402"},
  sun_pas:{t:"The Sun",u:"https://thesun.my/news/malaysia-news/politics/pbb-dismisses-pas-sarawak-election-expansion-claims/"},
  od_82:{t:"東方日報 2026-11-07",u:"https://www.orientaldaily.com.my/news/east-malaysia/2026/11/07/861190"},
  tv8_psb:{t:"八度空間新聞 2026-11-06",u:"https://www.8tvnews.my/localnews/shalayuexuanjuriqichulu-1128timing1212toupiao/"},
  atv:{t:"亞洲電視新聞 2026-10-28",u:"https://atvnewsonline.com/world/%E3%80%90%E7%A0%82%E6%8B%89%E8%B6%8A%E9%80%89%E4%B8%BE%E3%80%91%E9%98%BF%E9%82%A6%E4%BD%90%E5%93%88%E9%87%8C%EF%BC%9A%E7%A0%82%E6%94%BF%E7%9B%9F%E7%AB%9E%E9%80%90%E5%85%A8%E9%83%A882%E5%B8%AD/"},
  premier_jepak:{t:"砂州總理辦公室 2023-11-05",u:"https://premier.sarawak.gov.my/web/subpage/news_view/5652"},
  wiki26:{t:"維基百科（英文）2026 年砂州選",u:"https://en.wikipedia.org/wiki/2026_Sarawak_state_election"},
  wiki21:{t:"維基百科（中文）2021 年砂州選",u:"https://zh.wikipedia.org/wiki/2021%E5%B9%B4%E7%A0%82%E6%8B%89%E8%B6%8A%E5%B7%9E%E9%80%89%E4%B8%BE"}
};

/* ---------- constituencies: [no, name, zh, parliament, incumbent, party, 2021 majority] ---------- */
var SEATS = [
[1,"Opar","歐巴","P192 Mas Gading","Billy Sujang","SUPP",1689],
[2,"Tasik Biru","碧湖","P192 Mas Gading","Henry Harry Jinep","PDP",4212],
[3,"Tanjong Datu","丹絨拿督","P193 Santubong","Azizul Annuar Adenan","PBB",4502],
[4,"Pantai Damai","邦帶達邁","P193 Santubong","Abdul Rahman Junaidi","PBB",8381],
[5,"Demak Laut","迪瑪拉勿","P193 Santubong","Hazland Abang Hipni","PBB",6399],
[6,"Tupong","杜邦","P194 Petra Jaya","Fazzrudin Abdul Rahman","PBB",11209],
[7,"Samariang","三馬連","P194 Petra Jaya","Sharifah Hasidah Sayeed Aman Ghazali","PBB",10283],
[8,"Satok","砂督","P194 Petra Jaya","Ibrahim Baki","PBB",6033],
[9,"Padungan","浮羅岸","P195 Bandar Kuching","Chong Chieng Jen","DAP",1198],
[10,"Pending","朋嶺","P195 Bandar Kuching","Violet Yong Wui Wui","DAP",540],
[11,"Batu Lintang","峇都林當","P195 Bandar Kuching","See Chee How","IND",93],
[12,"Kota Sentosa","哥打聖淘沙","P196 Stampin","Wilfred Yap Yau Sin","SUPP",1683],
[13,"Batu Kitang","峇都吉當","P196 Stampin","Lo Khere Chiang","SUPP",4163],
[14,"Batu Kawah","石角","P196 Stampin","Sim Kui Hian","SUPP",5393],
[15,"Asajaya","雅沙再也","P197 Kota Samarahan","Abdul Karim Rahman Hamzah","PBB",4531],
[16,"Muara Tuang","摩拉端","P197 Kota Samarahan","Idris Buang","PBB",6237],
[17,"Stakan","實打干","P197 Kota Samarahan","Hamzah Brahim","PBB",5807],
[18,"Serembu","石聯埠","P198 Puncak Borneo","Miro Simuh","PBB",1650],
[19,"Mambong","曼旺","P198 Puncak Borneo","Jerip Susil","PBB",3071],
[20,"Tarat","打叻","P198 Puncak Borneo","Roland Sagah Wee Inn","PBB",5008],
[21,"Tebedu","打必祿","P199 Serian","Simon Sinang Bada","PBB",3273],
[22,"Kedup","格杜","P199 Serian","Martin Ben","PBB",3566],
[23,"Bukit Semuja","武吉舍慕惹","P199 Serian","John Ilus","PBB",4705],
[24,"Sadong Jaya","沙東再也","P200 Batang Sadong","Aidel Lariwoo","PBB",3877],
[25,"Simunjan","實文然","P200 Batang Sadong","Awla Dris","PBB",3351],
[26,"Gedong","日廊","P200 Batang Sadong","Abang Johari Tun Openg","PBB",3607],
[27,"Sebuyau","詩巫遙","P201 Batang Lupar","Julaihi Narawi","PBB",4134],
[28,"Lingga","龍芽","P201 Batang Lupar","Dayang Noorazah Awang Sohor","PBB",2273],
[29,"Beting Maro","伯汀馬羅","P201 Batang Lupar","Razaili Gapor","PBB",1711],
[30,"Balai Ringin","峇萊林呤","P202 Sri Aman","Snowdan Lawan","PRS",1285],
[31,"Bukit Begunan","武吉本古南","P202 Sri Aman","Mong Dagang","PRS",1402],
[32,"Simanggang","成邦江","P202 Sri Aman","Francis Harden Hollis","SUPP",175],
[33,"Engkilili","英吉利里","P203 Lubok Antu","Johnical Rayong Ngipa","PDP",1191],
[34,"Batang Ai","峇當艾","P203 Lubok Antu","Malcom Mussen Lamoh","PRS",738],
[35,"Saribas","沙里拔","P204 Betong","Ricky @ Mohamad Razi Sitam","PBB",3236],
[36,"Layar","拉耶","P204 Betong","Gerald Rentap Jabu","PBB",2039],
[37,"Bukit Saban","武吉沙班","P204 Betong","Douglas Uggah Embas","PBB",3988],
[38,"Kalaka","加拉甲","P205 Saratok","Mohamad Duri","PBB",2868],
[39,"Krian","克鄰","P205 Saratok","Friday Belik","PDP",932],
[40,"Kabong","甲望","P205 Saratok","Mohd Chee Kadir","PBB",2763],
[41,"Kuala Rajang","瓜拉拉讓","P206 Tanjong Manis","Len Talif Salleh","PBB",3325],
[42,"Semop","斯莫","P206 Tanjong Manis","Abdullah Saidol","PBB",3158],
[43,"Daro","達佬","P207 Igan","Safiee Ahmad","PBB",5112],
[44,"Jemoreng","哲莫仁","P207 Igan","Juanda Jaya","PBB",5012],
[45,"Repok","盧勃","P208 Sarikei","Huang Tiong Sii","SUPP",7308],
[46,"Meradong","馬拉端","P208 Sarikei","Ding Kuong Hiing","SUPP",3362],
[47,"Pakan","巴干","P209 Julau","William Mawan Ikom","PBB",714],
[48,"Meluan","美鑾","P209 Julau","Rolland Duat Jubin","PDP",822],
[49,"Ngemah","牛麻","P210 Kanowit","Anyi Jana","PRS",261],
[50,"Machan","馬占","P210 Kanowit","Allan Siden Gramong","PBB",2089],
[51,"Bukit Assek","武吉阿瑟","P211 Lanang","Chieng Jin Ek","SUPP",874],
[52,"Dudong","都東","P211 Lanang","Tiong King Sing","PDP",5806],
[53,"Bawang Assan","峇旺阿山","P212 Sibu","Wong Soon Koh","PDP",913],
[54,"Pelawan","柏拉旺","P212 Sibu","Michael Tiang Ming Tee","SUPP",100],
[55,"Nangka","南甲","P212 Sibu","Annuar Rapaee","PBB",10804],
[56,"Dalat","達叻","P213 Mukah","Fatimah Abdullah","PBB",6625],
[57,"Tellian","特連","P213 Mukah","Royston Valentine","PBB",2917],
[58,"Balingian","萬年煙","P213 Mukah","Abdul Yakub Arbi","PBB",2904],
[59,"Tamin","達敏","P214 Selangau","Christopher Gira Sambang","PRS",3588],
[60,"Kakus","卡古斯","P214 Selangau","John Sikie Tayai","PRS",1897],
[61,"Pelagus","柏拉固","P215 Kapit","Wilson Nyabong Ijang","PRS",1049],
[62,"Katibas","加迪拔","P215 Kapit","Lidam Assan","PBB",2997],
[63,"Bukit Goram","武吉戈蘭","P215 Kapit","Jefferson Jamit Unyat","PBB",3538],
[64,"Baleh","峇類","P216 Hulu Rajang","Nicholas Kudi Jantai Masing","PRS",1909],
[65,"Belaga","布拉甲","P216 Hulu Rajang","Liwan Lagang","PRS",2245],
[66,"Murum","姆倫","P216 Hulu Rajang","Kennedy Chukpai Ugon","PRS",2919],
[67,"Jepak","日拔","P217 Bintulu","Iskandar Turkee","PBB",4243],
[68,"Tanjong Batu","丹絨峇都","P217 Bintulu","Johnny Pang Leong Ming","SUPP",23],
[69,"Kemena","格美納","P217 Bintulu","Stephen Rundi Utom","PBB",3611],
[70,"Samalaju","沙瑪拉如","P217 Bintulu","Majang Renggi","PRS",6043],
[71,"Bekenu","柏戈奴","P218 Sibuti","Rosey Yunus","PBB",5397],
[72,"Lambir","藍卑爾","P218 Sibuti","Ripin Lamat","PBB",5562],
[73,"Piasau","卑爾騷","P219 Miri","Sebastian Ting Chiew Yew","SUPP",4988],
[74,"Pujut","埔奕","P219 Miri","Adam Yii Siew Sang","SUPP",1566],
[75,"Senadin","史納汀","P219 Miri","Lee Kim Shin","SUPP",7591],
[76,"Marudi","馬魯帝","P220 Baram","Penguang Manggil","PDP",5976],
[77,"Telang Usan","德朗烏山","P220 Baram","Dennis Ngau","PBB",2422],
[78,"Mulu","姆祿","P220 Baram","Gerawat Gala","PBB",2875],
[79,"Bukit Kota","武吉哥打","P221 Limbang","Abdul Rahman Ismail","PBB",4986],
[80,"Batu Danau","峇都達瑙","P221 Limbang","Paulus Palu Gumbang","PBB",706],
[81,"Ba'kelalan","峇加拉蘭","P222 Lawas","Baru Bian","PDP",680],
[82,"Bukit Sari","武吉沙里","P222 Lawas","Awang Tengah Ali Hasan","PBB",5636]
];
var PARTY_LABEL = {
  PBB:"土保黨 PBB（砂盟）", SUPP:"人聯黨 SUPP（砂盟）", PRS:"砂人民黨 PRS（砂盟）", PDP:"民進黨 PDP（砂盟）",
  DAP:"行動黨 DAP（希盟）", IND:"獨立人士"
};
var SEAT_NOTE = {
  11:{x:"2021 年以砂團黨（PSB）名義當選，其後退黨成為獨立議員，10 月申請加入人聯黨。",s:["tv8_psb","atv"]},
  33:{x:"2021 年以砂團黨（PSB）名義當選，該黨其後解散，黨員加入民進黨。",s:["tv8_psb"]},
  53:{x:"2021 年以砂團黨（PSB）名義當選，該黨其後解散，黨員加入民進黨。",s:["tv8_psb"]},
  81:{x:"2021 年以砂團黨（PSB）名義當選，該黨其後解散，黨員加入民進黨。",s:["tv8_psb"]},
  67:{x:"多數票是 2021 年的數字。現任議員在 2023 年補選中當選。",s:["premier_jepak"]}
};
var DAP_SEATS = [1,2,9,10,12,13,14];
var DECLARED = {};
function declare(n, x, s){ (DECLARED[n] = DECLARED[n] || []).push({x:x,s:s}); }
DAP_SEATS.forEach(function(n){ declare(n,"行動黨（希盟）：11 月 1 日宣布出戰這一席。",["od_dap7"]); });
declare(11,"行動黨（希盟）：11 月 17 日確認出戰這一席。",["od_dap6"]);
[7,27,29].forEach(function(n){ declare(n,"伊斯蘭黨：已鎖定這一席，但要等黨中央批准，國盟是否參選也還沒定。",["od_pas","od_pn"]); });
declare(77,"砂達雅黨：黨主席確認會派一位女性候選人出戰。",["bp_pbds_tu"]);
declare(78,"肯雅蘭全民黨：報導指 Wilfred Entika Rebai 將出戰。",["bp_pbk_tag"]);

/* ---------- parties ---------- */
var PARTIES = [
 {id:"GPS",name:"砂拉越政黨聯盟",abbr:"GPS",aka:"砂盟",role:"州執政聯盟",
  meta:["成員：土保黨 PBB・人聯黨 SUPP・砂人民黨 PRS・民進黨 PDP","解散前 79 席（PBB 47、SUPP 13、PRS 11、PDP 8）"],
  now:[
   {x:"宣布 82 個議席全數參選，成員黨之間的分配以上屆成績為基礎。",s:["od_gps82"]},
   {x:"候選人名單預計 11 月 25 日公布。",s:["tv8"]},
   {x:"競選宣言仍在擬定中（11 月 4 日的說法）。",s:["od_manifesto"]}
  ],
  say:[
   {x:"尋求新的委託，繼續向聯邦爭取自治權和天然資源的主導權。",s:["scmp"]},
   {x:"州政府列舉的政績包括：開徵石油產品州銷售稅、成立州油氣公司 Petros、砂拉越發展銀行、主權財富基金。",s:["premier"]},
   {x:"2026 年起，州屬大學對砂拉越人免學費，州政府表示限於特定科系。",s:["mm_fte"]}
  ],
  crit:[
   {x:"原住民權益活動人士 Willie Kajan 指出，許多鄉區道路、橋樑和村莊供水仍然很差，原住民土地權問題大多沒有解決。",s:["sun_willie"]},
   {x:"學者 Novel Lyndon 認為，砂盟要讓選民相信 2021 年的大勝確實換來了生活上的改善。",s:["st_novel"]},
   {x:"行動黨議員質疑，擬新增的 17 個議席偏向砂盟的票倉。",s:["fulcrum"]},
   {x:"行動黨主張要有更強的反對黨來約束州政府的開銷；砂達雅黨主張限制州總理兼任的部長職務。",s:["tmi_dap","st_pbds"]}
  ]},
 {id:"PH",name:"希望聯盟",abbr:"PH",aka:"希盟",role:"聯邦執政・砂拉越州在野",
  meta:["成員：行動黨 DAP・公正黨 PKR・誠信黨 Amanah","解散前 2 席（行動黨：浮羅岸、朋嶺）"],
  now:[
   {x:"行動黨 11 月 1 日宣布出戰南砂 7 席，11 月 17 日確認也出戰峇都林當。詩巫、泗里街、民都魯、美里的安排會陸續公布。",s:["od_dap7","od_dap6"]},
   {x:"公正黨確認參選，但議席還沒決定。",s:["bp_pkr"]},
   {x:"行動黨希望和其他反對黨協調，避免多角戰。",s:["od_multi"]}
  ],
  say:[
   {x:"行動黨的核心訴求是讓州議會有更強的監督與制衡，反對出現「零反對黨」的議會。",s:["od_dap7","od_dap_zero"]},
   {x:"行動黨與公正黨領袖呼籲修改州憲法，把州總理任期限制在兩屆。",s:["sun_term"]}
  ],
  crit:[
   {x:"行動黨在 2021 年州選從 7 席減到 2 席。",s:["tmi_dap"]},
   {x:"行動黨在聯邦與砂盟同屬執政陣營，在州內卻是對手。",s:["tmi_dap","scmp"]},
   {x:"有分析人士認為，只主打「強大反對黨」未必足以打動選民。",s:["fmt_dap"]}
  ]},
 {id:"PBDS",name:"砂達雅黨",abbr:"PBDS",aka:"",role:"本土反對黨",
  meta:["以達雅族群為基礎","州議會沒有議席"],
  now:[
   {x:"9 月表示最多出戰 37 席，而且只在有基層組織的選區派人。",s:["bp_pbds37"]},
   {x:"確認出戰德朗烏山（Telang Usan），並表示不會出戰馬魯帝和姆祿。",s:["bp_pbds_tu"]},
   {x:"正與行動黨商談，避免在同一個選區對上。",s:["od_multi"]}
  ],
  say:[
   {x:"主張州總理任期限兩屆，並限制州總理兼任的部長職務數量。",s:["st_pbds"]},
   {x:"黨大會決議涵蓋原住民習俗地（NCR）、達雅身分認同、政治團結和教育。",s:["bp_pbds37"]}
  ],
  crit:[
   {x:"州總理阿邦佐哈里回應任期限制的提議時說，那是砂達雅黨自己的事，與砂盟無關。",s:["st_pbds"]}
  ]},
 {id:"PBK",name:"肯雅蘭全民黨",abbr:"PBK",aka:"",role:"本土反對黨",
  meta:["州議會沒有議席"],
  now:[
   {x:"預料會參選，但席數未定，黨主席溫利山是否上陣也還沒決定。",s:["bp_pbk"]},
   {x:"黨主席曾表示，如果參選只會出戰城市議席。",s:["dd_pbk"]}
  ],
  say:[
   {x:"以砂拉越獨立為唯一議程。",s:["dd_pbk"]},
   {x:"希望選民至少給一到三席，讓該黨能在州議會發聲。",s:["bp_pbk"]}
  ],
  crit:[
   {x:"黨主席自己坦言，砂盟的競選機器非常強。",s:["dd_pbk"]}
  ]},
 {id:"PN",name:"國民聯盟",abbr:"PN",aka:"國盟",role:"聯邦反對黨聯盟",
  meta:["成員包括伊斯蘭黨 PAS・土團黨 Bersatu","州議會沒有議席"],
  now:[
   {x:"國盟是否參選還在考慮，不參選也是選項之一（11 月 16 日）。",s:["od_pn"]},
   {x:"伊斯蘭黨已鎖定三馬連、詩巫遙、伯汀馬羅三席，並考慮北砂第四席，但要等黨中央批准。",s:["od_pas"]}
  ],
  say:[
   {x:"伊斯蘭黨還沒有表明，如果贏得議席會和砂盟合作，還是坐在反對黨席。",s:["od_pas"]}
  ],
  crit:[
   {x:"伊斯蘭黨至今沒有在砂拉越贏過州議席或國會議席。",s:["sun_pas"]},
   {x:"土保黨領袖表示，以種族和宗教為主軸的政治在砂拉越行不通。",s:["sun_pas"]}
  ]}
];

/* ---------- issues ---------- */
var ISSUES = [
 {id:"auto",name:"自治權與資源",desc:"1963 年馬來西亞協議（MA63）、油氣收益、州與聯邦的權限"},
 {id:"econ",name:"經濟與開支",desc:"產業、就業、州收入，以及州政府怎麼花錢"},
 {id:"rural",name:"鄉區基建",desc:"道路、橋樑、水電、網路"},
 {id:"ncr",name:"原住民習俗地",desc:"NCR 土地的承認、測量與爭議"},
 {id:"edu",name:"教育",desc:"學費、獎助學金、人才培育"},
 {id:"gov",name:"監督制衡與治理",desc:"議會制衡、首長任期、廉政"}
];
var STANCE = {
 auto:{
  GPS:[{x:"本屆尋求新委託，延續爭取自治權和資源主導權。",s:["scmp"]}],
  PBK:[{x:"以砂拉越獨立為唯一議程。",s:["dd_pbk"]}]
 },
 econ:{
  GPS:[{x:"人聯黨主席沈桂賢說，未來五年的重點在數碼化、科技和高端產業。",s:["od_sim"]}],
  PH:[{x:"行動黨主張要有更強的反對黨來約束州政府的開銷。",s:["tmi_dap"]}]
 },
 rural:{
  GPS:[{x:"副總理阿旺登雅表示，現任政府的發展方向兼顧城市與鄉區。",s:["bernama_awang"]}],
  _ctx:{x:"原住民權益活動人士 Willie Kajan 說，許多鄉區道路、橋樑和供水仍然很差，電力和電訊在不少地方也不穩定。",s:["sun_willie"]}
 },
 ncr:{
  GPS:[],
  PBDS:[{x:"黨大會決議把 NCR 列為重點之一。",s:["bp_pbds37"]}],
  _ctx:{x:"原住民權益活動人士 Willie Kajan 說，土地權問題大多沒有解決，面對伐木、種植園和開發計劃時，原住民社區多半只能靠自己捍衛土地。",s:["sun_willie"]}
 },
 edu:{
  GPS:[],
  PBDS:[{x:"黨大會決議涵蓋教育。",s:["bp_pbds37"]}]
 },
 gov:{
  GPS:[{x:"州總理表示，各政府部門正加強內部監督機制，防止濫權。",s:["od_gps_unity"]},{x:"對限制州總理任期的提議，州總理回應說與砂盟無關。",s:["st_pbds"]}],
  PH:[{x:"行動黨的核心訴求是加強州議會的監督制衡。",s:["od_dap7"]},{x:"行動黨與公正黨領袖呼籲把州總理任期限制在兩屆。",s:["sun_term"]}],
  PBDS:[{x:"主張州總理任期限兩屆，並限制州總理兼任的部長職務數量。",s:["st_pbds"]}],
  PBK:[{x:"希望至少取得一到三席，在州議會發聲。",s:["bp_pbk"]}]
 }
};
var ROLES = [
 {id:"abroad",name:"海外游子",issues:["econ","gov","auto"]},
 {id:"rural",name:"鄉區居民",issues:["rural","ncr","edu"]},
 {id:"city",name:"城市上班族",issues:["econ","gov"]},
 {id:"student",name:"學生・剛畢業",issues:["edu","econ"]},
 {id:"biz",name:"小生意人",issues:["econ","auto"]},
 {id:"land",name:"習俗地持有人",issues:["ncr","rural"]}
];

/* party marks: id -> relative image path. Empty until official files are supplied. */
var LOGOS = {};
