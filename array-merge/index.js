function merger1(a, b) {
  const newArr = []

  let longerArr
  let iterLen

  if (a.length < b.length) {
    iterLen = a.length
    longerArr = b
  } else {
    iterLen = b.length
    longerArr = a
  }

  let j = 0
  for (let i = 0; i < iterLen; i++) {
    newArr[j + i] = a[i]
    newArr[j + i + 1] = b[i]
    j++
  }

  if (a.length === b.length) {
    return newArr
  }

  newArr.push(...longerArr.slice(-(longerArr.length - iterLen)))

  return newArr
}

function merger2(a, b) {
  const len = Math.min(a.length, b.length)
  let loopLength = len * 2
  const remain = b.length - len > 0 ? b.slice(-(b.length - len)) : a.length - len > 0 ? a.slice(-(a.length - len)) : []

  let i = len
  let j = len
  i--
  j--

  while (loopLength--) {
    if (loopLength % 2 !== 0) {
      a[loopLength] = b[j]
      j--
    } else {
      a[loopLength] = a[i]
      i--
    }
  }

  for (let i = 0; i < remain.length; i++) {
    a[len * 2 + i] = remain[i]
  }

  return a
}

module.exports.merger1 = merger1
module.exports.merger2 = merger2
