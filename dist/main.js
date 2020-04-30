var Client =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const awaitText = async (text)=>{
	const res = await fetch(text)
  	try {
		  const data = await res.json();
    	return data;
  	} catch(error) {
    	console.log("error", error);
    	// appropriately handle the error
  	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return /* reexport */ handleSubmit; });
__webpack_require__.d(__webpack_exports__, "awaitText", function() { return /* reexport */ textAwaiter["awaitText"]; });

// CONCATENATED MODULE: ./src/client/js/formHandler.js
function handleSubmit(event) {
        event.preventDefault()
        let formText = document.getElementById('name').value
        
        console.log("::: Data posted :::")
        // check what text was put into the form field
        console.log("::: Form Submitted :::")
        postData('/addText', {text: formText})
        fetch('http://localhost:8080/addText')
        .then(res => res.json())
        .then(function(res) {
            console.log("::: Data fetched :::")
            console.log(res);
            document.getElementById('text').innerHTML = "Text: " + res.text
            document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity
            document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity
            document.getElementById('polarity_confidence').innerHTML = "Polarity ccnfidence: " + (res.polarity_confidence*100) + "%"
            document.getElementById('subjectivity_confidence').innerHTML = "Polarity ccnfidence: " + (res.subjectivity_confidence*100) + "%"
        });
}

const getData = async (url)=>{
    const res = await fetch(url)
    try {
          const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

const postData = async ( url='', data={})=>{
    console.log(url);
    const res = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header      
        body: JSON.stringify({data}), 
    });
    console.log(data);
    console.log(res);
    try {
        const newData = await res.json();
        console.log(newData);
        console.log(res);
        return newData;
    } catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
};
// EXTERNAL MODULE: ./src/client/js/textAwaiter.js
var textAwaiter = __webpack_require__(0);

// EXTERNAL MODULE: ./src/client/styles/resets.scss
var resets = __webpack_require__(1);

// EXTERNAL MODULE: ./src/client/styles/base.scss
var base = __webpack_require__(2);

// EXTERNAL MODULE: ./src/client/styles/footer.scss
var footer = __webpack_require__(3);

// EXTERNAL MODULE: ./src/client/styles/form.scss
var styles_form = __webpack_require__(4);

// EXTERNAL MODULE: ./src/client/styles/header.scss
var header = __webpack_require__(5);

// CONCATENATED MODULE: ./src/client/index.js











/***/ })
/******/ ]);