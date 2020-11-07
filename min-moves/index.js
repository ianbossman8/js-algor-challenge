function minMove1(A, B) {
  let change = 0

  for (let i = 0; i < A.length; i++) {
    let int1 = A[i].toString().split('')
    let int2 = B[i].toString().split('')
    for (let j = 0; j < int1.length; j++) {
      if (int1[j] === int2[j]) continue
      change += Math.abs(int1[j] - int2[j])
    }
  }

  return change
}

exports.minMove1 = minMove1
