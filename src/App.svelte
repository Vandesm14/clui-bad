<script>
  import Clui from './Clui.svelte';
	const create = (selector) => {
    const clui = new Clui({
      target: document.querySelector(selector)
    });
  };

  window.create = create;
</script>