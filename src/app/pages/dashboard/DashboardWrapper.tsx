/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {PageTitle} from '../../../_cloner/layout/core'
const DashboardPage: FC = () => (
  <>
  </>
)

const DashboardWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}></PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
