FROM node:latest as node
WORKDIR /app
COPY ./dist .

FROM nginx:latest
COPY --from=node /app/contact-manager /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
