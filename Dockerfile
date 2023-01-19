FROM node:19-alpine as builder
WORKDIR /challenge-photo-album
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install
COPY . .
CMD npm start

# RUN npm build

# FROM nginx:1.23.3
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]