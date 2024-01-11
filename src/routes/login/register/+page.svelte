<script lang="ts">
    import {goto} from "$app/navigation";

    export let username: string = ""
    export let email: string = ""
    export let password: string = ""
    export let confirmPassword: string = ""
    export let name: string = ""
    export let surname: string = ""


    async function postRegister(login: string, email: string, haslo: string, potwierdzHaslo: string, imie: string, nazwisko: string) {
        let url = 'http://localhost:8080/users';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                haslo: haslo,
                potwierdzHaslo: potwierdzHaslo,
                login: login,
                imie: imie,
                nazwisko: nazwisko
            })
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                alert("Niepoprawnie podane dane");
                throw new Error('response not ok');
            }
            await goto('/login')
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    export function signup() {
        postRegister(username, email, password, confirmPassword, name, surname)
    }
</script>

<div class="inline-block">
    <form on:submit|preventDefault={signup} class="form">

        <label class="label" for="login">
            <span>Nazwa użytkownika</span>
            <input bind:value={username} class="input" type="text" placeholder="Podaj swoją nazwę użytkownika (login)"/>
        </label>

        <label class="label" for="email">
            <span>Email</span>
            <input bind:value={email} class="input" type="email" placeholder="Podaj swój email"/>
        </label>

        <label class="label" for="password">
            <span>Hasło</span>
            <input bind:value={password} class="input" type="password" placeholder="Podaj hasło" />
        </label>
        <label class="label" for="confirmPassword">
            <span>Potwierdź hasło</span>
            <input bind:value={confirmPassword} class="input" type="password" placeholder="Podaj ponownie hasło" />
        </label>

        <label class="label" for="imie">
            <span>Imię</span>
            <input bind:value={name} class="input" type="text" placeholder="Podaj swoje imię"/>
        </label>

        <label class="label" for="nazwisko">
            <span>Nazwisko</span>
            <input bind:value={surname} class="input" type="text" placeholder="Podaj swoje nazwisko"/>
        </label>

        <br>
        <button type="submit" class="btn variant-filled">Zarejestruj się</button>
    </form>
</div>