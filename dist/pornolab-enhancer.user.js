// ==UserScript==
// @name        Pornolab Enhancer
// @namespace   https://github.com/shikiyoku
// @description Improves UX
// @version     1.5.0
// @author      shikiyoku
// @license     MIT
// @copyright   2017+, shikiyoku
// @icon        https://raw.githubusercontent.com/shikiyoku/user-scripts/master/src/pornolab-enhancer/resources/icon.png
// @homepageURL https://github.com/shikiyoku/user-scripts
// @supportURL  https://github.com/shikiyoku/user-scripts/issues
// @include     *pornolab.*
// @connect     www.imagebam.com
// @connect     imagevenue.com
// @connect     www.turboimagehost.com
// @run-at      document-start
// @grant       GM_addStyle
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlHttpRequest
// ==/UserScript==

(function () {
  'use strict'

  /* global GM_addStyle */
  var addStyle = 'GM_addStyle' in window
    ? GM_addStyle // eslint-disable-line camelcase
    : (css) => {
      var head = document.getElementsByTagName('head')[0]
      if (head) {
        var style = document.createElement('style')
        style.type = 'text/css'
        style.innerHTML = css
        head.appendChild(style)
        return css
      }
    }

  var regex = {
    getAllMatchGroups (regEx, str) {
      let results = []
      let match

      while ((match = regEx.exec(str)) !== null) {
        results.push(match[1])
      }

      return results
    },

    getMatchGroups (regEx, str) {
      let matches = []
      let match

      while ((match = regEx.exec(str)) !== null) {
        if (match.index === regEx.lastIndex) {
          regEx.lastIndex++
        }

        let groups = match.slice(1)
        if (groups.some((group) => group)) {
          matches.push(groups)
        }
      }

      return matches
    },

    getFirstMatchGroup (regEx, str) {
      let match = regEx.exec(str)

      return match ? match[1] : null
    }
  }

  !(function () { function t (e, n, s) { return n = void 0 === n ? 1 : n, s = s || n + 1, s - n <= 1 ? function () { if (arguments.length <= n || r.type(arguments[n]) === 'string') return e.apply(this, arguments); var t, s = arguments[n]; for (var i in s) { var o = Array.from(arguments); o.splice(n, 1, i, s[i]), t = e.apply(this, o) } return t } : t(t(e, n + 1, s), n, s - 1) } function e (t, r, s) { var i = n(s); if (i === 'string') { var o = Object.getOwnPropertyDescriptor(r, s); !o || o.writable && o.configurable && o.enumerable && !o.get && !o.set ? t[s] = r[s] : (delete t[s], Object.defineProperty(t, s, o)) } else if (i === 'array')s.forEach(function (n) { n in r && e(t, r, n) }); else for (var a in r)s && (i === 'regexp' && !s.test(a) || i === 'function' && !s.call(r, a)) || e(t, r, a); return t } function n (t) { if (t === null) return 'null'; if (void 0 === t) return 'undefined'; var e = (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || '').toLowerCase(); return e == 'number' && isNaN(t) ? 'nan' : e } var r = self.Bliss = e(function (t, e) { return arguments.length == 2 && !e || !t ? null : r.type(t) === 'string' ? (e || document).querySelector(t) : t || null }, self.Bliss); e(r, {extend: e, overload: t, type: n, property: r.property || '_', sources: {}, noop: function () {}, $: function (t, e) { return t instanceof Node || t instanceof Window ? [t] : arguments.length != 2 || e ? Array.from(typeof t === 'string' ? (e || document).querySelectorAll(t) : t || []) : [] }, defined: function () { for (var t = 0; t < arguments.length; t++) if (void 0 !== arguments[t]) return arguments[t] }, create: function (t, e) { return t instanceof Node ? r.set(t, e) : (arguments.length === 1 && (r.type(t) === 'string' ? e = {} : (e = t, t = e.tag, e = r.extend({}, e, function (t) { return t !== 'tag' }))), r.set(document.createElement(t || 'div'), e)) }, each: function (t, e, n) { n = n || {}; for (var r in t)n[r] = e.call(t, r, t[r]); return n }, ready: function (t) { return t = t || document, new Promise(function (e, n) { t.readyState !== 'loading' ? e() : t.addEventListener('DOMContentLoaded', function () { e() }) }) }, Class: function (t) { var e = ['constructor', 'extends', 'abstract', 'static'].concat(Object.keys(r.classProps)), n = t.hasOwnProperty('constructor') ? t.constructor : r.noop, s = function () { if (this.constructor.__abstract && this.constructor === s) throw new Error('Abstract classes cannot be directly instantiated.'); s['super'] && s['super'].apply(this, arguments), n.apply(this, arguments) }; s['super'] = t['extends'] || null, s.prototype = r.extend(Object.create(s['super'] ? s['super'].prototype : Object), {constructor: s}); var i = function (t) { return this.hasOwnProperty(t) && e.indexOf(t) === -1 }; if (t['static']) { r.extend(s, t['static'], i); for (var o in r.classProps)o in t['static'] && r.classProps[o](s, t['static'][o]) }r.extend(s.prototype, t, i); for (var o in r.classProps)o in t && r.classProps[o](s.prototype, t[o]); return s.prototype['super'] = s['super'] ? s['super'].prototype : null, s.__abstract = !!t['abstract'], s }, classProps: {lazy: t(function (t, e, n) { return Object.defineProperty(t, e, {get: function () { var t = n.call(this); return Object.defineProperty(this, e, {value: t, configurable: !0, enumerable: !0, writable: !0}), t }, set: function (t) { Object.defineProperty(this, e, {value: t, configurable: !0, enumerable: !0, writable: !0}) }, configurable: !0, enumerable: !0}), t }), live: t(function (t, e, n) { return r.type(n) === 'function' && (n = {set: n}), Object.defineProperty(t, e, {get: function () { var t = this['_' + e], r = n.get && n.get.call(this, t); return void 0 !== r ? r : t }, set: function (t) { var r = this['_' + e], s = n.set && n.set.call(this, t, r); this['_' + e] = void 0 !== s ? s : t }, configurable: n.configurable, enumerable: n.enumerable}), t })}, include: function () { var t = arguments[arguments.length - 1], e = arguments.length === 2 ? arguments[0] : !1, n = document.createElement('script'); return e ? Promise.resolve() : new Promise(function (e, s) { r.set(n, {async: !0, onload: function () { e(), r.remove(n) }, onerror: function () { s() }, src: t, inside: document.head}) }) }, fetch: function (t, n) { if (!t) throw new TypeError('URL parameter is mandatory and cannot be ' + t); var s = e({url: new URL(t, location), data: '', method: 'GET', headers: {}, xhr: new XMLHttpRequest()}, n); s.method = s.method.toUpperCase(), r.hooks.run('fetch-args', s), s.method === 'GET' && s.data && (s.url.search += s.data), document.body.setAttribute('data-loading', s.url), s.xhr.open(s.method, s.url.href, s.async !== !1, s.user, s.password); for (var i in n) if (i in s.xhr) try { s.xhr[i] = n[i] } catch (o) { self.console && console.error(o) }s.method === 'GET' || s.headers['Content-type'] || s.headers['Content-Type'] || s.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); for (var a in s.headers)s.xhr.setRequestHeader(a, s.headers[a]); return new Promise(function (t, e) { s.xhr.onload = function () { document.body.removeAttribute('data-loading'), s.xhr.status === 0 || s.xhr.status >= 200 && s.xhr.status < 300 || s.xhr.status === 304 ? t(s.xhr) : e(r.extend(Error(s.xhr.statusText), {xhr: s.xhr, get status () { return this.xhr.status }})) }, s.xhr.onerror = function () { document.body.removeAttribute('data-loading'), e(r.extend(Error('Network Error'), {xhr: s.xhr})) }, s.xhr.ontimeout = function () { document.body.removeAttribute('data-loading'), e(r.extend(Error('Network Timeout'), {xhr: s.xhr})) }, s.xhr.send(s.method === 'GET' ? null : s.data) }) }, value: function (t) { var e = r.type(t) !== 'string'; return r.$(arguments).slice(+e).reduce(function (t, e) { return t && t[e] }, e ? t : self) }}), r.Hooks = new r.Class({add: function (t, e, n) { (Array.isArray(t) ? t : [t]).forEach(function (t) { this[t] = this[t] || [], this[t][n ? 'unshift' : 'push'](e) }, this) }, run: function (t, e) { this[t] = this[t] || [], this[t].forEach(function (t) { t.call(e && e.context ? e.context : e, e) }) }}), r.hooks = new r.Hooks(); var s = r.property; r.Element = function (t) { this.subject = t, this.data = {}, this.bliss = {} }, r.Element.prototype = {set: t(function (t, e) { t in r.setProps ? r.setProps[t].call(this, e) : t in this ? this[t] = e : this.setAttribute(t, e) }, 0), transition: function (t, e) { return e = +e || 400, new Promise(function (n, s) { if ('transition' in this.style) { var i = r.extend({}, this.style, /^transition(Duration|Property)$/); r.style(this, {transitionDuration: (e || 400) + 'ms', transitionProperty: Object.keys(t).join(', ')}), r.once(this, 'transitionend', function () { clearTimeout(o), r.style(this, i), n(this) }); var o = setTimeout(n, e + 50, this); r.style(this, t) } else r.style(this, t), n(this) }.bind(this)) }, fire: function (t, e) { var n = document.createEvent('HTMLEvents'); return n.initEvent(t, !0, !0), this.dispatchEvent(r.extend(n, e)) }, unbind: t(function (t, e) { (t || '').split(/\s+/).forEach(function (t) { if (s in this && (t.indexOf('.') > -1 || !e)) { t = (t || '').split('.'); var n = t[1]; t = t[0]; var r = this[s].bliss.listeners = this[s].bliss.listeners || {}; for (var i in r) if (!t || i === t) for (var o, a = 0; o = r[i][a]; a++)n && n !== o.className || e && e !== o.callback || (this.removeEventListener(i, o.callback, o.capture), a--) } else this.removeEventListener(t, e) }, this) }, 0)}, r.setProps = {style: function (t) { r.extend(this.style, t) }, attributes: function (t) { for (var e in t) this.setAttribute(e, t[e]) }, properties: function (t) { r.extend(this, t) }, events: function (t) { if (t && t.addEventListener) { var e = this; if (t[s] && t[s].bliss) { var n = t[s].bliss.listeners; for (var i in n)n[i].forEach(function (t) { e.addEventListener(i, t.callback, t.capture) }) } for (var o in t)o.indexOf('on') === 0 && (this[o] = t[o]) } else if (arguments.length > 1 && r.type(t) === 'string') { var a = arguments[1], u = arguments[2]; t.split(/\s+/).forEach(function (t) { this.addEventListener(t, a, u) }, this) } else for (var c in t)r.events(this, c, t[c]) }, once: t(function (t, e) { t = t.split(/\s+/); var n = this, r = function () { return t.forEach(function (t) { n.removeEventListener(t, r) }), e.apply(n, arguments) }; t.forEach(function (t) { n.addEventListener(t, r) }) }, 0), delegate: t(function (t, e, n) { this.addEventListener(t, function (t) { t.target.closest(e) && n.call(this, t) }) }, 0, 2), contents: function (t) { (t || t === 0) && (Array.isArray(t) ? t : [t]).forEach(function (t) { var e = r.type(t); /^(string|number)$/.test(e) ? t = document.createTextNode(t + '') : e === 'object' && (t = r.create(t)), t instanceof Node && this.appendChild(t) }, this) }, inside: function (t) { t.appendChild(this) }, before: function (t) { t.parentNode.insertBefore(this, t) }, after: function (t) { t.parentNode.insertBefore(this, t.nextSibling) }, start: function (t) { t.insertBefore(this, t.firstChild) }, around: function (t) { t.parentNode && r.before(this, t), (/^template$/i.test(this.nodeName) ? this.content || this : this).appendChild(t) }}, r.Array = function (t) { this.subject = t }, r.Array.prototype = {all: function (t) { var e = $$(arguments).slice(1); return this[t].apply(this, e) }}, r.add = t(function (t, e, n, s) { n = r.extend({$: !0, element: !0, array: !0}, n), r.type(e) == 'function' && (!n.element || t in r.Element.prototype && s || (r.Element.prototype[t] = function () { return this.subject && r.defined(e.apply(this.subject, arguments), this.subject) }), !n.array || t in r.Array.prototype && s || (r.Array.prototype[t] = function () { var t = arguments; return this.subject.map(function (n) { return n && r.defined(e.apply(n, t), n) }) }), n.$ && (r.sources[t] = r[t] = e, (n.array || n.element) && (r[t] = function () { var e = [].slice.apply(arguments), s = e.shift(), i = n.array && Array.isArray(s) ? 'Array' : 'Element'; return r[i].prototype[t].apply({subject: s}, e) }))) }, 0), r.add(r.Array.prototype, {element: !1}), r.add(r.Element.prototype), r.add(r.setProps), r.add(r.classProps, {element: !1, array: !1}); var i = document.createElement('_'); r.add(r.extend({}, HTMLElement.prototype, function (t) { return r.type(i[t]) === 'function' }), null, !0) }())

  /* global Bliss */
  const $ = Bliss
  const $$$1 = Bliss.$

  var tagsCSS = `.tags-row {
  padding: 3px 0 0;
}

.tags-row-tag {
  display: inline-block;
  margin: 2px 5px 2px;
  padding: 5px;
  border: solid 1px #cacaca;
  border-radius: 5px;
  background-color: #efefef;
  text-decoration: none;
}

.tags-row-tag:hover {
  border-color: #345da4;
  color: #345da4;
  text-decoration: none !important;
}

.tags-row-tag:nth-child {
  margin-left: 0;
}
`

  var tags = (function () {
    const TOPIC_PATH = '/forum/viewtopic.php'

    // separates tags from title
    const TITLE_REGEX = /(?:\[([^[\]]+)\]+)?([^[]*)?/g
    const TAGS_SEPARATOR_REGEX = /(?:,\s?|;|\/)/
    const TAGS_GROUP_SEPARATOR = ' | '

    /**
   * Extracts tags and title from title string
   * @param {string} titleRaw
   */
    function tokenizeTitle (titleRaw) {
      let tagGroupsBefore = []
      let titleParts = []
      let tagGroupsAfter = []

      regex.getMatchGroups(TITLE_REGEX, titleRaw)
        .forEach((groups) => {
          let tags = []

          // First group - tags
          if (groups[0]) {
            tags = groups[0].split(TAGS_SEPARATOR_REGEX)
          }

          if (tags.length) {
            (titleParts.length ? tagGroupsAfter : tagGroupsBefore).push(tags)
          }

          // Second group - title part
          if (groups[1]) {
            titleParts.push(groups[1])
          }
        })

      return {
        tagGroupsBefore,
        title: titleParts.join('').trim(),
        tagGroupsAfter
      }
    }

    /**
   * @param {Array<Array<string>>} tagGroups
   */
    function createTagsRow (tagGroups) {
      const tags = tagGroups.reduce((tags, tagsGroup, index) => {
        tags.push(...createTagLinks(tagsGroup))

        if (index + 1 !== tagGroups.length) {
          tags.push(TAGS_GROUP_SEPARATOR)
        }

        return tags
      }, [])

      return $.create('div', {
        className: 'tags-row',
        contents: tags
      })
    }

    /**
   * @param {Array<string>} tags
   */
    function createTagLinks (tags) {
      return tags
        .filter((tag) => tag.length)
        .map((tag) => {
          return $.create('a', {
            className: 'tags-row-tag',
            textContent: tag,
            href: `/forum/tracker.php?nm=${tag}`,
            target: '_blank'
          })
        })
    }

    /**
   * Extracts tags from title for  topic post page
   */
    function createPostTags () {
      const titleElement = $('.maintitle')
      const titleLink = titleElement.children[0]
      const title = titleLink.textContent

      const titleParts = tokenizeTitle(title)
      const hasTagBefore = titleParts.tagGroupsBefore.length > 0
      const hasTagsAfter = titleParts.tagGroupsAfter.length > 0

      if (!hasTagBefore && !hasTagsAfter) {
        return
      }

      addStyle(tagsCSS)

      // Remove tags from title
      $.set(titleLink, {
        textContent: titleParts.title,
        title: title
      })

      if (hasTagBefore) {
        $.before(createTagsRow(titleParts.tagGroupsBefore), titleElement)
      }

      if (hasTagsAfter) {
        $.after(createTagsRow(titleParts.tagGroupsAfter), titleElement)
      }
    }

    return function () {
      $.ready()
        .then(() => {
          if (location.pathname === TOPIC_PATH) {
            createPostTags()
          }
        })
    }
  })()

  var pagerCSS = `.small > b > .menu-root,
.nav .menu-root,
a.pg {
  display: inline-block;
  padding: 0.5em 0.7em;
  border: solid 1px #cacaca;
  background-color: #efefef;
  text-decoration: none;
}

a.pg {
  margin-right: 0.1em;
}

.small > b > .menu-root:hover,
.nav .menu-root:hover,
a.pg:hover {
  border-color: #345da4;
  color: #345da4;
  text-decoration: none !important;
}

.menu-root ~ b {
  display: inline-block;
  margin-right: 0.1em;
  padding: 0.5em 0.7em;
  border: solid 1px transparent;
}

.small > b > .menu-root,
.nav .menu-root {
  padding-right: 20px;
  background-repeat: no-repeat;
  background-position: 95% 50%;
}
`

  var downloadCSS = `.quick-download {
  position: fixed;
  top: 0;
  right: 25%;
  width: 65px;
  height: 65px;
  overflow: hidden;
  transform: translateY(-90%);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: solid 1px #cacaca;
  border-radius: 0 0 10px 10px;
  background-color: #efefef;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #000 !important;
  text-align: center;
  text-decoration: none;
}

.quick-download:hover {
  transform: translateY(0);
  border-color: #345da4;
  color: #000 !important;
  text-decoration: none !important;
}

.quick-download-icon {
  display: block;
  height: 45px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiBmaWxsPSIjMzQ1ZGE0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgOWgtNFYzSDl2Nkg1bDcgNyA3LTd6TTUgMTh2MmgxNHYtMkg1eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }

  20% {
    transform: scale(25, 25);
    opacity: 1;
  }

  100% {
    transform: scale(40, 40);
    opacity: 0;
  }
}

.quick-download::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 5px;
  transform: scale(1, 1);
  transform-origin: 50% 50%;
  border-radius: 100%;
  opacity: 0;
  background: rgba(52, 93, 164, 0.25);
}

.quick-download:focus:not(:active)::after {
  animation: ripple 1s ease-out;
}
`

  var download = (function () {
    const ENABLE_ON_PATH = '/forum/viewtopic.php'

    function createDownloadLink (downloadLink) {
      const link = $.create('a', {
        className: 'quick-download',
        href: '#',
        textContent: '',

        events: {
          'click': (e) => {
            e.preventDefault()

            var event = document.createEvent('MouseEvents')
            event.initEvent('click', true, true)

            downloadLink.dispatchEvent(event)
          }
        },

        contents: [{
          tag: 'span',
          className: 'quick-download-icon'
        }, {
          tag: 'span',
          textContent: document.querySelector('.attach')
            .querySelector('.row1:nth-child(5)')
            .querySelector('td:nth-child(2)')
            .textContent
        }]
      })

      document.body.appendChild(link)
    }

    return function () {
      $.ready()
        .then(() => {
          if (location.pathname !== ENABLE_ON_PATH) { return }

          const downloadLink = $('.dl-link')

          if (!downloadLink) { return }

          addStyle(downloadCSS)

          createDownloadLink(downloadLink)
        })
    }
  })()

  var imageViewCSS = `.image-link {
  display: inline-flex;
  position: relative;
}

img.postImg.image-link {
  display: block;
  margin: 2px; /* Remove bottom padding */
}

.image-link::before,
.image-link::after {
  content: '';
  transition: opacity 350ms ease;
  opacity: 0;
}

.image-link.loading-indicator::before {
  opacity: 1;
}

/* Backdrop */
.image-link::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.image-link.error-icon::before {
  display: none;
}

.image-link.error-icon img {
  opacity: 0.6;
}

/* Backdrop icon */
.image-link::after,
.image-view-container::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

.image-link:hover::before,
.image-link:hover::after {
  opacity: 1;
}

/* Icons */
.loading-icon::after,
.error-icon::after {
  opacity: 1;
}

.image-link:hover::after {
  /* zoom in */
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTIgMTBoLTJ2Mkg5di0ySDdWOWgyVjdoMXYyaDJ2MXoiLz48L3N2Zz4=);
}

.loading-icon::after {
  animation: spin 1s linear infinite;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=) !important;
}

.error-icon::after,
.error-icon:hover::after {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzYyODI4IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM2LjQ3IDIgMiA2LjQ3IDIgMTJzNC40NyAxMCAxMCAxMCAxMC00LjQ3IDEwLTEwUzE3LjUzIDIgMTIgMnptNSAxMy41OUwxNS41OSAxNyAxMiAxMy40MSA4LjQxIDE3IDcgMTUuNTkgMTAuNTkgMTIgNyA4LjQxIDguNDEgNyAxMiAxMC41OSAxNS41OSA3IDE3IDguNDEgMTMuNDEgMTIgMTcgMTUuNTl6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==);
}

.forbidden-host var::before {
  content: '';
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 25px;
  height: 25px;
  opacity: 1;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmJjMDJkIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHoiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
}

@keyframes spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.image-view-container {
  display: flex;
  box-sizing: border-box;
  height: 0;
  overflow: auto;
  transition: all 0.35s ease-out;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
}

body.image-view-open {
  overflow: hidden;
}

body.image-view-open .image-view-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  opacity: 1;
}

.image-view {
  width: auto;
  max-width: 100%;

  /* fit in view port */
  max-height: 100%;

  /* align in the center */
  margin: auto;
}
`

  /* global GM_xmlhttpRequest GM */
  var request = (function () {
  // polyfill xmlhttpRequest
    const xmlHttpRequest = 'GM' in window && 'xmlHttpRequest' in GM
      ? GM.xmlHttpRequest
      : GM_xmlhttpRequest //  eslint-disable-line camelcase

    return function (url, { method = 'GET' } = {}) {
      return new Promise((resolve, reject) => {
        xmlHttpRequest({
          url,
          method,
          onerror (response) {
            console.error(response.responseText)
            reject(response.responseText)
          },
          onload: resolve
        })
      })
    }
  })()

  var urlExtractor = (function () {
    function getExtractor (pageUrl) {
      return extractors.find((ext) => ext.linkRegEx.test(pageUrl))
    }

    async function getPageHtml (pageUrl) {
      let response = await request(pageUrl)

      return response.responseText
    }

    async function getUrlFromPage (extractor, link) {
      const html = await getPageHtml(link.href)

      return regex.getFirstMatchGroup(extractor.imageUrlRegEx, html)
    }

    function getThumbnailUrl (link) {
      return $('img.postImg', link).src
    }

    const extractors = [
      {
        name: 'FastPic',
        allowed: true,
        linkSelector: '[href^="http://fastpic.ru/view/"]',
        linkRegEx: new RegExp('^http://fastpic.ru/view/'),
        extensionRegEx: /\.([^.]+)\.html$/,

        async getUrl (extractor, link) {
          const extension = regex.getFirstMatchGroup(extractor.extensionRegEx, link.href)
          const thumbUrl = getThumbnailUrl(link)

          return thumbUrl
            .replace('thumb', 'big')
            .replace('jpeg', extension)
        }
      },

      {
        name: 'ImageVenue',
        allowed: true,
        linkSelector: '[href*=".imagevenue.com/img.php"]',
        linkRegEx: new RegExp('imagevenue.com/img.php'),
        imageUrlRegEx: /id="thepic".*src="([^"]*)"/i,

        async getUrl (extractor, link) {
          const imageUrl = await getUrlFromPage(extractor, link)
          const pageUrl = link.href

          const url = new URL(pageUrl)
          url.search = ''
          url.pathname = imageUrl

          return url.href
        }
      },

      {
        name: 'TurboImageHost',
        allowed: true,
        linkSelector: '[href^="https://www.turboimagehost.com/p"]',
        linkRegEx: new RegExp('^https://www.turboimagehost.com/p'),
        imageUrlRegEx: /property="og:image" content="([^"]*)"/,
        getUrl: getUrlFromPage
      },

      // not allowed below

      {
        name: 'ImageBam',
        linkSelector: '[href^="http://www.imagebam.com/image"]',
        linkRegEx: new RegExp('^http://www.imagebam.com/image'),
        imageUrlRegEx: /property="og:image" content="([^"]*)"/,
        getUrl: getUrlFromPage
      },

      {
        name: 'ImageTwist',
        linkSelector: '[href^="http://imagetwist.com"]',
        linkRegEx: new RegExp('^http://imagetwist.com'),

        async getUrl (extractor, link) {
          const imageName = link.href.split('/').pop()
          const imageUrl = getThumbnailUrl(link)
            .replace('/th/', '/i/')
            .replace('jpg', 'JPG')

          return `${imageUrl}/${imageName}`
        }
      },

      {
        name: 'PicShick',
        linkSelector: '[href^="http://picshick.com"]',
        linkRegEx: new RegExp('^http://picshick.com'),

        async getUrl (extractor, link) {
          const imageName = link.href.split('/').pop()
          const imageUrl = getThumbnailUrl(link)
            .replace('/th/', '/i/')
            .replace('picshick', 'imagetwist')

          return `${imageUrl}/${imageName}`
        }
      },

      {
        name: 'imgbum',
        linkSelector: '[href^="http://imgbum.net"]',
        linkRegEx: new RegExp('^http://imgbum.net'),

        async getUrl (extractor, link) {
          return getThumbnailUrl(link).replace('-thumb', '')
        }
      },

      {
        name: 'PicForAll',
        linkSelector: '[href^="http://picforall.ru"]',
        linkRegEx: new RegExp('^http://picforall.ru'),

        async getUrl (extractor, link) {
          return getThumbnailUrl(link)
            .replace('picforall', 'p0xpicmoney')
            .replace('-thumb', '')
        }
      },

      {
        name: 'picage',
        linkSelector: '[href^="http://picage.ru"]',
        linkRegEx: new RegExp('^http://picage.ru'),

        async getUrl (extractor, link) {
          return getThumbnailUrl(link)
            .replace('picage', 'pic4you')
            .replace('-thumb', '')
        }
      },

      {
        name: 'PixSense',
        linkSelector: '[href^="http://www.pixsense.net"]',
        linkRegEx: new RegExp('^http://www.pixsense.net'),

        async getUrl (extractor, link) {
          return getThumbnailUrl(link)
            .replace('small-', '')
            .replace('/small/', '/big/')
        }
      }
    ]

    return {
      getImageUrl (link) {
        const extractor = getExtractor(link.href)

        return extractor.getUrl(extractor, link)
      },

      getLinksSelector () {
        return extractors
          .filter((e) => e.allowed)
          .map((e) => `a${e.linkSelector}.postLink`)
          .join(',')
      },

      getForbiddenHostLinksSelector () {
        return extractors
          .filter((e) => !e.allowed)
          .map((e) => `a${e.linkSelector}.postLink`)
          .join(',')
      }
    }
  })()

  var imageView = (function () {
    const ENABLE_ON_PATH = '/forum/viewtopic.php'

    const CLASSES = {
      imageLink: 'image-link',
      error: 'error-icon',
      forbiddenHost: 'forbidden-host',
      loading: 'loading-icon',
      open: 'image-view-open'
    }

    const SELECTORS = {
      imageLink: `.${CLASSES.imageLink}`
    }

    const elements = {
      container: null,
      image: null
    }

    const state = {
      open: false,
      currentLink: null,
      linksSet: [],
      getCurrentLinkIndex () {
        return state.linksSet.indexOf(state.currentLink)
      },
      getLastLinkIndex () {
        return state.linksSet.length - 1
      }
    }

    function showImage (imageUrl) {
      return new Promise((resolve, reject) => {
        elements.container.classList.add(CLASSES.loading)
        elements.container.classList.remove(CLASSES.error)

        // clear previous
        elements.image.src = ''

        let imageObj = new Image()
        imageObj.onload = function () {
          elements.image.src = this.src
          elements.container.classList.remove(CLASSES.loading)
          resolve()
        }
        imageObj.onerror = function (e) {
          elements.container.classList.remove(CLASSES.loading)
          elements.container.classList.add(CLASSES.error)
          reject(e)
        }
        // load image
        imageObj.src = imageUrl

        document.body.classList.add(CLASSES.open)
        state.open = true
      })
    }

    function hideImage () {
      document.body.classList.remove(CLASSES.open)
      state.open = false
      state.currentLink = null
      elements.image.src = ''
    }

    async function setImage (link) {
      state.currentLink = link

      let imageUrl = link.dataset['imgUrl']
      if (imageUrl) {
        showImage(imageUrl)
        return
      }

      link.classList.add(CLASSES.loading)

      imageUrl = await urlExtractor.getImageUrl(link)

      link.dataset['imgUrl'] = imageUrl
      link.classList.remove(CLASSES.loading)

      showImage(imageUrl)
        .catch(() => {
        // hideImage()
          link.classList.add(CLASSES.error)
        })
    }

    function nextImage () {
      if (!state.currentLink) { return }

      const currentIndex = state.getCurrentLinkIndex()
      const newIndex = currentIndex < state.getLastLinkIndex()
        ? currentIndex + 1
        : 0

      setImage(state.linksSet[newIndex])
    }

    function previousImage () {
      if (!state.currentLink) { return }

      const currentIndex = state.getCurrentLinkIndex()
      const newIndex = currentIndex === 0
        ? state.getLastLinkIndex()
        : currentIndex - 1

      setImage(state.linksSet[newIndex])
    }

    function handleLinkClick (event) {
      event.preventDefault()

      let link = event.target
      state.linksSet = $$$1(SELECTORS.imageLink, link.parentNode)

      setImage(link)
    }

    return function () {
      if (location.pathname !== ENABLE_ON_PATH) {
        return
      }

      addStyle(imageViewCSS)

      $.ready()
        .then(() => {
          elements.image = $.create('img', {
            className: 'image-view'
          })

          elements.container = $.create('div', {
            className: 'image-view-container',
            contents: elements.image,
            events: {
              'click': hideImage
            }
          })

          document.body.appendChild(elements.container)

          const topic = $('table.topic')

          // Assign class to image links
          $.set($$$1(urlExtractor.getLinksSelector(), topic), {
            className: CLASSES.imageLink
          })
          // Mark forbidden hosts
          $.set($$$1(urlExtractor.getForbiddenHostLinksSelector(), topic), {
            className: `${CLASSES.forbiddenHost} ${CLASSES.imageLink}`
          })

          // Event handlers

          document.addEventListener('keydown', (event) => {
            if (!state.open) {
              return
            }

            if (event.key === 'ArrowRight') {
              nextImage()
            } else if (event.key === 'ArrowLeft') {
              previousImage()
            }
          }, false)

          $.delegate(topic, 'click', SELECTORS.imageLink, handleLinkClick)
        })
    }
  })()

  tags()
  addStyle(pagerCSS)
  download()
  imageView()
}())
