import { useSuspenseQuery } from "@tanstack/react-query";

import { listSessions, retrieveSession } from "api/session";
import { detailSponsor } from "api/sponsor";

const QUERY_KEYS = {
  SESSION_LIST: ["session", "list"],
};

export const useListSessionsQuery = () =>
  useSuspenseQuery({
    queryKey: QUERY_KEYS.SESSION_LIST,
    queryFn: listSessions,
  });

export const useRetrieveSessionQuery = (code: string) =>
  useSuspenseQuery({
    queryKey: ["session", "retrieve", code],
    queryFn: () => retrieveSession(code),
  });

export const useRetrieveSponsorQuery = (id: string) =>
  useSuspenseQuery({
    queryKey: ["sponsor", "retrieve", id],
    queryFn: () => detailSponsor(id),
  });
