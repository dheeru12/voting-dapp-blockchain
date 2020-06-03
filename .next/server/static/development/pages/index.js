module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../web3 */ \"./web3.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Voting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Voting */ \"./Voting.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nclass votingComponent extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      disabled: false,\n      successMessage: \"\"\n    });\n\n    _defineProperty(this, \"pickWinner\", async event => {\n      event.preventDefault();\n      const accounts = await _web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts();\n      const index = await _Voting__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.pickWinner().call({\n        from: accounts[0]\n      });\n      this.setState({\n        successMessage: \"The winner of the current voting results is: Candidate no-\" + index + \"  ,Please redploy the contract to create a new voting session\",\n        disabled: true\n      });\n    });\n  }\n\n  static async getInitialProps() {\n    const candidates = await _Voting__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.returnNames().call();\n    const manager = await _Voting__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.manager().call();\n    return {\n      candidates: candidates,\n      manager: manager\n    };\n  }\n\n  async componentDidMount() {\n    const accounts = await _web3__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eth.getAccounts();\n\n    if (accounts[0] != this.props.manager) {\n      this.setState({\n        disabled: true\n      });\n    }\n  }\n\n  renderCandidates() {\n    let candidatecount = 0;\n    const items = this.props.candidates.map(address => {\n      return {\n        header: address,\n        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n          route: `candidates/${candidatecount}`,\n          disabled: true\n        }, __jsx(\"a\", null, \"view Candidate\")),\n        meta: \"candidate no:\" + candidatecount++,\n        fluid: true\n      };\n    });\n    return items;\n  }\n\n  render() {\n    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, __jsx(\"h4\", null, \"Candidates participating\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      floated: \"right\",\n      content: \"create candidate\",\n      icon: \"add circle\",\n      disabled: this.state.disabled,\n      primary: true,\n      href: \"/candidates/new\"\n    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      animated: true,\n      disabled: this.state.disabled,\n      floated: \"right\",\n      positive: true,\n      onClick: this.pickWinner\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"].Content, {\n      visible: true\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      name: \"hand point right\"\n    }), \"pick Winner!!\"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"].Content, {\n      hidden: true\n    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Icon\"], {\n      name: \"arrow right\"\n    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Group, {\n      items: this.renderCandidates()\n    }), __jsx(\"h4\", {\n      style: {\n        color: \"green\"\n      }\n    }, this.state.successMessage));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (votingComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInZvdGluZ0NvbXBvbmVudCIsIkNvbXBvbmVudCIsImRpc2FibGVkIiwic3VjY2Vzc01lc3NhZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudHMiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJpbmRleCIsInZvdGluZyIsIm1ldGhvZHMiLCJwaWNrV2lubmVyIiwiY2FsbCIsImZyb20iLCJzZXRTdGF0ZSIsImdldEluaXRpYWxQcm9wcyIsImNhbmRpZGF0ZXMiLCJyZXR1cm5OYW1lcyIsIm1hbmFnZXIiLCJjb21wb25lbnREaWRNb3VudCIsInByb3BzIiwicmVuZGVyQ2FuZGlkYXRlcyIsImNhbmRpZGF0ZWNvdW50IiwiaXRlbXMiLCJtYXAiLCJhZGRyZXNzIiwiaGVhZGVyIiwiZGVzY3JpcHRpb24iLCJtZXRhIiwiZmx1aWQiLCJyZW5kZXIiLCJzdGF0ZSIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxlQUFOLFNBQThCQywrQ0FBOUIsQ0FBdUM7QUFBQTtBQUFBOztBQUFBLG1DQUM3QjtBQUNGQyxjQUFRLEVBQUMsS0FEUDtBQUVGQyxvQkFBYyxFQUFDO0FBRmIsS0FENkI7O0FBQUEsd0NBZ0J2QixNQUFPQyxLQUFQLElBQWU7QUFDdkJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFlBQU1DLFFBQVEsR0FBQyxNQUFNQyw2Q0FBSSxDQUFDQyxHQUFMLENBQVNDLFdBQVQsRUFBckI7QUFDQSxZQUFNQyxLQUFLLEdBQUMsTUFBTUMsK0NBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxVQUFmLEdBQTRCQyxJQUE1QixDQUFpQztBQUFDQyxZQUFJLEVBQUNULFFBQVEsQ0FBQyxDQUFEO0FBQWQsT0FBakMsQ0FBbEI7QUFDQSxXQUFLVSxRQUFMLENBQWM7QUFBQ2Isc0JBQWMsRUFBQywrREFBNkRPLEtBQTdELEdBQW1FLCtEQUFuRjtBQUFtSlIsZ0JBQVEsRUFBQztBQUE1SixPQUFkO0FBRUgsS0F0QmtDO0FBQUE7O0FBS25DLGVBQWFlLGVBQWIsR0FBOEI7QUFDMUIsVUFBTUMsVUFBVSxHQUFDLE1BQU1QLCtDQUFNLENBQUNDLE9BQVAsQ0FBZU8sV0FBZixHQUE2QkwsSUFBN0IsRUFBdkI7QUFDQSxVQUFNTSxPQUFPLEdBQUMsTUFBTVQsK0NBQU0sQ0FBQ0MsT0FBUCxDQUFlUSxPQUFmLEdBQXlCTixJQUF6QixFQUFwQjtBQUNBLFdBQU87QUFBQ0ksZ0JBQVUsRUFBQ0EsVUFBWjtBQUF1QkUsYUFBTyxFQUFDQTtBQUEvQixLQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsaUJBQU4sR0FBeUI7QUFDckIsVUFBTWYsUUFBUSxHQUFDLE1BQU1DLDZDQUFJLENBQUNDLEdBQUwsQ0FBU0MsV0FBVCxFQUFyQjs7QUFDQSxRQUFJSCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWEsS0FBS2dCLEtBQUwsQ0FBV0YsT0FBNUIsRUFBb0M7QUFDaEMsV0FBS0osUUFBTCxDQUFjO0FBQUNkLGdCQUFRLEVBQUM7QUFBVixPQUFkO0FBQ0g7QUFDSjs7QUFRRHFCLGtCQUFnQixHQUFFO0FBQ2QsUUFBSUMsY0FBYyxHQUFDLENBQW5CO0FBQ0EsVUFBTUMsS0FBSyxHQUFDLEtBQUtILEtBQUwsQ0FBV0osVUFBWCxDQUFzQlEsR0FBdEIsQ0FBMEJDLE9BQU8sSUFBRTtBQUMzQyxhQUFPO0FBQ0hDLGNBQU0sRUFBRUQsT0FETDtBQUVIRSxtQkFBVyxFQUNQLE1BQUMsNENBQUQ7QUFBTSxlQUFLLEVBQUcsY0FBYUwsY0FBZSxFQUExQztBQUE2QyxrQkFBUTtBQUFyRCxXQUNJLGtDQURKLENBSEQ7QUFPSE0sWUFBSSxFQUFDLGtCQUFpQk4sY0FBYyxFQVBqQztBQVFITyxhQUFLLEVBQUM7QUFSSCxPQUFQO0FBVUgsS0FYVyxDQUFaO0FBYUEsV0FBT04sS0FBUDtBQUNIOztBQUNETyxRQUFNLEdBQUU7QUFDSixXQUNJLE1BQUMsMERBQUQsUUFDSSw2Q0FESixFQUVJLE1BQUMsd0RBQUQ7QUFBUSxhQUFPLEVBQUMsT0FBaEI7QUFBd0IsYUFBTyxFQUFDLGtCQUFoQztBQUFtRCxVQUFJLEVBQUMsWUFBeEQ7QUFBcUUsY0FBUSxFQUFFLEtBQUtDLEtBQUwsQ0FBVy9CLFFBQTFGO0FBQW9HLGFBQU8sTUFBM0c7QUFBNEcsVUFBSSxFQUFDO0FBQWpILE1BRkosRUFHSSxNQUFDLHdEQUFEO0FBQVEsY0FBUSxNQUFoQjtBQUFpQixjQUFRLEVBQUUsS0FBSytCLEtBQUwsQ0FBVy9CLFFBQXRDO0FBQWdELGFBQU8sRUFBQyxPQUF4RDtBQUFnRSxjQUFRLE1BQXhFO0FBQXlFLGFBQU8sRUFBRSxLQUFLVztBQUF2RixPQUNJLE1BQUMsd0RBQUQsQ0FBUSxPQUFSO0FBQWdCLGFBQU87QUFBdkIsT0FDSSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFESixrQkFESixFQUtJLE1BQUMsd0RBQUQsQ0FBUSxPQUFSO0FBQWdCLFlBQU07QUFBdEIsT0FDSSxNQUFDLHNEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsTUFESixDQUxKLENBSEosRUFZSSxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLFdBQUssRUFBRSxLQUFLVSxnQkFBTDtBQUFuQixNQVpKLEVBYUk7QUFBSSxXQUFLLEVBQUU7QUFBQ1csYUFBSyxFQUFDO0FBQVA7QUFBWCxPQUNLLEtBQUtELEtBQUwsQ0FBVzlCLGNBRGhCLENBYkosQ0FESjtBQW1CSDs7QUE1RGtDOztBQStEeEJILDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vd2ViMyc7XG5pbXBvcnQge0NhcmQsIEJ1dHRvbiAsIEljb259IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCB2b3RpbmcgZnJvbSAnLi4vVm90aW5nJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcyc7XG5jbGFzcyB2b3RpbmdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XG4gICAgc3RhdGU9e1xuICAgICAgICBkaXNhYmxlZDpmYWxzZSxcbiAgICAgICAgc3VjY2Vzc01lc3NhZ2U6XCJcIlxuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXM9YXdhaXQgdm90aW5nLm1ldGhvZHMucmV0dXJuTmFtZXMoKS5jYWxsKCk7XG4gICAgICAgIGNvbnN0IG1hbmFnZXI9YXdhaXQgdm90aW5nLm1ldGhvZHMubWFuYWdlcigpLmNhbGwoKTtcbiAgICAgICAgcmV0dXJuIHtjYW5kaWRhdGVzOmNhbmRpZGF0ZXMsbWFuYWdlcjptYW5hZ2VyfVxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBpZiAoYWNjb3VudHNbMF0hPXRoaXMucHJvcHMubWFuYWdlcil7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNhYmxlZDp0cnVlfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGlja1dpbm5lcj0gYXN5bmMgKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBhY2NvdW50cz1hd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICBjb25zdCBpbmRleD1hd2FpdCB2b3RpbmcubWV0aG9kcy5waWNrV2lubmVyKCkuY2FsbCh7ZnJvbTphY2NvdW50c1swXX0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdWNjZXNzTWVzc2FnZTpcIlRoZSB3aW5uZXIgb2YgdGhlIGN1cnJlbnQgdm90aW5nIHJlc3VsdHMgaXM6IENhbmRpZGF0ZSBuby1cIitpbmRleCtcIiAgLFBsZWFzZSByZWRwbG95IHRoZSBjb250cmFjdCB0byBjcmVhdGUgYSBuZXcgdm90aW5nIHNlc3Npb25cIixkaXNhYmxlZDp0cnVlfSk7XG5cbiAgICB9XG4gICAgcmVuZGVyQ2FuZGlkYXRlcygpe1xuICAgICAgICBsZXQgY2FuZGlkYXRlY291bnQ9MFxuICAgICAgICBjb25zdCBpdGVtcz10aGlzLnByb3BzLmNhbmRpZGF0ZXMubWFwKGFkZHJlc3M9PntcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOihcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2BjYW5kaWRhdGVzLyR7Y2FuZGlkYXRlY291bnR9YH0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT52aWV3IENhbmRpZGF0ZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbWV0YTpcImNhbmRpZGF0ZSBubzpcIisoY2FuZGlkYXRlY291bnQrKyksXG4gICAgICAgICAgICAgICAgZmx1aWQ6dHJ1ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGg0PkNhbmRpZGF0ZXMgcGFydGljaXBhdGluZzwvaDQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmbG9hdGVkPVwicmlnaHRcIiBjb250ZW50PVwiY3JlYXRlIGNhbmRpZGF0ZVwiIGljb249XCJhZGQgY2lyY2xlXCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9IHByaW1hcnkgaHJlZj0nL2NhbmRpZGF0ZXMvbmV3Jz48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGFuaW1hdGVkIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfSBmbG9hdGVkPVwicmlnaHRcIiBwb3NpdGl2ZSBvbkNsaWNrPXt0aGlzLnBpY2tXaW5uZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkNvbnRlbnQgdmlzaWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2hhbmQgcG9pbnQgcmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBwaWNrIFdpbm5lciEhXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24uQ29udGVudCBoaWRkZW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPSdhcnJvdyByaWdodCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17dGhpcy5yZW5kZXJDYW5kaWRhdGVzKCl9IC8+XG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7Y29sb3I6XCJncmVlblwifX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Y2Nlc3NNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZvdGluZ0NvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dheeru12/projects/voting/pages/index.js */"./pages/index.js");


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