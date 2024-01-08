<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import {onMount} from "svelte";


	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import {isLoggedIn, logout, getPermissions} from "./ciastka";
	// onMount(logout)

	let isLogged = false

	if (isLoggedIn()) {
		isLogged = true
	} else {
		isLogged = false
	}


	export function wylogujSie() {
		logout()
		window.location.reload()

	}



</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/">
				<strong class="text-xl uppercase">Steal Deals</strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/katalog"
					rel="noreferrer"
				>
					Katalog gier
				</a>

				{#if isLogged}
					<a
							class="btn btn-sm variant-ghost-surface"
							href="/zamowienia"
							rel="noreferrer">
						Moje zamówienia
					</a>

					<a
							class="btn btn-sm variant-ghost-surface"
							href="/"
							rel="noreferrer"
							on:click = {wylogujSie}
					>
						Wyloguj się
					</a>
				{:else}
				<a
					class="btn btn-sm variant-ghost-surface"
					href="/login"
					rel="noreferrer"
				>
					Zaloguj się
				</a>
				{/if}

				{#if getPermissions() == 'pracownik'}
					<a
							class="btn btn-sm variant-ghost-surface"
							href="/dodajProdukt"
							rel="noreferrer"
					>
						Dodaj produkt
					</a>
				{/if}

				<LightSwitch>

				</LightSwitch>

			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
