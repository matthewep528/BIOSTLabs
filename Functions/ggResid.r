library(ggplot2)

ggResid <- function(fit) {
  # Extract fitted values and residuals from the linear model
  fitted_values <- fit$fitted.values
  residuals <- fit$residuals
  
  # Create a data frame for the residuals vs. fitted values plot
  resid_data <- data.frame(Fitted = fitted_values, Residuals = residuals)
  
  # Create the plot
  ggplot(resid_data, aes(x = Fitted, y = Residuals)) +
    geom_point() +
    geom_hline(yintercept = 0, color = "red", linetype = "dashed") +
    labs(
      title = "Residuals vs. Fitted Values",
      x = "Fitted Values",
      y = "Residuals"
    )
}

# Example usage:
# fit <- lm(mpg ~ disp + hp, data = mtcars)
# ggResid(fit)
