
<main class="container">
    <nav class="container-links">
        <a href="/game/siblings">Siblings</a>
        <a href="/game/afkomst">Afkomst</a>
    </nav>

    <img class="game-img" src="/assets/game-img.png" alt="pixel-img"/>

    <nav class="container-rechts">
        <a href="/game/believes">Believes</a>
        <a href="/game/weakness">Weakness</a>
    </nav>
</main>

<style>

     .container {
		display: grid;
		grid-template-columns: 100px 160px 100px;
		align-items: center;
		justify-content: center;
	}
    .container-links,
    .container-rechts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .game-img {
        width: 300px;
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
