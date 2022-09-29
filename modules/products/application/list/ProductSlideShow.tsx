import { FC } from 'react'
import { Slide } from 'react-slideshow-image';
import styles from './ProductSlideShow.module.css';
import 'react-slideshow-image/dist/styles.css'

interface Props {
    images: string[]
}

export const ProductSlideShow: FC<Props> = ({ images }) => {
    return (

        <Slide>
            {images.map((slideImage, index) => {

               // const url = `/products/${slideImage}`;
               const url = `${slideImage}`;
                console.log(url);


                return (

                    <div className={styles['each-slide']} key={index}>
                        <div
                            style={{
                                'backgroundImage': `url(${url})`,
                                backgroundSize: "contain"
                            }}

                        >

                        </div>
                    </div>
                )

            })}
        </Slide>

    )
}
