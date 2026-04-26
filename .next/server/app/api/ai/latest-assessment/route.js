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
exports.id = "app/api/ai/latest-assessment/route";
exports.ids = ["app/api/ai/latest-assessment/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fai%2Flatest-assessment%2Froute&page=%2Fapi%2Fai%2Flatest-assessment%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Flatest-assessment%2Froute.ts&appDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fai%2Flatest-assessment%2Froute&page=%2Fapi%2Fai%2Flatest-assessment%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Flatest-assessment%2Froute.ts&appDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_sidha_Documents_trae_projects_zealous_src_app_api_ai_latest_assessment_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/ai/latest-assessment/route.ts */ \"(rsc)/./src/app/api/ai/latest-assessment/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ai/latest-assessment/route\",\n        pathname: \"/api/ai/latest-assessment\",\n        filename: \"route\",\n        bundlePath: \"app/api/ai/latest-assessment/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\sidha\\\\Documents\\\\trae_projects\\\\zealous\\\\src\\\\app\\\\api\\\\ai\\\\latest-assessment\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_sidha_Documents_trae_projects_zealous_src_app_api_ai_latest_assessment_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/ai/latest-assessment/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhaSUyRmxhdGVzdC1hc3Nlc3NtZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhaSUyRmxhdGVzdC1hc3Nlc3NtZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWklMkZsYXRlc3QtYXNzZXNzbWVudCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaWRoYSU1Q0RvY3VtZW50cyU1Q3RyYWVfcHJvamVjdHMlNUN6ZWFsb3VzJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNzaWRoYSU1Q0RvY3VtZW50cyU1Q3RyYWVfcHJvamVjdHMlNUN6ZWFsb3VzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtRDtBQUNoSTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpdGFsLXN5bmMvPzYwNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2lkaGFcXFxcRG9jdW1lbnRzXFxcXHRyYWVfcHJvamVjdHNcXFxcemVhbG91c1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhaVxcXFxsYXRlc3QtYXNzZXNzbWVudFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWkvbGF0ZXN0LWFzc2Vzc21lbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9haS9sYXRlc3QtYXNzZXNzbWVudFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWkvbGF0ZXN0LWFzc2Vzc21lbnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzaWRoYVxcXFxEb2N1bWVudHNcXFxcdHJhZV9wcm9qZWN0c1xcXFx6ZWFsb3VzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGFpXFxcXGxhdGVzdC1hc3Nlc3NtZW50XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9haS9sYXRlc3QtYXNzZXNzbWVudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fai%2Flatest-assessment%2Froute&page=%2Fapi%2Fai%2Flatest-assessment%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Flatest-assessment%2Froute.ts&appDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/ai/latest-assessment/route.ts":
/*!***************************************************!*\
  !*** ./src/app/api/ai/latest-assessment/route.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n\nasync function GET() {\n    try {\n        const token = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.getAuthToken)();\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const decoded = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyToken)(token);\n        const userId = parseInt(decoded.userId);\n        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n            where: {\n                id: userId\n            },\n            include: {\n                assessments: {\n                    orderBy: {\n                        createdAt: \"desc\"\n                    },\n                    take: 1\n                }\n            }\n        });\n        if (!user || user.assessments.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No assessments found\"\n            }, {\n                status: 404\n            });\n        }\n        const assessment = user.assessments[0];\n        // Combine fields to match the dashboard's expected structure\n        const dashboardData = {\n            ...assessment.aiResults,\n            overallScore: assessment.overallScore,\n            dimensions: assessment.dimensions,\n            burnoutRisk: assessment.burnoutRisk,\n            cognitiveLoad: assessment.cognitiveLoad,\n            rootCause: assessment.rootCause,\n            dominantDosha: assessment.dominantDosha,\n            personalityType: assessment.personalityType,\n            createdAt: assessment.createdAt\n        };\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(dashboardData);\n    } catch (error) {\n        console.error(\"Latest Assessment Error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9haS9sYXRlc3QtYXNzZXNzbWVudC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1Q7QUFDcUI7QUFFaEQsZUFBZUk7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFFBQVFILHVEQUFZQTtRQUMxQixJQUFJLENBQUNHLE9BQU87WUFDVixPQUFPTCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTUMsVUFBZU4sc0RBQVdBLENBQUNFO1FBQ2pDLE1BQU1LLFNBQVNDLFNBQVNGLFFBQVFDLE1BQU07UUFFdEMsTUFBTUUsT0FBTyxNQUFNWCxtREFBTUEsQ0FBQ1csSUFBSSxDQUFDQyxVQUFVLENBQUM7WUFDeENDLE9BQU87Z0JBQUVDLElBQUlMO1lBQU87WUFDcEJNLFNBQVM7Z0JBQ1BDLGFBQWE7b0JBQ1hDLFNBQVM7d0JBQUVDLFdBQVc7b0JBQU87b0JBQzdCQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtRQUVBLElBQUksQ0FBQ1IsUUFBUUEsS0FBS0ssV0FBVyxDQUFDSSxNQUFNLEtBQUssR0FBRztZQUMxQyxPQUFPckIscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUF1QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUU7UUFFQSxNQUFNYyxhQUFhVixLQUFLSyxXQUFXLENBQUMsRUFBRTtRQUV0Qyw2REFBNkQ7UUFDN0QsTUFBTU0sZ0JBQWdCO1lBQ3BCLEdBQUlELFdBQVdFLFNBQVM7WUFDeEJDLGNBQWNILFdBQVdHLFlBQVk7WUFDckNDLFlBQVlKLFdBQVdJLFVBQVU7WUFDakNDLGFBQWFMLFdBQVdLLFdBQVc7WUFDbkNDLGVBQWVOLFdBQVdNLGFBQWE7WUFDdkNDLFdBQVdQLFdBQVdPLFNBQVM7WUFDL0JDLGVBQWVSLFdBQVdRLGFBQWE7WUFDdkNDLGlCQUFpQlQsV0FBV1MsZUFBZTtZQUMzQ1osV0FBV0csV0FBV0gsU0FBUztRQUNqQztRQUVBLE9BQU9uQixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDaUI7SUFDM0IsRUFBRSxPQUFPaEIsT0FBWTtRQUNuQnlCLFFBQVF6QixLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPUCxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLE9BQU9BLE1BQU0wQixPQUFPO1FBQUMsR0FBRztZQUFFekIsUUFBUTtRQUFJO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXRhbC1zeW5jLy4vc3JjL2FwcC9hcGkvYWkvbGF0ZXN0LWFzc2Vzc21lbnQvcm91dGUudHM/MzljMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2V0QXV0aFRva2VuLCB2ZXJpZnlUb2tlbiB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZWQ6IGFueSA9IHZlcmlmeVRva2VuKHRva2VuKTtcbiAgICBjb25zdCB1c2VySWQgPSBwYXJzZUludChkZWNvZGVkLnVzZXJJZCk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIGFzc2Vzc21lbnRzOiB7XG4gICAgICAgICAgb3JkZXJCeTogeyBjcmVhdGVkQXQ6IFwiZGVzY1wiIH0sXG4gICAgICAgICAgdGFrZTogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIgfHwgdXNlci5hc3Nlc3NtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIk5vIGFzc2Vzc21lbnRzIGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhc3Nlc3NtZW50ID0gdXNlci5hc3Nlc3NtZW50c1swXTtcbiAgICBcbiAgICAvLyBDb21iaW5lIGZpZWxkcyB0byBtYXRjaCB0aGUgZGFzaGJvYXJkJ3MgZXhwZWN0ZWQgc3RydWN0dXJlXG4gICAgY29uc3QgZGFzaGJvYXJkRGF0YSA9IHtcbiAgICAgIC4uLihhc3Nlc3NtZW50LmFpUmVzdWx0cyBhcyBvYmplY3QpLFxuICAgICAgb3ZlcmFsbFNjb3JlOiBhc3Nlc3NtZW50Lm92ZXJhbGxTY29yZSxcbiAgICAgIGRpbWVuc2lvbnM6IGFzc2Vzc21lbnQuZGltZW5zaW9ucyxcbiAgICAgIGJ1cm5vdXRSaXNrOiBhc3Nlc3NtZW50LmJ1cm5vdXRSaXNrLFxuICAgICAgY29nbml0aXZlTG9hZDogYXNzZXNzbWVudC5jb2duaXRpdmVMb2FkLFxuICAgICAgcm9vdENhdXNlOiBhc3Nlc3NtZW50LnJvb3RDYXVzZSxcbiAgICAgIGRvbWluYW50RG9zaGE6IGFzc2Vzc21lbnQuZG9taW5hbnREb3NoYSxcbiAgICAgIHBlcnNvbmFsaXR5VHlwZTogYXNzZXNzbWVudC5wZXJzb25hbGl0eVR5cGUsXG4gICAgICBjcmVhdGVkQXQ6IGFzc2Vzc21lbnQuY3JlYXRlZEF0LFxuICAgIH07XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZGFzaGJvYXJkRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTGF0ZXN0IEFzc2Vzc21lbnQgRXJyb3I6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwiZ2V0QXV0aFRva2VuIiwidmVyaWZ5VG9rZW4iLCJHRVQiLCJ0b2tlbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImRlY29kZWQiLCJ1c2VySWQiLCJwYXJzZUludCIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJpZCIsImluY2x1ZGUiLCJhc3Nlc3NtZW50cyIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJ0YWtlIiwibGVuZ3RoIiwiYXNzZXNzbWVudCIsImRhc2hib2FyZERhdGEiLCJhaVJlc3VsdHMiLCJvdmVyYWxsU2NvcmUiLCJkaW1lbnNpb25zIiwiYnVybm91dFJpc2siLCJjb2duaXRpdmVMb2FkIiwicm9vdENhdXNlIiwiZG9taW5hbnREb3NoYSIsInBlcnNvbmFsaXR5VHlwZSIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/ai/latest-assessment/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   generateToken: () => (/* binding */ generateToken),\n/* harmony export */   getAuthToken: () => (/* binding */ getAuthToken),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   setAuthCookie: () => (/* binding */ setAuthCookie),\n/* harmony export */   verifyToken: () => (/* binding */ verifyToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"fallback-secret-change-me\";\nasync function hashPassword(password) {\n    return await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 12);\n}\nasync function comparePassword(password, hash) {\n    return await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, hash);\n}\nfunction generateToken(payload) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, JWT_SECRET, {\n        expiresIn: \"7d\"\n    });\n}\nfunction setAuthCookie(token) {\n    (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().set(\"token\", token, {\n        httpOnly: true,\n        secure: \"development\" === \"production\",\n        sameSite: \"strict\",\n        maxAge: 60 * 60 * 24 * 7,\n        path: \"/\"\n    });\n}\nfunction getAuthToken() {\n    return (0,next_headers__WEBPACK_IMPORTED_MODULE_2__.cookies)().get(\"token\")?.value;\n}\nfunction verifyToken(token) {\n    try {\n        return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n    } catch (error) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDSDtBQUNXO0FBRXZDLE1BQU1HLGFBQWFDLFFBQVFDLEdBQUcsQ0FBQ0YsVUFBVSxJQUFJO0FBRXRDLGVBQWVHLGFBQWFDLFFBQWdCO0lBQ2pELE9BQU8sTUFBTU4sa0RBQVcsQ0FBQ00sVUFBVTtBQUNyQztBQUVPLGVBQWVFLGdCQUFnQkYsUUFBZ0IsRUFBRUMsSUFBWTtJQUNsRSxPQUFPLE1BQU1QLHFEQUFjLENBQUNNLFVBQVVDO0FBQ3hDO0FBRU8sU0FBU0csY0FBY0MsT0FBWTtJQUN4QyxPQUFPWix3REFBUSxDQUFDWSxTQUFTVCxZQUFZO1FBQUVXLFdBQVc7SUFBSztBQUN6RDtBQUVPLFNBQVNDLGNBQWNDLEtBQWE7SUFDekNkLHFEQUFPQSxHQUFHZSxHQUFHLENBQUMsU0FBU0QsT0FBTztRQUM1QkUsVUFBVTtRQUNWQyxRQUFRZixrQkFBeUI7UUFDakNnQixVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLLEtBQUs7UUFDdkJDLE1BQU07SUFDUjtBQUNGO0FBRU8sU0FBU0M7SUFDZCxPQUFPckIscURBQU9BLEdBQUdzQixHQUFHLENBQUMsVUFBVUM7QUFDakM7QUFFTyxTQUFTQyxZQUFZVixLQUFhO0lBQ3ZDLElBQUk7UUFDRixPQUFPaEIsMERBQVUsQ0FBQ2dCLE9BQU9iO0lBQzNCLEVBQUUsT0FBT3lCLE9BQU87UUFDZCxPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpdGFsLXN5bmMvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gXCJuZXh0L2hlYWRlcnNcIjtcblxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJmYWxsYmFjay1zZWNyZXQtY2hhbmdlLW1lXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICByZXR1cm4gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEyKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4ocGF5bG9hZDogYW55KSB7XG4gIHJldHVybiBqd3Quc2lnbihwYXlsb2FkLCBKV1RfU0VDUkVULCB7IGV4cGlyZXNJbjogXCI3ZFwiIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0aENvb2tpZSh0b2tlbjogc3RyaW5nKSB7XG4gIGNvb2tpZXMoKS5zZXQoXCJ0b2tlblwiLCB0b2tlbiwge1xuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogNywgLy8gNyBkYXlzXG4gICAgcGF0aDogXCIvXCIsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXV0aFRva2VuKCkge1xuICByZXR1cm4gY29va2llcygpLmdldChcInRva2VuXCIpPy52YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgSldUX1NFQ1JFVCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJiY3J5cHQiLCJjb29raWVzIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImhhc2giLCJjb21wYXJlUGFzc3dvcmQiLCJjb21wYXJlIiwiZ2VuZXJhdGVUb2tlbiIsInBheWxvYWQiLCJzaWduIiwiZXhwaXJlc0luIiwic2V0QXV0aENvb2tpZSIsInRva2VuIiwic2V0IiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsIm1heEFnZSIsInBhdGgiLCJnZXRBdXRoVG9rZW4iLCJnZXQiLCJ2YWx1ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsd0JBQXdCO0lBQzVCLE9BQU8sSUFBSUQsd0RBQVlBO0FBQ3pCO0FBTUEsTUFBTUUsU0FBU0MsV0FBV0QsTUFBTSxJQUFJRDtBQUVwQyxpRUFBZUMsTUFBTUEsRUFBQztBQUV0QixJQUFJRSxJQUFxQyxFQUFFRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdml0YWwtc3luYy8uL3NyYy9saWIvcHJpc21hLnRzPzAxZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYUNsaWVudFNpbmdsZXRvbiA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcmlzbWFDbGllbnQoKTtcbn07XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIHByaXNtYTogdW5kZWZpbmVkIHwgUmV0dXJuVHlwZTx0eXBlb2YgcHJpc21hQ2xpZW50U2luZ2xldG9uPjtcbn1cblxuY29uc3QgcHJpc21hID0gZ2xvYmFsVGhpcy5wcmlzbWEgPz8gcHJpc21hQ2xpZW50U2luZ2xldG9uKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwicHJpc21hIiwiZ2xvYmFsVGhpcyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/ms","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fai%2Flatest-assessment%2Froute&page=%2Fapi%2Fai%2Flatest-assessment%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai%2Flatest-assessment%2Froute.ts&appDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csidha%5CDocuments%5Ctrae_projects%5Czealous&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();