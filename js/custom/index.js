$(document).ready(function() {
    for (let data of datas) {
        var elementItem = $('<div/>', {
            class: 'col-12 col-md-6 col-xl-4'
        });
        elementItem.html(`
        <div class="single-featured-property mb-50 wow fadeInUp" data-wow-delay="100ms">
            <div class="property-thumb">
                <img src="img/bg-img/feature1.jpg" alt="">

                <div class="tag">
                    <span>Giá tốt</span>
                </div>
                <div class="list-price">
                    <p>Giá: ${data.infos.price}</p>
                </div>
            </div>
            <div class="property-content">
                <h5>${data.infos.name}</h5>
                <p class="location"><img src="img/icons/location.png" alt="">${data.infos.address}</p>
                <div class="property-meta-data d-flex align-items-end justify-content-between">
                    <div class="bathroom">
                        <span>${data.infos.status}</span>
                    </div>
                    <div class="new-tag">
                        <img src="img/icons/phone-call.png" alt="">
                    </div>
                </div>
            </div>
        </div>`);
        $(`#${data.filter}`).append(elementItem);
    }

});