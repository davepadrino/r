library(sparklyr)
library(ggplot2)
library(dplyr)
require(RJSONIO)

sc <- spark_connect(master = "local", version = "1.6.2")
iris_tbl <- copy_to(sc, iris, "iris", overwrite = TRUE)
iris_tbl

kmeans_model <- iris_tbl %>%
  select(Petal_Width, Petal_Length) %>%
  ml_kmeans(centers = 3)


predicted <- sdf_predict(kmeans_model, iris_tbl) %>% collect
table = table(predicted$Species, predicted$prediction)
toJSON(table)
print(toJSON(table))
table
