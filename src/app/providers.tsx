// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        customBlue: '#3366FF', // Define your custom color
    },
});

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}