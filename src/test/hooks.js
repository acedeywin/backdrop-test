import { createDataTable } from "../db/create-table"
import { dropDataTable } from "../db/drop-table"
import { seedDatabase } from "../db/populate-table"

before(async () => {
  await createDataTable()
  await seedDatabase()
})

after(async () => {
  await dropDataTable()
})
