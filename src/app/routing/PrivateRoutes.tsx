import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_cloner/assets/ts/_utils'
import {WithChildren} from '../../_cloner/helpers'
import CustomerCallRegistration from '../pages/dashboard/CustomerCallRegistration'
import ConnectToCallCenter from '../pages/dashboard/ConnectToCallCenter'
import CarDelayReport from '../modules/reports/CarDelayReport'
import InventoryRailReport from '../modules/reports/InventoryRailReport'
import CarStatusReport from '../modules/reports/CarStatusReport'
import DriverListReport from '../modules/reports/DriverListReport'
// import Billlandings from '../modules/billlandingManagment/Billlandings'
import BillandingChartReport from '../modules/reports/BillandingChartReport'
import CarChartReport from '../modules/reports/CarChartReport'
import LandingStatusReport from '../modules/reports/LandingStatusReport'
import TemporaryStatusReport from '../modules/reports/TemporaryStatusReport'
import DriversAction from '../modules/driver/DriversAction'
import StaticLinksContent from '../modules/content/StaticLinksContent'
import FaqContent from '../modules/content/FaqContent'
import NewsContent from '../modules/content/NewsContent'
import StaticContent from '../modules/content/StaticContent'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        {/* Report Modules */}
        <Route path='dashboard/report/car-delay' element={<CarDelayReport />} />
        <Route path='dashboard/report/inventory-rail' element={<InventoryRailReport />} />
        <Route path='dashboard/report/car-status' element={<CarStatusReport />} />
        <Route path='dashboard/report/driver-list' element={<DriverListReport />} />
        <Route path='dashboard/report/billanding-chart' element={<BillandingChartReport />} />
        <Route path='dashboard/report/car-chart' element={<CarChartReport />} />
        <Route path='dashboard/report/landing-status' element={<LandingStatusReport />} />
        <Route path='dashboard/report/temporary-status' element={<TemporaryStatusReport />} />
        <Route path='dashboard/driver/driver-action' element={<DriversAction />} />
        {/* content */}
        <Route path='dashboard/content/static-link' element={<StaticLinksContent />} />
        <Route path='dashboard/content/faq' element={<FaqContent />} />
        <Route path='dashboard/content/news' element={<NewsContent />} />
        <Route path='dashboard/content/static-content' element={<StaticContent />} />

        
        <Route path='CustomerCallRegistration' element={<CustomerCallRegistration />} />
        <Route path='ConnectToCallCenter' element={<ConnectToCallCenter />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
