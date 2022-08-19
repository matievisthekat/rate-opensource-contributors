<script>
	import githubImg from '$lib/assets/github.png';
</script>

<nav>
	<a href='/about'>About</a>
	<a href='/top'>Top Users</a>
	<a href='/login?next=/review'>Leave a Rating</a>
	<a href='https://github.com/matievisthekat/rate-opensource-contributors' rel='external'>
		<img src={githubImg} alt='GitHub' />
	</a>
</nav>

<slot></slot>
