import React from 'react';
import ReactDOM from 'react-dom';
import '../sass/style.scss';
import Breeds from '../breedslist/breeds.js';

// QUIZZ

var resultedBreeds = Breeds;
var clickedResult;


var audio = new Audio("js/barksound.mp3");

class Quizz extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      subjectNumber: 0,
      subjects: ['GROOMING:', 'EXCERCISE:', 'EXPERIENCE:', 'HOUSING:'],
      questionOne: 'I COULD BRUSH MY DOG ALL THE TIME',
      questionTwo: 'ONCE A WEEK IS ENOUGH',
      questionThree: 'MAYBE OCCASIONALLY',
      questionFour: 'NOT REALLY PLANNING TO DO ANYTHING',
      progressWidth: 0,
      clicked: 0,
      imageURL: '',
      resultedOne: '',
      resultedTwo: '',
      resultedThree: '',
      breed: ''
    }
  }

//CLICK HANDLERS

   clicked = () => {
     this.setState({
       clicked: 1
     })
     audio.play();
   }

   resultOnClickOne = () => {
     clickedResult = resultedBreeds[0];
     this.setState({
       clicked: 4,
       imageURL: this.state.resultedOne,
       breed: resultedBreeds[0].breed
     });

   }
   resultOnClickTwo = () => {
     clickedResult = resultedBreeds[1];
     this.setState({
       clicked: 4,
       imageURL: this.state.resultedTwo,
       breed: resultedBreeds[1].breed
     })
   }
   resultOnClickThree = () => {
     clickedResult = resultedBreeds[2];
     this.setState({
       clicked: 4,
       imageURL: this.state.resultedThree,
       breed: resultedBreeds[2].breed
     })
   }
   backToResults = () => {
     this.setState({
       clicked: 3
     });
   }
   changeRandomPicture = () => {
     fetch(`https://dog.ceo/api/breed/${this.state.breed}/images/random`)
         .then(res => res.json())
         .then(data => data.message)
         .then(message => {
             this.setState({
                 imageURL: message
             });
         })
   }

   ClickNextOne = () => {


     if (this.state.subjectNumber === 0) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'I COULD RUN WITH MY DOG ALL THE TIME',
         questionTwo: 'NO PROBLEM GOING OUT COUPLE OF TIMES A DAY',
         questionThree: 'ONE WALK PER DAY SHOULD DO IT',
         questionFour: 'IM MORE OF A COUCH POTATO SO SHOULD BE MY DOG',
         progressWidth: 33,
       })
       resultedBreeds = resultedBreeds.filter(breed => breed.one === 1);

     }
     else if (this.state.subjectNumber === 1) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'OWNED DOGS BEFORE',
         questionTwo: 'HAD DOGS IN FAMILY HOME',
         questionThree: 'NEVER HAD A DOG BUT PLAYED WITH MANY',
         questionFour: 'NO EXPERIENCE AT ALL',
         progressWidth: 66
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.two === 1);
     }
     else if (this.state.subjectNumber === 2) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'BIG HOUSE WITH BIG YARD',
         questionTwo: 'HOUSE WITH SMALL YARD',
         questionThree: 'APARTMENT WITH A BALCONY',
         questionFour: 'SMALL APARTMENT NO YARD',
         progressWidth: 100,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.three === 1);
     }
     else if (this.state.subjectNumber === 3) {

      resultedBreeds = resultedBreeds.filter(breed => breed.four === 1);

      fetch(`https://dog.ceo/api/breed/${resultedBreeds[0].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedOne: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[1].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedTwo: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[2].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedThree: message,
              });
          })
     }
   }
   ClickNextTwo = () => {

     if (this.state.subjectNumber === 0) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'I COULD RUN WITH MY DOG ALL THE TIME',
         questionTwo: 'NO PROBLEM GOING OUT COUPLE OF TIMES A DAY',
         questionThree: 'ONE WALK PER DAY SHOULD DO IT',
         questionFour: 'IM MORE OF A COUCH POTATO SO SHOULD BE MY DOG',
         progressWidth: 33,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.one === 2);
     }
     else if (this.state.subjectNumber === 1) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'OWNED DOGS BEFORE',
         questionTwo: 'HAD DOGS IN FAMILY HOME',
         questionThree: 'NEVER HAD A DOG BUT PLAYED WITH MANY',
         questionFour: 'NO EXPERIENCE AT ALL',
         progressWidth: 66
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.two === 2);
     }
     else if (this.state.subjectNumber === 2) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'BIG HOUSE WITH BIG YARD',
         questionTwo: 'HOUSE WITH SMALL YARD',
         questionThree: 'APARTMENT WITH A BALCONY',
         questionFour: 'SMALL APARTMENT NO YARD',
         progressWidth: 100,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.three === 2);
     }
     else if (this.state.subjectNumber === 3) {
       resultedBreeds = resultedBreeds.filter(breed => breed.four === 2);

      fetch(`https://dog.ceo/api/breed/${resultedBreeds[0].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedOne: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[1].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedTwo: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[2].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedThree: message,
              });
          })
     }
   }
   ClickNextThree = () => {

     if (this.state.subjectNumber === 0) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'I COULD RUN WITH MY DOG ALL THE TIME',
         questionTwo: 'NO PROBLEM GOING OUT COUPLE OF TIMES A DAY',
         questionThree: 'ONE WALK PER DAY SHOULD DO IT',
         questionFour: 'IM MORE OF A COUCH POTATO SO SHOULD BE MY DOG',
         progressWidth: 33,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.one === 3);
     }
     else if (this.state.subjectNumber === 1) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'OWNED DOGS BEFORE',
         questionTwo: 'HAD DOGS IN FAMILY HOME',
         questionThree: 'NEVER HAD A DOG BUT PLAYED WITH MANY',
         questionFour: 'NO EXPERIENCE AT ALL',
         progressWidth: 66
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.two === 3);
     }
     else if (this.state.subjectNumber === 2) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'BIG HOUSE WITH BIG YARD',
         questionTwo: 'HOUSE WITH SMALL YARD',
         questionThree: 'APARTMENT WITH A BALCONY',
         questionFour: 'SMALL APARTMENT NO YARD',
         progressWidth: 100,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.three === 3);
     }
     else if (this.state.subjectNumber === 3) {

      resultedBreeds = resultedBreeds.filter(breed => breed.four === 3);
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[0].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedOne: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[1].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedTwo: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[2].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedThree: message,
              });
          })
     }
   }
   ClickNextFour = () => {

     if (this.state.subjectNumber === 0) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'I COULD RUN WITH MY DOG ALL THE TIME',
         questionTwo: 'NO PROBLEM GOING OUT COUPLE OF TIMES A DAY',
         questionThree: 'ONE WALK PER DAY SHOULD DO IT',
         questionFour: 'IM MORE OF A COUCH POTATO SO SHOULD BE MY DOG',
         progressWidth: 33,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.one === 4);

     }
     else if (this.state.subjectNumber === 1) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'OWNED DOGS BEFORE',
         questionTwo: 'HAD DOGS IN FAMILY HOME',
         questionThree: 'NEVER HAD A DOG BUT PLAYED WITH MANY',
         questionFour: 'NO EXPERIENCE AT ALL',
         progressWidth: 66
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.two === 4);
     }
     else if (this.state.subjectNumber === 2) {
       this.setState({
         subjectNumber: this.state.subjectNumber + 1,
         questionOne: 'BIG HOUSE WITH BIG YARD',
         questionTwo: 'HOUSE WITH SMALL YARD',
         questionThree: 'APARTMENT WITH A BALCONY',
         questionFour: 'SMALL APARTMENT NO YARD',
         progressWidth: 100,
       });
       resultedBreeds = resultedBreeds.filter(breed => breed.three === 4);
     }
     else if (this.state.subjectNumber === 3) {
       resultedBreeds = resultedBreeds.filter(breed => breed.four === 4);

      fetch(`https://dog.ceo/api/breed/${resultedBreeds[0].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedOne: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[1].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedTwo: message,
              });
          })
      fetch(`https://dog.ceo/api/breed/${resultedBreeds[2].breed}/images/random`)
          .then(res => res.json())
          .then(data => data.message)
          .then(message => {
              this.setState({
                  subjectNumber: this.state.subjectNumber + 1,
                  clicked: 3,
                  resultedThree: message,
              });
          })
     }
   }


  render(){

    var progressWidth = {
      width: this.state.progressWidth + '%'
    }

    if (this.state.clicked===0) {
     return (
       <div>
         <h1 className='center'>FIND YOUR PERFECT DOG BREED</h1>
         <div onClick={this.clicked} className='StartQuizz'>START THE QUIZZ</div>
       </div>
     )
   }
   else if (this.state.clicked===1) {
     return  <div>
       <div className='progressBarBorder'>
         <div className='progressBar' style={progressWidth}></div>
       </div>
       <div className='StartQuizz'>{this.state.subjects[this.state.subjectNumber]}</div>
        <div className='centerQuestions'>
          <h1 className='question' onClick={this.ClickNextOne}>{this.state.questionOne}</h1>
          <h1 className='question' onClick={this.ClickNextTwo}>{this.state.questionTwo}</h1>
          <h1 className='question' onClick={this.ClickNextThree}>{this.state.questionThree}</h1>
          <h1 className='question' onClick={this.ClickNextFour}>{this.state.questionFour}</h1>
        </div>
      </div>
   }
   else if (this.state.clicked===3) {
     return   <div>
                 <h1 className='centerImages'>HERE ARE YOUR TOP BREEDS:</h1>
                 <div className='imageContainer'>
                   <img className='images' onClick={this.resultOnClickOne} src={this.state.resultedOne}/>
                   <img className='images' onClick={this.resultOnClickTwo} src={this.state.resultedTwo}/>
                   <img className='images' onClick={this.resultOnClickThree} src={this.state.resultedThree}/>
                 </div>
                 <div className='imageContainer'>
                 <h1 className='breedsName'>{resultedBreeds[0].breed}</h1>
                 <h1 className='breedsName'>{resultedBreeds[1].breed}</h1>
                 <h1 className='breedsName'>{resultedBreeds[2].breed}</h1>
                 </div>
              </div>
   }
   else if (this.state.clicked===4) {
     return   <div className='resultPage'>
                <div className='leftSide'>
                 <div className='circle'/>
                 <h1 onClick={this.backToResults} className='backToResults'>BACK TO RESULTS</h1>
                 <img className='eachImage' onClick={this.changeRandomPicture} src={this.state.imageURL}/>
                 <div className='average'>
                  <h1> AVERAGE WEIGHT </h1>
                  <h2>{clickedResult.weight}</h2>
                  <h1> AVERAGE HEIGHT </h1>
                  <h2>{clickedResult.height}</h2>
                 </div>
                </div>
                <div className='rightSide'>
                  <div className='information'>
                   <h1>DESCRIPTION</h1>
                   <p>{clickedResult.description}</p>
                   <h1>HISTORY</h1>
                   <p>{clickedResult.history}</p>
                  </div>
                  <iframe  src={clickedResult.youtube} allowFullScreen></iframe>
                </div>
              </div>
   }
  }
}


class App extends React.Component {
  render(){
    return  <Quizz/>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
