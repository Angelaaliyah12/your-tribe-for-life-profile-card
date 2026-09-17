<svelte:body />

<h1>Angel</h1>

<div class="container">
    <div class="container-links">
        <a href="/Siblings">Siblings</a>
        <a href="/Afkomst">Afkomst</a>
    </div>
    <img class="believes-img" src="/assets/cross1.1.png" />
    <div class="container-rechts">
        <a href="/Believes">Believes</a>
        <a href="/Weakness">Weakness</a>
        <a href="/">Reset</a>
    </div>
</div>

<style>
    :global(body) {
        background-image: url("/assets/clouds.gif");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    h1 {
        display: flex;
        justify-self: center;
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

    .believes-img {
        width: 230px;
        height: auto;
    }
    a {
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
