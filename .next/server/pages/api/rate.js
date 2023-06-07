"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/rate";
exports.ids = ["pages/api/rate"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./models/option.js":
/*!**************************!*\
  !*** ./models/option.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst optionSchema = new mongoose.Schema({\n    rate: {\n        type: Number\n    }\n}, {\n    collection: \"options\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.models.Option || mongoose.model(\"Option\", optionSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvb3B0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxLQUFLLENBQUNBLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBVTtBQUVuQyxLQUFLLENBQUNDLFlBQVksR0FBRyxHQUFHLENBQUNGLFFBQVEsQ0FBQ0csTUFBTSxDQUN0QyxDQUFDO0lBQ0NDLElBQUksRUFBRSxDQUFDO1FBQUNDLElBQUksRUFBRUMsTUFBTTtJQUFDLENBQUM7QUFDeEIsQ0FBQyxFQUNELENBQUM7SUFBQ0MsVUFBVSxFQUFFLENBQVM7QUFBQyxDQUFDO0FBRTNCLGlFQUFlUCxRQUFRLENBQUNRLE1BQU0sQ0FBQ0MsTUFBTSxJQUFJVCxRQUFRLENBQUNVLEtBQUssQ0FBQyxDQUFRLFNBQUVSLFlBQVksQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyZmVjdG9vby8uL21vZGVscy9vcHRpb24uanM/NGRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcclxuXHJcbmNvbnN0IG9wdGlvblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgcmF0ZTogeyB0eXBlOiBOdW1iZXIgfVxyXG4gIH0sXHJcbiAgeyBjb2xsZWN0aW9uOiBcIm9wdGlvbnNcIiB9XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5PcHRpb24gfHwgbW9uZ29vc2UubW9kZWwoXCJPcHRpb25cIiwgb3B0aW9uU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIm9wdGlvblNjaGVtYSIsIlNjaGVtYSIsInJhdGUiLCJ0eXBlIiwiTnVtYmVyIiwiY29sbGVjdGlvbiIsIm1vZGVscyIsIk9wdGlvbiIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./models/option.js\n");

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userSchema = new mongoose.Schema({\n    name: {\n        type: String\n    },\n    number: {\n        type: String,\n        unique: true\n    },\n    otp: {\n        type: String\n    },\n    otptimes: {\n        type: Number\n    },\n    jwt: {\n        type: String\n    }\n}, {\n    collection: \"users\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.models.User || mongoose.model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2RlbHMvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsS0FBSyxDQUFDQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQVU7QUFFbkMsS0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDRixRQUFRLENBQUNHLE1BQU0sQ0FDcEMsQ0FBQztJQUNDQyxJQUFJLEVBQUUsQ0FBQztRQUFDQyxJQUFJLEVBQUVDLE1BQU07SUFBQyxDQUFDO0lBQ3RCQyxNQUFNLEVBQUUsQ0FBQztRQUFDRixJQUFJLEVBQUVDLE1BQU07UUFBRUUsTUFBTSxFQUFFLElBQUk7SUFBQyxDQUFDO0lBQ3RDQyxHQUFHLEVBQUUsQ0FBQztRQUFDSixJQUFJLEVBQUVDLE1BQU07SUFBQyxDQUFDO0lBQ3JCSSxRQUFRLEVBQUUsQ0FBQztRQUFDTCxJQUFJLEVBQUVNLE1BQU07SUFBQyxDQUFDO0lBQzFCQyxHQUFHLEVBQUUsQ0FBQztRQUFDUCxJQUFJLEVBQUVDLE1BQU07SUFBQyxDQUFDO0FBQ3ZCLENBQUMsRUFDRCxDQUFDO0lBQUNPLFVBQVUsRUFBRSxDQUFPO0FBQUMsQ0FBQztBQUV6QixpRUFBZWIsUUFBUSxDQUFDYyxNQUFNLENBQUNDLElBQUksSUFBSWYsUUFBUSxDQUFDZ0IsS0FBSyxDQUFDLENBQU0sT0FBRWQsVUFBVSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJmZWN0b29vLy4vbW9kZWxzL3VzZXIuanM/NjU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG51bWJlcjogeyB0eXBlOiBTdHJpbmcsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIG90cDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBvdHB0aW1lczogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBqd3Q6IHsgdHlwZTogU3RyaW5nIH1cbiAgfSxcbiAgeyBjb2xsZWN0aW9uOiBcInVzZXJzXCIgfVxuKTtcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCB1c2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJudW1iZXIiLCJ1bmlxdWUiLCJvdHAiLCJvdHB0aW1lcyIsIk51bWJlciIsImp3dCIsImNvbGxlY3Rpb24iLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./models/user.js\n");

/***/ }),

