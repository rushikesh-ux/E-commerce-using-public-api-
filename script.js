let url = "https://dummyjson.com/products";
let cardContainer = document.getElementById("cardContainer");

fetch(url)
    .then((response) => response.json())
    .then((contents) => {
        console.log(contents);
        let ihtml = "";
        for (let index in contents.products) {
            const product = contents.products[index];
            ihtml += `
                <div class="col-md-4 mb-4 product-card" data-category="${product.category.toLowerCase()}">
                    <div class="card h-100">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text"><b>Category:</b> ${product.category}</p>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                            <a href="#" class="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                </div>
            `;
        }
        cardContainer.innerHTML = ihtml;
    })
    .catch(error => {
        console.error("Failed to fetch products:", error);
        cardContainer.innerHTML = "<p class='text-danger'>Something went wrong loading the products.</p>";
    });


document.querySelector("input[type='search']").addEventListener("input", function () {
    let query = this.value.toLowerCase().trim();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let category = card.getAttribute("data-category");
        if (category.includes(query) || query === "") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
});
