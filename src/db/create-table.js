import { pool } from "./db-config"

const createTable = `
CREATE TABLE IF NOT EXISTS url_table (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    url_code VARCHAR(50) UNIQUE NOT NULL,
    long_url VARCHAR UNIQUE NOT NULL,
    short_url VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT now()
);
`

export const createDataTable = async () => {
  await pool.query(createTable).then(() => {
    console.log("Tables created successfully")
  })
}
