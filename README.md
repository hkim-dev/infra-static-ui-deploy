# infra-static-ui-deploy

A simple template to deploy a static frontend (like React or Vite) to AWS using CloudFormation and CircleCI.
You can switch out the UI anytime, but the infrastructure setup (S3 + CloudFront + Route53) and CI/CD workflow are ready to go.

## What This Project Does
- Uses **CloudFormation** to create:
  - An S3 bucket for static assets
  - A CloudFront CDN for global delivery
  - Route53 DNS records (optional, for custom domains)
- Uses **CircleCI** to:
  - Configure the AWS CLI and SAM CLI
  - Build the frontend using Vite
  - Deploy the build to the S3 bucket
  - Automate the CloudFormation stack deployment
- Supports multiple environments (dev, test, stage, prod)

## 🗂️ Folder structure
```
.
├── .circleci/               # CircleCI config for build & deploy
├── cloudformation/          # AWS Infra-as-Code template
├── sample-ui/               # Minimal mock frontend (Vite + React)
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- An AWS account with an ACM certification and a Route53 hosted zone already set up
- This project connected in your CircleCI dashboard
- Environment variables configured in CircleCI

Follow these steps to get started:

1. Clone the repo:
  ```bash
  git clone https://github.com/hkim-dev/infra-static-ui-deploy.git
  ```

2. Install the mock UI:
  ```bash
  cd sample-ui
  npm install
  npm run build
  ```

3. Push your code and let CircleCI take care of the rest 🎉
  
  Make sure your CircleCI project has the required environment variables set - You can configure these in the CircleCI **Project Settings > Environment Variables**, or better, use **[contexts](https://circleci.com/docs/contexts/)** for managing multiple environments like dev, test, or prod.

  - **AWS credentials**
    - `AWS_ACCESS_KEY_ID`
    - `AWS_SECRET_ACCESS_KEY`
    - `AWS_REGION`

  - **Deployment config**
    - `ENV` (e.g., `dev`, `prod`)
    - `PROJECT_PREFIX`

  - **CloudFormation parameters**
    - `CF_ACM_CERTIFICATE_ARN`
    - `ROUTE53_HOSTED_ZONE_ID`
    - `APP_SERVICE_DOMAIN`