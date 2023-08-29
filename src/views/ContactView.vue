<script>
    import Map from '../components/Map.vue';
    import Message from '../components/Message.vue';
    import Link from '../components/Link.vue';

    export default{
        components: { Map, Message, Link }
    }
</script>

<template>
    <Map class=" px-4 sm:px-0" />
    <Message  class=" px-4 sm:px-0" />
    <Link  class=" px-4 sm:px-0" />
</template>