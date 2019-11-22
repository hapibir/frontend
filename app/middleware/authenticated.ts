import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, app: { $accessor } }) => {
  if (!$accessor.isLogin) {
    redirect('/login')
  }
}

export default middleware
