import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPP0iTAUq25Ry69V9uFzcvhyBW4Ud0CBoEaXLjQOydxxIB6FghIDADjFTKkaFpQWR9i0P9MNuJjsxjnu65U7dK8YtNxDQ7LEwuAKk9i66hYjyJuZLWVS9i2yIjDaPK3vGaVz6sPqWnE3unhuwx0ICD7sJFV9h5La2lcwS4OCgErNPPpLIZq",
})
