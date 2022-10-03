<template>
    <div class="appie-testimonial-about-area pb-45">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="appie-section-title text-center">
                        <h3 class="mt-100 appie-title">{{ $t('message.testimonialHomeTitle') }}</h3>
                        <p>{{ $t('message.testimonialHomeText') }}</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="testimonial-about-slider-active" style="position :relative">
                        <span @click.prevent="showPrev" class="prev slick-arrow" style="display: block;"><i class="fal fa-arrow-left"></i></span>
                        <VueSlickCarousel v-bind="settingsForArticle" ref="articleCarosel">
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial') }}</p>
                            </div>
                            </div>
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial2') }}</p>
                            </div>
                            </div>
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial3') }}</p>
                            </div>
                            </div>
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial4') }}</p>
                            </div>
                            </div>
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial5') }}</p>
                            </div>
                            </div>
                            <div class="testimonial-parent-item">
                                <div class="testimonial-box">
                                <div class="icon">
                                    <i class="fas fa-quote-left"></i>
                                </div>
                                <div class="ratings-icon">
                                    <ul>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                        <li><i class="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <p>{{ $t('message.testimonialHomeTestimonial6') }}</p>
                            </div>
                            </div>
                        </VueSlickCarousel>
                        <span @click.prevent="showNext" class="next slick-arrow" style="display: block;"><i class="fal fa-arrow-right"></i></span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-8 col-sm-10">
                    <div class="testimonial-box-about-slider-small-active">
                        <VueSlickCarousel v-bind="settingsForPeople" ref="peopleCarosel">
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition') }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName2') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition2') }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName3') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition3') }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName4') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition4') }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName5') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition5') }}</span>
                                </div>
                            </div>
                            <div class="item">
                                <div class="thumb">
                                    <img src="@/assets/images/testimonial-user-1.png" alt="">
                                </div>
                                <div class="content text-center">
                                    <h5 class="title">{{ $t('message.testimonialHomeName6') }}</h5>
                                    <span>{{ $t('message.testimonialHomePosition6') }}</span>
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
        components:{ VueSlickCarousel},
        data(){ 
            return{
                settingsForArticle: {
                    autoplay: false,
                    arrows:false,
                    dots:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
                settingsForPeople:{
                    centerMode: true,
                    centerPadding: '0px',
                    autoplay: false,
                    arrows:false,
                    dots:false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            }
        },
        methods:{ 
            showNext() {
                this.$refs.articleCarosel.next()
                this.$refs.peopleCarosel.next()
            },
            showPrev(){
                this.$refs.articleCarosel.prev()
                this.$refs.peopleCarosel.prev()
            },
        }


}
</script>

<style>
.testimonial-about-slider-active .testimonial-box{
    margin-left: 0px !important;
    margin-right: 0px !important;
}
.slick-slide{
    padding: 0;
}
</style>