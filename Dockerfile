FROM node:18-alpine

WORKDIR /uruski_lindsay_ui_garden

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 8083

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "8083"]
