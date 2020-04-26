import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Quiz from './Quiz';
import Puzzle from './Puzzle'

class GamesView extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      show: props.show,
      gameIndex: 0,
    }
  }

  onGameFinished(){
    const {gameIndex} = this.state;
    if(this.props.games.length > gameIndex + 1){
      if(this.state.gameIndex === gameIndex){
        this.setState({ gameIndex: gameIndex + 1 });
      }
    } else {
      this.props.onFinish();
    }
  }

  render(){
    const { show, gameIndex } = this.state;
    const game = this.props.games[gameIndex];
    let gameComponent = null;
    let gameTitle = "";
    switch(game.type){
      case 'quiz':
        gameTitle = "Quiz";
        gameComponent = (
          <Quiz 
            id={game.id}
            onFinish={this.onGameFinished.bind(this)}
          />
        );
      break;

      case 'puzzle':
          gameTitle = "Puzzle";
          gameComponent = (
            <Puzzle 
              image={'https://cutewallpaper.org/21/nice-wallpaper-pictures/Nice-Wallpapers-Top-Free-Nice-Backgrounds-WallpaperAccess.jpg'}
            />
          )
      break;
    }

    return (
      <Modal 
        show={show}
        onHide={() => this.onGameFinished()}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {gameTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {gameComponent}
        </Modal.Body>
      </Modal>
    );
  }

}

export default GamesView;