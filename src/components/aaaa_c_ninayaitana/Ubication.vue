<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 500, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  // delay: 200,
});
</script>

<template>
  <div class="grid grid-cols-12 gap-1 h-60 w-full text-rose-400 fill-rose-600 mt-8 tracking-widest bangers-font relative">

    <img class="absolute -ml-8 h-full max-h-56 rounded-xl" src="/aaaa_c_ninayaitana/images/gallery/gallery_5.jpeg" alt="" data-aos="fade-right">
    <div class="col-span-4"></div>

    <div class="col-span-8 mx-auto flex flex-col justify-center items-center">
      <span class="text-center mb-7">
        <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
      </span>
  
      <p class="text-center text-2xl font-bold">Ubicacion</p>
  
      <p class="text-center text-sm">Independencia del Peru 453</p>
      <p class="text-center text-sm">18 de Nov</p>
      <p class="text-center text-sm">16 Hs. a 19 Hs.</p>
  
      <a class="mx-auto my-5 text-sm rounded text-center text-rose-600 fill-rose-600 bg-pink-100 p-3 flex gap-2 items-center"
              href="https://www.google.com.ar/maps/place/Independencia+del+Per%C3%BA+453,+B6450AQI+Pehuaj%C3%B3,+Provincia+de+Buenos+Aires/@-35.7982523,-61.8979608,17z/data=!3m1!4b1!4m5!3m4!1s0x95c0f9da7725f0bf:0x6d845d35ce433cc2!8m2!3d-35.7982567!4d-61.8953859?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D">
  
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z"/></svg>
              <span class=" font-light  w-auto  hover:shadow-sm">
                  Como llegar
              </span>
          </a>
    </div>

    <!-- <div class="w-full bg-slate-300 p-1 mt-5">
      <iframe class="w-full h-72 focus:outline-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.3222399009874!2d-61.361869424265215!3d-35.61978171186711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c0823ae11e9dd1%3A0x1c3caf321fdbb6b2!2sArenales%20356%2C%20B6530%20Carlos%20Casares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1729803515508!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> -->
    
    

  </div>
</template>

<style scoped>

</style>