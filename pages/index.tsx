import { SearchOutlined } from '@mui/icons-material';
import { Backdrop, Box, CircularProgress, Grid, IconButton, Input, List, ListItem, Pagination, InputAdornment, ListItemText, Typography, Paper, Button, Card, CardActions, CardContent } from '@mui/material';
import { GetServerSideProps } from 'next';
import { FC, useState, ChangeEvent } from 'react';
import { getAllProducts } from '../api/productsApi';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../modules/products/application/list/ProductList';
import { IProductAsere, IProductItem } from '../modules/products/domain/product';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { ListCategories } from '../modules/categories/application/list/ListCategories';
import ImageFT from 'next/future/image';
import { ProductSale } from '../modules/products/application/item/ProductSale';
interface Props {
  productList: IProductItem[],
  toggleTheme: any,
  num_pages: number

}

const Home: FC<Props> = ({ productList, toggleTheme, num_pages }) => {

  const [showLoading, setShowLoading] = useState(false)
  const [list, setList] = useState(productList)
  const [countPages, setcountPages] = useState(num_pages)

  const [page, setPage] = useState(1);

  const handleChange = async (event: ChangeEvent<unknown>, value: number) => {
    console.log(value);

    setShowLoading(true)
    try {
      let result = await getAllProducts(10, value)

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
    <ShopLayout title='Asere Market' pageDescription='Tu opción para comprar online para la familia.' toggleTheme={toggleTheme}>

      <Grid container spacing={2}>
        <Grid item md={8} xs={12} display='flex' alignItems='end'>
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide >
            <ImageFT
                src={'/banner3.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' , borderRadius: '10px'}} alt={''}/>

            </SwiperSlide>
            <SwiperSlide >
            <ImageFT
                src={'/banner2.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} alt={''}/>

            </SwiperSlide>

            <SwiperSlide >
            <ImageFT
                src={'/banner3.jpg'}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} alt={''}/>
            </SwiperSlide>


          </Swiper>
        </Grid>

        <Grid item md={4}  >
        <ProductSale title={'Carne deshuesada'} percent={10} />
        </Grid>

        <Grid item md={12} >
          <ListCategories />

        </Grid>

      </Grid>

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
