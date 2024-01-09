import React, { Component } from 'react'

class ResultCompo extends Component {
  render() {
    return (
      <>
        <div id='full-full-div'>
        <h2>Result</h2>
        <div id='full-div'>
          <div>
            <h3>You need more practice!</h3>
            <h2>Your Score is 20%</h2>
          </div>

          <div id='result-div'>
            <div className='fun'>Total number of questions
              <p className='flex-end'>15</p>
            </div>
            <div className='fun'>Number of attempted questions
              <p className='flex-end'>9</p>
            </div>
            <div className='fun'>Number of correct answers
              <p className='flex-end'>3</p>
            </div>
            <div className='fun'>Number of wrong answers
              <p className='flex-end'>6</p>
            </div>
          
           </div>
        </div>

        <div id="bottom">
          <div className='bottom-button'>Play Again</div>
          <div className='bottom-button'>Back to Home</div>
        </div>
        </div>
      </>
    )
  }
}

export default ResultCompo