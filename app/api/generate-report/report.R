install.packages("DataExplorer")
install.packages("rmarkdown")
library(DataExplorer)
library(readr)
library(rmarkdown)

# Read the data from CSV
data <- read_csv('data.csv')

# Generate the report
DataExplorer::create_report(data)

# Render the report to PDF
rmarkdown::render("report.Rmd", output_file = "report.pdf")
