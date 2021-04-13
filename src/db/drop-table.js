import { pool } from "./db-config"

const dropTable = `
DROP TABLE IF EXISTS url_table;
`

export const dropDataTable = async () => {
  await pool.query(dropTable).then(() => {
    console.log("Tables dropped successfully")
  })
}
