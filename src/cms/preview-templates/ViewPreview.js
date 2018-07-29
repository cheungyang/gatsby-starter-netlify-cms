import React from 'react'
import PropTypes from 'prop-types'
import { ViewTemplate } from '../../templates/view'

const ViewPreview = ({ entry, widgetFor }) => (
  <ViewTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ViewPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ViewPreview
