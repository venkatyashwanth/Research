$(document).ready(function () {
    let navBtns = $(".nav-link");
    $(navBtns).click(function (e) {
        $(navBtns).removeClass("active");
        e.target.classList.add('active');
        let lastItem = $('#lastBoxItem')[0];
        // console.log(lastItem);
        // $(lastItem).scrollTop(0);
        // let position = $("#getLastItem").scrollTop();
        // console.log(position);
    })
    $('#contentBoxWrapper').scroll(() => {
        // let cur_top = $('#contentBox').scrollTop();
        let contentBoxes = $(".content-box");
        $(contentBoxes).each(function () {
            let currentEl = $(this);
            let positionEl = $(currentEl).offset().top;
            if (positionEl >= 0 && positionEl <= 10) {
                $(navBtns).removeClass("active");
                let targetEl = currentEl[0].dataset.link;
                let targetId = `#${targetEl}`;
                $(targetId).addClass('active');
                // console.log(targetId);
            }
        })
        // let positionEl = $('#contentBox2').offset().top;
        
        // if (positionEl > 0 && positionEl < 1) {
        //     $(navBtns).removeClass("active");
        //     let targetEl = $('#contentBox2')[0].dataset.link;
        //     let targetId = `#${targetEl}`;
        //     console.log(targetEl);
        //     // $(targetId).addClass('active');
        // }
        // // console.log(positionEl);
    })
}) 