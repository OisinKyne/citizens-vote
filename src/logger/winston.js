import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: "citizens-vote-ui" },
  transports: [
    new transports.Console({
      format: format.json(),
      level: "warn"
    })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== "production") {
  logger.clear();
  logger.add(
    new transports.Console({
      format: format.colorize()
    })
  );
}

export default logger;
