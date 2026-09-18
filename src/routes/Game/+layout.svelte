<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
    
</script>
<svelte:body />

<header>

<a class="header-link" href="/home">
    <img class="header-icon" src="/assets/home-icon.png" alt="home-icon" /> 
    <p class="header-tekst">Home page</p>
</a>
<a class="header-link" href="/about">
    <p class="header-tekst">About me</p>
    <img class="header-icon" src="/assets/about-icon.png" alt="about-me-icon" />
</a>

</header>

{@render children()}
<style>
    :global(body) {
        background-image: url("/assets/clouds.gif");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    
    header{
        display:flex;
        justify-content: space-between;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 25px;
    }
    .header-link{
        text-decoration: none;
        color: black;
        display:flex;
        gap: 15px;
    }
   
    .header-icon{
        width: 50px;
        height:auto;

        transition: transform 0.2s ease;
        &:hover{
transform: scale(1.3);
        }
    }
    
</style>