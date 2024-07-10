Build
=====

## Local Docker build
This is the steps to locally build the docker image that can be run as a CLI to generate a typescript client from a openapi.json file.

1. `yarn install` To install the required dependencies.
2. `yarn compile` To compile the _src/main.ts_ to _dist/main.js_ ready for use by node js.
3. `docker buildx build --platform linux/amd64,linux/arm64 --output type=docker --tag openapi-ts-clientmaker .` To build the docker image.

**NB:** The docker image is built as a multi-platform image so that it can be efficiently run on both intel and apple based platforms.
For the build to work locally, some [extra setup of Docker Desktop](https://docs.docker.com/build/building/multi-platform/) may be required:

1. One may need to create a buildx builder using the docker-container driver: `docker buildx create --name mybuilder --bootstrap --use`
2. In addition one must enable the _"Use containerd for pulling and storing images"_ option in Docker Desktop settings to 
be able to use --output type=docker instead of pushing built multi-platform image directly to a remote registry.

## Release publish
When changes are pushed to main a new docker image is built and pushed to google artifact registry, tagged "latest".

In order to have stable release that the workflows can rely on not changing from under them, one should push a tag in the
format `v0`, `v1`, and so on to the commit on the main branch. One should also at the same time tag the docker image built
from that commit, so that run configs using the docker image for local cli use can have a stable version to use.

This release process is manual for now. Might automate it later.