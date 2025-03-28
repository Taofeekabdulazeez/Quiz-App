FROM node

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "start" ]