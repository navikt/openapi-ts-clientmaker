Build
=====

## Local 
This is the steps to locally build the docker image that can be run as a CLI to generate a typescript client from a openapi.json file.

1. `yarn install` To install the required dependencies.
2. `yarn compile` To compile the _src/main.ts_ to _dist/main.js_ ready for use by node js.
3. `docker buildx build --platform linux/amd64,linux/arm64 --output type=docker --tag openapi-ts-clientmaker` To build the docker image.

**NB:** The docker image is built as a multi-platform image so that it can be efficiently run on both intel and apple based platforms.
For the build to work locally, some [extra setup of Docker Desktop](https://docs.docker.com/build/building/multi-platform/) may be required:

1. One may need to create a buildx builder using the docker-container driver: `docker buildx create --name mybuilder --bootstrap --use`
2. In addition one must enable the _"Use containerd for pulling and storing images"_ option in Docker Desktop settings to 
be able to use --output type=docker instead of pushing built multi-platform image directly to a remote registry.