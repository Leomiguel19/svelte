<script>
    let text = 'Frontend Developer self-taught';
    let count = 0;

    function handleClick(){
        count += 1;
    }
</script>

<div class="about">
    <p>{text}</p>
    <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
</div>

<style>
    .about{
        color: var(--theme-color);
    }
</style>