import React, { Component } from 'react';
import StoryCard from './../../components/StoryCard';
import StoryModal from './../../components/StoryModal';
import { connect } from 'react-redux';
import { getTopStories } from './../../actions/stories';
import { openStoryModal, setModalStory, getTopCommenters } from './../../actions/storyModal';
import './style.css';
 
export default connect(state => ({
    stories: state.stories.stories
}), {
    getTopStories,
    getTopCommenters,
    openStoryModal,
    setModalStory
})(class Home extends Component {
    componentWillMount(){
        this.props.getTopStories();
    }
    onStorySelect(story){
        this.props.openStoryModal();
        this.props.setModalStory(story);
        this.props.getTopCommenters(story);
    }
    renderStories(){
        console.log(this.props.stories);
        return this.props.stories.map((s, i) =>
            <StoryCard key={i} {...s} onSelect={() => this.onStorySelect(s)}/>
        )
    }
    render(){
        return (
            <div className="home-container">
                <h2>HackerNews</h2>
                <StoryModal />
                <div className={"story-container"}>
                    {this.renderStories()}
                </div>
            </div>
        )
    }
});