# Dockerfile for Next.js
FROM node:22 AS builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /var/www/html
COPY ../nginx.conf /etc/nginx/conf.d/default.conf

