import Head from "next/head"
import { FC } from "react"
import { Box } from "@mui/material"
import stylesLayout from "./AuthLayout.module.css"


interface Props {
    title: string,
    children: any
}

export const AuthLayout: FC<Props> = ({ children, title}) => {
  return (
    <>
    <Head>
        <title>{ title  }</title>
    </Head>

    <main>
        <Box 
        className={stylesLayout.authLayout}
        >
            { children }
          
        </Box>
    </main>
    </>
  )
}
