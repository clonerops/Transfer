import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import * as api from './_requests'
import {StaticLink, StaticLinkWithoutId} from './_models'

const useFetchStaticLinks = () => {
  return useQuery(['staticlinks'], api.getStaticLinks)
}

const useCreateStaticLinks = () => {
  return useMutation((formData: StaticLinkWithoutId) => {
    return api.createStaticLink(formData)
  })
}

const useEditStaticLinks = () => {
  return useMutation(
    (formData: StaticLink) => {
      return api.editStaticLicks(formData.id, formData)
    },
    {
      onSuccess: () => {
        // queryClinet.refetchQueries('staticLinks')
      },
    }
  )
}

const useDeleteStaticLinks = () => {
  const queryClient = useQueryClient()
  return useMutation(api.deleteStaticLinks, {
    onSuccess: (_, id) => {
      const staticLinks: any = queryClient.getQueryData(['staticlinks'])
      const data = staticLinks?.filter((item: StaticLink) => item.id !== id)
      queryClient.setQueriesData(['staticlinks'], data)
    },
  })
}

export {useFetchStaticLinks, useCreateStaticLinks, useEditStaticLinks, useDeleteStaticLinks}
