import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import client, { urlFor } from '../../library/client';

const ProductDetails = ({ products, product }) => {
    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className='product-details'>
                <div>
                    <div className='product-details__image'>
                        <img src={urlFor(image && image[0])} />
                    </div>
                    {/* <div className='product-details__small-image'>
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div> */}
                </div>
                <div className='product-details__desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}

export default ProductDetails;
