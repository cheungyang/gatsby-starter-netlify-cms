import CMS from 'netlify-cms'

import ViewPreview from './preview-templates/ViewPreview'
import BlogPreview from './preview-templates/BlogPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('view', ViewPreview)
CMS.registerPreviewTemplate('blog', BlogPreview)
