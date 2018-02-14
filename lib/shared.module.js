"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
require("./http-request-base-model");
require("./http-response-base-model");
require("./enums");
require("./animations");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule,
                        http_1.HttpClientModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatIconModule, material_1.MatButtonModule,
                        material_1.MatCardModule, material_1.MatSnackBarModule,
                        material_1.MatSidenavModule, material_1.MatExpansionModule, material_1.MatSelectModule, material_1.MatFormFieldModule, material_1.MatListModule, material_1.MatMenuModule,
                        material_1.MatRadioModule, material_1.MatInputModule,
                        material_1.MatToolbarModule, material_1.MatDatepickerModule, material_1.MatProgressBarModule,
                        animations_1.BrowserAnimationsModule
                    ],
                    declarations: [],
                    exports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule,
                        http_1.HttpClientModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatIconModule, material_1.MatButtonModule,
                        material_1.MatCardModule, material_1.MatSnackBarModule,
                        material_1.MatSidenavModule, material_1.MatExpansionModule, material_1.MatSelectModule, material_1.MatFormFieldModule, material_1.MatListModule, material_1.MatMenuModule,
                        material_1.MatRadioModule, material_1.MatInputModule,
                        material_1.MatToolbarModule, material_1.MatDatepickerModule, material_1.MatProgressBarModule
                    ]
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map