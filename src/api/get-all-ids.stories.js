import React from 'react'
import { storiesOf } from '@storybook/react'
import { setupGraphiQL } from '@storybook/addon-graphql'
import { graphql } from 'gatsby'

import { Query }  from './get-all-ids'

storiesOf('Get all IDs', module)
  .add('get user info', Query);