<template>
    <p class="suscripcion">Suscribete para recibir notificaciones de nuestros productos</p>
    <form action="" class="form">
        <div class="form--input">
            <img src="../assets/IMG-20221125-WA0010.jpg" alt="">
        </div>
        <label for="">Nombre</label>
        <input type="text" name="" id="">
        <label for="">Correo electronico</label>
        <input type="email" name="" id="">
        <label for="">Contrasena</label>
        <input type="password" name="" id="">
        <button class="submit">Suscribirse</button>
        
    </form>
</template>

<style>
.suscripcion{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    color: #ff35c2;
    font-size: 20px;
    font-weight: 700;
}
.form{
    width: 30%;
    margin: 5% auto;
    display: flex;
    background-color: #fc9393;
    flex-wrap: wrap;
    border-radius: 10px;
}
.form--input{
    width: 70%;
    margin: 10px auto;
    display: flex;
}
.form--input img{
    width: 100%;
    border-radius: 10px;
    display: flex;
}
.form input{
    width: 70%;
    margin:5px auto;
    border: 2px solid #4fa8fb;
    border-radius: 6px;
    padding: 10px;
    color: white;
    font-size: 16PX;
}

.form input:focus{
    width: 70%;
    margin:5px auto;
    outline: none;
    border: 2px solid #4fa8fb;
    background-color:#fcaaaa;
    border-radius: 6px;
}
.form .submit{
    width: 50%;
    margin: 5px auto;
    border: 2px solid white;
    border-radius: 6px;
    color: white;
    padding: 10px;
    background:linear-gradient(to top left, #4fa8fb, #ff35c2);
}
.form .submit:active{
    width: 50%;
    margin: 5px auto;
    border: 2px solid white;
    border-radius: 6px;
    background:linear-gradient(to bottom left, #ff35c2,#4fa8fb);
}
.form label{
    width: 70%;
    margin: auto;
    color: white;
    font-weight: 700;
}
@media (max-width: 768px){
    .form{
    width: 55%;
    margin: 5% auto;
    display: flex;
    background-color: #fc9393;
    flex-wrap: wrap;
    border-radius: 10px;
   }
}
@media (max-width: 528px){
    .form{
    width: 85%;
    margin: 5% auto;
    display: flex;
    background-color: #fc9393;
    flex-wrap: wrap;
    border-radius: 10px;
   }
}
</style>