/***/ "./pages/api/rate.js":
/*!***************************!*\
  !*** ./pages/api/rate.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_js_dbConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/public/js/dbConnection */ \"./public/js/dbConnection.js\");\n/* harmony import */ var _models_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/option */ \"./models/option.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/user */ \"./models/user.js\");\n\n\n\n\n(0,_public_js_dbConnection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method , cookies  } = req;\n    const token = cookies.jwt;\n    if (method === \"GET\") {\n        const options = await _models_option__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n        });\n        return res.status(200).end(JSON.stringify(options[0].rate));\n    } else if (method === \"PUT\") {\n        if (!token) return res.status(200).end(\"noToken\");\n        jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().verify(token, process.env.TOKEN_SECRET, async (err, decoded)=>{\n            if (err) return res.status(200).end(\"invalid\");\n            const user = await _models_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(decoded.id).exec();\n            if (user) {\n                await _models_option__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n                }, {\n                    rate: req.body.rate\n                });\n                return res.status(200).end(\"done\");\n            } else {\n                return res.status(200).end(\"invalid\");\n            }\n        });\n    } else {\n        return res.status(200).end(\"invalid\");\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcmF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNOO0FBQ0U7QUFFaENBLG1FQUFZO0FBRVosaUVBQU0sT0FBZ0JJLEdBQUcsRUFBRUMsR0FBRyxHQUFLLENBQUM7SUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHSCxHQUFHO0lBQy9CLEtBQUssQ0FBQ0ksS0FBSyxHQUFHRCxPQUFPLENBQUNMLEdBQUc7SUFFekIsRUFBRSxFQUFFSSxNQUFNLEtBQUssQ0FBSyxNQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDRyxPQUFPLEdBQUcsS0FBSyxDQUFDUiwyREFBVyxDQUFDLENBQUM7UUFBQSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxPQUFPLENBQUMsQ0FBQyxFQUFFTSxJQUFJO0lBQzNELENBQUMsTUFBTSxFQUFFLEVBQUVULE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztRQUM1QixFQUFFLEdBQUdFLEtBQUssRUFBRSxNQUFNLENBQUNILEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQVM7UUFDaERWLDBEQUFVLENBQUNNLEtBQUssRUFBRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksU0FBU0MsR0FBRyxFQUFFQyxPQUFPLEdBQUssQ0FBQztZQUNuRSxFQUFFLEVBQUVELEdBQUcsRUFBRSxNQUFNLENBQUNmLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsRUFBRUMsR0FBRyxDQUFDLENBQVM7WUFDN0MsS0FBSyxDQUFDVSxJQUFJLEdBQUcsS0FBSyxDQUFDbkIsNkRBQWEsQ0FBQ2tCLE9BQU8sQ0FBQ0csRUFBRSxFQUFFQyxJQUFJO1lBQ2pELEVBQUUsRUFBRUgsSUFBSSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxDQUFDckIsdUVBQXVCLENBQUMsQ0FBQztnQkFBQSxDQUFDLEVBQUUsQ0FBQztvQkFBQ2MsSUFBSSxFQUFFWCxHQUFHLENBQUN1QixJQUFJLENBQUNaLElBQUk7Z0JBQUMsQ0FBQztnQkFDekQsTUFBTSxDQUFDVixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFNO1lBQ25DLENBQUMsTUFBTSxDQUFDO2dCQUNOLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBUztZQUN0QyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsTUFBTSxDQUFDO1FBQ04sTUFBTSxDQUFDUCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFTO0lBQ3RDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyZmVjdG9vby8uL3BhZ2VzL2FwaS9yYXRlLmpzPzZkMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdGlvbiBmcm9tIFwiQC9wdWJsaWMvanMvZGJDb25uZWN0aW9uXCI7XHJcbmltcG9ydCBPcHRpb24gZnJvbSBcIkAvbW9kZWxzL29wdGlvblwiO1xyXG5pbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL3VzZXJcIjtcclxuXHJcbmRiQ29ubmVjdGlvbigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBtZXRob2QsIGNvb2tpZXMgfSA9IHJlcTtcclxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuand0O1xyXG5cclxuICBpZiAobWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0gYXdhaXQgT3B0aW9uLmZpbmQoe30pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5lbmQoSlNPTi5zdHJpbmdpZnkob3B0aW9uc1swXS5yYXRlKSk7XHJcbiAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwiUFVUXCIpIHtcclxuICAgIGlmICghdG9rZW4pIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKFwibm9Ub2tlblwiKTtcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LlRPS0VOX1NFQ1JFVCwgYXN5bmMgKGVyciwgZGVjb2RlZCkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZChcImludmFsaWRcIik7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKGRlY29kZWQuaWQpLmV4ZWMoKTtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBhd2FpdCBPcHRpb24uZmluZE9uZUFuZFVwZGF0ZSh7fSwgeyByYXRlOiByZXEuYm9keS5yYXRlIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKFwiZG9uZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZChcImludmFsaWRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmVuZChcImludmFsaWRcIik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGJDb25uZWN0aW9uIiwiT3B0aW9uIiwiand0IiwiVXNlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvb2tpZXMiLCJ0b2tlbiIsIm9wdGlvbnMiLCJmaW5kIiwic3RhdHVzIiwiZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsInJhdGUiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiVE9LRU5fU0VDUkVUIiwiZXJyIiwiZGVjb2RlZCIsInVzZXIiLCJmaW5kQnlJZCIsImlkIiwiZXhlYyIsImZpbmRPbmVBbmRVcGRhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/rate.js\n");

