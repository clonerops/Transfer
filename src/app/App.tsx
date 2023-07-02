import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutProvider, LayoutSplashScreen} from '../_cloner/layout/core'
import {MasterInit} from '../_cloner/layout/MasterInit'
import {AuthInit} from './modules/auth'
import {QueryClient, QueryClientProvider} from 'react-query'
const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LayoutSplashScreen />}>
          <LayoutProvider>
            <AuthInit>
              <Outlet />
              <MasterInit />
            </AuthInit  >
          </LayoutProvider>
      </Suspense>
    </QueryClientProvider>
  )
}

export {App}
