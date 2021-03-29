export declare class Logger {
    debug(message: string, src?: string): void;
    trace(message: string, src?: string): void;
    info(message: string, src?: string): void;
    warning(message: string, src?: string): void;
    error(err: any, src?: string): void;
    fatal(err: any, src?: string): void;
    private getSrc;
    private toHHMMSS;
}
//# sourceMappingURL=Logger.d.ts.map