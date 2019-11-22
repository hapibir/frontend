import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, app: { $accessor } }) => {
  if ($accessor.isLogin) {
    redirect('/home')
  }
}

export default middleware
