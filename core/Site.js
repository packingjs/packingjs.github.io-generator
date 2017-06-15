/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Site
 * @jsx React.DOM
 */

var React = require('React');
var HeaderLinks = require('HeaderLinks');

var Site = React.createClass({
  render: function() {
    const currentYear = (new Date()).getFullYear();
    const titlePrefix = this.props.pageTitle ? this.props.pageTitle.concat(' | ') : '';
    const title = `${titlePrefix}packing`;
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>{title}</title>
          <meta name="viewport" content="width=device-width" />
          <link rel="shortcut icon" href="/images/favicon.png" />
          <link rel="stylesheet" href="/css/qailsjs.css" />
          <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.34.4/es6-shim.min.js"></script>
        </head>
        <body>

          <div className="container">
            <div className="nav-main">
              <div className="wrap">
                <a className="nav-home" href="/">
                  <img src="/images/favicon.png" alt="packing logo" /> packing
                </a>
                <HeaderLinks section={this.props.section} />
              </div>
            </div>

            {this.props.children}

            <footer className="nav-footer">
              <a href="https://code.facebook.com/projects/" target="_blank" className="fbOpenSource">
                <img src="/images/favicon.png" alt="Packing" width="45" height="45"/>
              </a>
              <section className="copyright">
                Copyright © {currentYear} Packingjs Team.
              </section>
            </footer>
          </div>

          <div id="fb-root" />
        </body>
      </html>
    );
  }
});

module.exports = Site;
