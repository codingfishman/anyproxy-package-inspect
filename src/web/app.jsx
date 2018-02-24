import React, { PropTypes } from 'react';

const Style = require('./app.less');

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  static propTypes = {
    record: PropTypes.object
  }

  render() {
    const { record = {} } = this.props;
    const { pluginData = {} } = record;
    return (
      <div className={Style.wrapper}>
        <div className={Style.detailItem}>
          <div className={Style.label} >URL:</div>
          <div className={Style.content} >{' ' + record.protocol}://{record.host + record.path} </div>
        </div>
        <div className={Style.detailItem}>
          <div className={Style.label} >Inspect:</div>
          <div className={Style.content} >{pluginData.isInjected ? 'YES' : 'NO'} </div>
          {pluginData.detailUrl &&
            <div><a href={pluginData.detailUrl} target="debug-window" >View Detail</a> </div>
          }
        </div>
      </div>
    )
  }
}

export default App;
