


<div class="container">
    <div class="container-links">
        <a href="/game/siblings">Siblings</a>
        <a href="/game/afkomst">Afkomst</a>
    </div>
    <img class="siblings-img" src="/assets/siblings-img.png" alt="siblings-img"/>
    <div class="container-rechts">
        <a href="/game/believes">Believes</a>
        <a href="/game/weakness">Weakness</a>
    </div>
</div>

<style>
   
  

    .container {
		display: grid;
		grid-template-columns: auto 500px auto;
		align-items: center;
		justify-content: center;
	}
    .container-links,
    .container-rechts {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .siblings-img {
        width: 500px;
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
