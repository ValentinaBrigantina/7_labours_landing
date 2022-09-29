<template>
    <header class="appie-header-area appie-header-8-area appie-sticky ">
        <div class="container">
            <div class="header-nav-box header-nav-box-6">
                <div class="row align-items-center">
                    <div style="display: flex; justify-content: space-between;">
                        <div class="col-lg-2 col-md-4 col-sm-5 col-6">
                            <div class="appie-logo-box">
                                <a href="/">
                                    <img src="@/assets/images/logo-9.png" alt="">
                                </a>
                            </div>
                        </div>
                        <!-- <SelectLang/> -->
                        <SelectLanguage/>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    // import SelectLang from './SelectLang.vue';
    import SelectLanguage from './SelectLanguage.vue';


    export default {
    components: { SelectLanguage }
}
</script>

<style>

</style>