<img src="/assets/head.png" alt="hoofd-img"/>
<script>
    let { data } = $props();

    // svelte-ignore state_referenced_locally
    const person = data.person;
</script>

<h1>{person.nickname}</h1>