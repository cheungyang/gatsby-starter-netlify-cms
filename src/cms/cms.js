import CMS from 'netlify-cms'

import PagePreview from './preview-templates/PagePreview'
import BlogPreview from './preview-templates/BlogPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('page', PagePreview)
CMS.registerPreviewTemplate('blog', BlogPreview)
