<script>
    import ContactMap from '../components/ContactMap.vue';
    import ContactMessage from '../components/ContactMessage.vue';
    import ContactNav from '../components/ContactNav.vue';

    export default{
        components: { ContactMap, ContactMessage, ContactNav },
    }
</script>

<template>
    <ContactNav />
    <ContactMap class=" px-4 sm:px-0 " />
    <ContactMessage  class=" px-4 sm:px-0" />
</template>