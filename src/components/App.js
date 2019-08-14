import React from 'react';
import Preview from './Preview';

class App extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    imagePath: ''
  }

  updateFile = e => {
    console.log(e.target.files);
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = e => {
      this.setState({ imagePath: e.target.result });
    };
  }
  
  render() {
    return (
      <>
        <input type="file" onChange={this.updateFile} />
        <Preview image={this.state.imagePath} />
      </>
    );
  }
}
  
export default App;
