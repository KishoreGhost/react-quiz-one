import React, { Component } from 'react'

class QuizCompo extends Component {
  render() {
    return (
      <>
        <div id='main-div'>
            <h2>Question</h2>
            <div className='question-no'>
                <p>1 of 15</p>
            </div>
            <p>Which is the only mammal that can jump?</p>
            
            <div id='option-div'>
            
                <div className='option'>Dog</div>
                <div className='option'>Elephant</div>
                <div className='option'>Goat</div>
                <div className='option'>Lion</div>
            </div>

            <div id="bottom-div">
                <div className='button previous'>Previous</div>
                <div className='button next'>Next</div>
                <div className='button quit'>Quit</div>
            </div>
        </div>
      </>
    )
  }
}

export default QuizCompo