module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Voting.js":
/*!*******************!*\
  !*** ./Voting.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ \"./web3.js\");\n\nconst abi = [{\n  \"inputs\": [],\n  \"stateMutability\": \"nonpayable\",\n  \"type\": \"constructor\"\n}, {\n  \"inputs\": [],\n  \"name\": \"CandidateCount\",\n  \"outputs\": [{\n    \"internalType\": \"uint256\",\n    \"name\": \"\",\n    \"type\": \"uint256\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [{\n    \"internalType\": \"uint256\",\n    \"name\": \"\",\n    \"type\": \"uint256\"\n  }],\n  \"name\": \"candidates\",\n  \"outputs\": [{\n    \"internalType\": \"address\",\n    \"name\": \"candidateAddress\",\n    \"type\": \"address\"\n  }, {\n    \"internalType\": \"string\",\n    \"name\": \"name\",\n    \"type\": \"string\"\n  }, {\n    \"internalType\": \"string\",\n    \"name\": \"party\",\n    \"type\": \"string\"\n  }, {\n    \"internalType\": \"string\",\n    \"name\": \"description\",\n    \"type\": \"string\"\n  }, {\n    \"internalType\": \"uint256\",\n    \"name\": \"votes\",\n    \"type\": \"uint256\"\n  }, {\n    \"internalType\": \"uint256\",\n    \"name\": \"id\",\n    \"type\": \"uint256\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [{\n    \"internalType\": \"string\",\n    \"name\": \"name\",\n    \"type\": \"string\"\n  }, {\n    \"internalType\": \"address\",\n    \"name\": \"candidateAddress\",\n    \"type\": \"address\"\n  }, {\n    \"internalType\": \"string\",\n    \"name\": \"party\",\n    \"type\": \"string\"\n  }, {\n    \"internalType\": \"string\",\n    \"name\": \"description\",\n    \"type\": \"string\"\n  }],\n  \"name\": \"createCandidate\",\n  \"outputs\": [],\n  \"stateMutability\": \"nonpayable\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [],\n  \"name\": \"manager\",\n  \"outputs\": [{\n    \"internalType\": \"address\",\n    \"name\": \"\",\n    \"type\": \"address\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [],\n  \"name\": \"pickWinner\",\n  \"outputs\": [{\n    \"internalType\": \"uint256\",\n    \"name\": \"\",\n    \"type\": \"uint256\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [],\n  \"name\": \"returnNames\",\n  \"outputs\": [{\n    \"internalType\": \"address[]\",\n    \"name\": \"\",\n    \"type\": \"address[]\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [{\n    \"internalType\": \"uint256\",\n    \"name\": \"id\",\n    \"type\": \"uint256\"\n  }],\n  \"name\": \"vote\",\n  \"outputs\": [],\n  \"stateMutability\": \"nonpayable\",\n  \"type\": \"function\"\n}, {\n  \"inputs\": [{\n    \"internalType\": \"address\",\n    \"name\": \"\",\n    \"type\": \"address\"\n  }],\n  \"name\": \"voters\",\n  \"outputs\": [{\n    \"internalType\": \"bool\",\n    \"name\": \"\",\n    \"type\": \"bool\"\n  }],\n  \"stateMutability\": \"view\",\n  \"type\": \"function\"\n}];\nconst instance = new _web3__WEBPACK_IMPORTED_MODULE_0__[\"default\"].eth.Contract(abi, '0x1D46f731b1fA66d97315E319cfA2516DB38a9484');\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Wb3RpbmcuanM/ODdiMiJdLCJuYW1lcyI6WyJhYmkiLCJpbnN0YW5jZSIsIndlYjMiLCJldGgiLCJDb250cmFjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0EsTUFBTUEsR0FBRyxHQUFDLENBQUM7QUFBQyxZQUFTLEVBQVY7QUFBYSxxQkFBa0IsWUFBL0I7QUFBNEMsVUFBTztBQUFuRCxDQUFELEVBQW1FO0FBQUMsWUFBUyxFQUFWO0FBQWEsVUFBTyxnQkFBcEI7QUFBcUMsYUFBVSxDQUFDO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxFQUFqQztBQUFvQyxZQUFPO0FBQTNDLEdBQUQsQ0FBL0M7QUFBdUcscUJBQWtCLE1BQXpIO0FBQWdJLFVBQU87QUFBdkksQ0FBbkUsRUFBc047QUFBQyxZQUFTLENBQUM7QUFBQyxvQkFBZSxTQUFoQjtBQUEwQixZQUFPLEVBQWpDO0FBQW9DLFlBQU87QUFBM0MsR0FBRCxDQUFWO0FBQWtFLFVBQU8sWUFBekU7QUFBc0YsYUFBVSxDQUFDO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxrQkFBakM7QUFBb0QsWUFBTztBQUEzRCxHQUFELEVBQXVFO0FBQUMsb0JBQWUsUUFBaEI7QUFBeUIsWUFBTyxNQUFoQztBQUF1QyxZQUFPO0FBQTlDLEdBQXZFLEVBQStIO0FBQUMsb0JBQWUsUUFBaEI7QUFBeUIsWUFBTyxPQUFoQztBQUF3QyxZQUFPO0FBQS9DLEdBQS9ILEVBQXdMO0FBQUMsb0JBQWUsUUFBaEI7QUFBeUIsWUFBTyxhQUFoQztBQUE4QyxZQUFPO0FBQXJELEdBQXhMLEVBQXVQO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxPQUFqQztBQUF5QyxZQUFPO0FBQWhELEdBQXZQLEVBQWtUO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxJQUFqQztBQUFzQyxZQUFPO0FBQTdDLEdBQWxULENBQWhHO0FBQTJjLHFCQUFrQixNQUE3ZDtBQUFvZSxVQUFPO0FBQTNlLENBQXROLEVBQTZzQjtBQUFDLFlBQVMsQ0FBQztBQUFDLG9CQUFlLFFBQWhCO0FBQXlCLFlBQU8sTUFBaEM7QUFBdUMsWUFBTztBQUE5QyxHQUFELEVBQXlEO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxrQkFBakM7QUFBb0QsWUFBTztBQUEzRCxHQUF6RCxFQUErSDtBQUFDLG9CQUFlLFFBQWhCO0FBQXlCLFlBQU8sT0FBaEM7QUFBd0MsWUFBTztBQUEvQyxHQUEvSCxFQUF3TDtBQUFDLG9CQUFlLFFBQWhCO0FBQXlCLFlBQU8sYUFBaEM7QUFBOEMsWUFBTztBQUFyRCxHQUF4TCxDQUFWO0FBQWtRLFVBQU8saUJBQXpRO0FBQTJSLGFBQVUsRUFBclM7QUFBd1MscUJBQWtCLFlBQTFUO0FBQXVVLFVBQU87QUFBOVUsQ0FBN3NCLEVBQXVpQztBQUFDLFlBQVMsRUFBVjtBQUFhLFVBQU8sU0FBcEI7QUFBOEIsYUFBVSxDQUFDO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxFQUFqQztBQUFvQyxZQUFPO0FBQTNDLEdBQUQsQ0FBeEM7QUFBZ0cscUJBQWtCLE1BQWxIO0FBQXlILFVBQU87QUFBaEksQ0FBdmlDLEVBQW1yQztBQUFDLFlBQVMsRUFBVjtBQUFhLFVBQU8sWUFBcEI7QUFBaUMsYUFBVSxDQUFDO0FBQUMsb0JBQWUsU0FBaEI7QUFBMEIsWUFBTyxFQUFqQztBQUFvQyxZQUFPO0FBQTNDLEdBQUQsQ0FBM0M7QUFBbUcscUJBQWtCLE1BQXJIO0FBQTRILFVBQU87QUFBbkksQ0FBbnJDLEVBQWswQztBQUFDLFlBQVMsRUFBVjtBQUFhLFVBQU8sYUFBcEI7QUFBa0MsYUFBVSxDQUFDO0FBQUMsb0JBQWUsV0FBaEI7QUFBNEIsWUFBTyxFQUFuQztBQUFzQyxZQUFPO0FBQTdDLEdBQUQsQ0FBNUM7QUFBd0cscUJBQWtCLE1BQTFIO0FBQWlJLFVBQU87QUFBeEksQ0FBbDBDLEVBQXM5QztBQUFDLFlBQVMsQ0FBQztBQUFDLG9CQUFlLFNBQWhCO0FBQTBCLFlBQU8sSUFBakM7QUFBc0MsWUFBTztBQUE3QyxHQUFELENBQVY7QUFBb0UsVUFBTyxNQUEzRTtBQUFrRixhQUFVLEVBQTVGO0FBQStGLHFCQUFrQixZQUFqSDtBQUE4SCxVQUFPO0FBQXJJLENBQXQ5QyxFQUF1bUQ7QUFBQyxZQUFTLENBQUM7QUFBQyxvQkFBZSxTQUFoQjtBQUEwQixZQUFPLEVBQWpDO0FBQW9DLFlBQU87QUFBM0MsR0FBRCxDQUFWO0FBQWtFLFVBQU8sUUFBekU7QUFBa0YsYUFBVSxDQUFDO0FBQUMsb0JBQWUsTUFBaEI7QUFBdUIsWUFBTyxFQUE5QjtBQUFpQyxZQUFPO0FBQXhDLEdBQUQsQ0FBNUY7QUFBOEkscUJBQWtCLE1BQWhLO0FBQXVLLFVBQU87QUFBOUssQ0FBdm1ELENBQVY7QUFDQSxNQUFNQyxRQUFRLEdBQUUsSUFBSUMsNkNBQUksQ0FBQ0MsR0FBTCxDQUFTQyxRQUFiLENBQ1pKLEdBRFksRUFFWiw0Q0FGWSxDQUFoQjtBQUllQyx1RUFBZiIsImZpbGUiOiIuL1ZvdGluZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWIzIGZyb20gJy4vd2ViMyc7XG5jb25zdCBhYmk9W3tcImlucHV0c1wiOltdLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJjb25zdHJ1Y3RvclwifSx7XCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcIkNhbmRpZGF0ZUNvdW50XCIsXCJvdXRwdXRzXCI6W3tcImludGVybmFsVHlwZVwiOlwidWludDI1NlwiLFwibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiaW5wdXRzXCI6W3tcImludGVybmFsVHlwZVwiOlwidWludDI1NlwiLFwibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcImNhbmRpZGF0ZXNcIixcIm91dHB1dHNcIjpbe1wiaW50ZXJuYWxUeXBlXCI6XCJhZGRyZXNzXCIsXCJuYW1lXCI6XCJjYW5kaWRhdGVBZGRyZXNzXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImludGVybmFsVHlwZVwiOlwic3RyaW5nXCIsXCJuYW1lXCI6XCJuYW1lXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn0se1wiaW50ZXJuYWxUeXBlXCI6XCJzdHJpbmdcIixcIm5hbWVcIjpcInBhcnR5XCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn0se1wiaW50ZXJuYWxUeXBlXCI6XCJzdHJpbmdcIixcIm5hbWVcIjpcImRlc2NyaXB0aW9uXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn0se1wiaW50ZXJuYWxUeXBlXCI6XCJ1aW50MjU2XCIsXCJuYW1lXCI6XCJ2b3Rlc1wiLFwidHlwZVwiOlwidWludDI1NlwifSx7XCJpbnRlcm5hbFR5cGVcIjpcInVpbnQyNTZcIixcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcInN0YXRlTXV0YWJpbGl0eVwiOlwidmlld1wiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiaW5wdXRzXCI6W3tcImludGVybmFsVHlwZVwiOlwic3RyaW5nXCIsXCJuYW1lXCI6XCJuYW1lXCIsXCJ0eXBlXCI6XCJzdHJpbmdcIn0se1wiaW50ZXJuYWxUeXBlXCI6XCJhZGRyZXNzXCIsXCJuYW1lXCI6XCJjYW5kaWRhdGVBZGRyZXNzXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9LHtcImludGVybmFsVHlwZVwiOlwic3RyaW5nXCIsXCJuYW1lXCI6XCJwYXJ0eVwiLFwidHlwZVwiOlwic3RyaW5nXCJ9LHtcImludGVybmFsVHlwZVwiOlwic3RyaW5nXCIsXCJuYW1lXCI6XCJkZXNjcmlwdGlvblwiLFwidHlwZVwiOlwic3RyaW5nXCJ9XSxcIm5hbWVcIjpcImNyZWF0ZUNhbmRpZGF0ZVwiLFwib3V0cHV0c1wiOltdLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJub25wYXlhYmxlXCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcIm1hbmFnZXJcIixcIm91dHB1dHNcIjpbe1wiaW50ZXJuYWxUeXBlXCI6XCJhZGRyZXNzXCIsXCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImFkZHJlc3NcIn1dLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcInBpY2tXaW5uZXJcIixcIm91dHB1dHNcIjpbe1wiaW50ZXJuYWxUeXBlXCI6XCJ1aW50MjU2XCIsXCJuYW1lXCI6XCJcIixcInR5cGVcIjpcInVpbnQyNTZcIn1dLFwic3RhdGVNdXRhYmlsaXR5XCI6XCJ2aWV3XCIsXCJ0eXBlXCI6XCJmdW5jdGlvblwifSx7XCJpbnB1dHNcIjpbXSxcIm5hbWVcIjpcInJldHVybk5hbWVzXCIsXCJvdXRwdXRzXCI6W3tcImludGVybmFsVHlwZVwiOlwiYWRkcmVzc1tdXCIsXCJuYW1lXCI6XCJcIixcInR5cGVcIjpcImFkZHJlc3NbXVwifV0sXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9LHtcImlucHV0c1wiOlt7XCJpbnRlcm5hbFR5cGVcIjpcInVpbnQyNTZcIixcIm5hbWVcIjpcImlkXCIsXCJ0eXBlXCI6XCJ1aW50MjU2XCJ9XSxcIm5hbWVcIjpcInZvdGVcIixcIm91dHB1dHNcIjpbXSxcInN0YXRlTXV0YWJpbGl0eVwiOlwibm9ucGF5YWJsZVwiLFwidHlwZVwiOlwiZnVuY3Rpb25cIn0se1wiaW5wdXRzXCI6W3tcImludGVybmFsVHlwZVwiOlwiYWRkcmVzc1wiLFwibmFtZVwiOlwiXCIsXCJ0eXBlXCI6XCJhZGRyZXNzXCJ9XSxcIm5hbWVcIjpcInZvdGVyc1wiLFwib3V0cHV0c1wiOlt7XCJpbnRlcm5hbFR5cGVcIjpcImJvb2xcIixcIm5hbWVcIjpcIlwiLFwidHlwZVwiOlwiYm9vbFwifV0sXCJzdGF0ZU11dGFiaWxpdHlcIjpcInZpZXdcIixcInR5cGVcIjpcImZ1bmN0aW9uXCJ9XTtcbmNvbnN0IGluc3RhbmNlPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgYWJpLFxuICAgICcweDFENDZmNzMxYjFmQTY2ZDk3MzE1RTMxOWNmQTI1MTZEQjM4YTk0ODQnXG4pO1xuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Voting.js\n");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n    style: {\n      marginTop: '10px'\n    }\n  }, __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css\"\n  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n    href: \"/\"\n  }, \"VotingDApp\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Menu, {\n    position: \"right\"\n  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n    href: \"/\"\n  }, \"Candidates\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n    href: \"/candidates/new\"\n  }, \"+\")));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVlLHFFQUFJO0FBQ2YsU0FDSSxNQUFDLHNEQUFEO0FBQU0sU0FBSyxFQUFFO0FBQUNBLGVBQVMsRUFBQztBQUFYO0FBQWIsS0FDSTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQztBQUE1QixJQURKLEVBRUksTUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxRQUFJLEVBQUM7QUFBaEIsa0JBRkosRUFLSSxNQUFDLHNEQUFELENBQU0sSUFBTjtBQUFXLFlBQVEsRUFBQztBQUFwQixLQUNJLE1BQUMsc0RBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBSSxFQUFDO0FBQWhCLGtCQURKLEVBSUksTUFBQyxzREFBRCxDQUFNLElBQU47QUFBVyxRQUFJLEVBQUM7QUFBaEIsU0FKSixDQUxKLENBREo7QUFnQkgsQ0FqQkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge01lbnV9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCk9PntcbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVudSBzdHlsZT17e21hcmdpblRvcDonMTBweCd9fT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIFZvdGluZ0RBcHBcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICBDYW5kaWRhdGVzXG4gICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBocmVmPVwiL2NhbmRpZGF0ZXMvbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDwvTWVudS5NZW51PlxuICAgICAgICA8L01lbnU+XG4gICAgKTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/dheeru12/projects/voting/components/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }), props.children);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2dCQSxvRUFBRCxJQUFTO0FBQ3BCLFNBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFS0EsS0FBSyxDQUFDQyxRQUZYLENBREo7QUFNSCxDQVBEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAocHJvcHMpPT57XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/candidates/show.js":
/*!**********************************!*\
  !*** ./pages/candidates/show.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Voting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Voting */ \"./Voting.js\");\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../web3 */ \"./web3.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass candidateShow extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      errorMessage: \"\",\n      disabled: false,\n      loading: false,\n      successMessage: ''\n    });\n\n    _defineProperty(this, \"onClick\", async event => {\n      event.preventDefault();\n      this.setState({\n        loading: true\n      });\n\n      try {\n        const accounts = await _web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n        await _Voting__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.vote(this.props.id).send({\n          from: accounts[0],\n          gas: '1000000'\n        });\n        this.setState({\n          loading: false,\n          disabled: true,\n          successMessage: 'you have successfully voted'\n        });\n        _routes__WEBPACK_IMPORTED_MODULE_5__[\"Router\"].pushRoute(`/candidates/${this.props.id}`);\n      } catch (err) {\n        this.setState({\n          errorMessage: err.message\n        });\n      }\n\n      this.setState({\n        loading: false,\n        successMessage: \"\"\n      });\n    });\n  }\n\n  static async getInitialProps(props) {\n    const candidate = await _Voting__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.candidates(props.query.id).call();\n    return {\n      candidate,\n      id: parseInt(props.query.id)\n    };\n  }\n\n  async componentDidMount() {\n    this.setState({\n      loading: false,\n      disabled: false,\n      successMessage: \"\"\n    });\n    const accounts = await _web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n    console.log(accounts[0]);\n    const bool = await _Voting__WEBPACK_IMPORTED_MODULE_1__[\"default\"].methods.voters(accounts[0]).call();\n    console.log(bool);\n\n    if (bool === true) {\n      this.setState({\n        disabled: true,\n        successMessage: \"you have voted already\"\n      });\n    }\n  }\n\n  renderMessage() {\n    if (this.state.errorMessage) {\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Message\"], {\n        content: this.state.errorMessage,\n        error: true\n      });\n    }\n\n    if (this.state.successMessage) {\n      return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Message\"], {\n        content: this.state.successMessage,\n        success: true\n      });\n    }\n  }\n\n  render() {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, __jsx(\"div\", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n      as: \"h3\",\n      attached: \"top\"\n    }, this.props.candidate.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Segment\"], {\n      attached: true,\n      inverted: true\n    }, __jsx(\"div\", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n      as: \"h4\",\n      color: \"red\"\n    }, \"current Votes:\"), this.props.candidate.votes), __jsx(\"div\", {\n      style: {\n        marginTop: \"5px\"\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n      as: \"h4\",\n      color: \"red\"\n    }, \"party:\"), this.props.candidate.party), __jsx(\"div\", {\n      style: {\n        marginTop: \"5px\"\n      }\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], {\n      as: \"h4\",\n      color: \"red\"\n    }, \"description:\"), this.props.candidate.description), __jsx(\"div\", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n      style: {\n        marginLeft: \"500px\"\n      },\n      color: \"green\",\n      onClick: this.onClick,\n      disabled: this.state.disabled,\n      loading: this.state.loading\n    }, \"Vote\"))), this.renderMessage()));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (candidateShow);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYW5kaWRhdGVzL3Nob3cuanM/ZDdjNCJdLCJuYW1lcyI6WyJjYW5kaWRhdGVTaG93IiwiQ29tcG9uZW50IiwiZXJyb3JNZXNzYWdlIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwic3VjY2Vzc01lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJhY2NvdW50cyIsIndlYjMiLCJldGgiLCJnZXRBY2NvdW50cyIsInZvdGluZyIsIm1ldGhvZHMiLCJ2b3RlIiwicHJvcHMiLCJpZCIsInNlbmQiLCJmcm9tIiwiZ2FzIiwiUm91dGVyIiwicHVzaFJvdXRlIiwiZXJyIiwibWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsImNhbmRpZGF0ZSIsImNhbmRpZGF0ZXMiLCJxdWVyeSIsImNhbGwiLCJwYXJzZUludCIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImJvb2wiLCJ2b3RlcnMiLCJyZW5kZXJNZXNzYWdlIiwic3RhdGUiLCJyZW5kZXIiLCJuYW1lIiwidm90ZXMiLCJtYXJnaW5Ub3AiLCJwYXJ0eSIsImRlc2NyaXB0aW9uIiwibWFyZ2luTGVmdCIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGFBQU4sU0FBNEJDLCtDQUE1QixDQUFxQztBQUFBO0FBQUE7O0FBQUEsbUNBQzNCO0FBQ0ZDLGtCQUFZLEVBQUMsRUFEWDtBQUVGQyxjQUFRLEVBQUMsS0FGUDtBQUdGQyxhQUFPLEVBQUMsS0FITjtBQUlGQyxvQkFBYyxFQUFDO0FBSmIsS0FEMkI7O0FBQUEscUNBcUJ6QixNQUFNQyxLQUFOLElBQWM7QUFDbEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYztBQUFDSixlQUFPLEVBQUM7QUFBVCxPQUFkOztBQUNBLFVBQUc7QUFDQyxjQUFNSyxRQUFRLEdBQUMsTUFB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QUM7QUFBdEIsd0JBREosRUFFSyxLQUFLdkIsS0FBTCxDQUFXVSxTQUFYLENBQXFCYyxLQUYxQixDQURKLEVBS0k7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBQztBQUFYO0FBQVosT0FDSSxNQUFDLHdEQUFEO0FBQVEsUUFBRSxFQUFDLElBQVg7QUFBZ0IsV0FBSyxFQUFDO0FBQXRCLGdCQURKLEVBRUssS0FBS3pCLEtBQUwsQ0FBV1UsU0FBWCxDQUFxQmdCLEtBRjFCLENBTEosRUFTSTtBQUFLLFdBQUssRUFBRTtBQUFDRCxpQkFBUyxFQUFDO0FBQVg7QUFBWixPQUNJLE1BQUMsd0RBQUQ7QUFBUSxRQUFFLEVBQUMsSUFBWDtBQUFnQixXQUFLLEVBQUM7QUFBdEIsc0JBREosRUFFSyxLQUFLekIsS0FBTCxDQUFXVSxTQUFYLENBQXFCaUIsV0FGMUIsQ0FUSixFQWFJLG1CQUNBLE1BQUMsd0RBQUQ7QUFBUSxXQUFLLEVBQUU7QUFBQ0Msa0JBQVUsRUFBQztBQUFaLE9BQWY7QUFBcUMsV0FBSyxFQUFDLE9BQTNDO0FBQW1ELGFBQU8sRUFBRSxLQUFLQyxPQUFqRTtBQUEwRSxjQUFRLEVBQUUsS0FBS1IsS0FBTCxDQUFXbEMsUUFBL0Y7QUFBeUcsYUFBTyxFQUFFLEtBQUtrQyxLQUFMLENBQVdqQztBQUE3SCxjQURBLENBYkosQ0FGSixFQXFCSyxLQUFLZ0MsYUFBTCxFQXJCTCxDQURKLENBREo7QUEyQkg7O0FBM0VnQzs7QUE4RXRCcEMsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jYW5kaWRhdGVzL3Nob3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHZvdGluZyBmcm9tICcuLi8uLi9Wb3RpbmcnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vd2ViMyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7SGVhZGVyLFNlZ21lbnQsIEJ1dHRvbiwgTWVzc2FnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5jbGFzcyBjYW5kaWRhdGVTaG93IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0YXRlPXtcbiAgICAgICAgZXJyb3JNZXNzYWdlOlwiXCIsXG4gICAgICAgIGRpc2FibGVkOmZhbHNlLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICBzdWNjZXNzTWVzc2FnZTonJyxcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZT1hd2FpdCB2b3RpbmcubWV0aG9kcy5jYW5kaWRhdGVzKHByb3BzLnF1ZXJ5LmlkKS5jYWxsKCk7XG4gICAgICAgIHJldHVybiB7Y2FuZGlkYXRlLGlkOnBhcnNlSW50KHByb3BzLnF1ZXJ5LmlkKX07XG4gICAgfVxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsZGlzYWJsZWQ6ZmFsc2Usc3VjY2Vzc01lc3NhZ2U6XCJcIn0pO1xuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50c1swXSk7XG4gICAgICAgIGNvbnN0IGJvb2w9YXdhaXQgdm90aW5nLm1ldGhvZHMudm90ZXJzKGFjY291bnRzWzBdKS5jYWxsKClcbiAgICAgICAgY29uc29sZS5sb2coYm9vbClcbiAgICAgICAgaWYoYm9vbD09PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzYWJsZWQ6dHJ1ZSxzdWNjZXNzTWVzc2FnZTpcInlvdSBoYXZlIHZvdGVkIGFscmVhZHlcIn0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2s9YXN5bmMoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgYXdhaXQgdm90aW5nLm1ldGhvZHMudm90ZSh0aGlzLnByb3BzLmlkKS5zZW5kKHtmcm9tOmFjY291bnRzWzBdLGdhczonMTAwMDAwMCd9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsZGlzYWJsZWQ6dHJ1ZSxzdWNjZXNzTWVzc2FnZToneW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHZvdGVkJ30pO1xuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbmRpZGF0ZXMvJHt0aGlzLnByb3BzLmlkfWApXG4gICAgICAgIH1jYXRjaChlcnIpe1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JNZXNzYWdlOmVyci5tZXNzYWdlfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLHN1Y2Nlc3NNZXNzYWdlOlwiXCJ9KTtcbiAgICB9O1xuICAgIHJlbmRlck1lc3NhZ2UoKXtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2Upe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gZXJyb3I+PC9NZXNzYWdlPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnN0YXRlLnN1Y2Nlc3NNZXNzYWdlKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgY29udGVudD17dGhpcy5zdGF0ZS5zdWNjZXNzTWVzc2FnZX0gc3VjY2Vzcz48L01lc3NhZ2U+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImgzXCIgYXR0YWNoZWQ9XCJ0b3BcIj57dGhpcy5wcm9wcy5jYW5kaWRhdGUubmFtZX08L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYXR0YWNoZWQgaW52ZXJ0ZWQgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb2xvcj1cInJlZFwiPmN1cnJlbnQgVm90ZXM6PC9IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2FuZGlkYXRlLnZvdGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOlwiNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb2xvcj1cInJlZFwiPnBhcnR5OjwvSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhbmRpZGF0ZS5wYXJ0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDpcIjVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29sb3I9XCJyZWRcIj5kZXNjcmlwdGlvbjo8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYW5kaWRhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjUwMHB4XCJ9fSBjb2xvcj1cImdyZWVuXCIgb25DbGljaz17dGhpcy5vbkNsaWNrfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb3RlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FuZGlkYXRlU2hvdzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/candidates/show.js\n");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const routes = __webpack_require__(/*! next-routes */ \"next-routes\")();\n\nroutes.add(\"/candidates/new\", \"/candidates/new\").add(\"/candidates/:id\", \"/candidates/show\");\nmodule.exports = routes;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanM/ZjFjMSJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGdDQUFELENBQVAsRUFBZjs7QUFFQUQsTUFBTSxDQUNERSxHQURMLENBQ1MsaUJBRFQsRUFDMkIsaUJBRDNCLEVBRUtBLEdBRkwsQ0FFUyxpQkFGVCxFQUUyQixrQkFGM0I7QUFHQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWVKLE1BQWYiLCJmaWxlIjoiLi9yb3V0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIikoKTtcblxucm91dGVzXG4gICAgLmFkZChcIi9jYW5kaWRhdGVzL25ld1wiLFwiL2NhbmRpZGF0ZXMvbmV3XCIpXG4gICAgLmFkZChcIi9jYW5kaWRhdGVzLzppZFwiLFwiL2NhbmRpZGF0ZXMvc2hvd1wiKTtcbm1vZHVsZS5leHBvcnRzPXJvdXRlcyAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./routes.js\n");

