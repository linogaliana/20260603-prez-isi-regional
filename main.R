library(readr)
library(stringr)
library(gt)
library(dplyr)

folder = "/home/onyxia/work/ip-effectifs/chiffres"
year = "2024"
files = list.files(paste0(folder, "/", year), full.names = TRUE)
filename = str_subset(str_subset(files, "v4_1"), "GT")

tab_eff <- readxl::read_excel(filename, skip = 4, n_max = 4, col_names = c("versant", "2023_yca", "2023_hca","2024_yca","2024_hca", "evol_yca", "evol_hca"))

gt(
    tab_eff %>% select(versant, ends_with("yca"), contains("evol"))
) %>%
fmt_percent(
      columns = contains("evol"),
      decimals = 1
) %>%
fmt_number(
    contains(c("2023", "2024")),
    decimals = 0,
    sep_mark = " "
) %>%
tab_style(
    style=cell_fill(color="#c5eceb"),
    locations=cells_body(
        rows = (stringr::str_detect(versant, "Ensemble de la fonction publique")))
)

