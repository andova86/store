import { Backdrop, Box, CircularProgress, Pagination } from '@mui/material';
import { GetServerSideProps } from 'next';
import { FC, useState, ChangeEvent } from 'react';
import { getAllProducts } from '../api/productsApi';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../modules/products/application/list/ProductList';
import { IProductAsere } from '../modules/products/domain/product';


interface Props {
  productList: IProductAsere[],
  toggleTheme: any,
  num_pages: number

}

const Home: FC<Props> = ({ productList, toggleTheme , num_pages}) => {

  const [showLoading, setShowLoading] = useState(false)
  const [list, setList] = useState(productList)
  const [countPages, setcountPages] = useState(num_pages)

  const [page, setPage] = useState(1);

  const handleChange = async (event: ChangeEvent<unknown>, value: number) => {
    console.log(value);

    setShowLoading(true)
    try {
      let result = await getAllProducts(10 , value)

      setList(result.data)
      setcountPages(result.data.num_pages)
      setPage(value);
      setShowLoading(false)

    } catch (error) {
      console.log(error);
      setShowLoading(false)


    }
  };


  return (
    <ShopLayout title='Lista de Productos' pageDescription='' toggleTheme={toggleTheme}>
      <ProductList products={list} />
      <Box display={'flex'} justifyContent={'center'} my={3}>
        <Pagination count={countPages} color="primary" onChange={handleChange} />
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const result = await getAllProducts(10, 1) // your fetch function here 

  if (!result) {
    return {
      notFound: true,
    }
  }


  return {
    props: {
      productList: result.data.results,
      num_pages: result.data.num_pages
    }
  }
}

export default Home;
