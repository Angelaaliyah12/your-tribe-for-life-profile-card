<script>
    let { data } = $props();
 // svelte-ignore state_referenced_locally
 const person= data.person;
</script>
<header>
    <img src="/assets/home-icon.png" alt="home-icon"/>
</header>
<img src="/assets/head.png" alt="hoofd-img"/>

<p>Name:{person.nickname}</p>
<p>Birthday: {person.birthdate}</p>
<p>Github handle: {person.github_handle}</p>
<p>Fav color: Light blue </p>