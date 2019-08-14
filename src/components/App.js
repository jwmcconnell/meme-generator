import React from 'react';
import Preview from './Preview';

import styles from './App.css';

class App extends React.Component {
  state = {
    topText: '',
    bottomText: '',
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

  updateUrl = e => {
    this.setState({ imageUrl: e.target.value });
  }

  updateTopText = e => {
    this.setState({ topText: e.target.value });
  }

  updateBottomText = e => {
    this.setState({ bottomText: e.target.value });
  }

  updateImageOption = e => {
    this.setState({ imageOption: e.target.value });
  }
  
  render() {
    const { topText, bottomText, imagePath, imageOption, imageUrl } = this.state;
    return (
      <section className={styles.App}>
        <section>

          <label>File Upload:
            <input type="file" onChange={this.updateFile} />
          </label>

          <label>URL:
            <input type="text" onChange={this.updateUrl} />
          </label>

          <label>Top Text:
            <input type="text" onChange={this.updateTopText} />
          </label>

          <label>Bottom Text:
            <input type="text" onChange={this.updateBottomText} />
          </label>

          <fieldset>
            <legend>Image Source</legend>

            <label htmlFor="upload">Upload
              <input 
                defaultChecked 
                required 
                name="file-source" 
                value="upload" 
                type="radio" 
                id="upload"
                onChange={this.updateImageOption}
              />
            </label>

            <label htmlFor="url">URL
              <input 
                required 
                name="file-source" 
                value="url" 
                type="radio" 
                id="url"
                onChange={this.updateImageOption}
              />
            </label>
            
          </fieldset>

        </section>

        <Preview 
          upload={imagePath} 
          url={imageUrl} 
          option={imageOption}
          topText={topText}
          bottomText={bottomText}
        />
      </section>
    );
  }
}
  
export default App;
