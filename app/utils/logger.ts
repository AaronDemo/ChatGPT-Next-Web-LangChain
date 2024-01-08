const { globalLogger } = require("./winston-logger");

export class Logger {
  public static error(e: Error) {
    globalLogger.error(e.stack);
  }

  public static info(message: any) {
    globalLogger.info(message);
  }

  public static warn(message: any) {
    globalLogger.warn(message);
  }

  public static debug(message: any) {
    globalLogger.debug(message);
  }
}