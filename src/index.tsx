import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import Router from "routes"
import store from "./store"
import "./styles/index.scss"

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 3, refetchOnMount: 'always', gcTime: 1, staleTime: 10000 } },
})

const root = ReactDOM.createRoot(document.getElementById("root") || document.createElement("div"))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
