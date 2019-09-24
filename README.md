<p align="center">
  <a href="https://www.fusiondb.cn">
    <img alt="FusionDB Dashboard" title="FusionDB Website" src="http://www.fusiondb.cn/images/card.jpg" width="450">
  </a>
</p>

## Introduction

This project contains the Markdown files that get automatically generated as documentation and guides for the [FusionDB](https://www.fusiondb.cn/) site.

Notes: [FusionDB](https://www.fusiondb.cn/) official website is based on the [dataflow.spring.io](https://github.com/spring-io/dataflow.spring.io) project, copyright belongs to the [Spring Cloud Data Flow](https://dataflow.spring.io/) series products.

## Building

You'll need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/en/) installed globally. Note that, for Node, you need `version 10`, not the latest version.

```bash
# Init
yarn install        # Install dependencies

# Linter / Prettier
yarn run lint       # Linter
yarn run fix        # Fix linting errors

# Dev
yarn start          # Run dev

# Prod
yarn build          # Run dev
yarn serve          # Serve the prod build
```

## Contributing

We welcome contributions!
All documentation for this project is written using `Markdown`.
An example segment from our [Stream Processing Getting Started Guide](https://www.fusiondb.cn/docs/stream-developer-guides/getting-started/stream/) is shown below:

```markdown
# Getting Started with Stream Processing

Spring Cloud Data Flow provides over 70 prebuilt streaming applications that you can use right away to implement common streaming use cases.
In this guide we will use two of these applications to construct a simple data pipeline that produces data sent from an external http request and consumes that data by logging the payload to the terminal.

Instructions for registering these prebuilt applications with Data Flow are provided in the [Installation guide](%currentPath%/installation/).
```

## Debugging

See [debugging-the-build-process.md](https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/debugging-the-build-process.md)

## Q&A and issue tracking

If you have any feedback, additions, or changes to the documentation or guides, don't hesitate to [add an issue](https://github.com/FusionDB/fusiondb.github.io/issues).

## Code of Conduct

This project is governed by the [Code of Conduct](CODE_OF_CONDUCT.adoc). By participating, you are expected to uphold this code of conduct. Please report unacceptable behavior to fusiondb-code-of-conduct@fusiondb.cn.

## License

The Spring Framework is released under version 2.0 of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).
