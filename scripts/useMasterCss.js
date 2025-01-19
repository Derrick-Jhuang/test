MasterStyle.extend('semantics', {
  // 'fx': {
  //   display: 'flex'
  // },
  // 'fx-c': {
  //   display: 'flex',
  //   'justify-content': 'center',
  //   'align-items': 'center',
  // },
  // utility
  // 'style\:noe': {
  //   'margin': '0',
  //   'padding': '0',
  //   'list-style': 'none',
  // },
  // 'el\:reset': {
  //   'margin': '0',
  //   'padding': '0',
  //   'list-style': 'none',
  // },
  // 'size\:full': {
  //   'width': '100%',
  //   'height': '100%',
  // }
})

MasterStyle.extend('breakpoints', {
    pc: '1367px',
})

MasterStyle.extend('colors', {
  main: '41A4D0',
  vice: '003A79',
  vice3: '0F7DAF',
  vice4: '54A433',
  baseGary: '555555',
  baseBlack: '222222',
  primary: 'ff9b5d',
  blue: '1194D7',
  origin: 'F4911E'
})

MasterStyle.extend('classes', {
  // transition
  'trs': 'transition:all|.5s|ease',

  // custom
  'el\\:reset': 'm:0 p:0 list-style:none', // 在{}裡使用的話要加上\ {el\:reset}
  'el-reset': 'm:0 p:0 list-style:none',
  'reset': 'm:0 p:0 list-style:none',
  'size-full': 'w:full h:full',
  'fx': 'flex',
  'fx-c': 'flex ai:center jc:center',

  // font family
  'ff-biryani': 'font-family:$(font-biryani)',
  'ff-jost': 'font-family:$(font-jost)',
  'ff-gloock': 'font-family:$(font-gloock)',
  'ff-outfit': 'font-family:$(font-outfit)',
  'ff-actor': 'font-family:$(font-actor)',
  'ff-castoro': 'font-family:$(font-castoro)',
  'ff-akatab': 'font-family:$(font-akatab)',
  'ff-rcb': 'font-family:$(font-rcb)',
  'ff-arimo': 'font-family:$(font-arimo)',

  // menu
  'dropdown': 'list-style:none p:0 m:0 abs top:100% left:50% translate(-50%,20) opacity:0 pointer-events:none w:150 bg:#fff box-shadow:0|4|4|0|#00000040 ~all|.5s|ease {block;text:center;p:5|15}>li>a',

  // footer
})