import React from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import Preview from './Preview';
import MemeForm from './MemeForm';
import Download from './Download';

import styles from './App.css';

class App extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    fontSize: 26,
    fontColor: '#FFFFFF',
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

  handleUpdate = (e) => this.setState({ [e.target.name]: e.target.value });

  downloadMeme = () => {
    let node = document.getElementById('preview');
 
    domtoimage.toPng(node)
      .then(function(dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        FileSaver.saveAs(img.src, 'generated-meme.png');
      })
      .catch(function(error) {
        // eslint-disable-next-line no-console
        console.error('oops, something went wrong!', error);
      });
  }
  
  render() {
    const { 
      topText, 
      bottomText, 
      imagePath, 
      imageOption, 
      imageUrl, 
      fontSize, 
      fontColor 
    } = this.state;
    return (
      <section className={styles.App}>
        
        <MemeForm 
          updateFile={this.updateFile}
          handleUpdate={this.handleUpdate}
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

        <Download downloadMeme={this.downloadMeme} />

      </section>
    );
  }
}
  
export default App;
