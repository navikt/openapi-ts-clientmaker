FROM gcr.io/distroless/nodejs20-debian12:nonroot
COPY node_modules /node_modules/
# Without the package.json in place telling node that the runtime is of type "module" an error was thrown
COPY package.json /
COPY dist/ /dist/
WORKDIR /
ENTRYPOINT ["/nodejs/bin/node", "dist/main.js"]