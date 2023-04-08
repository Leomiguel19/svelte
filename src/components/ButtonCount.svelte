<script>
    import {count} from '../store/store.js'

    function handlclick(){
        count.update(n => n + 1);
    }
</script>

<button on:click={handlclick}>Click {$count === 0 ? '' : $count}</button>

<style>
    button {
        background-color: #f76027;
        color: white;
        border: none;
        border-radius: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>