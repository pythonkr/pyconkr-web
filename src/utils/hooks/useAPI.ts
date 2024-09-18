import { useSuspenseQuery } from '@tanstack/react-query'

import { listSessions, retriveSession } from "api/session"
import { detailSponsor } from "api/sponsor";

const QUERY_KEYS = {
  SESSION_LIST: ['session', 'list'],
}

export const useListSessionsQuery = () => useSuspenseQuery({
  queryKey: QUERY_KEYS.SESSION_LIST,
  queryFn: listSessions,
})

export const useRetriveSessionQuery = (code: string) => useSuspenseQuery({
  queryKey: ['session', 'retrive', code],
  queryFn: () => retriveSession(code),
})

export const useRetrieveSponsorQuery = (id: string) => useSuspenseQuery({
  queryKey: ["sponsor", "retrieve", id],
  queryFn: () => detailSponsor(id),
})