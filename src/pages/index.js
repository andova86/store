import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Grid } from "@material-ui/core"
import ProductList from '../components/Card/ProductList'

const IndexPage = () => (
  <Layout>
    <Container style={{paddingTop:'30px', paddingBottom:'30px'}}>
    <SEO title="Home" />

 

     

    <ProductList/>
   {/*  <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    


    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

    </Container>

   
  </Layout>
)

export default IndexPage
