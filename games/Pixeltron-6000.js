/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Pixeltron 6000
@description: A sandbox game where you can draw and erase with different colors.
@author: salping
@tags: ['sandbox', 'utility']
@addedOn: 2024-11-12
*/

const player = "w"
const colore = "k"
const lbor = "l"
const cbor1 = "c"
const bbor = "z"
const cbor2 = "d"
const rbor = "x"
const red = "r"
const blue = "b"
const green = "g"
const yellow = "y"
const pink = "p"
const purple = "u"
const orange = "o"
const black = "i"
const grey = "n"
const p = "1"
const i = "2"
const x = "3"
const e = "4"
const l = "5"
const t = "6"
const r = "7"
const o = "8"
const n = "9"


setLegend(
  [ player, bitmap`
000..........000
0..............0
0..............0
................
................
................
................
................
................
................
................
................
................
0..............0
0..............0
000..........000` ],
  [ colore, bitmap`
000..........000
0..............0
0..............0
................
................
................
................
................
................
................
................
................
................
0..............0
0..............0
000..........000`],
  [ lbor, bitmap`
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100
1111111111111100`],
  [ cbor1, bitmap`
1111111111111100
1111111111111100
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
0000000000000000
0000000000000000`],
  [ bbor, bitmap`
0000000000000000
0000000000000000
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
0000000000000000
0000000000000000`],
  [ cbor2, bitmap`
0011111111111111
0011111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
0011111111111111
0011111111111111`],
  [ rbor, bitmap`
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111
0011111111111111`],
  [ red, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [ green, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444`],
  [ blue, bitmap`
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555
5555555555555555`],
  [ yellow, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`],
  [ orange, bitmap`
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999
9999999999999999`],
  [ purple, bitmap`
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH
HHHHHHHHHHHHHHHH`],
  [ pink, bitmap`
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888
8888888888888888`],
  [ black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [ grey, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ p, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
000.............
0.0.00..0.......
000.0..0.0......
0...0...0.......`],
  [ t, bitmap`
................
................
....00..........
....00..........
....00..........
....00..........
..000000........
..000000........
....00..........
....00..........
....00..........
....00..........
....00..........
....00..........
......0000......
......0000......`],
  [ i, bitmap`
................
................
................
................
................
................
................
................
................
................
.77...88...66...
7....8..8.6..6.0
777..8..8.6..6.0
7..7.8..8.6..6.0
7..7.8..8.6..6.0
.77...88...66...`],
  [ e, bitmap`
................
................
................
................
................
................
................
................
................
................
00..............
..0.............
..0.............
..0.............
..0.............
00..............`],
  [ x, bitmap`
................
0000000000000000
0000000000000000
................
................
................
................
................
................
................
................
................
................
................
................
................`],
  
)

setSolids([player, colore, lbor, cbor1, bbor, cbor2, rbor])

let level = 0
const levels = [
  map`
lwk......x
l........x
l........x
l........x
l........x
l........x
l........x
l........x
czzzzzzzzd
roygbupinx`
]

setMap(levels[level])

if(level == 0) {

  addText("WASD to move", {
    x: 4,
    y: 1
  })

  addText("JL to change\ncolor", {
    x: 4,
    y: 3
  })

  addText("I to draw", {
    x: 4,
    y: 6
  })

  addText("K to erase /\ndraw white", {
    x: 4,
    y: 8
  })

  colors = [red, orange, yellow, green, blue, purple, pink, black, grey]
  
  getFirst(colore).x -= 3
  getFirst(colore).y += 9

  onInput("i", () => {
    let x = getFirst(player).x
    let y = getFirst(player).y
    clearTile(getFirst(player).x, getFirst(player).y)
    addSprite(x, y, player)
    addSprite(getFirst(player).x, getFirst(player).y, colors[getFirst(colore).x])
  })
  onInput("k", () => {
    let x = getFirst(player).x
    let y = getFirst(player).y
    clearTile(getFirst(player).x, getFirst(player).y)
    addSprite(x, y, player)
  })
  
  onInput("j", () => {
    getFirst(colore).x -= 1
  })
  onInput("l", () => {
    getFirst(colore).x += 1
  })

  onInput("w", () => {
    getFirst(player).y -= 1
  })
  onInput("s", () => {
    getFirst(player).y += 1
  })
  onInput("a", () => {
    getFirst(player).x -= 1
  })
  onInput("d", () => {
    getFirst(player).x += 1
  })
  
  afterInput(() => {
    clearText()
    
  })
}

setPushables({
  [ player ]: []
})

afterInput(() => {
  
})
