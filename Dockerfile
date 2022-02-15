# FROM node:16-alpine as builder
# ARG NODE_ENV
# ARG BUILD_FLAG
# WORKDIR /app/builder
# COPY . .
# RUN npm i


FROM node:16-alpine as builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app
# COPY package*.json ./
COPY . .
RUN npm i


# FROM node:16-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install --only=production
# COPY --from=builder /app/dist ./dist
# CMD npm run start:prod

FROM node:16-alpine
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app
COPY . .
RUN npx nx build client ${BUILD_FLAG}

EXPOSE 4200

WORKDIR ./app/dist/apps/client
RUN npm install

ENV NODE_ENV=$NODE_ENV
CMD ["npm", "start"]