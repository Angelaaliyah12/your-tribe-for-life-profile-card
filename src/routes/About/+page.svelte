<script>
    let { data } = $props();
    // svelte-ignore state_referenced_locally
    const person = data.person;
</script>

<svelte:body />

<header>
<a href="/game/game">
    Home <img class="home-icon" src="/assets/home-icon.png" alt="home-icon" />
</a>
</header>
<main>
    <img src="/assets/head.png" alt="hoofd-img" />

    <dl>
        <div>
            <dt>Name:</dt>
            <dd>{person.nickname}</dd>
        </div>

        <div>
            <dt>Birthday:</dt>
            <dd>{person.birthdate}</dd>
        </div>

        <div>
            <dt>Github handle:</dt>
            <dd>{person.github_handle}</dd>
        </div>

        <div>
            <dt>Fav color:</dt>
            <dd>Light blue</dd>
        </div>
    </dl>
</main>

<style>
@view-transition{
    navigation:auto;
}
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
        display: flex;
justify-content: flex-end;      
    }
    a {
        display:flex;
        align-items: center;
          gap: 15px;
        text-decoration: none;
        color:black;
    }
    .home-icon {
        width: 50px;
        height: auto;
        transition: transform 0.2s ease;
        &:hover{
transform: scale(1.3);
        }
    }
    main {
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    dl {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 40px;
        font-weight: 500;

    }
    dl div {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
    }
</style>
