FROM gcr.io/distroless/nodejs20-debian12:nonroot
COPY node_modules /node_modules/
# Without the package.json in place telling node that the runtime is of type "module" an error was thrown
COPY package.json /
# tsconfig.out.json is used when compiling the generated source, so must be available in the runtime env.
COPY tsconfig.out.json /
COPY dist/ /dist/
WORKDIR /
ENTRYPOINT ["/nodejs/bin/node", "dist/main.js"]