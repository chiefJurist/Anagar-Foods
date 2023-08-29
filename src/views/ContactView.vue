<script>
    import ContactMap from '../components/ContactMap.vue';
    import ContactMessage from '../components/ContactMessage.vue';

    export default{
        components: { ContactMap, ContactMessage }
    }
</script>

<template>
    <Map class=" px-4 sm:px-0" />
    <ContactMessage  class=" px-4 sm:px-0" />
    <Link  class=" px-4 sm:px-0" />
</template>