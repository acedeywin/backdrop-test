import { pool } from "../db/db-config"

class Model {
  static async findUrl(url) {
    try {
      const query = `SELECT * FROM url_table WHERE long_url = $1`
      const { rows } = await pool.query(query, [url])

      if (rows) {
        return rows[0]
      }
    } catch (err) {
      return false
    }
  }

  static async createUrl(details) {
    try {
      const { urlCode, url, shorterUrl } = details
      const newDetails = [urlCode, url, shorterUrl]
      const query = `INSERT INTO url_table (url_code, long_url, short_url) VALUES ($1, $2, $3)`
      const { rows } = await pool.query(query, newDetails)

      if (rows) {
        return rows[0]
      }
    } catch (err) {
      return false
    }
  }

  static async findUrlCode(urlCode) {
    try {
      const query = `SELECT * FROM url_table WHERE url_code = $1`
      const { rows } = await pool.query(query, [urlCode])

      if (rows) {
        return rows[0]
      }
    } catch (err) {
      return false
    }
  }
}

export default Model
