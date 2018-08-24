import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class FeatureAComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FeatureAComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-feature-a',
                template: `
    <p>
      feature-a works!
    </p>
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
FeatureAComponent.ctorParameters = () => [];

class FeatureModule {
}
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
FeatureModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureModule, FeatureAComponent as ɵa };
//# sourceMappingURL=test-featuremodule.js.map
