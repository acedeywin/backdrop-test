import { pool } from "./db-config"

const urlCode = "ensbtw"
const longUrl =
  "https://statisticsbyjim.com/regression/interpret-r-squared-regression/#targetText=R%2Dsquared%20is%20the%20percentage,response%20variable%20around%20its%20mean."

const shorterUrl = "http://localhost:8000/ensbtw"
const populateTable = `INSERT INTO url_table(id, url_code, long_url, short_url, created_at) VALUES(default, '${urlCode}', '${longUrl}', '${shorterUrl}', default)`

export const seedDatabase = async () => {
  await pool.query(populateTable).then(() => {
    console.log("Tables populated successfully")
  })
}
