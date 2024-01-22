---
title: "Interactive Regression Analysis"
output: html_document
runtime: shiny
---

## Interactive Scatterplot with Regression Line

```{r regression-app, echo=FALSE}
library(shiny)
library(ggplot2)

# Define your ggRegression function here (make sure it's correct)
ggRegression <- function(fit, title = "title") {
  # Function definition...
}

# Sample data (replace with your dataset)
mydata <- mtcars  # Replace with your actual dataset

# UI definition
ui <- fluidPage(
  titlePanel("Interactive Scatterplot with Regression Line"),
  sidebarLayout(
    sidebarPanel(
      selectInput("xvar", "Select X Variable:", choices = names(mydata)[-1]),
      selectInput("yvar", "Select Y Variable:", choices = names(mydata)[1])
    ),
    mainPanel(
      plotOutput("regPlot")
    )
  )
)

# Server logic
server <- function(input, output) {
  output$regPlot <- renderPlot({
    # Check if the dataset exists
    if (!exists("mydata")) {
      stop("Dataset not found")
    }

    # Fit the model
    fit <- lm(as.formula(paste(input$yvar, "~", input$xvar)), data = mydata)

    # Call the ggRegression function
    ggRegression(fit, title = paste(input$yvar, "vs", input$xvar))
  }, error = function(e) {
    # Error handling
    print(e)
  })
}

# Run the application
shinyApp(ui = ui, server = server)

```