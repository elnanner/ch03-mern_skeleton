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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\server\\\\express.js: Unexpected token (60:4)\\n\\n\\u001b[0m \\u001b[90m 58 |\\u001b[39m     \\u001b[90m// 2. Use renderToString to generate markup which renders components specific to the route requested\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 59 |\\u001b[39m     \\u001b[90m// 3. Return template with markup and CSS styles in the response\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 60 |\\u001b[39m     })\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 61 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 62 |\\u001b[39m app\\u001b[33m.\\u001b[39m\\u001b[36mget\\u001b[39m(\\u001b[32m'/'\\u001b[39m\\u001b[33m,\\u001b[39m (req\\u001b[33m,\\u001b[39m res)\\u001b[33m=>\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m 63 |\\u001b[39m     res\\u001b[33m.\\u001b[39mstatus(\\u001b[35m200\\u001b[39m)\\u001b[33m.\\u001b[39msend(\\u001b[33mTemplate\\u001b[39m())\\u001b[0m\\n    at Object._raise (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:569:17)\\n    at Object.raiseWithData (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:562:17)\\n    at Object.raise (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:523:17)\\n    at Object.unexpected (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3601:16)\\n    at Object.parseIdentifierName (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12995:18)\\n    at Object.parseIdentifier (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12975:23)\\n    at Object.parseBindingAtom (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11037:17)\\n    at Object.parseVarId (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14216:20)\\n    at Object.parseVar (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14192:12)\\n    at Object.parseVarStatement (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14009:10)\\n    at Object.parseStatementContent (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13594:21)\\n    at Object.parseStatement (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13525:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14114:25)\\n    at Object.parseBlockBody (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14105:10)\\n    at Object.parseBlock (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:14089:10)\\n    at Object.parseFunctionBody (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12879:24)\\n    at Object.parseArrowExpression (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12851:10)\\n    at Object.parseParenAndDistinguishExpression (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12387:12)\\n    at Object.parseExprAtom (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11968:23)\\n    at Object.parseExprAtom (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7523:20)\\n    at Object.parseExprSubscripts (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11658:23)\\n    at Object.parseUpdate (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11638:21)\\n    at Object.parseMaybeUnary (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11613:23)\\n    at Object.parseMaybeUnaryOrPrivate (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11425:61)\\n    at Object.parseExprOps (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11432:23)\\n    at Object.parseMaybeConditional (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11402:23)\\n    at Object.parseMaybeAssign (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11362:21)\\n    at C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11320:39\\n    at Object.allowInAnd (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13236:12)\\n    at Object.parseMaybeAssignAllowIn (C:\\\\Luciano\\\\fullstack-react-projects-2nd-edition\\\\ch03-mern_skeleton\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11320:17)\");\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // Connection URL\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`Unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1___default.a.listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Luciano\\fullstack-react-projects-2nd-edition\\ch03-mern_skeleton\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ })

/******/ });