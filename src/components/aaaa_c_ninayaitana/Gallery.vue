<script setup>
    import ImgLightbox from '@/components/sistem/ImgLightbox.vue'

    import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 500, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  // delay: 200,
});
</script>

<template>


<div class="grid grid-cols-2 gap-4 px-1 py-5">
    <div data-aos="zoom-in">
        <ImgLightbox
            class="img-gallery img-gallery-mh96"
            name="/aaaa_c_ninayaitana/images/gallery/gallery_1.jpeg"
            nameImg="imagen_1"
            nameAlbum="galeria"
        />
    </div>
    <div data-aos="zoom-in">
        <ImgLightbox
            class="img-gallery img-gallery-mh96"
            name="/aaaa_c_ninayaitana/images/gallery/gallery_4.jpeg"
            nameImg="imagen_4"
            nameAlbum="galeria"
        />
    </div>
    <div data-aos="zoom-in">
        <ImgLightbox
            class="img-gallery img-gallery-mh96"
            name="/aaaa_c_ninayaitana/images/gallery/gallery_3.jpeg"
            nameImg="imagen_3"
            nameAlbum="galeria"
        />
    </div>
    <div data-aos="zoom-in">
        <ImgLightbox
            class="img-gallery img-gallery-mh96"
            name="/aaaa_c_ninayaitana/images/gallery/gallery_2.jpeg"
            nameImg="imagen_2"
            nameAlbum="galeria"
        />
    </div>
</div>


</template>

<style scoped>
</style>