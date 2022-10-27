import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";
import { Navbar, SideMenu } from "../ui";
import { Footer } from "../ui/Footer";
import { SideCategory } from "../ui/SideCategory";
interface Props {
    children: any;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    toggleTheme?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ShopLayout: FC<Props> = ({
    children,
    title,
    pageDescription,
    imageFullUrl,
    toggleTheme,
}) => {

  const router = useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
            </Head>
            <nav>
                <Navbar toggleTheme={toggleTheme} />
            </nav>

            <SideMenu />

            <main
                style={{
                    margin: "130px auto",
                    maxWidth: "1440px",
                    padding: "0px 30px",
                    

                }}>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    alignContent="stretch"
                    wrap="wrap">
                    {/*   {
                        router.asPath === '/' ? 
                        <Grid item xs={12} md={3}>
                        <SideCategory />
                    </Grid>:""
                      } */}
                    

                    <Grid item xs={12} md={router.asPath === '/' ? 12:12}>
                      
                        {children}

                      
                        
                    </Grid>
                </Grid>
            </main>

            <Footer />
        </>
    );
};
