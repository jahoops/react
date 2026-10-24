import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
import './App.css';


class tile {
   @observable i;
   @observable settings;
   @observable p;
   constructor(i,settings,p) {
        this.i = i;
        this.settings = settings;
        this.p = p;
    }
 }

 class gridlayout {
    @observable tiles = [];
 }

const store = new gridlayout();

@observer
class App extends Component {
  render() {
    return (
      <div>
        <h1>say something</h1>
      <ReactGridLayout class="layout" cols={12} 
        rowHeight={30} width={1200}>
        {store.tiles.map(tile => 
          <div key={tile.i} data-grid={JSON.parse(tile.settings)}>{tile.p}</div>
        )}
      </ReactGridLayout>
      </div>
    )
  }
}

store.tiles.push(
  new tile(0,'{x: 0, y: 0, w: 1, h: 2}','comp1'),
  new tile(1,'{x: 3, y: 1, w: 1, h: 2}','comp2'),
  new tile(2,'{x: 5, y: 2, w: 1, h: 2}','comp3')
);

console.log(store.tiles)

export default App;
