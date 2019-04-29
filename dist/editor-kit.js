module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "htmlToText",
    value: function htmlToText(html) {
      var tmp = document.implementation.createHTMLDocument("New").body;
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    }
  }, {
    key: "truncateString",
    value: function truncateString(string) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;

      if (string.length <= limit) {
        return string;
      } else {
        return string.substring(0, limit) + "...";
      }
    }
  }, {
    key: "sleep",
    value: function sleep(seconds) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve();
        }, seconds * 1000);
      });
    }
  }]);

  return Util;
}();



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorKit", function() { return EditorKit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_EditorKitInternal__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EditorKitDelegate__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EditorKitDelegate", function() { return __WEBPACK_IMPORTED_MODULE_1__EditorKitDelegate__["a"]; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var EditorKit =
/*#__PURE__*/
function () {
  /*
    @param EditorKitDelegate `delegate`: The instance responsible for handling editor-specific events
    @param string `mode`: one of 'plaintext', 'html', 'markdown'
    @param bool `supportsFilesafe`
    @param int `coallesedSavingDelay`:
      For ComponentManager saving, what the debouncer ms delay should be set to.
      Defaults to 250ms.
  */
  function EditorKit(_ref) {
    var delegate = _ref.delegate,
        _ref$mode = _ref.mode,
        mode = _ref$mode === void 0 ? 'plaintext' : _ref$mode,
        _ref$supportsFilesafe = _ref.supportsFilesafe,
        supportsFilesafe = _ref$supportsFilesafe === void 0 ? false : _ref$supportsFilesafe,
        _ref$coallesedSavingD = _ref.coallesedSavingDelay,
        coallesedSavingDelay = _ref$coallesedSavingD === void 0 ? 250 : _ref$coallesedSavingD;

    _classCallCheck(this, EditorKit);

    this.delegate = delegate;
    this.mode = mode;
    this.supportsFilesafe = supportsFilesafe;
    this.coallesedSavingDelay = coallesedSavingDelay;
    this.internal = new __WEBPACK_IMPORTED_MODULE_0__lib_EditorKitInternal__["a" /* default */]({
      delegate: delegate,
      mode: mode,
      supportsFilesafe: supportsFilesafe,
      coallesedSavingDelay: coallesedSavingDelay
    });
  }
  /*
  Public
  */


  _createClass(EditorKit, [{
    key: "getFilesafe",
    value: function getFilesafe() {
      return this.internal.filesafe;
    }
    /*
      Called by consumer when the editor has a change/input event
    */

  }, {
    key: "onEditorValueChanged",
    value: function onEditorValueChanged(text) {
      this.internal.onEditorValueChanged(text);
    }
    /*
      Called by consumer when the editor has a keyup event
    */

  }, {
    key: "onEditorKeyUp",
    value: function onEditorKeyUp(_ref2) {
      var key = _ref2.key,
          isSpace = _ref2.isSpace,
          isEnter = _ref2.isEnter;
      this.internal.onEditorKeyUp({
        key: key,
        isSpace: isSpace,
        isEnter: isEnter
      });
    }
    /*
      Returns a file descriptor if successful.
     */

  }, {
    key: "uploadJSFileObject",
    value: function () {
      var _uploadJSFileObject = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(file) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.internal.uploadJSFileObject(file));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadJSFileObject(_x) {
        return _uploadJSFileObject.apply(this, arguments);
      }

      return uploadJSFileObject;
    }()
  }]);

  return EditorKit;
}();



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorKit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sn_components_api__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sn_components_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sn_components_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filesafe_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_filesafe_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_filesafe_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FileLoader_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TextExpander_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__ = __webpack_require__(7);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var EditorKit =
/*#__PURE__*/
function () {
  function EditorKit(_ref) {
    var delegate = _ref.delegate,
        mode = _ref.mode,
        supportsFilesafe = _ref.supportsFilesafe,
        _ref$coallesedSavingD = _ref.coallesedSavingDelay,
        coallesedSavingDelay = _ref$coallesedSavingD === void 0 ? 250 : _ref$coallesedSavingD;

    _classCallCheck(this, EditorKit);

    this.delegate = delegate;
    this.mode = mode;
    this.supportsFilesafe = supportsFilesafe;
    this.coallesedSavingDelay = coallesedSavingDelay;
    /*
      When we upload a file, we want to associate it with the current note.
      The best way to ensure that files are in sync with the filesafe client is to wait
      until the componentMananger has received the file descriptor item back from SN.
      So, upon being notified that files have changed, we'll sift through this array
      and associate any pending files.
     */

    this.fileIdsPendingAssociation = [];
    this.connectToBridge();

    if (supportsFilesafe) {
      this.configureFilesafe();
    }
  }

  _createClass(EditorKit, [{
    key: "configureFilesafe",
    value: function configureFilesafe() {
      var _this = this;

      this.filesafe = new __WEBPACK_IMPORTED_MODULE_1_filesafe_js___default.a({
        componentManager: this.componentManager
      });
      this.filesafe.addDataChangeObserver(function () {
        // Reload UI by querying Filesafe for changes
        var allFileDescriptors = _this.filesafe.getAllFileDescriptors();

        if (_this.note && _this.fileIdsPendingAssociation.length > 0) {
          var hasMatch = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var uuid = _step.value;
              var descriptor = allFileDescriptors.find(function (candidate) {
                return candidate.uuid == uuid;
              });

              if (!descriptor) {
                return "continue";
              }

              hasMatch = true; // console.log("Attching file descriptor to note", descriptor);

              descriptor.addItemAsRelationship(_this.note);

              _this.componentManager.saveItem(descriptor);

              _this.fileIdsPendingAssociation.splice(_this.fileIdsPendingAssociation.indexOf(uuid), 1);

              var syntax = __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__["a" /* default */].insertionSyntaxForFileDescriptor(descriptor);

              _this.delegate.insertRawText(syntax);
            };

            for (var _iterator = _this.fileIdsPendingAssociation.slice()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (hasMatch) {
            _this.textExpander.searchPatterns();
          }
        }

        if (allFileDescriptors.length > 0) {
          _this.fileLoader.loadFilesafeElements();
        }
      });
      this.filesafe.addNewFileDescriptorHandler(function (fileDescriptor) {
        // Called when a new file is uploaded. We'll wait until the bridge acknowledges
        // receipt of this item, and then it will be added to the editor.
        // console.log("Adding file descriptror to association queue", fileDescriptor.uuid);
        _this.fileIdsPendingAssociation.push(fileDescriptor.uuid);
      });
      this.fileLoader = new __WEBPACK_IMPORTED_MODULE_3__FileLoader_js__["a" /* default */]({
        filesafe: this.filesafe,
        getElementsBySelector: this.delegate.getElementsBySelector,
        insertElement: this.delegate.insertElement
      });
      this.textExpander = new __WEBPACK_IMPORTED_MODULE_4__TextExpander_js__["a" /* default */]({
        afterExpand: function afterExpand() {
          _this.fileLoader.loadFilesafeElements();
        },
        getCurrentLineText: this.delegate.getCurrentLineText,
        getPreviousLineText: this.delegate.getPreviousLineText,
        replaceText: this.delegate.replaceText,
        patterns: [{
          regex: __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__["a" /* default */].FilesafeSyntaxPattern,
          callback: function callback(matchedText) {
            return __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__["a" /* default */].expandedFilesafeSyntax(matchedText);
          }
        }]
      });
    }
  }, {
    key: "connectToBridge",
    value: function connectToBridge() {
      var _this2 = this;

      this.componentManager = new __WEBPACK_IMPORTED_MODULE_0_sn_components_api___default.a(null, function () {
        // On ready and permissions authorization
        document.documentElement.classList.add(_this2.componentManager.platform);
      }); // The editor does some debouncing for us, so we'll lower the default debounce value from 250 to 150

      this.componentManager.coallesedSavingDelay = this.coallesedSavingDelay;
      this.componentManager.streamContextItem(function (note) {
        // Todo: if note has changed, release previous temp object urls
        var itemClass = __WEBPACK_IMPORTED_MODULE_1_filesafe_js___default.a.getSFItemClass();
        var isNewNoteLoad = true;

        if (_this2.note && _this2.note.uuid == note.uuid) {
          isNewNoteLoad = false;
        }

        _this2.note = new itemClass(note);

        if (_this2.supportsFilesafe) {
          _this2.filesafe.setCurrentNote(_this2.note);
        } // Only update UI on non-metadata updates.


        if (note.isMetadataUpdate) {
          return;
        }

        var text = note.content.text; // Set before expanding. We want this value to always be the collapsed value

        _this2.previousText = text;

        if (_this2.supportsFilesafe) {
          // We want to expand any filesafe syntax in the text, but only after the text has been inserted. (Will be checked on editor change callback)
          _this2.needsFilesafeElementLoad = true;
          text = __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__["a" /* default */].expandedFilesafeSyntax(text);
        }

        _this2.delegate.setEditorRawText(text);

        if (isNewNoteLoad) {
          _this2.delegate.clearUndoHistory();
        }
      });
    }
  }, {
    key: "onEditorKeyUp",
    value: function onEditorKeyUp(_ref2) {
      var key = _ref2.key,
          isSpace = _ref2.isSpace,
          isEnter = _ref2.isEnter;
      this.textExpander.onKeyUp({
        key: key,
        isSpace: isSpace,
        isEnter: isEnter
      });
    }
  }, {
    key: "onEditorValueChanged",
    value: function onEditorValueChanged(text) {
      var _this3 = this;

      if (this.needsFilesafeElementLoad) {
        this.needsFilesafeElementLoad = false;
        this.fileLoader.loadFilesafeElements();
      }

      if (this.supportsFilesafe) {
        text = __WEBPACK_IMPORTED_MODULE_5__FilesafeHtml_js__["a" /* default */].collapseFilesafeSyntax(text); // Change events may be triggered several times when expanding filesafe syntax.
        // Ultimately, while the visual layer is changing a lot, the underlying text layer,
        // after being collapsed, will not change. So we'll compare the previous html to new collapsed html before continuing

        var sameText = this.previousText == text;

        if (sameText) {
          // console.log("Changed html is same as previous, ignoring");
          return;
        }
      }

      this.previousText = text;
      var note = this.note;

      if (note) {
        this.componentManager.saveItemWithPresave(note, function () {
          note.content.text = text;

          if (_this3.mode == 'html') {
            note.content.preview_plain = __WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].truncateString(__WEBPACK_IMPORTED_MODULE_2__Util_js__["a" /* default */].htmlToText(text));
          } else {
            note.content.preview_plain = null;
          }
        });
      }
    }
  }, {
    key: "uploadJSFileObject",
    value: function () {
      var _uploadJSFileObject = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(file) {
        var _this4 = this;

        var status;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = this.fileLoader.insertStatusAtCursor("Processing file...");
                return _context.abrupt("return", this.filesafe.encryptAndUploadJavaScriptFileObject(file).then(function (descriptor) {
                  _this4.fileLoader.removeCursorStatus(status);
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadJSFileObject(_x) {
        return _uploadJSFileObject.apply(this, arguments);
      }

      return uploadJSFileObject;
    }()
  }]);

  return EditorKit;
}();



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ComponentManager = function () {
  function ComponentManager(permissions, onReady) {
    _classCallCheck(this, ComponentManager);

    this.sentMessages = [];
    this.messageQueue = [];
    this.loggingEnabled = false;
    this.acceptsThemes = true;
    this.activeThemes = [];
    this.initialPermissions = permissions;
    this.onReadyCallback = onReady;
    this.coallesedSaving = true;
    this.coallesedSavingDelay = 250;
    this.registerMessageHandler();
  }

  _createClass(ComponentManager, [{
    key: "registerMessageHandler",
    value: function registerMessageHandler() {
      var _this = this;

      var messageHandler = function messageHandler(event, mobileSource) {
        if (_this.loggingEnabled) {
          console.log("Components API Message received:", event.data, "mobile?", mobileSource);
        } // The first message will be the most reliable one, so we won't change it after any subsequent events,
        // in case you receive an event from another window.


        if (!_this.origin) {
          _this.origin = event.origin;
        }

        _this.mobileSource = mobileSource; // If from mobile app, JSON needs to be used.

        var data = mobileSource ? JSON.parse(event.data) : event.data;

        _this.handleMessage(data);
      }; // Mobile (React Native) uses `document`, web/desktop uses `window`.addEventListener
      // for postMessage API to work properly.


      document.addEventListener("message", function (event) {
        messageHandler(event, true);
      }, false);
      window.addEventListener("message", function (event) {
        messageHandler(event, false);
      }, false);
    }
  }, {
    key: "handleMessage",
    value: function handleMessage(payload) {
      if (payload.action === "component-registered") {
        this.sessionKey = payload.sessionKey;
        this.componentData = payload.componentData;
        this.onReady(payload.data);

        if (this.loggingEnabled) {
          console.log("Component successfully registered with payload:", payload);
        }
      } else if (payload.action === "themes") {
        if (this.acceptsThemes) {
          this.activateThemes(payload.data.themes);
        }
      } else if (payload.original) {
        // get callback from queue
        var originalMessage = this.sentMessages.filter(function (message) {
          return message.messageId === payload.original.messageId;
        })[0];

        if (!originalMessage) {
          // Connection must have been reset. Alert the user.
          alert("This extension is attempting to communicate with Standard Notes, but an error is preventing it from doing so. Please restart this extension and try again.");
        }

        if (originalMessage.callback) {
          originalMessage.callback(payload.data);
        }
      }
    }
  }, {
    key: "onReady",
    value: function onReady(data) {
      if (this.initialPermissions && this.initialPermissions.length > 0) {
        this.requestPermissions(this.initialPermissions);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.messageQueue[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var message = _step.value;
          this.postMessage(message.action, message.data, message.callback);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.messageQueue = [];
      this.environment = data.environment;
      this.platform = data.platform;
      this.uuid = data.uuid;

      if (this.loggingEnabled) {
        console.log("onReadyData", data);
      }

      this.activateThemes(data.activeThemeUrls || []);

      if (this.onReadyCallback) {
        this.onReadyCallback();
      }
    }
  }, {
    key: "getSelfComponentUUID",
    value: function getSelfComponentUUID() {
      return this.uuid;
    }
  }, {
    key: "isRunningInDesktopApplication",
    value: function isRunningInDesktopApplication() {
      return this.environment === "desktop";
    }
  }, {
    key: "setComponentDataValueForKey",
    value: function setComponentDataValueForKey(key, value) {
      this.componentData[key] = value;
      this.postMessage("set-component-data", {
        componentData: this.componentData
      }, function (data) {});
    }
  }, {
    key: "clearComponentData",
    value: function clearComponentData() {
      this.componentData = {};
      this.postMessage("set-component-data", {
        componentData: this.componentData
      }, function (data) {});
    }
  }, {
    key: "componentDataValueForKey",
    value: function componentDataValueForKey(key) {
      return this.componentData[key];
    }
  }, {
    key: "postMessage",
    value: function postMessage(action, data, callback) {
      if (!this.sessionKey) {
        this.messageQueue.push({
          action: action,
          data: data,
          callback: callback
        });
        return;
      }

      var message = {
        action: action,
        data: data,
        messageId: this.generateUUID(),
        sessionKey: this.sessionKey,
        api: "component"
      };
      var sentMessage = JSON.parse(JSON.stringify(message));
      sentMessage.callback = callback;
      this.sentMessages.push(sentMessage); // Mobile (React Native) requires a string for the postMessage API.

      if (this.mobileSource) {
        message = JSON.stringify(message);
      }

      if (this.loggingEnabled) {
        console.log("Posting message:", message);
      }

      window.parent.postMessage(message, this.origin);
    }
  }, {
    key: "setSize",
    value: function setSize(type, width, height) {
      this.postMessage("set-size", {
        type: type,
        width: width,
        height: height
      }, function (data) {});
    }
  }, {
    key: "requestPermissions",
    value: function requestPermissions(permissions, callback) {
      this.postMessage("request-permissions", {
        permissions: permissions
      }, function (data) {
        callback && callback();
      }.bind(this));
    }
  }, {
    key: "streamItems",
    value: function streamItems(contentTypes, callback) {
      if (!Array.isArray(contentTypes)) {
        contentTypes = [contentTypes];
      }

      this.postMessage("stream-items", {
        content_types: contentTypes
      }, function (data) {
        callback(data.items);
      }.bind(this));
    }
  }, {
    key: "streamContextItem",
    value: function streamContextItem(callback) {
      this.postMessage("stream-context-item", null, function (data) {
        var item = data.item;
        /*
          When an item is saved via saveItem, its updated_at value is set client side to the current date.
          If we make a change locally, then for whatever reason receive an item via streamItems/streamContextItem,
          we want to ignore that change if it was made prior to the latest change we've made.
           Update 1/22/18: However, if a user is restoring a note from version history, this change
          will not pass through this filter and will thus be ignored. Because the client now handles
          this case with isMetadataUpdate, we no longer need the below.
        */
        // if(this.streamedContextItem && this.streamedContextItem.uuid == item.uuid
        //   && this.streamedContextItem.updated_at > item.updated_at) {
        //   return;
        // }
        // this.streamedContextItem = item;

        callback(item);
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(item) {
      this.postMessage("select-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "createItem",
    value: function createItem(item, callback) {
      this.postMessage("create-item", {
        item: this.jsonObjectForItem(item)
      }, function (data) {
        var item = data.item; // A previous version of the SN app had an issue where the item in the reply to create-item
        // would be nested inside "items" and not "item". So handle both cases here.

        if (!item && data.items && data.items.length > 0) {
          item = data.items[0];
        }

        this.associateItem(item);
        callback && callback(item);
      }.bind(this));
    }
  }, {
    key: "createItems",
    value: function createItems(items, callback) {
      var _this2 = this;

      var mapped = items.map(function (item) {
        return _this2.jsonObjectForItem(item);
      });
      this.postMessage("create-items", {
        items: mapped
      }, function (data) {
        callback && callback(data.items);
      }.bind(this));
    }
  }, {
    key: "associateItem",
    value: function associateItem(item) {
      this.postMessage("associate-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "deassociateItem",
    value: function deassociateItem(item) {
      this.postMessage("deassociate-item", {
        item: this.jsonObjectForItem(item)
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.postMessage("clear-selection", {
        content_type: "Tag"
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item, callback) {
      this.deleteItems([item], callback);
    }
  }, {
    key: "deleteItems",
    value: function deleteItems(items, callback) {
      var params = {
        items: items.map(function (item) {
          return this.jsonObjectForItem(item);
        }.bind(this))
      };
      this.postMessage("delete-items", params, function (data) {
        callback && callback(data);
      });
    }
  }, {
    key: "sendCustomEvent",
    value: function sendCustomEvent(action, data, callback) {
      this.postMessage(action, data, function (data) {
        callback && callback(data);
      }.bind(this));
    }
  }, {
    key: "saveItem",
    value: function saveItem(item, callback) {
      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      this.saveItems([item], callback, skipDebouncer);
    }
    /* Presave allows clients to perform any actions last second before the save actually occurs (like setting previews).
       Saves debounce by default, so if a client needs to compute a property on an item before saving, it's best to
       hook into the debounce cycle so that clients don't have to implement their own debouncing.
     */

  }, {
    key: "saveItemWithPresave",
    value: function saveItemWithPresave(item, presave, callback) {
      this.saveItemsWithPresave([item], presave, callback);
    }
  }, {
    key: "saveItemsWithPresave",
    value: function saveItemsWithPresave(items, presave, callback) {
      this.saveItems(items, callback, false, presave);
    }
    /*
    skipDebouncer allows saves to go through right away rather than waiting for timeout.
    This should be used when saving items via other means besides keystrokes.
     */

  }, {
    key: "saveItems",
    value: function saveItems(items, callback) {
      var _this3 = this;

      var skipDebouncer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var presave = arguments[3];

      var saveBlock = function saveBlock(itemsToSave) {
        // presave block allows client to gain the benefit of performing something in the debounce cycle.
        presave && presave();
        var mappedUuids = [];
        var mappedItems = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = itemsToSave[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value; // To prevent duplicates

            if (mappedUuids.includes(item.uuid)) {
              continue;
            }

            mappedUuids.push(item.uuid);
            item.updated_at = new Date();
            mappedItems.push(_this3.jsonObjectForItem(item));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        _this3.postMessage("save-items", {
          items: mappedItems
        }, function (data) {
          callback && callback();
        });
      };
      /*
        Coallesed saving prevents saves from being made after every keystroke, and instead
        waits coallesedSavingDelay before performing action. For example, if a user types a keystroke, and the clienet calls saveItem,
        a 250ms delay will begin. If they type another keystroke within 250ms, the previously pending
        save will be cancelled, and another 250ms delay occurs. If ater 250ms the pending delay is not cleared by a future call,
        the save will finally trigger.
         Note: it's important to modify saving items updated_at immediately and not after delay. If you modify after delay,
        a delayed sync could just be wrapping up, and will send back old data and replace what the user has typed.
       */
      // We also need to make sure that when we clear a pending save timeout, we carry over those pending items into the new save.


      if (!this.pendingSaveItems) {
        this.pendingSaveItems = [];
      }

      if (this.coallesedSaving == true && !skipDebouncer) {
        if (this.pendingSave) {
          clearTimeout(this.pendingSave);
        }

        this.pendingSaveItems = this.pendingSaveItems.concat(items);
        this.pendingSave = setTimeout(function () {
          saveBlock(_this3.pendingSaveItems); // Clear pending save items

          _this3.pendingSaveItems = [];
        }, this.coallesedSavingDelay);
      } else {
        saveBlock(items);
      }
    }
  }, {
    key: "jsonObjectForItem",
    value: function jsonObjectForItem(item) {
      var copy = Object.assign({}, item);
      copy.children = null;
      copy.parent = null;
      return copy;
    }
  }, {
    key: "getItemAppDataValue",
    value: function getItemAppDataValue(item, key) {
      var AppDomain = "org.standardnotes.sn";
      var data = item.content.appData && item.content.appData[AppDomain];

      if (data) {
        return data[key];
      } else {
        return null;
      }
    }
    /* Themes */

  }, {
    key: "activateThemes",
    value: function activateThemes(incomingUrls) {
      if (this.loggingEnabled) {
        console.log("Incoming themes", incomingUrls);
      }

      if (this.activeThemes.sort().toString() == incomingUrls.sort().toString()) {
        // incoming are same as active, do nothing
        return;
      }

      var themesToActivate = incomingUrls || [];
      var themesToDeactivate = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.activeThemes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var activeUrl = _step3.value;

          if (!incomingUrls.includes(activeUrl)) {
            // active not present in incoming, deactivate it
            themesToDeactivate.push(activeUrl);
          } else {
            // already present in active themes, remove it from themesToActivate
            themesToActivate = themesToActivate.filter(function (candidate) {
              return candidate != activeUrl;
            });
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (this.loggingEnabled) {
        console.log("Deactivating themes:", themesToDeactivate);
        console.log("Activating themes:", themesToActivate);
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = themesToDeactivate[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var theme = _step4.value;
          this.deactivateTheme(theme);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      this.activeThemes = incomingUrls;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = themesToActivate[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var url = _step5.value;

          if (!url) {
            continue;
          }

          var link = document.createElement("link");
          link.id = btoa(url);
          link.href = url;
          link.type = "text/css";
          link.rel = "stylesheet";
          link.media = "screen,print";
          link.className = "custom-theme";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  }, {
    key: "themeElementForUrl",
    value: function themeElementForUrl(url) {
      var elements = Array.from(document.getElementsByClassName("custom-theme")).slice();
      return elements.find(function (element) {
        // We used to search here by `href`, but on desktop, with local file:// urls, that didn't work for some reason.
        return element.id == btoa(url);
      });
    }
  }, {
    key: "deactivateTheme",
    value: function deactivateTheme(url) {
      var element = this.themeElementForUrl(url);

      if (element) {
        element.disabled = true;
        element.parentNode.removeChild(element);
      }
    }
    /* Theme caching is currently disabled. Might be enabled in the future if neccessary. */

    /*
    activateCachedThemes() {
      let themes = this.getCachedThemeUrls();
      let writeToCache = false;
      if(this.loggingEnabled) { console.log("Activating cached themes", themes); }
      this.activateThemes(themes, writeToCache);
    }
     cacheThemeUrls(urls) {
      if(this.loggingEnabled) { console.log("Caching theme urls", urls); }
      localStorage.setItem("cachedThemeUrls", JSON.stringify(urls));
    }
     decacheThemeUrls() {
      localStorage.removeItem("cachedThemeUrls");
    }
     getCachedThemeUrls() {
      let urls = localStorage.getItem("cachedThemeUrls");
      if(urls) {
        return JSON.parse(urls);
      } else {
        return [];
      }
    }
    */

    /* Utilities */

  }, {
    key: "generateUUID",
    value: function generateUUID() {
      var crypto = window.crypto || window.msCrypto;

      if (crypto) {
        var buf = new Uint32Array(4);
        crypto.getRandomValues(buf);
        var idx = -1;
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          idx++;
          var r = buf[idx >> 3] >> idx % 8 * 4 & 15;
          var v = c == 'x' ? r : r & 0x3 | 0x8;
          return v.toString(16);
        });
      } else {
        var d = new Date().getTime();

        if (window.performance && typeof window.performance.now === "function") {
          d += performance.now(); //use high-precision timer if available
        }

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
        });
        return uuid;
      }
    }
  }]);

  return ComponentManager;
}();

if (typeof module != "undefined" && typeof module.exports != "undefined") {
  module.exports = ComponentManager;
}

if (window) {
  window.ComponentManager = ComponentManager;
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("filesafe-js");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util_js__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FileLoader =
/*#__PURE__*/
function () {
  function FileLoader(_ref) {
    var filesafe = _ref.filesafe,
        getElementsBySelector = _ref.getElementsBySelector,
        insertElement = _ref.insertElement;

    _classCallCheck(this, FileLoader);

    this.filesafe = filesafe;
    this.getElementsBySelector = getElementsBySelector;
    this.insertElement = insertElement; // When a file is decrypted and loaded into a temp url, we'll place the temp url in here so that subsequent decrypt attempts
    // dont require further work. Mapped values are of form {url, fileType, fsname}

    this.uuidToFileTempUrlAndTypeMapping = {}; // uuids of files currently loading, so that we don't start a new load for currently loading file

    this.currentlyLoadingIds = []; // uuid to current status element mapping

    this.statusElementMapping = {};
    this.fileTypeToElementType = {
      "image/png": "img",
      "image/jpg": "img",
      "image/jpeg": "img",
      "image/gif": "img",
      "image/tiff": "img",
      "image/bmp": "img",
      "video/mp4": "video",
      "audio/mpeg": "audio",
      "audio/mp3": "audio"
    };
  }

  _createClass(FileLoader, [{
    key: "fileTypeForElementType",
    value: function fileTypeForElementType(type) {
      return this.fileTypeToElementType[type.toLowerCase()];
    }
    /*
      Scans the document for elements <filesafe>. If found, begins loading file.
    */

  }, {
    key: "loadFilesafeElements",
    value: function loadFilesafeElements() {
      var elements = this.getElementsBySelector("*[fsplaceholder]");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;
          this.loadFilesafeElement(element);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /*
    @param fsSyntax
    The FileSafe syntax string. i.e [FileSafe:uuid-123:name]
    */

  }, {
    key: "loadFilesafeElement",
    value: function () {
      var _loadFilesafeElement = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(fsElement) {
        var _this = this;

        var fsid, fsname, existingMapping, descriptor, selectorSyntax, existingElements, cleanup, fileItem, data, fileType, tempUrl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fsid = fsElement.getAttribute("fsid");
                fsname = fsElement.getAttribute("fsname");
                existingMapping = this.uuidToFileTempUrlAndTypeMapping[fsid];

                if (!existingMapping) {
                  _context.next = 6;
                  break;
                }

                this.insertMediaElement({
                  url: existingMapping.url,
                  fsid: fsid,
                  fileType: existingMapping.fileType,
                  fsname: existingMapping.fsname,
                  fsElement: fsElement
                });
                return _context.abrupt("return");

              case 6:
                if (!this.currentlyLoadingIds.includes(fsid)) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                descriptor = this.filesafe.findFileDescriptor(fsid);

                if (descriptor) {
                  _context.next = 13;
                  break;
                }

                this.setStatus("Unable to find file.", fsElement, fsid);
                console.log("Can't find descriptor with id", fsid);
                return _context.abrupt("return", {
                  success: false
                });

              case 13:
                selectorSyntax = "[fsid=\"".concat(descriptor.uuid, "\"][fscollapsable]");
                existingElements = document.querySelectorAll("img".concat(selectorSyntax, ", figure").concat(selectorSyntax, ", video").concat(selectorSyntax, ", audio").concat(selectorSyntax));

                if (!(existingElements.length > 0)) {
                  _context.next = 18;
                  break;
                }

                console.log("File already exists");
                return _context.abrupt("return", {
                  success: false
                });

              case 18:
                cleanup = function cleanup() {
                  _this.currentlyLoadingIds.splice(_this.currentlyLoadingIds.indexOf(fsid), 1);
                };

                this.currentlyLoadingIds.push(fsid);
                this.setStatus("Downloading file...", fsElement, fsid);
                _context.next = 23;
                return __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* default */].sleep(0.05);

              case 23:
                _context.next = 25;
                return this.filesafe.downloadFileFromDescriptor(descriptor);

              case 25:
                fileItem = _context.sent;
                this.setStatus("Decrypting file...", fsElement, fsid);
                _context.next = 29;
                return __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* default */].sleep(0.05);

              case 29:
                _context.next = 31;
                return this.filesafe.decryptFile({
                  fileDescriptor: descriptor,
                  fileItem: fileItem
                });

              case 31:
                data = _context.sent;
                // Remove loading text
                this.setStatus(null, fsElement, fsid);
                _context.next = 35;
                return __WEBPACK_IMPORTED_MODULE_0__Util_js__["a" /* default */].sleep(0.05);

              case 35:
                // Allow UI to update before adding image
                // Generate temporary url, must be released later
                fileType = descriptor.content.fileType;
                tempUrl = this.filesafe.createTemporaryFileUrl({
                  base64Data: data.decryptedData,
                  dataType: fileType
                });
                this.insertMediaElement({
                  url: tempUrl,
                  fsid: fsid,
                  fileType: fileType,
                  fsname: fsname,
                  fsElement: fsElement
                });
                cleanup();
                this.uuidToFileTempUrlAndTypeMapping[fsid] = {
                  url: tempUrl,
                  fileType: fileType,
                  fsname: fsname
                };
                return _context.abrupt("return", {
                  success: true
                });

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadFilesafeElement(_x) {
        return _loadFilesafeElement.apply(this, arguments);
      }

      return loadFilesafeElement;
    }()
  }, {
    key: "insertMediaElement",
    value: function insertMediaElement(_ref2) {
      var url = _ref2.url,
          fsid = _ref2.fsid,
          fsname = _ref2.fsname,
          fileType = _ref2.fileType,
          fsElement = _ref2.fsElement;
      var elementType = this.fileTypeForElementType(fileType);
      var mediaElement;

      if (elementType == "img") {
        mediaElement = this.createImageElement({
          url: url,
          fsid: fsid,
          fsname: fsname
        });
      } else if (elementType == "video") {
        mediaElement = this.createVideoElement({
          url: url,
          fsid: fsid,
          fileType: fileType,
          fsname: fsname
        });
      } else if (elementType == "audio") {
        mediaElement = this.createAudioElement({
          url: url,
          fsid: fsid,
          fsname: fsname
        });
      } else {
        // File not supported
        this.setStatus("File not supported.", fsElement, fsid);
        return false;
      }

      this.insertElementAdjacent(mediaElement, fsElement); // Remove fsElement now that image is loaded

      fsElement.remove();
      return true;
    }
  }, {
    key: "createVideoElement",
    value: function createVideoElement(_ref3) {
      var url = _ref3.url,
          fsid = _ref3.fsid,
          type = _ref3.type,
          fsname = _ref3.fsname;
      var video = document.createElement("video");
      video.setAttribute('controls', true);
      video.setAttribute('fsid', fsid);
      video.setAttribute('fsname', fsname);
      video.setAttribute('fscollapsable', true);
      var source = document.createElement("source");
      source.setAttribute('src', url);
      source.setAttribute('type', type);
      video.append(source);
      return video;
    }
  }, {
    key: "createAudioElement",
    value: function createAudioElement(_ref4) {
      var url = _ref4.url,
          fsid = _ref4.fsid,
          fsname = _ref4.fsname;
      var audio = document.createElement("audio");
      audio.setAttribute('src', url);
      audio.setAttribute('controls', true);
      audio.setAttribute('fsid', fsid);
      audio.setAttribute('fsname', fsname);
      audio.setAttribute('fscollapsable', true);
      return audio;
    }
  }, {
    key: "createImageElement",
    value: function createImageElement(_ref5) {
      var url = _ref5.url,
          fsid = _ref5.fsid,
          fsname = _ref5.fsname;
      var image = document.createElement("img");
      image.setAttribute('src', url);
      image.setAttribute('srcset', "".concat(url, " 2x")); // We'd like to wrap it in a figure ideally, but right now there is a bug where inserting
      // the figure element programatically, then entering to create new line after the figure,
      // inserts the paragraph text inside the figure element. We ignore this figure element
      // on saving to SN, so this text would be lost.
      // let imageContainer = document.createElement('figure');

      image.setAttribute('fsid', fsid);
      image.setAttribute('fsname', fsname);
      image.setAttribute('fscollapsable', true); // imageContainer.append(image);

      return image;
    }
  }, {
    key: "setStatus",
    value: function setStatus(status, fsElement, fsid) {
      if (fsid) {
        var existingStatusElement = this.statusElementMapping[fsid];

        if (existingStatusElement) {
          existingStatusElement.remove();
          delete this.statusElementMapping[fsid];
        }
      }

      if (status) {
        var element = document.createElement('span');
        element.setAttribute('id', fsid);
        element.setAttribute('ghost', 'true');
        element.setAttribute('contenteditable', false);
        element.setAttribute('style', 'font-weight: bold');
        element.textContent = status;
        this.insertElementAdjacent(element, fsElement);

        if (fsid) {
          this.statusElementMapping[fsid] = element;
        }

        return element;
      }
    }
  }, {
    key: "insertStatusAtCursor",
    value: function insertStatusAtCursor(status) {
      var identifier = Math.random().toString(36).substring(7);
      this.setStatus(status, null, identifier);
      return identifier;
    }
  }, {
    key: "removeCursorStatus",
    value: function removeCursorStatus(identifier) {
      // We want to search for the element based on identifier, because the actual element
      // inserted may have been done so as raw HTML, and not via an element pointer
      var elements = this.getElementsBySelector("#".concat(identifier));

      if (elements.length > 0) {
        elements[0].remove();
      }
    }
  }, {
    key: "insertElementAdjacent",
    value: function insertElementAdjacent(domNodeToInsert, adjacentToElement) {
      // adjacentTo.insertAdjacentElement('beforebegin', insertElement);
      this.insertElement(domNodeToInsert, adjacentToElement);
    }
  }]);

  return FileLoader;
}();



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextExpander; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextExpander =
/*#__PURE__*/
function () {
  function TextExpander(_ref) {
    var patterns = _ref.patterns,
        afterExpand = _ref.afterExpand,
        beforeExpand = _ref.beforeExpand,
        getCurrentLineText = _ref.getCurrentLineText,
        getPreviousLineText = _ref.getPreviousLineText,
        replaceText = _ref.replaceText;

    _classCallCheck(this, TextExpander);

    this.patterns = patterns;
    this.afterExpand = afterExpand;
    this.beforeExpand = beforeExpand;
    this.getCurrentLineText = getCurrentLineText;
    this.getPreviousLineText = getPreviousLineText;
    this.replaceText = replaceText;
  }

  _createClass(TextExpander, [{
    key: "onKeyUp",
    value: function onKeyUp(_ref2) {
      var key = _ref2.key,
          isSpace = _ref2.isSpace,
          isEnter = _ref2.isEnter;

      if (isSpace || isEnter) {
        this.searchPatterns({
          searchPreviousLine: isEnter
        });
      }
    }
  }, {
    key: "searchPatterns",
    value: function searchPatterns() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          searchPreviousLine = _ref3.searchPreviousLine;

      var text;

      if (searchPreviousLine) {
        text = this.getPreviousLineText();
      } else {
        text = this.getCurrentLineText();
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var pattern = _step.value;
          var match = pattern.regex.exec(text);

          if (!match) {
            continue;
          }

          var matchedText = match[0];

          if (matchedText) {
            var replaceWith = pattern.callback(matchedText);
            this.replaceSelection(pattern.regex, replaceWith, searchPreviousLine);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "replaceSelection",
    value: function replaceSelection(regex, replacement, previousLine) {
      if (this.beforeExpand) {
        this.beforeExpand();
      }

      this.replaceText({
        regex: regex,
        replacement: replacement,
        previousLine: previousLine
      });

      if (this.afterExpand) {
        this.afterExpand();
      }
    }
  }]);

  return TextExpander;
}();



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesafeHtml; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FilesafeHtml =
/*#__PURE__*/
function () {
  function FilesafeHtml() {
    _classCallCheck(this, FilesafeHtml);
  }

  _createClass(FilesafeHtml, null, [{
    key: "expandedFilesafeSyntax",
    // Remove matching <p> tags if present

    /*
    Given an HTML string that includes substrings matching `FilesafeSyntaxPattern`,
    replace occurences with ghost div element <filesafe uuid='123'>
    */
    value: function expandedFilesafeSyntax(html) {
      var _this = this;

      var result = html.replace(this.FilesafeSyntaxPattern, function (match) {
        return _this.filesafeSyntaxToHtmlElement(match);
      });
      return result;
    }
  }, {
    key: "insertionSyntaxForFileDescriptor",
    value: function insertionSyntaxForFileDescriptor(descriptor) {
      return "[FileSafe:".concat(descriptor.uuid, ":").concat(descriptor.content.fileName, "]");
    }
  }, {
    key: "filesafeSyntaxToHtmlElement",
    value: function filesafeSyntaxToHtmlElement(syntax) {
      // remove paragraph tags
      syntax = syntax.replace("<p>", "");
      syntax = syntax.replace("</p>", ""); // Remove brackets

      syntax = syntax.replace("[", "").replace("]", "");
      var components = syntax.split(":");
      var uuid = components[1];
      var name = components[2]; // We use a p tag here because if try something custom, like `filesafe` tag, the editor will automatically
      // wrap it in a p tag, causing littered p tags remaining in the plaintext representation.

      var result = "<span fsplaceholder=true style='display: none;' fscollapsable=true ghost=true fsid=".concat(uuid, " fsname=").concat(name, "></span>");
      return result;
    }
    /*
      Given a rendered HTML string, replace all <filesafe> items with [FileSafe:UUID] plaintext items.
      Also, for any elements that have the 'ghost' attribute, remove it from the resulting string
    */

  }, {
    key: "collapseFilesafeSyntax",
    value: function collapseFilesafeSyntax(html) {
      var domCopy = new DOMParser().parseFromString(html, "text/html"); // Elements that have fscollapsable means they should be collapsed to plain syntax

      var mediaElements = domCopy.querySelectorAll("*[fscollapsable]");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mediaElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var file = _step.value;
          var uuid = file.getAttribute('fsid');
          var name = file.getAttribute('fsname');
          file.insertAdjacentText('afterend', "[FileSafe:".concat(uuid, ":").concat(name, "]"));
          file.remove();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var ghosts = domCopy.querySelectorAll("*[ghost]");
      ghosts.forEach(function (ghost) {
        return ghost.remove();
      });
      return domCopy.body.innerHTML;
    }
  }]);

  return FilesafeHtml;
}();

_defineProperty(FilesafeHtml, "FilesafeSyntaxPattern", /(<p>)?\[FileSafe.*\](<\/p>)?/g);



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorKitDelegate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  The delegate is responsible for responding to events and functions
  that the EditorKit requires. For example, when EditorKit wants to insert
  a new HTML element, it won't neccessarily know how, because it's not designed for
  any particular editor. Instead, it will tell the delegate to insert the element.

  The consumer of this API, the actual editor, would configure this delegate with
  the appropriate callbacks.

  Callbacks are defined in the constructor.
*/
var EditorKitDelegate = function EditorKitDelegate(_ref) {
  var insertRawText = _ref.insertRawText,
      onReceiveNote = _ref.onReceiveNote,
      setEditorRawText = _ref.setEditorRawText,
      getCurrentLineText = _ref.getCurrentLineText,
      getPreviousLineText = _ref.getPreviousLineText,
      replaceText = _ref.replaceText,
      getElementsBySelector = _ref.getElementsBySelector,
      insertElement = _ref.insertElement,
      clearUndoHistory = _ref.clearUndoHistory;

  _classCallCheck(this, EditorKitDelegate);

  this.insertRawText = insertRawText;
  this.onReceiveNote = onReceiveNote;
  this.setEditorRawText = setEditorRawText;
  this.getCurrentLineText = getCurrentLineText;
  this.getPreviousLineText = getPreviousLineText;
  this.replaceText = replaceText;
  this.getElementsBySelector = getElementsBySelector;
  this.insertElement = insertElement;
  this.clearUndoHistory = clearUndoHistory;
};



/***/ })
/******/ ]);
//# sourceMappingURL=editor-kit.js.map