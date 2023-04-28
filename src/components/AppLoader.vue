<script>
export default {
    name: "AppLoader"
};
</script>

<template>
    <section class="container-fluid py-4 layover">
        <!-- <h1>LOADER</h1> -->
        <div class="row">

            <div class="col-xs-12">
                <div class="well">
                    <div class="ex-13-button">
                        <div class="ex-13-top-black"></div>
                        <h3 class="p-3">LOADING</h3>
                        <div class="ex-13-bottom-black"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.layover {
    position: fixed;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 99;
    backdrop-filter: blur(10px);
}

/* Esercizio 13 */
.ex-13-top-black {
    animation-name: long-line;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes long-line {
    0% {
        top: -10px;
        left: 10%;
    }

    30% {
        top: -10px;
        left: 91%;
    }

    50% {
        top: 62px;
        left: 91%;
    }

    70% {
        top: 62px;
        left: -8%;
    }

    90% {
        top: -19px;
        left: -8%;
    }

    100% {
        top: -10px;
        left: 10%;
    }
}

.ex-13-bottom-black {
    animation-name: bottom-long-line;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

@keyframes bottom-long-line {
    0% {
        bottom: -10px;
        right: 20%;
    }

    30% {
        bottom: -10px;
        right: 78%;
    }

    50% {
        bottom: 63px;
        right: 78%;
    }

    70% {
        bottom: 63px;
        right: -26%;
    }

    90% {
        bottom: -13px;
        right: -26%;
    }

    100% {
        bottom: -10px;
        right: 20%;
    }
}

.ex-13-button {
    position: relative;
    display: block;
    width: 200px;
    height: 70px;
    text-transform: uppercase;
    color: #dcefff;
    font-size: 20px;
    line-height: 70px;
    text-align: center;
    text-decoration: none;
}

.ex-13-top-black {
    position: absolute;
    top: -10px;
    left: 10%;
    background: #dcefff;
    width: 60px;
    height: 20px;
}

.ex-13-bottom-black {
    position: absolute;
    bottom: -10px;
    right: 20%;
    background: #dcefff;
    width: 60px;
    height: 20px;
}
</style>