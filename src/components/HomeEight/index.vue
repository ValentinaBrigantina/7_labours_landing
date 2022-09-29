<template>
    <div>
        <div v-if="showloading">
            <loader-appie/>
        </div>
        <div v-else>
            <header-home-eight/>
            <hero-home-eight/>
            <about-home-eight/>
            <services-home-eight/>
            <work-home-eight/>
            <get-started-home-eight/>
            <testimonial-home-eight/>
            <sponser-home-eight/>
            <footer-home-eight/>
            <div class="back-to-top back-to-top-8">
                <a href="#"><i class="fal fa-arrow-up"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
import AboutHomeEight from './AboutHomeEight.vue'
import FooterHomeEight from './FooterHomeEight.vue'
import GetStartedHomeEight from './GetStartedHomeEight.vue'
import HeaderHomeEight from './HeaderHomeEight.vue'
import HeroHomeEight from './HeroHomeEight.vue'
import ServicesHomeEight from './ServicesHomeEight.vue'
import SponserHomeEight from './SponserHomeEight.vue'
import TestimonialHomeEight from './TestimonialHomeEight.vue'
import WorkHomeEight from './WorkHomeEight.vue'
import LoaderAppie from '../LoaderAppie.vue'

export default {
    name: '',
	components: {
        HeaderHomeEight,
        HeroHomeEight,
        AboutHomeEight,
        ServicesHomeEight,
        WorkHomeEight,
        GetStartedHomeEight,
        TestimonialHomeEight,
        SponserHomeEight,
        FooterHomeEight,
        LoaderAppie,
    },
    data() {
        return {
            showloading: true,
        }
    },
    mounted() {
        document.addEventListener('scroll', this.topToBottom)
    },

    created() {
       this.preLoading();
        document.addEventListener('scroll', this.topToBottom)
    },

    methods:{
        preLoading(){
            setTimeout(()=>{
                this.showloading= false    
            }, 600)
        },
        topToBottom(){
        const result = document.querySelector('.back-to-top')
           if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight ) {
                result.style.display = "block";
            } else {
                result.style.display = "none";
            }
        },
    }
}
</script>

<style>

</style>