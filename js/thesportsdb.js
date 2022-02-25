window.addEventListener('load', () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('g-5', 'row');

            data.sports.forEach(el => {
                const childDiv = document.createElement('div');
                childDiv.classList.add('col-12', 'col-md-4');
                childDiv.innerHTML = `
                <div class="border border-primary h-100 p-3 rounded-3 sports">
                    <div><img class="rounded-3" src="${el.strSportThumb}" alt="${el.strSport}"></div>
                    <div>
                        <div class="align-items-center d-flex justify-content-between my-3 pe-4">
                            <h4 class="fw-bold mb-0">${el.strSport}</h4>
                            <div><img src="${el.strSportIconGreen}" alt="${el.strSport}"></div>
                        </div>
                        <p>${el.strSportDescription.slice(0, 512) + (el.strSportDescription.length > 512 ? '...' : '')}</p>
                    </div>
                </div>`;
                div.appendChild(childDiv);
            });

            addData(div);
        });

    document.getElementById('search-button').addEventListener('click', () => {
        document.getElementById('sports-container').innerHTML = '';
        setTimeout(searchdata, 50);
    });
});

function searchdata() {
    const searchInput = document.getElementById('search-input').value;
    let found = false;
    document.getElementById('loading-spinner').style.display = 'flex';
    document.getElementById('not-found').style.display = 'none';

    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('g-5', 'row');

            data.sports.forEach(el => {
                if (searchInput !== '' && el.strSport.toLowerCase().includes(searchInput.toLowerCase())) {
                    found = true;
                    const childDiv = document.createElement('div');
                    childDiv.classList.add('col-12', 'col-md-4');
                    childDiv.innerHTML = `
                    <div class="border border-primary h-100 p-3 rounded-3 sports">
                        <div><img class="rounded-3" src="${el.strSportThumb}" alt="${el.strSport}"></div>
                        <div>
                            <div class="align-items-center d-flex justify-content-between my-3 pe-4">
                                <h4 class="fw-bold mb-0">${el.strSport}</h4>
                                <div><img src="${el.strSportIconGreen}" alt="${el.strSport}"></div>
                            </div>
                            <p>${el.strSportDescription.slice(0, 512) + (el.strSportDescription.length > 512 ? '...' : '')}</p>
                        </div>
                    </div>`;
                    div.appendChild(childDiv);
                }
            });

            if (!(found)) {
                setTimeout(function () {
                    document.getElementById('loading-spinner').style.display = 'none';
                    document.getElementById('not-found').style.display = 'block';
                }, 0);
            } else {
                setTimeout(function () {
                    addData(div);
                }, 375);
            }
        });
}

function addData(div) {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('not-found').style.display = 'none';
    document.getElementById('sports-container').appendChild(div);
}