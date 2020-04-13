import React from 'react';
import StoryPagination from './StoryPagination';
import GamesView from './GamesView';

const OverlayTypes = {
  QUIZ: "quiz",
  PUZZLE: "puzzle"
}

const story = {
  title: "Story title",
  pages: [
    {content: "Page 1 content"},
    {content: "Page 2 content"},
    {content: "Page 3 content"},
  ],
  games: [
    {
      page: 0,
      timing: "after",
      type: 'quiz',
      id: '5e9457e4b81d2f5eb0a5f3ad'
    }
  ]
};

class Story extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      story: story,
      page: 0,
      showGames: false,
      gamesToShow: [],
    }
  }

  componentDidMount(){
    this.onPageChange(-1, 0);
  }

  async onPageChange(oldPage, newPage){
    const { story } = this.state;

    let showGames = false;
    let gamesToShow = [];

    if(oldPage < newPage){
      const overlaysAfter = story.games.filter(overlay => overlay.page === oldPage && overlay.timing === "after");
      const overlaysBefore = story.games.filter(overlay => overlay.page === newPage && overlay.timing === "before");
      gamesToShow = overlaysAfter.concat(overlaysBefore);
      showGames = gamesToShow.length > 0;
    }

    this.setState({page: newPage, gamesToShow, showGames});
  }

  onGamesFinished(){
    this.setState({showGames: false, gamesToShow: []});
  }

  render(){

    const { story, page, showGames, gamesToShow } = this.state;

    return <>
      <div className="story">
        <div className="story-title">{story.title}</div>
        <div className="story-content">{story.pages[page].content}</div>
        <StoryPagination page={page} pageCount={story.pages.length} onChange={newPage => this.onPageChange(page, newPage)} />
        {(showGames && gamesToShow.length > 0) && 
          <GamesView show={showGames} games={gamesToShow} onFinish={this.onGamesFinished.bind(this)} />
        }
      </div>
    </>
  }

}

export default Story;