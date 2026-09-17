<svelte:body />

    <img class="real-img" src="/assets/real1.png" />

<a href="/Game">Game</a>

<style>
:global(body){
    /* https://www.w3schools.com/howto/howto_css_full_page.asp */
 background-image: url("/assets/clouds.gif");
    height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
 a{
display: inline-block;  
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