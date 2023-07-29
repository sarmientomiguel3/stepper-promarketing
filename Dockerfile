FROM node:18-alpine
COPY . /app
WORKDIR /app
RUN yarn install && yarn build && yarn build-storybook
EXPOSE 4025
EXPOSE 6006
CMD ["npm", "run", "start"]
CMD ["npm", "run", "storybook"]
