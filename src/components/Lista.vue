<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Cras justo odio
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in
                <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Morbi leo risus
                <span class="badge bg-primary rounded-pill">1</span>
            </li>
        </ul>
        <button>
            <div class="card" style="width: 12rem;">
                 <img class="card-img-top" alt="Vue logo" src="../assets/LogoBuur.png">
                 <div class="card-body">
                     <p class="card-text">Hamburguesa</p>
                 </div>
            </div>
        </button>

        <button>
             <div class="card" style="width: 12rem;">
                 <img class="card-img-top" alt="Vue logo" src="../assets/bebita.png">
                 <div class="card-body">
                     <p class="card-text">Bebidas</p>
                 </div>
            </div>
        </button>

         <button>
             <div class="card" style="width: 12rem;">
                 <img class="card-img-top" alt="Vue logo" src="../assets/papa.png">
                 <div class="card-body">
                     <p class="card-text">Acompañamientos</p>
                 </div>
            </div>
        </button>
    </div>
</template>

<script>
export default {
  name: 'Lista',
}
</script>

