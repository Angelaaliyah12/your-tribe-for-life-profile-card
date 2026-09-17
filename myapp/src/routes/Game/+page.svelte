<svelte:body />

<h1>Angel</h1>



<img class="game-img" src="/assets/game1.png"/>
   


<style>
:global(body){
 background-image: url("/assets/clouds.gif");
    height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;}

    a{
        text-decoration: none;
padding: 10px 20px;
background-color: white;
border-radius: 10px;
transition: transform 0.2s ease;
&:hover{
    transform: scale(1.3);
}
}
</style>
