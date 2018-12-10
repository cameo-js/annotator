import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Row } from './Row';

const KEY = "entities";

class App extends Component {
  state = {
    multiline: "",
    data: [],
    tags: []
  }
  render() {
    return (
      <div className="App">
        <Button variant="outlined" color="primary" onClick={this.onLoadFromInput}>
          LOAD from input
        </Button>
        <Button variant="outlined" onClick={this.save}>
          Save to localStorage
        </Button>
        <Button variant="outlined" onClick={this.load}>
          Load from localStorage
        </Button>
        <div>
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        {
          this.state.data.map((value, i) => <Row 
            key={i}
            phrase={value.phrase}
            tags={this.state.tags}
            updateTags={(tags) => {
              this.setState({tags: tags});
            }}
            entities={value.entities}
            updateEntities={(entities) => {
              this.setState((prevState) => {
                return {
                  ...prevState,
                  data: [
                    ...prevState.data.slice(0, i),
                    {
                      phrase: prevState.data[i].phrase,
                      entities,
                    },
                    ...prevState.data.slice(i + 1, prevState.data.length),
                  ]
                };
              })
            }}
          />)
        }
        <div>
          <h4>Current Value</h4>
          {this.parse(this.state.data)}
        </div>
      </div>
    );
  }
  save = () => {
    localStorage.setItem(KEY, JSON.stringify(this.state.data))
  }
  load = () => {
    const data = JSON.parse(localStorage.getItem(KEY));
    this.setState({
      data,
      tags : this.loadTags(data)
    })
  }
  loadTags = (data) => {
    return data.map(a => a.entities.map(b => b.tag)).flat().reduce((acc,a) => acc.includes(a) ? acc : [...acc, a], []);
  }
  onLoadFromInput = () => {
    this.setState({
      data: this.state.multiline.split('\n').filter(s => s !== "").map(phrase => {
        return {
          phrase,
          entities: []
        }
      })
    })
  }
  handleChange = (event) => {
    this.setState({
       multiline: event.target.value,
    });
  }
  parse = (data) => {
    return data.map((d, i) => <div key={i}>{this.parsePhrase(d)}</div>);
  }
  parsePhrase = (data) => {
    return data.entities.reduceRight((acc, entity) => {
      return acc.slice(0, entity.start).concat(`#${entity.tag}"${entity.text}"`).concat(acc.slice(entity.end, acc.length))
    }, data.phrase);
  }
}

export default App;
