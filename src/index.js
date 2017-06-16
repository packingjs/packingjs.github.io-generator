/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var React = require('React');
var Site = require('Site');
var Prism = require('Prism');
var Marked = require('Marked');
var unindent = require('unindent');

var index = React.createClass({
  render: function() {
    return (
      <Site>
        <div className="hero">
          <div className="wrap">
            <div className="text"><strong>packing</strong></div>
            <div className="minitext">一个简单易用的前端开发工具</div>
            <div className="buttons-unit">
              <a href="docs/getting-started.html#content" className="button">开始 packing 学习之旅</a>
            </div>
          </div>
        </div>

        <section className="content wrap">
          <div className="features">
            <p>
              Packing 是一个基于 webpack 的前端开发环境和项目构建工具。她来源于实际工作，根据公司的实际情况，对 webpack 复杂的配置做了大量的预设置工作，让工程师不必关注 webpack 所有的配置，只需要了解少量和项目相关的配置就能够进行开发，降低了 webpack 的使用门槛，从而达到在团队中快速推广新技术的目录。
            </p>

            <p>
              Packing 还对多项工程相关的信息做了初始化，通过 generator-packing，工程师能在30秒完成新工程的搭建，工程内置了 eslint、babel 等流行的前端工具，所有代码都支持ES6书写，让工程师有良好的开发体验。
            </p>

            <p>
              Packing 还针对以往项目中遇到的通用问题进行了抽象和封装，如：数据模拟、URL 转发、模块热替换、配置文件环境差异化等。
            </p>
          </div>
        </section>

      </Site>
    );
  }
});

module.exports = index;
