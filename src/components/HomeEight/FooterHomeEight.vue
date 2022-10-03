<template>
      <section class="appie-footer-area appie-footer-about-area appie-footer-8-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-about-widget">
                        <div class="logo">
                            <a href="#"><img src="@/assets/images/logo-9.png" alt=""></a>
                        </div>
                        <p>{{ $t('message.footerHomeText') }}</p>
                        <a href="#">{{ $t('message.footerHomeButton') }} <i class="fal fa-arrow-right"></i></a>
                        <div class="social mt-30">
                            <ul>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-navigation">
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-navigation">
                    </div>                    
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-widget-info">
                        <h4 class="title">{{ $t('message.footerHomeTitle') }}</h4>
                        <ul>
                            <li><a href="#"><i class="fal fa-envelope"></i> support@appie.com</a></li>
                            <li><a href="#"><i class="fal fa-phone"></i> +(642) 342 762 44</a></li>
                            <li><a href="#"><i class="fal fa-map-marker-alt"></i> {{ $t('message.footerHomeAddress') }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-copyright d-flex align-items-center justify-content-between pt-35">
                        <div class="apps-download-btn">
                        <ul>
                            <li><a href="#"><i class="fab fa-apple"></i> {{ $t('message.footerHomeDownload') }} iOS</a></li>
                            <li><a class="item-2" href="#"><i class="fab fa-google-play"></i> {{ $t('message.footerHomeDownload') }} Android</a></li>
                        </ul>
                        </div>
                        <div class="copyright-text">
                            <p>Copyright © 2021 Appie. {{ $t('message.footerHomeCopyright') }}</p>
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