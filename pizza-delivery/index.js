const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

const nm = []
const deliveryGuysData = []
rl.question('N, M ? (Enter in the format N M space in between):', function (nmInput) {
  nm.push(...nmInput.split(' ').map(Number))
  console.log(typeof nm[0])

  rl.question(`Delivery guys detail x, y, d? Press Enter to Continue:`, function () {
    console.log('Enter in the format 1 2 3 space in between, press return or enter for next line')
    console.log('Press f to finish')
    console.log(`Enter ${nm[1]} guys`)

    rl.on('line', (input) => {
      if (input === 'f') {
        const maxIntersect = locationsGenerator(nm, deliveryGuysData)
        console.log(`maxIntersect is ${maxIntersect}`)
        rl.close()
        return maxIntersect
      }

      deliveryGuysData.push(input.split(' ').map(Number))
      console.log(deliveryGuysData)
    })
  })
})

rl.on('close', () => {
  console.log('bye')
  process.exit(0)
})

function locationsGenerator(boundary, deliveryGuysData) {
  let locations = {}
  let max = 0
  let curMax = 0

  for (let i = 0; i < deliveryGuysData.length; i++) {
    let [xPosition, yPosition, steps] = deliveryGuysData[i]

    for (let j = 0; j <= steps; j++) {
      for (let k = 0; k <= steps - j; k++) {
        const position1 = objKeyGenerator(boundary[0], xPosition, yPosition, j, k, true, true)
        const position2 = objKeyGenerator(boundary[0], xPosition, yPosition, j, k, false, false)
        const position3 = objKeyGenerator(boundary[0], xPosition, yPosition, j, k, false, true)
        const position4 = objKeyGenerator(boundary[0], xPosition, yPosition, j, k, true, false)

        locations = {
          ...locations,
          [position1]: positionValueChecker(position1, locations),
          [position2]: positionValueChecker(position2, locations),
          [position3]: positionValueChecker(position3, locations),
          [position4]: positionValueChecker(position4, locations),
        }

        curMax = Math.max(locations[position1], locations[position2], locations[position3], locations[position4])

        if (curMax > max) {
          max = curMax
        }
      }
    }
  }

  return max
}

function objKeyGenerator(boundary, xPosition, yPosition, i, j, xPositive, yPositive) {
  const leftX = xPosition - i
  const bottomY = yPosition - j
  const topY = yPosition + j
  const rightX = xPosition + i

  if (!xPositive && !yPositive) {
    return checkBoundary(leftX, bottomY, boundary)
  } else if (!xPositive) {
    return checkBoundary(leftX, topY, boundary)
  } else if (!yPositive) {
    return checkBoundary(rightX, bottomY, boundary)
  }

  return checkBoundary(rightX, topY, boundary)
}

function checkBoundary(position1, position2, boundary) {
  if (position1 > boundary || position1 < 1 || position2 > boundary || position2 < 1) {
    return
  }

  return `${position1}${position2}`
}

function positionValueChecker(position, locations) {
  return position === undefined ? 0 : typeof locations[position] === 'undefined' ? 1 : locations[position] + 1
}

module.exports = locationsGenerator
