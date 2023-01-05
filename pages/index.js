// import { Inter } from '@next/font/google';

import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
// import data from '../utils/data';
import db from '../utils/db';
import Product from '../models/Product';

// const inter = Inter({ subsets: ['latin'] });

export default function Home({ products }) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
