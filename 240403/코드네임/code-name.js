const fs = require('fs')

const input = () => {
  const input = fs.readFileSync('/dev/stdin').toString()
  const tokens = input.split('\n').flatMap((token) => token.split(' '))
  const validTokens = tokens.filter((token) => token !== '')

  return validTokens
}

const TOKENS = input()
let TOKEN_INDEX = 0

const scanString = () => {
  const stringValue = TOKENS[TOKEN_INDEX]
  TOKEN_INDEX += 1
  return stringValue
}

const scanInt = () => {
  const intValue = parseInt(TOKENS[TOKEN_INDEX])
  TOKEN_INDEX += 1
  return intValue
}

// -------------------------------------------- CODE -------------------------------------------- //

let Agents = []
class Agent {
  constructor(codename, score) {
    this.codename = codename
    this.score = score
  }
}

for (let i = 0; i < 5; i++) {
  codename = scanString()
  score = scanInt()

  Agents.push(new Agent(codename, score))
}

Agents.sort((a, b) => {
  return a.score - b.score
})

console.log(`${Agents[0].codename} ${Agents[0].score}`)