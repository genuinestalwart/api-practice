window.addEventListener('load', () => {
    showdata();
});

function showdata() {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('random-user-container').innerHTML = `
            <section class="random-user my-3 p-3 p-md-4 rounded-3">
                <div class="mx-auto mt-3 w-50"><img class="rounded-3" src="${user.picture.large}" alt="random user picture"></div>
                <div class="mt-4">
                    <p>Location: ${user.location.city}, ${user.location.state}, ${user.location.country}</p>
                    <p>Coordinates: ${user.location.coordinates.latitude} latitude, ${user.location.coordinates.longitude} longitude</p>
                    <button type="button" class="btn btn-info my-3 w-100" id="fetch-user" onclick="showdata()">Fetch user</button>
                </div>
            </section>

            <section class="random-user my-3 p-3 p-md-4 rounded-3">
                <h3 class="fw-bold my-3">Information</h3>
                <div>
                    <h5 class="my-3">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p>Username: ${user.login.username}</p>
                    <p>Gender: ${user.gender}</p>
                    <p>Date of Birth: ${user.dob.date.split('T')[0]}</p>
                    <p>Nationality: ${user.nat}</p>
                </div>
                <h3 class="fw-bold my-3">Contact</h3>
                <div>
                    <p>Email: ${user.email}</p>
                    <p>Cell: ${user.cell}</p>
                    <p>Phone: ${user.phone}</p>
                </div>
            </section>`;
        });
}