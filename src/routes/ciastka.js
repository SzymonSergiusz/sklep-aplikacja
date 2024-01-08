export function isLoggedIn() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('loggedIn') === 'true';
    }
}

export function getPermissions() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('permissions');
    }
}

export function login(permission) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('permissions', permission);
    }
}

export function logout() {
    if (typeof window !== 'undefined') {
        localStorage.setItem('loggedIn', 'false');
        localStorage.setItem('permissions', 'brak');
    }
}