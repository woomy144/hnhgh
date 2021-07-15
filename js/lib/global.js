const global = {
  // Keys and other mathematical constants
  KEY_ESC: 27,
  KEY_ENTER: 13,
  KEY_CHAT: 72,
  KEY_LEFT: 65,
  KEY_UP: 87,
  KEY_RIGHT: 68,
  KEY_DOWN: 83,
  KEY_LEFT_ARROW: 37,
  KEY_UP_ARROW: 38,
  KEY_RIGHT_ARROW: 39,
  KEY_DOWN_ARROW: 40,
  KEY_AUTO_SPIN: 67,
  KEY_AUTO_FIRE: 69,
  KEY_OVER_RIDE: 82,
  KEY_UPGRADE_ATK: 49,
  KEY_UPGRADE_HTL: 50,
  KEY_UPGRADE_SPD: 51,
  KEY_UPGRADE_STR: 52,
  KEY_UPGRADE_PEN: 53,
  KEY_UPGRADE_DAM: 54,
  KEY_UPGRADE_RLD: 55,
  KEY_UPGRADE_MOB: 56,
  KEY_UPGRADE_RGN: 57,
  KEY_UPGRADE_SHI: 48,
  KEY_MOUSE_0: 32,
  KEY_MOUSE_1: 86,
  KEY_MOUSE_2: 16,
  KEY_CHOOSE_1: 89,
  KEY_CHOOSE_2: 72,
  KEY_CHOOSE_3: 85,
  KEY_CHOOSE_4: 74,
  KEY_CHOOSE_5: 73,
  KEY_CHOOSE_6: 75,
  KEY_CHOOSE_7: 79,
  KEY_CHOOSE_8: 76,
  KEY_LEVEL_UP: 78,
  KEY_TESTBED: 192,
  KEY_DEBUG: 76,
  KEY_CLASS_TREE: 89,
  KEY_UPGRADE_MAX: 77,
  KEY_SUICIDE: 79,
  KEY_TP: 84,
  KEY_PASSIVE: 80,
  KEY_GOD: 71,
  KEY_VIDEO: 90,
  KEY_SCREENSHOT: 81,

  // Canvas
  messages: [],
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  gameWidth: 0,
  gameHeight: 0,
  xoffset: -0,
  yoffset: -0,
  scrollX: 0,
  gameStart: false,
  disconnected: false,
  died: false,
  kicked: false,
  continuity: false,
  mockupError: false,
  startPingTime: 0,
  toggleMassState: 0,
  backgroundColor: '#f2fbff',
  lineColor: '#000000',
  showTree: false,
  showDebug: false,
  domColors: Array(10).fill(3),

  // ===============================
  // Chat system.
  // ===============================
  isChatMode: false,
  // ===============================

  server: null,
  codeTable: [{
    z: "Private",
    local: "Local",
    glitch: "Glitch",
    os: "OpenShift",
    heroku: "Heroku",
    vultr: "Vultr",
    aws: "Amazon AWS",
    cloud9: "AWS Cloud9",
    buyvm: "BuyVM",
    ovh: "OVH",
    evm: "ExtraVM",
    repl: "Repl.it"
  },
  {
    unknown: ["Unknown", null],
    local: ["Local", null],
    virginia: ["US East", -4],
    oregon: ["US West", -7],
    us_east: ["US East", 3],
    frankfurt: ["Europe", 2],
    sv: ["US West", -7],
    la: ["US West", -7],
    germany: ["Europe", 2],
    london: ["Europe", 1],
    singapore: ["Asia", 8],
    ct: ["US East", -4],
    us: ["US", -4],
    gbl: ["Global", -8],
    ussr: ["USSR", null]
  }
  ],
  timezone: new Date().getTimezoneOffset() / -60,
  servers: [{
    id: "z",
    type: "0unk",
    name: "Private",
    code: "z-unknown",
    at: "private",
    secure: 0,
  },
  {
    visible: 1,
    id: "1",
    type: "H1",
    name: "Server #1",
    code: "heroku-ct",
    at: "diep3io-1.herokuapp.com",
    secure: 1,
    prefer: 1,
  },
  {
    visible: 1,
    id: "2",
    type: "H2",
    name: "Server #2",
    code: "heroku-ct",
    at: "diep3io-2.herokuapp.com",
    secure: 1,
  },
  {
    visible: 1,
    id: "dev",
    type: "Dev",
    name: "Developer server",
    code: "repl-us_east",
    at: "diep3ioserver.andrewspec.repl.co",
    secure: 1
  },
   /*{
    visible: 0,
    id: "svg",
    type: "SVG",
    name: "SVG Shape Testing",
    code: "heroku-us_east",
    at: "svgshapetesting.andrewspec.repl.co",
    secure: 1
  }, */
  ]

    .map((data, i) => ({
      data,
      i
    }))
    /*
    .sort((a, b) =>
      a.data.type < b.data.type ? -1 : b.data.type > a.data.type ? 1 : a.i - b.i
    )
    */
    .map(({
      data
    }) => data),
  partyLink: 0
};

export {
  global
};