actions/publish-typescript-client
==================================

This is a supplemental action that can be used to publish the typescript client built by the main openapi-ts-clientmaker
action to GitHub npm registry.

### Inputs

- _contentPath: Directory path where the package content to be published is placed.
- _githubToken_: secrets.GITHUB_TOKEN from calling workflow. Must have permission to publish GitHub npm package on the repo associated with the calling workflow.

