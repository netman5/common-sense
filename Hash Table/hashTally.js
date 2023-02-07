function addVote(candidate) {
  let votes = {}
  if (candidate) {
    votes[candidate]++
  } else {
    votes[candidate] = 1
  }

  return votes
}

// function countVotes() {
//   return votes
// }

console.log(addVote('Joana'));



