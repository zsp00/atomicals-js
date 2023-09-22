FROM node:18

WORKDIR /app

COPY . .

RUN corepack enable && \
    yarn && yarn build

ENTRYPOINT ["yarn", "cli"]
