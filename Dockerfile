FROM node:18-alpine

WORKDIR /uruski_lindsay_ui_garden_build_checks

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 8018

CMD ["serve", "-s", "build", "-l", "8018"]
