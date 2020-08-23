import React from 'react'

import { Layout } from '../components/common/layout'
import { Seo } from '../components/common/seo'

const GettingStartedPage = () => (
  <Layout className='page-getting-started'>
    <Seo title='Getting Started' />
    <div className='container'>
      <div className='layout-sidebars layout-2-sidebars'>
        <div className='sidebar'>
          <div className='box'>
            <div className='box-title'>Learning</div>
            <ul>
              <li>
                <a href='/docs/concepts/architecture/'>Architecture</a>
              </li>
              <li>
                <a href='/docs/concepts/streams/'>Stream Concepts</a>
              </li>
              <li>
                <a href='/docs/concepts/batch-jobs/'>Batch Concepts</a>
              </li>
              <li>
                <a href='/docs/concepts/sql/'>SQL Concepts</a>
              </li>
              <li>
                <a href='/docs/concepts/roadmap/'>Roadmap</a>
              </li>
              {/* <li>
                <a href='/'>Pre-built Stream and Batch microservices.</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className='main'>
          <div className='main-content'>
            <h1>快速入门</h1>
            <p>
              企业级 <strong> Core Data & Core AI </strong>{' '}
              统一分析平台（Anyscale Unify Analysis
              Platform），分析流动中的数据。Anyscale
              并不是一个框架，而是一套完整的解决方案。
            </p>
            <p>
              <strong>Anyscale</strong> 支持运行在多种平台中:{' '}
              <strong>Local</strong>, <strong>Cloud</strong>, and{' '}
              <strong>Kubernetes</strong>。 我们推荐运行{' '}
              <strong>Anyscale CoreData & CoreAI</strong>,
              于本地数据中心，这是经过验证的成熟方案。 Anyscale
              运行在多种平台一直是我们努力的目标，未来我们会持续优化我们的架构，使得
              Anyscale 能够简单 & 可靠的运行在 <strong>Cloud</strong> 和{' '}
              <strong>Kubernetes</strong> 平台中。
            </p>

            <ul className='block-links'>
              <li>
                <a href='/docs/installation/local/' className='local'>
                  安装
                  <strong>Local</strong>
                </a>
              </li>
              <li>
                <a href='/docs/installation/cloud/' className='cloudfoundry'>
                  安装
                  <strong>Cloud</strong>
                </a>
              </li>
              <li>
                <a href='/docs/installation/kubernetes/' className='kubernetes'>
                  安装
                  <strong>Kubernetes</strong>
                </a>
              </li>
            </ul>
            <h2>开发指南</h2>
            <p>
              安装 <strong>Anyscale</strong>{' '}
              之后，您将要开启您的应用构建之旅，如下是关于您如何使用 Stream
              、Batch 、SQL 构建企业数据流的入门指南。
            </p>
            <ul className='block-links'>
              <li>
                <a
                  href='/docs/stream-developer-guides/getting-started/stream/'
                  className='stream-processing'
                >
                  <strong>Stream</strong>
                  Processing
                </a>
              </li>
              <li>
                <a
                  href='/docs/batch-developer-guides/getting-started/task/'
                  className='batch-processing'
                >
                  <strong>Batch</strong> Processing
                </a>
              </li>
              <li>
                <a
                  href='/docs/sql-developer-guides/getting-started/sql/'
                  className='batch-processing'
                >
                  <strong>SQL</strong> Processing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default GettingStartedPage
