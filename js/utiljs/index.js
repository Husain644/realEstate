import {property} from '../../data/propertydata.js'
(function ($) {
    "use strict";
//   var locations=[
//     "sector 4","sector 5","sector 6","sector 7","sector 8","sector 9","Rampura","kisaan vatika","gokalgarh",
//     "RajaGarden","Kutubpura","new colony","pilot Chowk"
//   ]
//     document.addEventListener('DOMContentLoaded', e => {
//         $('#locations-input-selection').autocomplete({source:locations});
//     }, false);

//       var tags = [ 
//                  "Washington", "Cincinnati", 
//                  "Dubai", "Dublin", "Colombo", 
//                  "Culcutta" 
//             ]; 
                 
//             $('#locations-input-selection').autocomplete({ 
//                 source : tags,               
//                 select : showResult, 
//                 focus : showResult, 
//                 change :showResult 
//             }) 
                   
//             function showResult(event, ui) { 
//                 $('#cityName').text(ui.item.label) 
//             } 

    $('#all-properties').html(
        property.map((items,index)=>{
            return(
                `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="property-item rounded overflow-hidden">
                    <div class="position-relative overflow-hidden">
                        <a href=""><img class="img-fluid" src=${items.images[0]} alt=""></a>
                        <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${items.for}</div>
                        <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                            ${items.type}
                        </div>
                    </div>
                    <div class="p-4 pb-0">
                        <h5 class="text-primary mb-3">${items.price}</h5>
                        <a class="d-block h5 mb-2" href="">
                           ${items.name}
                        </a>
                        <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${items.location}</p>
                    </div>
                    <div class="d-flex border-top">
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>
                        ${items.area}
                        </small>
                        <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>
                        ${items.additional_details.total_rooms}
                        </small>
                        <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>
                        ${items.additional_details.washrooms}
                        </small>
                    </div>
                </div>
            </div>`
            )
        })
    
    
    )

})(jQuery);

//   <option selected>Property Type</option>