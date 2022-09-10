/*

// Usage
FgEmojiPicker.init({
    trigger: 'button',
    position: ['bottom', 'right'],
    dir: 'directory/to/json', (without json name)
    preFetch: true, //load emoji json when function called 
    emit(emoji) {
        console.log(emoji);
    }
});
*/

const FgEmojiPicker = function (options) {

    this.options = options;
    // omitted fetching emoji json 
    // this.emojiJson = null;
    this.emojiJson = {
        "Smileys & People":[
          {
            "no":1,
            "code":"U+1F600",
            "emoji":"😀",
            "description":"GRINNING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "grin"
            ]
          },
          {
            "no":2,
            "code":"U+1F601",
            "emoji":"😁",
            "description":"GRINNING FACE WITH SMILING EYES",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "grin",
              "smile"
            ]
          },
          {
            "no":3,
            "code":"U+1F602",
            "emoji":"😂",
            "description":"FACE WITH TEARS OF JOY",
            "flagged":false,
            "keywords":[
              "face",
              "joy",
              "laugh",
              "tear"
            ]
          },
          {
            "no":4,
            "code":"U+1F923",
            "emoji":"🤣",
            "description":"ROLLING ON THE FLOOR LAUGHING",
            "flagged":true,
            "keywords":[
              "face",
              "floor",
              "laugh",
              "lol",
              "rofl",
              "rolling"
            ]
          },
          {
            "no":5,
            "code":"U+1F603",
            "emoji":"😃",
            "description":"SMILING FACE WITH OPEN MOUTH",
            "flagged":false,
            "keywords":[
              "face",
              "mouth",
              "open",
              "smile"
            ]
          },
          {
            "no":6,
            "code":"U+1F604",
            "emoji":"😄",
            "description":"SMILING FACE WITH OPEN MOUTH AND SMILING EYES",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "mouth",
              "open",
              "smile"
            ]
          },
          {
            "no":7,
            "code":"U+1F605",
            "emoji":"😅",
            "description":"SMILING FACE WITH OPEN MOUTH AND COLD SWEAT",
            "flagged":false,
            "keywords":[
              "cold",
              "face",
              "open",
              "smile",
              "sweat"
            ]
          },
          {
            "no":8,
            "code":"U+1F606",
            "emoji":"😆",
            "description":"SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES",
            "flagged":false,
            "keywords":[
              "face",
              "laugh",
              "mouth",
              "open",
              "satisfied",
              "smile"
            ]
          },
          {
            "no":9,
            "code":"U+1F609",
            "emoji":"😉",
            "description":"WINKING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "wink"
            ]
          },
          {
            "no":10,
            "code":"U+1F60A",
            "emoji":"😊",
            "description":"SMILING FACE WITH SMILING EYES",
            "flagged":false,
            "keywords":[
              "blush",
              "eye",
              "face",
              "smile"
            ]
          },
          {
            "no":11,
            "code":"U+1F60B",
            "emoji":"😋",
            "description":"FACE SAVOURING DELICIOUS FOOD",
            "flagged":false,
            "keywords":[
              "delicious",
              "face",
              "savouring",
              "smile",
              "um",
              "yum"
            ]
          },
          {
            "no":12,
            "code":"U+1F60E",
            "emoji":"😎",
            "description":"SMILING FACE WITH SUNGLASSES",
            "flagged":false,
            "keywords":[
              "bright",
              "cool",
              "eye",
              "eyewear",
              "face",
              "glasses",
              "smile",
              "sun",
              "sunglasses",
              "weather"
            ]
          },
          {
            "no":13,
            "code":"U+1F60D",
            "emoji":"😍",
            "description":"SMILING FACE WITH HEART-SHAPED EYES",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "heart",
              "love",
              "smile"
            ]
          },
          {
            "no":14,
            "code":"U+1F618",
            "emoji":"😘",
            "description":"FACE THROWING A KISS",
            "flagged":false,
            "keywords":[
              "face",
              "heart",
              "kiss"
            ]
          },
          {
            "no":15,
            "code":"U+1F617",
            "emoji":"😗",
            "description":"KISSING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "kiss"
            ]
          },
          {
            "no":16,
            "code":"U+1F619",
            "emoji":"😙",
            "description":"KISSING FACE WITH SMILING EYES",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "kiss",
              "smile"
            ]
          },
          {
            "no":17,
            "code":"U+1F61A",
            "emoji":"😚",
            "description":"KISSING FACE WITH CLOSED EYES",
            "flagged":false,
            "keywords":[
              "closed",
              "eye",
              "face",
              "kiss"
            ]
          },
          {
            "no":19,
            "code":"U+1F642",
            "emoji":"🙂",
            "description":"SLIGHTLY SMILING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "smile"
            ]
          },
          {
            "no":20,
            "code":"U+1F917",
            "emoji":"🤗",
            "description":"HUGGING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "hug",
              "hugging"
            ]
          },
          {
            "no":21,
            "code":"U+1F914",
            "emoji":"🤔",
            "description":"THINKING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "thinking"
            ]
          },
          {
            "no":22,
            "code":"U+1F610",
            "emoji":"😐",
            "description":"NEUTRAL FACE",
            "flagged":false,
            "keywords":[
              "deadpan",
              "face",
              "neutral"
            ]
          },
          {
            "no":23,
            "code":"U+1F611",
            "emoji":"😑",
            "description":"EXPRESSIONLESS FACE",
            "flagged":false,
            "keywords":[
              "expressionless",
              "face",
              "inexpressive",
              "unexpressive"
            ]
          },
          {
            "no":24,
            "code":"U+1F636",
            "emoji":"😶",
            "description":"FACE WITHOUT MOUTH",
            "flagged":false,
            "keywords":[
              "face",
              "mouth",
              "quiet",
              "silent"
            ]
          },
          {
            "no":25,
            "code":"U+1F644",
            "emoji":"🙄",
            "description":"FACE WITH ROLLING EYES",
            "flagged":false,
            "keywords":[
              "eyes",
              "face",
              "rolling"
            ]
          },
          {
            "no":26,
            "code":"U+1F60F",
            "emoji":"😏",
            "description":"SMIRKING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "smirk"
            ]
          },
          {
            "no":27,
            "code":"U+1F623",
            "emoji":"😣",
            "description":"PERSEVERING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "persevere"
            ]
          },
          {
            "no":28,
            "code":"U+1F625",
            "emoji":"😥",
            "description":"DISAPPOINTED BUT RELIEVED FACE",
            "flagged":false,
            "keywords":[
              "disappointed",
              "face",
              "relieved",
              "whew"
            ]
          },
          {
            "no":29,
            "code":"U+1F62E",
            "emoji":"😮",
            "description":"FACE WITH OPEN MOUTH",
            "flagged":false,
            "keywords":[
              "face",
              "mouth",
              "open",
              "sympathy"
            ]
          },
          {
            "no":30,
            "code":"U+1F910",
            "emoji":"🤐",
            "description":"ZIPPER-MOUTH FACE",
            "flagged":false,
            "keywords":[
              "face",
              "mouth",
              "zipper"
            ]
          },
          {
            "no":31,
            "code":"U+1F62F",
            "emoji":"😯",
            "description":"HUSHED FACE",
            "flagged":false,
            "keywords":[
              "face",
              "hushed",
              "stunned",
              "surprised"
            ]
          },
          {
            "no":32,
            "code":"U+1F62A",
            "emoji":"😪",
            "description":"SLEEPY FACE",
            "flagged":false,
            "keywords":[
              "face",
              "sleep"
            ]
          },
          {
            "no":33,
            "code":"U+1F62B",
            "emoji":"😫",
            "description":"TIRED FACE",
            "flagged":false,
            "keywords":[
              "face",
              "tired"
            ]
          },
          {
            "no":34,
            "code":"U+1F634",
            "emoji":"😴",
            "description":"SLEEPING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "sleep",
              "zzz"
            ]
          },
          {
            "no":35,
            "code":"U+1F60C",
            "emoji":"😌",
            "description":"RELIEVED FACE",
            "flagged":false,
            "keywords":[
              "face",
              "relieved"
            ]
          },
          {
            "no":36,
            "code":"U+1F913",
            "emoji":"🤓",
            "description":"NERD FACE",
            "flagged":false,
            "keywords":[
              "face",
              "geek",
              "nerd"
            ]
          },
          {
            "no":37,
            "code":"U+1F61B",
            "emoji":"😛",
            "description":"FACE WITH STUCK-OUT TONGUE",
            "flagged":false,
            "keywords":[
              "face",
              "tongue"
            ]
          },
          {
            "no":38,
            "code":"U+1F61C",
            "emoji":"😜",
            "description":"FACE WITH STUCK-OUT TONGUE AND WINKING EYE",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "joke",
              "tongue",
              "wink"
            ]
          },
          {
            "no":39,
            "code":"U+1F61D",
            "emoji":"😝",
            "description":"FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES",
            "flagged":false,
            "keywords":[
              "eye",
              "face",
              "horrible",
              "taste",
              "tongue"
            ]
          },
          {
            "no":40,
            "code":"U+1F924",
            "emoji":"🤤",
            "description":"DROOLING FACE",
            "flagged":true,
            "keywords":[
              "drooling",
              "face"
            ]
          },
          {
            "no":41,
            "code":"U+1F612",
            "emoji":"😒",
            "description":"UNAMUSED FACE",
            "flagged":false,
            "keywords":[
              "face",
              "unamused",
              "unhappy"
            ]
          },
          {
            "no":42,
            "code":"U+1F613",
            "emoji":"😓",
            "description":"FACE WITH COLD SWEAT",
            "flagged":false,
            "keywords":[
              "cold",
              "face",
              "sweat"
            ]
          },
          {
            "no":43,
            "code":"U+1F614",
            "emoji":"😔",
            "description":"PENSIVE FACE",
            "flagged":false,
            "keywords":[
              "dejected",
              "face",
              "pensive"
            ]
          },
          {
            "no":44,
            "code":"U+1F615",
            "emoji":"😕",
            "description":"CONFUSED FACE",
            "flagged":false,
            "keywords":[
              "confused",
              "face"
            ]
          },
          {
            "no":45,
            "code":"U+1F643",
            "emoji":"🙃",
            "description":"UPSIDE-DOWN FACE",
            "flagged":false,
            "keywords":[
              "face",
              "upside-down"
            ]
          },
          {
            "no":46,
            "code":"U+1F911",
            "emoji":"🤑",
            "description":"MONEY-MOUTH FACE",
            "flagged":false,
            "keywords":[
              "face",
              "money",
              "mouth"
            ]
          },
          {
            "no":47,
            "code":"U+1F632",
            "emoji":"😲",
            "description":"ASTONISHED FACE",
            "flagged":false,
            "keywords":[
              "astonished",
              "face",
              "shocked",
              "totally"
            ]
          },
          {
            "no":48,
            "code":"U+2639",
            "emoji":"☹",
            "description":"WHITE FROWNING FACE≊ frowning face",
            "flagged":false,
            "keywords":[
              "face",
              "frown"
            ]
          },
          {
            "no":49,
            "code":"U+1F641",
            "emoji":"🙁",
            "description":"SLIGHTLY FROWNING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "frown"
            ]
          },
          {
            "no":50,
            "code":"U+1F616",
            "emoji":"😖",
            "description":"CONFOUNDED FACE",
            "flagged":false,
            "keywords":[
              "confounded",
              "face"
            ]
          },
          {
            "no":51,
            "code":"U+1F61E",
            "emoji":"😞",
            "description":"DISAPPOINTED FACE",
            "flagged":false,
            "keywords":[
              "disappointed",
              "face"
            ]
          },
          {
            "no":52,
            "code":"U+1F61F",
            "emoji":"😟",
            "description":"WORRIED FACE",
            "flagged":false,
            "keywords":[
              "face",
              "worried"
            ]
          },
          {
            "no":53,
            "code":"U+1F624",
            "emoji":"😤",
            "description":"FACE WITH LOOK OF TRIUMPH≊ face with steam from nose",
            "flagged":false,
            "keywords":[
              "face",
              "triumph",
              "won"
            ]
          },
          {
            "no":54,
            "code":"U+1F622",
            "emoji":"😢",
            "description":"CRYING FACE",
            "flagged":false,
            "keywords":[
              "cry",
              "face",
              "sad",
              "tear"
            ]
          },
          {
            "no":55,
            "code":"U+1F62D",
            "emoji":"😭",
            "description":"LOUDLY CRYING FACE",
            "flagged":false,
            "keywords":[
              "cry",
              "face",
              "sad",
              "sob",
              "tear"
            ]
          },
          {
            "no":56,
            "code":"U+1F626",
            "emoji":"😦",
            "description":"FROWNING FACE WITH OPEN MOUTH",
            "flagged":false,
            "keywords":[
              "face",
              "frown",
              "mouth",
              "open"
            ]
          },
          {
            "no":57,
            "code":"U+1F627",
            "emoji":"😧",
            "description":"ANGUISHED FACE",
            "flagged":false,
            "keywords":[
              "anguished",
              "face"
            ]
          },
          {
            "no":58,
            "code":"U+1F628",
            "emoji":"😨",
            "description":"FEARFUL FACE",
            "flagged":false,
            "keywords":[
              "face",
              "fear",
              "fearful",
              "scared"
            ]
          },
          {
            "no":59,
            "code":"U+1F629",
            "emoji":"😩",
            "description":"WEARY FACE",
            "flagged":false,
            "keywords":[
              "face",
              "tired",
              "weary"
            ]
          },
          {
            "no":60,
            "code":"U+1F62C",
            "emoji":"😬",
            "description":"GRIMACING FACE",
            "flagged":false,
            "keywords":[
              "face",
              "grimace"
            ]
          },
          {
            "no":61,
            "code":"U+1F630",
            "emoji":"😰",
            "description":"FACE WITH OPEN MOUTH AND COLD SWEAT",
            "flagged":false,
            "keywords":[
              "blue",
              "cold",
              "face",
              "mouth",
              "open",
              "rushed",
              "sweat"
            ]
          },
          {
            "no":62,
            "code":"U+1F631",
            "emoji":"😱",
            "description":"FACE SCREAMING IN FEAR",
            "flagged":false,
            "keywords":[
              "face",
              "fear",
              "fearful",
              "munch",
              "scared",
              "scream"
            ]
          },
          {
            "no":63,
            "code":"U+1F633",
            "emoji":"😳",
            "description":"FLUSHED FACE",
            "flagged":false,
            "keywords":[
              "dazed",
              "face",
              "flushed"
            ]
          },
          {
            "no":64,
            "code":"U+1F635",
            "emoji":"😵",
            "description":"DIZZY FACE",
            "flagged":false,
            "keywords":[
              "dizzy",
              "face"
            ]
          },
          {
            "no":65,
            "code":"U+1F621",
            "emoji":"😡",
            "description":"POUTING FACE",
            "flagged":false,
            "keywords":[
              "angry",
              "face",
              "mad",
              "pouting",
              "rage",
              "red"
            ]
          },
          {
            "no":66,
            "code":"U+1F620",
            "emoji":"😠",
            "description":"ANGRY FACE",
            "flagged":false,
            "keywords":[
              "angry",
              "face",
              "mad"
            ]
          },
          {
            "no":67,
            "code":"U+1F607",
            "emoji":"😇",
            "description":"SMILING FACE WITH HALO",
            "flagged":false,
            "keywords":[
              "angel",
              "face",
              "fairy tale",
              "fantasy",
              "halo",
              "innocent",
              "smile"
            ]
          },
          {
            "no":68,
            "code":"U+1F920",
            "emoji":"🤠",
            "description":"FACE WITH COWBOY HAT",
            "flagged":true,
            "keywords":[
              "cowboy",
              "cowgirl",
              "face",
              "hat"
            ]
          },
          {
            "no":69,
            "code":"U+1F921",
            "emoji":"🤡",
            "description":"CLOWN FACE",
            "flagged":true,
            "keywords":[
              "clown",
              "face"
            ]
          },
          {
            "no":70,
            "code":"U+1F925",
            "emoji":"🤥",
            "description":"LYING FACE",
            "flagged":true,
            "keywords":[
              "face",
              "lie",
              "pinocchio"
            ]
          },
          {
            "no":71,
            "code":"U+1F637",
            "emoji":"😷",
            "description":"FACE WITH MEDICAL MASK",
            "flagged":false,
            "keywords":[
              "cold",
              "doctor",
              "face",
              "mask",
              "medicine",
              "sick"
            ]
          },
          {
            "no":72,
            "code":"U+1F912",
            "emoji":"🤒",
            "description":"FACE WITH THERMOMETER",
            "flagged":false,
            "keywords":[
              "face",
              "ill",
              "sick",
              "thermometer"
            ]
          },
          {
            "no":73,
            "code":"U+1F915",
            "emoji":"🤕",
            "description":"FACE WITH HEAD-BANDAGE",
            "flagged":false,
            "keywords":[
              "bandage",
              "face",
              "hurt",
              "injury"
            ]
          },
          {
            "no":74,
            "code":"U+1F922",
            "emoji":"🤢",
            "description":"NAUSEATED FACE",
            "flagged":true,
            "keywords":[
              "face",
              "nauseated",
              "vomit"
            ]
          },
          {
            "no":75,
            "code":"U+1F927",
            "emoji":"🤧",
            "description":"SNEEZING FACE",
            "flagged":true,
            "keywords":[
              "face",
              "gesundheit",
              "sneeze"
            ]
          },
          {
            "no":76,
            "code":"U+1F608",
            "emoji":"😈",
            "description":"SMILING FACE WITH HORNS",
            "flagged":false,
            "keywords":[
              "face",
              "fairy tale",
              "fantasy",
              "horns",
              "smile"
            ]
          },
          {
            "no":77,
            "code":"U+1F47F",
            "emoji":"👿",
            "description":"IMP",
            "flagged":false,
            "keywords":[
              "demon",
              "devil",
              "face",
              "fairy tale",
              "fantasy",
              "imp"
            ]
          },
          {
            "no":78,
            "code":"U+1F479",
            "emoji":"👹",
            "description":"JAPANESE OGRE≊ ogre",
            "flagged":false,
            "keywords":[
              "creature",
              "face",
              "fairy tale",
              "fantasy",
              "japanese",
              "monster",
              "ogre"
            ]
          },
          {
            "no":79,
            "code":"U+1F47A",
            "emoji":"👺",
            "description":"JAPANESE GOBLIN≊ goblin",
            "flagged":false,
            "keywords":[
              "creature",
              "face",
              "fairy tale",
              "fantasy",
              "goblin",
              "japanese",
              "monster"
            ]
          },
          {
            "no":80,
            "code":"U+1F480",
            "emoji":"💀",
            "description":"SKULL",
            "flagged":false,
            "keywords":[
              "body",
              "death",
              "face",
              "fairy tale",
              "monster",
              "skull"
            ]
          },
          {
            "no":81,
            "code":"U+2620",
            "emoji":"☠",
            "description":"SKULL AND CROSSBONES",
            "flagged":false,
            "keywords":[
              "body",
              "crossbones",
              "death",
              "face",
              "monster",
              "skull"
            ]
          },
          {
            "no":82,
            "code":"U+1F47B",
            "emoji":"👻",
            "description":"GHOST",
            "flagged":false,
            "keywords":[
              "creature",
              "face",
              "fairy tale",
              "fantasy",
              "ghost",
              "monster"
            ]
          },
          {
            "no":83,
            "code":"U+1F47D",
            "emoji":"👽",
            "description":"EXTRATERRESTRIAL ALIEN≊ alien",
            "flagged":false,
            "keywords":[
              "alien",
              "creature",
              "extraterrestrial",
              "face",
              "fairy tale",
              "fantasy",
              "monster",
              "space",
              "ufo"
            ]
          },
          {
            "no":84,
            "code":"U+1F47E",
            "emoji":"👾",
            "description":"ALIEN MONSTER",
            "flagged":false,
            "keywords":[
              "alien",
              "creature",
              "extraterrestrial",
              "face",
              "fairy tale",
              "fantasy",
              "monster",
              "space",
              "ufo"
            ]
          },
          {
            "no":85,
            "code":"U+1F916",
            "emoji":"🤖",
            "description":"ROBOT FACE",
            "flagged":false,
            "keywords":[
              "face",
              "monster",
              "robot"
            ]
          },
          {
            "no":86,
            "code":"U+1F4A9",
            "emoji":"💩",
            "description":"PILE OF POO",
            "flagged":false,
            "keywords":[
              "comic",
              "dung",
              "face",
              "monster",
              "poo",
              "poop"
            ]
          },
          {
            "no":87,
            "code":"U+1F63A",
            "emoji":"😺",
            "description":"SMILING CAT FACE WITH OPEN MOUTH",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "mouth",
              "open",
              "smile"
            ]
          },
          {
            "no":88,
            "code":"U+1F638",
            "emoji":"😸",
            "description":"GRINNING CAT FACE WITH SMILING EYES",
            "flagged":false,
            "keywords":[
              "cat",
              "eye",
              "face",
              "grin",
              "smile"
            ]
          },
          {
            "no":89,
            "code":"U+1F639",
            "emoji":"😹",
            "description":"CAT FACE WITH TEARS OF JOY",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "joy",
              "tear"
            ]
          },
          {
            "no":90,
            "code":"U+1F63B",
            "emoji":"😻",
            "description":"SMILING CAT FACE WITH HEART-SHAPED EYES",
            "flagged":false,
            "keywords":[
              "cat",
              "eye",
              "face",
              "heart",
              "love",
              "smile"
            ]
          },
          {
            "no":91,
            "code":"U+1F63C",
            "emoji":"😼",
            "description":"CAT FACE WITH WRY SMILE",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "ironic",
              "smile",
              "wry"
            ]
          },
          {
            "no":92,
            "code":"U+1F63D",
            "emoji":"😽",
            "description":"KISSING CAT FACE WITH CLOSED EYES",
            "flagged":false,
            "keywords":[
              "cat",
              "eye",
              "face",
              "kiss"
            ]
          },
          {
            "no":93,
            "code":"U+1F640",
            "emoji":"🙀",
            "description":"WEARY CAT FACE",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "oh",
              "surprised",
              "weary"
            ]
          },
          {
            "no":94,
            "code":"U+1F63F",
            "emoji":"😿",
            "description":"CRYING CAT FACE",
            "flagged":false,
            "keywords":[
              "cat",
              "cry",
              "face",
              "sad",
              "tear"
            ]
          },
          {
            "no":95,
            "code":"U+1F63E",
            "emoji":"😾",
            "description":"POUTING CAT FACE",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "pouting"
            ]
          },
          {
            "no":96,
            "code":"U+1F648",
            "emoji":"🙈",
            "description":"SEE-NO-EVIL MONKEY≊ see-no-evil",
            "flagged":false,
            "keywords":[
              "evil",
              "face",
              "forbidden",
              "gesture",
              "monkey",
              "no",
              "not",
              "prohibited",
              "see"
            ]
          },
          {
            "no":97,
            "code":"U+1F649",
            "emoji":"🙉",
            "description":"HEAR-NO-EVIL MONKEY≊ hear-no-evil",
            "flagged":false,
            "keywords":[
              "evil",
              "face",
              "forbidden",
              "gesture",
              "hear",
              "monkey",
              "no",
              "not",
              "prohibited"
            ]
          },
          {
            "no":98,
            "code":"U+1F64A",
            "emoji":"🙊",
            "description":"SPEAK-NO-EVIL MONKEY≊ speak-no-evil",
            "flagged":false,
            "keywords":[
              "evil",
              "face",
              "forbidden",
              "gesture",
              "monkey",
              "no",
              "not",
              "prohibited",
              "speak"
            ]
          },
          {
            "no":99,
            "code":"U+1F466",
            "emoji":"👦",
            "description":"BOY",
            "flagged":false,
            "keywords":[
              "boy"
            ],
            "types":[
              "U+1F466 U+1F3FF",
              "U+1F466 U+1F3FE",
              "U+1F466 U+1F3FD",
              "U+1F466 U+1F3FC",
              "U+1F466 U+1F3FB"
            ]
          },
          {
            "no":105,
            "code":"U+1F467",
            "emoji":"👧",
            "description":"GIRL",
            "flagged":false,
            "keywords":[
              "girl",
              "maiden",
              "virgin",
              "virgo",
              "zodiac"
            ],
            "types":[
              "U+1F467 U+1F3FF",
              "U+1F467 U+1F3FE",
              "U+1F467 U+1F3FD",
              "U+1F467 U+1F3FC",
              "U+1F467 U+1F3FB"
            ]
          },
          {
            "no":111,
            "code":"U+1F468",
            "emoji":"👨",
            "description":"MAN",
            "flagged":false,
            "keywords":[
              "man"
            ],
            "types":[
              "U+1F468 U+1F3FF",
              "U+1F468 U+1F3FE",
              "U+1F468 U+1F3FD",
              "U+1F468 U+1F3FC",
              "U+1F468 U+1F3FB"
            ]
          },
          {
            "no":117,
            "code":"U+1F469",
            "emoji":"👩",
            "description":"WOMAN",
            "flagged":false,
            "keywords":[
              "woman"
            ],
            "types":[
              "U+1F469 U+1F3FF",
              "U+1F469 U+1F3FE",
              "U+1F469 U+1F3FD",
              "U+1F469 U+1F3FC",
              "U+1F469 U+1F3FB"
            ]
          },
          {
            "no":123,
            "code":"U+1F474",
            "emoji":"👴",
            "description":"OLDER MAN≊ old man",
            "flagged":false,
            "keywords":[
              "man",
              "old"
            ],
            "types":[
              "U+1F474 U+1F3FF",
              "U+1F474 U+1F3FE",
              "U+1F474 U+1F3FD",
              "U+1F474 U+1F3FC",
              "U+1F474 U+1F3FB"
            ]
          },
          {
            "no":129,
            "code":"U+1F475",
            "emoji":"👵",
            "description":"OLDER WOMAN≊ old woman",
            "flagged":false,
            "keywords":[
              "old",
              "woman"
            ],
            "types":[
              "U+1F475 U+1F3FF",
              "U+1F475 U+1F3FE",
              "U+1F475 U+1F3FD",
              "U+1F475 U+1F3FC",
              "U+1F475 U+1F3FB"
            ]
          },
          {
            "no":135,
            "code":"U+1F476",
            "emoji":"👶",
            "description":"BABY",
            "flagged":false,
            "keywords":[
              "baby"
            ],
            "types":[
              "U+1F476 U+1F3FF",
              "U+1F476 U+1F3FE",
              "U+1F476 U+1F3FD",
              "U+1F476 U+1F3FC",
              "U+1F476 U+1F3FB"
            ]
          },
          {
            "no":141,
            "code":"U+1F47C",
            "emoji":"👼",
            "description":"BABY ANGEL",
            "flagged":false,
            "keywords":[
              "angel",
              "baby",
              "face",
              "fairy tale",
              "fantasy"
            ],
            "types":[
              "U+1F47C U+1F3FF",
              "U+1F47C U+1F3FE",
              "U+1F47C U+1F3FD",
              "U+1F47C U+1F3FC",
              "U+1F47C U+1F3FB"
            ]
          },
          {
            "no":147,
            "code":"U+1F471",
            "emoji":"👱",
            "description":"PERSON WITH BLOND HAIR",
            "flagged":false,
            "keywords":[
              "blond"
            ],
            "types":[
              "U+1F471 U+1F3FF",
              "U+1F471 U+1F3FE",
              "U+1F471 U+1F3FD",
              "U+1F471 U+1F3FC",
              "U+1F471 U+1F3FB"
            ]
          },
          {
            "no":153,
            "code":"U+1F46E",
            "emoji":"👮",
            "description":"POLICE OFFICER",
            "flagged":false,
            "keywords":[
              "cop",
              "officer",
              "police"
            ],
            "types":[
              "U+1F46E U+1F3FF",
              "U+1F46E U+1F3FE",
              "U+1F46E U+1F3FD",
              "U+1F46E U+1F3FC",
              "U+1F46E U+1F3FB"
            ]
          },
          {
            "no":159,
            "code":"U+1F472",
            "emoji":"👲",
            "description":"MAN WITH GUA PI MAO≊ man with chinese cap",
            "flagged":false,
            "keywords":[
              "gua pi mao",
              "hat",
              "man"
            ],
            "types":[
              "U+1F472 U+1F3FF",
              "U+1F472 U+1F3FE",
              "U+1F472 U+1F3FD",
              "U+1F472 U+1F3FC",
              "U+1F472 U+1F3FB"
            ]
          },
          {
            "no":165,
            "code":"U+1F473",
            "emoji":"👳",
            "description":"MAN WITH TURBAN",
            "flagged":false,
            "keywords":[
              "man",
              "turban"
            ],
            "types":[
              "U+1F473 U+1F3FF",
              "U+1F473 U+1F3FE",
              "U+1F473 U+1F3FD",
              "U+1F473 U+1F3FC",
              "U+1F473 U+1F3FB"
            ]
          },
          {
            "no":171,
            "code":"U+1F477",
            "emoji":"👷",
            "description":"CONSTRUCTION WORKER",
            "flagged":false,
            "keywords":[
              "construction",
              "hat",
              "worker"
            ],
            "types":[
              "U+1F477 U+1F3FF",
              "U+1F477 U+1F3FE",
              "U+1F477 U+1F3FD",
              "U+1F477 U+1F3FC",
              "U+1F477 U+1F3FB"
            ]
          },
          {
            "no":177,
            "code":"U+1F478",
            "emoji":"👸",
            "description":"PRINCESS",
            "flagged":false,
            "keywords":[
              "fairy tale",
              "fantasy",
              "princess"
            ],
            "types":[
              "U+1F478 U+1F3FF",
              "U+1F478 U+1F3FE",
              "U+1F478 U+1F3FD",
              "U+1F478 U+1F3FC",
              "U+1F478 U+1F3FB"
            ]
          },
          {
            "no":183,
            "code":"U+1F934",
            "emoji":"🤴",
            "description":"PRINCE",
            "flagged":true,
            "keywords":[
              "prince"
            ],
            "types":[
              "U+1F934 U+1F3FF",
              "U+1F934 U+1F3FE",
              "U+1F934 U+1F3FD",
              "U+1F934 U+1F3FC",
              "U+1F934 U+1F3FB"
            ]
          },
          {
            "no":189,
            "code":"U+1F482",
            "emoji":"💂",
            "description":"GUARDSMAN",
            "flagged":false,
            "keywords":[
              "guard",
              "guardsman"
            ],
            "types":[
              "U+1F482 U+1F3FF",
              "U+1F482 U+1F3FE",
              "U+1F482 U+1F3FD",
              "U+1F482 U+1F3FC",
              "U+1F482 U+1F3FB"
            ]
          },
          {
            "no":195,
            "code":"U+1F575",
            "emoji":"🕵",
            "description":"SLEUTH OR SPY≊ detective",
            "flagged":false,
            "keywords":[
              "detective",
              "sleuth",
              "spy"
            ],
            "types":[
              "U+1F575 U+1F3FF",
              "U+1F575 U+1F3FE",
              "U+1F575 U+1F3FD",
              "U+1F575 U+1F3FC",
              "U+1F575 U+1F3FB"
            ]
          },
          {
            "no":201,
            "code":"U+1F385",
            "emoji":"🎅",
            "description":"FATHER CHRISTMAS≊ santa claus",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "christmas",
              "fairy tale",
              "fantasy",
              "father",
              "santa"
            ],
            "types":[
              "U+1F385 U+1F3FF",
              "U+1F385 U+1F3FE",
              "U+1F385 U+1F3FD",
              "U+1F385 U+1F3FC",
              "U+1F385 U+1F3FB"
            ]
          },
          {
            "no":207,
            "code":"U+1F936",
            "emoji":"🤶",
            "description":"MOTHER CHRISTMAS",
            "flagged":true,
            "keywords":[
              "christmas",
              "mother",
              "mrs. claus"
            ],
            "types":[
              "U+1F936 U+1F3FF",
              "U+1F936 U+1F3FE",
              "U+1F936 U+1F3FD",
              "U+1F936 U+1F3FC",
              "U+1F936 U+1F3FB"
            ]
          },
          {
            "no":213,
            "code":"U+1F470",
            "emoji":"👰",
            "description":"BRIDE WITH VEIL",
            "flagged":false,
            "keywords":[
              "bride",
              "veil",
              "wedding"
            ],
            "types":[
              "U+1F470 U+1F3FF",
              "U+1F470 U+1F3FE",
              "U+1F470 U+1F3FD",
              "U+1F470 U+1F3FC",
              "U+1F470 U+1F3FB"
            ]
          },
          {
            "no":219,
            "code":"U+1F935",
            "emoji":"🤵",
            "description":"MAN IN TUXEDO",
            "flagged":true,
            "keywords":[
              "groom",
              "man",
              "tuxedo"
            ],
            "types":[
              "U+1F935 U+1F3FF",
              "U+1F935 U+1F3FE",
              "U+1F935 U+1F3FD",
              "U+1F935 U+1F3FC",
              "U+1F935 U+1F3FB"
            ]
          },
          {
            "no":225,
            "code":"U+1F486",
            "emoji":"💆",
            "description":"FACE MASSAGE",
            "flagged":false,
            "keywords":[
              "massage",
              "salon"
            ],
            "types":[
              "U+1F486 U+1F3FF",
              "U+1F486 U+1F3FE",
              "U+1F486 U+1F3FD",
              "U+1F486 U+1F3FC",
              "U+1F486 U+1F3FB"
            ]
          },
          {
            "no":231,
            "code":"U+1F487",
            "emoji":"💇",
            "description":"HAIRCUT",
            "flagged":false,
            "keywords":[
              "barber",
              "beauty",
              "haircut",
              "parlor"
            ],
            "types":[
              "U+1F487 U+1F3FF",
              "U+1F487 U+1F3FE",
              "U+1F487 U+1F3FD",
              "U+1F487 U+1F3FC",
              "U+1F487 U+1F3FB"
            ]
          },
          {
            "no":237,
            "code":"U+1F64D",
            "emoji":"🙍",
            "description":"PERSON FROWNING",
            "flagged":false,
            "keywords":[
              "frown",
              "gesture"
            ],
            "types":[
              "U+1F64D U+1F3FF",
              "U+1F64D U+1F3FE",
              "U+1F64D U+1F3FD",
              "U+1F64D U+1F3FC",
              "U+1F64D U+1F3FB"
            ]
          },
          {
            "no":243,
            "code":"U+1F64E",
            "emoji":"🙎",
            "description":"PERSON WITH POUTING FACE≊ person pouting",
            "flagged":false,
            "keywords":[
              "gesture",
              "pouting"
            ],
            "types":[
              "U+1F64E U+1F3FF",
              "U+1F64E U+1F3FE",
              "U+1F64E U+1F3FD",
              "U+1F64E U+1F3FC",
              "U+1F64E U+1F3FB"
            ]
          },
          {
            "no":249,
            "code":"U+1F645",
            "emoji":"🙅",
            "description":"FACE WITH NO GOOD GESTURE≊ gesturing no",
            "flagged":false,
            "keywords":[
              "forbidden",
              "gesture",
              "hand",
              "no",
              "not",
              "prohibited"
            ],
            "types":[
              "U+1F645 U+1F3FF",
              "U+1F645 U+1F3FE",
              "U+1F645 U+1F3FD",
              "U+1F645 U+1F3FC",
              "U+1F645 U+1F3FB"
            ]
          },
          {
            "no":255,
            "code":"U+1F646",
            "emoji":"🙆",
            "description":"FACE WITH OK GESTURE≊ gesturing ok",
            "flagged":false,
            "keywords":[
              "gesture",
              "hand",
              "ok"
            ],
            "types":[
              "U+1F646 U+1F3FF",
              "U+1F646 U+1F3FE",
              "U+1F646 U+1F3FD",
              "U+1F646 U+1F3FC",
              "U+1F646 U+1F3FB"
            ]
          },
          {
            "no":261,
            "code":"U+1F481",
            "emoji":"💁",
            "description":"INFORMATION DESK PERSON",
            "flagged":false,
            "keywords":[
              "hand",
              "help",
              "information",
              "sassy"
            ],
            "types":[
              "U+1F481 U+1F3FF",
              "U+1F481 U+1F3FE",
              "U+1F481 U+1F3FD",
              "U+1F481 U+1F3FC",
              "U+1F481 U+1F3FB"
            ]
          },
          {
            "no":267,
            "code":"U+1F937",
            "emoji":"🤷",
            "description":"SHRUG",
            "flagged":true,
            "keywords":[
              "doubt",
              "ignorance",
              "indifference",
              "shrug"
            ],
            "types":[
              "U+1F937 U+1F3FF",
              "U+1F937 U+1F3FE",
              "U+1F937 U+1F3FD",
              "U+1F937 U+1F3FC",
              "U+1F937 U+1F3FB"
            ]
          },
          {
            "no":273,
            "code":"U+1F64B",
            "emoji":"🙋",
            "description":"HAPPY PERSON RAISING ONE HAND≊ happy person raising hand",
            "flagged":false,
            "keywords":[
              "gesture",
              "hand",
              "happy",
              "raised"
            ],
            "types":[
              "U+1F64B U+1F3FF",
              "U+1F64B U+1F3FE",
              "U+1F64B U+1F3FD",
              "U+1F64B U+1F3FC",
              "U+1F64B U+1F3FB"
            ]
          },
          {
            "no":279,
            "code":"U+1F926",
            "emoji":"🤦",
            "description":"FACE PALM",
            "flagged":true,
            "keywords":[
              "disbelief",
              "exasperation",
              "face",
              "palm"
            ],
            "types":[
              "U+1F926 U+1F3FF",
              "U+1F926 U+1F3FE",
              "U+1F926 U+1F3FD",
              "U+1F926 U+1F3FC",
              "U+1F926 U+1F3FB"
            ]
          },
          {
            "no":285,
            "code":"U+1F647",
            "emoji":"🙇",
            "description":"PERSON BOWING DEEPLY≊ person bowing",
            "flagged":false,
            "keywords":[
              "apology",
              "bow",
              "gesture",
              "sorry"
            ],
            "types":[
              "U+1F647 U+1F3FF",
              "U+1F647 U+1F3FE",
              "U+1F647 U+1F3FD",
              "U+1F647 U+1F3FC",
              "U+1F647 U+1F3FB"
            ]
          },
          {
            "no":291,
            "code":"U+1F6B6",
            "emoji":"🚶",
            "description":"PEDESTRIAN",
            "flagged":false,
            "keywords":[
              "hike",
              "pedestrian",
              "walk",
              "walking"
            ],
            "types":[
              "U+1F6B6 U+1F3FF",
              "U+1F6B6 U+1F3FE",
              "U+1F6B6 U+1F3FD",
              "U+1F6B6 U+1F3FC",
              "U+1F6B6 U+1F3FB"
            ]
          },
          {
            "no":297,
            "code":"U+1F3C3",
            "emoji":"🏃",
            "description":"RUNNER",
            "flagged":false,
            "keywords":[
              "marathon",
              "runner",
              "running"
            ],
            "types":[
              "U+1F3C3 U+1F3FF",
              "U+1F3C3 U+1F3FE",
              "U+1F3C3 U+1F3FD",
              "U+1F3C3 U+1F3FC",
              "U+1F3C3 U+1F3FB"
            ]
          },
          {
            "no":303,
            "code":"U+1F483",
            "emoji":"💃",
            "description":"DANCER",
            "flagged":false,
            "keywords":[
              "dancer"
            ],
            "types":[
              "U+1F483 U+1F3FF",
              "U+1F483 U+1F3FE",
              "U+1F483 U+1F3FD",
              "U+1F483 U+1F3FC",
              "U+1F483 U+1F3FB"
            ]
          },
          {
            "no":309,
            "code":"U+1F57A",
            "emoji":"🕺",
            "description":"MAN DANCING",
            "flagged":true,
            "keywords":[
              "dance",
              "man"
            ],
            "types":[
              "U+1F57A U+1F3FF",
              "U+1F57A U+1F3FE",
              "U+1F57A U+1F3FD",
              "U+1F57A U+1F3FC",
              "U+1F57A U+1F3FB"
            ]
          },
          {
            "no":315,
            "code":"U+1F930",
            "emoji":"🤰",
            "description":"PREGNANT WOMAN",
            "flagged":true,
            "keywords":[
              "pregnant",
              "woman"
            ],
            "types":[
              "U+1F930 U+1F3FF",
              "U+1F930 U+1F3FE",
              "U+1F930 U+1F3FD",
              "U+1F930 U+1F3FC",
              "U+1F930 U+1F3FB"
            ]
          },
          {
            "no":321,
            "code":"U+1F46F",
            "emoji":"👯",
            "description":"WOMAN WITH BUNNY EARS≊ women partying",
            "flagged":false,
            "keywords":[
              "bunny",
              "dancer",
              "ear",
              "girl",
              "woman"
            ]
          },
          {
            "no":322,
            "code":"U+1F574",
            "emoji":"🕴",
            "description":"MAN IN BUSINESS SUIT LEVITATING",
            "flagged":false,
            "keywords":[
              "business",
              "man",
              "suit"
            ]
          },
          {
            "no":323,
            "code":"U+1F5E3",
            "emoji":"🗣",
            "description":"SPEAKING HEAD IN SILHOUETTE≊ speaking head",
            "flagged":false,
            "keywords":[
              "face",
              "head",
              "silhouette",
              "speak",
              "speaking"
            ]
          },
          {
            "no":324,
            "code":"U+1F464",
            "emoji":"👤",
            "description":"BUST IN SILHOUETTE",
            "flagged":false,
            "keywords":[
              "bust",
              "silhouette"
            ]
          },
          {
            "no":325,
            "code":"U+1F465",
            "emoji":"👥",
            "description":"BUSTS IN SILHOUETTE",
            "flagged":false,
            "keywords":[
              "bust",
              "silhouette"
            ]
          },
          {
            "no":326,
            "code":"U+1F46B",
            "emoji":"👫",
            "description":"MAN AND WOMAN HOLDING HANDS",
            "flagged":false,
            "keywords":[
              "couple",
              "hand",
              "hold",
              "man",
              "woman"
            ]
          },
          {
            "no":327,
            "code":"U+1F46C",
            "emoji":"👬",
            "description":"TWO MEN HOLDING HANDS",
            "flagged":false,
            "keywords":[
              "couple",
              "gemini",
              "hand",
              "hold",
              "man",
              "twins",
              "zodiac"
            ]
          },
          {
            "no":328,
            "code":"U+1F46D",
            "emoji":"👭",
            "description":"TWO WOMEN HOLDING HANDS",
            "flagged":false,
            "keywords":[
              "couple",
              "hand",
              "hold",
              "woman"
            ]
          },
          {
            "no":329,
            "code":"U+1F48F",
            "emoji":"💏",
            "description":"KISS",
            "flagged":false,
            "keywords":[
              "couple",
              "kiss",
              "romance"
            ]
          },
          {
            "no":330,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
            "emoji":"👩‍❤️‍💋‍👨",
            "description":"Kiss: WOMAN, MAN",
            "flagged":false,
            "keywords":[
              "kiss",
              "man",
              "woman"
            ]
          },
          {
            "no":331,
            "code":"U+1F468 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
            "emoji":"👨‍❤️‍💋‍👨",
            "description":"Kiss: MAN, MAN",
            "flagged":false,
            "keywords":[
              "kiss",
              "man"
            ]
          },
          {
            "no":332,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469",
            "emoji":"👩‍❤️‍💋‍👩",
            "description":"Kiss: WOMAN, WOMAN",
            "flagged":false,
            "keywords":[
              "kiss",
              "woman"
            ]
          },
          {
            "no":333,
            "code":"U+1F491",
            "emoji":"💑",
            "description":"COUPLE WITH HEART",
            "flagged":false,
            "keywords":[
              "couple",
              "heart",
              "love",
              "romance"
            ]
          },
          {
            "no":334,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F468",
            "emoji":"👩‍❤️‍👨",
            "description":"Couple with heart: WOMAN, MAN",
            "flagged":false,
            "keywords":[
              "couple",
              "man",
              "woman"
            ]
          },
          {
            "no":335,
            "code":"U+1F468 U+200D U+2764 U+FE0F U+200D U+1F468",
            "emoji":"👨‍❤️‍👨",
            "description":"Couple with heart: MAN, MAN",
            "flagged":false,
            "keywords":[
              "couple",
              "man"
            ]
          },
          {
            "no":336,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469",
            "emoji":"👩‍❤️‍👩",
            "description":"Couple with heart: WOMAN, WOMAN",
            "flagged":false,
            "keywords":[
              "couple",
              "woman"
            ]
          },
          {
            "no":337,
            "code":"U+1F46A",
            "emoji":"👪",
            "description":"FAMILY",
            "flagged":false,
            "keywords":[
              "child",
              "family",
              "father",
              "mother"
            ]
          },
          {
            "no":338,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F466",
            "emoji":"👨‍👩‍👦",
            "description":"Family: MAN, WOMAN, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "man",
              "woman"
            ]
          },
          {
            "no":339,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467",
            "emoji":"👨‍👩‍👧",
            "description":"Family: MAN, WOMAN, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "man",
              "woman"
            ]
          },
          {
            "no":340,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👨‍👩‍👧‍👦",
            "description":"Family: MAN, WOMAN, GIRL, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "girl",
              "man",
              "woman"
            ]
          },
          {
            "no":341,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👨‍👩‍👦‍👦",
            "description":"Family: MAN, WOMAN, BOY, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "man",
              "woman"
            ]
          },
          {
            "no":342,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👨‍👩‍👧‍👧",
            "description":"Family: MAN, WOMAN, GIRL, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "man",
              "woman"
            ]
          },
          {
            "no":343,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F466",
            "emoji":"👨‍👨‍👦",
            "description":"Family: MAN, MAN, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "man"
            ]
          },
          {
            "no":344,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467",
            "emoji":"👨‍👨‍👧",
            "description":"Family: MAN, MAN, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "man"
            ]
          },
          {
            "no":345,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👨‍👨‍👧‍👦",
            "description":"Family: MAN, MAN, GIRL, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "girl",
              "man"
            ]
          },
          {
            "no":346,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👨‍👨‍👦‍👦",
            "description":"Family: MAN, MAN, BOY, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "man"
            ]
          },
          {
            "no":347,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👨‍👨‍👧‍👧",
            "description":"Family: MAN, MAN, GIRL, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "man"
            ]
          },
          {
            "no":348,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F466",
            "emoji":"👩‍👩‍👦",
            "description":"Family: WOMAN, WOMAN, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "woman"
            ]
          },
          {
            "no":349,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467",
            "emoji":"👩‍👩‍👧",
            "description":"Family: WOMAN, WOMAN, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "woman"
            ]
          },
          {
            "no":350,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👩‍👩‍👧‍👦",
            "description":"Family: WOMAN, WOMAN, GIRL, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "girl",
              "woman"
            ]
          },
          {
            "no":351,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👩‍👩‍👦‍👦",
            "description":"Family: WOMAN, WOMAN, BOY, BOY",
            "flagged":false,
            "keywords":[
              "boy",
              "family",
              "woman"
            ]
          },
          {
            "no":352,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👩‍👩‍👧‍👧",
            "description":"Family: WOMAN, WOMAN, GIRL, GIRL",
            "flagged":false,
            "keywords":[
              "family",
              "girl",
              "woman"
            ]
          },
          {
            "no":353,
            "code":"U+1F3FB",
            "emoji":"🏻",
            "description":"EMOJI MODIFIER FITZPATRICK TYPE-1-2≊ skin type-1-2",
            "flagged":true,
            "keywords":[
              "emoji modifier",
              "fitzpatrick",
              "skin",
              "tone"
            ]
          },
          {
            "no":354,
            "code":"U+1F3FC",
            "emoji":"🏼",
            "description":"EMOJI MODIFIER FITZPATRICK TYPE-3≊ skin type-3",
            "flagged":true,
            "keywords":[
              "emoji modifier",
              "fitzpatrick",
              "skin",
              "tone"
            ]
          },
          {
            "no":355,
            "code":"U+1F3FD",
            "emoji":"🏽",
            "description":"EMOJI MODIFIER FITZPATRICK TYPE-4≊ skin type-4",
            "flagged":true,
            "keywords":[
              "emoji modifier",
              "fitzpatrick",
              "skin",
              "tone"
            ]
          },
          {
            "no":356,
            "code":"U+1F3FE",
            "emoji":"🏾",
            "description":"EMOJI MODIFIER FITZPATRICK TYPE-5≊ skin type-5",
            "flagged":true,
            "keywords":[
              "emoji modifier",
              "fitzpatrick",
              "skin",
              "tone"
            ]
          },
          {
            "no":357,
            "code":"U+1F3FF",
            "emoji":"🏿",
            "description":"EMOJI MODIFIER FITZPATRICK TYPE-6≊ skin type-6",
            "flagged":true,
            "keywords":[
              "emoji modifier",
              "fitzpatrick",
              "skin",
              "tone"
            ]
          },
          {
            "no":358,
            "code":"U+1F4AA",
            "emoji":"💪",
            "description":"FLEXED BICEPS",
            "flagged":false,
            "keywords":[
              "biceps",
              "body",
              "comic",
              "flex",
              "muscle"
            ],
            "types":[
              "U+1F4AA U+1F3FF",
              "U+1F4AA U+1F3FE",
              "U+1F4AA U+1F3FD",
              "U+1F4AA U+1F3FC",
              "U+1F4AA U+1F3FB"
            ]
          },
          {
            "no":364,
            "code":"U+1F933",
            "emoji":"🤳",
            "description":"SELFIE",
            "flagged":true,
            "keywords":[
              "camera",
              "phone",
              "selfie"
            ],
            "types":[
              "U+1F933 U+1F3FF",
              "U+1F933 U+1F3FE",
              "U+1F933 U+1F3FD",
              "U+1F933 U+1F3FC",
              "U+1F933 U+1F3FB"
            ]
          },
          {
            "no":370,
            "code":"U+1F448",
            "emoji":"👈",
            "description":"WHITE LEFT POINTING BACKHAND INDEX≊ backhand index pointing left",
            "flagged":false,
            "keywords":[
              "backhand",
              "body",
              "finger",
              "hand",
              "index",
              "point"
            ],
            "types":[
              "U+1F448 U+1F3FF",
              "U+1F448 U+1F3FE",
              "U+1F448 U+1F3FD",
              "U+1F448 U+1F3FC",
              "U+1F448 U+1F3FB"
            ]
          },
          {
            "no":376,
            "code":"U+1F449",
            "emoji":"👉",
            "description":"WHITE RIGHT POINTING BACKHAND INDEX≊ backhand index pointing right",
            "flagged":false,
            "keywords":[
              "backhand",
              "body",
              "finger",
              "hand",
              "index",
              "point"
            ],
            "types":[
              "U+1F449 U+1F3FF",
              "U+1F449 U+1F3FE",
              "U+1F449 U+1F3FD",
              "U+1F449 U+1F3FC",
              "U+1F449 U+1F3FB"
            ]
          },
          {
            "no":382,
            "code":"U+261D",
            "emoji":"☝",
            "description":"WHITE UP POINTING INDEX≊ index pointing up",
            "flagged":false,
            "keywords":[
              "body",
              "finger",
              "hand",
              "index",
              "point",
              "up"
            ],
            "types":[
              "U+261D U+1F3FF",
              "U+261D U+1F3FE",
              "U+261D U+1F3FD",
              "U+261D U+1F3FC",
              "U+261D U+1F3FB"
            ]
          },
          {
            "no":388,
            "code":"U+1F446",
            "emoji":"👆",
            "description":"WHITE UP POINTING BACKHAND INDEX≊ backhand index pointing up",
            "flagged":false,
            "keywords":[
              "backhand",
              "body",
              "finger",
              "hand",
              "index",
              "point",
              "up"
            ],
            "types":[
              "U+1F446 U+1F3FF",
              "U+1F446 U+1F3FE",
              "U+1F446 U+1F3FD",
              "U+1F446 U+1F3FC",
              "U+1F446 U+1F3FB"
            ]
          },
          {
            "no":394,
            "code":"U+1F595",
            "emoji":"🖕",
            "description":"REVERSED HAND WITH MIDDLE FINGER EXTENDED≊ middle finger",
            "flagged":false,
            "keywords":[
              "body",
              "finger",
              "hand",
              "middle finger"
            ],
            "types":[
              "U+1F595 U+1F3FF",
              "U+1F595 U+1F3FE",
              "U+1F595 U+1F3FD",
              "U+1F595 U+1F3FC",
              "U+1F595 U+1F3FB"
            ]
          },
          {
            "no":400,
            "code":"U+1F447",
            "emoji":"👇",
            "description":"WHITE DOWN POINTING BACKHAND INDEX≊ backhand index pointing down",
            "flagged":false,
            "keywords":[
              "backhand",
              "body",
              "down",
              "finger",
              "hand",
              "index",
              "point"
            ],
            "types":[
              "U+1F447 U+1F3FF",
              "U+1F447 U+1F3FE",
              "U+1F447 U+1F3FD",
              "U+1F447 U+1F3FC",
              "U+1F447 U+1F3FB"
            ]
          },
          {
            "no":406,
            "code":"U+270C",
            "emoji":"✌",
            "description":"VICTORY HAND",
            "flagged":false,
            "keywords":[
              "body",
              "hand",
              "v",
              "victory"
            ],
            "types":[
              "U+270C U+1F3FF",
              "U+270C U+1F3FE",
              "U+270C U+1F3FD",
              "U+270C U+1F3FC",
              "U+270C U+1F3FB"
            ]
          },
          {
            "no":412,
            "code":"U+1F91E",
            "emoji":"🤞",
            "description":"HAND WITH INDEX AND MIDDLE FINGERS CROSSED",
            "flagged":true,
            "keywords":[
              "cross",
              "finger",
              "hand",
              "luck"
            ],
            "types":[
              "U+1F91E U+1F3FF",
              "U+1F91E U+1F3FE",
              "U+1F91E U+1F3FD",
              "U+1F91E U+1F3FC",
              "U+1F91E U+1F3FB"
            ]
          },
          {
            "no":418,
            "code":"U+1F596",
            "emoji":"🖖",
            "description":"RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS≊ vulcan salute",
            "flagged":false,
            "keywords":[
              "body",
              "finger",
              "hand",
              "spock",
              "vulcan"
            ],
            "types":[
              "U+1F596 U+1F3FF",
              "U+1F596 U+1F3FE",
              "U+1F596 U+1F3FD",
              "U+1F596 U+1F3FC",
              "U+1F596 U+1F3FB"
            ]
          },
          {
            "no":424,
            "code":"U+1F918",
            "emoji":"🤘",
            "description":"SIGN OF THE HORNS",
            "flagged":false,
            "keywords":[
              "body",
              "finger",
              "hand",
              "horns",
              "rock-on"
            ],
            "types":[
              "U+1F918 U+1F3FF",
              "U+1F918 U+1F3FE",
              "U+1F918 U+1F3FD",
              "U+1F918 U+1F3FC",
              "U+1F918 U+1F3FB"
            ]
          },
          {
            "no":430,
            "code":"U+1F919",
            "emoji":"🤙",
            "description":"CALL ME HAND",
            "flagged":true,
            "keywords":[
              "call",
              "hand"
            ],
            "types":[
              "U+1F919 U+1F3FF",
              "U+1F919 U+1F3FE",
              "U+1F919 U+1F3FD",
              "U+1F919 U+1F3FC",
              "U+1F919 U+1F3FB"
            ]
          },
          {
            "no":436,
            "code":"U+1F590",
            "emoji":"🖐",
            "description":"RAISED HAND WITH FINGERS SPLAYED",
            "flagged":false,
            "keywords":[
              "body",
              "finger",
              "hand",
              "splayed"
            ],
            "types":[
              "U+1F590 U+1F3FF",
              "U+1F590 U+1F3FE",
              "U+1F590 U+1F3FD",
              "U+1F590 U+1F3FC",
              "U+1F590 U+1F3FB"
            ]
          },
          {
            "no":442,
            "code":"U+270B",
            "emoji":"✋",
            "description":"RAISED HAND",
            "flagged":false,
            "keywords":[
              "body",
              "hand"
            ],
            "types":[
              "U+270B U+1F3FF",
              "U+270B U+1F3FE",
              "U+270B U+1F3FD",
              "U+270B U+1F3FC",
              "U+270B U+1F3FB"
            ]
          },
          {
            "no":448,
            "code":"U+1F44C",
            "emoji":"👌",
            "description":"OK HAND SIGN≊ ok hand",
            "flagged":false,
            "keywords":[
              "body",
              "hand",
              "ok"
            ],
            "types":[
              "U+1F44C U+1F3FF",
              "U+1F44C U+1F3FE",
              "U+1F44C U+1F3FD",
              "U+1F44C U+1F3FC",
              "U+1F44C U+1F3FB"
            ]
          },
          {
            "no":454,
            "code":"U+1F44D",
            "emoji":"👍",
            "description":"THUMBS UP SIGN≊ thumbs up",
            "flagged":false,
            "keywords":[
              "+1",
              "body",
              "hand",
              "thumb",
              "thumbs up",
              "up"
            ],
            "types":[
              "U+1F44D U+1F3FF",
              "U+1F44D U+1F3FE",
              "U+1F44D U+1F3FD",
              "U+1F44D U+1F3FC",
              "U+1F44D U+1F3FB"
            ]
          },
          {
            "no":460,
            "code":"U+1F44E",
            "emoji":"👎",
            "description":"THUMBS DOWN SIGN≊ thumbs down",
            "flagged":false,
            "keywords":[
              "-1",
              "body",
              "down",
              "hand",
              "thumb",
              "thumbs down"
            ],
            "types":[
              "U+1F44E U+1F3FF",
              "U+1F44E U+1F3FE",
              "U+1F44E U+1F3FD",
              "U+1F44E U+1F3FC",
              "U+1F44E U+1F3FB"
            ]
          },
          {
            "no":466,
            "code":"U+270A",
            "emoji":"✊",
            "description":"RAISED FIST",
            "flagged":false,
            "keywords":[
              "body",
              "clenched",
              "fist",
              "hand",
              "punch"
            ],
            "types":[
              "U+270A U+1F3FF",
              "U+270A U+1F3FE",
              "U+270A U+1F3FD",
              "U+270A U+1F3FC",
              "U+270A U+1F3FB"
            ]
          },
          {
            "no":472,
            "code":"U+1F44A",
            "emoji":"👊",
            "description":"FISTED HAND SIGN≊ oncoming fist",
            "flagged":false,
            "keywords":[
              "body",
              "clenched",
              "fist",
              "hand",
              "punch"
            ],
            "types":[
              "U+1F44A U+1F3FF",
              "U+1F44A U+1F3FE",
              "U+1F44A U+1F3FD",
              "U+1F44A U+1F3FC",
              "U+1F44A U+1F3FB"
            ]
          },
          {
            "no":478,
            "code":"U+1F91B",
            "emoji":"🤛",
            "description":"LEFT-FACING FIST",
            "flagged":true,
            "keywords":[
              "fist",
              "leftwards"
            ],
            "types":[
              "U+1F91B U+1F3FF",
              "U+1F91B U+1F3FE",
              "U+1F91B U+1F3FD",
              "U+1F91B U+1F3FC",
              "U+1F91B U+1F3FB"
            ]
          },
          {
            "no":484,
            "code":"U+1F91C",
            "emoji":"🤜",
            "description":"RIGHT-FACING FIST",
            "flagged":true,
            "keywords":[
              "fist",
              "rightwards"
            ],
            "types":[
              "U+1F91C U+1F3FF",
              "U+1F91C U+1F3FE",
              "U+1F91C U+1F3FD",
              "U+1F91C U+1F3FC",
              "U+1F91C U+1F3FB"
            ]
          },
          {
            "no":490,
            "code":"U+1F91A",
            "emoji":"🤚",
            "description":"RAISED BACK OF HAND",
            "flagged":true,
            "keywords":[
              "backhand",
              "raised"
            ],
            "types":[
              "U+1F91A U+1F3FF",
              "U+1F91A U+1F3FE",
              "U+1F91A U+1F3FD",
              "U+1F91A U+1F3FC",
              "U+1F91A U+1F3FB"
            ]
          },
          {
            "no":496,
            "code":"U+1F44B",
            "emoji":"👋",
            "description":"WAVING HAND SIGN≊ waving hand",
            "flagged":false,
            "keywords":[
              "body",
              "hand",
              "wave",
              "waving"
            ],
            "types":[
              "U+1F44B U+1F3FF",
              "U+1F44B U+1F3FE",
              "U+1F44B U+1F3FD",
              "U+1F44B U+1F3FC",
              "U+1F44B U+1F3FB"
            ]
          },
          {
            "no":502,
            "code":"U+1F44F",
            "emoji":"👏",
            "description":"CLAPPING HANDS SIGN≊ clapping hands",
            "flagged":false,
            "keywords":[
              "body",
              "clap",
              "hand"
            ],
            "types":[
              "U+1F44F U+1F3FF",
              "U+1F44F U+1F3FE",
              "U+1F44F U+1F3FD",
              "U+1F44F U+1F3FC",
              "U+1F44F U+1F3FB"
            ]
          },
          {
            "no":508,
            "code":"U+270D",
            "emoji":"✍",
            "description":"WRITING HAND",
            "flagged":false,
            "keywords":[
              "body",
              "hand",
              "write"
            ],
            "types":[
              "U+270D U+1F3FF",
              "U+270D U+1F3FE",
              "U+270D U+1F3FD",
              "U+270D U+1F3FC",
              "U+270D U+1F3FB"
            ]
          },
          {
            "no":514,
            "code":"U+1F450",
            "emoji":"👐",
            "description":"OPEN HANDS SIGN≊ open hands",
            "flagged":false,
            "keywords":[
              "body",
              "hand",
              "open"
            ],
            "types":[
              "U+1F450 U+1F3FF",
              "U+1F450 U+1F3FE",
              "U+1F450 U+1F3FD",
              "U+1F450 U+1F3FC",
              "U+1F450 U+1F3FB"
            ]
          },
          {
            "no":520,
            "code":"U+1F64C",
            "emoji":"🙌",
            "description":"PERSON RAISING BOTH HANDS IN CELEBRATION≊ person raising hands",
            "flagged":false,
            "keywords":[
              "body",
              "celebration",
              "gesture",
              "hand",
              "hooray",
              "raised"
            ],
            "types":[
              "U+1F64C U+1F3FF",
              "U+1F64C U+1F3FE",
              "U+1F64C U+1F3FD",
              "U+1F64C U+1F3FC",
              "U+1F64C U+1F3FB"
            ]
          },
          {
            "no":526,
            "code":"U+1F64F",
            "emoji":"🙏",
            "description":"PERSON WITH FOLDED HANDS≊ folded hands",
            "flagged":false,
            "keywords":[
              "ask",
              "body",
              "bow",
              "folded",
              "gesture",
              "hand",
              "please",
              "pray",
              "thanks"
            ],
            "types":[
              "U+1F64F U+1F3FF",
              "U+1F64F U+1F3FE",
              "U+1F64F U+1F3FD",
              "U+1F64F U+1F3FC",
              "U+1F64F U+1F3FB"
            ]
          },
          {
            "no":532,
            "code":"U+1F91D",
            "emoji":"🤝",
            "description":"HANDSHAKE",
            "flagged":true,
            "keywords":[
              "agreement",
              "hand",
              "handshake",
              "meeting",
              "shake"
            ],
            "types":[
              "U+1F91D U+1F3FF",
              "U+1F91D U+1F3FE",
              "U+1F91D U+1F3FD",
              "U+1F91D U+1F3FC",
              "U+1F91D U+1F3FB"
            ]
          },
          {
            "no":538,
            "code":"U+1F485",
            "emoji":"💅",
            "description":"NAIL POLISH",
            "flagged":false,
            "keywords":[
              "body",
              "care",
              "cosmetics",
              "manicure",
              "nail",
              "polish"
            ],
            "types":[
              "U+1F485 U+1F3FF",
              "U+1F485 U+1F3FE",
              "U+1F485 U+1F3FD",
              "U+1F485 U+1F3FC",
              "U+1F485 U+1F3FB"
            ]
          },
          {
            "no":544,
            "code":"U+1F442",
            "emoji":"👂",
            "description":"EAR",
            "flagged":false,
            "keywords":[
              "body",
              "ear"
            ],
            "types":[
              "U+1F442 U+1F3FF",
              "U+1F442 U+1F3FE",
              "U+1F442 U+1F3FD",
              "U+1F442 U+1F3FC",
              "U+1F442 U+1F3FB"
            ]
          },
          {
            "no":550,
            "code":"U+1F443",
            "emoji":"👃",
            "description":"NOSE",
            "flagged":false,
            "keywords":[
              "body",
              "nose"
            ],
            "types":[
              "U+1F443 U+1F3FF",
              "U+1F443 U+1F3FE",
              "U+1F443 U+1F3FD",
              "U+1F443 U+1F3FC",
              "U+1F443 U+1F3FB"
            ]
          },
          {
            "no":556,
            "code":"U+1F463",
            "emoji":"👣",
            "description":"FOOTPRINTS",
            "flagged":false,
            "keywords":[
              "body",
              "clothing",
              "footprint",
              "print"
            ]
          },
          {
            "no":557,
            "code":"U+1F440",
            "emoji":"👀",
            "description":"EYES",
            "flagged":false,
            "keywords":[
              "body",
              "eye",
              "face"
            ]
          },
          {
            "no":558,
            "code":"U+1F441",
            "emoji":"👁",
            "description":"EYE",
            "flagged":false,
            "keywords":[
              "body",
              "eye"
            ]
          },
          {
            "no":559,
            "code":"U+1F441 U+200D U+1F5E8",
            "emoji":"👁‍🗨",
            "description":"EYE, LEFT SPEECH BUBBLE≊ eye in speech bubble",
            "flagged":false,
            "keywords":[
              "bubble",
              "eye",
              "speech",
              "witness"
            ]
          },
          {
            "no":560,
            "code":"U+1F445",
            "emoji":"👅",
            "description":"TONGUE",
            "flagged":false,
            "keywords":[
              "body",
              "tongue"
            ]
          },
          {
            "no":561,
            "code":"U+1F444",
            "emoji":"👄",
            "description":"MOUTH",
            "flagged":false,
            "keywords":[
              "body",
              "lips",
              "mouth"
            ]
          },
          {
            "no":562,
            "code":"U+1F48B",
            "emoji":"💋",
            "description":"KISS MARK",
            "flagged":false,
            "keywords":[
              "heart",
              "kiss",
              "lips",
              "mark",
              "romance"
            ]
          },
          {
            "no":563,
            "code":"U+1F498",
            "emoji":"💘",
            "description":"HEART WITH ARROW",
            "flagged":false,
            "keywords":[
              "arrow",
              "cupid",
              "heart",
              "romance"
            ]
          },
          {
            "no":564,
            "code":"U+2764",
            "emoji":"❤",
            "description":"HEAVY BLACK HEART≊ red heart",
            "flagged":false,
            "keywords":[
              "heart"
            ]
          },
          {
            "no":565,
            "code":"U+1F493",
            "emoji":"💓",
            "description":"BEATING HEART",
            "flagged":false,
            "keywords":[
              "beating",
              "heart",
              "heartbeat",
              "pulsating"
            ]
          },
          {
            "no":566,
            "code":"U+1F494",
            "emoji":"💔",
            "description":"BROKEN HEART",
            "flagged":false,
            "keywords":[
              "break",
              "broken",
              "heart"
            ]
          },
          {
            "no":567,
            "code":"U+1F495",
            "emoji":"💕",
            "description":"TWO HEARTS",
            "flagged":false,
            "keywords":[
              "heart",
              "love"
            ]
          },
          {
            "no":568,
            "code":"U+1F496",
            "emoji":"💖",
            "description":"SPARKLING HEART",
            "flagged":false,
            "keywords":[
              "excited",
              "heart",
              "sparkle"
            ]
          },
          {
            "no":569,
            "code":"U+1F497",
            "emoji":"💗",
            "description":"GROWING HEART",
            "flagged":false,
            "keywords":[
              "excited",
              "growing",
              "heart",
              "heartpulse",
              "nervous"
            ]
          },
          {
            "no":570,
            "code":"U+1F499",
            "emoji":"💙",
            "description":"BLUE HEART",
            "flagged":false,
            "keywords":[
              "blue",
              "heart"
            ]
          },
          {
            "no":571,
            "code":"U+1F49A",
            "emoji":"💚",
            "description":"GREEN HEART",
            "flagged":false,
            "keywords":[
              "green",
              "heart"
            ]
          },
          {
            "no":572,
            "code":"U+1F49B",
            "emoji":"💛",
            "description":"YELLOW HEART",
            "flagged":false,
            "keywords":[
              "heart",
              "yellow"
            ]
          },
          {
            "no":573,
            "code":"U+1F49C",
            "emoji":"💜",
            "description":"PURPLE HEART",
            "flagged":false,
            "keywords":[
              "heart",
              "purple"
            ]
          },
          {
            "no":574,
            "code":"U+1F5A4",
            "emoji":"🖤",
            "description":"BLACK HEART",
            "flagged":true,
            "keywords":[
              "black",
              "evil",
              "heart",
              "wicked"
            ]
          },
          {
            "no":575,
            "code":"U+1F49D",
            "emoji":"💝",
            "description":"HEART WITH RIBBON",
            "flagged":false,
            "keywords":[
              "heart",
              "ribbon",
              "valentine"
            ]
          },
          {
            "no":576,
            "code":"U+1F49E",
            "emoji":"💞",
            "description":"REVOLVING HEARTS",
            "flagged":false,
            "keywords":[
              "heart",
              "revolving"
            ]
          },
          {
            "no":577,
            "code":"U+1F49F",
            "emoji":"💟",
            "description":"HEART DECORATION",
            "flagged":false,
            "keywords":[
              "heart"
            ]
          },
          {
            "no":578,
            "code":"U+2763",
            "emoji":"❣",
            "description":"HEAVY HEART EXCLAMATION MARK ORNAMENT",
            "flagged":false,
            "keywords":[
              "exclamation",
              "heart",
              "mark",
              "punctuation"
            ]
          },
          {
            "no":579,
            "code":"U+1F48C",
            "emoji":"💌",
            "description":"LOVE LETTER",
            "flagged":false,
            "keywords":[
              "heart",
              "letter",
              "love",
              "mail",
              "romance"
            ]
          },
          {
            "no":580,
            "code":"U+1F4A4",
            "emoji":"💤",
            "description":"SLEEPING SYMBOL≊ zzz",
            "flagged":false,
            "keywords":[
              "comic",
              "sleep",
              "zzz"
            ]
          },
          {
            "no":581,
            "code":"U+1F4A2",
            "emoji":"💢",
            "description":"ANGER SYMBOL",
            "flagged":false,
            "keywords":[
              "angry",
              "comic",
              "mad"
            ]
          },
          {
            "no":582,
            "code":"U+1F4A3",
            "emoji":"💣",
            "description":"BOMB",
            "flagged":false,
            "keywords":[
              "bomb",
              "comic"
            ]
          },
          {
            "no":583,
            "code":"U+1F4A5",
            "emoji":"💥",
            "description":"COLLISION SYMBOL≊ collision",
            "flagged":false,
            "keywords":[
              "boom",
              "collision",
              "comic"
            ]
          },
          {
            "no":584,
            "code":"U+1F4A6",
            "emoji":"💦",
            "description":"SPLASHING SWEAT SYMBOL≊ sweat droplets",
            "flagged":false,
            "keywords":[
              "comic",
              "splashing",
              "sweat"
            ]
          },
          {
            "no":585,
            "code":"U+1F4A8",
            "emoji":"💨",
            "description":"DASH SYMBOL≊ dashing",
            "flagged":false,
            "keywords":[
              "comic",
              "dash",
              "running"
            ]
          },
          {
            "no":586,
            "code":"U+1F4AB",
            "emoji":"💫",
            "description":"DIZZY SYMBOL≊ dizzy",
            "flagged":false,
            "keywords":[
              "comic",
              "dizzy",
              "star"
            ]
          },
          {
            "no":587,
            "code":"U+1F4AC",
            "emoji":"💬",
            "description":"SPEECH BALLOON",
            "flagged":false,
            "keywords":[
              "balloon",
              "bubble",
              "comic",
              "dialog",
              "speech"
            ]
          },
          {
            "no":588,
            "code":"U+1F5E8",
            "emoji":"🗨",
            "description":"LEFT SPEECH BUBBLE",
            "flagged":false,
            "keywords":[
              "dialog",
              "speech"
            ]
          },
          {
            "no":589,
            "code":"U+1F5EF",
            "emoji":"🗯",
            "description":"RIGHT ANGER BUBBLE",
            "flagged":false,
            "keywords":[
              "angry",
              "balloon",
              "bubble",
              "mad"
            ]
          },
          {
            "no":590,
            "code":"U+1F4AD",
            "emoji":"💭",
            "description":"THOUGHT BALLOON",
            "flagged":false,
            "keywords":[
              "balloon",
              "bubble",
              "comic",
              "thought"
            ]
          },
          {
            "no":591,
            "code":"U+1F573",
            "emoji":"🕳",
            "description":"HOLE",
            "flagged":false,
            "keywords":[
              "hole"
            ]
          },
          {
            "no":592,
            "code":"U+1F453",
            "emoji":"👓",
            "description":"EYEGLASSES≊ glasses",
            "flagged":false,
            "keywords":[
              "clothing",
              "eye",
              "eyeglasses",
              "eyewear",
              "glasses"
            ]
          },
          {
            "no":593,
            "code":"U+1F576",
            "emoji":"🕶",
            "description":"DARK SUNGLASSES≊ sunglasses",
            "flagged":false,
            "keywords":[
              "dark",
              "eye",
              "eyewear",
              "glasses",
              "sunglasses"
            ]
          },
          {
            "no":594,
            "code":"U+1F454",
            "emoji":"👔",
            "description":"NECKTIE",
            "flagged":false,
            "keywords":[
              "clothing",
              "necktie"
            ]
          },
          {
            "no":595,
            "code":"U+1F455",
            "emoji":"👕",
            "description":"T-SHIRT",
            "flagged":false,
            "keywords":[
              "clothing",
              "shirt",
              "tshirt"
            ]
          },
          {
            "no":596,
            "code":"U+1F456",
            "emoji":"👖",
            "description":"JEANS",
            "flagged":false,
            "keywords":[
              "clothing",
              "jeans",
              "pants",
              "trousers"
            ]
          },
          {
            "no":597,
            "code":"U+1F457",
            "emoji":"👗",
            "description":"DRESS",
            "flagged":false,
            "keywords":[
              "clothing",
              "dress"
            ]
          },
          {
            "no":598,
            "code":"U+1F458",
            "emoji":"👘",
            "description":"KIMONO",
            "flagged":false,
            "keywords":[
              "clothing",
              "kimono"
            ]
          },
          {
            "no":599,
            "code":"U+1F459",
            "emoji":"👙",
            "description":"BIKINI",
            "flagged":false,
            "keywords":[
              "bikini",
              "clothing",
              "swim"
            ]
          },
          {
            "no":600,
            "code":"U+1F45A",
            "emoji":"👚",
            "description":"WOMANS CLOTHES≊ woman’s clothes",
            "flagged":false,
            "keywords":[
              "clothing",
              "woman"
            ]
          },
          {
            "no":601,
            "code":"U+1F45B",
            "emoji":"👛",
            "description":"PURSE",
            "flagged":false,
            "keywords":[
              "clothing",
              "coin",
              "purse"
            ]
          },
          {
            "no":602,
            "code":"U+1F45C",
            "emoji":"👜",
            "description":"HANDBAG",
            "flagged":false,
            "keywords":[
              "bag",
              "clothing",
              "handbag"
            ]
          },
          {
            "no":603,
            "code":"U+1F45D",
            "emoji":"👝",
            "description":"POUCH",
            "flagged":false,
            "keywords":[
              "bag",
              "clothing",
              "pouch"
            ]
          },
          {
            "no":604,
            "code":"U+1F6CD",
            "emoji":"🛍",
            "description":"SHOPPING BAGS",
            "flagged":false,
            "keywords":[
              "bag",
              "hotel",
              "shopping"
            ]
          },
          {
            "no":605,
            "code":"U+1F392",
            "emoji":"🎒",
            "description":"SCHOOL SATCHEL≊ school backpack",
            "flagged":false,
            "keywords":[
              "activity",
              "bag",
              "satchel",
              "school"
            ]
          },
          {
            "no":606,
            "code":"U+1F45E",
            "emoji":"👞",
            "description":"MANS SHOE≊ man’s shoe",
            "flagged":false,
            "keywords":[
              "clothing",
              "man",
              "shoe"
            ]
          },
          {
            "no":607,
            "code":"U+1F45F",
            "emoji":"👟",
            "description":"ATHLETIC SHOE≊ running shoe",
            "flagged":false,
            "keywords":[
              "athletic",
              "clothing",
              "shoe",
              "sneaker"
            ]
          },
          {
            "no":608,
            "code":"U+1F460",
            "emoji":"👠",
            "description":"HIGH-HEELED SHOE",
            "flagged":false,
            "keywords":[
              "clothing",
              "heel",
              "shoe",
              "woman"
            ]
          },
          {
            "no":609,
            "code":"U+1F461",
            "emoji":"👡",
            "description":"WOMANS SANDAL≊ woman’s sandal",
            "flagged":false,
            "keywords":[
              "clothing",
              "sandal",
              "shoe",
              "woman"
            ]
          },
          {
            "no":610,
            "code":"U+1F462",
            "emoji":"👢",
            "description":"WOMANS BOOTS≊ woman’s boot",
            "flagged":false,
            "keywords":[
              "boot",
              "clothing",
              "shoe",
              "woman"
            ]
          },
          {
            "no":611,
            "code":"U+1F451",
            "emoji":"👑",
            "description":"CROWN",
            "flagged":false,
            "keywords":[
              "clothing",
              "crown",
              "king",
              "queen"
            ]
          },
          {
            "no":612,
            "code":"U+1F452",
            "emoji":"👒",
            "description":"WOMANS HAT≊ woman’s hat",
            "flagged":false,
            "keywords":[
              "clothing",
              "hat",
              "woman"
            ]
          },
          {
            "no":613,
            "code":"U+1F3A9",
            "emoji":"🎩",
            "description":"TOP HAT",
            "flagged":false,
            "keywords":[
              "activity",
              "clothing",
              "entertainment",
              "hat",
              "top",
              "tophat"
            ]
          },
          {
            "no":614,
            "code":"U+1F393",
            "emoji":"🎓",
            "description":"GRADUATION CAP",
            "flagged":false,
            "keywords":[
              "activity",
              "cap",
              "celebration",
              "clothing",
              "graduation",
              "hat"
            ]
          },
          {
            "no":615,
            "code":"U+26D1",
            "emoji":"⛑",
            "description":"HELMET WITH WHITE CROSS",
            "flagged":false,
            "keywords":[
              "aid",
              "cross",
              "face",
              "hat",
              "helmet"
            ]
          },
          {
            "no":616,
            "code":"U+1F4FF",
            "emoji":"📿",
            "description":"PRAYER BEADS",
            "flagged":false,
            "keywords":[
              "beads",
              "clothing",
              "necklace",
              "prayer",
              "religion"
            ]
          },
          {
            "no":617,
            "code":"U+1F484",
            "emoji":"💄",
            "description":"LIPSTICK",
            "flagged":false,
            "keywords":[
              "cosmetics",
              "lipstick",
              "makeup"
            ]
          },
          {
            "no":618,
            "code":"U+1F48D",
            "emoji":"💍",
            "description":"RING",
            "flagged":false,
            "keywords":[
              "diamond",
              "ring",
              "romance"
            ]
          },
          {
            "no":619,
            "code":"U+1F48E",
            "emoji":"💎",
            "description":"GEM STONE",
            "flagged":false,
            "keywords":[
              "diamond",
              "gem",
              "jewel",
              "romance"
            ]
          }
        ],
        "Animals & Nature":[
          {
            "no":620,
            "code":"U+1F435",
            "emoji":"🐵",
            "description":"MONKEY FACE",
            "flagged":false,
            "keywords":[
              "face",
              "monkey"
            ]
          },
          {
            "no":621,
            "code":"U+1F412",
            "emoji":"🐒",
            "description":"MONKEY",
            "flagged":false,
            "keywords":[
              "monkey"
            ]
          },
          {
            "no":622,
            "code":"U+1F98D",
            "emoji":"🦍",
            "description":"GORILLA",
            "flagged":true,
            "keywords":[
              "gorilla"
            ]
          },
          {
            "no":623,
            "code":"U+1F436",
            "emoji":"🐶",
            "description":"DOG FACE",
            "flagged":false,
            "keywords":[
              "dog",
              "face",
              "pet"
            ]
          },
          {
            "no":624,
            "code":"U+1F415",
            "emoji":"🐕",
            "description":"DOG",
            "flagged":false,
            "keywords":[
              "dog",
              "pet"
            ]
          },
          {
            "no":625,
            "code":"U+1F429",
            "emoji":"🐩",
            "description":"POODLE",
            "flagged":false,
            "keywords":[
              "dog",
              "poodle"
            ]
          },
          {
            "no":626,
            "code":"U+1F43A",
            "emoji":"🐺",
            "description":"WOLF FACE",
            "flagged":false,
            "keywords":[
              "face",
              "wolf"
            ]
          },
          {
            "no":627,
            "code":"U+1F98A",
            "emoji":"🦊",
            "description":"FOX FACE",
            "flagged":true,
            "keywords":[
              "face",
              "fox"
            ]
          },
          {
            "no":628,
            "code":"U+1F431",
            "emoji":"🐱",
            "description":"CAT FACE",
            "flagged":false,
            "keywords":[
              "cat",
              "face",
              "pet"
            ]
          },
          {
            "no":629,
            "code":"U+1F408",
            "emoji":"🐈",
            "description":"CAT",
            "flagged":false,
            "keywords":[
              "cat",
              "pet"
            ]
          },
          {
            "no":630,
            "code":"U+1F981",
            "emoji":"🦁",
            "description":"LION FACE",
            "flagged":false,
            "keywords":[
              "face",
              "leo",
              "lion",
              "zodiac"
            ]
          },
          {
            "no":631,
            "code":"U+1F42F",
            "emoji":"🐯",
            "description":"TIGER FACE",
            "flagged":false,
            "keywords":[
              "face",
              "tiger"
            ]
          },
          {
            "no":632,
            "code":"U+1F405",
            "emoji":"🐅",
            "description":"TIGER",
            "flagged":false,
            "keywords":[
              "tiger"
            ]
          },
          {
            "no":633,
            "code":"U+1F406",
            "emoji":"🐆",
            "description":"LEOPARD",
            "flagged":false,
            "keywords":[
              "leopard"
            ]
          },
          {
            "no":634,
            "code":"U+1F434",
            "emoji":"🐴",
            "description":"HORSE FACE",
            "flagged":false,
            "keywords":[
              "face",
              "horse"
            ]
          },
          {
            "no":635,
            "code":"U+1F40E",
            "emoji":"🐎",
            "description":"HORSE",
            "flagged":false,
            "keywords":[
              "horse",
              "racehorse",
              "racing"
            ]
          },
          {
            "no":636,
            "code":"U+1F98C",
            "emoji":"🦌",
            "description":"DEER",
            "flagged":true,
            "keywords":[
              "deer"
            ]
          },
          {
            "no":637,
            "code":"U+1F984",
            "emoji":"🦄",
            "description":"UNICORN FACE",
            "flagged":false,
            "keywords":[
              "face",
              "unicorn"
            ]
          },
          {
            "no":638,
            "code":"U+1F42E",
            "emoji":"🐮",
            "description":"COW FACE",
            "flagged":false,
            "keywords":[
              "cow",
              "face"
            ]
          },
          {
            "no":639,
            "code":"U+1F402",
            "emoji":"🐂",
            "description":"OX",
            "flagged":false,
            "keywords":[
              "bull",
              "ox",
              "taurus",
              "zodiac"
            ]
          },
          {
            "no":640,
            "code":"U+1F403",
            "emoji":"🐃",
            "description":"WATER BUFFALO",
            "flagged":false,
            "keywords":[
              "buffalo",
              "water"
            ]
          },
          {
            "no":641,
            "code":"U+1F404",
            "emoji":"🐄",
            "description":"COW",
            "flagged":false,
            "keywords":[
              "cow"
            ]
          },
          {
            "no":642,
            "code":"U+1F437",
            "emoji":"🐷",
            "description":"PIG FACE",
            "flagged":false,
            "keywords":[
              "face",
              "pig"
            ]
          },
          {
            "no":643,
            "code":"U+1F416",
            "emoji":"🐖",
            "description":"PIG",
            "flagged":false,
            "keywords":[
              "pig",
              "sow"
            ]
          },
          {
            "no":644,
            "code":"U+1F417",
            "emoji":"🐗",
            "description":"BOAR",
            "flagged":false,
            "keywords":[
              "boar",
              "pig"
            ]
          },
          {
            "no":645,
            "code":"U+1F43D",
            "emoji":"🐽",
            "description":"PIG NOSE",
            "flagged":false,
            "keywords":[
              "face",
              "nose",
              "pig"
            ]
          },
          {
            "no":646,
            "code":"U+1F40F",
            "emoji":"🐏",
            "description":"RAM",
            "flagged":false,
            "keywords":[
              "aries",
              "ram",
              "sheep",
              "zodiac"
            ]
          },
          {
            "no":647,
            "code":"U+1F411",
            "emoji":"🐑",
            "description":"SHEEP",
            "flagged":false,
            "keywords":[
              "ewe",
              "sheep"
            ]
          },
          {
            "no":648,
            "code":"U+1F410",
            "emoji":"🐐",
            "description":"GOAT",
            "flagged":false,
            "keywords":[
              "capricorn",
              "goat",
              "zodiac"
            ]
          },
          {
            "no":649,
            "code":"U+1F42A",
            "emoji":"🐪",
            "description":"DROMEDARY CAMEL≊ camel",
            "flagged":false,
            "keywords":[
              "camel",
              "dromedary",
              "hump"
            ]
          },
          {
            "no":650,
            "code":"U+1F42B",
            "emoji":"🐫",
            "description":"BACTRIAN CAMEL≊ two-hump camel",
            "flagged":false,
            "keywords":[
              "bactrian",
              "camel",
              "hump"
            ]
          },
          {
            "no":651,
            "code":"U+1F418",
            "emoji":"🐘",
            "description":"ELEPHANT",
            "flagged":false,
            "keywords":[
              "elephant"
            ]
          },
          {
            "no":652,
            "code":"U+1F98F",
            "emoji":"🦏",
            "description":"RHINOCEROS",
            "flagged":true,
            "keywords":[
              "rhinoceros"
            ]
          },
          {
            "no":653,
            "code":"U+1F42D",
            "emoji":"🐭",
            "description":"MOUSE FACE",
            "flagged":false,
            "keywords":[
              "face",
              "mouse"
            ]
          },
          {
            "no":654,
            "code":"U+1F401",
            "emoji":"🐁",
            "description":"MOUSE",
            "flagged":false,
            "keywords":[
              "mouse"
            ]
          },
          {
            "no":655,
            "code":"U+1F400",
            "emoji":"🐀",
            "description":"RAT",
            "flagged":false,
            "keywords":[
              "rat"
            ]
          },
          {
            "no":656,
            "code":"U+1F439",
            "emoji":"🐹",
            "description":"HAMSTER FACE",
            "flagged":false,
            "keywords":[
              "face",
              "hamster",
              "pet"
            ]
          },
          {
            "no":657,
            "code":"U+1F430",
            "emoji":"🐰",
            "description":"RABBIT FACE",
            "flagged":false,
            "keywords":[
              "bunny",
              "face",
              "pet",
              "rabbit"
            ]
          },
          {
            "no":658,
            "code":"U+1F407",
            "emoji":"🐇",
            "description":"RABBIT",
            "flagged":false,
            "keywords":[
              "bunny",
              "pet",
              "rabbit"
            ]
          },
          {
            "no":659,
            "code":"U+1F43F",
            "emoji":"🐿",
            "description":"CHIPMUNK",
            "flagged":false,
            "keywords":[
              "chipmunk"
            ]
          },
          {
            "no":660,
            "code":"U+1F987",
            "emoji":"🦇",
            "description":"BAT",
            "flagged":true,
            "keywords":[
              "bat",
              "vampire"
            ]
          },
          {
            "no":661,
            "code":"U+1F43B",
            "emoji":"🐻",
            "description":"BEAR FACE",
            "flagged":false,
            "keywords":[
              "bear",
              "face"
            ]
          },
          {
            "no":662,
            "code":"U+1F428",
            "emoji":"🐨",
            "description":"KOALA",
            "flagged":false,
            "keywords":[
              "bear",
              "koala"
            ]
          },
          {
            "no":663,
            "code":"U+1F43C",
            "emoji":"🐼",
            "description":"PANDA FACE",
            "flagged":false,
            "keywords":[
              "face",
              "panda"
            ]
          },
          {
            "no":664,
            "code":"U+1F43E",
            "emoji":"🐾",
            "description":"PAW PRINTS",
            "flagged":false,
            "keywords":[
              "feet",
              "paw",
              "print"
            ]
          },
          {
            "no":665,
            "code":"U+1F983",
            "emoji":"🦃",
            "description":"TURKEY",
            "flagged":false,
            "keywords":[
              "turkey"
            ]
          },
          {
            "no":666,
            "code":"U+1F414",
            "emoji":"🐔",
            "description":"CHICKEN",
            "flagged":false,
            "keywords":[
              "chicken"
            ]
          },
          {
            "no":667,
            "code":"U+1F413",
            "emoji":"🐓",
            "description":"ROOSTER",
            "flagged":false,
            "keywords":[
              "rooster"
            ]
          },
          {
            "no":668,
            "code":"U+1F423",
            "emoji":"🐣",
            "description":"HATCHING CHICK",
            "flagged":false,
            "keywords":[
              "baby",
              "chick",
              "hatching"
            ]
          },
          {
            "no":669,
            "code":"U+1F424",
            "emoji":"🐤",
            "description":"BABY CHICK",
            "flagged":false,
            "keywords":[
              "baby",
              "chick"
            ]
          },
          {
            "no":670,
            "code":"U+1F425",
            "emoji":"🐥",
            "description":"FRONT-FACING BABY CHICK",
            "flagged":false,
            "keywords":[
              "baby",
              "chick"
            ]
          },
          {
            "no":671,
            "code":"U+1F426",
            "emoji":"🐦",
            "description":"BIRD",
            "flagged":false,
            "keywords":[
              "bird"
            ]
          },
          {
            "no":672,
            "code":"U+1F427",
            "emoji":"🐧",
            "description":"PENGUIN",
            "flagged":false,
            "keywords":[
              "penguin"
            ]
          },
          {
            "no":673,
            "code":"U+1F54A",
            "emoji":"🕊",
            "description":"DOVE OF PEACE≊ dove",
            "flagged":false,
            "keywords":[
              "bird",
              "dove",
              "fly",
              "peace"
            ]
          },
          {
            "no":674,
            "code":"U+1F985",
            "emoji":"🦅",
            "description":"EAGLE",
            "flagged":true,
            "keywords":[
              "bird",
              "eagle"
            ]
          },
          {
            "no":675,
            "code":"U+1F986",
            "emoji":"🦆",
            "description":"DUCK",
            "flagged":true,
            "keywords":[
              "bird",
              "duck"
            ]
          },
          {
            "no":676,
            "code":"U+1F989",
            "emoji":"🦉",
            "description":"OWL",
            "flagged":true,
            "keywords":[
              "bird",
              "owl",
              "wise"
            ]
          },
          {
            "no":677,
            "code":"U+1F438",
            "emoji":"🐸",
            "description":"FROG FACE",
            "flagged":false,
            "keywords":[
              "face",
              "frog"
            ]
          },
          {
            "no":678,
            "code":"U+1F40A",
            "emoji":"🐊",
            "description":"CROCODILE",
            "flagged":false,
            "keywords":[
              "crocodile"
            ]
          },
          {
            "no":679,
            "code":"U+1F422",
            "emoji":"🐢",
            "description":"TURTLE",
            "flagged":false,
            "keywords":[
              "turtle"
            ]
          },
          {
            "no":680,
            "code":"U+1F98E",
            "emoji":"🦎",
            "description":"LIZARD",
            "flagged":true,
            "keywords":[
              "lizard",
              "reptile"
            ]
          },
          {
            "no":681,
            "code":"U+1F40D",
            "emoji":"🐍",
            "description":"SNAKE",
            "flagged":false,
            "keywords":[
              "bearer",
              "ophiuchus",
              "serpent",
              "snake",
              "zodiac"
            ]
          },
          {
            "no":682,
            "code":"U+1F432",
            "emoji":"🐲",
            "description":"DRAGON FACE",
            "flagged":false,
            "keywords":[
              "dragon",
              "face",
              "fairy tale"
            ]
          },
          {
            "no":683,
            "code":"U+1F409",
            "emoji":"🐉",
            "description":"DRAGON",
            "flagged":false,
            "keywords":[
              "dragon",
              "fairy tale"
            ]
          },
          {
            "no":684,
            "code":"U+1F433",
            "emoji":"🐳",
            "description":"SPOUTING WHALE",
            "flagged":false,
            "keywords":[
              "face",
              "spouting",
              "whale"
            ]
          },
          {
            "no":685,
            "code":"U+1F40B",
            "emoji":"🐋",
            "description":"WHALE",
            "flagged":false,
            "keywords":[
              "whale"
            ]
          },
          {
            "no":686,
            "code":"U+1F42C",
            "emoji":"🐬",
            "description":"DOLPHIN",
            "flagged":false,
            "keywords":[
              "dolphin",
              "flipper"
            ]
          },
          {
            "no":687,
            "code":"U+1F41F",
            "emoji":"🐟",
            "description":"FISH",
            "flagged":false,
            "keywords":[
              "fish",
              "pisces",
              "zodiac"
            ]
          },
          {
            "no":688,
            "code":"U+1F420",
            "emoji":"🐠",
            "description":"TROPICAL FISH",
            "flagged":false,
            "keywords":[
              "fish",
              "tropical"
            ]
          },
          {
            "no":689,
            "code":"U+1F421",
            "emoji":"🐡",
            "description":"BLOWFISH",
            "flagged":false,
            "keywords":[
              "blowfish",
              "fish"
            ]
          },
          {
            "no":690,
            "code":"U+1F988",
            "emoji":"🦈",
            "description":"SHARK",
            "flagged":true,
            "keywords":[
              "fish",
              "shark"
            ]
          },
          {
            "no":691,
            "code":"U+1F419",
            "emoji":"🐙",
            "description":"OCTOPUS",
            "flagged":false,
            "keywords":[
              "octopus"
            ]
          },
          {
            "no":692,
            "code":"U+1F41A",
            "emoji":"🐚",
            "description":"SPIRAL SHELL",
            "flagged":false,
            "keywords":[
              "shell",
              "spiral"
            ]
          },
          {
            "no":693,
            "code":"U+1F980",
            "emoji":"🦀",
            "description":"CRAB",
            "flagged":false,
            "keywords":[
              "cancer",
              "crab",
              "zodiac"
            ]
          },
          {
            "no":694,
            "code":"U+1F990",
            "emoji":"🦐",
            "description":"SHRIMP",
            "flagged":true,
            "keywords":[
              "shellfish",
              "shrimp",
              "small"
            ]
          },
          {
            "no":695,
            "code":"U+1F991",
            "emoji":"🦑",
            "description":"SQUID",
            "flagged":true,
            "keywords":[
              "molusc",
              "squid"
            ]
          },
          {
            "no":696,
            "code":"U+1F98B",
            "emoji":"🦋",
            "description":"BUTTERFLY",
            "flagged":true,
            "keywords":[
              "butterfly",
              "insect",
              "pretty"
            ]
          },
          {
            "no":697,
            "code":"U+1F40C",
            "emoji":"🐌",
            "description":"SNAIL",
            "flagged":false,
            "keywords":[
              "snail"
            ]
          },
          {
            "no":698,
            "code":"U+1F41B",
            "emoji":"🐛",
            "description":"BUG",
            "flagged":false,
            "keywords":[
              "bug",
              "insect"
            ]
          },
          {
            "no":699,
            "code":"U+1F41C",
            "emoji":"🐜",
            "description":"ANT",
            "flagged":false,
            "keywords":[
              "ant",
              "insect"
            ]
          },
          {
            "no":700,
            "code":"U+1F41D",
            "emoji":"🐝",
            "description":"HONEYBEE",
            "flagged":false,
            "keywords":[
              "bee",
              "honeybee",
              "insect"
            ]
          },
          {
            "no":701,
            "code":"U+1F41E",
            "emoji":"🐞",
            "description":"LADY BEETLE",
            "flagged":false,
            "keywords":[
              "beetle",
              "insect",
              "lady beetle",
              "ladybird",
              "ladybug"
            ]
          },
          {
            "no":702,
            "code":"U+1F577",
            "emoji":"🕷",
            "description":"SPIDER",
            "flagged":false,
            "keywords":[
              "insect",
              "spider"
            ]
          },
          {
            "no":703,
            "code":"U+1F578",
            "emoji":"🕸",
            "description":"SPIDER WEB",
            "flagged":false,
            "keywords":[
              "spider",
              "web"
            ]
          },
          {
            "no":704,
            "code":"U+1F982",
            "emoji":"🦂",
            "description":"SCORPION",
            "flagged":false,
            "keywords":[
              "scorpio",
              "scorpion",
              "scorpius",
              "zodiac"
            ]
          },
          {
            "no":705,
            "code":"U+1F490",
            "emoji":"💐",
            "description":"BOUQUET",
            "flagged":false,
            "keywords":[
              "bouquet",
              "flower",
              "plant",
              "romance"
            ]
          },
          {
            "no":706,
            "code":"U+1F338",
            "emoji":"🌸",
            "description":"CHERRY BLOSSOM",
            "flagged":false,
            "keywords":[
              "blossom",
              "cherry",
              "flower",
              "plant"
            ]
          },
          {
            "no":707,
            "code":"U+1F4AE",
            "emoji":"💮",
            "description":"WHITE FLOWER",
            "flagged":false,
            "keywords":[
              "flower"
            ]
          },
          {
            "no":708,
            "code":"U+1F3F5",
            "emoji":"🏵",
            "description":"ROSETTE",
            "flagged":false,
            "keywords":[
              "plant",
              "rosette"
            ]
          },
          {
            "no":709,
            "code":"U+1F339",
            "emoji":"🌹",
            "description":"ROSE",
            "flagged":false,
            "keywords":[
              "flower",
              "plant",
              "rose"
            ]
          },
          {
            "no":710,
            "code":"U+1F940",
            "emoji":"🥀",
            "description":"WILTED FLOWER",
            "flagged":true,
            "keywords":[
              "flower",
              "wilted"
            ]
          },
          {
            "no":711,
            "code":"U+1F33A",
            "emoji":"🌺",
            "description":"HIBISCUS",
            "flagged":false,
            "keywords":[
              "flower",
              "hibiscus",
              "plant"
            ]
          },
          {
            "no":712,
            "code":"U+1F33B",
            "emoji":"🌻",
            "description":"SUNFLOWER",
            "flagged":false,
            "keywords":[
              "flower",
              "plant",
              "sun",
              "sunflower"
            ]
          },
          {
            "no":713,
            "code":"U+1F33C",
            "emoji":"🌼",
            "description":"BLOSSOM",
            "flagged":false,
            "keywords":[
              "blossom",
              "flower",
              "plant"
            ]
          },
          {
            "no":714,
            "code":"U+1F337",
            "emoji":"🌷",
            "description":"TULIP",
            "flagged":false,
            "keywords":[
              "flower",
              "plant",
              "tulip"
            ]
          },
          {
            "no":715,
            "code":"U+1F331",
            "emoji":"🌱",
            "description":"SEEDLING",
            "flagged":false,
            "keywords":[
              "plant",
              "seedling",
              "young"
            ]
          },
          {
            "no":716,
            "code":"U+1F332",
            "emoji":"🌲",
            "description":"EVERGREEN TREE≊ evergreen",
            "flagged":false,
            "keywords":[
              "evergreen",
              "plant",
              "tree"
            ]
          },
          {
            "no":717,
            "code":"U+1F333",
            "emoji":"🌳",
            "description":"DECIDUOUS TREE",
            "flagged":false,
            "keywords":[
              "deciduous",
              "plant",
              "shedding",
              "tree"
            ]
          },
          {
            "no":718,
            "code":"U+1F334",
            "emoji":"🌴",
            "description":"PALM TREE",
            "flagged":false,
            "keywords":[
              "palm",
              "plant",
              "tree"
            ]
          },
          {
            "no":719,
            "code":"U+1F335",
            "emoji":"🌵",
            "description":"CACTUS",
            "flagged":false,
            "keywords":[
              "cactus",
              "plant"
            ]
          },
          {
            "no":720,
            "code":"U+1F33E",
            "emoji":"🌾",
            "description":"EAR OF RICE≊ sheaf of rice",
            "flagged":false,
            "keywords":[
              "ear",
              "plant",
              "rice"
            ]
          },
          {
            "no":721,
            "code":"U+1F33F",
            "emoji":"🌿",
            "description":"HERB",
            "flagged":false,
            "keywords":[
              "herb",
              "leaf",
              "plant"
            ]
          },
          {
            "no":722,
            "code":"U+2618",
            "emoji":"☘",
            "description":"SHAMROCK",
            "flagged":false,
            "keywords":[
              "plant",
              "shamrock"
            ]
          },
          {
            "no":723,
            "code":"U+1F340",
            "emoji":"🍀",
            "description":"FOUR LEAF CLOVER",
            "flagged":false,
            "keywords":[
              "4",
              "clover",
              "four",
              "leaf",
              "plant"
            ]
          },
          {
            "no":724,
            "code":"U+1F341",
            "emoji":"🍁",
            "description":"MAPLE LEAF",
            "flagged":false,
            "keywords":[
              "falling",
              "leaf",
              "maple",
              "plant"
            ]
          },
          {
            "no":725,
            "code":"U+1F342",
            "emoji":"🍂",
            "description":"FALLEN LEAF",
            "flagged":false,
            "keywords":[
              "falling",
              "leaf",
              "plant"
            ]
          },
          {
            "no":726,
            "code":"U+1F343",
            "emoji":"🍃",
            "description":"LEAF FLUTTERING IN WIND",
            "flagged":false,
            "keywords":[
              "blow",
              "flutter",
              "leaf",
              "plant",
              "wind"
            ]
          },
          {
            "no":727,
            "code":"U+1F347",
            "emoji":"🍇",
            "description":"GRAPES",
            "flagged":false,
            "keywords":[
              "fruit",
              "grape",
              "plant"
            ]
          },
          {
            "no":728,
            "code":"U+1F348",
            "emoji":"🍈",
            "description":"MELON",
            "flagged":false,
            "keywords":[
              "fruit",
              "melon",
              "plant"
            ]
          },
          {
            "no":729,
            "code":"U+1F349",
            "emoji":"🍉",
            "description":"WATERMELON",
            "flagged":false,
            "keywords":[
              "fruit",
              "plant",
              "watermelon"
            ]
          },
          {
            "no":730,
            "code":"U+1F34A",
            "emoji":"🍊",
            "description":"TANGERINE",
            "flagged":false,
            "keywords":[
              "fruit",
              "orange",
              "plant",
              "tangerine"
            ]
          },
          {
            "no":731,
            "code":"U+1F34B",
            "emoji":"🍋",
            "description":"LEMON",
            "flagged":false,
            "keywords":[
              "citrus",
              "fruit",
              "lemon",
              "plant"
            ]
          },
          {
            "no":732,
            "code":"U+1F34C",
            "emoji":"🍌",
            "description":"BANANA",
            "flagged":false,
            "keywords":[
              "banana",
              "fruit",
              "plant"
            ]
          },
          {
            "no":733,
            "code":"U+1F34D",
            "emoji":"🍍",
            "description":"PINEAPPLE",
            "flagged":false,
            "keywords":[
              "fruit",
              "pineapple",
              "plant"
            ]
          },
          {
            "no":734,
            "code":"U+1F34E",
            "emoji":"🍎",
            "description":"RED APPLE",
            "flagged":false,
            "keywords":[
              "apple",
              "fruit",
              "plant",
              "red"
            ]
          },
          {
            "no":735,
            "code":"U+1F34F",
            "emoji":"🍏",
            "description":"GREEN APPLE",
            "flagged":false,
            "keywords":[
              "apple",
              "fruit",
              "green",
              "plant"
            ]
          },
          {
            "no":736,
            "code":"U+1F350",
            "emoji":"🍐",
            "description":"PEAR",
            "flagged":false,
            "keywords":[
              "fruit",
              "pear",
              "plant"
            ]
          },
          {
            "no":737,
            "code":"U+1F351",
            "emoji":"🍑",
            "description":"PEACH",
            "flagged":false,
            "keywords":[
              "fruit",
              "peach",
              "plant"
            ]
          },
          {
            "no":738,
            "code":"U+1F352",
            "emoji":"🍒",
            "description":"CHERRIES",
            "flagged":false,
            "keywords":[
              "cherry",
              "fruit",
              "plant"
            ]
          },
          {
            "no":739,
            "code":"U+1F353",
            "emoji":"🍓",
            "description":"STRAWBERRY",
            "flagged":false,
            "keywords":[
              "berry",
              "fruit",
              "plant",
              "strawberry"
            ]
          },
          {
            "no":740,
            "code":"U+1F345",
            "emoji":"🍅",
            "description":"TOMATO",
            "flagged":false,
            "keywords":[
              "plant",
              "tomato",
              "vegetable"
            ]
          },
          {
            "no":741,
            "code":"U+1F95D",
            "emoji":"🥝",
            "description":"KIWIFRUIT",
            "flagged":true,
            "keywords":[
              "fruit",
              "kiwi"
            ]
          },
          {
            "no":742,
            "code":"U+1F951",
            "emoji":"🥑",
            "description":"AVOCADO",
            "flagged":true,
            "keywords":[
              "avocado",
              "fruit"
            ]
          },
          {
            "no":743,
            "code":"U+1F346",
            "emoji":"🍆",
            "description":"AUBERGINE≊ eggplant",
            "flagged":false,
            "keywords":[
              "aubergine",
              "eggplant",
              "plant",
              "vegetable"
            ]
          },
          {
            "no":744,
            "code":"U+1F954",
            "emoji":"🥔",
            "description":"POTATO",
            "flagged":true,
            "keywords":[
              "potato",
              "vegetable"
            ]
          },
          {
            "no":745,
            "code":"U+1F955",
            "emoji":"🥕",
            "description":"CARROT",
            "flagged":true,
            "keywords":[
              "carrot",
              "vegetable"
            ]
          },
          {
            "no":746,
            "code":"U+1F33D",
            "emoji":"🌽",
            "description":"EAR OF MAIZE≊ ear of corn",
            "flagged":false,
            "keywords":[
              "corn",
              "ear",
              "maize",
              "maze",
              "plant"
            ]
          },
          {
            "no":747,
            "code":"U+1F336",
            "emoji":"🌶",
            "description":"HOT PEPPER",
            "flagged":false,
            "keywords":[
              "hot",
              "pepper",
              "plant"
            ]
          },
          {
            "no":748,
            "code":"U+1F952",
            "emoji":"🥒",
            "description":"CUCUMBER",
            "flagged":true,
            "keywords":[
              "cucumber",
              "pickle",
              "vegetable"
            ]
          },
          {
            "no":749,
            "code":"U+1F344",
            "emoji":"🍄",
            "description":"MUSHROOM",
            "flagged":false,
            "keywords":[
              "mushroom",
              "plant"
            ]
          },
          {
            "no":750,
            "code":"U+1F95C",
            "emoji":"🥜",
            "description":"PEANUTS",
            "flagged":false,
            "keywords":[
              "nut",
              "peanut",
              "vegetable"
            ]
          },
          {
            "no":751,
            "code":"U+1F330",
            "emoji":"🌰",
            "description":"CHESTNUT",
            "flagged":false,
            "keywords":[
              "chestnut",
              "plant"
            ]
          },
          {
            "no":752,
            "code":"U+1F35E",
            "emoji":"🍞",
            "description":"BREAD",
            "flagged":false,
            "keywords":[
              "bread",
              "loaf"
            ]
          },
          {
            "no":753,
            "code":"U+1F950",
            "emoji":"🥐",
            "description":"CROISSANT",
            "flagged":true,
            "keywords":[
              "bread",
              "crescent roll",
              "croissant",
              "french"
            ]
          },
          {
            "no":754,
            "code":"U+1F956",
            "emoji":"🥖",
            "description":"BAGUETTE BREAD",
            "flagged":true,
            "keywords":[
              "baguette",
              "bread",
              "french"
            ]
          },
          {
            "no":755,
            "code":"U+1F95E",
            "emoji":"🥞",
            "description":"PANCAKES",
            "flagged":true,
            "keywords":[
              "crêpe",
              "hotcake",
              "pancake"
            ]
          },
          {
            "no":756,
            "code":"U+1F9C0",
            "emoji":"🧀",
            "description":"CHEESE WEDGE",
            "flagged":false,
            "keywords":[
              "cheese"
            ]
          },
          {
            "no":757,
            "code":"U+1F356",
            "emoji":"🍖",
            "description":"MEAT ON BONE",
            "flagged":false,
            "keywords":[
              "bone",
              "meat"
            ]
          },
          {
            "no":758,
            "code":"U+1F357",
            "emoji":"🍗",
            "description":"POULTRY LEG",
            "flagged":false,
            "keywords":[
              "bone",
              "chicken",
              "leg",
              "poultry"
            ]
          },
          {
            "no":759,
            "code":"U+1F953",
            "emoji":"🥓",
            "description":"BACON",
            "flagged":true,
            "keywords":[
              "bacon",
              "meat"
            ]
          },
          {
            "no":760,
            "code":"U+1F354",
            "emoji":"🍔",
            "description":"HAMBURGER",
            "flagged":false,
            "keywords":[
              "burger",
              "hamburger"
            ]
          },
          {
            "no":761,
            "code":"U+1F35F",
            "emoji":"🍟",
            "description":"FRENCH FRIES",
            "flagged":false,
            "keywords":[
              "french",
              "fries"
            ]
          },
          {
            "no":762,
            "code":"U+1F355",
            "emoji":"🍕",
            "description":"SLICE OF PIZZA≊ pizza",
            "flagged":false,
            "keywords":[
              "cheese",
              "pizza",
              "slice"
            ]
          },
          {
            "no":763,
            "code":"U+1F32D",
            "emoji":"🌭",
            "description":"HOT DOG",
            "flagged":false,
            "keywords":[
              "frankfurter",
              "hot dog",
              "hotdog",
              "sausage"
            ]
          },
          {
            "no":764,
            "code":"U+1F32E",
            "emoji":"🌮",
            "description":"TACO",
            "flagged":false,
            "keywords":[
              "mexican",
              "taco"
            ]
          },
          {
            "no":765,
            "code":"U+1F32F",
            "emoji":"🌯",
            "description":"BURRITO",
            "flagged":false,
            "keywords":[
              "burrito",
              "mexican"
            ]
          },
          {
            "no":766,
            "code":"U+1F959",
            "emoji":"🥙",
            "description":"STUFFED FLATBREAD",
            "flagged":true,
            "keywords":[
              "falafel",
              "flatbread",
              "gyro",
              "kebab",
              "stuffed"
            ]
          },
          {
            "no":767,
            "code":"U+1F95A",
            "emoji":"🥚",
            "description":"EGG",
            "flagged":true,
            "keywords":[
              "egg"
            ]
          },
          {
            "no":768,
            "code":"U+1F373",
            "emoji":"🍳",
            "description":"COOKING",
            "flagged":false,
            "keywords":[
              "cooking",
              "egg",
              "frying",
              "pan"
            ]
          },
          {
            "no":769,
            "code":"U+1F958",
            "emoji":"🥘",
            "description":"SHALLOW PAN OF FOOD",
            "flagged":true,
            "keywords":[
              "casserole",
              "paella",
              "pan",
              "shallow"
            ]
          },
          {
            "no":770,
            "code":"U+1F372",
            "emoji":"🍲",
            "description":"POT OF FOOD",
            "flagged":false,
            "keywords":[
              "pot",
              "stew"
            ]
          },
          {
            "no":771,
            "code":"U+1F957",
            "emoji":"🥗",
            "description":"GREEN SALAD",
            "flagged":true,
            "keywords":[
              "green",
              "salad"
            ]
          },
          {
            "no":772,
            "code":"U+1F37F",
            "emoji":"🍿",
            "description":"POPCORN",
            "flagged":false,
            "keywords":[
              "popcorn"
            ]
          },
          {
            "no":773,
            "code":"U+1F371",
            "emoji":"🍱",
            "description":"BENTO BOX",
            "flagged":false,
            "keywords":[
              "bento",
              "box"
            ]
          },
          {
            "no":774,
            "code":"U+1F358",
            "emoji":"🍘",
            "description":"RICE CRACKER",
            "flagged":false,
            "keywords":[
              "cracker",
              "rice"
            ]
          },
          {
            "no":775,
            "code":"U+1F359",
            "emoji":"🍙",
            "description":"RICE BALL",
            "flagged":false,
            "keywords":[
              "ball",
              "japanese",
              "rice"
            ]
          },
          {
            "no":776,
            "code":"U+1F35A",
            "emoji":"🍚",
            "description":"COOKED RICE",
            "flagged":false,
            "keywords":[
              "cooked",
              "rice"
            ]
          },
          {
            "no":777,
            "code":"U+1F35B",
            "emoji":"🍛",
            "description":"CURRY AND RICE≊ curry rice",
            "flagged":false,
            "keywords":[
              "curry",
              "rice"
            ]
          },
          {
            "no":778,
            "code":"U+1F35C",
            "emoji":"🍜",
            "description":"STEAMING BOWL",
            "flagged":false,
            "keywords":[
              "bowl",
              "noodle",
              "ramen",
              "steaming"
            ]
          },
          {
            "no":779,
            "code":"U+1F35D",
            "emoji":"🍝",
            "description":"SPAGHETTI",
            "flagged":false,
            "keywords":[
              "pasta",
              "spaghetti"
            ]
          },
          {
            "no":780,
            "code":"U+1F360",
            "emoji":"🍠",
            "description":"ROASTED SWEET POTATO",
            "flagged":false,
            "keywords":[
              "potato",
              "roasted",
              "sweet"
            ]
          },
          {
            "no":781,
            "code":"U+1F362",
            "emoji":"🍢",
            "description":"ODEN",
            "flagged":false,
            "keywords":[
              "kebab",
              "oden",
              "seafood",
              "skewer",
              "stick"
            ]
          },
          {
            "no":782,
            "code":"U+1F363",
            "emoji":"🍣",
            "description":"SUSHI",
            "flagged":false,
            "keywords":[
              "sushi"
            ]
          },
          {
            "no":783,
            "code":"U+1F364",
            "emoji":"🍤",
            "description":"FRIED SHRIMP",
            "flagged":false,
            "keywords":[
              "fried",
              "prawn",
              "shrimp",
              "tempura"
            ]
          },
          {
            "no":784,
            "code":"U+1F365",
            "emoji":"🍥",
            "description":"FISH CAKE WITH SWIRL DESIGN≊ fish cake with swirl",
            "flagged":false,
            "keywords":[
              "cake",
              "fish",
              "pastry",
              "swirl"
            ]
          },
          {
            "no":785,
            "code":"U+1F361",
            "emoji":"🍡",
            "description":"DANGO",
            "flagged":false,
            "keywords":[
              "dango",
              "dessert",
              "japanese",
              "skewer",
              "stick",
              "sweet"
            ]
          },
          {
            "no":786,
            "code":"U+1F366",
            "emoji":"🍦",
            "description":"SOFT ICE CREAM",
            "flagged":false,
            "keywords":[
              "cream",
              "dessert",
              "ice",
              "icecream",
              "soft",
              "sweet"
            ]
          },
          {
            "no":787,
            "code":"U+1F367",
            "emoji":"🍧",
            "description":"SHAVED ICE",
            "flagged":false,
            "keywords":[
              "dessert",
              "ice",
              "shaved",
              "sweet"
            ]
          },
          {
            "no":788,
            "code":"U+1F368",
            "emoji":"🍨",
            "description":"ICE CREAM",
            "flagged":false,
            "keywords":[
              "cream",
              "dessert",
              "ice",
              "sweet"
            ]
          },
          {
            "no":789,
            "code":"U+1F369",
            "emoji":"🍩",
            "description":"DOUGHNUT",
            "flagged":false,
            "keywords":[
              "dessert",
              "donut",
              "doughnut",
              "sweet"
            ]
          },
          {
            "no":790,
            "code":"U+1F36A",
            "emoji":"🍪",
            "description":"COOKIE",
            "flagged":false,
            "keywords":[
              "cookie",
              "dessert",
              "sweet"
            ]
          },
          {
            "no":791,
            "code":"U+1F382",
            "emoji":"🎂",
            "description":"BIRTHDAY CAKE",
            "flagged":false,
            "keywords":[
              "birthday",
              "cake",
              "celebration",
              "dessert",
              "pastry",
              "sweet"
            ]
          },
          {
            "no":792,
            "code":"U+1F370",
            "emoji":"🍰",
            "description":"SHORTCAKE",
            "flagged":false,
            "keywords":[
              "cake",
              "dessert",
              "pastry",
              "shortcake",
              "slice",
              "sweet"
            ]
          },
          {
            "no":793,
            "code":"U+1F36B",
            "emoji":"🍫",
            "description":"CHOCOLATE BAR",
            "flagged":false,
            "keywords":[
              "bar",
              "chocolate",
              "dessert",
              "sweet"
            ]
          },
          {
            "no":794,
            "code":"U+1F36C",
            "emoji":"🍬",
            "description":"CANDY",
            "flagged":false,
            "keywords":[
              "candy",
              "dessert",
              "sweet"
            ]
          },
          {
            "no":795,
            "code":"U+1F36D",
            "emoji":"🍭",
            "description":"LOLLIPOP",
            "flagged":false,
            "keywords":[
              "candy",
              "dessert",
              "lollipop",
              "sweet"
            ]
          },
          {
            "no":796,
            "code":"U+1F36E",
            "emoji":"🍮",
            "description":"CUSTARD",
            "flagged":false,
            "keywords":[
              "custard",
              "dessert",
              "pudding",
              "sweet"
            ]
          },
          {
            "no":797,
            "code":"U+1F36F",
            "emoji":"🍯",
            "description":"HONEY POT",
            "flagged":false,
            "keywords":[
              "honey",
              "honeypot",
              "pot",
              "sweet"
            ]
          },
          {
            "no":798,
            "code":"U+1F37C",
            "emoji":"🍼",
            "description":"BABY BOTTLE",
            "flagged":false,
            "keywords":[
              "baby",
              "bottle",
              "drink",
              "milk"
            ]
          },
          {
            "no":799,
            "code":"U+1F95B",
            "emoji":"🥛",
            "description":"GLASS OF MILK",
            "flagged":true,
            "keywords":[
              "drink",
              "glass",
              "milk"
            ]
          },
          {
            "no":800,
            "code":"U+2615",
            "emoji":"☕",
            "description":"HOT BEVERAGE",
            "flagged":false,
            "keywords":[
              "beverage",
              "coffee",
              "drink",
              "hot",
              "steaming",
              "tea"
            ]
          },
          {
            "no":801,
            "code":"U+1F375",
            "emoji":"🍵",
            "description":"TEACUP WITHOUT HANDLE",
            "flagged":false,
            "keywords":[
              "beverage",
              "cup",
              "drink",
              "tea",
              "teacup"
            ]
          },
          {
            "no":802,
            "code":"U+1F376",
            "emoji":"🍶",
            "description":"SAKE BOTTLE AND CUP≊ sake",
            "flagged":false,
            "keywords":[
              "bar",
              "beverage",
              "bottle",
              "cup",
              "drink",
              "sake"
            ]
          },
          {
            "no":803,
            "code":"U+1F37E",
            "emoji":"🍾",
            "description":"BOTTLE WITH POPPING CORK",
            "flagged":false,
            "keywords":[
              "bar",
              "bottle",
              "cork",
              "drink",
              "popping"
            ]
          },
          {
            "no":804,
            "code":"U+1F377",
            "emoji":"🍷",
            "description":"WINE GLASS",
            "flagged":false,
            "keywords":[
              "bar",
              "beverage",
              "drink",
              "glass",
              "wine"
            ]
          },
          {
            "no":805,
            "code":"U+1F378",
            "emoji":"🍸",
            "description":"COCKTAIL GLASS",
            "flagged":false,
            "keywords":[
              "bar",
              "cocktail",
              "drink",
              "glass"
            ]
          },
          {
            "no":806,
            "code":"U+1F379",
            "emoji":"🍹",
            "description":"TROPICAL DRINK",
            "flagged":false,
            "keywords":[
              "bar",
              "drink",
              "tropical"
            ]
          },
          {
            "no":807,
            "code":"U+1F37A",
            "emoji":"🍺",
            "description":"BEER MUG",
            "flagged":false,
            "keywords":[
              "bar",
              "beer",
              "drink",
              "mug"
            ]
          },
          {
            "no":808,
            "code":"U+1F37B",
            "emoji":"🍻",
            "description":"CLINKING BEER MUGS",
            "flagged":false,
            "keywords":[
              "bar",
              "beer",
              "clink",
              "drink",
              "mug"
            ]
          },
          {
            "no":809,
            "code":"U+1F942",
            "emoji":"🥂",
            "description":"CLINKING GLASSES",
            "flagged":true,
            "keywords":[
              "celebrate",
              "clink",
              "drink",
              "glass"
            ]
          },
          {
            "no":810,
            "code":"U+1F943",
            "emoji":"🥃",
            "description":"TUMBLER GLASS",
            "flagged":true,
            "keywords":[
              "glass",
              "liquor",
              "shot",
              "tumbler",
              "whisky"
            ]
          },
          {
            "no":811,
            "code":"U+1F37D",
            "emoji":"🍽",
            "description":"FORK AND KNIFE WITH PLATE",
            "flagged":false,
            "keywords":[
              "cooking",
              "fork",
              "knife",
              "plate"
            ]
          },
          {
            "no":812,
            "code":"U+1F374",
            "emoji":"🍴",
            "description":"FORK AND KNIFE",
            "flagged":false,
            "keywords":[
              "cooking",
              "fork",
              "knife"
            ]
          },
          {
            "no":813,
            "code":"U+1F944",
            "emoji":"🥄",
            "description":"SPOON",
            "flagged":true,
            "keywords":[
              "spoon",
              "tableware"
            ]
          },
          {
            "no":814,
            "code":"U+1F52A",
            "emoji":"🔪",
            "description":"HOCHO≊ kitchen knife",
            "flagged":false,
            "keywords":[
              "cooking",
              "hocho",
              "knife",
              "tool",
              "weapon"
            ]
          },
          {
            "no":815,
            "code":"U+1F3FA",
            "emoji":"🏺",
            "description":"AMPHORA",
            "flagged":false,
            "keywords":[
              "amphora",
              "aquarius",
              "cooking",
              "drink",
              "jug",
              "tool",
              "weapon",
              "zodiac"
            ]
          }
        ],
        "Travel & Places":[
          {
            "no":816,
            "code":"U+1F30D",
            "emoji":"🌍",
            "description":"EARTH GLOBE EUROPE-AFRICA≊ globe showing europe-africa",
            "flagged":false,
            "keywords":[
              "africa",
              "earth",
              "europe",
              "globe",
              "world"
            ]
          },
          {
            "no":817,
            "code":"U+1F30E",
            "emoji":"🌎",
            "description":"EARTH GLOBE AMERICAS≊ globe showing americas",
            "flagged":false,
            "keywords":[
              "americas",
              "earth",
              "globe",
              "world"
            ]
          },
          {
            "no":818,
            "code":"U+1F30F",
            "emoji":"🌏",
            "description":"EARTH GLOBE ASIA-AUSTRALIA≊ globe showing asia-australia",
            "flagged":false,
            "keywords":[
              "asia",
              "australia",
              "earth",
              "globe",
              "world"
            ]
          },
          {
            "no":819,
            "code":"U+1F310",
            "emoji":"🌐",
            "description":"GLOBE WITH MERIDIANS",
            "flagged":false,
            "keywords":[
              "earth",
              "globe",
              "meridians",
              "world"
            ]
          },
          {
            "no":820,
            "code":"U+1F5FA",
            "emoji":"🗺",
            "description":"WORLD MAP",
            "flagged":false,
            "keywords":[
              "map",
              "world"
            ]
          },
          {
            "no":821,
            "code":"U+1F5FE",
            "emoji":"🗾",
            "description":"SILHOUETTE OF JAPAN≊ map of japan",
            "flagged":false,
            "keywords":[
              "japan",
              "map"
            ]
          },
          {
            "no":822,
            "code":"U+1F3D4",
            "emoji":"🏔",
            "description":"SNOW CAPPED MOUNTAIN≊ snow-capped mountain",
            "flagged":false,
            "keywords":[
              "cold",
              "mountain",
              "snow"
            ]
          },
          {
            "no":823,
            "code":"U+26F0",
            "emoji":"⛰",
            "description":"MOUNTAIN",
            "flagged":false,
            "keywords":[
              "mountain"
            ]
          },
          {
            "no":824,
            "code":"U+1F30B",
            "emoji":"🌋",
            "description":"VOLCANO",
            "flagged":false,
            "keywords":[
              "eruption",
              "mountain",
              "volcano",
              "weather"
            ]
          },
          {
            "no":825,
            "code":"U+1F5FB",
            "emoji":"🗻",
            "description":"MOUNT FUJI",
            "flagged":false,
            "keywords":[
              "fuji",
              "mountain"
            ]
          },
          {
            "no":826,
            "code":"U+1F3D5",
            "emoji":"🏕",
            "description":"CAMPING",
            "flagged":false,
            "keywords":[
              "camping"
            ]
          },
          {
            "no":827,
            "code":"U+1F3D6",
            "emoji":"🏖",
            "description":"BEACH WITH UMBRELLA",
            "flagged":false,
            "keywords":[
              "beach",
              "umbrella"
            ]
          },
          {
            "no":828,
            "code":"U+1F3DC",
            "emoji":"🏜",
            "description":"DESERT",
            "flagged":false,
            "keywords":[
              "desert"
            ]
          },
          {
            "no":829,
            "code":"U+1F3DD",
            "emoji":"🏝",
            "description":"DESERT ISLAND",
            "flagged":false,
            "keywords":[
              "desert",
              "island"
            ]
          },
          {
            "no":830,
            "code":"U+1F3DE",
            "emoji":"🏞",
            "description":"NATIONAL PARK",
            "flagged":false,
            "keywords":[
              "national park",
              "park"
            ]
          },
          {
            "no":831,
            "code":"U+1F3DF",
            "emoji":"🏟",
            "description":"STADIUM",
            "flagged":false,
            "keywords":[
              "stadium"
            ]
          },
          {
            "no":832,
            "code":"U+1F3DB",
            "emoji":"🏛",
            "description":"CLASSICAL BUILDING",
            "flagged":false,
            "keywords":[
              "building",
              "classical"
            ]
          },
          {
            "no":833,
            "code":"U+1F3D7",
            "emoji":"🏗",
            "description":"BUILDING CONSTRUCTION",
            "flagged":false,
            "keywords":[
              "building",
              "construction"
            ]
          },
          {
            "no":834,
            "code":"U+1F3D8",
            "emoji":"🏘",
            "description":"HOUSE BUILDINGS",
            "flagged":false,
            "keywords":[
              "building",
              "house"
            ]
          },
          {
            "no":835,
            "code":"U+1F3D9",
            "emoji":"🏙",
            "description":"CITYSCAPE",
            "flagged":false,
            "keywords":[
              "building",
              "city"
            ]
          },
          {
            "no":836,
            "code":"U+1F3DA",
            "emoji":"🏚",
            "description":"DERELICT HOUSE BUILDING",
            "flagged":false,
            "keywords":[
              "building",
              "derelict",
              "house"
            ]
          },
          {
            "no":837,
            "code":"U+1F3E0",
            "emoji":"🏠",
            "description":"HOUSE BUILDING",
            "flagged":false,
            "keywords":[
              "building",
              "home",
              "house"
            ]
          },
          {
            "no":838,
            "code":"U+1F3E1",
            "emoji":"🏡",
            "description":"HOUSE WITH GARDEN",
            "flagged":false,
            "keywords":[
              "building",
              "garden",
              "home",
              "house"
            ]
          },
          {
            "no":839,
            "code":"U+1F3E2",
            "emoji":"🏢",
            "description":"OFFICE BUILDING",
            "flagged":false,
            "keywords":[
              "building"
            ]
          },
          {
            "no":840,
            "code":"U+1F3E3",
            "emoji":"🏣",
            "description":"JAPANESE POST OFFICE",
            "flagged":false,
            "keywords":[
              "building",
              "japanese",
              "post"
            ]
          },
          {
            "no":841,
            "code":"U+1F3E4",
            "emoji":"🏤",
            "description":"EUROPEAN POST OFFICE≊ post office",
            "flagged":false,
            "keywords":[
              "building",
              "european",
              "post"
            ]
          },
          {
            "no":842,
            "code":"U+1F3E5",
            "emoji":"🏥",
            "description":"HOSPITAL",
            "flagged":false,
            "keywords":[
              "building",
              "doctor",
              "hospital",
              "medicine"
            ]
          },
          {
            "no":843,
            "code":"U+1F3E6",
            "emoji":"🏦",
            "description":"BANK",
            "flagged":false,
            "keywords":[
              "bank",
              "building"
            ]
          },
          {
            "no":844,
            "code":"U+1F3E8",
            "emoji":"🏨",
            "description":"HOTEL",
            "flagged":false,
            "keywords":[
              "building",
              "hotel"
            ]
          },
          {
            "no":845,
            "code":"U+1F3E9",
            "emoji":"🏩",
            "description":"LOVE HOTEL",
            "flagged":false,
            "keywords":[
              "building",
              "hotel",
              "love"
            ]
          },
          {
            "no":846,
            "code":"U+1F3EA",
            "emoji":"🏪",
            "description":"CONVENIENCE STORE",
            "flagged":false,
            "keywords":[
              "building",
              "convenience",
              "store"
            ]
          },
          {
            "no":847,
            "code":"U+1F3EB",
            "emoji":"🏫",
            "description":"SCHOOL",
            "flagged":false,
            "keywords":[
              "building",
              "school"
            ]
          },
          {
            "no":848,
            "code":"U+1F3EC",
            "emoji":"🏬",
            "description":"DEPARTMENT STORE",
            "flagged":false,
            "keywords":[
              "building",
              "department",
              "store"
            ]
          },
          {
            "no":849,
            "code":"U+1F3ED",
            "emoji":"🏭",
            "description":"FACTORY",
            "flagged":false,
            "keywords":[
              "building",
              "factory"
            ]
          },
          {
            "no":850,
            "code":"U+1F3EF",
            "emoji":"🏯",
            "description":"JAPANESE CASTLE",
            "flagged":false,
            "keywords":[
              "building",
              "castle",
              "japanese"
            ]
          },
          {
            "no":851,
            "code":"U+1F3F0",
            "emoji":"🏰",
            "description":"EUROPEAN CASTLE≊ castle",
            "flagged":false,
            "keywords":[
              "building",
              "castle",
              "european"
            ]
          },
          {
            "no":852,
            "code":"U+1F492",
            "emoji":"💒",
            "description":"WEDDING",
            "flagged":false,
            "keywords":[
              "activity",
              "chapel",
              "romance",
              "wedding"
            ]
          },
          {
            "no":853,
            "code":"U+1F5FC",
            "emoji":"🗼",
            "description":"TOKYO TOWER",
            "flagged":false,
            "keywords":[
              "tokyo",
              "tower"
            ]
          },
          {
            "no":854,
            "code":"U+1F5FD",
            "emoji":"🗽",
            "description":"STATUE OF LIBERTY",
            "flagged":false,
            "keywords":[
              "liberty",
              "statue"
            ]
          },
          {
            "no":855,
            "code":"U+26EA",
            "emoji":"⛪",
            "description":"CHURCH",
            "flagged":false,
            "keywords":[
              "building",
              "christian",
              "church",
              "cross",
              "religion"
            ]
          },
          {
            "no":856,
            "code":"U+1F54C",
            "emoji":"🕌",
            "description":"MOSQUE",
            "flagged":false,
            "keywords":[
              "islam",
              "mosque",
              "muslim",
              "religion"
            ]
          },
          {
            "no":857,
            "code":"U+1F54D",
            "emoji":"🕍",
            "description":"SYNAGOGUE",
            "flagged":false,
            "keywords":[
              "jew",
              "jewish",
              "religion",
              "synagogue",
              "temple"
            ]
          },
          {
            "no":858,
            "code":"U+26E9",
            "emoji":"⛩",
            "description":"SHINTO SHRINE",
            "flagged":false,
            "keywords":[
              "religion",
              "shinto",
              "shrine"
            ]
          },
          {
            "no":859,
            "code":"U+1F54B",
            "emoji":"🕋",
            "description":"KAABA",
            "flagged":false,
            "keywords":[
              "islam",
              "kaaba",
              "muslim",
              "religion"
            ]
          },
          {
            "no":860,
            "code":"U+26F2",
            "emoji":"⛲",
            "description":"FOUNTAIN",
            "flagged":false,
            "keywords":[
              "fountain"
            ]
          },
          {
            "no":861,
            "code":"U+26FA",
            "emoji":"⛺",
            "description":"TENT",
            "flagged":false,
            "keywords":[
              "camping",
              "tent"
            ]
          },
          {
            "no":862,
            "code":"U+1F301",
            "emoji":"🌁",
            "description":"FOGGY",
            "flagged":false,
            "keywords":[
              "fog",
              "weather"
            ]
          },
          {
            "no":863,
            "code":"U+1F303",
            "emoji":"🌃",
            "description":"NIGHT WITH STARS",
            "flagged":false,
            "keywords":[
              "night",
              "star",
              "weather"
            ]
          },
          {
            "no":864,
            "code":"U+1F304",
            "emoji":"🌄",
            "description":"SUNRISE OVER MOUNTAINS",
            "flagged":false,
            "keywords":[
              "morning",
              "mountain",
              "sun",
              "sunrise",
              "weather"
            ]
          },
          {
            "no":865,
            "code":"U+1F305",
            "emoji":"🌅",
            "description":"SUNRISE",
            "flagged":false,
            "keywords":[
              "morning",
              "sun",
              "sunrise",
              "weather"
            ]
          },
          {
            "no":866,
            "code":"U+1F306",
            "emoji":"🌆",
            "description":"CITYSCAPE AT DUSK",
            "flagged":false,
            "keywords":[
              "building",
              "city",
              "dusk",
              "evening",
              "landscape",
              "sun",
              "sunset",
              "weather"
            ]
          },
          {
            "no":867,
            "code":"U+1F307",
            "emoji":"🌇",
            "description":"SUNSET OVER BUILDINGS≊ sunset",
            "flagged":false,
            "keywords":[
              "building",
              "dusk",
              "sun",
              "sunset",
              "weather"
            ]
          },
          {
            "no":868,
            "code":"U+1F309",
            "emoji":"🌉",
            "description":"BRIDGE AT NIGHT",
            "flagged":false,
            "keywords":[
              "bridge",
              "night",
              "weather"
            ]
          },
          {
            "no":869,
            "code":"U+2668",
            "emoji":"♨",
            "description":"HOT SPRINGS",
            "flagged":false,
            "keywords":[
              "hot",
              "hotsprings",
              "springs",
              "steaming"
            ]
          },
          {
            "no":870,
            "code":"U+1F30C",
            "emoji":"🌌",
            "description":"MILKY WAY",
            "flagged":false,
            "keywords":[
              "milky way",
              "space",
              "weather"
            ]
          },
          {
            "no":871,
            "code":"U+1F3A0",
            "emoji":"🎠",
            "description":"CAROUSEL HORSE",
            "flagged":false,
            "keywords":[
              "activity",
              "carousel",
              "entertainment",
              "horse"
            ]
          },
          {
            "no":872,
            "code":"U+1F3A1",
            "emoji":"🎡",
            "description":"FERRIS WHEEL",
            "flagged":false,
            "keywords":[
              "activity",
              "amusement park",
              "entertainment",
              "ferris",
              "wheel"
            ]
          },
          {
            "no":873,
            "code":"U+1F3A2",
            "emoji":"🎢",
            "description":"ROLLER COASTER",
            "flagged":false,
            "keywords":[
              "activity",
              "amusement park",
              "coaster",
              "entertainment",
              "roller"
            ]
          },
          {
            "no":874,
            "code":"U+1F488",
            "emoji":"💈",
            "description":"BARBER POLE",
            "flagged":false,
            "keywords":[
              "barber",
              "haircut",
              "pole"
            ]
          },
          {
            "no":875,
            "code":"U+1F3AA",
            "emoji":"🎪",
            "description":"CIRCUS TENT",
            "flagged":false,
            "keywords":[
              "activity",
              "circus",
              "entertainment",
              "tent"
            ]
          },
          {
            "no":876,
            "code":"U+1F3AD",
            "emoji":"🎭",
            "description":"PERFORMING ARTS",
            "flagged":false,
            "keywords":[
              "activity",
              "art",
              "entertainment",
              "mask",
              "performing",
              "theater",
              "theatre"
            ]
          },
          {
            "no":877,
            "code":"U+1F5BC",
            "emoji":"🖼",
            "description":"FRAME WITH PICTURE",
            "flagged":false,
            "keywords":[
              "art",
              "frame",
              "museum",
              "painting",
              "picture"
            ]
          },
          {
            "no":878,
            "code":"U+1F3A8",
            "emoji":"🎨",
            "description":"ARTIST PALETTE",
            "flagged":false,
            "keywords":[
              "activity",
              "art",
              "entertainment",
              "museum",
              "painting",
              "palette"
            ]
          },
          {
            "no":879,
            "code":"U+1F3B0",
            "emoji":"🎰",
            "description":"SLOT MACHINE",
            "flagged":false,
            "keywords":[
              "activity",
              "game",
              "slot"
            ]
          },
          {
            "no":880,
            "code":"U+1F682",
            "emoji":"🚂",
            "description":"STEAM LOCOMOTIVE≊ locomotive",
            "flagged":false,
            "keywords":[
              "engine",
              "locomotive",
              "railway",
              "steam",
              "train",
              "vehicle"
            ]
          },
          {
            "no":881,
            "code":"U+1F683",
            "emoji":"🚃",
            "description":"RAILWAY CAR",
            "flagged":false,
            "keywords":[
              "car",
              "electric",
              "railway",
              "train",
              "tram",
              "trolleybus",
              "vehicle"
            ]
          },
          {
            "no":882,
            "code":"U+1F684",
            "emoji":"🚄",
            "description":"HIGH-SPEED TRAIN",
            "flagged":false,
            "keywords":[
              "railway",
              "shinkansen",
              "speed",
              "train",
              "vehicle"
            ]
          },
          {
            "no":883,
            "code":"U+1F685",
            "emoji":"🚅",
            "description":"HIGH-SPEED TRAIN WITH BULLET NOSE",
            "flagged":false,
            "keywords":[
              "bullet",
              "railway",
              "shinkansen",
              "speed",
              "train",
              "vehicle"
            ]
          },
          {
            "no":884,
            "code":"U+1F686",
            "emoji":"🚆",
            "description":"TRAIN",
            "flagged":false,
            "keywords":[
              "railway",
              "train",
              "vehicle"
            ]
          },
          {
            "no":885,
            "code":"U+1F687",
            "emoji":"🚇",
            "description":"METRO",
            "flagged":false,
            "keywords":[
              "metro",
              "subway",
              "vehicle"
            ]
          },
          {
            "no":886,
            "code":"U+1F688",
            "emoji":"🚈",
            "description":"LIGHT RAIL",
            "flagged":false,
            "keywords":[
              "railway",
              "vehicle"
            ]
          },
          {
            "no":887,
            "code":"U+1F689",
            "emoji":"🚉",
            "description":"STATION",
            "flagged":false,
            "keywords":[
              "railway",
              "station",
              "train",
              "vehicle"
            ]
          },
          {
            "no":888,
            "code":"U+1F68A",
            "emoji":"🚊",
            "description":"TRAM",
            "flagged":false,
            "keywords":[
              "tram",
              "trolleybus",
              "vehicle"
            ]
          },
          {
            "no":889,
            "code":"U+1F69D",
            "emoji":"🚝",
            "description":"MONORAIL",
            "flagged":false,
            "keywords":[
              "monorail",
              "vehicle"
            ]
          },
          {
            "no":890,
            "code":"U+1F69E",
            "emoji":"🚞",
            "description":"MOUNTAIN RAILWAY",
            "flagged":false,
            "keywords":[
              "car",
              "mountain",
              "railway",
              "vehicle"
            ]
          },
          {
            "no":891,
            "code":"U+1F68B",
            "emoji":"🚋",
            "description":"TRAM CAR",
            "flagged":false,
            "keywords":[
              "car",
              "tram",
              "trolleybus",
              "vehicle"
            ]
          },
          {
            "no":892,
            "code":"U+1F68C",
            "emoji":"🚌",
            "description":"BUS",
            "flagged":false,
            "keywords":[
              "bus",
              "vehicle"
            ]
          },
          {
            "no":893,
            "code":"U+1F68D",
            "emoji":"🚍",
            "description":"ONCOMING BUS",
            "flagged":false,
            "keywords":[
              "bus",
              "oncoming",
              "vehicle"
            ]
          },
          {
            "no":894,
            "code":"U+1F68E",
            "emoji":"🚎",
            "description":"TROLLEYBUS",
            "flagged":false,
            "keywords":[
              "bus",
              "tram",
              "trolley",
              "trolleybus",
              "vehicle"
            ]
          },
          {
            "no":895,
            "code":"U+1F68F",
            "emoji":"🚏",
            "description":"BUS STOP",
            "flagged":false,
            "keywords":[
              "bus",
              "busstop",
              "stop"
            ]
          },
          {
            "no":896,
            "code":"U+1F690",
            "emoji":"🚐",
            "description":"MINIBUS",
            "flagged":false,
            "keywords":[
              "bus",
              "minibus",
              "vehicle"
            ]
          },
          {
            "no":897,
            "code":"U+1F691",
            "emoji":"🚑",
            "description":"AMBULANCE",
            "flagged":false,
            "keywords":[
              "ambulance",
              "vehicle"
            ]
          },
          {
            "no":898,
            "code":"U+1F692",
            "emoji":"🚒",
            "description":"FIRE ENGINE",
            "flagged":false,
            "keywords":[
              "engine",
              "fire",
              "truck",
              "vehicle"
            ]
          },
          {
            "no":899,
            "code":"U+1F693",
            "emoji":"🚓",
            "description":"POLICE CAR",
            "flagged":false,
            "keywords":[
              "car",
              "patrol",
              "police",
              "vehicle"
            ]
          },
          {
            "no":900,
            "code":"U+1F694",
            "emoji":"🚔",
            "description":"ONCOMING POLICE CAR",
            "flagged":false,
            "keywords":[
              "car",
              "oncoming",
              "police",
              "vehicle"
            ]
          },
          {
            "no":901,
            "code":"U+1F695",
            "emoji":"🚕",
            "description":"TAXI",
            "flagged":false,
            "keywords":[
              "taxi",
              "vehicle"
            ]
          },
          {
            "no":902,
            "code":"U+1F696",
            "emoji":"🚖",
            "description":"ONCOMING TAXI",
            "flagged":false,
            "keywords":[
              "oncoming",
              "taxi",
              "vehicle"
            ]
          },
          {
            "no":903,
            "code":"U+1F697",
            "emoji":"🚗",
            "description":"AUTOMOBILE",
            "flagged":false,
            "keywords":[
              "automobile",
              "car",
              "vehicle"
            ]
          },
          {
            "no":904,
            "code":"U+1F698",
            "emoji":"🚘",
            "description":"ONCOMING AUTOMOBILE",
            "flagged":false,
            "keywords":[
              "automobile",
              "car",
              "oncoming",
              "vehicle"
            ]
          },
          {
            "no":905,
            "code":"U+1F699",
            "emoji":"🚙",
            "description":"RECREATIONAL VEHICLE",
            "flagged":false,
            "keywords":[
              "recreational",
              "rv",
              "vehicle"
            ]
          },
          {
            "no":906,
            "code":"U+1F69A",
            "emoji":"🚚",
            "description":"DELIVERY TRUCK",
            "flagged":false,
            "keywords":[
              "delivery",
              "truck",
              "vehicle"
            ]
          },
          {
            "no":907,
            "code":"U+1F69B",
            "emoji":"🚛",
            "description":"ARTICULATED LORRY",
            "flagged":false,
            "keywords":[
              "lorry",
              "semi",
              "truck",
              "vehicle"
            ]
          },
          {
            "no":908,
            "code":"U+1F69C",
            "emoji":"🚜",
            "description":"TRACTOR",
            "flagged":false,
            "keywords":[
              "tractor",
              "vehicle"
            ]
          },
          {
            "no":909,
            "code":"U+1F6B2",
            "emoji":"🚲",
            "description":"BICYCLE",
            "flagged":false,
            "keywords":[
              "bicycle",
              "bike",
              "vehicle"
            ]
          },
          {
            "no":910,
            "code":"U+26FD",
            "emoji":"⛽",
            "description":"FUEL PUMP",
            "flagged":false,
            "keywords":[
              "fuel",
              "fuelpump",
              "gas",
              "pump",
              "station"
            ]
          },
          {
            "no":911,
            "code":"U+1F6E3",
            "emoji":"🛣",
            "description":"MOTORWAY",
            "flagged":false,
            "keywords":[
              "highway",
              "motorway",
              "road"
            ]
          },
          {
            "no":912,
            "code":"U+1F6E4",
            "emoji":"🛤",
            "description":"RAILWAY TRACK",
            "flagged":false,
            "keywords":[
              "railway",
              "train"
            ]
          },
          {
            "no":913,
            "code":"U+1F6A8",
            "emoji":"🚨",
            "description":"POLICE CARS REVOLVING LIGHT≊ police car’s light",
            "flagged":false,
            "keywords":[
              "beacon",
              "car",
              "light",
              "police",
              "revolving",
              "vehicle"
            ]
          },
          {
            "no":914,
            "code":"U+1F6A5",
            "emoji":"🚥",
            "description":"HORIZONTAL TRAFFIC LIGHT",
            "flagged":false,
            "keywords":[
              "light",
              "signal",
              "traffic"
            ]
          },
          {
            "no":915,
            "code":"U+1F6A6",
            "emoji":"🚦",
            "description":"VERTICAL TRAFFIC LIGHT",
            "flagged":false,
            "keywords":[
              "light",
              "signal",
              "traffic"
            ]
          },
          {
            "no":916,
            "code":"U+1F6A7",
            "emoji":"🚧",
            "description":"CONSTRUCTION SIGN≊ construction",
            "flagged":false,
            "keywords":[
              "barrier",
              "construction"
            ]
          },
          {
            "no":917,
            "code":"U+1F6D1",
            "emoji":"🛑",
            "description":"OCTAGONAL SIGN",
            "flagged":true,
            "keywords":[
              "octagonal",
              "stop"
            ]
          },
          {
            "no":918,
            "code":"U+1F6F4",
            "emoji":"🛴",
            "description":"SCOOTER",
            "flagged":true,
            "keywords":[
              "kick",
              "scooter"
            ]
          },
          {
            "no":919,
            "code":"U+1F6F5",
            "emoji":"🛵",
            "description":"MOTOR SCOOTER",
            "flagged":true,
            "keywords":[
              "motor",
              "scooter"
            ]
          },
          {
            "no":920,
            "code":"U+2693",
            "emoji":"⚓",
            "description":"ANCHOR",
            "flagged":false,
            "keywords":[
              "anchor",
              "ship",
              "tool"
            ]
          },
          {
            "no":921,
            "code":"U+26F5",
            "emoji":"⛵",
            "description":"SAILBOAT",
            "flagged":false,
            "keywords":[
              "boat",
              "resort",
              "sailboat",
              "sea",
              "vehicle",
              "yacht"
            ]
          },
          {
            "no":922,
            "code":"U+1F6A3",
            "emoji":"🚣",
            "description":"ROWBOAT",
            "flagged":false,
            "keywords":[
              "boat",
              "rowboat",
              "vehicle"
            ],
            "types":[
              "U+1F6A3 U+1F3FF",
              "U+1F6A3 U+1F3FE",
              "U+1F6A3 U+1F3FD",
              "U+1F6A3 U+1F3FC",
              "U+1F6A3 U+1F3FB"
            ]
          },
          {
            "no":928,
            "code":"U+1F6F6",
            "emoji":"🛶",
            "description":"CANOE",
            "flagged":true,
            "keywords":[
              "boat",
              "canoe"
            ]
          },
          {
            "no":929,
            "code":"U+1F6A4",
            "emoji":"🚤",
            "description":"SPEEDBOAT",
            "flagged":false,
            "keywords":[
              "boat",
              "speedboat",
              "vehicle"
            ]
          },
          {
            "no":930,
            "code":"U+1F6F3",
            "emoji":"🛳",
            "description":"PASSENGER SHIP",
            "flagged":false,
            "keywords":[
              "passenger",
              "ship",
              "vehicle"
            ]
          },
          {
            "no":931,
            "code":"U+26F4",
            "emoji":"⛴",
            "description":"FERRY",
            "flagged":false,
            "keywords":[
              "boat",
              "ferry"
            ]
          },
          {
            "no":932,
            "code":"U+1F6E5",
            "emoji":"🛥",
            "description":"MOTOR BOAT",
            "flagged":false,
            "keywords":[
              "boat",
              "motorboat",
              "vehicle"
            ]
          },
          {
            "no":933,
            "code":"U+1F6A2",
            "emoji":"🚢",
            "description":"SHIP",
            "flagged":false,
            "keywords":[
              "ship",
              "vehicle"
            ]
          },
          {
            "no":934,
            "code":"U+2708",
            "emoji":"✈",
            "description":"AIRPLANE",
            "flagged":false,
            "keywords":[
              "airplane",
              "vehicle"
            ]
          },
          {
            "no":935,
            "code":"U+1F6E9",
            "emoji":"🛩",
            "description":"SMALL AIRPLANE",
            "flagged":false,
            "keywords":[
              "airplane",
              "vehicle"
            ]
          },
          {
            "no":936,
            "code":"U+1F6EB",
            "emoji":"🛫",
            "description":"AIRPLANE DEPARTURE",
            "flagged":false,
            "keywords":[
              "airplane",
              "check-in",
              "departure",
              "departures",
              "vehicle"
            ]
          },
          {
            "no":937,
            "code":"U+1F6EC",
            "emoji":"🛬",
            "description":"AIRPLANE ARRIVING≊ airplane arrival",
            "flagged":false,
            "keywords":[
              "airplane",
              "arrivals",
              "arriving",
              "landing",
              "vehicle"
            ]
          },
          {
            "no":938,
            "code":"U+1F4BA",
            "emoji":"💺",
            "description":"SEAT",
            "flagged":false,
            "keywords":[
              "chair",
              "seat"
            ]
          },
          {
            "no":939,
            "code":"U+1F681",
            "emoji":"🚁",
            "description":"HELICOPTER",
            "flagged":false,
            "keywords":[
              "helicopter",
              "vehicle"
            ]
          },
          {
            "no":940,
            "code":"U+1F69F",
            "emoji":"🚟",
            "description":"SUSPENSION RAILWAY",
            "flagged":false,
            "keywords":[
              "railway",
              "suspension",
              "vehicle"
            ]
          },
          {
            "no":941,
            "code":"U+1F6A0",
            "emoji":"🚠",
            "description":"MOUNTAIN CABLEWAY",
            "flagged":false,
            "keywords":[
              "cable",
              "gondola",
              "mountain",
              "vehicle"
            ]
          },
          {
            "no":942,
            "code":"U+1F6A1",
            "emoji":"🚡",
            "description":"AERIAL TRAMWAY",
            "flagged":false,
            "keywords":[
              "aerial",
              "cable",
              "car",
              "gondola",
              "ropeway",
              "tramway",
              "vehicle"
            ]
          },
          {
            "no":943,
            "code":"U+1F680",
            "emoji":"🚀",
            "description":"ROCKET",
            "flagged":false,
            "keywords":[
              "rocket",
              "space",
              "vehicle"
            ]
          },
          {
            "no":944,
            "code":"U+1F6F0",
            "emoji":"🛰",
            "description":"SATELLITE",
            "flagged":false,
            "keywords":[
              "satellite",
              "space",
              "vehicle"
            ]
          },
          {
            "no":945,
            "code":"U+1F6CE",
            "emoji":"🛎",
            "description":"BELLHOP BELL",
            "flagged":false,
            "keywords":[
              "bell",
              "bellhop",
              "hotel"
            ]
          },
          {
            "no":946,
            "code":"U+1F6AA",
            "emoji":"🚪",
            "description":"DOOR",
            "flagged":false,
            "keywords":[
              "door"
            ]
          },
          {
            "no":947,
            "code":"U+1F6CC",
            "emoji":"🛌",
            "description":"SLEEPING ACCOMMODATION≊ person in bed",
            "flagged":false,
            "keywords":[
              "hotel",
              "sleep"
            ]
          },
          {
            "no":948,
            "code":"U+1F6CF",
            "emoji":"🛏",
            "description":"BED",
            "flagged":false,
            "keywords":[
              "bed",
              "hotel",
              "sleep"
            ]
          },
          {
            "no":949,
            "code":"U+1F6CB",
            "emoji":"🛋",
            "description":"COUCH AND LAMP",
            "flagged":false,
            "keywords":[
              "couch",
              "hotel",
              "lamp"
            ]
          },
          {
            "no":950,
            "code":"U+1F6BD",
            "emoji":"🚽",
            "description":"TOILET",
            "flagged":false,
            "keywords":[
              "toilet"
            ]
          },
          {
            "no":951,
            "code":"U+1F6BF",
            "emoji":"🚿",
            "description":"SHOWER",
            "flagged":false,
            "keywords":[
              "shower",
              "water"
            ]
          },
          {
            "no":952,
            "code":"U+1F6C0",
            "emoji":"🛀",
            "description":"BATH≊ person taking bath",
            "flagged":false,
            "keywords":[
              "bath",
              "bathtub"
            ],
            "types":[
              "U+1F6C0 U+1F3FF",
              "U+1F6C0 U+1F3FE",
              "U+1F6C0 U+1F3FD",
              "U+1F6C0 U+1F3FC",
              "U+1F6C0 U+1F3FB"
            ]
          },
          {
            "no":958,
            "code":"U+1F6C1",
            "emoji":"🛁",
            "description":"BATHTUB",
            "flagged":false,
            "keywords":[
              "bath",
              "bathtub"
            ]
          },
          {
            "no":959,
            "code":"U+231B",
            "emoji":"⌛",
            "description":"HOURGLASS",
            "flagged":false,
            "keywords":[
              "hourglass",
              "sand",
              "timer"
            ]
          },
          {
            "no":960,
            "code":"U+23F3",
            "emoji":"⏳",
            "description":"HOURGLASS WITH FLOWING SAND",
            "flagged":false,
            "keywords":[
              "hourglass",
              "sand",
              "timer"
            ]
          },
          {
            "no":961,
            "code":"U+231A",
            "emoji":"⌚",
            "description":"WATCH",
            "flagged":false,
            "keywords":[
              "clock",
              "watch"
            ]
          },
          {
            "no":962,
            "code":"U+23F0",
            "emoji":"⏰",
            "description":"ALARM CLOCK",
            "flagged":false,
            "keywords":[
              "alarm",
              "clock"
            ]
          },
          {
            "no":963,
            "code":"U+23F1",
            "emoji":"⏱",
            "description":"STOPWATCH",
            "flagged":false,
            "keywords":[
              "clock",
              "stopwatch"
            ]
          },
          {
            "no":964,
            "code":"U+23F2",
            "emoji":"⏲",
            "description":"TIMER CLOCK",
            "flagged":false,
            "keywords":[
              "clock",
              "timer"
            ]
          },
          {
            "no":965,
            "code":"U+1F570",
            "emoji":"🕰",
            "description":"MANTELPIECE CLOCK",
            "flagged":false,
            "keywords":[
              "clock"
            ]
          },
          {
            "no":966,
            "code":"U+1F55B",
            "emoji":"🕛",
            "description":"CLOCK FACE TWELVE OCLOCK≊ twelve o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "12",
              "12:00",
              "clock",
              "o’clock",
              "twelve"
            ]
          },
          {
            "no":967,
            "code":"U+1F567",
            "emoji":"🕧",
            "description":"CLOCK FACE TWELVE-THIRTY≊ twelve-thirty",
            "flagged":false,
            "keywords":[
              "12",
              "12:30",
              "30",
              "clock",
              "thirty",
              "twelve"
            ]
          },
          {
            "no":968,
            "code":"U+1F550",
            "emoji":"🕐",
            "description":"CLOCK FACE ONE OCLOCK≊ one o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "1",
              "1:00",
              "clock",
              "o’clock",
              "one"
            ]
          },
          {
            "no":969,
            "code":"U+1F55C",
            "emoji":"🕜",
            "description":"CLOCK FACE ONE-THIRTY≊ one-thirty",
            "flagged":false,
            "keywords":[
              "1",
              "1:30",
              "30",
              "clock",
              "one",
              "thirty"
            ]
          },
          {
            "no":970,
            "code":"U+1F551",
            "emoji":"🕑",
            "description":"CLOCK FACE TWO OCLOCK≊ two o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "2",
              "2:00",
              "clock",
              "o’clock",
              "two"
            ]
          },
          {
            "no":971,
            "code":"U+1F55D",
            "emoji":"🕝",
            "description":"CLOCK FACE TWO-THIRTY≊ two-thirty",
            "flagged":false,
            "keywords":[
              "2",
              "2:30",
              "30",
              "clock",
              "thirty",
              "two"
            ]
          },
          {
            "no":972,
            "code":"U+1F552",
            "emoji":"🕒",
            "description":"CLOCK FACE THREE OCLOCK≊ three o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "3",
              "3:00",
              "clock",
              "o’clock",
              "three"
            ]
          },
          {
            "no":973,
            "code":"U+1F55E",
            "emoji":"🕞",
            "description":"CLOCK FACE THREE-THIRTY≊ three-thirty",
            "flagged":false,
            "keywords":[
              "3",
              "3:30",
              "30",
              "clock",
              "thirty",
              "three"
            ]
          },
          {
            "no":974,
            "code":"U+1F553",
            "emoji":"🕓",
            "description":"CLOCK FACE FOUR OCLOCK≊ four o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "4",
              "4:00",
              "clock",
              "four",
              "o’clock"
            ]
          },
          {
            "no":975,
            "code":"U+1F55F",
            "emoji":"🕟",
            "description":"CLOCK FACE FOUR-THIRTY≊ four-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "4",
              "4:30",
              "clock",
              "four",
              "thirty"
            ]
          },
          {
            "no":976,
            "code":"U+1F554",
            "emoji":"🕔",
            "description":"CLOCK FACE FIVE OCLOCK≊ five o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "5",
              "5:00",
              "clock",
              "five",
              "o’clock"
            ]
          },
          {
            "no":977,
            "code":"U+1F560",
            "emoji":"🕠",
            "description":"CLOCK FACE FIVE-THIRTY≊ five-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "5",
              "5:30",
              "clock",
              "five",
              "thirty"
            ]
          },
          {
            "no":978,
            "code":"U+1F555",
            "emoji":"🕕",
            "description":"CLOCK FACE SIX OCLOCK≊ six o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "6",
              "6:00",
              "clock",
              "o’clock",
              "six"
            ]
          },
          {
            "no":979,
            "code":"U+1F561",
            "emoji":"🕡",
            "description":"CLOCK FACE SIX-THIRTY≊ six-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "6",
              "6:30",
              "clock",
              "six",
              "thirty"
            ]
          },
          {
            "no":980,
            "code":"U+1F556",
            "emoji":"🕖",
            "description":"CLOCK FACE SEVEN OCLOCK≊ seven o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "7",
              "7:00",
              "clock",
              "o’clock",
              "seven"
            ]
          },
          {
            "no":981,
            "code":"U+1F562",
            "emoji":"🕢",
            "description":"CLOCK FACE SEVEN-THIRTY≊ seven-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "7",
              "7:30",
              "clock",
              "seven",
              "thirty"
            ]
          },
          {
            "no":982,
            "code":"U+1F557",
            "emoji":"🕗",
            "description":"CLOCK FACE EIGHT OCLOCK≊ eight o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "8",
              "8:00",
              "clock",
              "eight",
              "o’clock"
            ]
          },
          {
            "no":983,
            "code":"U+1F563",
            "emoji":"🕣",
            "description":"CLOCK FACE EIGHT-THIRTY≊ eight-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "8",
              "8:30",
              "clock",
              "eight",
              "thirty"
            ]
          },
          {
            "no":984,
            "code":"U+1F558",
            "emoji":"🕘",
            "description":"CLOCK FACE NINE OCLOCK≊ nine o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "9",
              "9:00",
              "clock",
              "nine",
              "o’clock"
            ]
          },
          {
            "no":985,
            "code":"U+1F564",
            "emoji":"🕤",
            "description":"CLOCK FACE NINE-THIRTY≊ nine-thirty",
            "flagged":false,
            "keywords":[
              "30",
              "9",
              "9:30",
              "clock",
              "nine",
              "thirty"
            ]
          },
          {
            "no":986,
            "code":"U+1F559",
            "emoji":"🕙",
            "description":"CLOCK FACE TEN OCLOCK≊ ten o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "10",
              "10:00",
              "clock",
              "o’clock",
              "ten"
            ]
          },
          {
            "no":987,
            "code":"U+1F565",
            "emoji":"🕥",
            "description":"CLOCK FACE TEN-THIRTY≊ ten-thirty",
            "flagged":false,
            "keywords":[
              "10",
              "10:30",
              "30",
              "clock",
              "ten",
              "thirty"
            ]
          },
          {
            "no":988,
            "code":"U+1F55A",
            "emoji":"🕚",
            "description":"CLOCK FACE ELEVEN OCLOCK≊ eleven o’clock",
            "flagged":false,
            "keywords":[
              "00",
              "11",
              "11:00",
              "clock",
              "eleven",
              "o’clock"
            ]
          },
          {
            "no":989,
            "code":"U+1F566",
            "emoji":"🕦",
            "description":"CLOCK FACE ELEVEN-THIRTY≊ eleven-thirty",
            "flagged":false,
            "keywords":[
              "11",
              "11:30",
              "30",
              "clock",
              "eleven",
              "thirty"
            ]
          },
          {
            "no":990,
            "code":"U+1F311",
            "emoji":"🌑",
            "description":"NEW MOON SYMBOL≊ new moon",
            "flagged":false,
            "keywords":[
              "dark",
              "moon",
              "space",
              "weather"
            ]
          },
          {
            "no":991,
            "code":"U+1F312",
            "emoji":"🌒",
            "description":"WAXING CRESCENT MOON SYMBOL≊ waxing crescent moon",
            "flagged":false,
            "keywords":[
              "crescent",
              "moon",
              "space",
              "waxing",
              "weather"
            ]
          },
          {
            "no":992,
            "code":"U+1F313",
            "emoji":"🌓",
            "description":"FIRST QUARTER MOON SYMBOL≊ first quarter moon",
            "flagged":false,
            "keywords":[
              "moon",
              "quarter",
              "space",
              "weather"
            ]
          },
          {
            "no":993,
            "code":"U+1F314",
            "emoji":"🌔",
            "description":"WAXING GIBBOUS MOON SYMBOL≊ waxing gibbous moon",
            "flagged":false,
            "keywords":[
              "gibbous",
              "moon",
              "space",
              "waxing",
              "weather"
            ]
          },
          {
            "no":994,
            "code":"U+1F315",
            "emoji":"🌕",
            "description":"FULL MOON SYMBOL≊ full moon",
            "flagged":false,
            "keywords":[
              "full",
              "moon",
              "space",
              "weather"
            ]
          },
          {
            "no":995,
            "code":"U+1F316",
            "emoji":"🌖",
            "description":"WANING GIBBOUS MOON SYMBOL≊ waning gibbous moon",
            "flagged":false,
            "keywords":[
              "gibbous",
              "moon",
              "space",
              "waning",
              "weather"
            ]
          },
          {
            "no":996,
            "code":"U+1F317",
            "emoji":"🌗",
            "description":"LAST QUARTER MOON SYMBOL≊ last quarter moon",
            "flagged":false,
            "keywords":[
              "moon",
              "quarter",
              "space",
              "weather"
            ]
          },
          {
            "no":997,
            "code":"U+1F318",
            "emoji":"🌘",
            "description":"WANING CRESCENT MOON SYMBOL≊ waning crescent moon",
            "flagged":false,
            "keywords":[
              "crescent",
              "moon",
              "space",
              "waning",
              "weather"
            ]
          },
          {
            "no":998,
            "code":"U+1F319",
            "emoji":"🌙",
            "description":"CRESCENT MOON",
            "flagged":false,
            "keywords":[
              "crescent",
              "moon",
              "space",
              "weather"
            ]
          },
          {
            "no":999,
            "code":"U+1F31A",
            "emoji":"🌚",
            "description":"NEW MOON WITH FACE≊ new moon face",
            "flagged":false,
            "keywords":[
              "face",
              "moon",
              "space",
              "weather"
            ]
          },
          {
            "no":1000,
            "code":"U+1F31B",
            "emoji":"🌛",
            "description":"FIRST QUARTER MOON WITH FACE",
            "flagged":false,
            "keywords":[
              "face",
              "moon",
              "quarter",
              "space",
              "weather"
            ]
          },
          {
            "no":1001,
            "code":"U+1F31C",
            "emoji":"🌜",
            "description":"LAST QUARTER MOON WITH FACE",
            "flagged":false,
            "keywords":[
              "face",
              "moon",
              "quarter",
              "space",
              "weather"
            ]
          },
          {
            "no":1002,
            "code":"U+1F321",
            "emoji":"🌡",
            "description":"THERMOMETER",
            "flagged":false,
            "keywords":[
              "thermometer",
              "weather"
            ]
          },
          {
            "no":1003,
            "code":"U+2600",
            "emoji":"☀",
            "description":"BLACK SUN WITH RAYS≊ sun",
            "flagged":false,
            "keywords":[
              "bright",
              "rays",
              "space",
              "sun",
              "sunny",
              "weather"
            ]
          },
          {
            "no":1004,
            "code":"U+1F31D",
            "emoji":"🌝",
            "description":"FULL MOON WITH FACE",
            "flagged":false,
            "keywords":[
              "bright",
              "face",
              "full",
              "moon",
              "space",
              "weather"
            ]
          },
          {
            "no":1005,
            "code":"U+1F31E",
            "emoji":"🌞",
            "description":"SUN WITH FACE",
            "flagged":false,
            "keywords":[
              "bright",
              "face",
              "space",
              "sun",
              "weather"
            ]
          },
          {
            "no":1006,
            "code":"U+2B50",
            "emoji":"⭐",
            "description":"WHITE MEDIUM STAR",
            "flagged":false,
            "keywords":[
              "star"
            ]
          },
          {
            "no":1007,
            "code":"U+1F31F",
            "emoji":"🌟",
            "description":"GLOWING STAR",
            "flagged":false,
            "keywords":[
              "glittery",
              "glow",
              "shining",
              "sparkle",
              "star"
            ]
          },
          {
            "no":1008,
            "code":"U+1F320",
            "emoji":"🌠",
            "description":"SHOOTING STAR",
            "flagged":false,
            "keywords":[
              "activity",
              "falling",
              "shooting",
              "space",
              "star"
            ]
          },
          {
            "no":1009,
            "code":"U+2601",
            "emoji":"☁",
            "description":"CLOUD",
            "flagged":false,
            "keywords":[
              "cloud",
              "weather"
            ]
          },
          {
            "no":1010,
            "code":"U+26C5",
            "emoji":"⛅",
            "description":"SUN BEHIND CLOUD",
            "flagged":false,
            "keywords":[
              "cloud",
              "sun",
              "weather"
            ]
          },
          {
            "no":1011,
            "code":"U+26C8",
            "emoji":"⛈",
            "description":"THUNDER CLOUD AND RAIN≊ cloud with lightning and rain",
            "flagged":false,
            "keywords":[
              "cloud",
              "rain",
              "thunder",
              "weather"
            ]
          },
          {
            "no":1012,
            "code":"U+1F324",
            "emoji":"🌤",
            "description":"WHITE SUN WITH SMALL CLOUD≊ sun behind small cloud",
            "flagged":false,
            "keywords":[
              "cloud",
              "sun",
              "weather"
            ]
          },
          {
            "no":1013,
            "code":"U+1F325",
            "emoji":"🌥",
            "description":"WHITE SUN BEHIND CLOUD≊ sun behind large cloud",
            "flagged":false,
            "keywords":[
              "cloud",
              "sun",
              "weather"
            ]
          },
          {
            "no":1014,
            "code":"U+1F326",
            "emoji":"🌦",
            "description":"WHITE SUN BEHIND CLOUD WITH RAIN≊ sun behind cloud with rain",
            "flagged":false,
            "keywords":[
              "cloud",
              "rain",
              "sun",
              "weather"
            ]
          },
          {
            "no":1015,
            "code":"U+1F327",
            "emoji":"🌧",
            "description":"CLOUD WITH RAIN",
            "flagged":false,
            "keywords":[
              "cloud",
              "rain",
              "weather"
            ]
          },
          {
            "no":1016,
            "code":"U+1F328",
            "emoji":"🌨",
            "description":"CLOUD WITH SNOW",
            "flagged":false,
            "keywords":[
              "cloud",
              "cold",
              "snow",
              "weather"
            ]
          },
          {
            "no":1017,
            "code":"U+1F329",
            "emoji":"🌩",
            "description":"CLOUD WITH LIGHTNING",
            "flagged":false,
            "keywords":[
              "cloud",
              "lightning",
              "weather"
            ]
          },
          {
            "no":1018,
            "code":"U+1F32A",
            "emoji":"🌪",
            "description":"CLOUD WITH TORNADO≊ tornado",
            "flagged":false,
            "keywords":[
              "cloud",
              "tornado",
              "weather",
              "whirlwind"
            ]
          },
          {
            "no":1019,
            "code":"U+1F32B",
            "emoji":"🌫",
            "description":"FOG",
            "flagged":false,
            "keywords":[
              "cloud",
              "fog",
              "weather"
            ]
          },
          {
            "no":1020,
            "code":"U+1F32C",
            "emoji":"🌬",
            "description":"WIND BLOWING FACE≊ wind face",
            "flagged":false,
            "keywords":[
              "blow",
              "cloud",
              "face",
              "weather",
              "wind"
            ]
          },
          {
            "no":1021,
            "code":"U+1F300",
            "emoji":"🌀",
            "description":"CYCLONE",
            "flagged":false,
            "keywords":[
              "cyclone",
              "dizzy",
              "twister",
              "typhoon",
              "weather"
            ]
          },
          {
            "no":1022,
            "code":"U+1F308",
            "emoji":"🌈",
            "description":"RAINBOW",
            "flagged":false,
            "keywords":[
              "rain",
              "rainbow",
              "weather"
            ]
          },
          {
            "no":1023,
            "code":"U+1F302",
            "emoji":"🌂",
            "description":"CLOSED UMBRELLA",
            "flagged":false,
            "keywords":[
              "clothing",
              "rain",
              "umbrella",
              "weather"
            ]
          },
          {
            "no":1024,
            "code":"U+2602",
            "emoji":"☂",
            "description":"UMBRELLA",
            "flagged":false,
            "keywords":[
              "clothing",
              "rain",
              "umbrella",
              "weather"
            ]
          },
          {
            "no":1025,
            "code":"U+2614",
            "emoji":"☔",
            "description":"UMBRELLA WITH RAIN DROPS",
            "flagged":false,
            "keywords":[
              "clothing",
              "drop",
              "rain",
              "umbrella",
              "weather"
            ]
          },
          {
            "no":1026,
            "code":"U+26F1",
            "emoji":"⛱",
            "description":"UMBRELLA ON GROUND",
            "flagged":false,
            "keywords":[
              "rain",
              "sun",
              "umbrella",
              "weather"
            ]
          },
          {
            "no":1027,
            "code":"U+26A1",
            "emoji":"⚡",
            "description":"HIGH VOLTAGE SIGN≊ high voltage",
            "flagged":false,
            "keywords":[
              "danger",
              "electric",
              "electricity",
              "lightning",
              "voltage",
              "zap"
            ]
          },
          {
            "no":1028,
            "code":"U+2744",
            "emoji":"❄",
            "description":"SNOWFLAKE",
            "flagged":false,
            "keywords":[
              "cold",
              "snow",
              "snowflake",
              "weather"
            ]
          },
          {
            "no":1029,
            "code":"U+2603",
            "emoji":"☃",
            "description":"SNOWMAN",
            "flagged":false,
            "keywords":[
              "cold",
              "snow",
              "snowman",
              "weather"
            ]
          },
          {
            "no":1030,
            "code":"U+26C4",
            "emoji":"⛄",
            "description":"SNOWMAN WITHOUT SNOW",
            "flagged":false,
            "keywords":[
              "cold",
              "snow",
              "snowman",
              "weather"
            ]
          },
          {
            "no":1031,
            "code":"U+2604",
            "emoji":"☄",
            "description":"COMET",
            "flagged":false,
            "keywords":[
              "comet",
              "space"
            ]
          },
          {
            "no":1032,
            "code":"U+1F525",
            "emoji":"🔥",
            "description":"FIRE",
            "flagged":false,
            "keywords":[
              "fire",
              "flame",
              "tool"
            ]
          },
          {
            "no":1033,
            "code":"U+1F4A7",
            "emoji":"💧",
            "description":"DROPLET",
            "flagged":false,
            "keywords":[
              "cold",
              "comic",
              "drop",
              "sweat",
              "weather"
            ]
          },
          {
            "no":1034,
            "code":"U+1F30A",
            "emoji":"🌊",
            "description":"WATER WAVE",
            "flagged":false,
            "keywords":[
              "ocean",
              "water",
              "wave",
              "weather"
            ]
          }
        ],
        "Activities":[
          {
            "no":1035,
            "code":"U+1F383",
            "emoji":"🎃",
            "description":"JACK-O-LANTERN",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "entertainment",
              "halloween",
              "jack",
              "lantern"
            ]
          },
          {
            "no":1036,
            "code":"U+1F384",
            "emoji":"🎄",
            "description":"CHRISTMAS TREE",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "christmas",
              "entertainment",
              "tree"
            ]
          },
          {
            "no":1037,
            "code":"U+1F386",
            "emoji":"🎆",
            "description":"FIREWORKS",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "entertainment",
              "fireworks"
            ]
          },
          {
            "no":1038,
            "code":"U+1F387",
            "emoji":"🎇",
            "description":"FIREWORK SPARKLER≊ sparkler",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "entertainment",
              "fireworks",
              "sparkle"
            ]
          },
          {
            "no":1039,
            "code":"U+2728",
            "emoji":"✨",
            "description":"SPARKLES",
            "flagged":false,
            "keywords":[
              "entertainment",
              "sparkle",
              "star"
            ]
          },
          {
            "no":1040,
            "code":"U+1F388",
            "emoji":"🎈",
            "description":"BALLOON",
            "flagged":false,
            "keywords":[
              "activity",
              "balloon",
              "celebration",
              "entertainment"
            ]
          },
          {
            "no":1041,
            "code":"U+1F389",
            "emoji":"🎉",
            "description":"PARTY POPPER",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "entertainment",
              "party",
              "popper",
              "tada"
            ]
          },
          {
            "no":1042,
            "code":"U+1F38A",
            "emoji":"🎊",
            "description":"CONFETTI BALL",
            "flagged":false,
            "keywords":[
              "activity",
              "ball",
              "celebration",
              "confetti",
              "entertainment"
            ]
          },
          {
            "no":1043,
            "code":"U+1F38B",
            "emoji":"🎋",
            "description":"TANABATA TREE",
            "flagged":false,
            "keywords":[
              "activity",
              "banner",
              "celebration",
              "entertainment",
              "japanese",
              "tree"
            ]
          },
          {
            "no":1044,
            "code":"U+1F38D",
            "emoji":"🎍",
            "description":"PINE DECORATION",
            "flagged":false,
            "keywords":[
              "activity",
              "bamboo",
              "celebration",
              "japanese",
              "pine",
              "plant"
            ]
          },
          {
            "no":1045,
            "code":"U+1F38E",
            "emoji":"🎎",
            "description":"JAPANESE DOLLS",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "doll",
              "entertainment",
              "festival",
              "japanese"
            ]
          },
          {
            "no":1046,
            "code":"U+1F38F",
            "emoji":"🎏",
            "description":"CARP STREAMER",
            "flagged":false,
            "keywords":[
              "activity",
              "carp",
              "celebration",
              "entertainment",
              "flag",
              "streamer"
            ]
          },
          {
            "no":1047,
            "code":"U+1F390",
            "emoji":"🎐",
            "description":"WIND CHIME",
            "flagged":false,
            "keywords":[
              "activity",
              "bell",
              "celebration",
              "chime",
              "entertainment",
              "wind"
            ]
          },
          {
            "no":1048,
            "code":"U+1F391",
            "emoji":"🎑",
            "description":"MOON VIEWING CEREMONY≊ moon ceremony",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "ceremony",
              "entertainment",
              "moon"
            ]
          },
          {
            "no":1049,
            "code":"U+1F380",
            "emoji":"🎀",
            "description":"RIBBON",
            "flagged":false,
            "keywords":[
              "celebration",
              "ribbon"
            ]
          },
          {
            "no":1050,
            "code":"U+1F381",
            "emoji":"🎁",
            "description":"WRAPPED PRESENT",
            "flagged":false,
            "keywords":[
              "box",
              "celebration",
              "entertainment",
              "gift",
              "present",
              "wrapped"
            ]
          },
          {
            "no":1051,
            "code":"U+1F397",
            "emoji":"🎗",
            "description":"REMINDER RIBBON",
            "flagged":false,
            "keywords":[
              "celebration",
              "reminder",
              "ribbon"
            ]
          },
          {
            "no":1052,
            "code":"U+1F39F",
            "emoji":"🎟",
            "description":"ADMISSION TICKETS",
            "flagged":false,
            "keywords":[
              "admission",
              "entertainment",
              "ticket"
            ]
          },
          {
            "no":1053,
            "code":"U+1F3AB",
            "emoji":"🎫",
            "description":"TICKET",
            "flagged":false,
            "keywords":[
              "activity",
              "admission",
              "entertainment",
              "ticket"
            ]
          },
          {
            "no":1054,
            "code":"U+1F396",
            "emoji":"🎖",
            "description":"MILITARY MEDAL",
            "flagged":false,
            "keywords":[
              "celebration",
              "medal",
              "military"
            ]
          },
          {
            "no":1055,
            "code":"U+1F3C6",
            "emoji":"🏆",
            "description":"TROPHY",
            "flagged":false,
            "keywords":[
              "prize",
              "trophy"
            ]
          },
          {
            "no":1056,
            "code":"U+1F3C5",
            "emoji":"🏅",
            "description":"SPORTS MEDAL",
            "flagged":false,
            "keywords":[
              "medal"
            ]
          },
          {
            "no":1057,
            "code":"U+1F947",
            "emoji":"🥇",
            "description":"FIRST PLACE MEDAL",
            "flagged":true,
            "keywords":[
              "first",
              "gold",
              "medal"
            ]
          },
          {
            "no":1058,
            "code":"U+1F948",
            "emoji":"🥈",
            "description":"SECOND PLACE MEDAL",
            "flagged":true,
            "keywords":[
              "medal",
              "second",
              "silver"
            ]
          },
          {
            "no":1059,
            "code":"U+1F949",
            "emoji":"🥉",
            "description":"THIRD PLACE MEDAL",
            "flagged":true,
            "keywords":[
              "bronze",
              "medal",
              "third"
            ]
          },
          {
            "no":1060,
            "code":"U+26BD",
            "emoji":"⚽",
            "description":"SOCCER BALL",
            "flagged":false,
            "keywords":[
              "ball",
              "soccer"
            ]
          },
          {
            "no":1061,
            "code":"U+26BE",
            "emoji":"⚾",
            "description":"BASEBALL",
            "flagged":false,
            "keywords":[
              "ball",
              "baseball"
            ]
          },
          {
            "no":1062,
            "code":"U+1F3C0",
            "emoji":"🏀",
            "description":"BASKETBALL AND HOOP≊ basketball",
            "flagged":false,
            "keywords":[
              "ball",
              "basketball",
              "hoop"
            ]
          },
          {
            "no":1063,
            "code":"U+1F3D0",
            "emoji":"🏐",
            "description":"VOLLEYBALL",
            "flagged":false,
            "keywords":[
              "ball",
              "game",
              "volleyball"
            ]
          },
          {
            "no":1064,
            "code":"U+1F3C8",
            "emoji":"🏈",
            "description":"AMERICAN FOOTBALL",
            "flagged":false,
            "keywords":[
              "american",
              "ball",
              "football"
            ]
          },
          {
            "no":1065,
            "code":"U+1F3C9",
            "emoji":"🏉",
            "description":"RUGBY FOOTBALL",
            "flagged":false,
            "keywords":[
              "ball",
              "football",
              "rugby"
            ]
          },
          {
            "no":1066,
            "code":"U+1F3BE",
            "emoji":"🎾",
            "description":"TENNIS RACQUET AND BALL≊ tennis",
            "flagged":false,
            "keywords":[
              "ball",
              "racquet",
              "tennis"
            ]
          },
          {
            "no":1067,
            "code":"U+1F3B1",
            "emoji":"🎱",
            "description":"BILLIARDS",
            "flagged":false,
            "keywords":[
              "8",
              "8 ball",
              "ball",
              "billiard",
              "eight",
              "game"
            ]
          },
          {
            "no":1068,
            "code":"U+1F3B3",
            "emoji":"🎳",
            "description":"BOWLING",
            "flagged":false,
            "keywords":[
              "ball",
              "bowling",
              "game"
            ]
          },
          {
            "no":1069,
            "code":"U+1F3CF",
            "emoji":"🏏",
            "description":"CRICKET BAT AND BALL≊ cricket",
            "flagged":false,
            "keywords":[
              "ball",
              "bat",
              "cricket",
              "game"
            ]
          },
          {
            "no":1070,
            "code":"U+1F3D1",
            "emoji":"🏑",
            "description":"FIELD HOCKEY STICK AND BALL≊ field hockey",
            "flagged":false,
            "keywords":[
              "ball",
              "field",
              "game",
              "hockey",
              "stick"
            ]
          },
          {
            "no":1071,
            "code":"U+1F3D2",
            "emoji":"🏒",
            "description":"ICE HOCKEY STICK AND PUCK",
            "flagged":false,
            "keywords":[
              "game",
              "hockey",
              "ice",
              "puck",
              "stick"
            ]
          },
          {
            "no":1072,
            "code":"U+1F3D3",
            "emoji":"🏓",
            "description":"TABLE TENNIS PADDLE AND BALL≊ ping pong",
            "flagged":false,
            "keywords":[
              "ball",
              "bat",
              "game",
              "paddle",
              "table tennis"
            ]
          },
          {
            "no":1073,
            "code":"U+1F3F8",
            "emoji":"🏸",
            "description":"BADMINTON RACQUET AND SHUTTLECOCK≊ badminton",
            "flagged":false,
            "keywords":[
              "badminton",
              "birdie",
              "game",
              "racquet",
              "shuttlecock"
            ]
          },
          {
            "no":1074,
            "code":"U+1F94A",
            "emoji":"🥊",
            "description":"BOXING GLOVE",
            "flagged":true,
            "keywords":[
              "boxing",
              "glove"
            ]
          },
          {
            "no":1075,
            "code":"U+1F94B",
            "emoji":"🥋",
            "description":"MARTIAL ARTS UNIFORM",
            "flagged":true,
            "keywords":[
              "judo",
              "karate",
              "martial arts",
              "taekwondo",
              "uniform"
            ]
          },
          {
            "no":1076,
            "code":"U+26F3",
            "emoji":"⛳",
            "description":"FLAG IN HOLE",
            "flagged":false,
            "keywords":[
              "flag",
              "golf",
              "hole"
            ]
          },
          {
            "no":1077,
            "code":"U+1F3CC",
            "emoji":"🏌",
            "description":"GOLFER",
            "flagged":false,
            "keywords":[
              "ball",
              "golf"
            ]
          },
          {
            "no":1078,
            "code":"U+26F8",
            "emoji":"⛸",
            "description":"ICE SKATE",
            "flagged":false,
            "keywords":[
              "ice",
              "skate"
            ]
          },
          {
            "no":1079,
            "code":"U+1F3A3",
            "emoji":"🎣",
            "description":"FISHING POLE AND FISH≊ fishing pole",
            "flagged":false,
            "keywords":[
              "entertainment",
              "fish",
              "pole"
            ]
          },
          {
            "no":1080,
            "code":"U+1F3BD",
            "emoji":"🎽",
            "description":"RUNNING SHIRT WITH SASH≊ running shirt",
            "flagged":false,
            "keywords":[
              "running",
              "sash",
              "shirt"
            ]
          },
          {
            "no":1081,
            "code":"U+1F3BF",
            "emoji":"🎿",
            "description":"SKI AND SKI BOOT≊ skis",
            "flagged":false,
            "keywords":[
              "ski",
              "snow"
            ]
          },
          {
            "no":1082,
            "code":"U+26F7",
            "emoji":"⛷",
            "description":"SKIER",
            "flagged":false,
            "keywords":[
              "ski",
              "snow"
            ]
          },
          {
            "no":1083,
            "code":"U+1F3C2",
            "emoji":"🏂",
            "description":"SNOWBOARDER",
            "flagged":false,
            "keywords":[
              "ski",
              "snow",
              "snowboard"
            ]
          },
          {
            "no":1084,
            "code":"U+1F3C4",
            "emoji":"🏄",
            "description":"SURFER",
            "flagged":false,
            "keywords":[
              "surfer",
              "surfing"
            ],
            "types":[
              "U+1F3C4 U+1F3FF",
              "U+1F3C4 U+1F3FE",
              "U+1F3C4 U+1F3FD",
              "U+1F3C4 U+1F3FC",
              "U+1F3C4 U+1F3FB"
            ]
          },
          {
            "no":1090,
            "code":"U+1F3C7",
            "emoji":"🏇",
            "description":"HORSE RACING",
            "flagged":false,
            "keywords":[
              "horse",
              "jockey",
              "racehorse",
              "racing"
            ]
          },
          {
            "no":1091,
            "code":"U+1F3CA",
            "emoji":"🏊",
            "description":"SWIMMER",
            "flagged":false,
            "keywords":[
              "swim",
              "swimmer"
            ],
            "types":[
              "U+1F3CA U+1F3FF",
              "U+1F3CA U+1F3FE",
              "U+1F3CA U+1F3FD",
              "U+1F3CA U+1F3FC",
              "U+1F3CA U+1F3FB"
            ]
          },
          {
            "no":1097,
            "code":"U+26F9",
            "emoji":"⛹",
            "description":"PERSON WITH BALL",
            "flagged":false,
            "keywords":[
              "ball"
            ],
            "types":[
              "U+26F9 U+1F3FF",
              "U+26F9 U+1F3FE",
              "U+26F9 U+1F3FD",
              "U+26F9 U+1F3FC",
              "U+26F9 U+1F3FB"
            ]
          },
          {
            "no":1103,
            "code":"U+1F3CB",
            "emoji":"🏋",
            "description":"WEIGHT LIFTER",
            "flagged":false,
            "keywords":[
              "lifter",
              "weight"
            ],
            "types":[
              "U+1F3CB U+1F3FF",
              "U+1F3CB U+1F3FE",
              "U+1F3CB U+1F3FD",
              "U+1F3CB U+1F3FC",
              "U+1F3CB U+1F3FB"
            ]
          },
          {
            "no":1109,
            "code":"U+1F6B4",
            "emoji":"🚴",
            "description":"BICYCLIST",
            "flagged":false,
            "keywords":[
              "bicycle",
              "bicyclist",
              "bike",
              "cyclist"
            ],
            "types":[
              "U+1F6B4 U+1F3FF",
              "U+1F6B4 U+1F3FE",
              "U+1F6B4 U+1F3FD",
              "U+1F6B4 U+1F3FC",
              "U+1F6B4 U+1F3FB"
            ]
          },
          {
            "no":1115,
            "code":"U+1F6B5",
            "emoji":"🚵",
            "description":"MOUNTAIN BICYCLIST≊ mountain biker",
            "flagged":false,
            "keywords":[
              "bicycle",
              "bicyclist",
              "bike",
              "cyclist",
              "mountain"
            ],
            "types":[
              "U+1F6B5 U+1F3FF",
              "U+1F6B5 U+1F3FE",
              "U+1F6B5 U+1F3FD",
              "U+1F6B5 U+1F3FC",
              "U+1F6B5 U+1F3FB"
            ]
          },
          {
            "no":1121,
            "code":"U+1F3CE",
            "emoji":"🏎",
            "description":"RACING CAR",
            "flagged":false,
            "keywords":[
              "car",
              "racing"
            ]
          },
          {
            "no":1122,
            "code":"U+1F3CD",
            "emoji":"🏍",
            "description":"RACING MOTORCYCLE≊ motorcycle",
            "flagged":false,
            "keywords":[
              "motorcycle",
              "racing"
            ]
          },
          {
            "no":1123,
            "code":"U+1F938",
            "emoji":"🤸",
            "description":"PERSON DOING CARTWHEEL",
            "flagged":true,
            "keywords":[
              "cartwheel",
              "gymnastics"
            ],
            "types":[
              "U+1F938 U+1F3FF",
              "U+1F938 U+1F3FE",
              "U+1F938 U+1F3FD",
              "U+1F938 U+1F3FC",
              "U+1F938 U+1F3FB"
            ]
          },
          {
            "no":1129,
            "code":"U+1F93C",
            "emoji":"🤼",
            "description":"WRESTLERS",
            "flagged":true,
            "keywords":[
              "wrestle",
              "wrestler"
            ],
            "types":[
              "U+1F93C U+1F3FF",
              "U+1F93C U+1F3FE",
              "U+1F93C U+1F3FD",
              "U+1F93C U+1F3FC",
              "U+1F93C U+1F3FB"
            ]
          },
          {
            "no":1135,
            "code":"U+1F93D",
            "emoji":"🤽",
            "description":"WATER POLO",
            "flagged":true,
            "keywords":[
              "polo",
              "water"
            ],
            "types":[
              "U+1F93D U+1F3FF",
              "U+1F93D U+1F3FE",
              "U+1F93D U+1F3FD",
              "U+1F93D U+1F3FC",
              "U+1F93D U+1F3FB"
            ]
          },
          {
            "no":1141,
            "code":"U+1F93E",
            "emoji":"🤾",
            "description":"HANDBALL",
            "flagged":true,
            "keywords":[
              "ball",
              "handball"
            ],
            "types":[
              "U+1F93E U+1F3FF",
              "U+1F93E U+1F3FE",
              "U+1F93E U+1F3FD",
              "U+1F93E U+1F3FC",
              "U+1F93E U+1F3FB"
            ]
          },
          {
            "no":1147,
            "code":"U+1F93A",
            "emoji":"🤺",
            "description":"FENCER",
            "flagged":true,
            "keywords":[
              "fencer",
              "fencing",
              "sword"
            ]
          },
          {
            "no":1148,
            "code":"U+1F945",
            "emoji":"🥅",
            "description":"GOAL NET",
            "flagged":true,
            "keywords":[
              "goal",
              "net"
            ]
          },
          {
            "no":1149,
            "code":"U+1F939",
            "emoji":"🤹",
            "description":"JUGGLING",
            "flagged":true,
            "keywords":[
              "balance",
              "juggle",
              "multitask",
              "skill"
            ],
            "types":[
              "U+1F939 U+1F3FF",
              "U+1F939 U+1F3FE",
              "U+1F939 U+1F3FD",
              "U+1F939 U+1F3FC",
              "U+1F939 U+1F3FB"
            ]
          },
          {
            "no":1155,
            "code":"U+1F3AF",
            "emoji":"🎯",
            "description":"DIRECT HIT",
            "flagged":false,
            "keywords":[
              "activity",
              "bull",
              "bullseye",
              "dart",
              "entertainment",
              "eye",
              "game",
              "hit",
              "target"
            ]
          },
          {
            "no":1156,
            "code":"U+1F3AE",
            "emoji":"🎮",
            "description":"VIDEO GAME",
            "flagged":false,
            "keywords":[
              "controller",
              "entertainment",
              "game",
              "video game"
            ]
          },
          {
            "no":1157,
            "code":"U+1F579",
            "emoji":"🕹",
            "description":"JOYSTICK",
            "flagged":false,
            "keywords":[
              "entertainment",
              "game",
              "joystick",
              "video game"
            ]
          },
          {
            "no":1158,
            "code":"U+1F3B2",
            "emoji":"🎲",
            "description":"GAME DIE",
            "flagged":false,
            "keywords":[
              "dice",
              "die",
              "entertainment",
              "game"
            ]
          },
          {
            "no":1159,
            "code":"U+2660",
            "emoji":"♠",
            "description":"BLACK SPADE SUIT≊ spade suit",
            "flagged":false,
            "keywords":[
              "card",
              "game",
              "spade",
              "suit"
            ]
          },
          {
            "no":1160,
            "code":"U+2665",
            "emoji":"♥",
            "description":"BLACK HEART SUIT≊ heart suit",
            "flagged":false,
            "keywords":[
              "card",
              "game",
              "heart",
              "hearts",
              "suit"
            ]
          },
          {
            "no":1161,
            "code":"U+2666",
            "emoji":"♦",
            "description":"BLACK DIAMOND SUIT≊ diamond suit",
            "flagged":false,
            "keywords":[
              "card",
              "diamond",
              "diamonds",
              "game",
              "suit"
            ]
          },
          {
            "no":1162,
            "code":"U+2663",
            "emoji":"♣",
            "description":"BLACK CLUB SUIT≊ club suit",
            "flagged":false,
            "keywords":[
              "card",
              "club",
              "clubs",
              "game",
              "suit"
            ]
          },
          {
            "no":1163,
            "code":"U+1F0CF",
            "emoji":"🃏",
            "description":"PLAYING CARD BLACK JOKER≊ joker",
            "flagged":false,
            "keywords":[
              "card",
              "entertainment",
              "game",
              "joker",
              "playing"
            ]
          },
          {
            "no":1164,
            "code":"U+1F004",
            "emoji":"🀄",
            "description":"MAHJONG TILE RED DRAGON≊ mahjong red dragon",
            "flagged":false,
            "keywords":[
              "game",
              "mahjong",
              "red"
            ]
          },
          {
            "no":1165,
            "code":"U+1F3B4",
            "emoji":"🎴",
            "description":"FLOWER PLAYING CARDS",
            "flagged":false,
            "keywords":[
              "activity",
              "card",
              "entertainment",
              "flower",
              "game",
              "japanese",
              "playing"
            ]
          }
        ],
        "Objects":[
          {
            "no":1166,
            "code":"U+1F507",
            "emoji":"🔇",
            "description":"SPEAKER WITH CANCELLATION STROKE≊ speaker off",
            "flagged":false,
            "keywords":[
              "mute",
              "quiet",
              "silent",
              "speaker",
              "volume"
            ]
          },
          {
            "no":1167,
            "code":"U+1F508",
            "emoji":"🔈",
            "description":"SPEAKER",
            "flagged":false,
            "keywords":[
              "speaker",
              "volume"
            ]
          },
          {
            "no":1168,
            "code":"U+1F509",
            "emoji":"🔉",
            "description":"SPEAKER WITH ONE SOUND WAVE≊ speaker on",
            "flagged":false,
            "keywords":[
              "low",
              "speaker",
              "volume",
              "wave"
            ]
          },
          {
            "no":1169,
            "code":"U+1F50A",
            "emoji":"🔊",
            "description":"SPEAKER WITH THREE SOUND WAVES≊ speaker loud",
            "flagged":false,
            "keywords":[
              "3",
              "entertainment",
              "high",
              "loud",
              "speaker",
              "three",
              "volume"
            ]
          },
          {
            "no":1170,
            "code":"U+1F4E2",
            "emoji":"📢",
            "description":"PUBLIC ADDRESS LOUDSPEAKER≊ loudspeaker",
            "flagged":false,
            "keywords":[
              "communication",
              "loud",
              "loudspeaker",
              "public address"
            ]
          },
          {
            "no":1171,
            "code":"U+1F4E3",
            "emoji":"📣",
            "description":"CHEERING MEGAPHONE≊ megaphone",
            "flagged":false,
            "keywords":[
              "cheering",
              "communication",
              "megaphone"
            ]
          },
          {
            "no":1172,
            "code":"U+1F4EF",
            "emoji":"📯",
            "description":"POSTAL HORN",
            "flagged":false,
            "keywords":[
              "communication",
              "entertainment",
              "horn",
              "post",
              "postal"
            ]
          },
          {
            "no":1173,
            "code":"U+1F514",
            "emoji":"🔔",
            "description":"BELL",
            "flagged":false,
            "keywords":[
              "bell"
            ]
          },
          {
            "no":1174,
            "code":"U+1F515",
            "emoji":"🔕",
            "description":"BELL WITH CANCELLATION STROKE≊ bell with slash",
            "flagged":false,
            "keywords":[
              "bell",
              "forbidden",
              "mute",
              "no",
              "not",
              "prohibited",
              "quiet",
              "silent"
            ]
          },
          {
            "no":1175,
            "code":"U+1F3BC",
            "emoji":"🎼",
            "description":"MUSICAL SCORE",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "music",
              "score"
            ]
          },
          {
            "no":1176,
            "code":"U+1F3B5",
            "emoji":"🎵",
            "description":"MUSICAL NOTE",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "music",
              "note"
            ]
          },
          {
            "no":1177,
            "code":"U+1F3B6",
            "emoji":"🎶",
            "description":"MULTIPLE MUSICAL NOTES≊ musical notes",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "music",
              "note",
              "notes"
            ]
          },
          {
            "no":1178,
            "code":"U+1F399",
            "emoji":"🎙",
            "description":"STUDIO MICROPHONE",
            "flagged":false,
            "keywords":[
              "mic",
              "microphone",
              "music",
              "studio"
            ]
          },
          {
            "no":1179,
            "code":"U+1F39A",
            "emoji":"🎚",
            "description":"LEVEL SLIDER",
            "flagged":false,
            "keywords":[
              "level",
              "music",
              "slider"
            ]
          },
          {
            "no":1180,
            "code":"U+1F39B",
            "emoji":"🎛",
            "description":"CONTROL KNOBS",
            "flagged":false,
            "keywords":[
              "control",
              "knobs",
              "music"
            ]
          },
          {
            "no":1181,
            "code":"U+1F3A4",
            "emoji":"🎤",
            "description":"MICROPHONE",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "karaoke",
              "mic",
              "microphone"
            ]
          },
          {
            "no":1182,
            "code":"U+1F3A7",
            "emoji":"🎧",
            "description":"HEADPHONE",
            "flagged":false,
            "keywords":[
              "activity",
              "earbud",
              "entertainment",
              "headphone"
            ]
          },
          {
            "no":1183,
            "code":"U+1F4FB",
            "emoji":"📻",
            "description":"RADIO",
            "flagged":false,
            "keywords":[
              "entertainment",
              "radio",
              "video"
            ]
          },
          {
            "no":1184,
            "code":"U+1F3B7",
            "emoji":"🎷",
            "description":"SAXOPHONE",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "instrument",
              "music",
              "sax",
              "saxophone"
            ]
          },
          {
            "no":1185,
            "code":"U+1F3B8",
            "emoji":"🎸",
            "description":"GUITAR",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "guitar",
              "instrument",
              "music"
            ]
          },
          {
            "no":1186,
            "code":"U+1F3B9",
            "emoji":"🎹",
            "description":"MUSICAL KEYBOARD",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "instrument",
              "keyboard",
              "music",
              "piano"
            ]
          },
          {
            "no":1187,
            "code":"U+1F3BA",
            "emoji":"🎺",
            "description":"TRUMPET",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "instrument",
              "music",
              "trumpet"
            ]
          },
          {
            "no":1188,
            "code":"U+1F3BB",
            "emoji":"🎻",
            "description":"VIOLIN",
            "flagged":false,
            "keywords":[
              "activity",
              "entertainment",
              "instrument",
              "music",
              "violin"
            ]
          },
          {
            "no":1189,
            "code":"U+1F941",
            "emoji":"🥁",
            "description":"DRUM WITH DRUMSTICKS",
            "flagged":true,
            "keywords":[
              "drum",
              "drumsticks",
              "music"
            ]
          },
          {
            "no":1190,
            "code":"U+1F4F1",
            "emoji":"📱",
            "description":"MOBILE PHONE",
            "flagged":false,
            "keywords":[
              "cell",
              "communication",
              "mobile",
              "phone",
              "telephone"
            ]
          },
          {
            "no":1191,
            "code":"U+1F4F2",
            "emoji":"📲",
            "description":"MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT≊ mobile phone with arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "call",
              "cell",
              "communication",
              "mobile",
              "phone",
              "receive",
              "telephone"
            ]
          },
          {
            "no":1192,
            "code":"U+260E",
            "emoji":"☎",
            "description":"BLACK TELEPHONE≊ telephone",
            "flagged":false,
            "keywords":[
              "phone",
              "telephone"
            ]
          },
          {
            "no":1193,
            "code":"U+1F4DE",
            "emoji":"📞",
            "description":"TELEPHONE RECEIVER",
            "flagged":false,
            "keywords":[
              "communication",
              "phone",
              "receiver",
              "telephone"
            ]
          },
          {
            "no":1194,
            "code":"U+1F4DF",
            "emoji":"📟",
            "description":"PAGER",
            "flagged":false,
            "keywords":[
              "communication",
              "pager"
            ]
          },
          {
            "no":1195,
            "code":"U+1F4E0",
            "emoji":"📠",
            "description":"FAX MACHINE",
            "flagged":false,
            "keywords":[
              "communication",
              "fax"
            ]
          },
          {
            "no":1196,
            "code":"U+1F50B",
            "emoji":"🔋",
            "description":"BATTERY",
            "flagged":false,
            "keywords":[
              "battery"
            ]
          },
          {
            "no":1197,
            "code":"U+1F50C",
            "emoji":"🔌",
            "description":"ELECTRIC PLUG",
            "flagged":false,
            "keywords":[
              "electric",
              "electricity",
              "plug"
            ]
          },
          {
            "no":1198,
            "code":"U+1F4BB",
            "emoji":"💻",
            "description":"PERSONAL COMPUTER≊ laptop computer",
            "flagged":false,
            "keywords":[
              "computer",
              "pc",
              "personal"
            ]
          },
          {
            "no":1199,
            "code":"U+1F5A5",
            "emoji":"🖥",
            "description":"DESKTOP COMPUTER",
            "flagged":false,
            "keywords":[
              "computer",
              "desktop"
            ]
          },
          {
            "no":1200,
            "code":"U+1F5A8",
            "emoji":"🖨",
            "description":"PRINTER",
            "flagged":false,
            "keywords":[
              "computer",
              "printer"
            ]
          },
          {
            "no":1201,
            "code":"U+2328",
            "emoji":"⌨",
            "description":"KEYBOARD",
            "flagged":false,
            "keywords":[
              "computer",
              "keyboard"
            ]
          },
          {
            "no":1202,
            "code":"U+1F5B1",
            "emoji":"🖱",
            "description":"THREE BUTTON MOUSE≊ computer mouse",
            "flagged":false,
            "keywords":[
              "3",
              "button",
              "computer",
              "mouse",
              "three"
            ]
          },
          {
            "no":1203,
            "code":"U+1F5B2",
            "emoji":"🖲",
            "description":"TRACKBALL",
            "flagged":false,
            "keywords":[
              "computer",
              "trackball"
            ]
          },
          {
            "no":1204,
            "code":"U+1F4BD",
            "emoji":"💽",
            "description":"MINIDISC",
            "flagged":false,
            "keywords":[
              "computer",
              "disk",
              "entertainment",
              "minidisk",
              "optical"
            ]
          },
          {
            "no":1205,
            "code":"U+1F4BE",
            "emoji":"💾",
            "description":"FLOPPY DISK",
            "flagged":false,
            "keywords":[
              "computer",
              "disk",
              "floppy"
            ]
          },
          {
            "no":1206,
            "code":"U+1F4BF",
            "emoji":"💿",
            "description":"OPTICAL DISC",
            "flagged":false,
            "keywords":[
              "blu-ray",
              "cd",
              "computer",
              "disk",
              "dvd",
              "optical"
            ]
          },
          {
            "no":1207,
            "code":"U+1F4C0",
            "emoji":"📀",
            "description":"DVD",
            "flagged":false,
            "keywords":[
              "blu-ray",
              "cd",
              "computer",
              "disk",
              "dvd",
              "entertainment",
              "optical"
            ]
          },
          {
            "no":1208,
            "code":"U+1F3A5",
            "emoji":"🎥",
            "description":"MOVIE CAMERA",
            "flagged":false,
            "keywords":[
              "activity",
              "camera",
              "cinema",
              "entertainment",
              "movie"
            ]
          },
          {
            "no":1209,
            "code":"U+1F39E",
            "emoji":"🎞",
            "description":"FILM FRAMES",
            "flagged":false,
            "keywords":[
              "cinema",
              "entertainment",
              "film",
              "frames",
              "movie"
            ]
          },
          {
            "no":1210,
            "code":"U+1F4FD",
            "emoji":"📽",
            "description":"FILM PROJECTOR",
            "flagged":false,
            "keywords":[
              "cinema",
              "entertainment",
              "film",
              "movie",
              "projector",
              "video"
            ]
          },
          {
            "no":1211,
            "code":"U+1F3AC",
            "emoji":"🎬",
            "description":"CLAPPER BOARD",
            "flagged":false,
            "keywords":[
              "activity",
              "clapper",
              "entertainment",
              "movie"
            ]
          },
          {
            "no":1212,
            "code":"U+1F4FA",
            "emoji":"📺",
            "description":"TELEVISION",
            "flagged":false,
            "keywords":[
              "entertainment",
              "television",
              "tv",
              "video"
            ]
          },
          {
            "no":1213,
            "code":"U+1F4F7",
            "emoji":"📷",
            "description":"CAMERA",
            "flagged":false,
            "keywords":[
              "camera",
              "entertainment",
              "video"
            ]
          },
          {
            "no":1214,
            "code":"U+1F4F8",
            "emoji":"📸",
            "description":"CAMERA WITH FLASH",
            "flagged":false,
            "keywords":[
              "camera",
              "flash",
              "video"
            ]
          },
          {
            "no":1215,
            "code":"U+1F4F9",
            "emoji":"📹",
            "description":"VIDEO CAMERA",
            "flagged":false,
            "keywords":[
              "camera",
              "entertainment",
              "video"
            ]
          },
          {
            "no":1216,
            "code":"U+1F4FC",
            "emoji":"📼",
            "description":"VIDEOCASSETTE",
            "flagged":false,
            "keywords":[
              "entertainment",
              "tape",
              "vhs",
              "video",
              "videocassette"
            ]
          },
          {
            "no":1217,
            "code":"U+1F50D",
            "emoji":"🔍",
            "description":"LEFT-POINTING MAGNIFYING GLASS",
            "flagged":false,
            "keywords":[
              "glass",
              "magnifying",
              "search",
              "tool"
            ]
          },
          {
            "no":1218,
            "code":"U+1F50E",
            "emoji":"🔎",
            "description":"RIGHT-POINTING MAGNIFYING GLASS",
            "flagged":false,
            "keywords":[
              "glass",
              "magnifying",
              "search",
              "tool"
            ]
          },
          {
            "no":1219,
            "code":"U+1F52C",
            "emoji":"🔬",
            "description":"MICROSCOPE",
            "flagged":false,
            "keywords":[
              "microscope",
              "tool"
            ]
          },
          {
            "no":1220,
            "code":"U+1F52D",
            "emoji":"🔭",
            "description":"TELESCOPE",
            "flagged":false,
            "keywords":[
              "telescope",
              "tool"
            ]
          },
          {
            "no":1221,
            "code":"U+1F4E1",
            "emoji":"📡",
            "description":"SATELLITE ANTENNA",
            "flagged":false,
            "keywords":[
              "antenna",
              "communication",
              "dish",
              "satellite"
            ]
          },
          {
            "no":1222,
            "code":"U+1F56F",
            "emoji":"🕯",
            "description":"CANDLE",
            "flagged":false,
            "keywords":[
              "candle",
              "light"
            ]
          },
          {
            "no":1223,
            "code":"U+1F4A1",
            "emoji":"💡",
            "description":"ELECTRIC LIGHT BULB≊ light bulb",
            "flagged":false,
            "keywords":[
              "bulb",
              "comic",
              "electric",
              "idea",
              "light"
            ]
          },
          {
            "no":1224,
            "code":"U+1F526",
            "emoji":"🔦",
            "description":"ELECTRIC TORCH≊ flashlight",
            "flagged":false,
            "keywords":[
              "electric",
              "flashlight",
              "light",
              "tool",
              "torch"
            ]
          },
          {
            "no":1225,
            "code":"U+1F3EE",
            "emoji":"🏮",
            "description":"IZAKAYA LANTERN≊ red paper lantern",
            "flagged":false,
            "keywords":[
              "bar",
              "japanese",
              "lantern",
              "light",
              "red"
            ]
          },
          {
            "no":1226,
            "code":"U+1F4D4",
            "emoji":"📔",
            "description":"NOTEBOOK WITH DECORATIVE COVER",
            "flagged":false,
            "keywords":[
              "book",
              "cover",
              "decorated",
              "notebook"
            ]
          },
          {
            "no":1227,
            "code":"U+1F4D5",
            "emoji":"📕",
            "description":"CLOSED BOOK",
            "flagged":false,
            "keywords":[
              "book",
              "closed"
            ]
          },
          {
            "no":1228,
            "code":"U+1F4D6",
            "emoji":"📖",
            "description":"OPEN BOOK",
            "flagged":false,
            "keywords":[
              "book",
              "open"
            ]
          },
          {
            "no":1229,
            "code":"U+1F4D7",
            "emoji":"📗",
            "description":"GREEN BOOK",
            "flagged":false,
            "keywords":[
              "book",
              "green"
            ]
          },
          {
            "no":1230,
            "code":"U+1F4D8",
            "emoji":"📘",
            "description":"BLUE BOOK",
            "flagged":false,
            "keywords":[
              "blue",
              "book"
            ]
          },
          {
            "no":1231,
            "code":"U+1F4D9",
            "emoji":"📙",
            "description":"ORANGE BOOK",
            "flagged":false,
            "keywords":[
              "book",
              "orange"
            ]
          },
          {
            "no":1232,
            "code":"U+1F4DA",
            "emoji":"📚",
            "description":"BOOKS",
            "flagged":false,
            "keywords":[
              "book",
              "books"
            ]
          },
          {
            "no":1233,
            "code":"U+1F4D3",
            "emoji":"📓",
            "description":"NOTEBOOK",
            "flagged":false,
            "keywords":[
              "notebook"
            ]
          },
          {
            "no":1234,
            "code":"U+1F4D2",
            "emoji":"📒",
            "description":"LEDGER",
            "flagged":false,
            "keywords":[
              "ledger",
              "notebook"
            ]
          },
          {
            "no":1235,
            "code":"U+1F4C3",
            "emoji":"📃",
            "description":"PAGE WITH CURL",
            "flagged":false,
            "keywords":[
              "curl",
              "document",
              "page"
            ]
          },
          {
            "no":1236,
            "code":"U+1F4DC",
            "emoji":"📜",
            "description":"SCROLL",
            "flagged":false,
            "keywords":[
              "paper",
              "scroll"
            ]
          },
          {
            "no":1237,
            "code":"U+1F4C4",
            "emoji":"📄",
            "description":"PAGE FACING UP",
            "flagged":false,
            "keywords":[
              "document",
              "page"
            ]
          },
          {
            "no":1238,
            "code":"U+1F4F0",
            "emoji":"📰",
            "description":"NEWSPAPER",
            "flagged":false,
            "keywords":[
              "communication",
              "news",
              "newspaper",
              "paper"
            ]
          },
          {
            "no":1239,
            "code":"U+1F5DE",
            "emoji":"🗞",
            "description":"ROLLED-UP NEWSPAPER",
            "flagged":false,
            "keywords":[
              "news",
              "newspaper",
              "paper",
              "rolled"
            ]
          },
          {
            "no":1240,
            "code":"U+1F4D1",
            "emoji":"📑",
            "description":"BOOKMARK TABS",
            "flagged":false,
            "keywords":[
              "bookmark",
              "mark",
              "marker",
              "tabs"
            ]
          },
          {
            "no":1241,
            "code":"U+1F516",
            "emoji":"🔖",
            "description":"BOOKMARK",
            "flagged":false,
            "keywords":[
              "bookmark",
              "mark"
            ]
          },
          {
            "no":1242,
            "code":"U+1F3F7",
            "emoji":"🏷",
            "description":"LABEL",
            "flagged":false,
            "keywords":[
              "label"
            ]
          },
          {
            "no":1243,
            "code":"U+1F4B0",
            "emoji":"💰",
            "description":"MONEY BAG",
            "flagged":false,
            "keywords":[
              "bag",
              "dollar",
              "money",
              "moneybag"
            ]
          },
          {
            "no":1244,
            "code":"U+1F4B4",
            "emoji":"💴",
            "description":"BANKNOTE WITH YEN SIGN≊ yen banknote",
            "flagged":false,
            "keywords":[
              "bank",
              "banknote",
              "bill",
              "currency",
              "money",
              "note",
              "yen"
            ]
          },
          {
            "no":1245,
            "code":"U+1F4B5",
            "emoji":"💵",
            "description":"BANKNOTE WITH DOLLAR SIGN≊ dollar banknote",
            "flagged":false,
            "keywords":[
              "bank",
              "banknote",
              "bill",
              "currency",
              "dollar",
              "money",
              "note"
            ]
          },
          {
            "no":1246,
            "code":"U+1F4B6",
            "emoji":"💶",
            "description":"BANKNOTE WITH EURO SIGN≊ euro banknote",
            "flagged":false,
            "keywords":[
              "bank",
              "banknote",
              "bill",
              "currency",
              "euro",
              "money",
              "note"
            ]
          },
          {
            "no":1247,
            "code":"U+1F4B7",
            "emoji":"💷",
            "description":"BANKNOTE WITH POUND SIGN≊ pound banknote",
            "flagged":false,
            "keywords":[
              "bank",
              "banknote",
              "bill",
              "currency",
              "money",
              "note",
              "pound"
            ]
          },
          {
            "no":1248,
            "code":"U+1F4B8",
            "emoji":"💸",
            "description":"MONEY WITH WINGS",
            "flagged":false,
            "keywords":[
              "bank",
              "banknote",
              "bill",
              "dollar",
              "fly",
              "money",
              "note",
              "wings"
            ]
          },
          {
            "no":1249,
            "code":"U+1F4B3",
            "emoji":"💳",
            "description":"CREDIT CARD",
            "flagged":false,
            "keywords":[
              "bank",
              "card",
              "credit",
              "money"
            ]
          },
          {
            "no":1250,
            "code":"U+1F4B9",
            "emoji":"💹",
            "description":"CHART WITH UPWARDS TREND AND YEN SIGN≊ chart increasing with yen",
            "flagged":false,
            "keywords":[
              "bank",
              "chart",
              "currency",
              "graph",
              "growth",
              "market",
              "money",
              "rise",
              "trend",
              "upward",
              "yen"
            ]
          },
          {
            "no":1251,
            "code":"U+1F4B1",
            "emoji":"💱",
            "description":"CURRENCY EXCHANGE",
            "flagged":false,
            "keywords":[
              "bank",
              "currency",
              "exchange",
              "money"
            ]
          },
          {
            "no":1252,
            "code":"U+1F4B2",
            "emoji":"💲",
            "description":"HEAVY DOLLAR SIGN",
            "flagged":false,
            "keywords":[
              "currency",
              "dollar",
              "money"
            ]
          },
          {
            "no":1253,
            "code":"U+2709",
            "emoji":"✉",
            "description":"ENVELOPE",
            "flagged":false,
            "keywords":[
              "e-mail",
              "email",
              "envelope"
            ]
          },
          {
            "no":1254,
            "code":"U+1F4E7",
            "emoji":"📧",
            "description":"E-MAIL SYMBOL≊ e-mail",
            "flagged":false,
            "keywords":[
              "communication",
              "e-mail",
              "email",
              "letter",
              "mail"
            ]
          },
          {
            "no":1255,
            "code":"U+1F4E8",
            "emoji":"📨",
            "description":"INCOMING ENVELOPE",
            "flagged":false,
            "keywords":[
              "communication",
              "e-mail",
              "email",
              "envelope",
              "incoming",
              "letter",
              "mail",
              "receive"
            ]
          },
          {
            "no":1256,
            "code":"U+1F4E9",
            "emoji":"📩",
            "description":"ENVELOPE WITH DOWNWARDS ARROW ABOVE≊ envelope with arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "communication",
              "down",
              "e-mail",
              "email",
              "envelope",
              "letter",
              "mail",
              "outgoing",
              "sent"
            ]
          },
          {
            "no":1257,
            "code":"U+1F4E4",
            "emoji":"📤",
            "description":"OUTBOX TRAY",
            "flagged":false,
            "keywords":[
              "box",
              "communication",
              "letter",
              "mail",
              "outbox",
              "sent",
              "tray"
            ]
          },
          {
            "no":1258,
            "code":"U+1F4E5",
            "emoji":"📥",
            "description":"INBOX TRAY",
            "flagged":false,
            "keywords":[
              "box",
              "communication",
              "inbox",
              "letter",
              "mail",
              "receive",
              "tray"
            ]
          },
          {
            "no":1259,
            "code":"U+1F4E6",
            "emoji":"📦",
            "description":"PACKAGE",
            "flagged":false,
            "keywords":[
              "box",
              "communication",
              "package",
              "parcel"
            ]
          },
          {
            "no":1260,
            "code":"U+1F4EB",
            "emoji":"📫",
            "description":"CLOSED MAILBOX WITH RAISED FLAG",
            "flagged":false,
            "keywords":[
              "closed",
              "communication",
              "flag",
              "mail",
              "mailbox",
              "postbox"
            ]
          },
          {
            "no":1261,
            "code":"U+1F4EA",
            "emoji":"📪",
            "description":"CLOSED MAILBOX WITH LOWERED FLAG",
            "flagged":false,
            "keywords":[
              "closed",
              "communication",
              "flag",
              "lowered",
              "mail",
              "mailbox",
              "postbox"
            ]
          },
          {
            "no":1262,
            "code":"U+1F4EC",
            "emoji":"📬",
            "description":"OPEN MAILBOX WITH RAISED FLAG",
            "flagged":false,
            "keywords":[
              "communication",
              "flag",
              "mail",
              "mailbox",
              "open",
              "postbox"
            ]
          },
          {
            "no":1263,
            "code":"U+1F4ED",
            "emoji":"📭",
            "description":"OPEN MAILBOX WITH LOWERED FLAG",
            "flagged":false,
            "keywords":[
              "communication",
              "flag",
              "lowered",
              "mail",
              "mailbox",
              "open",
              "postbox"
            ]
          },
          {
            "no":1264,
            "code":"U+1F4EE",
            "emoji":"📮",
            "description":"POSTBOX",
            "flagged":false,
            "keywords":[
              "communication",
              "mail",
              "mailbox",
              "postbox"
            ]
          },
          {
            "no":1265,
            "code":"U+1F5F3",
            "emoji":"🗳",
            "description":"BALLOT BOX WITH BALLOT",
            "flagged":false,
            "keywords":[
              "ballot",
              "box"
            ]
          },
          {
            "no":1266,
            "code":"U+270F",
            "emoji":"✏",
            "description":"PENCIL",
            "flagged":false,
            "keywords":[
              "pencil"
            ]
          },
          {
            "no":1267,
            "code":"U+2712",
            "emoji":"✒",
            "description":"BLACK NIB",
            "flagged":false,
            "keywords":[
              "nib",
              "pen"
            ]
          },
          {
            "no":1268,
            "code":"U+1F58B",
            "emoji":"🖋",
            "description":"LOWER LEFT FOUNTAIN PEN≊ fountain pen",
            "flagged":false,
            "keywords":[
              "communication",
              "fountain",
              "pen"
            ]
          },
          {
            "no":1269,
            "code":"U+1F58A",
            "emoji":"🖊",
            "description":"LOWER LEFT BALLPOINT PEN≊ pen",
            "flagged":false,
            "keywords":[
              "ballpoint",
              "communication",
              "pen"
            ]
          },
          {
            "no":1270,
            "code":"U+1F58C",
            "emoji":"🖌",
            "description":"LOWER LEFT PAINTBRUSH≊ paintbrush",
            "flagged":false,
            "keywords":[
              "communication",
              "paintbrush",
              "painting"
            ]
          },
          {
            "no":1271,
            "code":"U+1F58D",
            "emoji":"🖍",
            "description":"LOWER LEFT CRAYON≊ crayon",
            "flagged":false,
            "keywords":[
              "communication",
              "crayon"
            ]
          },
          {
            "no":1272,
            "code":"U+1F4DD",
            "emoji":"📝",
            "description":"MEMO",
            "flagged":false,
            "keywords":[
              "communication",
              "memo",
              "pencil"
            ]
          },
          {
            "no":1273,
            "code":"U+1F4BC",
            "emoji":"💼",
            "description":"BRIEFCASE",
            "flagged":false,
            "keywords":[
              "briefcase"
            ]
          },
          {
            "no":1274,
            "code":"U+1F4C1",
            "emoji":"📁",
            "description":"FILE FOLDER",
            "flagged":false,
            "keywords":[
              "file",
              "folder"
            ]
          },
          {
            "no":1275,
            "code":"U+1F4C2",
            "emoji":"📂",
            "description":"OPEN FILE FOLDER",
            "flagged":false,
            "keywords":[
              "file",
              "folder",
              "open"
            ]
          },
          {
            "no":1276,
            "code":"U+1F5C2",
            "emoji":"🗂",
            "description":"CARD INDEX DIVIDERS",
            "flagged":false,
            "keywords":[
              "card",
              "dividers",
              "index"
            ]
          },
          {
            "no":1277,
            "code":"U+1F4C5",
            "emoji":"📅",
            "description":"CALENDAR",
            "flagged":false,
            "keywords":[
              "calendar",
              "date"
            ]
          },
          {
            "no":1278,
            "code":"U+1F4C6",
            "emoji":"📆",
            "description":"TEAR-OFF CALENDAR",
            "flagged":false,
            "keywords":[
              "calendar"
            ]
          },
          {
            "no":1279,
            "code":"U+1F5D2",
            "emoji":"🗒",
            "description":"SPIRAL NOTE PAD≊ spiral notepad",
            "flagged":false,
            "keywords":[
              "note",
              "pad",
              "spiral"
            ]
          },
          {
            "no":1280,
            "code":"U+1F5D3",
            "emoji":"🗓",
            "description":"SPIRAL CALENDAR PAD≊ spiral calendar",
            "flagged":false,
            "keywords":[
              "calendar",
              "pad",
              "spiral"
            ]
          },
          {
            "no":1281,
            "code":"U+1F4C7",
            "emoji":"📇",
            "description":"CARD INDEX",
            "flagged":false,
            "keywords":[
              "card",
              "index",
              "rolodex"
            ]
          },
          {
            "no":1282,
            "code":"U+1F4C8",
            "emoji":"📈",
            "description":"CHART WITH UPWARDS TREND≊ chart increasing",
            "flagged":false,
            "keywords":[
              "chart",
              "graph",
              "growth",
              "trend",
              "upward"
            ]
          },
          {
            "no":1283,
            "code":"U+1F4C9",
            "emoji":"📉",
            "description":"CHART WITH DOWNWARDS TREND≊ chart decreasing",
            "flagged":false,
            "keywords":[
              "chart",
              "down",
              "graph",
              "trend"
            ]
          },
          {
            "no":1284,
            "code":"U+1F4CA",
            "emoji":"📊",
            "description":"BAR CHART",
            "flagged":false,
            "keywords":[
              "bar",
              "chart",
              "graph"
            ]
          },
          {
            "no":1285,
            "code":"U+1F4CB",
            "emoji":"📋",
            "description":"CLIPBOARD",
            "flagged":false,
            "keywords":[
              "clipboard"
            ]
          },
          {
            "no":1286,
            "code":"U+1F4CC",
            "emoji":"📌",
            "description":"PUSHPIN",
            "flagged":false,
            "keywords":[
              "pin",
              "pushpin"
            ]
          },
          {
            "no":1287,
            "code":"U+1F4CD",
            "emoji":"📍",
            "description":"ROUND PUSHPIN",
            "flagged":false,
            "keywords":[
              "pin",
              "pushpin"
            ]
          },
          {
            "no":1288,
            "code":"U+1F4CE",
            "emoji":"📎",
            "description":"PAPERCLIP",
            "flagged":false,
            "keywords":[
              "paperclip"
            ]
          },
          {
            "no":1289,
            "code":"U+1F587",
            "emoji":"🖇",
            "description":"LINKED PAPERCLIPS",
            "flagged":false,
            "keywords":[
              "communication",
              "link",
              "paperclip"
            ]
          },
          {
            "no":1290,
            "code":"U+1F4CF",
            "emoji":"📏",
            "description":"STRAIGHT RULER",
            "flagged":false,
            "keywords":[
              "ruler",
              "straight edge"
            ]
          },
          {
            "no":1291,
            "code":"U+1F4D0",
            "emoji":"📐",
            "description":"TRIANGULAR RULER",
            "flagged":false,
            "keywords":[
              "ruler",
              "set",
              "triangle"
            ]
          },
          {
            "no":1292,
            "code":"U+2702",
            "emoji":"✂",
            "description":"BLACK SCISSORS≊ scissors",
            "flagged":false,
            "keywords":[
              "scissors",
              "tool"
            ]
          },
          {
            "no":1293,
            "code":"U+1F5C3",
            "emoji":"🗃",
            "description":"CARD FILE BOX",
            "flagged":false,
            "keywords":[
              "box",
              "card",
              "file"
            ]
          },
          {
            "no":1294,
            "code":"U+1F5C4",
            "emoji":"🗄",
            "description":"FILE CABINET",
            "flagged":false,
            "keywords":[
              "cabinet",
              "file"
            ]
          },
          {
            "no":1295,
            "code":"U+1F5D1",
            "emoji":"🗑",
            "description":"WASTEBASKET",
            "flagged":false,
            "keywords":[
              "wastebasket"
            ]
          },
          {
            "no":1296,
            "code":"U+1F512",
            "emoji":"🔒",
            "description":"LOCK",
            "flagged":false,
            "keywords":[
              "closed",
              "lock"
            ]
          },
          {
            "no":1297,
            "code":"U+1F513",
            "emoji":"🔓",
            "description":"OPEN LOCK",
            "flagged":false,
            "keywords":[
              "lock",
              "open",
              "unlock"
            ]
          },
          {
            "no":1298,
            "code":"U+1F50F",
            "emoji":"🔏",
            "description":"LOCK WITH INK PEN≊ lock with pen",
            "flagged":false,
            "keywords":[
              "ink",
              "lock",
              "nib",
              "pen",
              "privacy"
            ]
          },
          {
            "no":1299,
            "code":"U+1F510",
            "emoji":"🔐",
            "description":"CLOSED LOCK WITH KEY",
            "flagged":false,
            "keywords":[
              "closed",
              "key",
              "lock",
              "secure"
            ]
          },
          {
            "no":1300,
            "code":"U+1F511",
            "emoji":"🔑",
            "description":"KEY",
            "flagged":false,
            "keywords":[
              "key",
              "lock",
              "password"
            ]
          },
          {
            "no":1301,
            "code":"U+1F5DD",
            "emoji":"🗝",
            "description":"OLD KEY",
            "flagged":false,
            "keywords":[
              "clue",
              "key",
              "lock",
              "old"
            ]
          },
          {
            "no":1302,
            "code":"U+1F528",
            "emoji":"🔨",
            "description":"HAMMER",
            "flagged":false,
            "keywords":[
              "hammer",
              "tool"
            ]
          },
          {
            "no":1303,
            "code":"U+26CF",
            "emoji":"⛏",
            "description":"PICK",
            "flagged":false,
            "keywords":[
              "mining",
              "pick",
              "tool"
            ]
          },
          {
            "no":1304,
            "code":"U+2692",
            "emoji":"⚒",
            "description":"HAMMER AND PICK",
            "flagged":false,
            "keywords":[
              "hammer",
              "pick",
              "tool"
            ]
          },
          {
            "no":1305,
            "code":"U+1F6E0",
            "emoji":"🛠",
            "description":"HAMMER AND WRENCH",
            "flagged":false,
            "keywords":[
              "hammer",
              "tool",
              "wrench"
            ]
          },
          {
            "no":1306,
            "code":"U+1F5E1",
            "emoji":"🗡",
            "description":"DAGGER KNIFE≊ dagger",
            "flagged":false,
            "keywords":[
              "dagger",
              "knife",
              "weapon"
            ]
          },
          {
            "no":1307,
            "code":"U+2694",
            "emoji":"⚔",
            "description":"CROSSED SWORDS",
            "flagged":false,
            "keywords":[
              "crossed",
              "swords",
              "weapon"
            ]
          },
          {
            "no":1308,
            "code":"U+1F52B",
            "emoji":"🔫",
            "description":"PISTOL",
            "flagged":false,
            "keywords":[
              "gun",
              "handgun",
              "pistol",
              "revolver",
              "tool",
              "weapon"
            ]
          },
          {
            "no":1309,
            "code":"U+1F3F9",
            "emoji":"🏹",
            "description":"BOW AND ARROW",
            "flagged":false,
            "keywords":[
              "archer",
              "arrow",
              "bow",
              "sagittarius",
              "tool",
              "weapon",
              "zodiac"
            ]
          },
          {
            "no":1310,
            "code":"U+1F6E1",
            "emoji":"🛡",
            "description":"SHIELD",
            "flagged":false,
            "keywords":[
              "shield",
              "weapon"
            ]
          },
          {
            "no":1311,
            "code":"U+1F527",
            "emoji":"🔧",
            "description":"WRENCH",
            "flagged":false,
            "keywords":[
              "tool",
              "wrench"
            ]
          },
          {
            "no":1312,
            "code":"U+1F529",
            "emoji":"🔩",
            "description":"NUT AND BOLT",
            "flagged":false,
            "keywords":[
              "bolt",
              "nut",
              "tool"
            ]
          },
          {
            "no":1313,
            "code":"U+2699",
            "emoji":"⚙",
            "description":"GEAR",
            "flagged":false,
            "keywords":[
              "gear",
              "tool"
            ]
          },
          {
            "no":1314,
            "code":"U+1F5DC",
            "emoji":"🗜",
            "description":"COMPRESSION",
            "flagged":false,
            "keywords":[
              "compression",
              "tool",
              "vice"
            ]
          },
          {
            "no":1315,
            "code":"U+2697",
            "emoji":"⚗",
            "description":"ALEMBIC",
            "flagged":false,
            "keywords":[
              "alembic",
              "chemistry",
              "tool"
            ]
          },
          {
            "no":1316,
            "code":"U+2696",
            "emoji":"⚖",
            "description":"SCALES≊ balance scale",
            "flagged":false,
            "keywords":[
              "balance",
              "justice",
              "libra",
              "scales",
              "tool",
              "weight",
              "zodiac"
            ]
          },
          {
            "no":1317,
            "code":"U+1F517",
            "emoji":"🔗",
            "description":"LINK SYMBOL≊ link",
            "flagged":false,
            "keywords":[
              "link"
            ]
          },
          {
            "no":1318,
            "code":"U+26D3",
            "emoji":"⛓",
            "description":"CHAINS",
            "flagged":false,
            "keywords":[
              "chain"
            ]
          },
          {
            "no":1319,
            "code":"U+1F489",
            "emoji":"💉",
            "description":"SYRINGE",
            "flagged":false,
            "keywords":[
              "doctor",
              "medicine",
              "needle",
              "shot",
              "sick",
              "syringe",
              "tool"
            ]
          },
          {
            "no":1320,
            "code":"U+1F48A",
            "emoji":"💊",
            "description":"PILL",
            "flagged":false,
            "keywords":[
              "doctor",
              "medicine",
              "pill",
              "sick"
            ]
          },
          {
            "no":1321,
            "code":"U+1F6AC",
            "emoji":"🚬",
            "description":"SMOKING SYMBOL≊ smoking",
            "flagged":false,
            "keywords":[
              "activity",
              "smoking"
            ]
          },
          {
            "no":1322,
            "code":"U+26B0",
            "emoji":"⚰",
            "description":"COFFIN",
            "flagged":false,
            "keywords":[
              "coffin",
              "death"
            ]
          },
          {
            "no":1323,
            "code":"U+26B1",
            "emoji":"⚱",
            "description":"FUNERAL URN",
            "flagged":false,
            "keywords":[
              "death",
              "funeral",
              "urn"
            ]
          },
          {
            "no":1324,
            "code":"U+1F5FF",
            "emoji":"🗿",
            "description":"MOYAI≊ moai",
            "flagged":false,
            "keywords":[
              "face",
              "moyai",
              "statue"
            ]
          },
          {
            "no":1325,
            "code":"U+1F6E2",
            "emoji":"🛢",
            "description":"OIL DRUM",
            "flagged":false,
            "keywords":[
              "drum",
              "oil"
            ]
          },
          {
            "no":1326,
            "code":"U+1F52E",
            "emoji":"🔮",
            "description":"CRYSTAL BALL",
            "flagged":false,
            "keywords":[
              "ball",
              "crystal",
              "fairy tale",
              "fantasy",
              "fortune",
              "tool"
            ]
          },
          {
            "no":1327,
            "code":"U+1F6D2",
            "emoji":"🛒",
            "description":"SHOPPING TROLLEY",
            "flagged":true,
            "keywords":[
              "cart",
              "shopping",
              "trolley"
            ]
          }
        ],
        "Symbols":[
          {
            "no":1328,
            "code":"U+1F3E7",
            "emoji":"🏧",
            "description":"AUTOMATED TELLER MACHINE≊ ATM sign",
            "flagged":false,
            "keywords":[
              "atm",
              "automated",
              "bank",
              "teller"
            ]
          },
          {
            "no":1329,
            "code":"U+1F6AE",
            "emoji":"🚮",
            "description":"PUT LITTER IN ITS PLACE SYMBOL≊ litter in bin sign",
            "flagged":false,
            "keywords":[
              "litter",
              "litterbox"
            ]
          },
          {
            "no":1330,
            "code":"U+1F6B0",
            "emoji":"🚰",
            "description":"POTABLE WATER SYMBOL≊ potable water",
            "flagged":false,
            "keywords":[
              "drink",
              "potable",
              "water"
            ]
          },
          {
            "no":1331,
            "code":"U+267F",
            "emoji":"♿",
            "description":"WHEELCHAIR SYMBOL≊ wheelchair",
            "flagged":false,
            "keywords":[
              "access",
              "wheelchair"
            ]
          },
          {
            "no":1332,
            "code":"U+1F6B9",
            "emoji":"🚹",
            "description":"MENS SYMBOL≊ men’s room",
            "flagged":false,
            "keywords":[
              "lavatory",
              "man",
              "restroom",
              "wc"
            ]
          },
          {
            "no":1333,
            "code":"U+1F6BA",
            "emoji":"🚺",
            "description":"WOMENS SYMBOL≊ women’s room",
            "flagged":false,
            "keywords":[
              "lavatory",
              "restroom",
              "wc",
              "woman"
            ]
          },
          {
            "no":1334,
            "code":"U+1F6BB",
            "emoji":"🚻",
            "description":"RESTROOM",
            "flagged":false,
            "keywords":[
              "lavatory",
              "restroom",
              "wc"
            ]
          },
          {
            "no":1335,
            "code":"U+1F6BC",
            "emoji":"🚼",
            "description":"BABY SYMBOL",
            "flagged":false,
            "keywords":[
              "baby",
              "changing"
            ]
          },
          {
            "no":1336,
            "code":"U+1F6BE",
            "emoji":"🚾",
            "description":"WATER CLOSET",
            "flagged":false,
            "keywords":[
              "closet",
              "lavatory",
              "restroom",
              "water",
              "wc"
            ]
          },
          {
            "no":1337,
            "code":"U+1F6C2",
            "emoji":"🛂",
            "description":"PASSPORT CONTROL",
            "flagged":false,
            "keywords":[
              "control",
              "passport"
            ]
          },
          {
            "no":1338,
            "code":"U+1F6C3",
            "emoji":"🛃",
            "description":"CUSTOMS",
            "flagged":false,
            "keywords":[
              "customs"
            ]
          },
          {
            "no":1339,
            "code":"U+1F6C4",
            "emoji":"🛄",
            "description":"BAGGAGE CLAIM",
            "flagged":false,
            "keywords":[
              "baggage",
              "claim"
            ]
          },
          {
            "no":1340,
            "code":"U+1F6C5",
            "emoji":"🛅",
            "description":"LEFT LUGGAGE",
            "flagged":false,
            "keywords":[
              "baggage",
              "left luggage",
              "locker",
              "luggage"
            ]
          },
          {
            "no":1341,
            "code":"U+26A0",
            "emoji":"⚠",
            "description":"WARNING SIGN≊ warning",
            "flagged":false,
            "keywords":[
              "warning"
            ]
          },
          {
            "no":1342,
            "code":"U+1F6B8",
            "emoji":"🚸",
            "description":"CHILDREN CROSSING",
            "flagged":false,
            "keywords":[
              "child",
              "crossing",
              "pedestrian",
              "traffic"
            ]
          },
          {
            "no":1343,
            "code":"U+26D4",
            "emoji":"⛔",
            "description":"NO ENTRY",
            "flagged":false,
            "keywords":[
              "entry",
              "forbidden",
              "no",
              "not",
              "prohibited",
              "traffic"
            ]
          },
          {
            "no":1344,
            "code":"U+1F6AB",
            "emoji":"🚫",
            "description":"NO ENTRY SIGN≊ prohibited",
            "flagged":false,
            "keywords":[
              "entry",
              "forbidden",
              "no",
              "not",
              "prohibited"
            ]
          },
          {
            "no":1345,
            "code":"U+1F6B3",
            "emoji":"🚳",
            "description":"NO BICYCLES",
            "flagged":false,
            "keywords":[
              "bicycle",
              "bike",
              "forbidden",
              "no",
              "not",
              "prohibited",
              "vehicle"
            ]
          },
          {
            "no":1346,
            "code":"U+1F6AD",
            "emoji":"🚭",
            "description":"NO SMOKING SYMBOL≊ no smoking",
            "flagged":false,
            "keywords":[
              "forbidden",
              "no",
              "not",
              "prohibited",
              "smoking"
            ]
          },
          {
            "no":1347,
            "code":"U+1F6AF",
            "emoji":"🚯",
            "description":"DO NOT LITTER SYMBOL≊ no littering",
            "flagged":false,
            "keywords":[
              "forbidden",
              "litter",
              "no",
              "not",
              "prohibited"
            ]
          },
          {
            "no":1348,
            "code":"U+1F6B1",
            "emoji":"🚱",
            "description":"NON-POTABLE WATER SYMBOL≊ non-potable water",
            "flagged":false,
            "keywords":[
              "drink",
              "forbidden",
              "no",
              "not",
              "potable",
              "prohibited",
              "water"
            ]
          },
          {
            "no":1349,
            "code":"U+1F6B7",
            "emoji":"🚷",
            "description":"NO PEDESTRIANS",
            "flagged":false,
            "keywords":[
              "forbidden",
              "no",
              "not",
              "pedestrian",
              "prohibited"
            ]
          },
          {
            "no":1350,
            "code":"U+1F4F5",
            "emoji":"📵",
            "description":"NO MOBILE PHONES",
            "flagged":false,
            "keywords":[
              "cell",
              "communication",
              "forbidden",
              "mobile",
              "no",
              "not",
              "phone",
              "prohibited",
              "telephone"
            ]
          },
          {
            "no":1351,
            "code":"U+1F51E",
            "emoji":"🔞",
            "description":"NO ONE UNDER EIGHTEEN SYMBOL≊ no one under eighteen",
            "flagged":false,
            "keywords":[
              "18",
              "age restriction",
              "eighteen",
              "forbidden",
              "no",
              "not",
              "prohibited",
              "underage"
            ]
          },
          {
            "no":1352,
            "code":"U+2622",
            "emoji":"☢",
            "description":"RADIOACTIVE SIGN≊ radioactive",
            "flagged":false,
            "keywords":[
              "radioactive"
            ]
          },
          {
            "no":1353,
            "code":"U+2623",
            "emoji":"☣",
            "description":"BIOHAZARD SIGN≊ biohazard",
            "flagged":false,
            "keywords":[
              "biohazard"
            ]
          },
          {
            "no":1354,
            "code":"U+2B06",
            "emoji":"⬆",
            "description":"UPWARDS BLACK ARROW≊ up arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "cardinal",
              "direction",
              "north"
            ]
          },
          {
            "no":1355,
            "code":"U+2197",
            "emoji":"↗",
            "description":"NORTH EAST ARROW≊ up-right arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "direction",
              "intercardinal",
              "northeast"
            ]
          },
          {
            "no":1356,
            "code":"U+27A1",
            "emoji":"➡",
            "description":"BLACK RIGHTWARDS ARROW≊ right arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "cardinal",
              "direction",
              "east"
            ]
          },
          {
            "no":1357,
            "code":"U+2198",
            "emoji":"↘",
            "description":"SOUTH EAST ARROW≊ down-right arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "direction",
              "intercardinal",
              "southeast"
            ]
          },
          {
            "no":1358,
            "code":"U+2B07",
            "emoji":"⬇",
            "description":"DOWNWARDS BLACK ARROW≊ down arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "cardinal",
              "direction",
              "down",
              "south"
            ]
          },
          {
            "no":1359,
            "code":"U+2199",
            "emoji":"↙",
            "description":"SOUTH WEST ARROW≊ down-left arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "direction",
              "intercardinal",
              "southwest"
            ]
          },
          {
            "no":1360,
            "code":"U+2B05",
            "emoji":"⬅",
            "description":"LEFTWARDS BLACK ARROW≊ left arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "cardinal",
              "direction",
              "west"
            ]
          },
          {
            "no":1361,
            "code":"U+2196",
            "emoji":"↖",
            "description":"NORTH WEST ARROW≊ up-left arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "direction",
              "intercardinal",
              "northwest"
            ]
          },
          {
            "no":1362,
            "code":"U+2195",
            "emoji":"↕",
            "description":"UP DOWN ARROW≊ up-down arrow",
            "flagged":false,
            "keywords":[
              "arrow"
            ]
          },
          {
            "no":1363,
            "code":"U+2194",
            "emoji":"↔",
            "description":"LEFT RIGHT ARROW≊ left-right arrow",
            "flagged":false,
            "keywords":[
              "arrow"
            ]
          },
          {
            "no":1364,
            "code":"U+21A9",
            "emoji":"↩",
            "description":"LEFTWARDS ARROW WITH HOOK≊ right arrow curving left",
            "flagged":false,
            "keywords":[
              "arrow"
            ]
          },
          {
            "no":1365,
            "code":"U+21AA",
            "emoji":"↪",
            "description":"RIGHTWARDS ARROW WITH HOOK≊ left arrow curving right",
            "flagged":false,
            "keywords":[
              "arrow"
            ]
          },
          {
            "no":1366,
            "code":"U+2934",
            "emoji":"⤴",
            "description":"ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS≊ right arrow curving up",
            "flagged":false,
            "keywords":[
              "arrow"
            ]
          },
          {
            "no":1367,
            "code":"U+2935",
            "emoji":"⤵",
            "description":"ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS≊ right arrow curving down",
            "flagged":false,
            "keywords":[
              "arrow",
              "down"
            ]
          },
          {
            "no":1368,
            "code":"U+1F503",
            "emoji":"🔃",
            "description":"CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS≊ clockwise vertical arrows",
            "flagged":false,
            "keywords":[
              "arrow",
              "clockwise",
              "reload"
            ]
          },
          {
            "no":1369,
            "code":"U+1F504",
            "emoji":"🔄",
            "description":"ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS≊ anticlockwise arrows button",
            "flagged":false,
            "keywords":[
              "anticlockwise",
              "arrow",
              "counterclockwise",
              "withershins"
            ]
          },
          {
            "no":1370,
            "code":"U+1F519",
            "emoji":"🔙",
            "description":"BACK WITH LEFTWARDS ARROW ABOVE≊ back arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "back"
            ]
          },
          {
            "no":1371,
            "code":"U+1F51A",
            "emoji":"🔚",
            "description":"END WITH LEFTWARDS ARROW ABOVE≊ end arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "end"
            ]
          },
          {
            "no":1372,
            "code":"U+1F51B",
            "emoji":"🔛",
            "description":"ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE≊ on! arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "mark",
              "on"
            ]
          },
          {
            "no":1373,
            "code":"U+1F51C",
            "emoji":"🔜",
            "description":"SOON WITH RIGHTWARDS ARROW ABOVE≊ soon arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "soon"
            ]
          },
          {
            "no":1374,
            "code":"U+1F51D",
            "emoji":"🔝",
            "description":"TOP WITH UPWARDS ARROW ABOVE≊ top arrow",
            "flagged":false,
            "keywords":[
              "arrow",
              "top",
              "up"
            ]
          },
          {
            "no":1375,
            "code":"U+1F6D0",
            "emoji":"🛐",
            "description":"PLACE OF WORSHIP",
            "flagged":false,
            "keywords":[
              "religion",
              "worship"
            ]
          },
          {
            "no":1376,
            "code":"U+269B",
            "emoji":"⚛",
            "description":"ATOM SYMBOL",
            "flagged":false,
            "keywords":[
              "atheist",
              "atom"
            ]
          },
          {
            "no":1377,
            "code":"U+1F549",
            "emoji":"🕉",
            "description":"OM SYMBOL≊ om",
            "flagged":false,
            "keywords":[
              "hindu",
              "om",
              "religion"
            ]
          },
          {
            "no":1378,
            "code":"U+2721",
            "emoji":"✡",
            "description":"STAR OF DAVID",
            "flagged":false,
            "keywords":[
              "david",
              "jew",
              "jewish",
              "religion",
              "star"
            ]
          },
          {
            "no":1379,
            "code":"U+2638",
            "emoji":"☸",
            "description":"WHEEL OF DHARMA",
            "flagged":false,
            "keywords":[
              "buddhist",
              "dharma",
              "religion",
              "wheel"
            ]
          },
          {
            "no":1380,
            "code":"U+262F",
            "emoji":"☯",
            "description":"YIN YANG",
            "flagged":false,
            "keywords":[
              "religion",
              "tao",
              "taoist",
              "yang",
              "yin"
            ]
          },
          {
            "no":1381,
            "code":"U+271D",
            "emoji":"✝",
            "description":"LATIN CROSS",
            "flagged":false,
            "keywords":[
              "christian",
              "cross",
              "religion"
            ]
          },
          {
            "no":1382,
            "code":"U+2626",
            "emoji":"☦",
            "description":"ORTHODOX CROSS",
            "flagged":false,
            "keywords":[
              "christian",
              "cross",
              "religion"
            ]
          },
          {
            "no":1383,
            "code":"U+262A",
            "emoji":"☪",
            "description":"STAR AND CRESCENT",
            "flagged":false,
            "keywords":[
              "islam",
              "muslim",
              "religion"
            ]
          },
          {
            "no":1384,
            "code":"U+262E",
            "emoji":"☮",
            "description":"PEACE SYMBOL",
            "flagged":false,
            "keywords":[
              "peace"
            ]
          },
          {
            "no":1385,
            "code":"U+1F54E",
            "emoji":"🕎",
            "description":"MENORAH WITH NINE BRANCHES≊ menorah",
            "flagged":false,
            "keywords":[
              "candelabrum",
              "candlestick",
              "menorah",
              "religion"
            ]
          },
          {
            "no":1386,
            "code":"U+1F52F",
            "emoji":"🔯",
            "description":"SIX POINTED STAR WITH MIDDLE DOT≊ dotted six-pointed star",
            "flagged":false,
            "keywords":[
              "fortune",
              "star"
            ]
          },
          {
            "no":1387,
            "code":"U+267B",
            "emoji":"♻",
            "description":"BLACK UNIVERSAL RECYCLING SYMBOL≊ recycling symbol",
            "flagged":false,
            "keywords":[
              "recycle"
            ]
          },
          {
            "no":1388,
            "code":"U+1F4DB",
            "emoji":"📛",
            "description":"NAME BADGE",
            "flagged":false,
            "keywords":[
              "badge",
              "name"
            ]
          },
          {
            "no":1389,
            "code":"U+269C",
            "emoji":"⚜",
            "description":"FLEUR-DE-LIS",
            "flagged":false,
            "keywords":[
              "fleur-de-lis"
            ]
          },
          {
            "no":1390,
            "code":"U+1F530",
            "emoji":"🔰",
            "description":"JAPANESE SYMBOL FOR BEGINNER",
            "flagged":false,
            "keywords":[
              "beginner",
              "chevron",
              "green",
              "japanese",
              "leaf",
              "tool",
              "yellow"
            ]
          },
          {
            "no":1391,
            "code":"U+1F531",
            "emoji":"🔱",
            "description":"TRIDENT EMBLEM",
            "flagged":false,
            "keywords":[
              "anchor",
              "emblem",
              "ship",
              "tool",
              "trident"
            ]
          },
          {
            "no":1392,
            "code":"U+2B55",
            "emoji":"⭕",
            "description":"HEAVY LARGE CIRCLE",
            "flagged":false,
            "keywords":[
              "circle",
              "o"
            ]
          },
          {
            "no":1393,
            "code":"U+2705",
            "emoji":"✅",
            "description":"WHITE HEAVY CHECK MARK",
            "flagged":false,
            "keywords":[
              "check",
              "mark"
            ]
          },
          {
            "no":1394,
            "code":"U+2611",
            "emoji":"☑",
            "description":"BALLOT BOX WITH CHECK",
            "flagged":false,
            "keywords":[
              "ballot",
              "box",
              "check"
            ]
          },
          {
            "no":1395,
            "code":"U+2714",
            "emoji":"✔",
            "description":"HEAVY CHECK MARK",
            "flagged":false,
            "keywords":[
              "check",
              "mark"
            ]
          },
          {
            "no":1396,
            "code":"U+2716",
            "emoji":"✖",
            "description":"HEAVY MULTIPLICATION X",
            "flagged":false,
            "keywords":[
              "cancel",
              "multiplication",
              "multiply",
              "x"
            ]
          },
          {
            "no":1397,
            "code":"U+274C",
            "emoji":"❌",
            "description":"CROSS MARK",
            "flagged":false,
            "keywords":[
              "cancel",
              "mark",
              "multiplication",
              "multiply",
              "x"
            ]
          },
          {
            "no":1398,
            "code":"U+274E",
            "emoji":"❎",
            "description":"NEGATIVE SQUARED CROSS MARK≊ cross mark button",
            "flagged":false,
            "keywords":[
              "mark",
              "square"
            ]
          },
          {
            "no":1399,
            "code":"U+2795",
            "emoji":"➕",
            "description":"HEAVY PLUS SIGN",
            "flagged":false,
            "keywords":[
              "math",
              "plus"
            ]
          },
          {
            "no":1400,
            "code":"U+2796",
            "emoji":"➖",
            "description":"HEAVY MINUS SIGN",
            "flagged":false,
            "keywords":[
              "math",
              "minus"
            ]
          },
          {
            "no":1401,
            "code":"U+2797",
            "emoji":"➗",
            "description":"HEAVY DIVISION SIGN",
            "flagged":false,
            "keywords":[
              "division",
              "math"
            ]
          },
          {
            "no":1402,
            "code":"U+27B0",
            "emoji":"➰",
            "description":"CURLY LOOP",
            "flagged":false,
            "keywords":[
              "curl",
              "loop"
            ]
          },
          {
            "no":1403,
            "code":"U+27BF",
            "emoji":"➿",
            "description":"DOUBLE CURLY LOOP",
            "flagged":false,
            "keywords":[
              "curl",
              "double",
              "loop"
            ]
          },
          {
            "no":1404,
            "code":"U+303D",
            "emoji":"〽",
            "description":"PART ALTERNATION MARK",
            "flagged":false,
            "keywords":[
              "mark",
              "part"
            ]
          },
          {
            "no":1405,
            "code":"U+2733",
            "emoji":"✳",
            "description":"EIGHT SPOKED ASTERISK≊ eight-spoked asterisk",
            "flagged":false,
            "keywords":[
              "asterisk"
            ]
          },
          {
            "no":1406,
            "code":"U+2734",
            "emoji":"✴",
            "description":"EIGHT POINTED BLACK STAR≊ eight-pointed star",
            "flagged":false,
            "keywords":[
              "star"
            ]
          },
          {
            "no":1407,
            "code":"U+2747",
            "emoji":"❇",
            "description":"SPARKLE",
            "flagged":false,
            "keywords":[
              "sparkle"
            ]
          },
          {
            "no":1408,
            "code":"U+203C",
            "emoji":"‼",
            "description":"DOUBLE EXCLAMATION MARK",
            "flagged":false,
            "keywords":[
              "bangbang",
              "exclamation",
              "mark",
              "punctuation"
            ]
          },
          {
            "no":1409,
            "code":"U+2049",
            "emoji":"⁉",
            "description":"EXCLAMATION QUESTION MARK",
            "flagged":false,
            "keywords":[
              "exclamation",
              "interrobang",
              "mark",
              "punctuation",
              "question"
            ]
          },
          {
            "no":1410,
            "code":"U+2753",
            "emoji":"❓",
            "description":"BLACK QUESTION MARK ORNAMENT≊ question mark",
            "flagged":false,
            "keywords":[
              "mark",
              "punctuation",
              "question"
            ]
          },
          {
            "no":1411,
            "code":"U+2754",
            "emoji":"❔",
            "description":"WHITE QUESTION MARK ORNAMENT≊ white question mark",
            "flagged":false,
            "keywords":[
              "mark",
              "outlined",
              "punctuation",
              "question"
            ]
          },
          {
            "no":1412,
            "code":"U+2755",
            "emoji":"❕",
            "description":"WHITE EXCLAMATION MARK ORNAMENT≊ white exclamation mark",
            "flagged":false,
            "keywords":[
              "exclamation",
              "mark",
              "outlined",
              "punctuation"
            ]
          },
          {
            "no":1413,
            "code":"U+2757",
            "emoji":"❗",
            "description":"HEAVY EXCLAMATION MARK SYMBOL≊ exclamation mark",
            "flagged":false,
            "keywords":[
              "exclamation",
              "mark",
              "punctuation"
            ]
          },
          {
            "no":1414,
            "code":"U+3030",
            "emoji":"〰",
            "description":"WAVY DASH",
            "flagged":false,
            "keywords":[
              "dash",
              "punctuation",
              "wavy"
            ]
          },
          {
            "no":1415,
            "code":"U+00A9",
            "emoji":"©",
            "description":"COPYRIGHT SIGN≊ copyright",
            "flagged":false,
            "keywords":[
              "copyright"
            ]
          },
          {
            "no":1416,
            "code":"U+00AE",
            "emoji":"®",
            "description":"REGISTERED SIGN≊ registered",
            "flagged":false,
            "keywords":[
              "registered"
            ]
          },
          {
            "no":1417,
            "code":"U+2122",
            "emoji":"™",
            "description":"TRADE MARK SIGN≊ trade mark",
            "flagged":false,
            "keywords":[
              "mark",
              "tm",
              "trademark"
            ]
          },
          {
            "no":1418,
            "code":"U+2648",
            "emoji":"♈",
            "description":"ARIES",
            "flagged":false,
            "keywords":[
              "aries",
              "ram",
              "zodiac"
            ]
          },
          {
            "no":1419,
            "code":"U+2649",
            "emoji":"♉",
            "description":"TAURUS",
            "flagged":false,
            "keywords":[
              "bull",
              "ox",
              "taurus",
              "zodiac"
            ]
          },
          {
            "no":1420,
            "code":"U+264A",
            "emoji":"♊",
            "description":"GEMINI",
            "flagged":false,
            "keywords":[
              "gemini",
              "twins",
              "zodiac"
            ]
          },
          {
            "no":1421,
            "code":"U+264B",
            "emoji":"♋",
            "description":"CANCER",
            "flagged":false,
            "keywords":[
              "cancer",
              "crab",
              "zodiac"
            ]
          },
          {
            "no":1422,
            "code":"U+264C",
            "emoji":"♌",
            "description":"LEO",
            "flagged":false,
            "keywords":[
              "leo",
              "lion",
              "zodiac"
            ]
          },
          {
            "no":1423,
            "code":"U+264D",
            "emoji":"♍",
            "description":"VIRGO",
            "flagged":false,
            "keywords":[
              "maiden",
              "virgin",
              "virgo",
              "zodiac"
            ]
          },
          {
            "no":1424,
            "code":"U+264E",
            "emoji":"♎",
            "description":"LIBRA",
            "flagged":false,
            "keywords":[
              "balance",
              "justice",
              "libra",
              "scales",
              "zodiac"
            ]
          },
          {
            "no":1425,
            "code":"U+264F",
            "emoji":"♏",
            "description":"SCORPIUS",
            "flagged":false,
            "keywords":[
              "scorpio",
              "scorpion",
              "scorpius",
              "zodiac"
            ]
          },
          {
            "no":1426,
            "code":"U+2650",
            "emoji":"♐",
            "description":"SAGITTARIUS",
            "flagged":false,
            "keywords":[
              "archer",
              "sagittarius",
              "zodiac"
            ]
          },
          {
            "no":1427,
            "code":"U+2651",
            "emoji":"♑",
            "description":"CAPRICORN",
            "flagged":false,
            "keywords":[
              "capricorn",
              "goat",
              "zodiac"
            ]
          },
          {
            "no":1428,
            "code":"U+2652",
            "emoji":"♒",
            "description":"AQUARIUS",
            "flagged":false,
            "keywords":[
              "aquarius",
              "bearer",
              "water",
              "zodiac"
            ]
          },
          {
            "no":1429,
            "code":"U+2653",
            "emoji":"♓",
            "description":"PISCES",
            "flagged":false,
            "keywords":[
              "fish",
              "pisces",
              "zodiac"
            ]
          },
          {
            "no":1430,
            "code":"U+26CE",
            "emoji":"⛎",
            "description":"OPHIUCHUS",
            "flagged":false,
            "keywords":[
              "bearer",
              "ophiuchus",
              "serpent",
              "snake",
              "zodiac"
            ]
          },
          {
            "no":1431,
            "code":"U+1F500",
            "emoji":"🔀",
            "description":"TWISTED RIGHTWARDS ARROWS≊ shuffle tracks button",
            "flagged":false,
            "keywords":[
              "arrow",
              "crossed"
            ]
          },
          {
            "no":1432,
            "code":"U+1F501",
            "emoji":"🔁",
            "description":"CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS≊ repeat button",
            "flagged":false,
            "keywords":[
              "arrow",
              "clockwise",
              "repeat"
            ]
          },
          {
            "no":1433,
            "code":"U+1F502",
            "emoji":"🔂",
            "description":"CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY≊ repeat single button",
            "flagged":false,
            "keywords":[
              "arrow",
              "clockwise",
              "once"
            ]
          },
          {
            "no":1434,
            "code":"U+25B6",
            "emoji":"▶",
            "description":"BLACK RIGHT-POINTING TRIANGLE≊ play button",
            "flagged":false,
            "keywords":[
              "arrow",
              "play",
              "right",
              "triangle"
            ]
          },
          {
            "no":1435,
            "code":"U+23E9",
            "emoji":"⏩",
            "description":"BLACK RIGHT-POINTING DOUBLE TRIANGLE≊ fast-forword button",
            "flagged":false,
            "keywords":[
              "arrow",
              "double",
              "fast",
              "forward"
            ]
          },
          {
            "no":1436,
            "code":"U+23ED",
            "emoji":"⏭",
            "description":"BLACK RIGHT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR≊ next track button",
            "flagged":false,
            "keywords":[
              "arrow",
              "next scene",
              "next track",
              "triangle"
            ]
          },
          {
            "no":1437,
            "code":"U+23EF",
            "emoji":"⏯",
            "description":"BLACK RIGHT-POINTING TRIANGLE WITH DOUBLE VERTICAL BAR≊ play or pause button",
            "flagged":false,
            "keywords":[
              "arrow",
              "pause",
              "play",
              "right",
              "triangle"
            ]
          },
          {
            "no":1438,
            "code":"U+25C0",
            "emoji":"◀",
            "description":"BLACK LEFT-POINTING TRIANGLE≊ reverse button",
            "flagged":false,
            "keywords":[
              "arrow",
              "left",
              "reverse",
              "triangle"
            ]
          },
          {
            "no":1439,
            "code":"U+23EA",
            "emoji":"⏪",
            "description":"BLACK LEFT-POINTING DOUBLE TRIANGLE≊ fast reverse button",
            "flagged":false,
            "keywords":[
              "arrow",
              "double",
              "rewind"
            ]
          },
          {
            "no":1440,
            "code":"U+23EE",
            "emoji":"⏮",
            "description":"BLACK LEFT-POINTING DOUBLE TRIANGLE WITH VERTICAL BAR≊ last track button",
            "flagged":false,
            "keywords":[
              "arrow",
              "previous scene",
              "previous track",
              "triangle"
            ]
          },
          {
            "no":1441,
            "code":"U+1F53C",
            "emoji":"🔼",
            "description":"UP-POINTING SMALL RED TRIANGLE≊ up button",
            "flagged":false,
            "keywords":[
              "arrow",
              "button",
              "red"
            ]
          },
          {
            "no":1442,
            "code":"U+23EB",
            "emoji":"⏫",
            "description":"BLACK UP-POINTING DOUBLE TRIANGLE≊ fast up button",
            "flagged":false,
            "keywords":[
              "arrow",
              "double"
            ]
          },
          {
            "no":1443,
            "code":"U+1F53D",
            "emoji":"🔽",
            "description":"DOWN-POINTING SMALL RED TRIANGLE≊ down button",
            "flagged":false,
            "keywords":[
              "arrow",
              "button",
              "down",
              "red"
            ]
          },
          {
            "no":1444,
            "code":"U+23EC",
            "emoji":"⏬",
            "description":"BLACK DOWN-POINTING DOUBLE TRIANGLE≊ fast down button",
            "flagged":false,
            "keywords":[
              "arrow",
              "double",
              "down"
            ]
          },
          {
            "no":1445,
            "code":"U+23F8",
            "emoji":"⏸",
            "description":"DOUBLE VERTICAL BAR≊ pause button",
            "flagged":false,
            "keywords":[
              "bar",
              "double",
              "pause",
              "vertical"
            ]
          },
          {
            "no":1446,
            "code":"U+23F9",
            "emoji":"⏹",
            "description":"BLACK SQUARE FOR STOP≊ stop button",
            "flagged":false,
            "keywords":[
              "square",
              "stop"
            ]
          },
          {
            "no":1447,
            "code":"U+23FA",
            "emoji":"⏺",
            "description":"BLACK CIRCLE FOR RECORD≊ record button",
            "flagged":false,
            "keywords":[
              "circle",
              "record"
            ]
          },
          {
            "no":1448,
            "code":"U+23CF",
            "emoji":"⏏",
            "description":"EJECT SYMBOL≊ eject button",
            "flagged":true,
            "keywords":[
              "eject"
            ]
          },
          {
            "no":1449,
            "code":"U+1F3A6",
            "emoji":"🎦",
            "description":"CINEMA",
            "flagged":false,
            "keywords":[
              "activity",
              "camera",
              "cinema",
              "entertainment",
              "film",
              "movie"
            ]
          },
          {
            "no":1450,
            "code":"U+1F505",
            "emoji":"🔅",
            "description":"LOW BRIGHTNESS SYMBOL≊ dim button",
            "flagged":false,
            "keywords":[
              "brightness",
              "dim",
              "low"
            ]
          },
          {
            "no":1451,
            "code":"U+1F506",
            "emoji":"🔆",
            "description":"HIGH BRIGHTNESS SYMBOL≊ bright button",
            "flagged":false,
            "keywords":[
              "bright",
              "brightness"
            ]
          },
          {
            "no":1452,
            "code":"U+1F4F6",
            "emoji":"📶",
            "description":"ANTENNA WITH BARS≊ antenna bars",
            "flagged":false,
            "keywords":[
              "antenna",
              "bar",
              "cell",
              "communication",
              "mobile",
              "phone",
              "signal",
              "telephone"
            ]
          },
          {
            "no":1453,
            "code":"U+1F4F3",
            "emoji":"📳",
            "description":"VIBRATION MODE",
            "flagged":false,
            "keywords":[
              "cell",
              "communication",
              "mobile",
              "mode",
              "phone",
              "telephone",
              "vibration"
            ]
          },
          {
            "no":1454,
            "code":"U+1F4F4",
            "emoji":"📴",
            "description":"MOBILE PHONE OFF",
            "flagged":false,
            "keywords":[
              "cell",
              "communication",
              "mobile",
              "off",
              "phone",
              "telephone"
            ]
          },
          {
            "no":1455,
            "code":"U+0023 U+FE0F U+20E3",
            "emoji":"#️⃣",
            "description":"Keycap NUMBER SIGN",
            "flagged":false,
            "keywords":[
              "hash",
              "keycap",
              "pound"
            ]
          },
          {
            "no":1456,
            "code":"U+002A U+FE0F U+20E3",
            "emoji":"*️⃣",
            "description":"Keycap ASTERISK",
            "flagged":false,
            "keywords":[
              "asterisk",
              "keycap",
              "star"
            ]
          },
          {
            "no":1457,
            "code":"U+0030 U+FE0F U+20E3",
            "emoji":"0️⃣",
            "description":"Keycap DIGIT ZERO",
            "flagged":false,
            "keywords":[
              "0",
              "keycap",
              "zero"
            ]
          },
          {
            "no":1458,
            "code":"U+0031 U+FE0F U+20E3",
            "emoji":"1️⃣",
            "description":"Keycap DIGIT ONE",
            "flagged":false,
            "keywords":[
              "1",
              "keycap",
              "one"
            ]
          },
          {
            "no":1459,
            "code":"U+0032 U+FE0F U+20E3",
            "emoji":"2️⃣",
            "description":"Keycap DIGIT TWO",
            "flagged":false,
            "keywords":[
              "2",
              "keycap",
              "two"
            ]
          },
          {
            "no":1460,
            "code":"U+0033 U+FE0F U+20E3",
            "emoji":"3️⃣",
            "description":"Keycap DIGIT THREE",
            "flagged":false,
            "keywords":[
              "3",
              "keycap",
              "three"
            ]
          },
          {
            "no":1461,
            "code":"U+0034 U+FE0F U+20E3",
            "emoji":"4️⃣",
            "description":"Keycap DIGIT FOUR",
            "flagged":false,
            "keywords":[
              "4",
              "four",
              "keycap"
            ]
          },
          {
            "no":1462,
            "code":"U+0035 U+FE0F U+20E3",
            "emoji":"5️⃣",
            "description":"Keycap DIGIT FIVE",
            "flagged":false,
            "keywords":[
              "5",
              "five",
              "keycap"
            ]
          },
          {
            "no":1463,
            "code":"U+0036 U+FE0F U+20E3",
            "emoji":"6️⃣",
            "description":"Keycap DIGIT SIX",
            "flagged":false,
            "keywords":[
              "6",
              "keycap",
              "six"
            ]
          },
          {
            "no":1464,
            "code":"U+0037 U+FE0F U+20E3",
            "emoji":"7️⃣",
            "description":"Keycap DIGIT SEVEN",
            "flagged":false,
            "keywords":[
              "7",
              "keycap",
              "seven"
            ]
          },
          {
            "no":1465,
            "code":"U+0038 U+FE0F U+20E3",
            "emoji":"8️⃣",
            "description":"Keycap DIGIT EIGHT",
            "flagged":false,
            "keywords":[
              "8",
              "eight",
              "keycap"
            ]
          },
          {
            "no":1466,
            "code":"U+0039 U+FE0F U+20E3",
            "emoji":"9️⃣",
            "description":"Keycap DIGIT NINE",
            "flagged":false,
            "keywords":[
              "9",
              "keycap",
              "nine"
            ]
          },
          {
            "no":1467,
            "code":"U+1F51F",
            "emoji":"🔟",
            "description":"KEYCAP TEN",
            "flagged":false,
            "keywords":[
              "10",
              "keycap",
              "ten"
            ]
          },
          {
            "no":1468,
            "code":"U+1F4AF",
            "emoji":"💯",
            "description":"HUNDRED POINTS SYMBOL≊ hundred points",
            "flagged":false,
            "keywords":[
              "100",
              "full",
              "hundred",
              "score"
            ]
          },
          {
            "no":1469,
            "code":"U+1F520",
            "emoji":"🔠",
            "description":"INPUT SYMBOL FOR LATIN CAPITAL LETTERS≊ input latin uppercase",
            "flagged":false,
            "keywords":[
              "input",
              "latin",
              "letters",
              "uppercase"
            ]
          },
          {
            "no":1470,
            "code":"U+1F521",
            "emoji":"🔡",
            "description":"INPUT SYMBOL FOR LATIN SMALL LETTERS≊ input latin lowercase",
            "flagged":false,
            "keywords":[
              "abcd",
              "input",
              "latin",
              "letters",
              "lowercase"
            ]
          },
          {
            "no":1471,
            "code":"U+1F522",
            "emoji":"🔢",
            "description":"INPUT SYMBOL FOR NUMBERS≊ input numbers",
            "flagged":false,
            "keywords":[
              "1234",
              "input",
              "numbers"
            ]
          },
          {
            "no":1472,
            "code":"U+1F523",
            "emoji":"🔣",
            "description":"INPUT SYMBOL FOR SYMBOLS≊ input symbols",
            "flagged":false,
            "keywords":[
              "input"
            ]
          },
          {
            "no":1473,
            "code":"U+1F524",
            "emoji":"🔤",
            "description":"INPUT SYMBOL FOR LATIN LETTERS≊ input latin letters",
            "flagged":false,
            "keywords":[
              "abc",
              "alphabet",
              "input",
              "latin",
              "letters"
            ]
          },
          {
            "no":1474,
            "code":"U+1F170",
            "emoji":"🅰",
            "description":"NEGATIVE SQUARED LATIN CAPITAL LETTER A≊ a button",
            "flagged":false,
            "keywords":[
              "a",
              "blood"
            ]
          },
          {
            "no":1475,
            "code":"U+1F18E",
            "emoji":"🆎",
            "description":"NEGATIVE SQUARED AB≊ ab button",
            "flagged":false,
            "keywords":[
              "ab",
              "blood"
            ]
          },
          {
            "no":1476,
            "code":"U+1F171",
            "emoji":"🅱",
            "description":"NEGATIVE SQUARED LATIN CAPITAL LETTER B≊ b button",
            "flagged":false,
            "keywords":[
              "b",
              "blood"
            ]
          },
          {
            "no":1477,
            "code":"U+1F191",
            "emoji":"🆑",
            "description":"SQUARED CL",
            "flagged":false,
            "keywords":[
              "cl"
            ]
          },
          {
            "no":1478,
            "code":"U+1F192",
            "emoji":"🆒",
            "description":"SQUARED COOL",
            "flagged":false,
            "keywords":[
              "cool"
            ]
          },
          {
            "no":1479,
            "code":"U+1F193",
            "emoji":"🆓",
            "description":"SQUARED FREE",
            "flagged":false,
            "keywords":[
              "free"
            ]
          },
          {
            "no":1480,
            "code":"U+2139",
            "emoji":"ℹ",
            "description":"INFORMATION SOURCE",
            "flagged":false,
            "keywords":[
              "i",
              "information"
            ]
          },
          {
            "no":1481,
            "code":"U+1F194",
            "emoji":"🆔",
            "description":"SQUARED ID",
            "flagged":false,
            "keywords":[
              "id",
              "identity"
            ]
          },
          {
            "no":1482,
            "code":"U+24C2",
            "emoji":"Ⓜ",
            "description":"CIRCLED LATIN CAPITAL LETTER M≊ circled letter m",
            "flagged":false,
            "keywords":[
              "circle",
              "m"
            ]
          },
          {
            "no":1483,
            "code":"U+1F195",
            "emoji":"🆕",
            "description":"SQUARED NEW",
            "flagged":false,
            "keywords":[
              "new"
            ]
          },
          {
            "no":1484,
            "code":"U+1F196",
            "emoji":"🆖",
            "description":"SQUARED NG",
            "flagged":false,
            "keywords":[
              "ng"
            ]
          },
          {
            "no":1485,
            "code":"U+1F17E",
            "emoji":"🅾",
            "description":"NEGATIVE SQUARED LATIN CAPITAL LETTER O≊ o button",
            "flagged":false,
            "keywords":[
              "blood",
              "o"
            ]
          },
          {
            "no":1486,
            "code":"U+1F197",
            "emoji":"🆗",
            "description":"SQUARED OK",
            "flagged":false,
            "keywords":[
              "ok"
            ]
          },
          {
            "no":1487,
            "code":"U+1F17F",
            "emoji":"🅿",
            "description":"NEGATIVE SQUARED LATIN CAPITAL LETTER P≊ p button",
            "flagged":false,
            "keywords":[
              "parking"
            ]
          },
          {
            "no":1488,
            "code":"U+1F198",
            "emoji":"🆘",
            "description":"SQUARED SOS",
            "flagged":false,
            "keywords":[
              "help",
              "sos"
            ]
          },
          {
            "no":1489,
            "code":"U+1F199",
            "emoji":"🆙",
            "description":"SQUARED UP WITH EXCLAMATION MARK≊ up! button",
            "flagged":false,
            "keywords":[
              "mark",
              "up"
            ]
          },
          {
            "no":1490,
            "code":"U+1F19A",
            "emoji":"🆚",
            "description":"SQUARED VS",
            "flagged":false,
            "keywords":[
              "versus",
              "vs"
            ]
          },
          {
            "no":1491,
            "code":"U+1F201",
            "emoji":"🈁",
            "description":"SQUARED KATAKANA KOKO",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1492,
            "code":"U+1F202",
            "emoji":"🈂",
            "description":"SQUARED KATAKANA SA",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1493,
            "code":"U+1F237",
            "emoji":"🈷",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-6708≊ squared moon ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1494,
            "code":"U+1F236",
            "emoji":"🈶",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-6709≊ squared exist ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1495,
            "code":"U+1F22F",
            "emoji":"🈯",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-6307≊ squared finger ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1496,
            "code":"U+1F250",
            "emoji":"🉐",
            "description":"CIRCLED IDEOGRAPH ADVANTAGE≊ circled advantage ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1497,
            "code":"U+1F239",
            "emoji":"🈹",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-5272≊ squared divide ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1498,
            "code":"U+1F21A",
            "emoji":"🈚",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-7121≊ squared negation ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1499,
            "code":"U+1F232",
            "emoji":"🈲",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-7981≊ squared prohibit ideograph",
            "flagged":false,
            "keywords":[
              "japanese"
            ]
          },
          {
            "no":1500,
            "code":"U+1F251",
            "emoji":"🉑",
            "description":"CIRCLED IDEOGRAPH ACCEPT≊ circled accept ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1501,
            "code":"U+1F238",
            "emoji":"🈸",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-7533≊ squared apply ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1502,
            "code":"U+1F234",
            "emoji":"🈴",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-5408≊ squared together ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1503,
            "code":"U+1F233",
            "emoji":"🈳",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-7A7A≊ squared empty ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1504,
            "code":"U+3297",
            "emoji":"㊗",
            "description":"CIRCLED IDEOGRAPH CONGRATULATION≊ circled congratulate ideograph",
            "flagged":false,
            "keywords":[
              "chinese",
              "congratulation",
              "congratulations",
              "ideograph"
            ]
          },
          {
            "no":1505,
            "code":"U+3299",
            "emoji":"㊙",
            "description":"CIRCLED IDEOGRAPH SECRET≊ circled secret ideograph",
            "flagged":false,
            "keywords":[
              "chinese",
              "ideograph",
              "secret"
            ]
          },
          {
            "no":1506,
            "code":"U+1F23A",
            "emoji":"🈺",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-55B6≊ squared operating ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1507,
            "code":"U+1F235",
            "emoji":"🈵",
            "description":"SQUARED CJK UNIFIED IDEOGRAPH-6E80≊ squared fullness ideograph",
            "flagged":false,
            "keywords":[
              "chinese"
            ]
          },
          {
            "no":1508,
            "code":"U+25AA",
            "emoji":"▪",
            "description":"BLACK SMALL SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1509,
            "code":"U+25AB",
            "emoji":"▫",
            "description":"WHITE SMALL SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1510,
            "code":"U+25FB",
            "emoji":"◻",
            "description":"WHITE MEDIUM SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1511,
            "code":"U+25FC",
            "emoji":"◼",
            "description":"BLACK MEDIUM SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1512,
            "code":"U+25FD",
            "emoji":"◽",
            "description":"WHITE MEDIUM SMALL SQUARE≊ white medium-small square",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1513,
            "code":"U+25FE",
            "emoji":"◾",
            "description":"BLACK MEDIUM SMALL SQUARE≊ black medium-small square",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1514,
            "code":"U+2B1B",
            "emoji":"⬛",
            "description":"BLACK LARGE SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1515,
            "code":"U+2B1C",
            "emoji":"⬜",
            "description":"WHITE LARGE SQUARE",
            "flagged":false,
            "keywords":[
              "geometric",
              "square"
            ]
          },
          {
            "no":1516,
            "code":"U+1F536",
            "emoji":"🔶",
            "description":"LARGE ORANGE DIAMOND",
            "flagged":false,
            "keywords":[
              "diamond",
              "geometric",
              "orange"
            ]
          },
          {
            "no":1517,
            "code":"U+1F537",
            "emoji":"🔷",
            "description":"LARGE BLUE DIAMOND",
            "flagged":false,
            "keywords":[
              "blue",
              "diamond",
              "geometric"
            ]
          },
          {
            "no":1518,
            "code":"U+1F538",
            "emoji":"🔸",
            "description":"SMALL ORANGE DIAMOND",
            "flagged":false,
            "keywords":[
              "diamond",
              "geometric",
              "orange"
            ]
          },
          {
            "no":1519,
            "code":"U+1F539",
            "emoji":"🔹",
            "description":"SMALL BLUE DIAMOND",
            "flagged":false,
            "keywords":[
              "blue",
              "diamond",
              "geometric"
            ]
          },
          {
            "no":1520,
            "code":"U+1F53A",
            "emoji":"🔺",
            "description":"UP-POINTING RED TRIANGLE≊ red triangle pointed up",
            "flagged":false,
            "keywords":[
              "geometric",
              "red"
            ]
          },
          {
            "no":1521,
            "code":"U+1F53B",
            "emoji":"🔻",
            "description":"DOWN-POINTING RED TRIANGLE≊ red triangle pointed down",
            "flagged":false,
            "keywords":[
              "down",
              "geometric",
              "red"
            ]
          },
          {
            "no":1522,
            "code":"U+1F4A0",
            "emoji":"💠",
            "description":"DIAMOND SHAPE WITH A DOT INSIDE≊ diamond with a dot",
            "flagged":false,
            "keywords":[
              "comic",
              "diamond",
              "geometric",
              "inside"
            ]
          },
          {
            "no":1523,
            "code":"U+1F518",
            "emoji":"🔘",
            "description":"RADIO BUTTON",
            "flagged":false,
            "keywords":[
              "button",
              "geometric",
              "radio"
            ]
          },
          {
            "no":1524,
            "code":"U+1F532",
            "emoji":"🔲",
            "description":"BLACK SQUARE BUTTON",
            "flagged":false,
            "keywords":[
              "button",
              "geometric",
              "square"
            ]
          },
          {
            "no":1525,
            "code":"U+1F533",
            "emoji":"🔳",
            "description":"WHITE SQUARE BUTTON",
            "flagged":false,
            "keywords":[
              "button",
              "geometric",
              "outlined",
              "square"
            ]
          },
          {
            "no":1526,
            "code":"U+26AA",
            "emoji":"⚪",
            "description":"MEDIUM WHITE CIRCLE≊ white circle",
            "flagged":false,
            "keywords":[
              "circle",
              "geometric"
            ]
          },
          {
            "no":1527,
            "code":"U+26AB",
            "emoji":"⚫",
            "description":"MEDIUM BLACK CIRCLE≊ black circle",
            "flagged":false,
            "keywords":[
              "circle",
              "geometric"
            ]
          },
          {
            "no":1528,
            "code":"U+1F534",
            "emoji":"🔴",
            "description":"LARGE RED CIRCLE≊ red circle",
            "flagged":false,
            "keywords":[
              "circle",
              "geometric",
              "red"
            ]
          },
          {
            "no":1529,
            "code":"U+1F535",
            "emoji":"🔵",
            "description":"LARGE BLUE CIRCLE≊ blue circle",
            "flagged":false,
            "keywords":[
              "blue",
              "circle",
              "geometric"
            ]
          }
        ],
        "Flags":[
          {
            "no":1530,
            "code":"U+1F3C1",
            "emoji":"🏁",
            "description":"CHEQUERED FLAG",
            "flagged":false,
            "keywords":[
              "checkered",
              "chequered",
              "flag",
              "racing"
            ]
          },
          {
            "no":1531,
            "code":"U+1F6A9",
            "emoji":"🚩",
            "description":"TRIANGULAR FLAG ON POST≊ triangular flag",
            "flagged":false,
            "keywords":[
              "flag",
              "post"
            ]
          },
          {
            "no":1532,
            "code":"U+1F38C",
            "emoji":"🎌",
            "description":"CROSSED FLAGS",
            "flagged":false,
            "keywords":[
              "activity",
              "celebration",
              "cross",
              "crossed",
              "flag",
              "japanese"
            ]
          },
          {
            "no":1533,
            "code":"U+1F3F4",
            "emoji":"🏴",
            "description":"WAVING BLACK FLAG",
            "flagged":false,
            "keywords":[
              "flag",
              "waving"
            ]
          },
          {
            "no":1534,
            "code":"U+1F3F3",
            "emoji":"🏳",
            "description":"WAVING WHITE FLAG",
            "flagged":false,
            "keywords":[
              "flag",
              "waving"
            ]
          },
          {
            "no":1535,
            "code":"U+1F1E6 U+1F1E8",
            "emoji":"🇦🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "ascension",
              "flag",
              "island"
            ]
          },
          {
            "no":1536,
            "code":"U+1F1E6 U+1F1E9",
            "emoji":"🇦🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "andorra",
              "flag"
            ]
          },
          {
            "no":1537,
            "code":"U+1F1E6 U+1F1EA",
            "emoji":"🇦🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "emirates",
              "flag",
              "uae",
              "united"
            ]
          },
          {
            "no":1538,
            "code":"U+1F1E6 U+1F1EB",
            "emoji":"🇦🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "afghanistan",
              "flag"
            ]
          },
          {
            "no":1539,
            "code":"U+1F1E6 U+1F1EC",
            "emoji":"🇦🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "antigua",
              "barbuda",
              "flag"
            ]
          },
          {
            "no":1540,
            "code":"U+1F1E6 U+1F1EE",
            "emoji":"🇦🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "anguilla",
              "flag"
            ]
          },
          {
            "no":1541,
            "code":"U+1F1E6 U+1F1F1",
            "emoji":"🇦🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "albania",
              "flag"
            ]
          },
          {
            "no":1542,
            "code":"U+1F1E6 U+1F1F2",
            "emoji":"🇦🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "armenia",
              "flag"
            ]
          },
          {
            "no":1543,
            "code":"U+1F1E6 U+1F1F4",
            "emoji":"🇦🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "angola",
              "flag"
            ]
          },
          {
            "no":1544,
            "code":"U+1F1E6 U+1F1F6",
            "emoji":"🇦🇶",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER Q",
            "flagged":false,
            "keywords":[
              "antarctica",
              "flag"
            ]
          },
          {
            "no":1545,
            "code":"U+1F1E6 U+1F1F7",
            "emoji":"🇦🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "argentina",
              "flag"
            ]
          },
          {
            "no":1546,
            "code":"U+1F1E6 U+1F1F8",
            "emoji":"🇦🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "american",
              "flag",
              "samoa"
            ]
          },
          {
            "no":1547,
            "code":"U+1F1E6 U+1F1F9",
            "emoji":"🇦🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "austria",
              "flag"
            ]
          },
          {
            "no":1548,
            "code":"U+1F1E6 U+1F1FA",
            "emoji":"🇦🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "australia",
              "flag"
            ]
          },
          {
            "no":1549,
            "code":"U+1F1E6 U+1F1FC",
            "emoji":"🇦🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "aruba",
              "flag"
            ]
          },
          {
            "no":1550,
            "code":"U+1F1E6 U+1F1FD",
            "emoji":"🇦🇽",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER X",
            "flagged":false,
            "keywords":[
              "åland",
              "flag"
            ]
          },
          {
            "no":1551,
            "code":"U+1F1E6 U+1F1FF",
            "emoji":"🇦🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER A, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "azerbaijan",
              "flag"
            ]
          },
          {
            "no":1552,
            "code":"U+1F1E7 U+1F1E6",
            "emoji":"🇧🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "bosnia",
              "flag",
              "herzegovina"
            ]
          },
          {
            "no":1553,
            "code":"U+1F1E7 U+1F1E7",
            "emoji":"🇧🇧",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER B",
            "flagged":false,
            "keywords":[
              "barbados",
              "flag"
            ]
          },
          {
            "no":1554,
            "code":"U+1F1E7 U+1F1E9",
            "emoji":"🇧🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "bangladesh",
              "flag"
            ]
          },
          {
            "no":1555,
            "code":"U+1F1E7 U+1F1EA",
            "emoji":"🇧🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "belgium",
              "flag"
            ]
          },
          {
            "no":1556,
            "code":"U+1F1E7 U+1F1EB",
            "emoji":"🇧🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "burkina faso",
              "flag"
            ]
          },
          {
            "no":1557,
            "code":"U+1F1E7 U+1F1EC",
            "emoji":"🇧🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "bulgaria",
              "flag"
            ]
          },
          {
            "no":1558,
            "code":"U+1F1E7 U+1F1ED",
            "emoji":"🇧🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "bahrain",
              "flag"
            ]
          },
          {
            "no":1559,
            "code":"U+1F1E7 U+1F1EE",
            "emoji":"🇧🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "burundi",
              "flag"
            ]
          },
          {
            "no":1560,
            "code":"U+1F1E7 U+1F1EF",
            "emoji":"🇧🇯",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER J",
            "flagged":false,
            "keywords":[
              "benin",
              "flag"
            ]
          },
          {
            "no":1561,
            "code":"U+1F1E7 U+1F1F1",
            "emoji":"🇧🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "barthelemy",
              "barthélemy",
              "flag",
              "saint"
            ]
          },
          {
            "no":1562,
            "code":"U+1F1E7 U+1F1F2",
            "emoji":"🇧🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "bermuda",
              "flag"
            ]
          },
          {
            "no":1563,
            "code":"U+1F1E7 U+1F1F3",
            "emoji":"🇧🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "brunei",
              "darussalam",
              "flag"
            ]
          },
          {
            "no":1564,
            "code":"U+1F1E7 U+1F1F4",
            "emoji":"🇧🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "bolivia",
              "flag"
            ]
          },
          {
            "no":1565,
            "code":"U+1F1E7 U+1F1F6",
            "emoji":"🇧🇶",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Q",
            "flagged":false,
            "keywords":[
              "bonaire",
              "caribbean",
              "eustatius",
              "flag",
              "netherlands",
              "saba",
              "sint"
            ]
          },
          {
            "no":1566,
            "code":"U+1F1E7 U+1F1F7",
            "emoji":"🇧🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "brazil",
              "flag"
            ]
          },
          {
            "no":1567,
            "code":"U+1F1E7 U+1F1F8",
            "emoji":"🇧🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "bahamas",
              "flag"
            ]
          },
          {
            "no":1568,
            "code":"U+1F1E7 U+1F1F9",
            "emoji":"🇧🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "bhutan",
              "flag"
            ]
          },
          {
            "no":1569,
            "code":"U+1F1E7 U+1F1FB",
            "emoji":"🇧🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "bouvet",
              "flag",
              "island"
            ]
          },
          {
            "no":1570,
            "code":"U+1F1E7 U+1F1FC",
            "emoji":"🇧🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "botswana",
              "flag"
            ]
          },
          {
            "no":1571,
            "code":"U+1F1E7 U+1F1FE",
            "emoji":"🇧🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "belarus",
              "flag"
            ]
          },
          {
            "no":1572,
            "code":"U+1F1E7 U+1F1FF",
            "emoji":"🇧🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER B, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "belize",
              "flag"
            ]
          },
          {
            "no":1573,
            "code":"U+1F1E8 U+1F1E6",
            "emoji":"🇨🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "canada",
              "flag"
            ]
          },
          {
            "no":1574,
            "code":"U+1F1E8 U+1F1E8",
            "emoji":"🇨🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "cocos",
              "flag",
              "island",
              "keeling"
            ]
          },
          {
            "no":1575,
            "code":"U+1F1E8 U+1F1E9",
            "emoji":"🇨🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "congo",
              "congo-kinshasa",
              "democratic republic of congo",
              "drc",
              "flag",
              "kinshasa",
              "republic"
            ]
          },
          {
            "no":1576,
            "code":"U+1F1E8 U+1F1EB",
            "emoji":"🇨🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "central african republic",
              "flag",
              "republic"
            ]
          },
          {
            "no":1577,
            "code":"U+1F1E8 U+1F1EC",
            "emoji":"🇨🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "brazzaville",
              "congo",
              "congo republic",
              "congo-brazzaville",
              "flag",
              "republic",
              "republic of the congo"
            ]
          },
          {
            "no":1578,
            "code":"U+1F1E8 U+1F1ED",
            "emoji":"🇨🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "switzerland"
            ]
          },
          {
            "no":1579,
            "code":"U+1F1E8 U+1F1EE",
            "emoji":"🇨🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "cote ivoire",
              "côte ivoire",
              "flag",
              "ivory coast"
            ]
          },
          {
            "no":1580,
            "code":"U+1F1E8 U+1F1F0",
            "emoji":"🇨🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "cook",
              "flag",
              "island"
            ]
          },
          {
            "no":1581,
            "code":"U+1F1E8 U+1F1F1",
            "emoji":"🇨🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "chile",
              "flag"
            ]
          },
          {
            "no":1582,
            "code":"U+1F1E8 U+1F1F2",
            "emoji":"🇨🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "cameroon",
              "flag"
            ]
          },
          {
            "no":1583,
            "code":"U+1F1E8 U+1F1F3",
            "emoji":"🇨🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "china",
              "flag"
            ]
          },
          {
            "no":1584,
            "code":"U+1F1E8 U+1F1F4",
            "emoji":"🇨🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "colombia",
              "flag"
            ]
          },
          {
            "no":1585,
            "code":"U+1F1E8 U+1F1F5",
            "emoji":"🇨🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "clipperton",
              "flag",
              "island"
            ]
          },
          {
            "no":1586,
            "code":"U+1F1E8 U+1F1F7",
            "emoji":"🇨🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "costa rica",
              "flag"
            ]
          },
          {
            "no":1587,
            "code":"U+1F1E8 U+1F1FA",
            "emoji":"🇨🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "cuba",
              "flag"
            ]
          },
          {
            "no":1588,
            "code":"U+1F1E8 U+1F1FB",
            "emoji":"🇨🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "cabo",
              "cape",
              "flag",
              "verde"
            ]
          },
          {
            "no":1589,
            "code":"U+1F1E8 U+1F1FC",
            "emoji":"🇨🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "antilles",
              "curacao",
              "curaçao",
              "flag"
            ]
          },
          {
            "no":1590,
            "code":"U+1F1E8 U+1F1FD",
            "emoji":"🇨🇽",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER X",
            "flagged":false,
            "keywords":[
              "christmas",
              "flag",
              "island"
            ]
          },
          {
            "no":1591,
            "code":"U+1F1E8 U+1F1FE",
            "emoji":"🇨🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "cyprus",
              "flag"
            ]
          },
          {
            "no":1592,
            "code":"U+1F1E8 U+1F1FF",
            "emoji":"🇨🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER C, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "czech republic",
              "flag"
            ]
          },
          {
            "no":1593,
            "code":"U+1F1E9 U+1F1EA",
            "emoji":"🇩🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "germany"
            ]
          },
          {
            "no":1594,
            "code":"U+1F1E9 U+1F1EC",
            "emoji":"🇩🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "diego garcia",
              "flag"
            ]
          },
          {
            "no":1595,
            "code":"U+1F1E9 U+1F1EF",
            "emoji":"🇩🇯",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER J",
            "flagged":false,
            "keywords":[
              "djibouti",
              "flag"
            ]
          },
          {
            "no":1596,
            "code":"U+1F1E9 U+1F1F0",
            "emoji":"🇩🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "denmark",
              "flag"
            ]
          },
          {
            "no":1597,
            "code":"U+1F1E9 U+1F1F2",
            "emoji":"🇩🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "dominica",
              "flag"
            ]
          },
          {
            "no":1598,
            "code":"U+1F1E9 U+1F1F4",
            "emoji":"🇩🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "dominican republic",
              "flag"
            ]
          },
          {
            "no":1599,
            "code":"U+1F1E9 U+1F1FF",
            "emoji":"🇩🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER D, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "algeria",
              "flag"
            ]
          },
          {
            "no":1600,
            "code":"U+1F1EA U+1F1E6",
            "emoji":"🇪🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "ceuta",
              "flag",
              "melilla"
            ]
          },
          {
            "no":1601,
            "code":"U+1F1EA U+1F1E8",
            "emoji":"🇪🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "ecuador",
              "flag"
            ]
          },
          {
            "no":1602,
            "code":"U+1F1EA U+1F1EA",
            "emoji":"🇪🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "estonia",
              "flag"
            ]
          },
          {
            "no":1603,
            "code":"U+1F1EA U+1F1EC",
            "emoji":"🇪🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "egypt",
              "flag"
            ]
          },
          {
            "no":1604,
            "code":"U+1F1EA U+1F1ED",
            "emoji":"🇪🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "sahara",
              "west",
              "western sahara"
            ]
          },
          {
            "no":1605,
            "code":"U+1F1EA U+1F1F7",
            "emoji":"🇪🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "eritrea",
              "flag"
            ]
          },
          {
            "no":1606,
            "code":"U+1F1EA U+1F1F8",
            "emoji":"🇪🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "spain"
            ]
          },
          {
            "no":1607,
            "code":"U+1F1EA U+1F1F9",
            "emoji":"🇪🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "ethiopia",
              "flag"
            ]
          },
          {
            "no":1608,
            "code":"U+1F1EA U+1F1FA",
            "emoji":"🇪🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER E, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "european union",
              "flag"
            ]
          },
          {
            "no":1609,
            "code":"U+1F1EB U+1F1EE",
            "emoji":"🇫🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "finland",
              "flag"
            ]
          },
          {
            "no":1610,
            "code":"U+1F1EB U+1F1EF",
            "emoji":"🇫🇯",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER J",
            "flagged":false,
            "keywords":[
              "fiji",
              "flag"
            ]
          },
          {
            "no":1611,
            "code":"U+1F1EB U+1F1F0",
            "emoji":"🇫🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "falkland",
              "falklands",
              "flag",
              "island",
              "islas",
              "malvinas"
            ]
          },
          {
            "no":1612,
            "code":"U+1F1EB U+1F1F2",
            "emoji":"🇫🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "micronesia"
            ]
          },
          {
            "no":1613,
            "code":"U+1F1EB U+1F1F4",
            "emoji":"🇫🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "faroe",
              "flag",
              "island"
            ]
          },
          {
            "no":1614,
            "code":"U+1F1EB U+1F1F7",
            "emoji":"🇫🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER F, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "france"
            ]
          },
          {
            "no":1615,
            "code":"U+1F1EC U+1F1E6",
            "emoji":"🇬🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "gabon"
            ]
          },
          {
            "no":1616,
            "code":"U+1F1EC U+1F1E7",
            "emoji":"🇬🇧",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER B",
            "flagged":false,
            "keywords":[
              "britain",
              "british",
              "cornwall",
              "england",
              "flag",
              "great britain",
              "ireland",
              "northern ireland",
              "scotland",
              "uk",
              "union jack",
              "united",
              "united kingdom",
              "wales"
            ]
          },
          {
            "no":1617,
            "code":"U+1F1EC U+1F1E9",
            "emoji":"🇬🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "flag",
              "grenada"
            ]
          },
          {
            "no":1618,
            "code":"U+1F1EC U+1F1EA",
            "emoji":"🇬🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "georgia"
            ]
          },
          {
            "no":1619,
            "code":"U+1F1EC U+1F1EB",
            "emoji":"🇬🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "flag",
              "french",
              "guiana"
            ]
          },
          {
            "no":1620,
            "code":"U+1F1EC U+1F1EC",
            "emoji":"🇬🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "guernsey"
            ]
          },
          {
            "no":1621,
            "code":"U+1F1EC U+1F1ED",
            "emoji":"🇬🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "ghana"
            ]
          },
          {
            "no":1622,
            "code":"U+1F1EC U+1F1EE",
            "emoji":"🇬🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "flag",
              "gibraltar"
            ]
          },
          {
            "no":1623,
            "code":"U+1F1EC U+1F1F1",
            "emoji":"🇬🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "greenland"
            ]
          },
          {
            "no":1624,
            "code":"U+1F1EC U+1F1F2",
            "emoji":"🇬🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "gambia"
            ]
          },
          {
            "no":1625,
            "code":"U+1F1EC U+1F1F3",
            "emoji":"🇬🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "guinea"
            ]
          },
          {
            "no":1626,
            "code":"U+1F1EC U+1F1F5",
            "emoji":"🇬🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "flag",
              "guadeloupe"
            ]
          },
          {
            "no":1627,
            "code":"U+1F1EC U+1F1F6",
            "emoji":"🇬🇶",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER Q",
            "flagged":false,
            "keywords":[
              "equatorial guinea",
              "flag",
              "guinea"
            ]
          },
          {
            "no":1628,
            "code":"U+1F1EC U+1F1F7",
            "emoji":"🇬🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "greece"
            ]
          },
          {
            "no":1629,
            "code":"U+1F1EC U+1F1F8",
            "emoji":"🇬🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "georgia",
              "island",
              "south",
              "south georgia",
              "south sandwich"
            ]
          },
          {
            "no":1630,
            "code":"U+1F1EC U+1F1F9",
            "emoji":"🇬🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "guatemala"
            ]
          },
          {
            "no":1631,
            "code":"U+1F1EC U+1F1FA",
            "emoji":"🇬🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "guam"
            ]
          },
          {
            "no":1632,
            "code":"U+1F1EC U+1F1FC",
            "emoji":"🇬🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "bissau",
              "flag",
              "guinea"
            ]
          },
          {
            "no":1633,
            "code":"U+1F1EC U+1F1FE",
            "emoji":"🇬🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER G, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "guyana"
            ]
          },
          {
            "no":1634,
            "code":"U+1F1ED U+1F1F0",
            "emoji":"🇭🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "china",
              "flag",
              "hong kong"
            ]
          },
          {
            "no":1635,
            "code":"U+1F1ED U+1F1F2",
            "emoji":"🇭🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "heard",
              "island",
              "mcdonald"
            ]
          },
          {
            "no":1636,
            "code":"U+1F1ED U+1F1F3",
            "emoji":"🇭🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "honduras"
            ]
          },
          {
            "no":1637,
            "code":"U+1F1ED U+1F1F7",
            "emoji":"🇭🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "croatia",
              "flag"
            ]
          },
          {
            "no":1638,
            "code":"U+1F1ED U+1F1F9",
            "emoji":"🇭🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "haiti"
            ]
          },
          {
            "no":1639,
            "code":"U+1F1ED U+1F1FA",
            "emoji":"🇭🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER H, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "hungary"
            ]
          },
          {
            "no":1640,
            "code":"U+1F1EE U+1F1E8",
            "emoji":"🇮🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "canary",
              "flag",
              "island"
            ]
          },
          {
            "no":1641,
            "code":"U+1F1EE U+1F1E9",
            "emoji":"🇮🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "flag",
              "indonesia"
            ]
          },
          {
            "no":1642,
            "code":"U+1F1EE U+1F1EA",
            "emoji":"🇮🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "ireland"
            ]
          },
          {
            "no":1643,
            "code":"U+1F1EE U+1F1F1",
            "emoji":"🇮🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "israel"
            ]
          },
          {
            "no":1644,
            "code":"U+1F1EE U+1F1F2",
            "emoji":"🇮🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "isle of man"
            ]
          },
          {
            "no":1645,
            "code":"U+1F1EE U+1F1F3",
            "emoji":"🇮🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "india"
            ]
          },
          {
            "no":1646,
            "code":"U+1F1EE U+1F1F4",
            "emoji":"🇮🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "british",
              "chagos",
              "flag",
              "indian ocean",
              "island"
            ]
          },
          {
            "no":1647,
            "code":"U+1F1EE U+1F1F6",
            "emoji":"🇮🇶",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER Q",
            "flagged":false,
            "keywords":[
              "flag",
              "iraq"
            ]
          },
          {
            "no":1648,
            "code":"U+1F1EE U+1F1F7",
            "emoji":"🇮🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "iran"
            ]
          },
          {
            "no":1649,
            "code":"U+1F1EE U+1F1F8",
            "emoji":"🇮🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "iceland"
            ]
          },
          {
            "no":1650,
            "code":"U+1F1EE U+1F1F9",
            "emoji":"🇮🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER I, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "italy"
            ]
          },
          {
            "no":1651,
            "code":"U+1F1EF U+1F1EA",
            "emoji":"🇯🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "jersey"
            ]
          },
          {
            "no":1652,
            "code":"U+1F1EF U+1F1F2",
            "emoji":"🇯🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "jamaica"
            ]
          },
          {
            "no":1653,
            "code":"U+1F1EF U+1F1F4",
            "emoji":"🇯🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "flag",
              "jordan"
            ]
          },
          {
            "no":1654,
            "code":"U+1F1EF U+1F1F5",
            "emoji":"🇯🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER J, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "flag",
              "japan"
            ]
          },
          {
            "no":1655,
            "code":"U+1F1F0 U+1F1EA",
            "emoji":"🇰🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "kenya"
            ]
          },
          {
            "no":1656,
            "code":"U+1F1F0 U+1F1EC",
            "emoji":"🇰🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "kyrgyzstan"
            ]
          },
          {
            "no":1657,
            "code":"U+1F1F0 U+1F1ED",
            "emoji":"🇰🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "cambodia",
              "flag"
            ]
          },
          {
            "no":1658,
            "code":"U+1F1F0 U+1F1EE",
            "emoji":"🇰🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "flag",
              "kiribati"
            ]
          },
          {
            "no":1659,
            "code":"U+1F1F0 U+1F1F2",
            "emoji":"🇰🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "comoros",
              "flag"
            ]
          },
          {
            "no":1660,
            "code":"U+1F1F0 U+1F1F3",
            "emoji":"🇰🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "kitts",
              "nevis",
              "saint"
            ]
          },
          {
            "no":1661,
            "code":"U+1F1F0 U+1F1F5",
            "emoji":"🇰🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "flag",
              "korea",
              "north",
              "north korea"
            ]
          },
          {
            "no":1662,
            "code":"U+1F1F0 U+1F1F7",
            "emoji":"🇰🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "korea",
              "south",
              "south korea"
            ]
          },
          {
            "no":1663,
            "code":"U+1F1F0 U+1F1FC",
            "emoji":"🇰🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "flag",
              "kuwait"
            ]
          },
          {
            "no":1664,
            "code":"U+1F1F0 U+1F1FE",
            "emoji":"🇰🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "cayman",
              "flag",
              "island"
            ]
          },
          {
            "no":1665,
            "code":"U+1F1F0 U+1F1FF",
            "emoji":"🇰🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER K, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "kazakhstan"
            ]
          },
          {
            "no":1666,
            "code":"U+1F1F1 U+1F1E6",
            "emoji":"🇱🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "laos"
            ]
          },
          {
            "no":1667,
            "code":"U+1F1F1 U+1F1E7",
            "emoji":"🇱🇧",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER B",
            "flagged":false,
            "keywords":[
              "flag",
              "lebanon"
            ]
          },
          {
            "no":1668,
            "code":"U+1F1F1 U+1F1E8",
            "emoji":"🇱🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "flag",
              "lucia",
              "saint"
            ]
          },
          {
            "no":1669,
            "code":"U+1F1F1 U+1F1EE",
            "emoji":"🇱🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "flag",
              "liechtenstein"
            ]
          },
          {
            "no":1670,
            "code":"U+1F1F1 U+1F1F0",
            "emoji":"🇱🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "sri lanka"
            ]
          },
          {
            "no":1671,
            "code":"U+1F1F1 U+1F1F7",
            "emoji":"🇱🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "liberia"
            ]
          },
          {
            "no":1672,
            "code":"U+1F1F1 U+1F1F8",
            "emoji":"🇱🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "lesotho"
            ]
          },
          {
            "no":1673,
            "code":"U+1F1F1 U+1F1F9",
            "emoji":"🇱🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "lithuania"
            ]
          },
          {
            "no":1674,
            "code":"U+1F1F1 U+1F1FA",
            "emoji":"🇱🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "luxembourg"
            ]
          },
          {
            "no":1675,
            "code":"U+1F1F1 U+1F1FB",
            "emoji":"🇱🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "flag",
              "latvia"
            ]
          },
          {
            "no":1676,
            "code":"U+1F1F1 U+1F1FE",
            "emoji":"🇱🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER L, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "libya"
            ]
          },
          {
            "no":1677,
            "code":"U+1F1F2 U+1F1E6",
            "emoji":"🇲🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "morocco"
            ]
          },
          {
            "no":1678,
            "code":"U+1F1F2 U+1F1E8",
            "emoji":"🇲🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "flag",
              "monaco"
            ]
          },
          {
            "no":1679,
            "code":"U+1F1F2 U+1F1E9",
            "emoji":"🇲🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "flag",
              "moldova"
            ]
          },
          {
            "no":1680,
            "code":"U+1F1F2 U+1F1EA",
            "emoji":"🇲🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "montenegro"
            ]
          },
          {
            "no":1681,
            "code":"U+1F1F2 U+1F1EB",
            "emoji":"🇲🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "flag",
              "french",
              "martin",
              "saint"
            ]
          },
          {
            "no":1682,
            "code":"U+1F1F2 U+1F1EC",
            "emoji":"🇲🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "madagascar"
            ]
          },
          {
            "no":1683,
            "code":"U+1F1F2 U+1F1ED",
            "emoji":"🇲🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "island",
              "marshall"
            ]
          },
          {
            "no":1684,
            "code":"U+1F1F2 U+1F1F0",
            "emoji":"🇲🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "macedonia"
            ]
          },
          {
            "no":1685,
            "code":"U+1F1F2 U+1F1F1",
            "emoji":"🇲🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "mali"
            ]
          },
          {
            "no":1686,
            "code":"U+1F1F2 U+1F1F2",
            "emoji":"🇲🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "burma",
              "flag",
              "myanmar"
            ]
          },
          {
            "no":1687,
            "code":"U+1F1F2 U+1F1F3",
            "emoji":"🇲🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "mongolia"
            ]
          },
          {
            "no":1688,
            "code":"U+1F1F2 U+1F1F4",
            "emoji":"🇲🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "china",
              "flag",
              "macao",
              "macau"
            ]
          },
          {
            "no":1689,
            "code":"U+1F1F2 U+1F1F5",
            "emoji":"🇲🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "flag",
              "island",
              "mariana",
              "north",
              "northern mariana"
            ]
          },
          {
            "no":1690,
            "code":"U+1F1F2 U+1F1F6",
            "emoji":"🇲🇶",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Q",
            "flagged":false,
            "keywords":[
              "flag",
              "martinique"
            ]
          },
          {
            "no":1691,
            "code":"U+1F1F2 U+1F1F7",
            "emoji":"🇲🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "mauritania"
            ]
          },
          {
            "no":1692,
            "code":"U+1F1F2 U+1F1F8",
            "emoji":"🇲🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "montserrat"
            ]
          },
          {
            "no":1693,
            "code":"U+1F1F2 U+1F1F9",
            "emoji":"🇲🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "malta"
            ]
          },
          {
            "no":1694,
            "code":"U+1F1F2 U+1F1FA",
            "emoji":"🇲🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "mauritius"
            ]
          },
          {
            "no":1695,
            "code":"U+1F1F2 U+1F1FB",
            "emoji":"🇲🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "flag",
              "maldives"
            ]
          },
          {
            "no":1696,
            "code":"U+1F1F2 U+1F1FC",
            "emoji":"🇲🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "flag",
              "malawi"
            ]
          },
          {
            "no":1697,
            "code":"U+1F1F2 U+1F1FD",
            "emoji":"🇲🇽",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER X",
            "flagged":false,
            "keywords":[
              "flag",
              "mexico"
            ]
          },
          {
            "no":1698,
            "code":"U+1F1F2 U+1F1FE",
            "emoji":"🇲🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "malaysia"
            ]
          },
          {
            "no":1699,
            "code":"U+1F1F2 U+1F1FF",
            "emoji":"🇲🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER M, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "mozambique"
            ]
          },
          {
            "no":1700,
            "code":"U+1F1F3 U+1F1E6",
            "emoji":"🇳🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "namibia"
            ]
          },
          {
            "no":1701,
            "code":"U+1F1F3 U+1F1E8",
            "emoji":"🇳🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "flag",
              "new",
              "new caledonia"
            ]
          },
          {
            "no":1702,
            "code":"U+1F1F3 U+1F1EA",
            "emoji":"🇳🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "niger"
            ]
          },
          {
            "no":1703,
            "code":"U+1F1F3 U+1F1EB",
            "emoji":"🇳🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "flag",
              "island",
              "norfolk"
            ]
          },
          {
            "no":1704,
            "code":"U+1F1F3 U+1F1EC",
            "emoji":"🇳🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "nigeria"
            ]
          },
          {
            "no":1705,
            "code":"U+1F1F3 U+1F1EE",
            "emoji":"🇳🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "flag",
              "nicaragua"
            ]
          },
          {
            "no":1706,
            "code":"U+1F1F3 U+1F1F1",
            "emoji":"🇳🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "netherlands"
            ]
          },
          {
            "no":1707,
            "code":"U+1F1F3 U+1F1F4",
            "emoji":"🇳🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "flag",
              "norway"
            ]
          },
          {
            "no":1708,
            "code":"U+1F1F3 U+1F1F5",
            "emoji":"🇳🇵",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER P",
            "flagged":false,
            "keywords":[
              "flag",
              "nepal"
            ]
          },
          {
            "no":1709,
            "code":"U+1F1F3 U+1F1F7",
            "emoji":"🇳🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "nauru"
            ]
          },
          {
            "no":1710,
            "code":"U+1F1F3 U+1F1FA",
            "emoji":"🇳🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "niue"
            ]
          },
          {
            "no":1711,
            "code":"U+1F1F3 U+1F1FF",
            "emoji":"🇳🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER N, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "new",
              "new zealand"
            ]
          },
          {
            "no":1712,
            "code":"U+1F1F4 U+1F1F2",
            "emoji":"🇴🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER O, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "oman"
            ]
          },
          {
            "no":1713,
            "code":"U+1F1F5 U+1F1E6",
            "emoji":"🇵🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "panama"
            ]
          },
          {
            "no":1714,
            "code":"U+1F1F5 U+1F1EA",
            "emoji":"🇵🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "peru"
            ]
          },
          {
            "no":1715,
            "code":"U+1F1F5 U+1F1EB",
            "emoji":"🇵🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "flag",
              "french",
              "polynesia"
            ]
          },
          {
            "no":1716,
            "code":"U+1F1F5 U+1F1EC",
            "emoji":"🇵🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "guinea",
              "new",
              "papua new guinea"
            ]
          },
          {
            "no":1717,
            "code":"U+1F1F5 U+1F1ED",
            "emoji":"🇵🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "philippines"
            ]
          },
          {
            "no":1718,
            "code":"U+1F1F5 U+1F1F0",
            "emoji":"🇵🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "pakistan"
            ]
          },
          {
            "no":1719,
            "code":"U+1F1F5 U+1F1F1",
            "emoji":"🇵🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "poland"
            ]
          },
          {
            "no":1720,
            "code":"U+1F1F5 U+1F1F2",
            "emoji":"🇵🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "miquelon",
              "pierre",
              "saint"
            ]
          },
          {
            "no":1721,
            "code":"U+1F1F5 U+1F1F3",
            "emoji":"🇵🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "island",
              "pitcairn"
            ]
          },
          {
            "no":1722,
            "code":"U+1F1F5 U+1F1F7",
            "emoji":"🇵🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "puerto rico"
            ]
          },
          {
            "no":1723,
            "code":"U+1F1F5 U+1F1F8",
            "emoji":"🇵🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "palestine"
            ]
          },
          {
            "no":1724,
            "code":"U+1F1F5 U+1F1F9",
            "emoji":"🇵🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "portugal"
            ]
          },
          {
            "no":1725,
            "code":"U+1F1F5 U+1F1FC",
            "emoji":"🇵🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "flag",
              "palau"
            ]
          },
          {
            "no":1726,
            "code":"U+1F1F5 U+1F1FE",
            "emoji":"🇵🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER P, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "paraguay"
            ]
          },
          {
            "no":1727,
            "code":"U+1F1F6 U+1F1E6",
            "emoji":"🇶🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Q, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "qatar"
            ]
          },
          {
            "no":1728,
            "code":"U+1F1F7 U+1F1EA",
            "emoji":"🇷🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "reunion",
              "réunion"
            ]
          },
          {
            "no":1729,
            "code":"U+1F1F7 U+1F1F4",
            "emoji":"🇷🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "flag",
              "romania"
            ]
          },
          {
            "no":1730,
            "code":"U+1F1F7 U+1F1F8",
            "emoji":"🇷🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "serbia"
            ]
          },
          {
            "no":1731,
            "code":"U+1F1F7 U+1F1FA",
            "emoji":"🇷🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "russia"
            ]
          },
          {
            "no":1732,
            "code":"U+1F1F7 U+1F1FC",
            "emoji":"🇷🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER R, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "flag",
              "rwanda"
            ]
          },
          {
            "no":1733,
            "code":"U+1F1F8 U+1F1E6",
            "emoji":"🇸🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "saudi arabia"
            ]
          },
          {
            "no":1734,
            "code":"U+1F1F8 U+1F1E7",
            "emoji":"🇸🇧",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER B",
            "flagged":false,
            "keywords":[
              "flag",
              "island",
              "solomon"
            ]
          },
          {
            "no":1735,
            "code":"U+1F1F8 U+1F1E8",
            "emoji":"🇸🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "flag",
              "seychelles"
            ]
          },
          {
            "no":1736,
            "code":"U+1F1F8 U+1F1E9",
            "emoji":"🇸🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "flag",
              "sudan"
            ]
          },
          {
            "no":1737,
            "code":"U+1F1F8 U+1F1EA",
            "emoji":"🇸🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "sweden"
            ]
          },
          {
            "no":1738,
            "code":"U+1F1F8 U+1F1EC",
            "emoji":"🇸🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "singapore"
            ]
          },
          {
            "no":1739,
            "code":"U+1F1F8 U+1F1ED",
            "emoji":"🇸🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "helena",
              "saint"
            ]
          },
          {
            "no":1740,
            "code":"U+1F1F8 U+1F1EE",
            "emoji":"🇸🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "flag",
              "slovenia"
            ]
          },
          {
            "no":1741,
            "code":"U+1F1F8 U+1F1EF",
            "emoji":"🇸🇯",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER J",
            "flagged":false,
            "keywords":[
              "flag",
              "jan mayen",
              "svalbard"
            ]
          },
          {
            "no":1742,
            "code":"U+1F1F8 U+1F1F0",
            "emoji":"🇸🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "slovakia"
            ]
          },
          {
            "no":1743,
            "code":"U+1F1F8 U+1F1F1",
            "emoji":"🇸🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "flag",
              "sierra leone"
            ]
          },
          {
            "no":1744,
            "code":"U+1F1F8 U+1F1F2",
            "emoji":"🇸🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "san marino"
            ]
          },
          {
            "no":1745,
            "code":"U+1F1F8 U+1F1F3",
            "emoji":"🇸🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "senegal"
            ]
          },
          {
            "no":1746,
            "code":"U+1F1F8 U+1F1F4",
            "emoji":"🇸🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "flag",
              "somalia"
            ]
          },
          {
            "no":1747,
            "code":"U+1F1F8 U+1F1F7",
            "emoji":"🇸🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "suriname"
            ]
          },
          {
            "no":1748,
            "code":"U+1F1F8 U+1F1F8",
            "emoji":"🇸🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "south",
              "south sudan",
              "sudan"
            ]
          },
          {
            "no":1749,
            "code":"U+1F1F8 U+1F1F9",
            "emoji":"🇸🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "principe",
              "príncipe",
              "sao tome",
              "são tomé"
            ]
          },
          {
            "no":1750,
            "code":"U+1F1F8 U+1F1FB",
            "emoji":"🇸🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "el salvador",
              "flag"
            ]
          },
          {
            "no":1751,
            "code":"U+1F1F8 U+1F1FD",
            "emoji":"🇸🇽",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER X",
            "flagged":false,
            "keywords":[
              "flag",
              "maarten",
              "sint"
            ]
          },
          {
            "no":1752,
            "code":"U+1F1F8 U+1F1FE",
            "emoji":"🇸🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "syria"
            ]
          },
          {
            "no":1753,
            "code":"U+1F1F8 U+1F1FF",
            "emoji":"🇸🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER S, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "swaziland"
            ]
          },
          {
            "no":1754,
            "code":"U+1F1F9 U+1F1E6",
            "emoji":"🇹🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "tristan da cunha"
            ]
          },
          {
            "no":1755,
            "code":"U+1F1F9 U+1F1E8",
            "emoji":"🇹🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "caicos",
              "flag",
              "island",
              "turks"
            ]
          },
          {
            "no":1756,
            "code":"U+1F1F9 U+1F1E9",
            "emoji":"🇹🇩",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER D",
            "flagged":false,
            "keywords":[
              "chad",
              "flag"
            ]
          },
          {
            "no":1757,
            "code":"U+1F1F9 U+1F1EB",
            "emoji":"🇹🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "antarctic",
              "flag",
              "french"
            ]
          },
          {
            "no":1758,
            "code":"U+1F1F9 U+1F1EC",
            "emoji":"🇹🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "togo"
            ]
          },
          {
            "no":1759,
            "code":"U+1F1F9 U+1F1ED",
            "emoji":"🇹🇭",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER H",
            "flagged":false,
            "keywords":[
              "flag",
              "thailand"
            ]
          },
          {
            "no":1760,
            "code":"U+1F1F9 U+1F1EF",
            "emoji":"🇹🇯",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER J",
            "flagged":false,
            "keywords":[
              "flag",
              "tajikistan"
            ]
          },
          {
            "no":1761,
            "code":"U+1F1F9 U+1F1F0",
            "emoji":"🇹🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "tokelau"
            ]
          },
          {
            "no":1762,
            "code":"U+1F1F9 U+1F1F1",
            "emoji":"🇹🇱",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER L",
            "flagged":false,
            "keywords":[
              "east",
              "east timor",
              "flag",
              "timor-leste"
            ]
          },
          {
            "no":1763,
            "code":"U+1F1F9 U+1F1F2",
            "emoji":"🇹🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "turkmenistan"
            ]
          },
          {
            "no":1764,
            "code":"U+1F1F9 U+1F1F3",
            "emoji":"🇹🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "tunisia"
            ]
          },
          {
            "no":1765,
            "code":"U+1F1F9 U+1F1F4",
            "emoji":"🇹🇴",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER O",
            "flagged":false,
            "keywords":[
              "flag",
              "tonga"
            ]
          },
          {
            "no":1766,
            "code":"U+1F1F9 U+1F1F7",
            "emoji":"🇹🇷",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER R",
            "flagged":false,
            "keywords":[
              "flag",
              "turkey"
            ]
          },
          {
            "no":1767,
            "code":"U+1F1F9 U+1F1F9",
            "emoji":"🇹🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "tobago",
              "trinidad"
            ]
          },
          {
            "no":1768,
            "code":"U+1F1F9 U+1F1FB",
            "emoji":"🇹🇻",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER V",
            "flagged":false,
            "keywords":[
              "flag",
              "tuvalu"
            ]
          },
          {
            "no":1769,
            "code":"U+1F1F9 U+1F1FC",
            "emoji":"🇹🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "china",
              "flag",
              "taiwan"
            ]
          },
          {
            "no":1770,
            "code":"U+1F1F9 U+1F1FF",
            "emoji":"🇹🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER T, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "tanzania"
            ]
          },
          {
            "no":1771,
            "code":"U+1F1FA U+1F1E6",
            "emoji":"🇺🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "ukraine"
            ]
          },
          {
            "no":1772,
            "code":"U+1F1FA U+1F1EC",
            "emoji":"🇺🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "flag",
              "uganda"
            ]
          },
          {
            "no":1773,
            "code":"U+1F1FA U+1F1F2",
            "emoji":"🇺🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "america",
              "flag",
              "island",
              "minor outlying",
              "united",
              "united states",
              "us",
              "usa"
            ]
          },
          {
            "no":1774,
            "code":"U+1F1FA U+1F1F8",
            "emoji":"🇺🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "america",
              "flag",
              "stars and stripes",
              "united",
              "united states"
            ]
          },
          {
            "no":1775,
            "code":"U+1F1FA U+1F1FE",
            "emoji":"🇺🇾",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER Y",
            "flagged":false,
            "keywords":[
              "flag",
              "uruguay"
            ]
          },
          {
            "no":1776,
            "code":"U+1F1FA U+1F1FF",
            "emoji":"🇺🇿",
            "description":"REGIONAL INDICATOR SYMBOL LETTER U, REGIONAL INDICATOR SYMBOL LETTER Z",
            "flagged":false,
            "keywords":[
              "flag",
              "uzbekistan"
            ]
          },
          {
            "no":1777,
            "code":"U+1F1FB U+1F1E6",
            "emoji":"🇻🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "vatican"
            ]
          },
          {
            "no":1778,
            "code":"U+1F1FB U+1F1E8",
            "emoji":"🇻🇨",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER C",
            "flagged":false,
            "keywords":[
              "flag",
              "grenadines",
              "saint",
              "vincent"
            ]
          },
          {
            "no":1779,
            "code":"U+1F1FB U+1F1EA",
            "emoji":"🇻🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "venezuela"
            ]
          },
          {
            "no":1780,
            "code":"U+1F1FB U+1F1EC",
            "emoji":"🇻🇬",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER G",
            "flagged":false,
            "keywords":[
              "british",
              "flag",
              "island",
              "virgin"
            ]
          },
          {
            "no":1781,
            "code":"U+1F1FB U+1F1EE",
            "emoji":"🇻🇮",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER I",
            "flagged":false,
            "keywords":[
              "america",
              "american",
              "flag",
              "island",
              "united",
              "united states",
              "us",
              "usa",
              "virgin"
            ]
          },
          {
            "no":1782,
            "code":"U+1F1FB U+1F1F3",
            "emoji":"🇻🇳",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER N",
            "flagged":false,
            "keywords":[
              "flag",
              "viet nam",
              "vietnam"
            ]
          },
          {
            "no":1783,
            "code":"U+1F1FB U+1F1FA",
            "emoji":"🇻🇺",
            "description":"REGIONAL INDICATOR SYMBOL LETTER V, REGIONAL INDICATOR SYMBOL LETTER U",
            "flagged":false,
            "keywords":[
              "flag",
              "vanuatu"
            ]
          },
          {
            "no":1784,
            "code":"U+1F1FC U+1F1EB",
            "emoji":"🇼🇫",
            "description":"REGIONAL INDICATOR SYMBOL LETTER W, REGIONAL INDICATOR SYMBOL LETTER F",
            "flagged":false,
            "keywords":[
              "flag",
              "futuna",
              "wallis"
            ]
          },
          {
            "no":1785,
            "code":"U+1F1FC U+1F1F8",
            "emoji":"🇼🇸",
            "description":"REGIONAL INDICATOR SYMBOL LETTER W, REGIONAL INDICATOR SYMBOL LETTER S",
            "flagged":false,
            "keywords":[
              "flag",
              "samoa"
            ]
          },
          {
            "no":1786,
            "code":"U+1F1FD U+1F1F0",
            "emoji":"🇽🇰",
            "description":"REGIONAL INDICATOR SYMBOL LETTER X, REGIONAL INDICATOR SYMBOL LETTER K",
            "flagged":false,
            "keywords":[
              "flag",
              "kosovo"
            ]
          },
          {
            "no":1787,
            "code":"U+1F1FE U+1F1EA",
            "emoji":"🇾🇪",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Y, REGIONAL INDICATOR SYMBOL LETTER E",
            "flagged":false,
            "keywords":[
              "flag",
              "yemen"
            ]
          },
          {
            "no":1788,
            "code":"U+1F1FE U+1F1F9",
            "emoji":"🇾🇹",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Y, REGIONAL INDICATOR SYMBOL LETTER T",
            "flagged":false,
            "keywords":[
              "flag",
              "mayotte"
            ]
          },
          {
            "no":1789,
            "code":"U+1F1FF U+1F1E6",
            "emoji":"🇿🇦",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER A",
            "flagged":false,
            "keywords":[
              "flag",
              "south",
              "south africa"
            ]
          },
          {
            "no":1790,
            "code":"U+1F1FF U+1F1F2",
            "emoji":"🇿🇲",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER M",
            "flagged":false,
            "keywords":[
              "flag",
              "zambia"
            ]
          },
          {
            "no":1791,
            "code":"U+1F1FF U+1F1FC",
            "emoji":"🇿🇼",
            "description":"REGIONAL INDICATOR SYMBOL LETTER Z, REGIONAL INDICATOR SYMBOL LETTER W",
            "flagged":false,
            "keywords":[
              "flag",
              "zimbabwe"
            ]
          }
        ]
      };

    if (!this.options) {
        return console.error('You must provide object as a first argument')
    }

    this.init = () => {

        // Generate style
        this.functions.generateStyle.call(this);

        this.selectors.trigger = this.options.hasOwnProperty('trigger') ? this.options.trigger : console.error('You must proved trigger element like this - \'EmojiPicker.init({trigger: "selector"})\' ');
        this.selectors.search = '.fg-emoji-picker-search input';
        this.selectors.emojiContainer = '.fg-emoji-picker-grid'
        this.emojiItems = undefined;
        this.variable.emit = this.options.emit || null;
        this.variable.removeOnSelection = this.options.removeOnSelection || false;
        this.variable.closeButton = this.options.closeButton || true;
        this.variable.position = this.options.position || null;
        this.variable.dir = this.options.dir || '';
        this.insertInto = this.options.insertInto || undefined;
        if (!this.selectors.trigger) return;

        this.bindEvents();
        this.options && this.options.preFetch && this.functions.fetchEmojiData();
    }

    this.lib = (el = undefined) => {
        return {
            el: document.querySelectorAll(el),
            on(event, callback, classList = undefined) {
                if (!classList) {
                    this.el.forEach(item => {
                        item.addEventListener(event, callback.bind(item))
                    })
                } else {
                    this.el.forEach(item => {
                        item.addEventListener(event, (e) => {
                            if (e.target.closest(classList)) {
                                callback.call(e.target.closest(classList), e)
                            }
                        })
                    })
                }
            }
        }
    },

    this.variable = {
        position: null,
        dir: '',
        categoryIcons: {
            'smileys--people': '<svg width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256 s26.629,132.668,74.98,181.02C123.333,485.371,187.62,512,256,512s132.667-26.629,181.02-74.98 C485.371,388.668,512,324.38,512,256S485.371,123.333,437.02,74.98z M256,472c-119.103,0-216-96.897-216-216S136.897,40,256,40 s216,96.897,216,216S375.103,472,256,472z"/> </g> </g> <g> <g> <path d="M368.993,285.776c-0.072,0.214-7.298,21.626-25.02,42.393C321.419,354.599,292.628,368,258.4,368 c-34.475,0-64.195-13.561-88.333-40.303c-18.92-20.962-27.272-42.54-27.33-42.691l-37.475,13.99 c0.42,1.122,10.533,27.792,34.013,54.273C171.022,389.074,212.215,408,258.4,408c46.412,0,86.904-19.076,117.099-55.166 c22.318-26.675,31.165-53.55,31.531-54.681L368.993,285.776z"/> </g> </g> <g> <g> <circle cx="168" cy="180.12" r="32"/> </g> </g> <g> <g> <circle cx="344" cy="180.12" r="32"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',
            'animals--nature': '<svg width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 354.968 354.968" style="enable-background:new 0 0 354.968 354.968;" xml:space="preserve"> <g> <g> <path d="M350.775,341.319c-9.6-28.4-20.8-55.2-34.4-80.8c0.4-0.4,0.8-1.2,1.6-1.6c30.8-34.8,44-83.6,20.4-131.6 c-20.4-41.6-65.6-76.4-124.8-98.8c-57.2-22-127.6-32.4-200.4-27.2c-5.6,0.4-10,5.2-9.6,10.8c0.4,2.8,1.6,5.6,4,7.2 c36.8,31.6,50,79.2,63.6,126.8c8,28,15.6,55.6,28.4,81.2c0,0.4,0.4,0.4,0.4,0.8c30.8,59.6,78,81.2,122.8,78.4 c18.4-1.2,36-6.4,52.4-14.4c9.2-4.8,18-10.4,26-16.8c11.6,23.2,22,47.2,30.4,72.8c1.6,5.2,7.6,8,12.8,6.4 C349.975,352.119,352.775,346.519,350.775,341.319z M271.175,189.319c-34.8-44.4-78-82.4-131.6-112.4c-4.8-2.8-11.2-1.2-13.6,4 c-2.8,4.8-1.2,11.2,4,13.6c50.8,28.8,92.4,64.8,125.6,107.2c13.2,17.2,25.2,35.2,36,54c-8,7.6-16.4,13.6-25.6,18 c-14,7.2-28.8,11.6-44.4,12.4c-37.6,2.4-77.2-16-104-67.6v-0.4c-11.6-24-19.2-50.8-26.8-78c-12.4-43.2-24.4-86.4-53.6-120.4 c61.6-1.6,120.4,8.4,169.2,27.2c54.4,20.8,96,52,114,88.8c18.8,38,9.2,76.8-14.4,105.2 C295.575,222.919,283.975,205.719,271.175,189.319z"/> </g> </g> <g> </g> <g> </g> <g> </g> </svg>',
            'travel--places': '<svg width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.003 512.003" style="enable-background:new 0 0 512.003 512.003;" xml:space="preserve"> <g> <g> <path d="M492.638,416.168c-35.445-29.635-139.695-117.048-187.5-159.684c25.879-23.721,62.112-58.999,97.354-93.327 c40.344-39.302,78.458-76.417,95.729-91c8.76-7.385,13.781-18.24,13.781-29.781c0-14.438-7.51-27.24-20.094-34.24 c-12.521-6.958-27.26-6.615-39.438,0.948c-39.313,24.385-196.469,137.25-196.469,161.583c0,7.178-0.293,15.621-2.85,25.203 c-11.751-20.152-18.483-38.615-18.483-46.536c0-15.177-51.573-64.615-153.292-146.958c-4.219-3.427-10.385-3.115-14.25,0.75 l-64,64c-3.865,3.854-4.188,10.01-0.75,14.25c82.344,101.719,131.781,153.292,146.958,153.292c9.056,0,31.823,8.76,55.227,23.852 C157.266,300.56,60.87,381.466,19.388,416.147C7.066,426.449,0.003,441.605,0.003,457.73c0,29.927,24.344,54.271,54.271,54.271 c16.115,0,31.281-7.073,41.583-19.406c35.645-42.613,119.006-141.934,160.151-187.994 c42.456,47.553,130.417,152.456,160.172,188.035c10.292,12.313,25.448,19.365,41.552,19.365c29.927,0,54.271-24.344,54.271-54.271 C512.003,441.626,504.951,426.47,492.638,416.168z M277.336,172.543c11.219-17.521,121.354-104.99,186.385-145.333 c5.5-3.385,12.167-3.573,17.813-0.438c5.719,3.188,9.135,9.021,9.135,15.604c0,5.24-2.26,10.146-6.208,13.479 c-17.854,15.073-56.229,52.448-96.854,92.021c-35.809,34.887-72.602,70.699-98.298,94.167c-1.604-1.518-3.255-3.074-4.431-4.25 c-6.327-6.327-12.008-13.227-17.279-20.24C276.351,199.191,277.309,183.556,277.336,172.543z M79.493,478.907 c-6.24,7.479-15.438,11.76-25.219,11.76c-18.167,0-32.938-14.771-32.938-32.938c0-9.792,4.281-18.979,11.74-25.208 c42.625-35.651,143.104-119.991,189.254-161.26c5.341,4.263,10.582,8.732,15.465,13.615c1.036,1.036,2.443,2.535,3.746,3.905 C200.651,334.428,115.631,435.712,79.493,478.907z M457.732,490.668c-9.781,0-18.958-4.271-25.188-11.719 c-45.26-54.125-153.365-182.854-179.667-209.156c-32.146-32.146-80.802-56.208-101.417-56.208c-0.104,0-0.219,0.01-0.323,0.01 c-12.563-4.885-72.802-72.781-126.125-138.188l6.99-6.99l99.125,99.125c2.083,2.083,4.813,3.125,7.542,3.125 c2.729,0,5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083L47.086,53.334l6.25-6.25l99.125,99.125 c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083L68.42,32.001l6.99-6.99 c65.406,53.323,133.292,113.49,137.927,124.323c0,22.229,24.146,71.229,56.458,103.542 c26.302,26.302,155.031,134.406,209.156,179.656c7.448,6.24,11.719,15.417,11.719,25.198 C490.67,475.897,475.899,490.668,457.732,490.668z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
            'activities': '<svg id="Capa_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path id="XMLID_272_" d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-407.02 181.02c0-57.102 21.297-109.316 56.352-149.142 37.143 45.142 57.438 101.499 57.438 160.409 0 53.21-16.914 105.191-47.908 148.069-40.693-40.891-65.882-97.226-65.882-159.336zm88.491 179.221c35.75-48.412 55.3-107.471 55.3-167.954 0-66.866-23.372-130.794-66.092-181.661 39.718-34.614 91.603-55.606 148.301-55.606 56.585 0 108.376 20.906 148.064 55.396-42.834 50.9-66.269 114.902-66.269 181.872 0 60.556 19.605 119.711 55.448 168.158-38.077 29.193-85.665 46.574-137.243 46.574-51.698 0-99.388-17.461-137.509-46.779zm297.392-19.645c-31.104-42.922-48.088-95.008-48.088-148.309 0-59.026 20.367-115.47 57.638-160.651 35.182 39.857 56.567 92.166 56.567 149.384 0 62.23-25.284 118.665-66.117 159.576z"/></svg>',
            'objects': '<svg width="20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"> <g><g><path d="M846.5,153.5C939,246.1,990,369.1,990,500c0,130.9-51,253.9-143.5,346.5C753.9,939,630.9,990,500,990c-130.9,0-253.9-51-346.5-143.5C61,753.9,10,630.9,10,500c0-130.9,51-253.9,143.5-346.5C246.1,61,369.1,10,500,10C630.9,10,753.9,61,846.5,153.5z M803.2,803.2c60.3-60.3,100.5-135.5,117-217.3c-12.9,19-25.2,26-32.9-16.5c-7.9-69.3-71.5-25-111.5-49.6c-42.1,28.4-136.8-55.2-120.7,39.1c24.8,42.5,134-56.9,79.6,33.1c-34.7,62.8-126.9,201.9-114.9,274c1.5,105-107.3,21.9-144.8-12.9c-25.2-69.8-8.6-191.8-74.6-225.9c-71.6-3.1-133-9.6-160.8-89.6c-16.7-57.3,17.8-142.5,79.1-155.7c89.8-56.4,121.9,66.1,206.1,68.4c26.2-27.4,97.4-36.1,103.4-66.8c-55.3-9.8,70.1-46.5-5.3-67.4c-41.6,4.9-68.4,43.1-46.3,75.6C496,410.3,493.5,274.8,416,317.6c-2,67.6-126.5,21.9-43.1,8.2c28.7-12.5-46.8-48.8-6-42.2c20-1.1,87.4-24.7,69.2-40.6c37.5-23.3,69.1,55.8,105.8-1.8c26.5-44.3-11.1-52.5-44.4-30c-18.7-21,33.1-66.3,78.8-85.9c15.2-6.5,29.8-10.1,40.9-9.1c23,26.6,65.6,31.2,67.8-3.2c-57-27.3-119.9-41.7-185-41.7c-93.4,0-182.3,29.7-255.8,84.6c19.8,9.1,31,20.3,11.9,34.7c-14.8,44.1-74.8,103.2-127.5,94.9c-27.4,47.2-45.4,99.2-53.1,153.6c44.1,14.6,54.3,43.5,44.8,53.2c-22.5,19.6-36.3,47.4-43.4,77.8C91.3,658,132.6,739,196.8,803.2c81,81,188.6,125.6,303.2,125.6C614.5,928.8,722.2,884.2,803.2,803.2z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g> </svg>',
            'symbols': '<svg width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M256,0C161.33,0,84.312,77.018,84.312,171.688c0,54.38,25.587,105.127,68.882,137.502c0,7.915,0,121.305,0,125.043 c0,9.22,7.475,16.696,16.696,16.696h10.168C187.72,485.81,218.85,512,256,512c37.15,0,68.28-26.19,75.943-61.072h10.168 c9.22,0,16.696-7.475,16.696-16.696c0-3.762,0-117.209,0-125.043c43.294-32.375,68.882-83.122,68.882-137.502 C427.688,77.018,350.67,0,256,0z M256,478.609c-18.567,0-34.507-11.461-41.116-27.68h82.233 C290.507,467.148,274.567,478.609,256,478.609z M325.415,417.537c-4.855,0-132.083,0-138.83,0v-39.041h138.83V417.537z M211.096,242.095h-8.057c-4.443,0-8.058-3.615-8.058-8.058s3.615-8.057,8.058-8.057c4.443,0,8.057,3.614,8.057,8.057V242.095z M244.488,345.105v-69.619h23.017v69.619H244.488z M332.824,286.684c-4.63,3.099-7.41,8.303-7.41,13.875v44.545h-24.519v-69.619 h8.058c22.855,0,41.449-18.594,41.449-41.45c0-22.855-18.593-41.449-41.449-41.449c-22.855,0-41.45,18.593-41.45,41.449v8.058 h-23.017v-8.058c0-22.855-18.593-41.449-41.449-41.449c-22.855,0-41.45,18.593-41.45,41.449s18.594,41.45,41.45,41.45h8.057 v69.619h-24.511V300.56c0-5.572-2.779-10.776-7.41-13.875c-38.491-25.759-61.472-68.748-61.472-114.996 c0-76.258,62.039-138.297,138.297-138.297S394.297,95.43,394.297,171.688C394.297,217.937,371.316,260.926,332.824,286.684z M300.896,242.095v-8.058c0-4.443,3.615-8.057,8.058-8.057c4.443,0,8.057,3.614,8.057,8.057s-3.614,8.058-8.057,8.058H300.896z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
            'flags': '<svg width="20" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="037---Waypoint-Flag" fill="rgb(0,0,0)" fill-rule="nonzero" transform="translate(0 -1)"><path id="Shape" d="m59.0752 28.5054c-3.7664123-1.873859-7.2507049-4.2678838-10.3506-7.1118 1.5923634-6.0211307 2.7737841-12.14349669 3.5361-18.3248.1788-1.44-.623-1.9047-.872-2.0126-.7016942-.26712004-1.4944908-.00419148-1.8975.6293-5.4726 6.5479-12.9687 5.8008-20.9053 5.0054-7.9985-.8-16.2506-1.6116-22.3684 5.4114-.85552122-1.067885-2.26533581-1.5228479-3.5837-1.1565l-.1377.0386c-1.81412367.5095218-2.87378593 2.391025-2.3691 4.2065l12.2089 43.6891c.3541969 1.2645215 1.5052141 2.1399137 2.8184 2.1435.2677318-.0003961.5341685-.0371657.792-.1093l1.0683-.2984h.001c.7485787-.2091577 1.3833789-.7071796 1.7646969-1.3844635.381318-.677284.4779045-1.478326.2685031-2.2268365l-3.7812-13.5327c5.5066-7.0807 13.18-6.3309 21.2988-5.52 8.1094.81 16.4863 1.646 22.64-5.7129l.0029-.0039c.6044387-.7534187.8533533-1.7315007.6826-2.6822-.0899994-.4592259-.3932698-.8481635-.8167-1.0474zm-42.0381 29.7446c-.1201754.2157725-.3219209.3742868-.56.44l-1.0684.2983c-.4949157.1376357-1.0078362-.1513714-1.1465-.646l-12.2095-43.6895c-.20840349-.7523825.23089143-1.5316224.9825-1.7428l.1367-.0381c.12366014-.0348192.25153137-.0524183.38-.0523.63429117.0010181 1.19083557.4229483 1.3631 1.0334l.1083.3876v.0021l6.2529 22.3755 5.8468 20.9238c.0669515.2380103.0360256.4929057-.0859.708zm40.6329-27.2925c-5.4736 6.5459-12.9707 5.7974-20.9043 5.0039-7.9033-.79-16.06-1.605-22.1552 5.1558l-5.463-19.548-2.0643-7.3873c5.5068-7.0794 13.1796-6.3119 21.3045-5.5007 7.7148.7695 15.6787 1.5664 21.7373-4.7095-.7467138 5.70010904-1.859683 11.3462228-3.332 16.9033-.1993066.7185155.0267229 1.4878686.583 1.9844 3.1786296 2.9100325 6.7366511 5.3762694 10.5771 7.3315-.0213812.2768572-.1194065.5422977-.2831.7666z"/></g></g></svg>',
            'search': '<svg width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve"> <g> <g> <path d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667 S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732 c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667 c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>',
            'close': '<svg width="20" viewBox="0 0 513 513" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"> <g transform="matrix(0.589845,0,0,0.589845,105,105)"> <g> <path d="M284.286,256.002L506.143,34.144C513.954,26.333 513.954,13.669 506.143,5.859C498.332,-1.951 485.668,-1.952 477.858,5.859L256,227.717L34.143,5.859C26.332,-1.952 13.668,-1.952 5.858,5.859C-1.952,13.67 -1.953,26.334 5.858,34.144L227.715,256.001L5.858,477.859C-1.953,485.67 -1.953,498.334 5.858,506.144C9.763,510.049 14.882,512.001 20.001,512.001C25.12,512.001 30.238,510.049 34.144,506.144L256,284.287L477.857,506.144C481.762,510.049 486.881,512.001 492,512.001C497.119,512.001 502.237,510.049 506.143,506.144C513.954,498.333 513.954,485.669 506.143,477.859L284.286,256.002Z" style="fill-rule:nonzero;"/> </g> </g> </svg>',
        }
    }

    this.selectors = {
        emit: null,
        trigger: null,
        emojiPicker: '.fg-emoji-picker',
        emojiFooter: '.fg-emoji-picker-footer',
        emojiBody: '.fg-emoji-picker-all-categories',
        emojiHeader: '.fg-emoji-picker-categories',
        closeButton: '.fg-emoji-picker-close-button'
    }

    this.bindEvents = () => {
        this.lib('body').on('click', this.functions.removeEmojiPicker.bind(this));
        this.lib('body').on('click', this.functions.emitEmoji.bind(this));
        this.lib('body').on('click', this.functions.openEmojiSelector.bind(this), this.selectors.trigger);
        // this.lib('body').on('input', this.functions.search.bind(this), this.selectors.search);
        // this.lib('body').on('keydown', this.functions.removeEmojiPicker.bind(this));
        this.lib('body').on('click', this.destroy.bind(this), this.selectors.closeButton);
        window.addEventListener('keydown', e => {
            if (e.keyCode === 27) {
                if (document.querySelector(this.selectors.emojiPicker)) {
                    document.querySelectorAll(this.selectors.emojiPicker).forEach(emoji => emoji.remove())
                    this.emojiItems = undefined
                }
            }

        })
    }

    this.html = {
        pickerBody: () => {
            return `<div class="fg-emoji-picker">
                <div style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
                    <div>
                        <div class="sk-chase">
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                            <div class="sk-chase-dot"></div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    this.destroy = () => {
        document.querySelectorAll(this.selectors.emojiPicker).forEach(p => p.remove())
        this.emojiItems = undefined;
        return true;
    }

    setCaretPosition = (field, caretPos) => {
		var elem = field
		if (elem != null) {
			if (elem.createTextRange) {
				var range = elem.createTextRange();
				range.move('character', caretPos);
				range.select();
			} else {
				if (elem.selectionStart) {
					elem.focus();
					elem.setSelectionRange(caretPos, caretPos);
				} else {
					elem.focus();
                }
			}
		}
	}

    this.functions = {

        // Put in place 
        putInPlace(myField, myValue) {
            if (document.selection) {
                myField.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
            } else if (myField.selectionStart || myField.selectionStart == "0") {
                const startPos = myField.selectionStart;
                const endPos = myField.selectionEnd;
                myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
                
                setCaretPosition(myField, startPos + 2)
                
            } else {
                myField.value += myValue;
                myField.focus()
            }
        },

        // Search
        search(e) {
            const val = e.target.value;
            if (!Array.isArray(this.emojiItems)) {
                this.emojiItems = Array.from(e.target.closest(this.selectors.emojiPicker).querySelectorAll(`${this.selectors.emojiBody} li`));
            }
            this.emojiItems.filter(emoji => {
                if (!emoji.getAttribute('data-name').match(val)) {
                    emoji.style.display = 'none'
                } else {
                    emoji.style.display = ''
                }
            })

            if (!val.length) this.emojiItems = undefined;
        },


        fetchEmojiData: () => {
            // fetch(`../../assets/js/full-emoji-list.json`)
            //     .then(response => response.json())
            //     .then(object => { this.emojiJson = object });
            console.log('http fetch json')
        },

        generateStyle() {
            document.head.insertAdjacentHTML('beforeend', `
                <style>
                .sk-chase {
                    width: 40px;
                    height: 40px;
                    position: relative;
                    animation: sk-chase 2.5s infinite linear both;
                  }
                  
                  .sk-chase-dot {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0; 
                    animation: sk-chase-dot 2.0s infinite ease-in-out both; 
                  }
                  
                  .sk-chase-dot:before {
                    content: '';
                    display: block;
                    width: 25%;
                    height: 25%;
                    background-color: #9fa1a5;
                    border-radius: 100%;
                    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
                  }
                  
                  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
                  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
                  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
                  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
                  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
                  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
                  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
                  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
                  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
                  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
                  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
                  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }
                  
                  @keyframes sk-chase {
                    100% { transform: rotate(360deg); } 
                  }
                  
                  @keyframes sk-chase-dot {
                    80%, 100% { transform: rotate(360deg); } 
                  }
                  
                  @keyframes sk-chase-dot-before {
                    50% {
                      transform: scale(0.4); 
                    } 100%, 0% {
                      transform: scale(1.0); 
                    } 
                  }


                a.fg-emoji-picker-close-button {
                    background-color: #dedede;
                }

                ${this.selectors.emojiPicker} {
                    /* position: fixed; */
                    position: absolute;
                    top:0;
                    left:0;
                    z-index: 999;
                    width: 300px;
                    max-height: 230px;
                    background-color: white;
                    box-shadow: 0px 2px 13px -2px rgba(0, 0, 0, 0.1803921568627451);
                    border-radius: 4px;
                    overflow: hidden;
                }

                ${this.selectors.emojiPicker} ${this.selectors.emojiBody} {
                    height: 301px;
                    overflow-y: auto;
                    padding: 0 15px 15px 15px;
                }

                ${this.selectors.emojiPicker} .fg-emoji-picker-container-title {
                    color: black;
                    margin: 10px 0;
                }

                ${this.selectors.emojiPicker} * {
                    margin: 0;
                    padding: 0;
                    text-decoration: none;
                    color: #666;
                    font-family: sans-serif;
                }

                ${this.selectors.emojiPicker} ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                ${this.selectors.emojiPicker} .fg-emoji-picker-category {
                    margin-top: 1px;
                    
                }

                .fg-emoji-picker-categories svg {
                    width: 17px;
                    height: 17px;
                }

                .fg-emoji-picker-grid {
                    display: flex;
                    flex-wrap: wrap;
                }

                .fg-emoji-picker-grid > li {
                    cursor: pointer;
                    flex: 0 0 calc(100% / 5);
                    max-width: calc(100% / 5);
                    height: 48px;
                    min-width: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all .2s ease;
                    background-color: white;
                }

                .fg-emoji-picker-grid > li:hover {
                    background-color: #99c9ef;
                }

                .fg-emoji-picker-grid > li:hover a {
                    -webkit-transform: scale(1.2);
                    -ms-transform: scale(1.2);
                    -moz-transform: scale(1.2);
                    transform: scale(1.2);
                }

                .fg-emoji-picker-grid > li > a {
                    display: block;
                    font-size: 25px;
                    margin: 0;
                    padding: 25px 0px;
                    line-height: 0;
                    -webkit-transition: all .3s ease;
                    -moz-transition: all .3s ease;
                    -ms-transition: all .3s ease;
                    transition: all .3s ease;
                }

                /* FILTERS */
                .fg-emoji-picker-categories {
                    /*padding: 0 15px;*/
                    background: #ececec;
                }

                .fg-emoji-picker-categories ul {
                    display: flex;
                    flex-wrap: wrap;
                }

                .fg-emoji-picker-categories li {
                    flex: 1;
                }

                .fg-emoji-picker-categories li.active {
                    background-color: #99c9ef;
                }

                .fg-emoji-picker-categories a {
                    padding: 12px 7px;
                    display: flex;
                    text-align: center;
                    justify-content: center;
                    align-items: center;
                    transition: all .2s ease;
                }

                .fg-emoji-picker-categories a:hover {
                    background-color: #99c9ef;
                }

                .fg-emoji-picker-search {
                    display:none;
                }

                .fg-emoji-picker-search input {
                    display:none;
                }

                .fg-emoji-picker-search svg {
                    display:none;
                }


                /* FOOTER */
                .fg-emoji-picker-footer {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    height: 50px;
                    padding: 0 15px 15px 15px;
                }

                .fg-emoji-picker-footer-icon {
                    font-size: 30px;
                    margin-right: 8px;
                }
            </style>`)
        },

        removeEmojiPicker() {
            const el = window.event.target;
            const picker = document.querySelector(this.selectors.emojiPicker);

            if (!el.closest(this.selectors.emojiPicker)) picker ? picker.remove() : false;
            this.emojiItems = undefined
        },


        emitEmoji(e) {

            const el = e.target;

            if (el.tagName.toLowerCase() == 'a' && el.className.includes('fg-emoji-picker-item')) {
                e.preventDefault();

                let emoji = {
                    emoji: el.getAttribute('href'),
                    code: el.getAttribute('data-code')
                }
                if (this.variable.emit) this.variable.emit(emoji, this.triggerer)
                
                // If insert into option exists
                if (this.insertInto) this.functions.putInPlace(this.insertInto, emoji.emoji)

                if (this.variable.removeOnSelection) {
                    const picker = document.querySelector(this.selectors.emojiPicker);
                    picker.remove();
                }
            }

        },


        // Open omoji picker
        openEmojiSelector(e) {

            let el = e.target.closest(this.selectors.trigger)
            if (el) {
                e.preventDefault();

                // Bounding rect
                // Trigger position and (trigger) sizes
                let el = e.target.closest(this.selectors.trigger)
                console.log(emoji_target)
                if (typeof this.variable.emit === 'function') this.triggerer = el

                // Insert picker
                const emojiPickerMain = new DOMParser().parseFromString(this.html.pickerBody.apply(this), 'text/html').body.firstElementChild;
                if(emoji_target=='internal') {
                    document.getElementById('internal-box').insertAdjacentElement('afterbegin', emojiPickerMain);
                } else if(emoji_target=='create') {
                    document.getElementById('create-box').insertAdjacentElement('afterbegin', emojiPickerMain);
                }

                let positions = {
                    buttonTop: e.pageY,
                    buttonWidth: el.offsetWidth,
                    buttonFromLeft:0,
                    bodyHeight: document.body.offsetHeight,
                    bodyWidth: document.body.offsetWidth,
                    windowScrollPosition: window.pageYOffset,
                    emojiHeight: emojiPickerMain.offsetHeight,
                    emojiWidth: emojiPickerMain.offsetWidth,
                }


                // Element position object
                let position = {
                    top: emojiPickerMain.style.top = positions.buttonTop - positions.emojiHeight,
                    left: emojiPickerMain.style.left = positions.buttonFromLeft - 0,
                    bottom: emojiPickerMain.style.top = positions.buttonTop+ positions.emojiHeight,
                    right: emojiPickerMain.style.left = positions.buttonFromLeft - positions.buttonWidth
                }


                // Positioning emoji container top
                if (this.variable.position) {
                    this.variable.position.forEach(elemPos => {

                        if (elemPos === 'right') {
                            emojiPickerMain.style.left = position[elemPos] +'px';
                        } else if (elemPos === 'bottom') {
                            emojiPickerMain.style.top = position[elemPos] + 'px';
                        } else if(elemPos === 'left'){
                            emojiPickerMain.style.top= -230 + 'px';
                        }
                    })
                }



                // Emoji Picker Promise
                this.emojiPicker().then(emojiPicker => {

                    // Create node from 
                    const node = new DOMParser().parseFromString(emojiPicker, 'text/html').body.firstElementChild;
                    
                    emojiPickerMain.innerHTML = node.innerHTML;

                    const emojiFooter       = emojiPickerMain.querySelector(this.selectors.emojiFooter);
                    const emojiBody         = emojiPickerMain.querySelector(this.selectors.emojiBody)
                    const emojiPickerHeader = emojiPickerMain.querySelector(this.selectors.emojiHeader);

                    emojiPickerMain.querySelector('input').focus();

                    // Add event listener on click
                    document.body.querySelector(this.selectors.emojiPicker).onclick = function (e) {

                        e.preventDefault();

                        let scrollTo = (element, to, duration = 100) => {

                            if (duration <= 0) return;
                            var difference = to - element.scrollTop;
                            var perTick = difference / duration * 10;

                            setTimeout(function () {
                                element.scrollTop = element.scrollTop + perTick;
                                if (element.scrollTop === to) return;
                                scrollTo(element, to, duration - 10);
                            }, 10);
                        }

                        const el = e.target;
                        const filterLlnk = el.closest('a');

                        document.querySelectorAll('.fg-emoji-picker-categories li').forEach(item => item.classList.remove('active'))

                        if (filterLlnk && filterLlnk.closest('li') && filterLlnk.closest('li').getAttribute('data-index')) {

                            let list = filterLlnk.closest('li');
                            list.classList.add('active');
                            let listIndex = list.getAttribute('data-index');

                            scrollTo(emojiBody, emojiBody.querySelector(`#${listIndex}`).offsetTop - emojiPickerHeader.offsetHeight);
                        }
                    }

                })
            }
        }
    },



    // Create emoji container / Builder engine
    this.emojiPicker = () => {

        let picker = `
        <div class="fg-emoji-picker">
            <div class="fg-emoji-picker-categories">%categories%
                <div class="fg-emoji-picker-search">
                    <input placeholder="Search emoji" autofocus />
                    ${this.variable.categoryIcons.search}
                </div>
            </div>
            <div>%pickerContainer%</div>
        </div>`;

            const closeBtn      = this.variable.closeButton ? `<li><a class="fg-emoji-picker-close-button" href="#">${this.variable.categoryIcons.close}</a></li>` : '';
            let categories      = `<ul>%categories%${closeBtn}</ul>`;
            let categoriesInner = ``;
            let outerUl         = `<div class="fg-emoji-picker-all-categories">%outerUL%</div>`;
            let innerLists      = ``;

            let fetchData = null;
            if (this.emojiJson) {
                fetchData = new Promise((resolve, reject) => {
                    let index = 0;
                    // Loop through emoji object
                    let object = this.emojiJson;
                    for (const key in object) {
                        if (object.hasOwnProperty(key)) {

                            // Index count
                            index += 1;
                            let keyToId = key.split(' ').join('-').split('&').join('').toLowerCase();

                            const categories = object[key];
                            categoriesInner += `<li class="${index === 1 ? 'active' : ''}" id="${keyToId}" data-index="${keyToId}"><a href="#${keyToId}">${this.variable.categoryIcons[keyToId]}</a></li>`

                            innerLists += `
                            <ul class="fg-emoji-picker-category ${index === 1 ? 'active' : ''}" id="${keyToId}" category-name="${key}">
                                <div class="fg-emoji-picker-container-title">${key}</div>
                                <div class="fg-emoji-picker-grid">`;

                                    // Loop through emoji items
                                    categories.forEach(item => {
                                        innerLists += `<li data-name="${item.description.toLowerCase()}"><a class="fg-emoji-picker-item" title="${item.description}" data-name="${item.description.toLowerCase()}" data-code="${item.code}" href="${item.emoji}">${item.emoji}</a></li>`;
                                    });
                                    innerLists += `
                                </div>
                            </ul>`;
                        }
                    }
                    let allSmiles = outerUl.replace('%outerUL%', innerLists)
                    let cats = categories.replace('%categories%', categoriesInner);
                    let pickerContainer = picker.replace('%pickerContainer%', allSmiles)
                    let data = pickerContainer.replace('%categories%', cats);
                    resolve(data);
                });
            } else {
                fetchData = fetch(`${this.variable.dir}full-emoji-list.json`)
                    .then(response => response.json())
                    .then(object => {

                        // Index count
                        let index = 0;
                        this.emojiJson = object;

                        // Loop through emoji object
                        for (const key in object) {
                            if (object.hasOwnProperty(key)) {

                                // Index count
                                index += 1;

                                let keyToId = key.split(' ').join('-').split('&').join('').toLowerCase();

                                const categories = object[key];
                                categoriesInner += `<li class="${index === 1 ? 'active' : ''}" id="${keyToId}" data-index="${keyToId}"><a href="#${keyToId}">${this.variable.categoryIcons[keyToId]}</a></li>`

                                innerLists += `
                                <ul class="fg-emoji-picker-category ${index === 1 ? 'active' : ''}" id="${keyToId}" category-name="${key}">
                                    <div class="fg-emoji-picker-container-title">${key}</div>
                                    <div class="fg-emoji-picker-grid">`;

                                        // Loop through emoji items
                                        categories.forEach(item => {
                                            innerLists += `<li data-name="${item.description.toLowerCase()}"><a class="fg-emoji-picker-item" title="${item.description}" data-name="${item.description.toLowerCase()}" data-code="${item.code}" href="${item.emoji}">${item.emoji}</a></li>`;
                                        })

                                        innerLists += `
                                    </div>
                                </ul>`;
                            }
                        }


                        let allSmiles = outerUl.replace('%outerUL%', innerLists)
                        let cats = categories.replace('%categories%', categoriesInner);
                        let pickerContainer = picker.replace('%pickerContainer%', allSmiles)
                        let data = pickerContainer.replace('%categories%', cats);
                        return data;
                    })
            }

            return fetchData;
        }

    this.init();

}