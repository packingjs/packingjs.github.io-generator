/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HeaderLinks
 * @jsx React.DOM
 */

var React = require('React');

var HeaderLinks = React.createClass({
  links: [
    {section: 'docs', href: '/docs/overview.html#content', text: '文档'},
    {section: 'github', href: 'https://github.com/packingjs/packing', text: 'github'},
  ],

  render: function() {
    return (
      <ul className="nav-site">
        {this.links.map(function(link) {
          return (
            <li key={link.section}>
              <a
                href={link.href}
                className={link.section === this.props.section ? 'active' : ''}>
                {link.text}
              </a>
            </li>
          );
        }, this)}
      </ul>
    );
  },
});

module.exports = HeaderLinks;
