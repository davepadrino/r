require(RJSONIO)

# recibir un json y devolver un json
getOptimalPortfolio <- function (jsonObj) {
  resp = fromJSON(jsonObj)
  return(toJSON(resp))
}
