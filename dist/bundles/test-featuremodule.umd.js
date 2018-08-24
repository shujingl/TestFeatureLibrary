(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['test-featuremodule'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var FeatureAComponent = (function () {
    function FeatureAComponent() {
    }
    /**
     * @return {?}
     */
    FeatureAComponent.prototype.ngOnInit = function () {
    };
    return FeatureAComponent;
}());
FeatureAComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-feature-a',
                template: "\n    <p>\n      feature-a works!\n    </p>\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
FeatureAComponent.ctorParameters = function () { return []; };
var FeatureModule = (function () {
    function FeatureModule() {
    }
    return FeatureModule;
}());
FeatureModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [FeatureAComponent],
                exports: [FeatureAComponent]
            },] },
];
/**
 * @nocollapse
 */
FeatureModule.ctorParameters = function () { return []; };

exports.FeatureModule = FeatureModule;
exports.ɵa = FeatureAComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-featuremodule.umd.js.map
