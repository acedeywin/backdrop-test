import dotenv from "dotenv-safe"
import Pool from "pg"

const mainPool = Pool.Pool

dotenv.config({ silent: true })

const connection =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_URL
    : process.env.DATABASE_URL

export const pool =
  process.env.ENV === "development"
    ? new mainPool({
        connectionString: connection,
      })
    : new mainPool({
        connectionString: connection,
        ssl: { rejectUnauthorized: false },
      })
