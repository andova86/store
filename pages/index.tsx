import { FC, useState } from 'react';
import { getAllProducts } from '../api/productsApi';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../modules/products/application/list/ProductList';


interface Props {
 productList: IProductFake[],
 toggleTheme: any

}

const Home: FC<Props> = ({productList, toggleTheme}) => {

  const [showLoading, setShowLoading] = useState(false)
 

  return (
    <ShopLayout title='Lista de Productos' pageDescription='' toggleTheme={toggleTheme}>
      <ProductList products={productList} />
    </ShopLayout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IProductFake } from '../modules/products/domain/productFake';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
 
  const { data } = await getAllProducts() // your fetch function here 

  return {
    props: {

      productList: data
    }
  }
}

export default Home;