/***/ }),

/***/ "./web3.js":
/*!*****************!*\
  !*** ./web3.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"web3\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nlet web3;\n\nif (false) {} else {\n  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7');\n  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWIzLmpzPzg5ZDciXSwibmFtZXMiOlsid2ViMyIsInByb3ZpZGVyIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFJQSxJQUFKOztBQUNBLElBQUcsS0FBSCxFQUF1RSxFQUF2RSxNQUVLO0FBQ0QsUUFBTUMsUUFBUSxHQUFDLElBQUlDLDJDQUFJLENBQUNDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FDWCwrREFEVyxDQUFmO0FBR0FKLE1BQUksR0FBQyxJQUFJRSwyQ0FBSixDQUFTRCxRQUFULENBQUw7QUFDSDs7QUFFY0QsbUVBQWYiLCJmaWxlIjoiLi93ZWIzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5sZXQgd2ViMztcbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHdlYjM9bmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbn1lbHNle1xuICAgIGNvbnN0IHByb3ZpZGVyPW5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL3YzLzJhZTMyNGZjYjBkOTQ0ODZiNmIwMjJmNTU5NDc1ZGM3J1xuICAgICk7XG4gICAgd2ViMz1uZXcgV2ViMyhwcm92aWRlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./web3.js\n");

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/candidates/show.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dheeru12/projects/voting/pages/candidates/show.js */"./pages/candidates/show.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-routes\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJvdXRlc1wiPzBkNGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-routes\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"web3\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3ZWIzXCI/NjFiNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///web3\n");

/***/ })

/******/ });