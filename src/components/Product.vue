<template>
    <h2>Listagem</h2>

    <div class="container">
        <h3>{{pname}}</h3>
        <h2>{{pamount}}</h2>
        <h2>{{pprice}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'product',
        props: {
            pname: {
                type: String
            },
            pamount: {
                type: String
            },
            pprice: {
                type: String
            }
        }
    }
</script>