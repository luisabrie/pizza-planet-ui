terraform {
  backend "s3" {
    bucket = "pizza-terraform-state-bucket"
    key    = "pizza-deploy/terraform.tfstate"
    region = "us-east-1"
  }
}