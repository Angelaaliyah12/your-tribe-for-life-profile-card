<svelte:body />

<header>

<a class="header-link" href="/">
    <img class="header-icon" src="/assets/home-icon.png" alt="home-icon" /> 
    <p class="header-tekst">Home page</p>
</a>
<a class="header-link" href="/about">
    <p class="header-tekst">About me</p>
    <img class="header-icon" src="/assets/about-icon.png" alt="about-me-icon" />
</a>

</header>

<main class="container">
    <nav class="container-links">
        <a href="/siblings">Siblings</a>
        <a href="/afkomst">Afkomst</a>
    </nav>

    <img class="game-img" src="/assets/game1.png" alt="pixel-img"/>

    <nav class="container-rechts">
        <a href="/believes">Believes</a>
        <a href="/weakness">Weakness</a>
    </nav>
</main>

<style>
    :global(body) {
        background-image: url("/assets/clouds.gif");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 50px;
        margin-right: 50px;
    }
    header{
        display:flex;
        justify-content: space-between;
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

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container-links,
    .container-rechts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .game-img {
        width: 250px;
        height: auto;
    }
    .container a {
        color:black;
        text-decoration: none;
        padding: 10px 20px;
        background-color: white;
        border-radius: 10px;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
</style>
