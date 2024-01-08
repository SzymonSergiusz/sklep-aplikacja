<script lang="ts">
    import {goto} from '$app/navigation'

    import {login} from "../ciastka";

    let email: string = '';
    let password: string = '';

    async function postDataWithAuth(username: string, password: string) {
        let url = 'http://localhost:8080/login'
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));

        const requestOptions = {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: JSON.stringify('')
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    }

    async function handleSubmit(event: Event) {
        event.preventDefault();
        try {
            const response = await postDataWithAuth(email, password);
            console.log('Success:', response);

            //here set cookies
            login(response.uprawnienia)

            await goto('/')
            window.location.reload()
        } catch (error) {
            console.error('Error:', error);
            alert('niepoprawne dane logowania')
        }
    }
</script>

<div class="logform inline-block">
    <form on:submit|preventDefault={handleSubmit} class="form">
        <label class="label" for="email">
            <span>Email</span>
            <input bind:value={email} class="input" type="email" placeholder="Podaj nazwę użytkownika"/>
        </label>

        <label class="label" for="password">
            <span>Hasło</span>
            <input bind:value={password} class="input" type="password" placeholder="Wpisz hasło" />
        </label>
        <br>
        <button type="submit" class="btn variant-filled">Zaloguj się</button>
    </form>
</div>

<style>
    .logform {
        padding: 5px;
        margin: 5px;
    }
</style>
