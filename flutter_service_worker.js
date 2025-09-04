'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d7f986677d9f563bd1794b09d82206a3",
".git/config": "34e29c45cc8b172352b175cbc55db0fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6d0a97cab20e7824182066a74ebe8060",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "92f62ac10abc9eac44c044c496beb7b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc00f8d0eeb72cf01347e238fa00566a",
".git/logs/refs/heads/master": "bc00f8d0eeb72cf01347e238fa00566a",
".git/logs/refs/remotes/origin/HEAD": "cf355655dc21e7195007bca4e1e9064a",
".git/logs/refs/remotes/origin/master": "a523cbd058cdfce0284f1b6ca82b4e15",
".git/objects/02/6400ee9cb2b1e82a98015e3c0dd1efddae91db": "84a1135b58bf5e8c5d2a05244ed5d653",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/07/fde2ea576cc545a5bb05d4a0f719096e133ee9": "d0c2fe4df2cae01f2dd9fd0e847ee510",
".git/objects/09/718f3265c4e8978610ed4766733919ae3ec49c": "e55777db5ff52095abfc9249b6e1f86d",
".git/objects/09/9f34de1f124a677885a3e58ea4ea59b4f8b304": "7029400a171718b627b30757c2632d5e",
".git/objects/09/a3b9afb0ee245a6cb64bf6187271da5220759b": "8732c8c64912ea695e234708cef9091d",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0a/b284560fafd2a3d79ddf74457670fc979e69b0": "62d52049ede1457950b3c93c4e8c3a57",
".git/objects/0f/0876a56872af9da0c890e7210824c0e558bdb7": "5ef1a92bb829e510ffd9a86d3bc9b193",
".git/objects/11/f82842b53a7ea9a731625287cf5ca492e1078c": "e530b72c13f625f1fca775a883009099",
".git/objects/14/14f6d980b43a71621aafde0e42bdfd2dd81cca": "9e2dba7e78c4b7a280db630d9ebbc273",
".git/objects/1b/6a572d379d9160d41575090290533ab7a93598": "347aff5df99700f0c7cf0f52935ff62b",
".git/objects/1e/506e272443aaff787a9b443c046bd08af39901": "4b2af876768295806cebc31d29c66f14",
".git/objects/1e/8e1da7c27a676d635e47c24bdef1402d0405cd": "9c335d410585eec2d6489a68a68aae6e",
".git/objects/1f/5c8b1ba3e51a74bdd79e675b3d45d63690cd02": "b4b1d0d40f8458c98036772cbbdfb245",
".git/objects/21/e95f3d188405ffea8a2cb6ba0d75a336702bdf": "bc6c9730253079e3c143dd2ba1623636",
".git/objects/2a/0e8a78c0662776ee2ab0ea7b22f84a5ddc7cc5": "0e8e022d4c549da864777ceaa5294e25",
".git/objects/2c/b2f5beac876d6f860127047e81990d286b11ca": "98777a9140713808218dde1b9a61ba3e",
".git/objects/2c/e4f0a82938ff6652682673be4453720ddf56a2": "7c5d2169aaa6f5df90a77e21f619e497",
".git/objects/31/e3b8ab488bb12a069faf704f6c07d87af2f557": "48c6321f8b8fd985b78136dcbcfaccf6",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/fa2d787413f18ce2578ad2c11e583962b19ad5": "b1f5fd16d4544b79b96e300327e79806",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/37/56a19ef7597072f8a4555df22758bbd86678b8": "b983d4715c78cc415e43baf212cf7c2b",
".git/objects/38/55cec40f06a01862116c1b1b8411786310f3e0": "4365795b55c8034bb757f84647c32d00",
".git/objects/39/d8494f48e4edbedacea5200343746d7e7b3813": "d25e9b4c1c9f0a4e7deca6ec0b61068f",
".git/objects/3e/15fdb3fd3449de918d2bf98fb6c65d9914fc3d": "852733dd1fd248b4fabb0ee1df8285ae",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/44/593083f3326001c4bb3e98aa37c85fc8382aa3": "0eceb03fb2095780ba4dd254b975292a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/25b581d0d2c4a92a892de37c9b1d8060645c16": "0c472b257f72317fecf6d20f54c26131",
".git/objects/4a/0ec319ea3284bd600ffc49c1f42542866b4b0b": "5944eb1115f1c14220107bef09b554e2",
".git/objects/4a/9deae221d9cd2cc50496ceeaec6fd7c86a2661": "2fb626c600564b8d04ae962002062423",
".git/objects/4b/44d4e6b5e75d0f2696ff976417d8433b29fb0f": "da8606b7d4f151627620a7885beb4b7a",
".git/objects/4c/1db415cd52dac78f3e888d8dd2fafba851b068": "cb670facc17465cd64545ee0885c4600",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/f6110fb5b6add2441b091f4649052100bf526f": "c72b988fa9121a6b4e5c4d5044186e54",
".git/objects/51/821b1dba2637c004b79466d8efc32f0d2f9a64": "1b404ba978c29b236730c4fc21b9e8c5",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/557b07790fcfa9dc77ddf7812a38a99a6d9b5f": "f61cc2787109c3fb11bbd0d7e4e31ca6",
".git/objects/5c/8c4420280a3a4a44bb7f6e719611d6729fab5b": "ed3325622b0f336e11a11e16960ba963",
".git/objects/5c/b1ea092c30049dec0c1e5d128e1d5712ffd1ea": "e406bb3f9995cfc851f97e17c93a538f",
".git/objects/5e/1f6346d502a72451088559b83cadaa7f0bd6c7": "34a042312179a9398f5bc3800983abbd",
".git/objects/5e/f41cdba68697c3b311eb25bcc10c2dd7efae3a": "a2587da058bccdb052d029b8de67ce4f",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/d81768b99dfabb4bdd083e40d044b05df2d493": "5019454e554dc8d58a970dd3a3b93ec5",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/5687a03bb8e7d097b10968d589d02bf569ab6b": "e9c4afbed0ecf5204b3c3f6865e54cab",
".git/objects/64/96cacc04ee5575205bff6fdf48afec1f175fb5": "fada681a21e55abafd996cd2c109edaa",
".git/objects/65/aeef3c1acd6a50163c330c5b957438554db19d": "a30e82fc15b50ac29d50dc4f6ef7ee6e",
".git/objects/69/045c9423fa32a7ce3248c40ae299b3e9facc8b": "78650ca1dccc83cd9c6994fe74fb4abf",
".git/objects/69/5c9d8cecb5bd50fb892ba13e4d3e6d4fa1037b": "cc270a7fc2cc14037683f8f583588a19",
".git/objects/69/dfb8ffeec9d11e018480cdab6cc25ef49fe610": "aa1312eb0fad1ee6e431c1f5b0ba6978",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/aefbe11ae2d8182a6a0bad97fb5357d9a2441e": "d01e10f77bcffc5a4c2deddeb912c5a6",
".git/objects/6f/7f4d0d9a5f7bf3c6da80d37501f39c577f5e92": "23eaa8759ddd6d001a37e7843cc94a0e",
".git/objects/73/82a013bf3e5bc99418dabe848c4d91bf8c2221": "c3ede351b5ded91cb99e91d8dc094f98",
".git/objects/82/8b778089bf360d3cc37db03c34eecdc23b7b3c": "314aaf9ec57ae8d45eacce1cf06bfae0",
".git/objects/84/58c5c118c3f77f0d79228de04bc33d63f0e00f": "8dc804c4625bec88217133a2adb7d61b",
".git/objects/84/f7a9559aee807689db4bc2087c620ebfc5061b": "87dd84ffd5ff32bef7a97c1fd3e887b6",
".git/objects/85/975bda3e4be2837f6b940493bfdd5b2b777748": "cf14c29d2aa3ff392cc9053a51982706",
".git/objects/87/6e1db87499d59730ec917d1ad13b9f7b59fc9e": "04d02e570681b34061e14243db4f3739",
".git/objects/88/424d8992723b2f16922978ad2591733a2ce9e6": "1b38a98565e1e1594aec57c0ba11a755",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/a4d3fae30ea78b561550e74adc0873c1cb7155": "6f6175588ff30c45103017401d5e87a9",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ebd6f32ee0a6f91998b11c91d22866ab01724e": "4246531159bfb4a613452f660093e7fa",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/30ce9f25c8ffccbc6c94539ff331eb847799c3": "82261f581c4618280dc90c597a7f56f0",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/94/ee0f02d9ec0142e581699b27f240079e8c6a89": "43f1f87ab74028eba14939b9b0187a48",
".git/objects/99/003d88122a64235b8e1bf1f315d0c43dbe5a62": "f18c6804bfe3289114c2c2ac4e2df28a",
".git/objects/9b/6d59b7007856dc5fcfbe872e2714df173a4e8f": "2220f28d27454ae431c8786eba04c575",
".git/objects/9c/ee54651b840af31f962ff00886bcb8a391222b": "4f8d23b65b0e7b7fab4fb9e37d8bb9c2",
".git/objects/9d/30570dada9251fd2b2e031b11ef85e8f4d0df1": "e42232280a7683a0c14ce81fcd7cdf76",
".git/objects/9d/76bbf9949a9907aff5f351fa92d3fab23e21e1": "46331afdbcebf02f66e60e2b602edd23",
".git/objects/9f/6bfff5971fe1c209c74827eea9c109e39eca3f": "84b3cf245bdc85e54d397387ec38ce63",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/65f6c94e35fac0dee04384d4b3776efee5b760": "695f83b2035ce73cd28756ec334dca19",
".git/objects/ac/bf0496807afc7df51a721377636489f6ed2498": "d253562393c473c09034d3b505bb3f69",
".git/objects/ae/183d93e81bf1e4e2b7444494b066bf28ad15f1": "da539c9132586694b4717ba9bfeee6d2",
".git/objects/b2/68dc943897058c06187d3c9d47214df7256dbf": "679e909b5f5a09dd41a73d11cd108e69",
".git/objects/b2/90eeded5081ea5cb3d157ff1554dae3589d653": "f77bdfa1bed96bcd5357c965417d7178",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4b45e0c1d8614a73489364c3134c3df9d6375f": "6e4ca6f197e30ea1fbd9d0c2aa8af6c7",
".git/objects/b9/eb48c111ba96c545b0a5bd248df62bc339d0f1": "8610064a659b7efc542eec418bc46450",
".git/objects/ba/b3c554f5659c212d294116fed51c85609005c0": "0b0cf7c47adc5bbb7193a9aaf58ed998",
".git/objects/ba/e1b13514992c54f70385dbccbfea7bec4a51b6": "89dfc55a9e64434af378c708678ed9c0",
".git/objects/bb/4c4b5a9d3deb82aa789955476e4bb93750bae6": "ab6e7e141f13ba8e200486cd914956d6",
".git/objects/be/c65f14787ad9197a525343a1f06e2e8527c095": "f718875950761bb652f0453d4203bfbf",
".git/objects/c0/05f00b023b0fa9d7db1a569ba09df0b5874e3b": "b9fd99b03fc6a1da028cf2f7745acd2f",
".git/objects/c3/41d708ff33830963c94854413ebe3f3143ee44": "b41d38567defbb53480da1360e003489",
".git/objects/c5/ee360f8392e1de944b16491f9edfe3451d3375": "db751e02a888cb9a9dfe8ce194c189f2",
".git/objects/c6/7e2c56d062bc5d5c22c49ac287dbe14970b537": "d87c025cf074f7497310af6753ac25af",
".git/objects/ce/9030de67736b8bd1a2a1219ddc53a64c493993": "5e328eb423fd993da776066ee0609ce0",
".git/objects/cf/1705a16551363dcd674ac22b48a27ecb53499d": "206d48ac6a2effbcca43b0256e9a55a1",
".git/objects/cf/e2900292bfcc9e7ca485aba002bc9d991ded64": "c78e83701bdd50bd906d8cd31d2275e6",
".git/objects/d3/aafdcd8814511076afd037a6327de38bac5506": "800db7be8b59f3ee6bb04b84a58d9c6d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/e16c6c1d57afd7d2ad9ac0bf67903d1b5e66b1": "8b07f1881c00bdb9953d86cef293b05a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/ffe3b6019db8702dbbad12d24c9052a46f257f": "204e04fb52f1ebc923d6a1eecefa2cee",
".git/objects/da/ca2cd4a333a4974bfafb39604b205b25d54e4b": "425fda25438f5a7fe13478bc530e9450",
".git/objects/de/0a6ef69fac26bb51bc948f33d4cb9fea2f6cf9": "2b000946ae736ff66ce94ab424eb5e77",
".git/objects/de/7886007b350d5808575d788157892a96d418f5": "a22557827f97c9e4a9bc67bdd3934d04",
".git/objects/df/c9d492e7758b6f9799317490a4077680a0849d": "1bd272036fd4cf64538cb5191c4fd3d1",
".git/objects/e1/5838ce1dfeee2a1714057be582f1da4ca601f3": "69cad546effa672d62e73e0407b7b173",
".git/objects/e3/8c7f8980f6d076c6a40bf1d5358717c65de587": "7876887450301eafde634f20713ad194",
".git/objects/e3/b7f4680d0aa5706662a036a8b9e4caaabc4c98": "285afd333d00a7ea5f3ee90cf24fa294",
".git/objects/e3/d1d05da2a95184f2d5008f5559737189df3aef": "c9a564206ef08ff915e9e1ec20b3fead",
".git/objects/e4/a533a33f6189f936a42f6b7c7eb33d65f951ac": "c445bca55b508bae3ad51194d41b0560",
".git/objects/e4/be41034b85362e705c8b208dab2899dd4038ae": "d5f5791186c64d5030df3a8b065ee983",
".git/objects/e6/b76dcde27556be04f72893dd2842ea15d56c7b": "34dca671fa47e3aa3ffc05ace7d4dcbe",
".git/objects/e9/6e67840ea4662e4418d5ba5f632781506e53ae": "dddf38933e999d6d752620767713bb4b",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/42093069169e23efff3e4ba3687511184099c0": "3603f14a2c84a6375e16962243a12e5c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/190a4ac0284a21c15d1a13196885bff0dc66a4": "8a993ac00647a19be51a723df0f2b645",
".git/objects/f3/3b02119f2f86352637e3b8765041c065550b6e": "dd0749ab8001e4326c5ac5a34b452bdf",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/177252d177da1602539f6ebb78adbabc9269e4": "6832046a153f93df948f82cd2c07843e",
".git/objects/f8/2a7eb9a954103bcff1eea412ea5a5c6e36920b": "4e3ae765761b15647684bf83d1b38427",
".git/objects/fb/0b72ecefa974508c9e598074e73cf79e9c755e": "c360741d8a21b57d16fa7772627f3537",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/ff/bfbf79083451898b9971ad9f8de62df4c55f83": "22b5821287a859fd994c844d7d4c14bd",
".git/refs/heads/master": "7a85b0ad6e38d1b6da580a247db7e69e",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "7a85b0ad6e38d1b6da580a247db7e69e",
"assets/AssetManifest.bin": "4e6f111b14dc3f8c38371c9864b23a9f",
"assets/AssetManifest.bin.json": "d52d2be211706df70ecf6a0eb3faa3a7",
"assets/AssetManifest.json": "1293d1187bcb6a4157c484f09a896959",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ab6636c194759c7156bb3061f9a27e5e",
"assets/images/c.jpg": "84dcfada6521bca06d576335c28a0919",
"assets/images/github.png": "f7c4cd6ffb38f4f7e225ca727047978c",
"assets/images/i.jpg": "2157e397c1ccbcf422f585091358b950",
"assets/images/in1.png": "b23c39f42f4658ae1679cf058d7fbc50",
"assets/images/m.jpg": "f2588f4c5711c9b20864196ab5bde7bf",
"assets/images/m.png": "aeaf74b58fdcf50c8d8013eb809d868a",
"assets/images/m1.png": "cc3c713e18b2d81addba883a7b4f4a72",
"assets/images/mq.png": "be4a7f93cb6157571a0f834f5dc4d987",
"assets/images/pg2.jpg": "ef5de05f00b33f5b77afccaf9b5a1267",
"assets/images/s.jpg": "536a02a550bdf2bccd53b96fec8f73d2",
"assets/images/to.jpg": "b2a4816052d8a5e584d35898ec13f752",
"assets/images/w.jpg": "26914ba4a2a9d32813f4ca2b1a232219",
"assets/NOTICES": "a782f012864efc59967dcad1c09d4fd6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "95d7335542fd3086885f7b7d8d192019",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "bb431d96a5e5311d6acaa01adec821fc",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
