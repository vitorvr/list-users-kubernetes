FROM node:13

WORKDIR /usr/app/listusers

COPY . .

RUN yarn
RUN yarn client-install
RUN yarn client-build

EXPOSE 8080

CMD ["node", "server.js"]