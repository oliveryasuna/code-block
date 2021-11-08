/*
 * Copyright 2021 Oliver Yasuna
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 * TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

const css = `
code[class*="language-"],
pre[class*="language-"] {
  color: white;
  background: none;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  text-shadow: 0 -.1em .2em black;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"],
:not(pre) > code[class*="language-"] {
  background: hsl(0, 0%, 8%); /* #141414 */
}

/* Code blocks */
pre[class*="language-"] {
  border-radius: .5em;
  border: .3em solid hsl(0, 0%, 33%); /* #282A2B */
  box-shadow: 1px 1px .5em black inset;
  margin: .5em 0;
  overflow: auto;
  padding: 1em;
}

pre[class*="language-"]::-moz-selection {
  /* Firefox */
  background: hsl(200, 4%, 16%); /* #282A2B */
}

pre[class*="language-"]::selection {
  /* Safari */
  background: hsl(200, 4%, 16%); /* #282A2B */
}

/* Text Selection colour */
pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
  background: hsla(0, 0%, 93%, 0.15); /* #EDEDED */
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  border-radius: .3em;
  border: .13em solid hsl(0, 0%, 33%); /* #545454 */
  box-shadow: 1px 1px .3em -.1em black inset;
  padding: .15em .2em .05em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: hsl(0, 0%, 47%); /* #777777 */
}

.token.punctuation {
  opacity: .7;
}

.namespace {
  opacity: .7;
}

.token.tag,
.token.boolean,
.token.number,
.token.deleted {
  color: hsl(14, 58%, 55%); /* #CF6A4C */
}

.token.keyword,
.token.property,
.token.selector,
.token.constant,
.token.symbol,
.token.builtin {
  color: hsl(53, 89%, 79%); /* #F9EE98 */
}

.token.attr-name,
.token.attr-value,
.token.string,
.token.char,
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable,
.token.inserted {
  color: hsl(76, 21%, 52%); /* #8F9D6A */
}

.token.atrule {
  color: hsl(218, 22%, 55%); /* #7587A6 */
}

.token.regex,
.token.important {
  color: hsl(42, 75%, 65%); /* #E9C062 */
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

pre[data-line] {
  padding: 1em 0 1em 3em;
  position: relative;
}

/* Markup */
.language-markup .token.tag,
.language-markup .token.attr-name,
.language-markup .token.punctuation {
  color: hsl(33, 33%, 52%); /* #AC885B */
}

/* Make the tokens sit above the line highlight so the colours don't look faded. */
.token {
  position: relative;
  z-index: 1;
}

.line-highlight {
  background: hsla(0, 0%, 33%, 0.25); /* #545454 */
  background: linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0)); /* #545454 */
  border-bottom: 1px dashed hsl(0, 0%, 33%); /* #545454 */
  border-top: 1px dashed hsl(0, 0%, 33%); /* #545454 */
  left: 0;
  line-height: inherit;
  margin-top: 0.75em; /* Same as .prism’s padding-top */
  padding: inherit 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  white-space: pre;
  z-index: 0;
}

.line-highlight:before,
.line-highlight[data-end]:after {
  background-color: hsl(215, 15%, 59%); /* #8794A6 */
  border-radius: 999px;
  box-shadow: 0 1px white;
  color: hsl(24, 20%, 95%); /* #F5F2F0 */
  content: attr(data-start);
  font: bold 65%/1.5 sans-serif;
  left: .6em;
  min-width: 1em;
  padding: 0 .5em;
  position: absolute;
  text-align: center;
  text-shadow: none;
  top: .4em;
  vertical-align: .3em;
}

.line-highlight[data-end]:after {
  bottom: .4em;
  content: attr(data-end);
  top: auto;
}
`;

export {
  css
};
