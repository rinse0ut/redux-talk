import Posts from './components/Posts'
import PostsContainer from './containers/DefaultPostsContainer'
import BlogScreen from './screens/BlogScreen'
import data from './data'

const constants = {
  NAME: 'blog'
}

const components = {
  Posts,
}

const containers = {
  PostsContainer,
}

const screens = {
  BlogScreen,
}

const exports = {
  constants,
  components,
  containers,
  data,
  screens,
}

export default exports