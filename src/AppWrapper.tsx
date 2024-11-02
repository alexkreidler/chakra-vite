import * as React from 'react'
import { Provider } from './components/ui/provider'
import { system } from './theme'

export function AppWrapper({children}: React.PropsWithChildren) {
  return (
    <Provider theme={system}>
        {children}
    </Provider>
  )
}