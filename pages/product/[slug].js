import React from 'react';


const ProductDetails = ({ products, product }) => {
    return (
        <div>
            <div className='product-details'>
                <div>
                    <div className='product-details__image'>
                        <img src='#' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async ({params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product }
    }
}

export default ProductDetails;
