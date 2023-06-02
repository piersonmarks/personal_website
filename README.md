# Personal Website
This is the main repository for my personal website hosted at https://piersonmarks.com/

## About
This website is built as a Static Site with ReactJS + Vite + TailwindCSS. It is hosted on AWS S3, distributed via CloudFront, and SSL is provided by AWS Certificate Manager.

Deployment is handled by Github Actions. When code is pushed to the `main` branch, the `deploy` workflow is triggered. This workflow builds the site from source, uploads it to S3, and invalidates the CloudFront cache.