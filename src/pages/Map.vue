<template>
    <section class="ubicacion">
        <p class="ubicacion--p">Estamos ubicados en en el mercado municipal de Nueva Guinea</p>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9925.09864880019!2d-84.4633835597008!3d11.690509433251469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f0b6d71a992e2e9%3A0x97b22272cb95fe80!2sMercado%20de%20Nueva%20Guinea!5e0!3m2!1ses-419!2sni!4v1669581599780!5m2!1ses-419!2sni" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section>
    
</template>

<style>
.ubicacion{
    width: 100%;
}
.ubicacion--p{
    width: 100%;
    text-align: center;
    font-size: 20px;
    color:  #f86f61;
    font-weight: 700;
    margin-top: 10px;
}
.map{
    width: 90%;
    height: 70vh;
    margin: 20px 5%;
    border-radius:10px ;
}
@media (max-width: 768px){
    .map{
        width: 98%;
        margin: 20px 1%;
    }
}
</style>