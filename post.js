function fetchData() {
    fetch('https://api.lanyard.rest/v1/users/616731583386353665').then(Response => {
        if(!Response.ok) {
            throw Error("ERROR");
        }
        return Response.json();
    }).then(
        data => {
        const fetch__name = `${data.data.discord_user.username}`;
        const fetch__discrim = `#${data.data.discord_user.discriminator}`;
        const fetch__pfp = `<img src="https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png?size=256" alt="pfp">`;
        
        document.querySelector('#profile__name')
        .insertAdjacentHTML('afterbegin', fetch__name);

        document.querySelector('#profile__discrim')
        .insertAdjacentHTML('afterbegin', fetch__discrim);

        document.querySelector('#profile__pfp')
        .insertAdjacentHTML('afterbegin', fetch__pfp);

        if (data.data.discord_status === "offline") {
            document.querySelector('#profile__status__content')
            .insertAdjacentHTML('afterbegin', 'Im offline rn ~');
        } else if (data.data.discord_status === "online", "idle", "dnd") {
            const fetch__status = `${data.data.activities[0].state}`;
            document.querySelector('#profile__status__content')
            .insertAdjacentHTML('afterbegin', fetch__status);
        }

        
    }).catch(error => {
        console.log(error)
    });
}

fetchData();