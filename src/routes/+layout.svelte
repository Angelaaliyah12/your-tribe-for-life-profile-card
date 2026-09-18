<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
       // https://svelte.dev/blog/view-transitions

	import { onNavigate } from '$app/navigation';

onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>
{@render children()}

<style>	
:global(html),
	:global(body) {
                      cursor: url('/assets/heart-outline.svg'), auto;
	}

	:global(a),
	:global(button) {
                      cursor: url('/assets/heart-outline.svg'), auto;
	}
/* https://css-tricks.com/7-view-transitions-recipes-to-try/ */
@media (prefers-reduced-motion: no-preference) {
		:global(::view-transition-old(root)) {
			animation: circle-wipe-out 1s ease forwards;
		}

		:global(::view-transition-new(root)) {
			animation: circle-wipe-in 1s ease forwards;
		}
	}

	@keyframes circle-wipe-out {
		to {
			clip-path: circle(0% at 50% 50%);
		}
	}

	@keyframes circle-wipe-in {
		from {
			clip-path: circle(0% at 50% 50%);
		}

		to {
			clip-path: circle(150% at 50% 50%);
		}
	}
	</style>