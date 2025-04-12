## Docker Installation

-   Install Docker
-   Start a new network `docker network create new-network`
-   Start postgres `docker run --name postgres --network new-network -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres`
-   Build the image `docker build --network=host -t user_project_2`
-   Start the image `docker run --network new-network -e DATABASE_URL=postgresql://postgres:password@postgres_user_app:5432/postgres -p 3000:3000 user_project_2`

## Docker Compose Installation steps

-   Install Docker
-   run `docker-compose up`