/***/ }),

/***/ "./public/js/dbConnection.js":
/*!***********************************!*\
  !*** ./public/js/dbConnection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function dbConnection() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) return;\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true,\n        useFindAndModify: false,\n        useCreateIndex: true\n    }, ()=>{\n        console.log(\"connected\");\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvZGJDb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtlQUVoQkMsWUFBWSxHQUFHLENBQUM7SUFDN0IsRUFBRSxFQUFFRCwyRUFBa0MsRUFBRSxNQUFNO0lBRTlDLEtBQUssQ0FBQ0EsdURBQWdCLENBQ3BCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUyxFQUNyQixDQUFDO1FBQ0NDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCQyxnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCQyxjQUFjLEVBQUUsSUFBSTtJQUN0QixDQUFDLE1BQ0ssQ0FBQztRQUNMQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXO0lBQ3pCLENBQUM7QUFFTCxDQUFDO0FBRUQsaUVBQWVaLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcmZlY3Rvb28vLi9wdWJsaWMvanMvZGJDb25uZWN0aW9uLmpzPzAzN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3Rpb24oKSB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlKSByZXR1cm47XG5cbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcbiAgICBwcm9jZXNzLmVudi5NT05HT19VUkksXG4gICAge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZVxuICAgIH0sXG4gICAgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0ZWRcIik7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Rpb247XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYkNvbm5lY3Rpb24iLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/dbConnection.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/rate.js"));
module.exports = __webpack_exports__;

})();