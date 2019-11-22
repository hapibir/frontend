import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, app: { $accessor } }) => {
  if (!$accessor.isRegister) {
    redirect('/login')
  }
}

export default middleware
