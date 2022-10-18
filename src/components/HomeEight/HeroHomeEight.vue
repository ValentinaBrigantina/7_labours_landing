<template>
    <section class="appie-hero-area appie-hero-8-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="appie-hero-content appie-hero-content-8"> 
                        <span class="main mt-60">{{ $t('message.heroHomeText') }}</span>                    
                        <h1 class="appie-title">{{ $t('message.heroHomeTitle') }}</h1>
                        <p>{{ $t('message.heroHomeText1') }}</p>
                        <ul class="mb-40">
                            <li><a href="#"><i class="fab fa-google-play"></i>  <span>Google Play</span></a></li>
                            <li><a class="item-2" href="#"><i class="fab fa-apple"></i>  <span>App Store</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="appie-hero-thumb-6">
                        <div class="thumb text-center wow animated fadeInUp" data-wow-duration="1000ms" data-wow-delay="600ms">
                            <img src="@/assets/images/hero-thumb-9.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-8-shape-1">
            <img src="@/assets/images/shape/3.png" alt="">
        </div>
        <div class="home-8-shape-2">
            <img src="@/assets/images/shape/4.png" alt="">
        </div>
        <div class="home-8-shape-3">
            <img src="@/assets/images/shape/1.png" alt="">
        </div>
        <div class="home-8-shape-4">
            <img src="@/assets/images/shape/2.png" alt="">
        </div>
    </section>  
</template>

<script>
export default {

}
</script>

<style>
    .appie-hero-content .main {
        color: #0e1133;
        margin-left: 3px;
        font-size: 14px;
    }
</style>