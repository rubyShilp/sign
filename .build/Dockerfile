FROM node:16.19.0-bullseye-slim as builder

WORKDIR /workspace

COPY app/ app/
COPY config/ config/
COPY static/ static/
COPY *.js /workspace/
COPY *.json /workspace/

RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=0 /workspace/dist /usr/share/nginx/html

