<script>
    import Button from "./Button.svelte";

    let text = 'Frontend Developer self-taught';
    let count = 0;
    let styles = {darkMode: false};

    function handleClick(){
        count += 1;
    }

    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle("dark-mode");
    }
</script>

<div class="about">
    {#if !styles.darkMode}
        <p>{text}</p>
    {:else}
        <p>Hello DarkMode</p>
    {/if}

    <Button text="Click" {count} on:click={handleClick}/>
    <Button text="DarkMode" on:click={toggle} />

    <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
    <button on:click={toggle}> {styles.darkMode ? "LightMode 🌞" : "DarkMode 🌒"}</button>
</div>

<style>
    .about{
        color: var(--theme-color);
    }
</style>