import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FeatureAComponent],
                exports: [FeatureAComponent]
            },] },
];
/**
 * @nocollapse
 */
FeatureModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { FeatureModule, FeatureAComponent as ɵa };
//# sourceMappingURL=test-featuremodule.es5.js.map
