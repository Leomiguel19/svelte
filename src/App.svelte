<script>
	export let name;
	export let lastName;
    let svelteLogo = " https://arepa.s3.amazonaws.com/svelte-logo.png";
    import About from "./components/About.svelte";
    import ButtonCount from "./components/ButtonCount.svelte";
    import Input from "./components/Input.svelte";
    import Person from "./components/Person.svelte";
    import Photos from "./components/Photos.svelte";
    import Skills from "./components/Skills.svelte";
    import Text from "./components/Text.svelte";

    const data = {
        name: "Leonardo",
        lastName: "Guilarte",
        age: "24"
    }
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
    <About />
    <Text anotherText="Hola!" />
    <Text />
    <Person {...data}/>
    <Skills/>
    <Input />
    <ButtonCount />
    <Photos/>
    <img src={svelteLogo} alt="Svelte">
</main>

<style>
    :global(body){
        background-color: #f2eeef;
        color: #0084f6;
    }
    :global(:root){
        --theme-color: purple;
    }

    :global(body.dark-mode){
        background-color: #1d3040;
        color: #bfc2c7;
    }
    p{
        color: var(--theme-color);
        font-size: 22px;
    }
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

    main img {
        width: 30%;
    }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>