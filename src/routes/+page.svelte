<svelte:body />

<div class="start-container">
    <img class="real-img" src="/assets/real1.png" alt="profilecard-img" />

    <a href="/game/game">Game modus</a>
</div>

<style>
    :global(body) {
        /* https://www.w3schools.com/howto/howto_css_full_page.asp */
        background-image: url("/assets/clouds.gif");
        height:100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
}
    
    .start-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 35px;
    }
    .real-img {
        width: 340px;
        height: auto;
    }
    a {

        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        width: 100px;
        margin-right: 90px;
        background-color: white;
        border-radius: 10px;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
</style>
