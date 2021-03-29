import chalk from "chalk";

export class Logger {
  public debug(message: string, src?: string): void {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.blue("DEBUG")} [${this.getSrc(
        src
      )}] ${message}`
    );
  }

  public trace(message: string, src?: string): void {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.cyan("TRACE")} [${this.getSrc(
        src
      )}] ${message}`
    );
  }

  public info(message: string, src?: string): void {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.green("INFO")} [${this.getSrc(
        src
      )}] ${message}`
    );
  }

  public warning(message: string, src?: string): void {
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.yellow("WARNING")} [${this.getSrc(
        src
      )}] ${message}`
    );
  }

  public error(err: any, src?: string): void {
    const message = err.message || err || "Unknown error.";
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.red("ERROR")} [${this.getSrc(
        src
      )}] ${message}`
    );
  }

  public fatal(err: any, src?: string): void {
    const message = err.message || err || "Unknown fatal error.";
    console.log(
      `[${this.toHHMMSS(new Date())}] ${chalk.bgRedBright(
        "FATAL"
      )} [${this.getSrc(src)}] ${message}`
    );
  }

  private getSrc(src?: string): string {
    return src ? src.toUpperCase() : "OTHER";
  }

  private toHHMMSS(time: Date): string {
    let hours = time.getHours().toString().padStart(2, "0");
    let minutes = time.getMinutes().toString().padStart(2, "0");
    let seconds = time.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }
}
