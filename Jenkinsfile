echo "${USER}"
cd /home/laiba/jenkinsproject/CI-CD-pipeline-Jenkins_node_AWS_-ECR_ECS
git config --global --add safe.directory /home/laiba/jenkinsproject/CI-CD-pipeline-Jenkins_node_AWS_-ECR_ECS
git pull origin main
AWS_PROFILE=laiba_azam
aws ecr get-login-password --region us-east-1 --profile laiba_azam | docker login --username AWS --password-stdin 205930648708.dkr.ecr.us-east-1.amazonaws.com
docker build -t laibaazam/dockerimages .
docker tag laibaazam/dockerimages 205930648708.dkr.ecr.us-east-1.amazonaws.com/laibaazam/dockerimages:latest
docker push 205930648708.dkr.ecr.us-east-1.amazonaws.com/laibaazam/dockerimages:latest
