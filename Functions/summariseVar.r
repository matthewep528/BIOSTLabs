# Function to summarize variables with optional grouping
# Usage: summarize.var(dataset, var, group_var (optional))
summarize.var <- function(dataset, var, group_var = NULL) {

  require(tidyverse)
  require(rlang)

  result <- dataset %>%
    {if (!is.null(group_var)) dplyr::group_by({{ group_var }}) else .} %>%
    summarise(
      mean = mean({{ var }}, na.rm = TRUE),
      median = median({{ var }}, na.rm = TRUE),
      min = min({{ var }}, na.rm = TRUE),
      max = max({{ var }}, na.rm = TRUE),
      q25 = quantile({{ var }}, 0.25, na.rm = TRUE), # first quartile
      q75 = quantile({{ var }}, 0.75, na.rm = TRUE), # third quartile
      sd = sd({{ var }}, na.rm = TRUE),
      n = length(na.omit({{ var }}))
    ) %>%
    mutate(IQR = q75 - q25)

  return(result)
}