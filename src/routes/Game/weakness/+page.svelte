


<div class="container">
    <div class="container-links">
        <a href="/game/siblings">Siblings</a>
        <a href="/game/afkomst">Afkomst</a>
    </div>
    <img class="weakness-img" src="/assets/blind-img.png" alt="glasses-charcter img" />
    <div class="container-rechts">
        <a href="/game/believes">Believes</a>
        <a href="/game/weakness">Weakness</a>
    </div>
</div>

<style>
  .container {
		display: grid;
		grid-template-columns: 100px 230px 100px;
		align-items: center;
		justify-content: center;
	}

    .container-links,
    .container-rechts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .weakness-img {
        width: 350px;
        height: auto;
    }
    .container a {
        text-decoration: none;
        padding: 10px 20px;
        background-color: white;
        border-radius: 10px;
        color:black;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.3);
        }
    }
</style>
