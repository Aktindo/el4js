"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
class Logger {
    debug(message, src) {
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.blue("DEBUG")} [${this.getSrc(src)}] ${message}`);
    }
    trace(message, src) {
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.cyan("TRACE")} [${this.getSrc(src)}] ${message}`);
    }
    info(message, src) {
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.green("INFO")} [${this.getSrc(src)}] ${message}`);
    }
    warning(message, src) {
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.yellow("WARNING")} [${this.getSrc(src)}] ${message}`);
    }
    error(err, src) {
        const message = err.message || err || "Unknown error.";
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.red("ERROR")} [${this.getSrc(src)}] ${message}`);
    }
    fatal(err, src) {
        const message = err.message || err || "Unknown fatal error.";
        console.log(`[${this.toHHMMSS(new Date())}] ${chalk_1.default.bgRedBright("FATAL")} [${this.getSrc(src)}] ${message}`);
    }
    getSrc(src) {
        return src ? src.toUpperCase() : "OTHER";
    }
    toHHMMSS(time) {
        let hours = time.getHours().toString().padStart(2, "0");
        let minutes = time.getMinutes().toString().padStart(2, "0");
        let seconds = time.getSeconds().toString().padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map