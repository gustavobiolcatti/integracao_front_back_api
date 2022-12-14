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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Account_1 = __importDefault(require("./Account"));
var User = /** @class */ (function () {
    function User() {
    }
    User_1 = User;
    var User_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            length: 250,
        }),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            unique: true
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return Account_1.default; }, function (user) { return User_1; }, {
            cascade: true,
            eager: true,
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Account_1.default)
    ], User.prototype, "account", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_At' }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_At' }),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    User = User_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.default = User;
//# sourceMappingURL=User.js.map