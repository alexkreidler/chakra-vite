"use client"

import { ChakraProvider, SystemContext } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"

export function Provider(props: React.PropsWithChildren<{theme: SystemContext}>) {
  return (
    <ChakraProvider value={props.theme}>
      <ColorModeProvider>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
