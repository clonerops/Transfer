import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'// Apps
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_cloner/assets/css/style.rtl.css'
 **/
// import './_cloner/assets/sass/style.scss'
// import './_cloner/assets/sass/plugins.scss'
import './_cloner/assets/css/style.rtl.css'
import './_cloner/assets/sass/style.react.scss'
import './_cloner/assets/css/tailwind.css'
import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './_cloner/store/store'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
setupAxios(axios)
Chart.register(...registerables)

const container = document.getElementById('root')
if (container) {
  const queryClient = new QueryClient()

  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <AuthProvider>
            <PersistGate persistor={persistor}>
              <AppRoutes />
            </PersistGate>
          </AuthProvider>
        </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
