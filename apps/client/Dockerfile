FROM nx-dropteam:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build client ${BUILD_FLAG}

EXPOSE 4200

WORKDIR ./app/dist/apps/client
RUN npm install

ENV NODE_ENV=$NODE_ENV
CMD ["npm", "start"]