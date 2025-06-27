import React from 'react'
import { AdminViewProps } from 'payload'
import { DefaultTemplate } from '@payloadcms/next/templates'
import { notFound, redirect } from 'next/navigation'

const Kanban: React.FC<AdminViewProps & { viewActions: any }> = async ({
  initPageResult,
  params,
  searchParams,
  viewActions,
}) => {
  console.log('in kanban')
  const { payload, user } = initPageResult.req
  if (!user) {
    return redirect('/login')
  }
  // let pipelineId = params?.segments?.[1] || undefined
  // if (!pipelineId) {
  //   return notFound()
  // }

  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req?.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
      viewActions={viewActions}
    >
      <p>Made it to Kanban view</p>
    </DefaultTemplate>
  )
}

export default Kanban
