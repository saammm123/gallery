document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery-image').forEach(image => {
        image.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
