FROM node

WORKDIR /

COPY src .

RUN npm install

EXPOSE 8080

CMD [ "node", "index.js" ]