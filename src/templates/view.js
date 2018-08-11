import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from 'components/Admin/Content.js'
import { graphql } from "gatsby"
import Layout from 'templates/layout.js'

export const ViewTemplate = ({
  content,
  contentComponent,
  title,
}) => {
  const ViewContent = contentComponent || Content
  return (
    <Layout>
      <h1>{title}</h1>
       <ViewContent className="content" content={content} />
    </Layout>
  )
}

ViewTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}


const View = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ViewTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

View.propTypes = {
  data: PropTypes.object.isRequired,
}

export default View


export const ViewQuery = graphql`
  query ViewQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
