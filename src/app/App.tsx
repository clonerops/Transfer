import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_cloner/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_cloner/layout/core'
import {MasterInit} from '../_cloner/layout/MasterInit'
import {AuthInit} from './modules/auth'
import {QueryClient, QueryClientProvider} from 'react-query'
const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <I18nProvider>
          <LayoutProvider>
            <AuthInit>
              <Outlet />
              <MasterInit />
            </AuthInit  >
          </LayoutProvider>
        </I18nProvider>
      </Suspense>
    </QueryClientProvider>
  )
}

export {App}
