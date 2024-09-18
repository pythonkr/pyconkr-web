import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import Router from "routes"
import store from "./store"
import "./styles/index.scss"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      gcTime: 24 * 60 * 60 * 1000, // 24 hours
      staleTime: 3 * 1000, // 3 seconds
      refetchOnWindowFocus: true,
    }
  },
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
