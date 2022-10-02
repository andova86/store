import { Backdrop, Box, CircularProgress, Pagination } from '@mui/material';
import { GetServerSideProps } from 'next';
import { FC, useState, ChangeEvent } from 'react';
import { getAllProducts } from '../api/productsApi';
import { ShopLayout } from '../components/layouts';
import { dataProducts } from '../database/productsJSON';
import { ProductList } from '../modules/products/application/list/ProductList';
import { IProductFake } from '../modules/products/domain/productFake';
import { IProductPlatzi } from '../modules/products/domain/productPlatzi';


interface Props {
 productList: IProductPlatzi[],
 toggleTheme: any

}

const Home: FC<Props> = ({productList, toggleTheme}) => {

  const [showLoading, setShowLoading] = useState(false)
  const [list, setList] = useState(productList)

  const [page, setPage] = useState(1);
  const handleChange = async(event: ChangeEvent<unknown>, value: number) => {
    console.log(value);
    
    setShowLoading(true)
    try {
      let result = await getAllProducts(value === 1 ? 0 : value * 10)

      setList(result.data)
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
      <Pagination count={10} color="primary" onChange={handleChange}/>
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
 
  const { data } = await getAllProducts(0) // your fetch function here 

  if (!data) {
    return {
      notFound: true,
    }
  }


  return {
    props: {
      productList: data
    }
  }
} 

export default Home;
