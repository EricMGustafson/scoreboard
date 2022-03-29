let score = 0
let scoreTwo = 0

drawScore()




function teamOneScore() {
  score += 1
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamOneScoreThree() {
  score += 3
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamOneScoreSix() {
  score += 6
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamOneMinus() {
  score -= 1
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamOneMinusThree() {
  score -= 3
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamOneMinusSix() {
  score -= 6
  document.getElementById('score-1').innerText = JSON.stringify(score)
}

function teamTwoScore() {
  scoreTwo += 1
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}

function teamTwoScoreThree() {
  scoreTwo += 3
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}

function teamTwoScoreSix() {
  scoreTwo += 6
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}

function teamTwoMinus() {
  scoreTwo -= 1
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}

function teamTwoMinusThree() {
  scoreTwo -= 3
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}

function teamTwoMinusSix() {
  scoreTwo -= 6
  document.getElementById('score-2').innerText = JSON.stringify(scoreTwo)
}


function drawScore() {
  let oldScore = document.getElementById('score-1')
  let oldScoreTwo = document.getElementById('score-2')
  oldScore.innerText += score
  oldScoreTwo.innerText += scoreTwo
}

function gameReset() {
  let scoreOne = JSON.parse(document.getElementById('score-1').innerText)
  let scoreTwos = JSON.parse(document.getElementById('score-2').innerText)
  scoreOne = 0
  scoreTwos = 0
  score = scoreOne
  scoreTwo = scoreTwos
  document.getElementById('score-1').innerText = scoreOne
  document.getElementById('score-2').innerText = scoreTwos
}








function whoWinning() {
    if (score > scoreTwo) {
        document.getElementById('winning').innerText = 'One'
      } else {
          document.getElementById('winning').innerText = 'Two'
        }
      }
      
      // function gameOver() {
      //     if (score == 25 || score == 25) {}