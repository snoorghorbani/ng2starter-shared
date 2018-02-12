"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
require("./http-request-base-model");
require("./http-response-base-model");
require("./enums");
require("./animations");
const material_1 = require("@angular/material");
const flex_layout_1 = require("@angular/flex-layout");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    core_1.NgModule({
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
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map