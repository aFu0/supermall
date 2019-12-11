<template>
  <div class="gka-wrap" v-show="showLoading" @click.stop @touchmove.prevent>
    <div class="animation"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'loading',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    })
  }
}
</script>

<style lang="scss" scoped>
.gka-wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.animation {
    position: fixed;
    top: 50%;
    left: 50%;
    margin: auto;
    background-image: url("./img/sprites.png");
    background-size: 31500px 100px;
    background-repeat: no-repeat;
    animation-name: keyframes-loading;
    animation-duration: 3s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: steps(1);
    transform: scale(0.2) translate(-50%, -50%);
    transform-origin: 0 0;
}

@keyframes keyframes-loading {
    0% {
        width: 420px;
        height: 420px;
        background-image: url("./img/sprites.png");
        background-size: 31500px 420px;
    }

    1.33% {
        background-position: -420px 0px;
    }

    2.67% {
        background-position: -840px 0px;
    }

    4.00% {
        background-position: -1260px 0px;
    }

    5.33% {
        background-position: -1680px 0px;
    }

    6.67% {
        background-position: -2100px 0px;
    }

    8.00% {
        background-position: -2520px 0px;
    }

    9.33% {
        background-position: -2940px 0px;
    }

    10.67% {
        background-position: -3360px 0px;
    }

    12.00% {
        background-position: -3780px 0px;
    }

    13.33% {
        background-position: -4200px 0px;
    }

    14.67% {
        background-position: -4620px 0px;
    }

    16.00% {
        background-position: -5040px 0px;
    }

    17.33% {
        background-position: -5460px 0px;
    }

    18.67% {
        background-position: -5880px 0px;
    }

    20.00% {
        background-position: -6300px 0px;
    }

    21.33% {
        background-position: -6720px 0px;
    }

    22.67% {
        background-position: -7140px 0px;
    }

    24.00% {
        background-position: -7560px 0px;
    }

    25.33% {
        background-position: -7980px 0px;
    }

    26.67% {
        background-position: -8400px 0px;
    }

    28.00% {
        background-position: -8820px 0px;
    }

    29.33% {
        background-position: -9240px 0px;
    }

    30.67% {
        background-position: -9660px 0px;
    }

    32.00% {
        background-position: -10080px 0px;
    }

    33.33% {
        background-position: -10500px 0px;
    }

    34.67% {
        background-position: -10920px 0px;
    }

    36.00% {
        background-position: -11340px 0px;
    }

    37.33% {
        background-position: -11760px 0px;
    }

    38.67% {
        background-position: -12180px 0px;
    }

    40.00% {
        background-position: -12600px 0px;
    }

    41.33% {
        background-position: -13020px 0px;
    }

    42.67% {
        background-position: -13440px 0px;
    }

    44.00% {
        background-position: -13860px 0px;
    }

    45.33% {
        background-position: -14280px 0px;
    }

    46.67% {
        background-position: -14700px 0px;
    }

    48.00% {
        background-position: -15120px 0px;
    }

    49.33% {
        background-position: -15540px 0px;
    }

    50.67% {
        background-position: -15960px 0px;
    }

    52.00% {
        background-position: -16380px 0px;
    }

    53.33% {
        background-position: -16800px 0px;
    }

    54.67% {
        background-position: -17220px 0px;
    }

    56.00% {
        background-position: -17640px 0px;
    }

    57.33% {
        background-position: -18060px 0px;
    }

    58.67% {
        background-position: -18480px 0px;
    }

    60.00% {
        background-position: -18900px 0px;
    }

    61.33% {
        background-position: -19320px 0px;
    }

    62.67% {
        background-position: -19740px 0px;
    }

    64.00% {
        background-position: -20160px 0px;
    }

    65.33% {
        background-position: -20580px 0px;
    }

    66.67% {
        background-position: -21000px 0px;
    }

    68.00% {
        background-position: -21420px 0px;
    }

    69.33% {
        background-position: -21840px 0px;
    }

    70.67% {
        background-position: -22260px 0px;
    }

    72.00% {
        background-position: -22680px 0px;
    }

    73.33% {
        background-position: -23100px 0px;
    }

    74.67% {
        background-position: -23520px 0px;
    }

    76.00% {
        background-position: -23940px 0px;
    }

    77.33% {
        background-position: -24360px 0px;
    }

    78.67% {
        background-position: -24780px 0px;
    }

    80.00% {
        background-position: -25200px 0px;
    }

    81.33% {
        background-position: -25620px 0px;
    }

    82.67% {
        background-position: -26040px 0px;
    }

    84.00% {
        background-position: -26460px 0px;
    }

    85.33% {
        background-position: -26880px 0px;
    }

    86.67% {
        background-position: -27300px 0px;
    }

    88.00% {
        background-position: -27720px 0px;
    }

    89.33% {
        background-position: -28140px 0px;
    }

    90.67% {
        background-position: -28560px 0px;
    }

    92.00% {
        background-position: -28980px 0px;
    }

    93.33% {
        background-position: -29400px 0px;
    }

    94.67% {
        background-position: -29820px 0px;
    }

    96.00% {
        background-position: -30240px 0px;
    }

    97.33% {
        background-position: -30660px 0px;
    }

    98.67%,
    100% {
        background-position: -31080px 0px;
    }
}
</style>
