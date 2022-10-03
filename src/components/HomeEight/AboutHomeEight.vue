<template>
    <section class="appie-about-8-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="appie-section-title mb-30">
                        <h3 class="appie-title col-lg-7">{{ $t('message.aboutHomeTitle') }}</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <div class="appie-about-8-box">
                        <h3 class="title col-lg-7">{{ $t('message.aboutHomeItemTitle') }}</h3>
                        <p class="col-lg-7">{{ $t('message.aboutHomeItemText') }}</p>
                        <a class="main-btn" href="#">{{ $t('message.aboutHomeButton') }} <i class="fal fa-arrow-right"></i></a>
                        <div class="thumb">
                            <img src="@/assets/images/about-thumb-4.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="appie-about-8-box">
                        <h3 class="title">{{ $t('message.aboutHomeItemTitle2') }}</h3>
                        <p>{{ $t('message.aboutHomeItemText2') }}</p>
                        <a class="main-btn" href="#">{{ $t('message.aboutHomeButton') }} <i class="fal fa-arrow-right"></i></a>
                        <div class="thumb mr-30">
                            <img src="@/assets/images/about-thumb-5.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>