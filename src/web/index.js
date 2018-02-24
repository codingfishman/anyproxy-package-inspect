import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const shouldRenderUi = function (record = {}) {
  // only eval id will show the plugin
  return true || record.id && record.id % 2 === 0;
}

const renderUi = function (domNode, record) {
  console.info('record in render ui is', record);
  ReactDOM.render(React.createElement(App, { record: record }), domNode);
}

const JsBridge = JsBridgeUtil.registerPlugin({
  name: 'Inspect',
  shouldRenderRecordUi: shouldRenderUi,
  renderRecordUi: renderUi
});

JsBridge.onRecordSelect((record) => {
  console.info('record selected', record);
})
