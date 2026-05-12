<script setup>
defineProps({
  modelValue: String,
  placeholder: String,
  type: { default: "text" },
});

defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="border p-2 w-full mb-2 rounded"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
