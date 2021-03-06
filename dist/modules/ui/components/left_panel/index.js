'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _stories = require('./stories');

var _stories2 = _interopRequireDefault(_stories);

var _text_filter = require('./text_filter');

var _text_filter2 = _interopRequireDefault(_text_filter);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollStyle = {
  height: 'calc(100vh - 105px)',
  marginTop: 10,
  overflowY: 'auto'
};

var mainStyle = {
  padding: '10px 0 10px 10px'
};

var storyProps = ['stories', 'selectedKind', 'selectedStory', 'onSelectStory'];

var LeftPanel = function LeftPanel(props) {
  return _react2.default.createElement(
    'div',
    { style: mainStyle },
    _react2.default.createElement(_header2.default, {
      name: props.name,
      url: props.url,
      openShortcutsHelp: props.openShortcutsHelp
    }),
    _react2.default.createElement(_text_filter2.default, {
      text: props.storyFilter,
      onClear: function onClear() {
        return props.onStoryFilter('');
      },
      onChange: function onChange(text) {
        return props.onStoryFilter(text);
      }
    }),
    _react2.default.createElement(
      'div',
      { style: scrollStyle },
      props.stories ? _react2.default.createElement(_stories2.default, (0, _lodash2.default)(props, storyProps)) : null
    )
  );
};

LeftPanel.propTypes = {
  stories: _propTypes2.default.array,
  selectedKind: _propTypes2.default.string,
  selectedStory: _propTypes2.default.string,
  onSelectStory: _propTypes2.default.func,

  storyFilter: _propTypes2.default.string,
  onStoryFilter: _propTypes2.default.func,

  openShortcutsHelp: _propTypes2.default.func,
  name: _propTypes2.default.string,
  url: _propTypes2.default.string
};

exports.default = LeftPanel;