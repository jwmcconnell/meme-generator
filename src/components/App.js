import React from 'react';
import Preview from './Preview';
import MemeForm from './MemeForm';

import styles from './App.css';

class App extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    fontSize: 16,
    fontColor: '#000000',
    imagePath: '',
    imageUrl: '',
    imageOption: 'upload'
  }

  updateFile = e => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = e => {
      this.setState({ imagePath: e.target.result });
    };
  }

  updateUrl = e => this.setState({ imageUrl: e.target.value });
  updateImageOption = e => this.setState({ imageOption: e.target.value });

  updateTopText = e => this.setState({ topText: e.target.value });
  updateBottomText = e => this.setState({ bottomText: e.target.value });

  updateFontSize = e => this.setState({ fontSize: parseInt(e.target.value) });
  updateFontColor = e => this.setState({ fontColor: e.target.value });
  
  render() {
    const { topText, bottomText, imagePath, imageOption, imageUrl, fontSize, fontColor } = this.state;
    return (
      <section className={styles.App}>
        
        <MemeForm 
          updateFile={this.updateFile}
          updateUrl={this.updateUrl}
          updateImageOption={this.updateImageOption}
          updateTopText={this.updateTopText}
          updateBottomText={this.updateBottomText}
          updateFontSize={this.updateFontSize}
          updateFontColor={this.updateFontColor}
        />

        <Preview 
          upload={imagePath} 
          url={imageUrl} 
          option={imageOption}
          topText={topText}
          bottomText={bottomText}
          fontSize={fontSize}
          fontColor={fontColor}
        />

      </section>
    );
  }
}
  
export default App;
