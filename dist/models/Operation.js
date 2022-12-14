"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Operation = /** @class */ (function () {
    function Operation() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Operation.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "integer",
            primary: true
        }),
        __metadata("design:type", Number)
    ], Operation.prototype, "sender", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "integer",
            primary: true
        }),
        __metadata("design:type", Number)
    ], Operation.prototype, "receiver", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'numeric',
        }),
        __metadata("design:type", Number)
    ], Operation.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Operation.prototype, "createdAt", void 0);
    Operation = __decorate([
        (0, typeorm_1.Entity)()
    ], Operation);
    return Operation;
}());
exports.default = Operation;
//# sourceMappingURL=Operation.js.map