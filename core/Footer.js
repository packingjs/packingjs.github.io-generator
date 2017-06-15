/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Footer
 */

var React = require('React');

var Footer = React.createClass({
  render: function() {
  	// Link to Issues board instead of repo. Revert back to orignal footer
  	// (commented out below) when we go open-source.
    return (
      <p className="edit-page-block">
        如果你发现文档存在错误，请<a target="_blank" href={'https://github.com/packingjs/packing/issues'}>在 GitHub 提个 issue</a> 告诉我们。
      </p>
    );
  }
});

module.exports = Footer;
